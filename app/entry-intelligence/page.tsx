"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Clock,
  Radar,
  Users, 
  UserCheck,
  Repeat,
  Target,      
  Store,       
  Coins,       
  HeartHandshake, 
  Brain,
  Scan,
  LineChart,
  ShieldCheck,
  Webhook
} from "lucide-react";


export default function PeopleCountingPage() {
  const capabilityIcons = [Users, UserCheck, Clock, BarChart3, Repeat];
  const benefitsImages = [
  "/images/entry-intell/understand.png",
  "/images/entry-intell/enhance.png",
  "/images/entry-intell/improve.png",
  "/images/entry-intell/boost.png",
  "/images/entry-intell/ensure.png",
];


const serveIndustries = [
  {
    icon: BarChart3,
    title: "Data-Driven Growth",
    desc: "Turn entry insights into measurable business decisions.",
  },
  {
    icon: Target,
    title: "Maximized Conversion Rates",
    desc: "Link footfall data to transactions for improved sales forecasting.",
  },
  {
    icon: Store,
    title: "Optimized Store Performance",
    desc: "Refine layouts, campaigns, and manpower with precise visitor analytics.",
  },
  {
    icon: Coins,
    title: "Reduce Operational Costs",
    desc: "Avoid overstaffing or underutilization through predictive data.",
  },
  {
    icon: HeartHandshake,
    title: "Enhanced Customer Loyalty",
    desc: "Improve first impressions and shopping experiences that drive repeat visits.",
  },
  {
    icon: Brain,
    title: "Strategic Decision Intelligence",
    desc: "Empower management with real-time, actionable insights that align operational efficiency with revenue optimization across all store locations.",
  },
];


  // ===== HERO IMAGE SLIDESHOW LOGIC =====
  const heroImages = [
    "/images/entry-intell/pic-1.png",
    "/images/entry-intell/pic-2.png",
    "/images/entry-intell/pic-3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImage((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1
        ),
      5000 // Change every 5 seconds
    );
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ===== BENEFITS SLIDER =====
  const benefitsData = [
    "Gain a clear picture of customer movement patterns.",
    "Measure the impact of promotions and campaigns through entry traffic",
    "Optimize staffing and scheduling based on real-time entry data.",
    "Identify trends to improve store performance and customer engagement.",
    "Manage occupancy limits while maintaining customer privacy.",
  ];

  const benefitsTitles = [
    "Understand Visitor Flow",
    "Enhance Marketing ROI",
    "Improve Operations",
    "Boost Sales Opportunities",
    "Ensure Compliance & Safety",
  ];

  const [currentBenefit, setCurrentBenefit] = useState(0);

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefitsData.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) =>
      prev === 0 ? benefitsData.length - 1 : prev - 1
    );
  };

  return (
    <main className="relative bg-[#f8f9fb] text-gray-800 overflow-hidden">
      {/* ===== HERO SECTION WITH IMAGE SLIDESHOW ===== */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImages[currentImage]})`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 sm:px-10 text-white max-w-4xl flex flex-col items-center space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold">
            ZAISENSE - Store Entry Analytics Solution
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200">
            Transform Every Entrance into an Insight Engine
          </p>

          {/* Contact Us Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            href="/contact"
            className="bg-[#004D94] hover:bg-[#004D94] text-white font-semibold px-8 py-3 rounded-full shadow-lg text-lg"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* === HEADER === */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-6">
            ZAISENSE - Store Entry Analytics Solution
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
           First impressions start at the door — and so does your data.
ZAISENSE Store Entry Analytics empowers retailers to understand visitor flow, traffic patterns, and engagement behavior the moment customers walk in. Using AI-powered vision technology, our system turns every store entry point into a source of valuable business intelligence.

          </p>
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
       <section className="bg-[#022e64] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "AI Detection: Sensors identify individuals entering and exiting — with up to 99% accuracy.",
            "Behavior Tracking: The system differentiates between new and returning visitors.",
            "Data Visualization: Footfall data is displayed on intuitive dashboards for quick analysis.",
            "Insight Generation: Retailers gain actionable insights into visitor trends, conversion rates, and location performance",
            "Privacy-Safe Analytics: All tracking is anonymized, ensuring compliance and customer trust",
            "Real-Time Alerts & Integration: The system connects with POS, marketing, and staffing platforms.",
          ].map((item, i) => {
            // Assign a specific icon for each item
            const icons = [Scan,UserCheck,BarChart3,LineChart,ShieldCheck,Webhook];
            const Icon = icons[i];

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:bg-white/20 transition"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="p-3 bg-white/20 rounded-full"
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <p>{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20 text-center">
  <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-12">
    What Makes ZAISENSE Store Entry Analytics Stand Out
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "AI-Precision Counting",
        desc: "Deep-learning algorithms ensure superior accuracy in people detection and differentiation.",
        img: "/images/entry-intell/ai.png",
      },
      {
        title: "Real-Time Dashboards",
        desc: "Get instant visibility into entry traffic, occupancy, and visitor flow trends.",
        img: "/images/entry-intell/real.png",
      },
      {
        title: "Seamless Integration",
        desc: "Works flawlessly with POS, ERP, and other VisiGz modules like Heatmap and Queue Management.",
        img: "/images/entry-intell/seamless.png",
      },
      {
        title: "Privacy-First Design",
        desc: "Fully anonymous data collection with no personal identifiers.",
        img: "/images/entry-intell/privacy.png",
      },
    ].map(({ title, desc, img }, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-all"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-t-2xl"
        >
          <Image
            src={img} 
            alt={title}
            width={400} 
            height={288} 
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </motion.div>
        <div className="p-6 flex flex-col items-center text-center space-y-3">
          <h3 className="text-xl font-semibold text-[#022e64]">{title}</h3>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



      {/* ===== CORE CAPABILITIES ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-[#022e64]">
            Core Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Entry & Exit Counting: Measure total visitors entering and leaving the store.",
              "Staff Exclusion: Automatically exclude employees for accurate visitor data",
              "Peak Hour Tracking: Identify high-traffic time slots for better staffing.",
              "Conversion Analytics: Link entry data to sales performance for precise conversion rates.",
              "Repeat Visitor Detection: Differentiate between new and returning customers.",
              "Occupancy Management: Monitor real-time capacity to ensure comfort and compliance"
            ].map((item, i) => {
              // Use a different icon for the last card
              const Icon = i === 5 ? Radar : capabilityIcons[i % capabilityIcons.length];

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="p-3 bg-[#022e64]/10 rounded-full text-[#022e64]"
                  >
                    <Icon size={32} />
                  </motion.div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SLIDER ===== */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
  <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-12">
    Benefits
  </h2>

  {/* Top Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {benefitsTitles.map((title, i) => (
      <button
        key={i}
        onClick={() => setCurrentBenefit(i)}
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
          i === currentBenefit
            ? "bg-[#004D94] text-white shadow-lg scale-105"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {title}
      </button>
    ))}
  </div>

  <div className="relative">
    {/* Left Arrow */}
    <button
      onClick={prevBenefit}
      className="absolute -left-6 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow z-10"
    >
      ‹
    </button>

    {/* Right Arrow */}
    <button
      onClick={nextBenefit}
      className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow z-10"
    >
      ›
    </button>

    {/* Slide Content */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentBenefit}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Image */}
        <Image
  src={benefitsImages[currentBenefit]}
  alt={benefitsTitles[currentBenefit]}
  width={800}
  height={500}
  className="w-full h-96 sm:h-112 md:h-128 object-cover rounded-t-2xl"
/>

        {/* Text */}
        <div className="p-8 flex flex-col items-center text-center space-y-4">
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#004D94]">
            {benefitsTitles[currentBenefit]}
          </h3>
          <p className="text-gray-700 text-lg max-w-2xl">
            {benefitsData[currentBenefit]}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>



      {/* ===== INDUSTRIES WE SERVE ===== */}
     <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-12"
        >
          Business Impact & ROI
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serveIndustries.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-2xl transition flex flex-col items-center text-center space-y-4"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="p-4 bg-[#022e64]/10 rounded-full text-[#022e64]"
              >
                <Icon size={36} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#022e64]">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}
