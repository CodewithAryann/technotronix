"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, MapPin, Mail, Phone } from "lucide-react";

const sections = [
  {
    title: "About Us",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-6 max-w-sm">
          Intelligent solutions for IoT, Cybersecurity & Smart Analytics.
          Technotronix empowers enterprises with advanced AI-driven defense
          and data systems.
        </p>
        <div className="flex justify-start items-center gap-4 mt-6">
          {[
            { icon: Phone, href: "tel:+971543517100", label: "Call" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            // {
            //   icon: () => <Image src="/images/x-logo.png" alt="X logo" width={20} height={20} />,
            //   href: "https://x.com/yourprofile",
            //   label: "X",
            // },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-[#022E64] hover:text-white transition-all duration-300 shadow-sm hover:shadow-cyan-500/30"
              title={label}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Data Analytics",
    links: [
      { label: "Video Analytics", href: "/video-analysis" },
      { label: "People Counting", href: "/people-counting" },
      { label: "Queue Management", href: "/queue-management" },
      { label: "Heatmap & Zone Analytics", href: "/heatmap-zone-analytics" },
      { label: "Entry Intelligence", href: "/entry-intelligence" },
    ],
  },
  {
    title: "Cyber Guard",
    links: [
      { label: "Cloud Guard", href: "/tt-cloud-guard" },
      { label: "Data Guard", href: "/tt-data-guard" },
      { label: "Perimeter Guard", href: "/tt-perimeter-guard/ntem" },
      { label: "Operational Guard", href: "/tt-operational-guard/sba" },
      { label: "Vulnerability Guard", href: "/tt-vulnerability-guard/nvm" },
      { label: "Endpoint & Digital Guard", href: "/tt-end-point-digital-identity-guard/nes" },
    ],
  },
  {
    title: "Contact",
    content: (
      <ul className="space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <Phone size={18} className="text-white mt-0.5 shrink-0" />
          <a href="tel:+97144318874" className="leading-relaxed hover:underline">
            +971 54 351 7100
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail size={18} className="text-white mt-0.5 shrink-0" />
          <a href="mailto:info@technotronix.ae" className="leading-relaxed hover:underline">
            info@technotronix.ae
          </a>
        </li>
        <li className="flex items-start gap-3">
          <MapPin size={18} className="text-white mt-0.5 shrink-0" />
          <a
            href="https://www.google.com/maps/search/Meydan+Grandstand,+6th+floor,+Meydan+Road,+Nad+Al+Sheba"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-relaxed hover:underline"
          >
            Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
          </a>
        </li>
      </ul>
    ),
  },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isDesktop, setIsDesktop] = useState(false);

  // Track window width to handle desktop vs mobile
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <footer className="bg-[#022e64] text-gray-300 pt-16 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Top Divider Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600" />

      {/* Footer Grid */}
      <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 relative z-10`}>
        {sections.map((section) => (
          <div key={section.title}>
            <button
              type="button"
              className="w-full flex justify-between items-center text-xl font-semibold text-white mb-4 lg:mb-6 lg:pointer-events-none lg:cursor-default"
              onClick={() => !isDesktop && toggleSection(section.title)}
            >
              {section.title}
              {!isDesktop && (
                <span className="text-white">{openSections[section.title] ? "−" : "+"}</span>
              )}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isDesktop || openSections[section.title]
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {section.content || (
                <ul className="space-y-2 text-sm">
                  {section.links?.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Technotronix</span> — All rights reserved.
      </div>
    </footer>
  );
}
