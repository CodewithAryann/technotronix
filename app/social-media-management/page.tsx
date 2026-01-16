"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  TrendingUp,
  Users,
  Target,
  Calendar,
  BarChart3,
  Heart,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Send,
  Video,
  PenTool,
  DollarSign,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function SocialMediaManagementPage() {
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
      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-6xl text-center px-6 z-10 py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-semibold">📱 Dubai&apos;s Premier Social Media Agency</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Social Media Management{" "}
            <span className="block mt-2 bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              That Grows Your Brand
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of social media marketing in Dubai. Experience excellence as we amplify your brand identity and engage your target audience through strategic planning.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </button>
            {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition border border-white/20">
              View Our Work
            </button> */}
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex gap-4 justify-center">
            {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* QUICK STATS */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: "500K+", label: "Followers Managed" },
              { icon: TrendingUp, value: "350%", label: "Avg Growth Rate" },
              { icon: Heart, value: "10M+", label: "Engagements Generated" },
              { icon: Award, value: "100+", label: "Brands Served" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-[#022e64] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#022e64]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Elevate your brand&apos;s digital persona through our dedicated SMM agency in Dubai. At Technotronix, 
            we unlock the power of social media marketing to amplify your brand identity and engage your audience 
            dynamically. We deliver excellence that drives tangible results through strategic planning and consulting expertise.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Harnessing the power of top-tier social media services, we enable impactful interactions with consumers, 
            yielding valuable insights and fortifying your brand image. Our innovative strategies are tailored to enhance 
            your brand&apos;s presence and drive company objectives. Trust Technotronix to navigate the ever-evolving landscape 
            of social media marketing, leading your brand toward a prosperous future.
          </p>
        </motion.div>
      </section>

      {/* WHY SOCIAL MEDIA */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Why <span className="text-[#022e64]">Social Media?</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
          >
            With our top social media services, harness the power to interact with consumers, gain insights, and enhance your brand image
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySocialMedia.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#022e64]/10 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#022e64]" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Our Social Network Advertising{" "}
            <span className="text-[#022e64]">Cuts Across Platforms</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto"
          >
            Expert management across all major social media platforms
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${platform.bgColor}`}>
                  <platform.icon className={`w-9 h-9 ${platform.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {platform.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our <span className="text-[#022e64]">Services</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            How We <span className="text-[#022e64]">Work</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE SELECTOR */}
      {/* <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Choose Your <span className="text-[#022e64]">Package</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 text-lg"
          >
            Flexible plans designed for businesses of all sizes
          </motion.p>

          <PackageSelector />
        </div>
      </section> */}

      {/* FAQ SECTION */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Frequently Asked <span className="text-[#022e64]">Questions</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 text-lg"
          >
            Find answers to common questions about our social media services
          </motion.p>

          <FAQSection />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Get in <span className="text-[#022e64]">Touch</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-12 text-lg"
          >
            Ready to elevate your social media presence? Contact us today for a free consultation
          </motion.p>

          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-10">
            Let&apos;s create a winning social media strategy that drives engagement, 
            builds community, and grows your business.
          </p>
           <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer">
                <ArrowRight className="w-5 h-5" />
                About Us
              </button></Link>
            <Link href="/about">
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition border-2 cursor-pointer border-white/30">
                Request a Quote
              </button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Looking for the best social media services in Dubai, UAE?",
      answer: "Technotronix is a top social media agency in Dubai, specializing in social media management, marketing, and advertising. We offer comprehensive solutions to maximize your online presence and drive business growth through strategic content creation, community management, and data-driven campaigns."
    },
    {
      question: "How can social media marketing benefit businesses in Dubai?",
      answer: "Social media marketing helps businesses expand their reach to global markets, establish strong client networks, and boost profits. It enables you to interact with consumers, gain valuable insights, enhance your brand image, acquire new clients, improve customer retention, drive organic traffic, and enhance search engine rankings for increased visibility."
    },
    {
      question: "What sets your social media agency apart in Dubai?",
      answer: "Technotronix stands out through our data-driven insights, tailored strategies, and proven track record. We combine market analysis with creative excellence to craft customized plans that achieve your objectives. Our comprehensive solutions include organic marketing, content creation, video advertisement, and campaign management, all designed to deliver exceptional results."
    },
    {
      question: "Need professional social media management in Dubai?",
      answer: "Yes! Our expert team handles everything from content creation and scheduling to community management and analytics. We create engaging visual assets, maintain consistent posting schedules, provide timely responses to your audience, and ensure your brand pages are fully optimized for maximum visibility, engagement, and conversions."
    },
    {
      question: "Want to enhance your social media presence in Dubai?",
      answer: "Absolutely! We help businesses elevate their brand's digital persona through strategic planning, innovative content, and consistent engagement. Our services include platform-specific strategies for Facebook, Instagram, Twitter, LinkedIn, TikTok, and more. We create scroll-stopping content that resonates with your target audience and drives measurable results."
    },
    {
      question: "How does Technotronix differentiate itself as an SMM agency in Dubai?",
      answer: "We differentiate ourselves through our innovative approach, industry expertise, and commitment to results. Our team stays ahead of trends and algorithms, utilizes strategic targeting and analysis, and provides comprehensive tracking and competitor analysis. We offer packaged solutions tailored to each business's unique needs, ensuring maximum growth prospects."
    },
    {
      question: "How do we ensure engagement and organic traffic growth?",
      answer: "We ensure engagement and organic traffic growth through strategic content planning, consistent posting schedules, active community management, and data-driven optimization. By establishing precise tracking mechanisms, monitoring key performance indicators, and analyzing competitor strategies, we continuously refine our approach to keep your brand ahead."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-bold text-gray-900 pr-4">
              {faq.question}
            </h3>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-[#022e64] shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[#022e64] shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    platforms: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual access key
          subject: `New Social Media Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          platforms: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#022e64]/10 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#022e64]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">info@technotronix.ae</p>
              {/* <p className="text-gray-600">social@technotronix.ae</p> */}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#022e64]/10 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#022e64]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600">+971 54 351 7100</p>
              {/* <p className="text-gray-600">+971 50 123 4567</p> */}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#022e64]/10 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#022e64]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
              <p className="text-gray-600">
                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba<br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
            <a
  key={i}
  href="#"
  className="group w-10 h-10 bg-[#022e64]/10 rounded-full flex items-center justify-center hover:bg-[#022e64] transition-colors"
>

              <Icon className="w-5 h-5 text-[#022e64] group-hover:text-white" />

            </a>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition"
              placeholder="John Doe"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition"
                placeholder="+971 50 123 4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="platforms" className="block text-sm font-semibold text-gray-700 mb-2">
              Platforms Interested In *
            </label>
            <select
              id="platforms"
              name="platforms"
              required
              value={formData.platforms}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition"
            >
              <option value="">Select platforms</option>
              <option value="instagram-facebook">Instagram & Facebook</option>
              <option value="linkedin">LinkedIn</option>
              <option value="all-platforms">All Platforms</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your social media goals..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Thank you! We&apos;ll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-linear-to-r from-[#022e64] to-[#045aa8] text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function PackageSelector() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const packages = [
    {
      name: "Starter",
      price: { monthly: 1500, yearly: 15000 },
      description: "Perfect for small businesses getting started",
      icon: Sparkles,
      popular: false,
      features: [
        "1-2 Social Platforms",
        "8-12 Posts per Month",
        "Basic Graphics Design",
        "Content Calendar",
        "Monthly Analytics Report",
        "Email Support",
      ],
      color: "from-[#022e64] to-[#034080]",
    },
    {
      name: "Growth",
      price: { monthly: 2800, yearly: 28000 },
      description: "Ideal for growing businesses",
      icon: TrendingUp,
      popular: true,
      features: [
        "3-4 Social Platforms",
        "20-30 Posts per Month",
        "Custom Graphics & Videos",
        "Stories & Reels (8/mo)",
        "Community Management",
        "Bi-weekly Reports",
        "Priority Support",
        "Hashtag Strategy",
      ],
      color: "from-[#022e64] to-[#045aa8]",
    },
    {
      name: "Premium",
      price: { monthly: 4500, yearly: 45000 },
      description: "For established brands seeking excellence",
      icon: Award,
      popular: false,
      features: [
        "All Major Platforms",
        "40-60 Posts per Month",
        "Premium Content Creation",
        "Stories, Reels & Videos",
        "Full Community Management",
        "Weekly Performance Reports",
        "Ad Campaign Management",
        "Influencer Outreach",
        "24/7 Support",
        "Competitor Analysis",
      ],
      color: "from-[#034080] to-[#045aa8]",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Billing Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-white text-[#022e64] shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full font-semibold transition flex items-center gap-2 ${
              billingCycle === "yearly"
                ? "bg-white text-[#022e64] shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Yearly
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => setSelectedPackage(pkg.name)}
            className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 cursor-pointer transition-all ${
              selectedPackage === pkg.name
                ? "border-[#022e64] shadow-2xl"
                : "border-gray-200 hover:border-[#045aa8]"
            } ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-linear-to-r from-[#022e64] to-[#045aa8] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </span>
              </div>
            )}

            <div className={`w-16 h-16 bg-linear-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
              <pkg.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900">
                  {pkg.price[billingCycle].toLocaleString()}
                </span>
                <span className="text-gray-500">AED</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {billingCycle === "monthly" ? "per month" : "per year"}
              </div>
              {billingCycle === "yearly" && (
                <div className="text-xs text-green-600 font-semibold mt-1">
                  Save {(pkg.price.monthly * 12 - pkg.price.yearly).toLocaleString()} AED/year
                </div>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                selectedPackage === pkg.name || pkg.popular
                  ? `bg-linear-to-r ${pkg.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {selectedPackage === pkg.name ? "Selected" : "Choose Plan"}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Need a custom package? We can create a tailored solution for your business.
        </p>
        <button className="px-8 py-3 bg-white border-2 border-[#022e64] text-[#022e64] rounded-full font-semibold hover:bg-blue-50 transition">
          Contact for Custom Quote
        </button>
      </div>
    </div>
  );
}

/* DATA */

const whySocialMedia = [
  "Utilize social media for effective product marketing, promotional campaigns, and business growth",
  "Acquire new clients, gather customer insights, and enhance customer retention",
  "Expand your reach to include global markets and establish client networks to boost profits",
  "Get innovative business ideas to enhance your brand and achieve company goals",
  "Stay ahead of the competition with strategic marketing strategies",
  "Drive organic traffic and enhance search engine rankings for increased visibility"
];

const platforms = [
  {
    name: "Facebook",
    desc: "Facebook is the social media networking king. A master among all crafts, it gives your brand the right to speak and express itself over the platform. It permits protracted material, therefore allows for more expressiveness.",
    icon: Facebook,
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Instagram",
    desc: "Instagram concentrates primarily on eye-catching visual content. The content has expanded in tandem with market changes. Instagram's content marketing techniques have moved past memes and more towards educational resources and sources.",
    icon: Instagram,
    bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
    iconColor: "text-pink-600",
  },
  {
    name: "Twitter",
    desc: "Twitter is a traditional social networking tool that promotes short, frequent discussions and communications. It is regarded as the most genuine medium of expression as this social media platform just echoes the waves of the planet.",
    icon: Twitter,
    bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
    iconColor: "text-sky-600",
  },
  {
    name: "LinkedIn",
    desc: "LinkedIn is the premier professional networking platform, enabling B2B connections, thought leadership, and career development. Perfect for establishing authority and building business relationships in your industry.",
    icon: Linkedin,
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    iconColor: "text-blue-700",
  },
  {
    name: "TikTok",
    desc: "The good thing about TikTok for marketers is that the length and style of the video enable brands to take a little more of a casual and playful approach with the content, assisting the brand in connecting with customers on a more personal level.",
    icon: Video,
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
    iconColor: "text-purple-600",
  },
  {
    name: "YouTube",
    desc: "YouTube enables long-form video content, building brand authority through tutorials, vlogs, and educational content. Perfect for establishing thought leadership and creating evergreen content that continues to drive results.",
    icon: Youtube,
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    iconColor: "text-red-600",
  },
];

const services = [
  {
    title: "Content Creation",
    desc: "High-quality posts, graphics, videos, and stories tailored to your brand and optimized for each platform to maximize engagement.",
    icon: PenTool,
  },
  {
    title: "Content Strategy",
    desc: "Data-driven content planning with audience insights, competitor analysis, and trending topics to keep you ahead.",
    icon: Target,
  },
  {
    title: "Community Management",
    desc: "Engage with your audience through comments, messages, and building meaningful relationships that foster brand loyalty.",
    icon: Users,
  },
  {
    title: "Social Media Advertising",
    desc: "Targeted ad campaigns to reach the right audience and maximize your ROI across all social media platforms.",
    icon: DollarSign,
  },
  {
    title: "Analytics & Reporting",
    desc: "Detailed performance reports with actionable insights to continuously improve your social media strategy.",
    icon: BarChart3,
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with relevant influencers to expand reach and build credibility for your brand in your target market.",
    icon: Award,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategy",
    desc: "Elevate your brand with our tailored social media services in Dubai. Essential messages, balanced content, and targeted categories."
  },
  {
    number: "02",
    title: "Concept",
    desc: "Let us handle your social media posting schedule with our expert brainstorming and planning services. Stay organized and consistent throughout the month!"
  },
  {
    number: "03",
    title: "Design",
    desc: "We create engaging visual assets that align perfectly with your brand identity and resonate with your target audience!"
  },
  {
    number: "04",
    title: "Publish",
    desc: "With our consistent schedule, we expertly plan social media postings and create captivating stories that keep your audience engaged."
  },
  {
    number: "05",
    title: "Community",
    desc: "Count on us to provide timely and helpful responses to keep your audience involved and satisfied with your brand."
  },
  {
    number: "06",
    title: "Followers",
    desc: "Through strategic targeting and analysis, we ensure that the subscribers we attract align with your objectives and contribute to your success."
  },
  {
    number: "07",
    title: "Optimization",
    desc: "By staying up-to-date with the latest trends and algorithms, we ensure that your brand pages are fully optimized to drive maximum visibility, engagement, and conversions."
  },
  {
    number: "08",
    title: "Tracking",
    desc: "By establishing precise tracking mechanisms, we can monitor and measure key performance indicators to ensure continuous improvement."
  },
  {
    number: "09",
    title: "Analysis",
    desc: "We analyze competitors' social media use and provide progress evaluations, keeping you ahead in the game with data-driven insights."
  },
];