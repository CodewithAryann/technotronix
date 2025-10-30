"use client";

import dynamic from "next/dynamic";
import Hero from "./components/hero";
import SEO from "./components/seo";


// Lazy-load below-the-fold sections
const AboutSection = dynamic(() => import("./components/About Us"), {
  loading: () => <div className="min-h-[200px]" />, // lightweight placeholder
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

export default function Home() {
  return (
    <div className="min-h-screen">
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
  );
}
