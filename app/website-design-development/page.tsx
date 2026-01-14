"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Search,
  Layout,
  Database,
  Globe,
  Rocket,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function WebsiteDesignDevelopmentPage() {
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
      {/* ================= SEO ================= */}
      <Head>
        <link rel="canonical" href="https://technotronix.ae/website-design-development" />
        <title>Website Design & Development | Technotronix Dubai</title>
        <meta
          name="description"
          content="Professional website design and development services in Dubai. Custom websites, e-commerce, and web applications."
        />
      </Head>

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
                  Website Design & Development That Drives Results
                </h1>
                <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200">
                  Transform your digital presence with stunning, high-performance websites built for growth and user engagement.
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
          Web Solutions by Technotronix
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          We create modern, responsive websites that combine beautiful design with 
          powerful functionality. From corporate websites to e-commerce platforms, 
          we build digital experiences that convert visitors into customers.
        </motion.p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-16"
        >
          Our Services
        </motion.h2>

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

      {/* ================= TECHNOLOGIES ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-4"
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            We use cutting-edge technologies to build fast, secure, and scalable websites
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-[#022e64] transition-all"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center"
          >
            Our Development Process
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <span className="text-[#022e64] font-bold text-lg">
                  {step.step}
                </span>
                <h4 className="mt-3 font-semibold text-gray-900 text-sm">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEBSITE COST CALCULATOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-4"
        >
          Estimate Your Website Cost
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12"
        >
          Get an instant estimate for your project
        </motion.p>

        <WebsiteCostCalculator />
      </section>

      {/* ================= DUBAI SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center"
          >
            Building Dubai&apos;s Digital Future
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-4 text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            As a rising web development agency in Dubai, we&apos;re creating exceptional 
            digital experiences for businesses across the UAE.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {dubaiInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200"
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

      {/* ================= SUCCESS METRICS ================= */}
      <section className="bg-linear-to-br from-[#022e64] to-[#034080] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold text-white text-center mb-16"
          >
            Our Track Record
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
                <div className="text-4xl sm:text-5xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="mt-2 text-gray-200 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT TYPE SELECTOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-semibold text-[#022e64] text-center mb-4"
        >
          What Type of Website Do You Need?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12"
        >
          Find the perfect solution for your business
        </motion.p>

        <ProjectTypeSelector />
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#022e64] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Build Your Dream Website?
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Let&apos;s create a stunning, high-performance website that helps your 
            business grow and succeed online.
          </p>
          <button className="mt-8 px-10 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:opacity-90 transition">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}

/* ================= INTERACTIVE COMPONENTS ================= */

function WebsiteCostCalculator() {
  const [websiteType, setWebsiteType] = React.useState("business");
  const [pages, setPages] = React.useState(5);
  const [features, setFeatures] = React.useState<string[]>([]);

  const basePrice = {
    business: 8000,
    ecommerce: 15000,
    custom: 25000,
  };

  const featurePrices: { [key: string]: number } = {
    cms: 2000,
    booking: 3000,
    payment: 2500,
    multilingual: 1500,
    seo: 1000,
  };

  const calculateCost = () => {
    let total = basePrice[websiteType as keyof typeof basePrice];
    total += (pages - 5) * 500;
    features.forEach((feature) => {
      total += featurePrices[feature] || 0;
    });
    return total;
  };

  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Website Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "business", label: "Business" },
                { value: "ecommerce", label: "E-commerce" },
                { value: "custom", label: "Custom" },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setWebsiteType(type.value)}
                  className={`p-3 rounded-lg font-medium transition ${
                    websiteType === type.value
                      ? "bg-[#022e64] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Pages: {pages}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#022e64]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Features
            </label>
            <div className="space-y-2">
              {[
                { value: "cms", label: "CMS Integration" },
                { value: "booking", label: "Booking System" },
                { value: "payment", label: "Payment Gateway" },
                { value: "multilingual", label: "Multi-language" },
                { value: "seo", label: "Advanced SEO" },
              ].map((feature) => (
                <label
                  key={feature.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={features.includes(feature.value)}
                    onChange={() => toggleFeature(feature.value)}
                    className="w-4 h-4 accent-[#022e64]"
                  />
                  <span className="text-gray-700">{feature.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-[#022e64] to-[#034080] rounded-xl p-8 text-white flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4">Estimated Cost</h3>
          <div className="text-5xl font-bold mb-2">
            {calculateCost().toLocaleString()} AED
          </div>
          <p className="text-gray-200 text-sm mb-6">
            Starting price for your project
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Base Price:</span>
              <span>
                {basePrice[websiteType as keyof typeof basePrice].toLocaleString()} AED
              </span>
            </div>
            {pages > 5 && (
              <div className="flex justify-between">
                <span className="text-gray-300">Extra Pages:</span>
                <span>{((pages - 5) * 500).toLocaleString()} AED</span>
              </div>
            )}
            {features.length > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-300">Features:</span>
                <span>
                  {features
                    .reduce((sum, f) => sum + featurePrices[f], 0)
                    .toLocaleString()}{" "}
                  AED
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        *Final cost may vary based on specific requirements and complexity
      </p>
    </motion.div>
  );
}

function ProjectTypeSelector() {
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const projectTypes = [
    {
      type: "Corporate Website",
      desc: "Professional business websites with modern design",
      features: ["5-10 Pages", "Responsive Design", "Contact Forms", "SEO Basics"],
      price: "From 8,000 AED",
      timeline: "2-3 weeks",
    },
    {
      type: "E-commerce Store",
      desc: "Full-featured online stores with payment integration",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
        "Admin Panel",
      ],
      price: "From 15,000 AED",
      timeline: "4-6 weeks",
    },
    {
      type: "Custom Web App",
      desc: "Tailored solutions for unique business needs",
      features: [
        "Custom Features",
        "Database Design",
        "API Integration",
        "Scalable Architecture",
      ],
      price: "From 25,000 AED",
      timeline: "6-12 weeks",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projectTypes.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setSelectedType(project.type)}
          className={`bg-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all ${
            selectedType === project.type
              ? "border-[#022e64] shadow-xl"
              : "border-gray-200"
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {project.type}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

          <div className="space-y-2 mb-6">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="text-2xl font-bold text-[#022e64] mb-1">
              {project.price}
            </div>
            <div className="text-sm text-gray-500">{project.timeline}</div>
          </div>

          <button
            className={`mt-4 w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
              selectedType === project.type
                ? "bg-[#022e64] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Select Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Custom Website Design",
    desc: "Unique, brand-focused designs that capture your business essence and engage your audience.",
    icon: Palette,
  },
  {
    title: "Web Development",
    desc: "Clean, efficient code built with modern frameworks for optimal performance and scalability.",
    icon: Code,
  },
  {
    title: "E-commerce Solutions",
    desc: "Complete online stores with secure payments, inventory management, and order tracking.",
    icon: Globe,
  },
  {
    title: "Responsive Design",
    desc: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "CMS Integration",
    desc: "Easy-to-use content management systems so you can update your site independently.",
    icon: Layout,
  },
  {
    title: "Performance Optimization",
    desc: "Lightning-fast loading speeds with optimized code, images, and caching strategies.",
    icon: Zap,
  },
  {
    title: "Security & SSL",
    desc: "Enterprise-grade security measures to protect your website and customer data.",
    icon: Shield,
  },
  {
    title: "SEO Foundation",
    desc: "Built-in SEO best practices for better search engine visibility from day one.",
    icon: Search,
  },
  {
    title: "Database Solutions",
    desc: "Robust database architecture for complex data management and scalability.",
    icon: Database,
  },
];

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "WordPress", icon: "📝" },
  { name: "Shopify", icon: "🛍️" },
  { name: "PHP", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "Tailwind", icon: "🎨" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Laravel", icon: "🔺" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understand goals and requirements",
  },
  {
    step: "02",
    title: "Design",
    desc: "Create mockups and prototypes",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Build with clean code",
  },
  {
    step: "04",
    title: "Test",
    desc: "Quality assurance checks",
  },
  {
    step: "05",
    title: "Launch",
    desc: "Deploy to production",
  },
  {
    step: "06",
    title: "Support",
    desc: "Ongoing maintenance",
  },
];

const dubaiInfo = [
  {
    title: "Modern Stack",
    desc: "We use the latest web technologies and frameworks to build fast, secure, and scalable websites that stand the test of time.",
    icon: Sparkles,
  },
  {
    title: "Fast Delivery",
    desc: "Quick turnaround times without compromising quality. Most projects delivered within 2-8 weeks depending on complexity.",
    icon: Rocket,
  },
  {
    title: "Full Support",
    desc: "Post-launch support and maintenance to ensure your website stays secure, updated, and performing at its best.",
    icon: Award,
  },
];

const metrics = [
  { value: "30+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "< 2s", label: "Avg Load Time" },
  { value: "24/7", label: "Support Available" },
];