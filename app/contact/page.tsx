"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // ✅ Replace with your actual Web3Forms access key
    formData.append("access_key", "d2e33070-7463-4d61-8083-e768f71b6336");

    // Optional but recommended: Add subject and redirect
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
    <section className="py-20 px-6 bg-gray-50 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#022E64] mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9+\-\s]+"
              placeholder="+1 234 567 890"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            />
          </div>

          {/* Message (optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message <span className="text-gray-700">(optional)</span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#022E64]"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#022E64] text-white font-semibold py-3 rounded-lg hover:bg-[#034c9e] transition"
          >
            Send Message
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <p className="text-center mt-4 text-sm text-gray-700">{result}</p>
        )}
      </div>
    </section>
  );
}
