"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FortiGatePage() {
  const features = [
    {
      title: "Next-Generation Threat Protection",
      desc: "Combines intrusion prevention, web filtering, antivirus, and application control — delivering real-time defense against known and zero-day threats.",
    },
    {
      title: "High-Performance Security with FortiASIC",
      desc: "Powered by Fortinet’s custom-built ASIC processors, FortiGate delivers exceptional throughput and low latency — ensuring speed without sacrificing security.",
    },
    {
      title: "Integrated Secure SD-WAN",
      desc: "Optimizes and secures WAN connectivity with built-in SD-WAN — reducing cost, improving application performance, and ensuring reliable cloud access.",
    },
    {
      title: "AI-Driven Threat Intelligence (FortiGuard)",
      desc: "Leverages FortiGuard Labs’ global threat intelligence network to continuously detect, analyze, and block emerging threats in real time.",
    },
    {
      title: "Centralized Management & Security Fabric Integration",
      desc: "Integrates seamlessly with Fortinet’s Security Fabric, providing unified policy control, analytics, and orchestration across network, endpoint, and cloud.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden">
      {/* Header with Logo */}
      <div className="relative z-10 mb-12 flex justify-center">
        <Image
          src="/images/logos/tt-perimeter-guard.png"
          alt="FortiNet Logo"
          width={300}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          FortiNet – Next-Generation Firewall (NGFW)
        </h1>
        <p className="text-xl md:text-2xl text-[#022E64] font-semibold mb-4">
          Fast. Smart. Secure. The Core of Network Defense.
        </p>
        <p className="text-slate-600">
          Protect your network with next-generation threat detection, AI-driven intelligence, high-performance FortiASIC hardware, and seamless Security Fabric integration.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden
                       hover:shadow-2xl transition-all duration-300
                       before:absolute before:inset-0 before:rounded-2xl
                       before:shadow-[0_0_20px_4px_#022E64]
                       before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Powered by Fortinet Footer */}
      <motion.div
        className="flex flex-col items-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-500 mb-2">Powered by</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/logos/fortinet.png"
            alt="Fortinet Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Animated CTA Section */}
      <motion.div
        className="relative overflow-hidden w-full py-20 px-6 text-center rounded-3xl shadow-2xl max-w-5xl
                   bg-linear-to-r from-[#002C60] via-[#004D94] to-[#0068C9] text-white mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Secure Your Network with FortiGate?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Contact us to see how FortiGate NGFW protects your infrastructure with high-performance security, AI-driven threat intelligence, and centralized management.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-[#002C60] font-semibold px-10 py-4 rounded-full
                         shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
