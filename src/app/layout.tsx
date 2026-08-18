import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshatraj Kothalkar | Mechanical Engineering Student Portfolio",
  description: "Official portfolio of Akshatraj Kothalkar, Mechanical Engineering student at SNJB's College of Engineering, Chandwad. Specializing in automation, mechanical design, and manufacturing.",
  keywords: [
    "Akshatraj Kothalkar",
    "Akshatraj Kothalkar Portfolio",
    "Akshatraj Hemant Kothalkar",
    "Akshatraj Kothalkar Khamgaon",
    "Akshatraj Mechanical Engineer",
    "SNJB Mechanical Student",
    "Akshatraj Kothalkar Resume"
  ],
  authors: [{ name: "Akshatraj Kothalkar" }],
  creator: "Akshatraj Kothalkar",
  verification: {
    google: "CTrdIkvNQ44kuo4aUPzshD5HHg-f5jiKW57Mw6iRPx0",
  },
  openGraph: {
    title: "Akshatraj Kothalkar | Mechanical Engineering Portfolio",
    description: "Explore projects, certifications, and skills of Akshatraj Kothalkar.",
    type: "website",
    locale: "en_US",
    siteName: "Akshatraj Kothalkar Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}