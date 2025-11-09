// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import TawkChatPage from "./components/tawk-chat";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Technotronix | AI-Powered Video Analytics & Cybersecurity Solutions",
    template: "%s | Technotronix",
  },
  description:
    "Technotronix delivers cutting-edge AI video analytics and cybersecurity solutions, empowering modern businesses with real-time insights and robust digital protection.",
  keywords: [
    "AI video analytics",
    "cybersecurity solutions",
    "people counting",
    "spatial intelligence",
    "Technotronix",
  ],
  metadataBase: new URL("https://www.technotronix.ae"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Technotronix | AI-Powered Video Analytics & Cybersecurity",
    description:
      "Transform your operations with Technotronix — the leader in AI-driven spatial intelligence and digital security solutions.",
    url: "https://www.technotronix.ae",
    siteName: "Technotronix",
    images: [
      {
        url: "https://www.technotronix.ae/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Technotronix AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "linkedin:profile": "https://www.linkedin.com/company/technotronix-ae/",
    "google-site-verification": "jWVS3rhWd8XkFiymMTpVhPOq99zUD63ZUK_GGeTVZI8",
  },
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD object (will be injected client-side)
const schemaObj = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technotronix",
  url: "https://www.technotronix.ae",
  logo: "https://www.technotronix.ae/images/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/technotronix-ae/",
    "https://www.instagram.com/technotronix.ae/",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons & theme */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Inject JSON-LD after the page is interactive to avoid SSR/CSR mismatches */}
        <Script
          id="jsonld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          // dangerouslySetInnerHTML required so browser treats this as JSON-LD (not JS)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />

        <Navigation />
        <main>{children}</main>
        <TawkChatPage />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
