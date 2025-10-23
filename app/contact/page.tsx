"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate sending form (you can replace this with an API call)
    if (formData.name && formData.email && formData.message) {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 md:px-12 py-16">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Contact <span className="text-[#022E64]">Us</span>
          </h1>
          <p className="text-slate-600">
            Have questions or want to learn more about our cybersecurity
            solutions? Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022E64] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022E64] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022E64] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#022E64] focus:outline-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#022E64] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#03428f] transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status === "success" && (
          <p className="mt-6 text-center text-green-600 font-medium">
            ✅ Thank you! Your message has been sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="mt-6 text-center text-red-600 font-medium">
            ⚠️ Please fill in all required fields before submitting.
          </p>
        )}
      </div>
    </section>
  );
}
