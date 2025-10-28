"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  BarChart3,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Store,
  Building2,
  Landmark,
  UtensilsCrossed,
  Plane,
  GraduationCap,
} from "lucide-react";

export default function QueueManagementSection() {
  const brand = "#022E64";

  const features = [
    {
      icon: Clock,
      title: "Real-Time Queue Counting",
      desc: "Monitor queues in real-time and get instant alerts to reduce waiting times and prevent abandonment.",
    },
    {
      icon: Users,
      title: "Optimize Staff Allocation",
      desc: "Align staff levels to high-traffic hours for efficient queue management and improved customer service.",
    },
    {
      icon: BarChart3,
      title: "Minimize Waiting Times",
      desc: "Calculate average waiting time at checkout queues and adjust operations to minimize delays.",
    },
    {
      icon: TrendingUp,
      title: "Increase Customer Satisfaction",
      desc: "Shorten queues and improve the customer journey to enhance satisfaction and loyalty.",
    },
    {
      icon: Cpu,
      title: "Prevent Revenue Loss",
      desc: "Reduce abandoned purchases due to long waits and ensure maximum revenue retention.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & GDPR Compliance",
      desc: "All queue data is anonymous and fully compliant with GDPR regulations.",
    },
  ];

  const industries = [
    { icon: Store, label: "Retail Stores" },
    { icon: Building2, label: "Shopping Centers" },
    { icon: Landmark, label: "Museums" },
    { icon: UtensilsCrossed, label: "Restaurants" },
    { icon: Plane, label: "Airports" },
    { icon: GraduationCap, label: "Universities" },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-linear-to-br from-white via-[#f4f9ff] to-[#eaf2ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brand }}>
            Queue Management & Measurement Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Minimize the time your customers spend waiting in line at checkouts to increase satisfaction and boost sales.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 font-semibold rounded-full shadow-md text-white transition"
            style={{ backgroundColor: brand }}
          >
            <Link href="/contact">Get a Demo</Link>
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(2,46,100,0.4)",
                }}
                className="bg-[#022E64] rounded-2xl shadow-lg p-8 text-left transition-all duration-300"
              >
                <motion.div
                  className="mb-6 inline-block"
                  initial={{
                    rotate: 0,
                    scale: 1,
                    filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    filter: "drop-shadow(0px 0px 12px rgba(255,255,255,0.9))",
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-24 bg-[#f9fbfe] rounded-3xl p-10 md:p-16 shadow-inner text-center"
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: brand }}>
            Benefits of Queue Management System
          </h3>
          <ul className="text-gray-600 max-w-3xl mx-auto text-left list-disc list-inside space-y-3">
            <li>Minimize Queue Waiting Times</li>
            <li>Optimize Staff Allocation</li>
            <li>Eliminate Abandonment</li>
            <li>Increase Customer Loyalty</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-8 py-3 font-semibold rounded-full shadow-md text-white transition"
            style={{ backgroundColor: brand }}
          >
            <Link href="/contact">Get a Demo</Link>
          </motion.button>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-28"
        >
          <h3 className="text-3xl font-bold mb-10" style={{ color: brand }}>
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(2,46,100,0.4)",
                  }}
                  className="bg-[#022E64] text-white rounded-2xl p-8 shadow-lg flex flex-col items-start hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    initial={{
                      rotate: 0,
                      scale: 1,
                      filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      filter: "drop-shadow(0px 0px 12px rgba(255,255,255,0.9))",
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="mb-4"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="mt-2 text-xl font-semibold">{item.label}</h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
