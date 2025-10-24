"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#022e64] text-white py-24 px-6 md:px-16 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cyber Defense and Smart Retail Intelligence
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Redefining the Connected Enterprise
          </p>
        </motion.div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#022e64] via-[#04407e] to-[#066ba8] opacity-90"></div>
      </section>

      {/* About Section */}
      <section
  className="py-20 px-6 md:px-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/service.png')" }}
>
  {/* Optional overlay for contrast */}
  {/* <div className="absolute inset-0 bg-white/80"></div> */}

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#022e64] mb-6">
        About Technotronix
      </h2>

      <p className="text-gray-700 leading-relaxed mb-5">
        Our Cybersecurity arm provides holistic protection through
        next-generation capabilities in threat detection, identity and
        access management, cloud defense, and rapid incident response,
        ensuring organizations remain one step ahead of emerging cyber
        threats.
      </p>

      <p className="text-gray-700 leading-relaxed mb-5">
        At the same time, our AI-driven IoT and Video Analytics platforms
        are transforming the retail landscape — delivering real-time
        footfall insights, behavioral analytics, and performance
        intelligence that elevate both efficiency and customer experience.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        At Technotronix, we go beyond securing systems — we secure
        possibilities. By uniting Cyber Defense and Smart Analytics, we
        enable enterprises across retail, transportation, IT, and
        government sectors to thrive in the era of intelligent,
        data-driven innovation.
      </p>

      <Link href="/contact" passHref>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#022e64] hover:bg-[#033875] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Contact Us
        </motion.button>
      </Link>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Image
        src="/images/about-img.png"
        alt="Technotronix - Cyber Defense & Smart Analytics"
        width={500}
        height={400}
        className="rounded-2xl shadow-xl object-cover"
      />
    </motion.div>
  </div>
</section>


      {/* Vision Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#022e64] mb-6"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            We envision a connected world where cybersecurity and intelligent
            analytics work hand-in-hand — empowering businesses to operate
            fearlessly, make smarter decisions, and unlock new opportunities
            with confidence.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
