import { getSiteContent } from "@/lib/content";
import ContactPageClient from "./ContactPageClient";

export const revalidate = 60;

export default async function ContactPage() {
  const content = await getSiteContent();
  return <ContactPageClient content={content.contact} />;
}
