"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Linkedin,
    X,
    Facebook,
    Youtube,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#022e64] text-gray-300 pt-16 pb-10 px-6 md:px-12 relative overflow-hidden">
            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 relative z-10">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-white after:mt-2">
                        About Us
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 max-w-sm">
                        Intelligent solutions for IoT, Cybersecurity & Smart Analytics.
                        Technotronix empowers enterprises with advanced AI-driven defense
                        and data systems.
                    </p>

                    {/* Social Media Icons */}
                    {/* Social Media Icons */}
                    <div className="flex justify-center sm:justify-start items-center gap-4 mt-6">
                        {[
                            { icon: Phone, href: "tel:+97144318874", label: "Call" },
                            { icon: Linkedin, href: "#", label: "LinkedIn" },
                            {
                                icon: () => (
                                    <Image
                                        src="/images/x-logo.png"
                                        alt="X logo"
                                        width={20}
                                        height={20}
                                    />
                                ),
                                href: "https://x.com/yourprofile",
                                label: "X",
                            },
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

                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-white after:mt-2">
                        Company
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                            { label: "Video Analysis", href: "/services" },
                            { label: "Contact Us", href: "/contact" },
                        ].map((link) => (
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
                </div>

                {/* Solutions - Compact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-white after:mt-2">
                        Cyber Guard
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/tt-cloud-guard" className="hover:text-white transition-colors">
                                Cloud Guard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tt-data-guard" className="hover:text-white transition-colors">
                                Data Guard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tt-perimeter-guard/ntem" className="hover:text-white transition-colors">
                                Perimeter Guard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tt-operational-guard/sba" className="hover:text-white transition-colors">
                                Operational Guard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tt-vulnerability-guard/nvm" className="hover:text-white transition-colors">
                                Vulnerability Guard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tt-end-point-digital-identity-guard/nes" className="hover:text-white transition-colors">
                                Endpoint & Digital Guard
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:text-white after:mt-2">
                        Contact
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <Phone size={18} className="text-white mt-0.5 shrink-0" />
                            <a
                                href="tel:+97144318874"
                                className="leading-relaxed hover:underline"
                            >
                                +971 4 4318 874
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <Mail size={18} className="text-white mt-0.5 shrink-0" />
                            <a
                                href="mailto:info@technotronix.ae"
                                className="leading-relaxed hover:underline"
                            >
                                info@technotronix.ae
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
  <MapPin size={18} className="text-white mt-0.5 shrink-0" />
  <a
    href="https://www.google.com/maps/place/Business+Central+Towers,+Dubai+Internet+City,+UAE"
    target="_blank"
    rel="noopener noreferrer"
    className="leading-relaxed hover:underline"
  >
    Dubai, UAE
  </a>
</li>

                    </ul>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">Technotronix</span> — All rights reserved.
            </div>
        </footer>
    );
}
