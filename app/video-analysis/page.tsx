"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  BarChart3,
  Cpu,
  ShoppingCart,
  LayoutDashboard,
  Users,
  Clock,
  Users2,
  Route,
  Scan,
  Flame,
  Map,
  Grid,
} from "lucide-react";

const heroImages = [
  { src: "/images/video-ana/1.png", alt: "AI video analytics interface screen" },
  { src: "/images/video-ana/2.png", alt: "Real-time heatmap activity visualization" },
  { src: "/images/video-ana/3.png", alt: "People counting analytics dashboard" },
  { src: "/images/video-ana/4.png", alt: "Spatial intelligence and zone mapping preview" },
];

export default function VisiGzPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full bg-gray-50">

      {/* ================= CANONICAL TAG ================= */}
      <Head>
        <link rel="canonical" href="https://technotronix.ae/video-analytics" />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative text-center px-4 sm:px-8 md:px-16 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            ZAISENSE AI-Powered Video Analytics Solution
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Transforming spatial intelligence with real-time insights for smarter spaces.
          </p>
        </motion.div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="text-center max-w-5xl mx-auto space-y-6 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#022e64]"
        >
          Technotronix – Redefining Spatial Intelligence
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Technotronix is redefining spatial intelligence...
        </motion.p>
      </section>

      {/* ================= ECOSYSTEM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24 space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:text-[#022e64] transition-colors duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#022e64]">
              ZAISENSE – AI-powered video analytics platform
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              The ZAISENSE Sensor is an intelligent AI-powered camera...
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <Image
              src="/images/video-ana/pic-1.png"
              alt="ZAISENSE AI-powered video analytics sensor device"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto max-w-md sm:max-w-lg hover:shadow-[#022e64]/50 transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= DEVICES SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24 space-y-20">
        
        {/* SmartCam */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/video-ana/pic-2.png"
              alt="ZAISENSE SmartCam advanced AI camera"
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto hover:shadow-[#022e64]/50 transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, color: "#022e64" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#022e64]">
              ZAISENSE OmniView
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The ZAISENSE OmniView is a 360° heatmap camera...
            </p>
          </motion.div>
        </motion.div>

        {/* OmniView */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/video-ana/pic-3.png"
              alt="ZAISENSE cloud-based analytics dashboard"
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto hover:shadow-[#022e64]/50 transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#022e64]">
              ZAISENSE Cloud
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              ZAISENSE Cloud is a powerful cloud-based dashboard...
            </p>
          </motion.div>
        </motion.div>
      </section>

{/* ================= EVOLUTION SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold text-[#022e64] text-center"
        >
          Evolution of ZAISENSE Technology
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          <p>
            The strength of ZAISENSE comes from its continuously advancing AI algorithms, refined over
            multiple generations:
          </p>
          <li>
            <strong>Gen 1.0:</strong> Basic head-and-shoulder detection for fast, efficient setup.
          </li>
          <li>
            <strong>Gen 2.0:</strong> Added facial recognition for precise people counting.
          </li>
          <li>
            <strong>Gen 3.0:</strong> Introduced Re-Identification (ReID) for long-term tracking.
          </li>
          <li>
            <strong>Gen 3.0+:</strong> Uses multimodal large models for superior environmental
            understanding.
          </li>
        </motion.ul>
      </section>

      {/* ================= RETAIL SECTION ================= */}
     <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center space-y-4 mb-10"
  >
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#022e64]">
      ZAISENSE for Retail
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
      ZAISENSE revolutionizes retail by turning shopper movement and behavior into actionable
      insights. Gain a deeper understanding of how customers interact with spaces, products,
      and staff.
    </p>
  </motion.div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {[
      { icon: MapPin, title: "Foot Traffic Insights: Analyze visitor flow and high-traffic zones." },
      { icon: Users, title: "Customer Journey Mapping: Track interactions and movement." },
      { icon: Clock, title: "Queue & Staff Management: Optimize workforce distribution." },
      { icon: ShoppingCart, title: "Conversion Analysis: Improve marketing & sales." },
      { icon: LayoutDashboard, title: "Layout Optimization: Enhance store design." },
      { icon: Cpu, title: "Operational Efficiency: Streamline service delivery." },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        variants={fadeInUp}
        whileHover={{
          scale: 1.07,
          boxShadow: "0 0 25px rgba(2, 46, 100, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center
                   transition-all duration-300 hover:shadow-[#022e64]/40"
      >
        <motion.div
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-4 rounded-full bg-[#022e64]/10 mb-4"
        >
          <item.icon size={40} className="text-[#022e64]" />
        </motion.div>
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
          {item.title}
        </h4>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* ================= ANALYTICS CAPABILITIES SECTION ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-14"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#022e64]">
      Advanced Video Analytics Capabilities
    </h2>
    <p className="text-gray-700 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
      ZAISENSE provides a comprehensive suite of intelligent video analytics tools — turning raw visual
      data into actionable business insights for smarter operations and optimized experiences.
    </p>
  </motion.div>

  {/* Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "Path Mapping", desc: "Illustrates visitor movement patterns, helping design efficient store layouts and uncover underutilized areas.", icon: Map },
      { title: "Dwell Time Measurement", desc: "Captures how long visitors remain in specific sections, offering insight for merchandising, engagement zones, and staff deployment.", icon: Clock },
      { title: "Demographic Insights (Gender & Age)", desc: "Distinguishes customer profiles by gender and age group, enabling personalized marketing and targeted product strategies.", icon: BarChart3 },
      { title: "Group Detection", desc: "Associates activity with shopping groups rather than individuals, improving conversion accuracy and enhancing retail performance analysis.", icon: Users2 },
      { title: "Heatmap Visualization", desc: "Displays movement intensity and flow, revealing frequently visited and low-engagement zones to support strategic layout planning.", icon: Flame },
      { title: "People Counting", desc: "Monitors visitor volumes to identify high-traffic periods, assess campaign performance, and analyze audience demographics.", icon: Users },
      { title: "Pathway Analytics", desc: "Examines customer navigation routes, highlighting key engagement areas and guiding product placement decisions.", icon: Route },
      { title: "Zone Occupancy Analysis", desc: "Evaluates crowd density across different zones to optimize space utilization and adjust operational efficiency.", icon: Grid },
      { title: "Advanced Re-identification", desc: "Uses multi-attribute recognition — including clothing, posture, and body shape — for precise tracking and analytics without compromising privacy.", icon: Scan },
    ].map((feature, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.05 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.03,
          boxShadow: "0 0 20px 5px rgba(0,77,148,0.6)",
        }}
        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 mb-5 rounded-xl flex items-center justify-center bg-gray-50"
        >
          <feature.icon className="w-10 h-10 text-[#004D94]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {feature.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

    </main>
  );
}