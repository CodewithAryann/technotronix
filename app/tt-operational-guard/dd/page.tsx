"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Zap,
  Network,
  Search,
} from "lucide-react";

export default function DNSSenseDDRPage() {
  const features = [
    {
      title: "AI-Powered DNS Threat Detection",
      desc: "Leverages AI and machine learning to analyze DNS traffic patterns and detect sophisticated or hidden tunneling attacks in real time.",
      icon: Brain,
    },
    {
      title: "Domain Intelligence Engine (Cyber X-Ray)",
      desc: "Enriches billions of domains with real-time reputation data, enabling instant identification of malicious or suspicious activity.",
      icon: Search,
    },
    {
      title: "Automated Response & Containment",
      desc: "Automates the detection-to-response workflow — blocking malicious domains, isolating compromised devices, and halting command-and-control traffic instantly.",
      icon: Zap,
    },
    {
      title: "Integration with SIEM, XDR & SOAR",
      desc: "Feeds enriched DNS telemetry into your security stack to enhance visibility, accelerate incident response, and improve correlation accuracy.",
      icon: Network,
    },
    {
      title: "Full Visibility & Forensic Insights",
      desc: "Provides granular DNS analytics and device-level traceability to uncover attack vectors, root causes, and exposure trends across the network.",
      icon: Shield,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden">
      {/* Header with Logo */}
      <div className="relative z-10 mb-12 flex justify-center">
        <Image
          src="/images/logos/tt-perimeter-guard.png"
          alt="DNSSense DDR 2.0 Product Logo"
          width={300}
          height={150}
          className="object-contain"
          priority
        />
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          DNSSense – DDR 2.0
        </h1>
        <p className="text-xl md:text-2xl text-[#022E64] font-semibold mb-4">
          DNS Detection & Response
        </p>
        <p className="text-slate-600">
          Predict, detect, and respond to DNS-based threats in real time. 
          Enhance visibility, accelerate containment, and automate defense actions across your entire network.
        </p>
      </div>

      {/* Features Grid with Glow */}
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
              className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden group
                         hover:shadow-2xl transition-all duration-300
                         before:absolute before:inset-0 before:rounded-2xl before:shadow-[0_0_20px_4px_rgba(2,46,100,0.6)]
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

              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Powered by Footer */}
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
            src="/images/logos/dnssense.png"
            alt="DNSSense Company Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* CTA Section with Enhanced Glow */}
      <motion.div
        className="relative overflow-hidden w-full py-20 px-6 text-center rounded-3xl shadow-2xl max-w-5xl
                   bg-linear-to-r from-[#002C60] via-[#004D94] to-[#0068C9] text-white mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Radial Glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,46,100,0.25),transparent_70%)] 
                     animate-pulse-slow pointer-events-none rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
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
            Ready to Detect and Respond to DNS Threats?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            See how <strong>DNSSense DDR 2.0</strong> empowers your security team with AI-powered detection, 
            automated response, and deep DNS visibility.
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
