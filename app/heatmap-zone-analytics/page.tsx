"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Users,
  BarChart3,
  Cpu,
  Gauge,
  Clock,
  Shield,
  Radar,
  AlertCircle,
 Warehouse,
  TrendingUp,  
  CreditCard,  
  Smile,
  Thermometer,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function PeopleCountingPage() {
  const capabilityIcons = [Thermometer, Cpu, Clock, FileText, ShieldCheck];
  const benefitsImages = [
  "/images/heatmap/real-time.png",
  "/images/heatmap/redesign.png",
  "/images/heatmap/smart.png",
  "/images/heatmap/marketing.png",
  "/images/heatmap/operational.png",
];


const serveIndustries = [
  {
    icon: Warehouse,
    title: "Maximize Space Utilization",
    desc: "Identify and redesign underperforming areas to increase sales potential.",
  },
  {
    icon: Eye,
    title: "Boost Product Visibility",
    desc: "Position high-demand items in zones with the most engagement.",
  },
  {
    icon: TrendingUp,
    title: "Enhance Conversion Rates",
    desc: "Use behavioral insights to fine-tune marketing and store layouts.",
  },
  {
    icon: CreditCard,
    title: "Reduce Operational Costs",
    desc: "Eliminate inefficiencies through data-backed planning and scheduling.",
  },
  {
    icon: Smile,
    title: "Increase Customer Retention",
    desc: "Deliver smoother navigation and better in-store experiences that drive repeat visits and long-term loyalty.",
  },
  {
    icon: Users,
    title: "Optimize Workforce Efficiency",
    desc: "Allocate staff based on real-time traffic flow and customer density.",
  },
];


  // ===== HERO IMAGE SLIDESHOW LOGIC =====
  const heroImages = [
    "/images/heatmap/pic-1.png",
    "/images/heatmap/pic-2.png",
    "/images/heatmap/pic-3.png",
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
    "Instantly visualize visitor movement and engagement patterns.",
    "Redesign spaces based on high-traffic and low-activity zones.",
    "Smarter Product Placement: Position products where customer attention is strongest.",
    "Measure campaign impact through visual engagement data..",
    "Align staffing and resources with live customer flow.",
  ];

  const benefitsTitles = [
    "Real-Time Traffic Insights",
    "Redesign spaces based on high-traffic and low-activity zones",
    "Smarter Product Placement",
    "Enhanced Marketing Effectiveness",
    "Operational Efficiency",
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
            VisiGz Heatmap Analytics
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200">
            Visualize Movement. Understand Behavior. Optimize Every Space
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
            Heatmap Analytics Solution
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
           In the modern retail and commercial landscape, understanding how people interact with your space is key to better design, stronger sales, and smarter operations.
VisiGz Heatmap Analytics transforms raw movement data into vivid, actionable insights — showing you exactly where, when, and how people engage across your store or facility.
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
            "AI-Powered Vision: Uses advanced AI vision to track customer movement patterns accurately.",
            "Seamless Integration: Operates through existing VisiGz People Counting sensors with no extra setup.",
            "Real-Time Tracking: Captures live positional data across designated zones and spaces.",
            "Dynamic Heatmaps: Converts movement data into visual heatmaps showing engagement density.",
            "Behavioral Insights: Analyzes dwell time and flow trends to reveal customer behavior.",
            "Privacy Assured: Performs anonymous tracking with no facial recognition or personal data stored."
          ].map((item, i) => {
            // Assign a specific icon for each item
            const icons = [Eye, Cpu, BarChart3, AlertCircle, Gauge, Shield];
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
    What makes VisiGz Heatmap Analytics stand out 
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "AI-Precision Mapping",
        desc: "Leverages deep learning vision to deliver ultra-accurate, real-time spatial insights.",
        img: "/images/heatmap/ai.png",
      },
      {
        title: "Visual Intelligence",
        desc: "Transforms movement data into vibrant, actionable heatmaps for instant decision-making.",
        img: "/images/heatmap/seamless.png",
      },
      {
        title: "Seamless Integration",
        desc: "Works effortlessly with existing VisiGz People Counting systems and third-party platforms",
        img: "/images/heatmap/privacy.png",
      },
      {
        title: "Privacy-First Design",
        desc: "100% anonymous analytics — no facial data, no personal identifiers, fully GDPR-compliant.",
        img: "/images/heatmap/visual.png",
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
              "Real-Time Heat Visualization: See live movement and engagement zones in your space.",
              "AI-Driven Accuracy: Detect precise traffic intensity with intelligent zone mapping.",
              "Dwell Time Tracking: Understand how long visitors spend in each area.",
              "Customizable Zone Reports: Analyze specific product areas, entrances, or service points.",
              "Privacy-First Analytics: 100% anonymous — no images, no personal data stored.",
              "Seamless Integration: Works effortlessly with your existing VisiGz ecosystem or third-party systems.",
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
