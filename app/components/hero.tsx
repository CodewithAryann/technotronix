"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.png" 
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 max-w-2xl space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Cyber Guardians for Smart Business and AI-Powered Retail
            </h1>

            <motion.p
              className="text-slate-600 text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Technotronix combines deep domain expertise in Cyber Defense, Artificial Intelligence, and IoT to deliver transformative technology solutions.
With a strong focus on enterprise-grade cybersecurity, we safeguard mid to large organizations against emerging digital threats.
Our Data Analytics platform extends this value into the retail industry, ensuring operations are both secure and optimized for performance.
            </motion.p>

            {/* <motion.button
              className="px-8 py-3 bg-[#022e64] hover:bg-[#022e75] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Purchase
            </motion.button> */}
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/hero-img.png"
                alt="Cyber Security Shield"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
