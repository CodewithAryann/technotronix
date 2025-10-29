"use client";

import dynamic from "next/dynamic";
import Hero from "./components/hero";

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
