import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description:
    "Official portfolio of Akshatraj Kothalkar, Mechanical Engineering student at SNJB's College of Engineering, Chandwad. Specializing in automation, mechanical design, and manufacturing.",
  keywords: [
    "Akshatraj Kothalkar",
    "Akshatraj Kothalkar Portfolio",
    "Akshatraj Hemant Kothalkar",
    "Akshatraj Kothalkar Khamgaon",
    "Akshatraj Mechanical Engineer",
    "SNJB Mechanical Student",
    "Akshatraj Kothalkar Resume",
  ],
  authors: [{ name: "Akshatraj Kothalkar" }],
  creator: "Akshatraj Kothalkar",

  verification: {
    google: "4blwEchb33VYqX-X6x28KJPAE_nYL-y7fmah6A4-XpQ",
  },

  openGraph: {
    title: "Akshatraj Kothalkar | Mechanical Engineering Portfolio",
    description:
      "Explore projects, certifications, and skills of Akshatraj Kothalkar.",
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
      <body className="min-h-full flex flex-col">

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P74JC75X');
          `}
        </Script>

        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P74JC75X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

      </body>
    </html>
  );
}