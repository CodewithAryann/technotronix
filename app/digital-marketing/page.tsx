"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Mail,
  PenTool,
  LineChart,
  Users,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Rocket,
} from "lucide-react";
import Link from "next/link";


export default function DigitalMarketingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <main className="relative w-full bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-4xl text-center px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Data-Driven Digital Marketing Solutions
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200">
            Intelligent digital strategies designed to drive visibility,
            engagement, and measurable business growth.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#022e64]"
        >
          Digital Marketing by Technotronix
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          At Technotronix, our digital marketing services combine advanced
          analytics, creative execution, and enterprise-grade strategy to help
          organizations reach the right audience, at the right time, with the
          right message.
        </motion.p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 22px rgba(2,46,100,0.35)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#022e64]/10 mb-5">
                <item.icon className="w-9 h-9 text-[#022e64]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center"
          >
            Our Digital Marketing Process
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-5 gap-6 text-center">
            {process.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <span className="text-[#022e64] font-bold text-lg">
                  {step.step}
                </span>
                <h4 className="mt-3 font-semibold text-gray-900">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DUBAI PRESENCE ================= */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center"
          >
            Empowering Dubai&apos;s Growing Businesses
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-4 text-center text-gray-600 max-w-3xl mx-auto"
          >
            As a fresh, innovative agency based in Dubai, we&apos;re partnering with
            ambitious startups and SMEs across Dubai Marina, Business Bay, DIFC, and beyond
            to build their digital presence from the ground up.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {dubaiInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <item.icon className="w-12 h-12 text-[#022e64] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE CALCULATOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-4"
        >
          Calculate Your Potential ROI
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12"
        >
          See what digital marketing could mean for your business
        </motion.p>

        <ROICalculator />
      </section>

      {/* ================= SUCCESS METRICS ================= */}
      {/* <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-16"
          >
            Our Early Achievements in Dubai
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#022e64]">
                  {metric.value}
                </div>
                <div className="mt-2 text-gray-600 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= USE CASES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center"
        >
          Who We Help
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-100"
            >
              <item.icon className="w-10 h-10 text-[#022e64]" />
              <h4 className="mt-4 font-semibold text-gray-900">{item.title}</h4>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE QUIZ ================= */}
      <section className="bg-linear-to-br from-[#022e64] to-[#034080] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4"
          >
            Which Digital Marketing Strategy Fits You?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-200 mb-12"
          >
            Take our quick assessment to discover the best approach for your
            business
          </motion.p>

          <MarketingQuiz />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#022e64] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Accelerate Your Digital Growth?
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Let Technotronix build and manage a digital marketing strategy
            aligned with your business objectives.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-10 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
              Talk to Our Experts
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= INTERACTIVE COMPONENTS ================= */

function ROICalculator() {
  const [budget, setBudget] = React.useState(5000);
  const [traffic, setTraffic] = React.useState(10000);
  const [conversionRate, setConversionRate] = React.useState(5); // %

  const totalTraffic = traffic + Math.round(budget / 10); // budget impact
  const estimatedLeads = Math.round(totalTraffic * (conversionRate / 100));
  const estimatedRevenue = estimatedLeads * 250;
  const roi = Math.round(((estimatedRevenue - budget) / budget) * 100);

  return (
    <motion.div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Marketing Budget (AED)
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#022e64]"
            />
            <div className="text-right text-2xl font-bold text-[#022e64] mt-2">
              {budget.toLocaleString()} AED
            </div>
          </div>

          {/* Traffic */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Monthly Website Traffic
            </label>
            <input
              type="range"
              min="100"
              max="500000"
              step="1000"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#022e64]"
            />
            <div className="text-right text-2xl font-bold text-[#022e64] mt-2">
              {traffic.toLocaleString()} visitors
            </div>
          </div>

          {/* Conversion Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Conversion Rate (%)
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#022e64]"
            />
            <div className="text-right text-2xl font-bold text-[#022e64] mt-2">
              {conversionRate}%
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-linear-to-br from-[#022e64] to-[#034080] rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-6">Projected Results</h3>
          <div className="space-y-4">
            <div>
              <div className="text-gray-300 text-sm">Estimated Monthly Leads</div>
              <div className="text-3xl font-bold">{estimatedLeads}</div>
            </div>
            <div>
              <div className="text-gray-300 text-sm">Potential Monthly Revenue</div>
              <div className="text-3xl font-bold">{estimatedRevenue.toLocaleString()} AED</div>
            </div>
            <div className="pt-4 border-t border-white/20">
              <div className="text-gray-300 text-sm">Projected ROI</div>
              <div className="text-3xl font-bold text-green-300">{roi}%</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarketingQuiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [showResult, setShowResult] = React.useState(false);

  const questions = [
    {
      q: "What's your primary business goal?",
      options: [
        "Brand Awareness",
        "Lead Generation",
        "Sales Growth",
        "Customer Retention",
      ],
    },
    {
      q: "What's your industry?",
      options: [
        "Retail/E-commerce",
        "B2B Services",
        "Real Estate",
        "Hospitality/Tourism",
      ],
    },
    {
      q: "What's your current digital presence?",
      options: [
        "Just Starting",
        "Basic Website",
        "Active on Social",
        "Full Digital Presence",
      ],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    if (answers[0] === "Brand Awareness")
      return "Social Media Marketing + Content Strategy";
    if (answers[0] === "Lead Generation") return "SEO + PPC Campaign Mix";
    if (answers[0] === "Sales Growth")
      return "Conversion-Focused PPC + Email Automation";
    return "Customer Retention Program + Email Marketing";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 text-center shadow-xl"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Your Recommended Strategy
        </h3>
        <p className="text-xl text-[#022e64] font-semibold mb-6">
          {getRecommendation()}
        </p>
        <p className="text-gray-600 mb-8">
          Based on your answers, this approach will help you achieve your goals
          most effectively.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition cursor-pointer"
          >
            Retake Quiz
          </button>
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#022e64] text-white rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
              Get Custom Quote
            </button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={currentQuestion}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-[#022e64]">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#022e64] h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        {questions[currentQuestion].q}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {questions[currentQuestion].options.map((option, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer(option)}
            className="p-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-left font-medium text-gray-700 hover:border-[#022e64] hover:bg-[#022e64]/5 transition"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve search visibility, rankings, and long-term organic traffic growth.",
    icon: Search,
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "Targeted campaigns across Google and social platforms with measurable ROI.",
    icon: Megaphone,
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand awareness and engagement across key social platforms.",
    icon: Users,
  },
  {
    title: "Content Marketing",
    desc: "Strategic content that educates, engages, and converts your audience.",
    icon: PenTool,
  },
  {
    title: "Email Marketing & Automation",
    desc: "Lead nurturing and retention through personalized automation.",
    icon: Mail,
  },
  {
    title: "Analytics & Performance Tracking",
    desc: "Data-driven insights to continuously optimize campaigns.",
    icon: LineChart,
  },
];

const process = [
  {
    step: "01",
    title: "Audit",
    desc: "Analyze audience, competitors, and channels.",
  },
  { step: "02", title: "Strategy", desc: "Build a tailored digital roadmap." },
  { step: "03", title: "Execution", desc: "Launch optimized campaigns." },
  {
    step: "04",
    title: "Optimization",
    desc: "Improve performance continuously.",
  },
  { step: "05", title: "Reporting", desc: "Transparent ROI-focused insights." },
];

const useCases = [
  {
    title: "Startups & New Ventures",
    desc: "Launch your brand with a strong digital foundation and growth strategy.",
    icon: Rocket,
  },
  {
    title: "Retail & E-commerce",
    desc: "Drive online sales and customer engagement from day one.",
    icon: TrendingUp,
  },
  {
    title: "Service-Based Businesses",
    desc: "Generate quality leads and build your client base.",
    icon: Target,
  },
];

const dubaiInfo = [
  {
    title: "Fresh Perspective",
    desc: "As a new agency in Dubai, we bring innovative, modern approaches to digital marketing, staying ahead of the latest trends and technologies.",
    icon: Sparkles,
  },
  {
    title: "Growing Together",
    desc: "We're building our reputation by partnering with ambitious businesses in Dubai Marina, Business Bay, and across the UAE.",
    icon: Rocket,
  },
  {
    title: "Hungry for Success",
    desc: "Every client matters to us. We're committed to delivering exceptional results to build lasting partnerships and grow together.",
    icon: Award,
  },
];

// const metrics = [
//   { value: "20+", label: "Active Clients" },
//   { value: "150%", label: "Avg. Traffic Growth" },
//   { value: "500K+", label: "AED in Client Revenue" },
//   { value: "100%", label: "Client Satisfaction" },
// ];