// app/page.tsx
import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "./components/hero";
import SEO from "./components/seo";

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

// Full JSON-LD structured data for Technotronix
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.technotronix.ae/#organization",
      name: "Technotronix",
      url: "https://www.technotronix.ae",
      logo: "https://www.technotronix.ae/images/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/technotronix-ae/",
        "https://www.instagram.com/technotronix.ae/"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971501234567",
          contactType: "customer service",
          email: "info@technotronix.ae",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic"]
        }
      ]
    },
    {
      "@type": "WebPage",
      name: "AI Video Analytics Solution | Technotronix",
      url: "https://www.technotronix.ae/ai-video-analytics",
      description: "Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision.",
      inLanguage: "en",
      isPartOf: { "@id": "https://www.technotronix.ae/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.technotronix.ae" },
          { "@type": "ListItem", position: 2, name: "AI Video Analytics", item: "https://www.technotronix.ae/ai-video-analytics" }
        ]
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO meta tags */}
        <title>AI Video Analytics Solution | Technotronix</title>
        <meta
          name="description"
          content="Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision."
        />
        <meta property="og:title" content="AI Video Analytics Solution | Technotronix" />
        <meta property="og:description" content="Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision." />
        <meta property="og:url" content="https://www.technotronix.ae/ai-video-analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.technotronix.ae/images/ai-video-analytics.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Video Analytics Solution | Technotronix" />
        <meta name="twitter:description" content="Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision." />
        <meta name="twitter:image" content="https://www.technotronix.ae/images/ai-video-analytics.jpg" />

        {/* Inject JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen">
        {/* Optional SEO component if it handles Open Graph and Twitter cards */}
        <SEO
          title="AI Video Analytics Solution | Technotronix"
          description="Explore Technotronix AI video analytics — real-time detection, people counting, and space utilization insights powered by computer vision."
          url="/ai-video-analytics"
          image="/images/ai-video-analytics.jpg"
        />

        {/* Load Hero immediately */}
        <Hero />

        {/* Lazy-loaded sections */}
        <AboutSection />
        <OurServiceSection />
        <FeaturePointPage />
        <OurGoals />
      </div>
    </>
  );
}
