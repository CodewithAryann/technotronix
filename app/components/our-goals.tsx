"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
} from "lucide-react";

export default function OurGoals() {
  const goals = [
    {
      title: "Our Mission",
      desc: "We empower organizations with intelligent and resilient technology solutions that strengthen cybersecurity and enhance data intelligence. Through advanced cyber defense and AI-driven video analytics, we deliver innovation, trust, and excellence, helping businesses operate securely and intelligently in a connected world.",
      icon: Target,
    },
    {
      title: "Our Vision",
      desc: "Our vision is to become a global leader in intelligent security and data innovation, redefining how organizations protect, connect, and grow in the digital era. We strive to create a future where cyber resilience and smart analytics work hand in hand — securing digital infrastructures, empowering retail intelligence, and driving a safer, smarter, and more connected world.",
      icon: Eye,
    },
    {
      title: "Customer Centric Approach",
      desc: "Our customers are at the center of every innovation we deliver. Through Cyber Defense and Smart Retail Intelligence, we design solutions that align seamlessly with each client’s unique objectives. Our collaborative mindset drives security, efficiency, and continuous innovation, ensuring every engagement builds trust, value, and lasting business impact.",
      icon: Users,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/goal-bg-1.png"
          alt="Curved line background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Securing Your Digital World Together
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Bridging Cybersecurity and AI-driven Retail Intelligence to protect, optimize, and transform digital ecosystems.
        </p>
      </div>

      {/* Animated Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {goals.map((goal, i) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-[#022E64] text-white rounded-2xl p-8 flex flex-col items-start gap-4 shadow-lg overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Icon */}
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 mb-2"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-semibold tracking-tight group-hover:text-[#A6D1FF] transition-colors duration-300">
                {goal.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {goal.desc}
              </p>

              {/* Bottom Gradient Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#00A6FB] via-[#0073E6] to-[#002E64] w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
