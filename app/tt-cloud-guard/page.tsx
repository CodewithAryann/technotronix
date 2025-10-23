"use client";

import Image from "next/image";

export default function ZecurionPage() {
  const features = [
    {
      title: "Unified Threat Detection & Response",
      desc: "Combines SIEM and XDR into one platform to deliver full-spectrum visibility — across users, endpoints, networks, and cloud environments.",
    },
    {
      title: "AI & Machine Learning Analytics",
      desc: "Leverages advanced AI models and behavioral analytics (UEBA) to detect known, unknown, and insider threats in real time.",
    },
    {
      title: "Automated Incident Response (SOAR Built-In)",
      desc: "Responds instantly to detected threats with automated playbooks that isolate, block, or remediate — cutting response time from hours to seconds.",
    },
    {
      title: "Real-Time Correlation & Threat Intelligence",
      desc: "Correlates billions of events with global threat feeds and contextual insights to highlight the attacks that matter most.",
    },
    {
      title: "Centralized Dashboard & Compliance Reporting",
      desc: "Offers intuitive dashboards and audit-ready reports for frameworks like ISO 27001, NIST, and GDPR — empowering CISOs and SOC teams.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-16 py-20">
      {/* TT-Cloud-Guard Header with Company Logo */}
      <div className="relative z-10 mb-12 flex justify-center">
        <Image
          src="/images/logos/tt-cloud-guard-img.png"
          alt="TT Cloud Guard Logo"
          width={300}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Seceon – SIEM & XDR
        </h1>
        <p className="text-xl md:text-2xl text-[#022E64] font-semibold mb-4">
          Unified Visibility. AI-Driven Defense. Automated Response.
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
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Powered by Zecurion Footer */}
      <div className="flex flex-col items-center mt-12">
        <p className="text-gray-500 mb-2">Powered by</p>
        <Image
          src="/images/logos/seceon.png" 
          alt="Zecurion Logo"
          width={160}
          height={60}
          className="object-contain"
        />
      </div>
    </section>
  );
}
