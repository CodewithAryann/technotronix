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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.technotronix.ae" },
      { "@type": "ListItem", position: 2, name: "AI Video Analytics", item: "https://www.technotronix.ae/ai-video-analytics" },
    ],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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

        {/* Lazy-loaded components */}
        <AboutSection />
        <OurServiceSection />
        <FeaturePointPage />
        <OurGoals />
      </div>
    </>
  );
}
