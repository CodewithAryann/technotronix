"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Radar, BarChart3 } from "lucide-react";
import Head from "next/head";

export default function SeceonPage() {
  const features = [
    {
      title: "Unified Threat Detection & Response",
      desc: "Combines SIEM and XDR into one platform to deliver full-spectrum visibility — across users, endpoints, networks, and cloud environments.",
      icon: Shield,
    },
    {
      title: "AI & Machine Learning Analytics",
      desc: "Leverages advanced AI models and behavioral analytics (UEBA) to detect known, unknown, and insider threats in real time.",
      icon: Cpu,
    },
    {
      title: "Automated Incident Response (SOAR Built-In)",
      desc: "Responds instantly to detected threats with automated playbooks that isolate, block, or remediate — cutting response time from hours to seconds.",
      icon: Zap,
    },
    {
      title: "Real-Time Correlation & Threat Intelligence",
      desc: "Correlates billions of events with global threat feeds and contextual insights to highlight the attacks that matter most.",
      icon: Radar,
    },
    {
      title: "Centralized Dashboard & Compliance Reporting",
      desc: "Offers intuitive dashboards and audit-ready reports for frameworks like ISO 27001, NIST, and GDPR — empowering CISOs and SOC teams.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden">
      {/* ===== HEAD FOR SEO ===== */}
      <Head>
        <title>Seceon SIEM & XDR | TT Cloud Guard – Technotronix UAE</title>
        <meta
          name="description"
          content="Seceon SIEM & XDR by TT Cloud Guard offers unified visibility, AI-driven threat detection, automated incident response, and real-time cloud security intelligence."
        />
        <link rel="canonical" href="https://technotronix.ae/tt-cloud-guard" />
      </Head>

      {/* Header with Logo */}
      <div className="relative z-10 mb-12 flex justify-center">
        <Image
          src="/images/logos/tt-cloud-guard-img.png"
          alt="TT Cloud Guard Logo"
          width={300}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Seceon – SIEM & XDR
        </h1>
        <p className="text-xl md:text-2xl text-[#022E64] font-semibold mb-4">
          Unified Visibility. AI-Driven Defense. Automated Response.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
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
                         before:shadow-[0_0_20px_4px_rgba(2,46,100,0.6)]
                         before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none"
            >
              {/* Icon */}
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#022E64]/10 mb-4
                           transition-shadow group-hover:shadow-[0_0_15px_3px_rgba(2,46,100,0.4)]"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                <Icon className="text-[#022E64]" size={28} />
              </motion.div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Powered by Seceon Footer */}
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
            src="/images/logos/seceon.png"
            alt="Seceon Logo"
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
            Ready to Elevate Your Cloud Security?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Discover how TT Cloud Guard provides unified visibility, automated compliance,
            and real-time threat protection across your entire cloud infrastructure.
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
