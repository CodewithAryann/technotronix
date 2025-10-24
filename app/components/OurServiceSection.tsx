'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurServiceSection() {
  const services = [
    {
      image: '/images/1.png',
      title: 'Technotronix Assesment',
      description:
        'We help organizations strengthen their cyber resilience through a comprehensive portfolio of assessment and consulting services that secure every layer of the digital ecosystem — from cloud and data to network, endpoint, identity, and operational security. Backed by leading technologies from Seceon, Nanitor, Zecurion, Fortinet, OctoXLabs, miniOrange, QAS, and DNSSense, our assessments deliver deep visibility into threat exposure, vulnerability gaps, SOC maturity, and Zero Trust readiness, empowering enterprises to build a robust and compliant cybersecurity posture.',
    },
    {
      image: '/images/2.png',
      title: 'Intrusion Detection & Prevention',
      description:
        'Our Intrusion Detection and Prevention solutions enable organizations to detect, analyze, and block cyber threats in real time. Using advanced network monitoring, behavioral analytics, and automated response mechanisms, we provide continuous visibility and defense against malicious activities. Backed by technologies such as NDR, SIEM, and Threat Intelligence Platforms, Technotronix helps enterprises maintain a proactive and resilient cybersecurity posture.',
    },
    {
      image: '/images/3.png',
      title: 'Incident Response & Recovery',
      description:
        'Our services are built to help organizations respond swiftly and effectively to cyber incidents. We provide structured frameworks for threat containment, forensic analysis, and system restoration, ensuring minimal disruption and rapid recovery. Supported by SIEM, SOAR, and endpoint detection technologies, our approach enables proactive detection, coordinated response, and long-term resilience — helping enterprises restore operations with confidence and strengthen defenses against future attacks.',
    },
  ];

  return (
    <section className="relative pt-8 pb-24 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/service.png"
          alt="Service Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* White Overlay for Readability */}
      {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" /> */}

      {/* ontent */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#022E64] font-semibold tracking-wider uppercase mb-2"
        >
          Our Services
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Empowering Your Business with Trusted Cyber Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Our team combines expertise, innovation, and cutting-edge technology to provide comprehensive
          cybersecurity services that ensure your organization remains secure and resilient.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#022E64] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Button */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
