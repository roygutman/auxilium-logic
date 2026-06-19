import { createClient, createAdminClient } from "@insforge/sdk";

export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

export const insforgeAdmin = createAdminClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  apiKey: process.env.INSFORGE_API_KEY!,
});
