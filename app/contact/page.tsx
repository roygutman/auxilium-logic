import { getSiteContent } from "@/lib/content";
import ContactPageClient from "./ContactPageClient";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const content = await getSiteContent();
  return <ContactPageClient content={content.contact} />;
}
