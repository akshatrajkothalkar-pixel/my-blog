import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-blog-s3fe.vercel.app"),

  title: {
    default: "Akshatraj Kothalkar | Engineering Portfolio",
    template: "%s | Akshatraj Kothalkar",
  },

  description:
    "Official portfolio of Akshatraj Kothalkar — Mechanical Engineering student exploring mechanical design, manufacturing, automation, AI and engineering innovation.",

  keywords: [
    "Akshatraj Kothalkar",
    "Akshatraj Kothalkar Portfolio",
    "Akshatraj Hemant Kothalkar",
    "Akshatraj Mechanical Engineer",
    "Mechanical Engineering Student",
    "SNJB College of Engineering",
    "Mechanical Design",
    "CAD",
    "Manufacturing",
    "Automation",
    "Artificial Intelligence",
    "Go-Kart Engineering",
    "Engineering Portfolio",
    "Akshatraj Kothalkar Resume",
  ],

  authors: [
    {
      name: "Akshatraj Kothalkar",
    },
  ],

  creator: "Akshatraj Kothalkar",
  publisher: "Akshatraj Kothalkar",

  applicationName: "Akshatraj Kothalkar Portfolio",

  category: "portfolio",

  verification: {
    google: "4blwEchb33VYqX-X6x28KJPAE_nYL-y7fmah6A4-XpQ",
  },

  openGraph: {
    title: "Akshatraj Kothalkar | Engineering Portfolio",
    description:
      "Explore the engineering portfolio, projects, certifications, skills and professional journey of Akshatraj Kothalkar.",
    url: "https://my-blog-s3fe.vercel.app/",
    siteName: "Akshatraj Kothalkar",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akshatraj Kothalkar | Engineering Portfolio",
    description:
      "Mechanical Engineering × Manufacturing × Automation × AI",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://my-blog-s3fe.vercel.app/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020405",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* =====================================================
            GOOGLE TAG MANAGER
            Container: GTM-P74JC75X
        ===================================================== */}

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;

              j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);

            })(window,document,'script','dataLayer','GTM-P74JC75X');
          `}
        </Script>

        {/* Google Tag Manager fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P74JC75X"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}

      </body>
    </html>
  );
}