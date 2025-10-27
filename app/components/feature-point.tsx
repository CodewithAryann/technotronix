"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Bug, Clock, Users } from "lucide-react";

export default function FeaturePointPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Customized Security Solutions",
      desc: "Tailored protection built to secure, adapt, and evolve intelligently.",
    },
    {
      icon: Bug,
      title: "Vulnerability Assessment",
      desc: "Identify, analyze, and fortify against evolving security threats.",
    },
    {
      icon: Clock,
      title: "24/7 Incident Response",
      desc: "Always alert, responding fast to protect your operations.",
    },
    {
      icon: Users,
      title: "User Training Programs",
      desc: "Empowering users to recognize, respond, and prevent threats.",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden py-20 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/featured-bg.png')" }}
    >
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1.2fr_0.9fr] gap-12 items-center z-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/featured-img.png"
            alt="Security Analyst Working"
            width={600}
            height={600}
            className="object-cover w-full h-190"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scale-[0.92] md:scale-100 md:pr-8"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Key Service Features Protecting You
          </h2>
          <p className="text-slate-600 mb-8 max-w-md">
            We deliver end-to-end protection across your cloud, data, network, and endpoints.
            Our real-time threat detection, vulnerability management, and Zero Trust frameworks ensure continuous defense.
            Powered by leading technologies in SIEM, XDR, NDR, IAM, and DLP, we keep your organization secure, compliant, and resilient.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-[#022e64] text-white p-5 rounded-xl flex flex-col gap-3 shadow-md
                             hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 overflow-hidden group"
                >
                  {/* Icon with animation */}
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.3, color: "#00A6FB" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-lg font-semibold group-hover:text-[#A6D1FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(0,166,251,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
