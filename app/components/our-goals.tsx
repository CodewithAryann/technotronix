"use client";

import Image from "next/image";
import { motion} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function OurGoals() {
  const goals = [
    {
      title: "Customer centric approach",
      desc: "At Technotronix, our customers are at the center of every innovation we deliver.Through Cyber Defense and Smart Retail Intelligence, we design solutions that align seamlessly with each client’s unique objectives. Our collaborative mindset drives security, efficiency, and continuous innovation, ensuring every engagement builds trust, value, and lasting business impact.",
    },
    {
      title: "Key Objectives",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    },
    {
      title: "Innovation Focus",
      desc: "Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
    },
    {
      title: "Continuous Improvement",
      desc: "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis.",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

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
        <p className="text-[#022E64] font-semibold uppercase tracking-wide mb-2">
          Our Mission
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Securing Your Digital World Together
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Bridging Cybersecurity and AI-driven Retail Intelligence to protect, optimize, and transform digital ecosystems.
        </p>
      </div>

      {/* Scrollable Carousel */}
      <div className="relative z-10 w-full max-w-6xl overflow-hidden pt-4 pl-4 pb-4" ref={carouselRef}>
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-[#022E64] text-white rounded-2xl p-8 w-[320px] shrink-0 flex flex-col gap-3 shadow-lg ${
                i === 0 ? "border-2" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">{goal.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>


      
    </section>
  );
}
