"use client";

import React, { useState } from "react";
import { motion} from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  TrendingUp,
  Users,
  Target,
  Calendar,
  BarChart3,
  Heart,
  MessageCircle,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Send,
  Video,
  Image as ImageIcon,
  FileText,
  PenTool,
  DollarSign,
  Star,
} from "lucide-react";

export default function SocialMediaManagementPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <main className="relative w-full bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-6xl text-center px-6 z-10 py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-semibold">📱 Dubai&apos;s Premier Social Media Agency</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Social Media Management{" "}
            <span className="block mt-2 bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              That Grows Your Brand
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Build a powerful social media presence with strategic content, 
            engaging campaigns, and data-driven results.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition border border-white/20">
              View Our Work
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex gap-4 justify-center">
            {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= QUICK STATS ================= */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: "500K+", label: "Followers Managed" },
              { icon: TrendingUp, value: "350%", label: "Avg Growth Rate" },
              { icon: Heart, value: "10M+", label: "Engagements Generated" },
              { icon: Award, value: "100+", label: "Brands Served" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-[#022e64] mx-auto mb-3" />
                <div className="text-3xl font-bold bg-linear-to-r from-[#022e64] to-[#045aa8] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Elevate Your{" "}
          <span className="bg-linear-to-r from-[#022e64] to-[#045aa8] bg-clip-text text-transparent">
            Social Media Presence
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          From content creation to community management, we handle everything so you can 
          focus on running your business. Our expert team creates scroll-stopping content 
          that resonates with your audience and drives real results.
        </motion.p>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Platforms We Master
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 text-lg"
          >
            Expert management across all major social media platforms
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#022e64] transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${platform.bgColor}`}>
                  <platform.icon className={`w-9 h-9 ${platform.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-4">{platform.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-[#022e64] rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Services
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(2, 46, 100, 0.15)" }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING CALCULATOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          💰 Social Media Management Pricing
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Transparent pricing tailored to your needs
        </motion.p>

        <SocialMediaPricingCalculator />
      </section>

      {/* ================= CONTENT TYPES ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Content We Create
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 text-lg"
          >
            High-quality, engaging content across all formats
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${type.bgColor}`}>
                  <type.icon className={`w-10 h-10 ${type.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-full">
                  <div className="w-12 h-12 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#022e64]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PACKAGE SELECTOR ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          Choose Your Package
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Flexible plans designed for businesses of all sizes
        </motion.p>

        <PackageSelector />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
          >
            Why Choose Technotronix?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Let&apos;s create a winning social media strategy that drives engagement, 
            builds community, and grows your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-4 bg-linear-to-r from-[#022e64] to-[#045aa8] text-white rounded-full font-semibold hover:opacity-90 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </button>
            <button className="px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= INTERACTIVE COMPONENTS ================= */

function SocialMediaPricingCalculator() {
  const [platforms, setPlatforms] = useState<string[]>(["instagram"]);
  const [postsPerWeek, setPostsPerWeek] = useState(3);
  const [addOns, setAddOns] = useState<string[]>([]);

  const platformPrices: { [key: string]: number } = {
    instagram: 800,
    facebook: 600,
    linkedin: 700,
    twitter: 500,
    youtube: 1200,
  };

  const addOnPrices: { [key: string]: number } = {
    stories: 300,
    reels: 500,
    ads: 800,
    analytics: 400,
    community: 600,
  };

  const calculateCost = () => {
    let total = 0;
    
    // Platform costs
    platforms.forEach(platform => {
      total += platformPrices[platform] || 0;
    });
    
    // Posts cost (base 3 posts, then 100 AED per additional post)
    if (postsPerWeek > 3) {
      total += (postsPerWeek - 3) * 100 * 4; // Monthly
    }
    
    // Add-ons
    addOns.forEach(addOn => {
      total += addOnPrices[addOn] || 0;
    });
    
    return total;
  };

  const togglePlatform = (platform: string) => {
    setPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const toggleAddOn = (addOn: string) => {
    setAddOns(prev =>
      prev.includes(addOn)
        ? prev.filter(a => a !== addOn)
        : [...prev, addOn]
    );
  };

  const platformOptions = [
    { id: "instagram", name: "Instagram", icon: Instagram, price: 800, color: "from-[#022e64] to-[#034080]" },
    { id: "facebook", name: "Facebook", icon: Facebook, price: 600, color: "from-[#022e64] to-[#045aa8]" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, price: 700, color: "from-[#034080] to-[#045aa8]" },
    { id: "twitter", name: "Twitter", icon: Twitter, price: 500, color: "from-[#045aa8] to-[#0570c9]" },
    { id: "youtube", name: "YouTube", icon: Youtube, price: 1200, color: "from-[#022e64] to-[#0570c9]" },
  ];

  const addOnOptions = [
    { id: "stories", name: "Stories/Status", price: 300, icon: Sparkles },
    { id: "reels", name: "Reels/Videos", price: 500, icon: Video },
    { id: "ads", name: "Ad Management", price: 800, icon: Target },
    { id: "analytics", name: "Analytics Report", price: 400, icon: BarChart3 },
    { id: "community", name: "Community Mgmt", price: 600, icon: MessageCircle },
  ];

  const total = calculateCost();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-3 p-8 space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">
              Select Platforms
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {platformOptions.map((platform) => (
                <motion.button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl transition-all border-2 ${
                    platforms.includes(platform.id)
                      ? `bg-linear-to-br ${platform.color} text-white border-transparent shadow-lg`
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <platform.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{platform.name}</div>
                  <div className="text-xs opacity-80 mt-1">{platform.price} AED/mo</div>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Posts Per Week: <span className="text-purple-600">{postsPerWeek}</span>
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={postsPerWeek}
              onChange={(e) => setPostsPerWeek(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #022e64 0%, #022e64 ${((postsPerWeek - 1) / 14) * 100}%, #e5e7eb ${((postsPerWeek - 1) / 14) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1 post</span>
              <span>15 posts</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">
              Add-On Services
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {addOnOptions.map((addOn) => (
                <motion.label
                  key={addOn.id}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                    addOns.includes(addOn.id)
                      ? "bg-blue-50 border-[#022e64]"
                      : "bg-gray-50 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addOns.includes(addOn.id)}
                    onChange={() => toggleAddOn(addOn.id)}
                    className="w-5 h-5 accent-[#022e64] cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <addOn.icon className="w-4 h-4 text-[#022e64]" />
                      <span className="text-sm font-semibold text-gray-700">
                        {addOn.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      +{addOn.price} AED/mo
                    </span>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8] p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">💰 Monthly Investment</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-baseline pb-3 border-b border-white/20">
                <span className="text-gray-200">Platforms ({platforms.length}):</span>
                <span className="font-bold text-xl">
                  {platforms.reduce((sum, p) => sum + (platformPrices[p] || 0), 0).toLocaleString()} AED
                </span>
              </div>
              
              {postsPerWeek > 3 && (
                <div className="flex justify-between items-baseline pb-3 border-b border-white/20">
                  <span className="text-gray-200">
                    Extra Posts ({(postsPerWeek - 3) * 4}/mo):
                  </span>
                  <span className="font-semibold">
                    {((postsPerWeek - 3) * 100 * 4).toLocaleString()} AED
                  </span>
                </div>
              )}
              
              {addOns.length > 0 && (
                <div className="pb-3 border-b border-white/20">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-200">Add-ons:</span>
                    <span className="font-semibold">
                      {addOns.reduce((sum, a) => sum + (addOnPrices[a] || 0), 0).toLocaleString()} AED
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    {addOns.map(a => (
                      <div key={a} className="flex justify-between">
                        <span>• {addOnOptions.find(ao => ao.id === a)?.name}</span>
                        <span>{addOnPrices[a]} AED</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="text-gray-200 text-sm mb-2">Total Monthly Cost</div>
              <div className="text-5xl font-bold mb-1">
                {total.toLocaleString()}
                <span className="text-2xl ml-2">AED</span>
              </div>
              <div className="text-gray-200 text-sm">
                Per month • Cancel anytime
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Content creation & scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engagement & responses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Monthly performance reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Dedicated account manager</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-4 bg-white text-[#022e64] rounded-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Get Started Now
          </button>
        </div>
      </div>

      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          💡 <strong>Note:</strong> All packages include content calendar, hashtag research, and basic graphics. 
          Custom requirements available on request.
        </p>
      </div>
    </motion.div>
  );
}

function PackageSelector() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const packages = [
    {
      name: "Starter",
      price: { monthly: 1500, yearly: 15000 },
      description: "Perfect for small businesses getting started",
      icon: Sparkles,
      popular: false,
      features: [
        "1-2 Social Platforms",
        "8-12 Posts per Month",
        "Basic Graphics Design",
        "Content Calendar",
        "Monthly Analytics Report",
        "Email Support",
      ],
      color: "from-[#022e64] to-[#034080]",
    },
    {
      name: "Growth",
      price: { monthly: 2800, yearly: 28000 },
      description: "Ideal for growing businesses",
      icon: TrendingUp,
      popular: true,
      features: [
        "3-4 Social Platforms",
        "20-30 Posts per Month",
        "Custom Graphics & Videos",
        "Stories & Reels (8/mo)",
        "Community Management",
        "Bi-weekly Reports",
        "Priority Support",
        "Hashtag Strategy",
      ],
      color: "from-[#022e64] to-[#045aa8]",
    },
    {
      name: "Premium",
      price: { monthly: 4500, yearly: 45000 },
      description: "For established brands seeking excellence",
      icon: Award,
      popular: false,
      features: [
        "All Major Platforms",
        "40-60 Posts per Month",
        "Premium Content Creation",
        "Stories, Reels & Videos",
        "Full Community Management",
        "Weekly Performance Reports",
        "Ad Campaign Management",
        "Influencer Outreach",
        "24/7 Support",
        "Competitor Analysis",
      ],
      color: "from-[#034080] to-[#045aa8]",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Billing Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-white text-[#022e64] shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full font-semibold transition flex items-center gap-2 ${
              billingCycle === "yearly"
                ? "bg-white text-[#022e64] shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Yearly
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => setSelectedPackage(pkg.name)}
            className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 cursor-pointer transition-all ${
              selectedPackage === pkg.name
                ? "border-[#022e64] shadow-2xl"
                : "border-gray-200 hover:border-[#045aa8]"
            } ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-linear-to-r from-[#022e64] to-[#045aa8] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </span>
              </div>
            )}

            <div className={`w-16 h-16 bg-linear-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
              <pkg.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900">
                  {pkg.price[billingCycle].toLocaleString()}
                </span>
                <span className="text-gray-500">AED</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {billingCycle === "monthly" ? "per month" : "per year"}
              </div>
              {billingCycle === "yearly" && (
                <div className="text-xs text-green-600 font-semibold mt-1">
                  Save {(pkg.price.monthly * 12 - pkg.price.yearly).toLocaleString()} AED/year
                </div>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                selectedPackage === pkg.name
                  ? `bg-linear-to-r ${pkg.color} text-white shadow-lg`
                  : pkg.popular
                  ? `bg-linear-to-r ${pkg.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {selectedPackage === pkg.name ? "Selected" : "Choose Plan"}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Need a custom package? We can create a tailored solution for your business.
        </p>
        <button className="px-8 py-3 bg-white border-2 border-[#022e64] text-[#022e64] rounded-full font-semibold hover:bg-blue-50 transition">
          Contact for Custom Quote
        </button>
      </div>
    </div>
  );
}

/* ================= DATA ================= */

const platforms = [
  {
    name: "Instagram",
    desc: "Visual storytelling and engagement",
    icon: Instagram,
    bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
    iconColor: "text-pink-600",
    features: ["Posts", "Stories", "Reels", "IGTV"],
  },
  {
    name: "Facebook",
    desc: "Community building and reach",
    icon: Facebook,
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    features: ["Posts", "Stories", "Groups", "Events"],
  },
  {
    name: "LinkedIn",
    desc: "Professional networking & B2B",
    icon: Linkedin,
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    iconColor: "text-blue-700",
    features: ["Posts", "Articles", "Company Page", "Ads"],
  },
  {
    name: "Twitter",
    desc: "Real-time engagement & trends",
    icon: Twitter,
    bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
    iconColor: "text-sky-600",
    features: ["Tweets", "Threads", "Spaces", "Trending"],
  },
  {
    name: "YouTube",
    desc: "Video content & brand authority",
    icon: Youtube,
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    iconColor: "text-red-600",
    features: ["Videos", "Shorts", "Live", "Community"],
  },
  {
    name: "TikTok",
    desc: "Viral content & young audience",
    icon: Video,
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
    iconColor: "text-purple-600",
    features: ["Videos", "Trends", "Duets", "Live"],
  },
];

const services = [
  {
    title: "Content Creation",
    desc: "High-quality posts, graphics, videos, and stories tailored to your brand and optimized for each platform.",
    icon: PenTool,
  },
  {
    title: "Content Strategy",
    desc: "Data-driven content planning with audience insights, competitor analysis, and trending topics.",
    icon: Target,
  },
  {
    title: "Community Management",
    desc: "Engage with your audience through comments, messages, and building meaningful relationships.",
    icon: Users,
  },
  {
    title: "Social Media Advertising",
    desc: "Targeted ad campaigns to reach the right audience and maximize your ROI across platforms.",
    icon: DollarSign,
  },
  {
    title: "Analytics & Reporting",
    desc: "Detailed performance reports with actionable insights to continuously improve your strategy.",
    icon: BarChart3,
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with relevant influencers to expand reach and build credibility for your brand.",
    icon: Award,
  },
];

const contentTypes = [
  {
    name: "Static Posts",
    desc: "Eye-catching graphics",
    icon: ImageIcon,
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Video Content",
    desc: "Engaging short videos",
    icon: Video,
    bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Stories",
    desc: "Daily story updates",
    icon: Sparkles,
    bgColor: "bg-gradient-to-br from-orange-100 to-red-100",
    iconColor: "text-orange-600",
  },
  {
    name: "Copywriting",
    desc: "Compelling captions",
    icon: FileText,
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
    iconColor: "text-green-600",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery",
    desc: "We analyze your brand, audience, and goals to create a tailored strategy.",
  },
  {
    step: "2",
    title: "Strategy",
    desc: "Develop content calendar, themes, and posting schedule aligned with your objectives.",
  },
  {
    step: "3",
    title: "Create",
    desc: "Design engaging content including graphics, videos, and compelling copy.",
  },
  {
    step: "4",
    title: "Engage & Grow",
    desc: "Post content, engage with audience, and continuously optimize for better results.",
  },
];

const whyChooseUs = [
  {
    title: "Proven Results",
    desc: "We've helped businesses grow their social media presence by 300%+ with strategic content and engagement.",
    icon: TrendingUp,
  },
  {
    title: "Creative Excellence",
    desc: "Our team of designers, videographers, and copywriters create scroll-stopping content that converts.",
    icon: Sparkles,
  },
  {
    title: "Data-Driven",
    desc: "Every decision backed by analytics and insights to ensure maximum ROI and continuous improvement.",
    icon: BarChart3,
  },
];