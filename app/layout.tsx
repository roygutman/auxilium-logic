import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auxilium Logic — AI-Powered Mortgage Income Analysis",
  description:
    "Analyze borrower income, uncover qualifying opportunities, identify underwriting risks, and accelerate loan decisions in minutes instead of hours.",
  keywords:
    "mortgage broker, income analysis, AI underwriting, loan qualification, mortgage software, broker tools",
  openGraph: {
    title: "Auxilium Logic — AI-Powered Mortgage Income Analysis",
    description:
      "Analyze borrower income, uncover qualifying opportunities, and accelerate loan decisions with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
