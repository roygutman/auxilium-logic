import { createClient, createAdminClient } from "@insforge/sdk";

export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

let _adminClient: ReturnType<typeof createAdminClient> | null = null;

export function getAdminClient() {
  if (!_adminClient) {
    if (!process.env.INSFORGE_API_KEY) throw new Error("INSFORGE_API_KEY is not set");
    _adminClient = createAdminClient({
      baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
      apiKey: process.env.INSFORGE_API_KEY,
    });
  }
  return _adminClient;
}
