"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurGoals() {
  const goals = [
    {
      title: "Our Mission",
      desc: "We empower organizations with intelligent and resilient technology solutions that strengthen cybersecurity and enhance retail intelligence. Through advanced cyber defense and AI-driven video analytics, we deliver innovation, trust, and excellence, helping businesses operate securely and intelligently in a connected world.",
    },
    {
      title: "Our Vision",
      desc: "Our vision is to become a global leader in intelligent security and data innovation, redefining how organizations protect, connect, and grow in the digital era. We strive to create a future where cyber resilience and smart analytics work hand in hand — securing digital infrastructures, empowering retail intelligence, and driving a safer, smarter, and more connected world.",
    },
    {
      title: "Customer Centric Approach",
      desc: "Our customers are at the center of every innovation we deliver. Through Cyber Defense and Smart Retail Intelligence, we design solutions that align seamlessly with each client’s unique objectives. Our collaborative mindset drives security, efficiency, and continuous innovation, ensuring every engagement builds trust, value, and lasting business impact.",
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

      {/* Static 3 Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {goals.map((goal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#022E64] text-white rounded-2xl p-8 flex flex-col gap-3 shadow-lg"
          >
            <h3 className="text-lg font-semibold">{goal.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{goal.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
