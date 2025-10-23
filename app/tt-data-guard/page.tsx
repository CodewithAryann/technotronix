"use client";

import Image from "next/image";
import Link from "next/link";

export default function ZecurionPage() {
  const features = [
    {
      title: "Advanced Data Encryption",
      desc: "Automatically encrypts sensitive files and storage devices, ensuring your data stays protected — at rest, in motion, and in use.",
    },
    {
      title: "Intelligent Data Classification",
      desc: "Uses AI-driven classification to identify and categorize confidential information, applying the right protection policies automatically.",
    },
    {
      title: "Real-Time Access Monitoring",
      desc: "Tracks and audits all file operations — downloads, copies, and transfers — to detect and prevent unauthorized access or data theft.",
    },
    {
      title: "Seamless DLP Integration",
      desc: "Integrates natively with Zecurion Data Loss Prevention (DLP), providing unified protection from endpoints to cloud and network storage.",
    },
    {
      title: "Centralized Policy Management",
      desc: "Offers a single, intuitive console to manage permissions, monitor access, and enforce encryption policies across all storage environments.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-16 py-20">
      {/* TT-Data-Guard Header with Company Logo */}
      <div className="relative z-10 mb-12 flex justify-center">
        <Image
          src="/images/logos/tt-data.png"
          alt="TT Data Guard Logo"
          width={300}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Zecurion Header */}
      <div className="relative z-10 text-center max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Zecurion – Storage Security
        </h1>
        <p className="text-xl md:text-2xl text-[#022E64] font-semibold mb-4">
          Protect. Control. Prevent. Secure Every Byte.
        </p>
        <p className="text-slate-600">
          Safeguard sensitive data with AI-driven classification, encryption, and seamless DLP integration — all managed from a single, centralized console.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {features.map((feature, i) => (
          <div
            key={i}
            className="
              bg-white p-6 rounded-2xl shadow-lg transition-transform transform
              hover:scale-105
              relative
              before:absolute before:inset-0 before:rounded-2xl before:shadow-[0_0_20px_4px_rgba(2,46,100,0.6)] before:opacity-0 before:transition-opacity before:pointer-events-none
              hover:before:opacity-100
            "
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Powered by Zecurion Footer */}
      <div className="flex flex-col items-center mt-12 mb-16">
        <p className="text-gray-500 mb-2">Powered by</p>
        <Image
          src="/images/logos/zecurion.png"
          alt="Zecurion Logo"
          width={160}
          height={60}
          className="object-contain"
        />
      </div>

      {/* 👇 Call to Action Section */}
      <div className="bg-[#022E64] text-white w-full py-16 px-6 text-center rounded-2xl shadow-xl max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested in Strengthening Your Data Security?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Get in touch with our cybersecurity experts to explore how Zecurion Storage Security can safeguard your organization’s most valuable assets.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#022E64] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
