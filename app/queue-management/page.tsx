"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Cpu,
  BarChart3,
  AlertCircle,
  Gauge,
  MapPin,
  Clock,
  LineChart,
  Layers,
  Store,
  Users,
  Shield,
  Radar,
  Truck,
  Heart,
  Globe,
} from "lucide-react";

export default function QueueManagementPage() {
  const capabilityIcons = [Gauge, MapPin, Layers, Clock, LineChart];
  const benefitsImages = [
    "/images/queue-man/reduced.png",
    "/images/queue-man/enhanced.png",
    "/images/queue-man/optimized.png",
    "/images/queue-man/data-driven.png",
    "/images/queue-man/increased.png",
  ];

  const serveIndustries = [
    {
      title: "Enhance Customer Experience",
      desc: "Reduce waiting times and create smoother in-store interactions.",
    },
    {
      title: "Improve Conversion Rates",
      desc: "Prevent customer drop-offs caused by long queues.",
    },
    {
      title: "Operational Agility",
      desc: "Allocate staff strategically based on live demand insights.",
    },
    {
      title: "Increase Profitability",
      desc: "Use behavioral data to optimize performance and boost ROI.",
    },
    {
      title: "Strengthen Brand Loyalty",
      desc: "Deliver faster, effortless service that customers trust and remember.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Reduced wait times, smoother experiences, and happier returning customers.",
    },
  ];

  const heroImages = [
    { src: "/images/queue-man/pic-1.png", alt: "Queue management camera view 1" },
    { src: "/images/queue-man/pic-2.png", alt: "Queue management camera view 2" },
    { src: "/images/queue-man/pic-3.png", alt: "Queue management camera view 3" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
      }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const benefitsData = [
    "Streamlines customer flow and minimizes service delays.",
    "Creates smoother, faster, and frustration-free interactions.",
    "Aligns workforce with real-time demand for peak efficiency.",
    "Provides analytics on traffic, service speed, and performance.",
    "Improves satisfaction, boosts conversions, and encourages repeat visits.",
  ];

  const benefitsTitles = [
    "Reduced Wait Times",
    "Enhanced Customer Experience",
    "Optimized Staff Allocation",
    "Data-Driven Insights",
    "Increased Revenue & Loyalty",
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
    <>
      <Head>
        <title>ZAISENSE Queue Management – Technotronix</title>
        <meta
          name="description"
          content="Technotronix ZAISENSE Queue Management uses AI video analytics to transform waiting lines into seamless customer journeys with real-time insights."
        />
        <link rel="canonical" href="https://technotronix.ae/queue-management" />

        {/* Open Graph */}
        <meta property="og:title" content="ZAISENSE Queue Management – Technotronix" />
        <meta
          property="og:description"
          content="AI-powered queue management solution by Technotronix: reduce wait times, optimize staff, and improve customer satisfaction."
        />
        <meta property="og:url" content="https://technotronix.ae/queue-management" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://technotronix.ae/images/queue-man/pic-1.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZAISENSE Queue Management – Technotronix" />
        <meta
          name="twitter:description"
          content="Transform waiting lines into seamless customer journeys with Technotronix's AI queue management solution."
        />
        <meta
          name="twitter:image"
          content="https://technotronix.ae/images/queue-man/pic-1.png"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://technotronix.ae/queue-management",
              "name": "ZAISENSE Queue Management",
              "description":
                "AI-powered queue management by Technotronix to reduce waiting lines, optimize staff deployment, and improve customer satisfaction.",
            }),
          }}
        />
      </Head>

      <main className="relative bg-[#f8f9fb] text-gray-800 overflow-hidden">
        {/* HERO */}
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
                  backgroundImage: `url(${heroImages[currentImage].src})`,
                }}
              >
                <Image
                  src={heroImages[currentImage].src}
                  alt={heroImages[currentImage].alt}
                  width={1920}
                  height={1080}
                  className="invisible"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6 sm:px-10 text-white max-w-4xl flex flex-col items-center space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-semibold">
              ZAISENSE ‒ Queue Management Solution
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200">
              Turn Waiting Lines into Seamless Customer Journeys
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              href="/contact"
              className="bg-[#004D94] text-white font-semibold px-8 py-3 rounded-full shadow-lg text-lg"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-6">
              Why Choose Our AI Queue Management
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              In today’s fast-moving retail landscape, customer patience is fleeting — every second in line can influence a purchase decision. ZAISENSE Queue Management leverages AI-powered video intelligence to track queues in real time, minimize delays, and elevate the overall customer experience.
            </p>
          </motion.div>
        </section>

        {/* FEATURES / HOW IT WORKS */}
        <section className="bg-[#022e64] text-white py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Smart Detection: AI sensors continuously monitor queues across multiple zones.",
                "Instant Analysis: Deep learning algorithms evaluate real-time movement and behavior.",
                "Behavior Insights: Understand customer patterns — peak hours, dwell time, visit frequency.",
                "Intelligent Alerts & Automated Response System to notify staff instantly to manage queue congestion.",
                "Data Insights & Visualization Dashboards display metrics for traffic, performance, and efficiency.",
                "Privacy-First Framework: Anonymous counting ensures GDPR compliance and customer trust.",
              ].map((item, i) => {
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

        {/* DIFFERENTIATOR */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-12">
            What Makes Us Different
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Predictive, Not Reactive",
                desc: "Our AI anticipates queue formation before congestion occurs.",
                img: "/images/queue-man/predictive.png",
              },
              {
                title: "Privacy-First Design",
                desc: "Operates without facial recognition or identity tracking — ensuring complete anonymity.",
                img: "/images/queue-man/privacy.png",
              },
              {
                title: "Seamless Integration",
                desc: "Connects effortlessly with POS, ERP, or store systems.",
                img: "/images/queue-man/seamless-inte.png",
              },
              {
                title: "Actionable Intelligence",
                desc: "Real-time insights that empower instant, data-driven decisions.",
                img: "/images/queue-man/actionable.png",
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

        {/* CAPABILITIES */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-[#022e64]">
              Core Capabilities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Instant Queue Recognition: Detect line build-up instantly with intelligent video analytics.",
                "Automated Staff Alerts: Prompt staff to manage queues proactively during busy periods.",
                "Wait-Time Insights: Measure dwell durations and identify operational bottlenecks.",
                "Workforce Efficiency: Align staffing levels with real-time traffic to ensure service consistency.",
                "Intuitive Dashboards: Access live metrics on queue status, service speed, and customer throughput.",
                "Privacy-Safe Analytics: Fully anonymous — no facial recognition, no personal data recorded.",
              ].map((item, i) => {
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

        {/* BENEFITS SLIDER */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#022e64] mb-12">
            Benefits
          </h2>

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
            <button
              onClick={prevBenefit}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow z-10"
            >
              ‹
            </button>
            <button
              onClick={nextBenefit}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow z-10"
            >
              ›
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenefit}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <Image
                  src={benefitsImages[currentBenefit]}
                  alt={benefitsTitles[currentBenefit]}
                  width={800}
                  height={500}
                  className="w-full h-96 sm:h-112 md:h-128 object-cover rounded-t-2xl"
                />
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

        {/* BUSINESS IMPACT / ROI */}
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
              {serveIndustries.map(({ title, desc }, i) => {
                const icons = [Store, Truck, Users, Heart, Globe, Shield];
                const Icon = icons[i % icons.length];
                return (
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
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
