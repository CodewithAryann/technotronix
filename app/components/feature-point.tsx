"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Bug, Clock, Users } from "lucide-react";

export default function FeaturePointPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Customized Security Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: "Vulnerability Assessment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 Incident Response",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "User Training Programs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden py-20 px-6 md:px-16 bg-cover bg-center bg-no-repeat p-0"
      style={{
        backgroundImage: "url('/images/featured-bg.png')", 
      }}
    >
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div> */}

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

        {/* Right Content — smaller */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scale-[0.92] md:scale-100 md:pr-8"
        >
          {/* <p className="text-[#022e64] font-semibold uppercase tracking-wide mb-2">
            Feature Point
          </p> */}
          <h2 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Key Service Features Protecting You
          </h2>
          <p className="text-slate-600 mb-8 max-w-md">
            we deliver end-to-end protection across your cloud, data, network, and endpoints.
Our real-time threat detection, vulnerability management, and Zero Trust frameworks ensure continuous defense.
Powered by leading technologies in SIEM, XDR, NDR, IAM, and DLP, we keep your organization secure, compliant, and resilient.

          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#022e64] text-white p-5 rounded-xl flex flex-col gap-3 shadow-md hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              >
                <div>{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
