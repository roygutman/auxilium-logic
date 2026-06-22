"use server";

import { getAdminClient } from "@/lib/insforge";

const NOTIFY_EMAIL = "roie.gutman@gmail.com";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  loanVolume: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ error?: string }> {
  const admin = getAdminClient();

  // Save to DB (best-effort — table may not exist yet)
  await admin.database.from("contact_submissions").insert([
    {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      company: data.company,
      phone: data.phone,
      loan_volume: data.loanVolume,
      message: data.message,
    },
  ]);

  // Send notification email
  const { error } = await admin.emails.send({
    to: NOTIFY_EMAIL,
    subject: `New contact request — ${data.firstName} ${data.lastName}`,
    from: "Auxilium Logic",
    replyTo: data.email,
    html: `
      <h2>New Contact Request</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.company || "—"}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone || "—"}</td></tr>
        <tr><td><strong>Loan Volume</strong></td><td>${data.loanVolume || "—"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${data.message || "—"}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Failed to send contact notification email:", error.message);
    return { error: "Failed to send. Please try again." };
  }

  return {};
}
