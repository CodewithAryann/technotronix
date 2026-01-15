
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Search,
  Layout,
  Database,
  Globe,
  Rocket,
  Award,
  ArrowRight,
  Target,
  Users,
  ShoppingCart,
  Server,
  Settings,
  Cloud,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Send,
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
      {/* HERO */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#022e64] via-[#034080] to-[#045aa8]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
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
            <span className="text-white font-semibold"> Dubai&apos;s Premier Web Development</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Website Design & Development
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Make a website that accurately portrays your company and maximize your revenue with Dubai&apos;s leading web development company.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="#why-website">
              <button className="px-8 py-4 bg-white text-[#022e64] rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer shadow-lg transform hover:-translate-y-1">
                Get Started Today
              </button>
            </Link>
            {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition border border-white/20">
              View Our Portfolio
            </button> */}
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            With years of experience in website development in the UAE, we specialize in creating
            custom websites tailored to meet your needs and well-optimized for conversions. That&apos;s why you can
            tailor every feature of our services to your business, products, and objectives with the best website
            design in Dubai.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Being a top web design agency in Dubai and the UAE, we take pride in developing websites to cover our
            clients&apos; needs. Your website is the face of your business in the online world. So, your website plays a
            vital role in creating a positive first impression and persuading a user to complete a purchase or submit
            a lead. At Technotronix, we recognize and focus on developing custom websites that support our client&apos;s
            unique requirements.
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-website" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Why <span className="text-[#022e64]">Website Design?</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
          >
            If you&apos;re looking to join hands with the best website design company, there are plenty of reasons to choose Technotronix
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION FOCUSED SECTION */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6"
          >
            Trusted Website Development Company For{" "}
            <span className="text-[#022e64]">Maximizing Conversions</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6 text-gray-700 leading-relaxed"
          >
            <p>
              Technotronix creates websites to maximize conversions for clients. By optimizing our websites,
              we guarantee the ultimate experience for your clients. A good user experience is a key touch point
              for potential leads. When customers explore your website, good design and quality content make them return.
            </p>

            <p>
              One important factor to keep in mind while building your website is the &apos;Customer Journey&apos;, as it will
              determine how enjoyable your website is, and will affect CRO for the ultimate conversion rate. The better
              the customer journey is, the higher the percentage of traffic to your website, and more people will come
              back to visit, eventually leading to a successful operation.
            </p>

            <p>
              Creating a user-friendly and responsive website is our primary objective, as well as developing a
              functional layout and seamless integrated lead generation features. Capturing your brand essence and
              uniqueness, working side-by-side with you to create the best digital reflection for your business, is
              what we aim for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Elevating Brand Appearance Through{" "}
            <span className="text-[#022e64]">Creative Designs</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
          >
            Comprehensive website solutions tailored to your business needs
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#022e64]/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-9 h-9 text-[#022e64]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Our Website Development{" "}
            <span className="text-[#022e64]">Technology Solutions</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
          >
            We leverage cutting-edge technologies to build powerful, scalable web solutions
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-[#022e64] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-[#022e64] to-[#045aa8] rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                    <tech.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">
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
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200"
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
            Find answers to common questions about our web development services
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
            Ready to start your project? Contact us today for a free consultation
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-10">
            Let&apos;s create a stunning, high-performance website that helps your
            business grow and succeed online. Contact us today for a free consultation.
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
              {/* <p className="text-gray-600">support@technotronix.ae</p> */}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#022e64]/10 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#022e64]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              {/* <p className="text-gray-600">+971 4 123 4567</p> */}
              <p className="text-gray-600">+971 54 351 7100</p>
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
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          {/* Web3Forms Required Fields */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="New Website Inquiry" />
          <input type="hidden" name="from_name" value="Technotronix Website" />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none"
              placeholder="John Doe"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none"
                placeholder="+971 50 123 4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service Interested In *
            </label>
            <select
              name="service"
              required
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none"
            >
              <option value="">Select a service</option>
              <option value="Website Design">Website Design</option>
              <option value="Website Development">Website Development</option>
              <option value="E-commerce Development">E-commerce Development</option>
              <option value="WordPress Development">WordPress Development</option>
              <option value="Website Maintenance">Website Maintenance</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="SEO Optimization">Other Service</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022e64] outline-none resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <input type="checkbox" name="botcheck" className="hidden" />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-linear-to-r from-[#022e64] to-[#045aa8] text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </motion.div>

    </div>
  );
}

/* DATA */

const whyChooseUs = [
  {
    title: "Expertise",
    desc: "With over 8+ years of experience, Technotronix boasts an exceptional cadre of web developers in the UAE. Their expertise and our deep industry knowledge fuel the creation of functional and performance-centric websites tailored to your business.",
    icon: Award,
  },
  {
    title: "Delivering Results",
    desc: "Our success hinges on yours. As your dedicated partner, trust us to craft or revamp your website, catering to your company's needs and resonating with your customers. Dive into our portfolio, showcasing real-life case studies in Dubai, evidencing our impactful outcomes.",
    icon: Target,
  },
  {
    title: "Client Satisfaction",
    desc: "Client contentment precedes everything we do. Every team member, from our project managers to developers, dedicates time to understanding your business in Dubai, products, and aspirations. This commitment is reflected in our client recommendation score.",
    icon: Users,
  },
];

const services = [
  {
    title: "Domain and Hosting",
    desc: "We understand that your website's domain and its hosting are essential for success. We offer a range of hosting solutions, from shared hosting for cost-effectiveness to dedicated hosting for maximum performance and control.",
    icon: Cloud,
  },
  {
    title: "Website Design",
    desc: "We offer expert website design services to help your business make a powerful online impression. Our team of skilled designers are experts in e-commerce website development among others, with user-centered design principles.",
    icon: Palette,
  },
  {
    title: "Website Content",
    desc: "We specialize in crafting beautiful, user-friendly, functional websites tailored to your unique needs and look great on any device. Our experienced team creates websites that captivate your audience and drive results.",
    icon: MessageSquare,
  },
  {
    title: "Website Development",
    desc: "Our expert team of developers in Dubai specialize in website design and development that provides smooth navigation, faster loading times, high performance and drive online presence with the latest technologies.",
    icon: Code,
  },
  {
    title: "Website Maintenance",
    desc: "Maintaining a website is crucial for its long-term success. Our website maintenance services ensure that your online presence remains secure, up-to-date, and efficient with regular updates and security patches.",
    icon: Settings,
  },
  {
    title: "SEO Optimization",
    desc: "We build websites with SEO best practices from the ground up, ensuring your site ranks higher in search results and connects effectively with your target audience for maximum visibility.",
    icon: Search,
  },
];

const technologies = [
  {
    title: "WordPress Development",
    desc: "WordPress is one of the most popular content management systems globally. We create feature-rich, customizable, and user-friendly websites using this platform.",
    icon: Layout,
  },
  {
    title: "PHP Development",
    desc: "PHP is a versatile server-side scripting language. We build dynamic websites and web applications with PHP code to create custom web solutions tailored to specific needs.",
    icon: Code,
  },
  {
    title: "E-commerce Development",
    desc: "We create online stores with platforms like WooCommerce, Shopify, or custom solutions to build secure, user-friendly, and scalable e-commerce websites.",
    icon: ShoppingCart,
  },
  {
    title: "React.js Development",
    desc: "React.js is a popular JavaScript library for building user interfaces. We focus on creating fast and dynamic web applications with reusable components.",
    icon: Rocket,
  },
  {
    title: "Node.js Development",
    desc: "Node.js enables server-side development using JavaScript. We build scalable and high-performance web applications with asynchronous I/O and real-time communication.",
    icon: Server,
  },
  {
    title: "Python Django Development",
    desc: "Django is a high-level Python web framework known for its robustness and security. We build websites and web applications emphasizing rapid development and scalability.",
    icon: Database,
  },
  {
    title: "Mobile-First Development",
    desc: "We focus on designing websites with mobile devices as the primary consideration, creating responsive designs that adapt seamlessly to various screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Full-Stack Development",
    desc: "Our full-stack developers have expertise in both frontend and backend development, delivering complete web solutions from user interface to server-side logic.",
    icon: Globe,
  },
  {
    title: "Performance Optimization",
    desc: "We ensure lightning-fast loading speeds with optimized code, caching strategies, and performance-centric architecture for the best user experience.",
    icon: Zap,
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    desc: "Begin with a detailed conversation to understand your requirements, goals, and vision. This step is crucial for establishing clear expectations.",
  },
  {
    number: "02",
    title: "Research",
    desc: "Dive into research about your industry, target audience, competitors, and current trends. Create a comprehensive project plan.",
  },
  {
    number: "03",
    title: "Concept",
    desc: "Brainstorm and develop creative concepts that align with your goals and preferences for design, content, and functionality.",
  },
  {
    number: "04",
    title: "Proposal",
    desc: "Present developed concepts and a detailed proposal including project scope, timeline, budget, and terms.",
  },
  {
    number: "05",
    title: "Design",
    desc: "Start creating the actual content based on approved concepts, including graphic design, coding, and development tasks.",
  },
  {
    number: "06",
    title: "Feedback",
    desc: "Share initial drafts for feedback. Collaboratively refine and iterate based on your input to align with your vision.",
  },
  {
    number: "07",
    title: "Quality Assurance",
    desc: "Thoroughly review the work for accuracy, consistency, and quality to ensure it meets the highest standards.",
  },
  {
    number: "08",
    title: "Presentation",
    desc: "Showcase the refined work, demonstrating how it addresses your initial requirements. Obtain final approval.",
  },
  {
    number: "09",
    title: "Delivery",
    desc: "Deliver the final product in the agreed format with all necessary files, assets, and instructions for implementation.",
  },
];

const faqs = [
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "The timeline depends on the project scope and complexity. A basic website typically takes 2–4 weeks, while custom or e-commerce websites may take 6–10 weeks."
  },
  {
    question: "Do you provide custom website designs?",
    answer:
      "Yes. We specialize in fully custom website designs tailored to your brand identity, business goals, and target audience."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All our websites are built using a mobile-first approach and are fully responsive across all devices and screen sizes."
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer:
      "Yes. We provide ongoing website maintenance, updates, security monitoring, backups, and performance optimization services."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can revamp or redesign your existing website to improve performance, user experience, design, and conversion rates."
  },
  {
    question: "Will my website be SEO optimized?",
    answer:
      "Yes. We follow SEO best practices including clean code, fast loading speeds, mobile optimization, and proper on-page SEO structure."
  }
];
