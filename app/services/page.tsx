"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldAlert,
  Layers,
  RefreshCcw,
  FileCheck,
  Radar,
  GraduationCap,
} from "lucide-react";

export default function CyberServicesSection() {
  const services = [
    {
      icon: ShieldAlert,
      title: "Cyber Risk Assessment & Advisory",
      desc: "Identify hidden threats and security gaps through deep-dive audits and vulnerability assessments. Deliver actionable recommendations to strengthen defenses and align with regulatory standards.",
    },
    {
      icon: Layers,
      title: "Security Architecture Design",
      desc: "Develop and implement a layered, zero-trust architecture that protects data, networks, and endpoints across hybrid and cloud environments.",
    },
    {
      icon: RefreshCcw,
      title: "Incident Response & Recovery Planning",
      desc: "Prepare for the unexpected. Our experts build proactive response playbooks that ensure swift containment, recovery, and continuity after a breach.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      desc: "Navigate frameworks like ISO 27001, NESA, GDPR, and CIS Controls with structured guidance and documentation support.",
    },
    {
      icon: Radar,
      title: "SOC Readiness & Optimization",
      desc: "Design, evaluate, or enhance your Security Operations Center (SOC) with proven processes, threat intelligence, and 24/7 monitoring strategies.",
    },
    {
      icon: GraduationCap,
      title: "Cyber Awareness & Training Programs",
      desc: "Empower your workforce through targeted awareness workshops that reduce human risk and foster a culture of security.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#001B44] via-[#022e64] to-[#013b7a] text-white py-24">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-16 text-center"
        >
          Our Cybersecurity Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(255,255,255,0.25)",
              }}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center space-y-5 shadow-lg hover:bg-white/20 transition duration-300"
            >
              {/* Animated Icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="p-4 bg-white/20 rounded-full"
              >
                <Icon size={40} className="text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">{desc}</p>

              {/* subtle glow border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.25)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.15)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#022e64] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us for a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
