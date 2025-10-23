"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
  className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat brightness-110 md:pb-[5%] pt-0"
  // style={{ backgroundImage: "url('/images/About-us.png')" }}
>
      {/* Optional gradient overlay for readability */}
      <div className="absolute inset-0"></div>
      {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" /> */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Single Animated Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/Image.png"
              alt="Cybersecurity Illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="flex-1 max-w-xl space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#022e64] font-semibold tracking-widest uppercase">
            About Us
          </p>
          <h2 className="text-3xl md:text-3xl font-extrabold text-slate-900 leading-tight drop-shadow-sm">
            Technotronix —Cyber Defense and Smart Retail intelligence.
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            From threat exposure management and XDR to IAM and DNS security, we bring together global cybersecurity powerhouses like Nanitor, Zecurion, Seceon, miniOrange, DNSSense, OctoXLabs, and QAX — all under one smart ecosystem.
Our mission? To keep your digital world secure while turning your data into real-time insights. Through our TT powered analytics, we help retail brands track footfall, understand behavior, and make smarter decisions — safely and intelligently.
          </p>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#022e64] hover:bg-[#022e75] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
