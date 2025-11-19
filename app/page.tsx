"use client";

import dynamic from "next/dynamic";
import Hero from "./components/hero";
import SEO from "./components/seo";
import Script from "next/script";

// Lazy-load below-the-fold sections
const AboutSection = dynamic(() => import("./components/About Us"), {
  loading: () => <div className="min-h-[200px]" />,
});
const OurServiceSection = dynamic(() => import("./components/OurServiceSection"), {
  loading: () => <div className="min-h-[200px]" />,
});
const FeaturePointPage = dynamic(() => import("./components/feature-point"), {
  loading: () => <div className="min-h-[200px]" />,
});
const OurGoals = dynamic(() => import("./components/our-goals"), {
  loading: () => <div className="min-h-[200px]" />,
});

// JSON-LD WebPage schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Video Analytics Solution | Technotronix",
  url: "https://www.technotronix.ae/ai-video-analytics",
  description:
    "Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision.",
  inLanguage: "en",
  isPartOf: {
    "@type": "Organization",
    name: "Technotronix",
    url: "https://www.technotronix.ae",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.technotronix.ae",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Video Analytics",
        item: "https://www.technotronix.ae/ai-video-analytics",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* SEO meta tags */}
      <SEO
        title="AI Video Analytics Solution | Technotronix"
        description="Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision."
        url="/ai-video-analytics"
        image="/images/ai-video-analytics.jpg"
      />

      {/* Inject JSON-LD */}
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Load Hero immediately */}
      <Hero />

      {/* Lazy-loaded components */}
      <AboutSection />
      <OurServiceSection />
      <FeaturePointPage />
      <OurGoals />
    </div>
  );
}
