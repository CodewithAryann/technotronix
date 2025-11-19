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

// Optimized metadata
export const metadata: Metadata = {
  title: {
    default: "Technotronix | AI-Powered Video Analytics & Cybersecurity Solutions",
    template: "%s | Technotronix",
  },
  description:
    "Technotronix delivers AI video analytics & cybersecurity solutions, giving businesses real-time insights and robust digital protection.",
  keywords: [
    // --- Cybersecurity Solutions ---
    "Cloud email security",
    "Cloud access security broker (CASB)",
    "DNS scanning and threat intelligence",
    "External attack surface management (EASM)",
    "DMARC analyzer",
    "Automated data classification",
    "Digital rights protection",
    "File and data encryption",
    "Security configuration management",
    "Network access control (NAC)",
    "Workspace virtualization",
    "24/7 security service desk",
    "IT asset management",
    "Security incident response",
    "Disaster recovery and backup",
    "Cybersecurity training programs",
    "Network monitoring and mapping",
    "Endpoint detection and response (EDR)",
    "Privileged access management (PAM)",
    "Identity and access management (IAM)",
    "Insider threat detection",
    "SOAR integration",
    "Smart DLP",
    "XDR integration",
    "Data privacy and protection",
    "Secure remote access",
    "Continuous threat exposure management (CTEM)",
    "Web application security assessment",
    "Network VAPT",
    "Wireless application penetration testing (WAPT)",
    "OT, IoT, and physical security testing",
    "Mobile application security review",
    // --- AI Video Analytics for Retail ---
    "People counting retail analytics",
    "Customer demographics insights",
    "Path mapping and shopper flow",
    "Dwell time tracking",
    "Retail heatmap analytics",
    "Zone occupancy monitoring",
    "AI precision video analytics",
    "Smart staff exclusion",
    "Behavioral insights for retail",
    "Marketing optimization with AI",
    "Operational efficiency analytics",
    "Increase retail conversion rates",
    "Queue intelligence solutions",
    "Demographic insights for stores",
    "Privacy and GDPR compliance",
    "Boost retail conversion rates",
    "Enhance store layouts",
    "Improve customer experience",
    "Leverage predictive analytics",
    "Maintain full data privacy",
    "AI video analytics for retail",
    "Retail intelligence solutions",
    "Technotronix AI and cybersecurity",
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

// Enhanced Organization JSON-LD
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technotronix",
  url: "https://www.technotronix.ae",
  logo: "https://www.technotronix.ae/images/logo.png",
  description:
    "Technotronix delivers AI video analytics & cybersecurity solutions, giving businesses real-time insights and robust digital protection.",
  sameAs: [
    "https://www.linkedin.com/company/technotronix-ae/",
    "https://www.instagram.com/technotronix.ae/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971 4 287 1395",
      contactType: "Customer Service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
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
        {/* Inject JSON-LD for Organization */}
        <Script
          id="jsonld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
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
