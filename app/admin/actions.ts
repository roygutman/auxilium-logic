"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getAdminClient } from "@/lib/insforge";

const COOKIE = "admin_session";
const TTL = 60 * 60 * 24 * 7; // 7 days

export async function login(password: string): Promise<{ error?: string }> {
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Incorrect password." };
  }
  const jar = await cookies();
  jar.set(COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TTL,
    path: "/admin",
  });
  return {};
}

export async function logout() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function saveSection(key: string, value: unknown): Promise<{ error?: string }> {
  const jar = await cookies();
  if (jar.get(COOKIE)?.value !== "1") {
    return { error: "Not authenticated." };
  }
  const { error } = await getAdminClient().database
    .from("site_content")
    .upsert([{ key, value }], { onConflict: "key" });
  if (error) return { error: error.message };
  revalidatePath("/");
  revalidatePath("/contact");
  return {};
}

export async function isLoggedIn(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === "1";
}
