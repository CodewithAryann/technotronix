"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "d2e33070-7463-4d61-8083-e768f71b6336");
    formData.append("subject", "New Contact Message from Website");
    formData.append("from_name", "TT Data Guard Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        form.reset();
      } else {
        console.error("Error:", data);
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ Network error. Please try again later.");
    }
  };

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/featured-bg.png')" }}
    >


      {/* Animated container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="relative max-w-2xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-10 backdrop-blur-sm"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#022E64] mb-8"
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
              placeholder="John Doe"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
              placeholder="Your Company Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9+\-\s]+"
              placeholder="+971 50 123 4567"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            />
          </div>

          {/* Message (optional) */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Message <span className="text-gray-600">(optional)</span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#022E64] text-white font-semibold text-lg py-3 rounded-lg hover:bg-[#034c9e] transition cursor-pointer"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Result Message */}
        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-base text-gray-800"
          >
            {result}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
