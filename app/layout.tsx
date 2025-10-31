import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import type { ReactNode } from "react";
import WhatsAppFloat from "./components/WhatsAppFloat";
import TawkChatPage from "./components/tawk-chat";


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
  metadataBase: new URL("https://www.technotronix.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technotronix | AI-Powered Video Analytics & Cybersecurity",
    description:
      "Transform your operations with Technotronix — the leader in AI-driven spatial intelligence and digital security solutions.",
    url: "https://www.technotronix.ai",
    siteName: "Technotronix",
    images: [
      {
        url: "https://www.technotronix.ai/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Technotronix AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technotronix | AI-Powered Video Analytics & Cybersecurity",
    description:
      "AI-driven video analytics and cybersecurity solutions for smarter, safer businesses.",
    images: ["https://www.technotronix.ai/images/og-banner.jpg"],
    creator: "@technotronix_ai",
  },
  icons: {
    icon: "/favicon.ico",
  },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900`}
        suppressHydrationWarning
      >
        <Navigation />
        <main>{children}</main>
        <TawkChatPage />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
