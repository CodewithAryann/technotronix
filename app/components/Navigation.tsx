'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

type NavLinkDeep = {
  id: string;
  label: string;
  href: string;
};

type NavLinkChild = {
  id: string;
  label: string;
  href?: string;
  children?: NavLinkDeep[];
};

type NavLink = {
  id: string;
  label: string;
  href?: string;
  children?: NavLinkChild[];
};

export default function Navigation() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [openSubDropdownId, setOpenSubDropdownId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileOpenDropdownId, setMobileOpenDropdownId] = useState<string | null>(null);
  const [mobileOpenSubId, setMobileOpenSubId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

 const navLinks: NavLink[] = [
    { id: 'home', href: '/', label: 'Home' },
    { id: 'about', href: '/about', label: 'About' },
    {
      id: 'cyber-guard',
      label: 'Cyber Guard',
      children: [
        { id: 'tt-cloud-guard', label: 'TT-Cloud Guard', href: '/tt-cloud-guard' },
        { id: 'tt-data-guard', label: 'TT-Data Guard', href: '/tt-data-guard' },
        {
          id: 'tt-perimeter-guard',
          label: 'TT-Perimeter Guard',
          children: [
            { id: 'ntem', label: 'Nanitor Threat Exposure Management (CTEM)', href: '/tt-perimeter-guard/ntem' },
            { id: 'zswg', label: 'Zecurion Secure Web Gateway (SWG)', href: '/tt-perimeter-guard/zswg' },
            { id: 'dds', label: 'DNSSense DNS Security', href: '/tt-perimeter-guard/dds' },
            { id: 'qndr', label: 'QAX NDR', href: '/tt-perimeter-guard/qndr' },
            { id: 'ftr', label: 'FortiGate', href: '/tt-perimeter-guard/ftr' },
          ],
        },
        {
          id: 'tt-operational-guard',
          label: 'TT-Operational Guard',
          children: [
            { id: 'sba', label: 'Seceon- SIEM, XDR, Behavioral Analytics', href: '/tt-operational-guard/sba' },
            { id: 'dd', label: 'DNSSense-DOR 2.0', href: '/tt-operational-guard/dd' },
            { id: 'qass', label: 'QAX - SIEM', href: '/tt-operational-guard/qass' },
            { id: 'qast', label: 'QAX - TIP', href: '/tt-operational-guard/qast' },
          ],
        },
        {
          id: 'tt-vulnerability-guard',
          label: 'TT-Vulnerability Guard',
          children: [
            { id: 'nvm', label: 'Nanitor Vulnerability Management System', href: '/tt-vulnerability-guard/nvm' },
            { id: 'oxc', label: 'OctoXLabs - CAASM', href: '/tt-vulnerability-guard/oxc' },
          ],
        },
        {
          id: 'tt-end-point-digital-identity-guard',
          label: 'TT-End point & Digital Guard',
          children: [
            { id: 'mio', label: 'MiniOrange - IAM', href: '/tt-end-point-digital-identity-guard/mio' },
            { id: 'qedr', label: 'QAX - EDR', href: '/tt-end-point-digital-identity-guard/qedr' },
          ],
        },
      ],
    },
    {
      id: 'video-analysis',
      label: 'Data Analytics',
      href: '#',
      children: [
        {
          id: 'vid-analytics',
          label: 'Video Analytics',
          href: '/video-analysis',
        },
        {
          id: 'ppl-coun',
          label: 'People Counting',
          href: '/people-counting',
        },
        {
          id: 'queue-mgmt',
          label: 'Queue Management',
          href: '/queue-management',
        },
        {
          id: 'Heatmap',
          label: 'Heatmap & Zone Analytics',
          href: '/heatmap-zone-analytics',
        },
        { id: 'entry-intelligence', label: 'Entry Intelligence', href: '/entry-intelligence' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      href: '#',
      children: [
        {
          id: 'digital-marketing',
          label: 'Digital Marketing',
          href: '/digital-marketing',
        },
        {
          id: 'web-dev',
          label: 'Website Design & Development',
          href: '/website-design-development',
        },
        {
          id: 'social-media',
          label: 'Social Media Management',
          href: '/social-media-management',
        },
        {
          id: 'video-production',
          label: 'Video Production',
          href: '/video-production',
        },
      ],
    },

    // { id: 'services', href: '/services', label: 'Services' },
    { id: 'contact', href: '/contact', label: 'Contact Us' },
  ];

  const openDropdownWithDelay = (id: string) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdownId(id);
  };

  const toggleMobileDropdown = (id: string) => {
    setMobileOpenDropdownId((prev) => (prev === id ? null : id));
    setMobileOpenSubId(null);
  };

  const toggleMobileSub = (id: string) => {
    setMobileOpenSubId((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Technotronix Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => openDropdownWithDelay(link.id)}
                onMouseLeave={() => {
                  if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                  hoverTimeoutRef.current = window.setTimeout(() => {
                    setOpenDropdownId(null);
                    setOpenSubDropdownId(null);
                  }, 300);
                }}
              >
                <Link
                  href={link.href ?? '#'}
                  className="flex items-center text-slate-700 hover:text-[#022e64] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-[#022e64]/10"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${openDropdownId === link.id ? 'rotate-180' : ''}`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border transform transition-all duration-200 ease-out origin-top ${
                    openDropdownId === link.id
                      ? 'opacity-100 scale-100 visible'
                      : 'opacity-0 scale-95 invisible pointer-events-none'
                  }`}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = window.setTimeout(() => {
                      setOpenDropdownId(null);
                      setOpenSubDropdownId(null);
                    }, 300);
                  }}
                >
                  {link.children.map((sub) =>
                    !sub.children ? (
                      <Link
                        key={sub.id}
                        href={sub.href ?? '#'}
                        className="block px-4 py-2 text-slate-700 hover:bg-[#022e64]/10 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ) : (
                      <div
                        key={sub.id}
                        className="relative"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                          setOpenSubDropdownId(sub.id);
                        }}
                        onMouseLeave={() => {
                          hoverTimeoutRef.current = window.setTimeout(() => {
                            setOpenSubDropdownId(null);
                          }, 250);
                        }}
                      >
                        <Link
                          href={sub.href ?? '#'}
                          className="flex justify-between items-center px-4 py-2 text-slate-700 hover:bg-[#022e64]/10 transition-colors"
                        >
                          {sub.label}
                          <ChevronRight size={14} />
                        </Link>

                        {/* Sub Dropdown */}
                        {sub.children && (
                          <div
                            className={`absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border transform transition-all duration-200 ease-out origin-left ${
                              openSubDropdownId === sub.id
                                ? 'opacity-100 scale-100 visible'
                                : 'opacity-0 scale-95 invisible pointer-events-none'
                            }`}
                          >
                            {sub.children.map((deep) => (
                              <Link
                                key={deep.id}
                                href={deep.href}
                                className="block px-4 py-2 text-slate-700 hover:bg-[#022e64]/10 transition-colors"
                              >
                                {deep.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={link.id}
                href={link.href ?? '#'}
                className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                  link.id === 'contact'
                    ? 'bg-[#022E64] text-white font-bold shadow-lg hover:scale-105 transform transition-all'
                    : 'text-slate-700 hover:text-[#022e64] hover:bg-[#022e64]/10'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen((s) => !s)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg mt-1 py-4 px-6 rounded-b-lg z-50">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.id} className="mb-2">
                {/* Parent clickable row */}
                <div
                  className="flex justify-between items-center py-3 px-2 text-slate-700 font-medium cursor-pointer"
                  onClick={() => toggleMobileDropdown(link.id)}
                >
                  <Link
                    href={link.href ?? '#'}
                    className="flex-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <ChevronDown
                    size={20}
                    className={`text-slate-700 transition-transform ${
                      mobileOpenDropdownId === link.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Submenu */}
                {mobileOpenDropdownId === link.id && (
                  <div className="ml-4 border-l border-gray-200 pl-3">
                    {link.children.map((sub) =>
                      !sub.children ? (
                        <Link
                          key={sub.id}
                          href={sub.href ?? '#'}
                          className={`block py-2 ${
                            sub.id === 'contact'
                              ? 'bg-[#022E64] text-white font-bold shadow-lg hover:scale-105 transform transition-all px-3 rounded-md'
                              : 'text-slate-600 hover:text-[#022e64]'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ) : (
                        <div key={sub.id} className="mb-1">
                          {/* Sub-parent row with arrow */}
                          <div
                            className="flex justify-between items-center py-2 cursor-pointer"
                            onClick={() => toggleMobileSub(sub.id)}
                          >
                            <span className="text-slate-600">{sub.label}</span>
                            <ChevronDown
                              size={16}
                              className={`text-slate-600 transition-transform ${
                                mobileOpenSubId === sub.id ? 'rotate-180' : ''
                              }`}
                            />
                          </div>

                          {/* Nested links */}
                          {mobileOpenSubId === sub.id && sub.children && (
                            <div className="ml-4 border-l border-gray-100 pl-3">
                              {sub.children.map((deep) => (
                                <Link
                                  key={deep.id}
                                  href={deep.href}
                                  className="block py-2 text-slate-500 hover:text-[#022e64]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {deep.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.id}
                href={link.href ?? '#'}
                className={`block py-3 px-2 font-medium rounded-lg ${
                  link.id === 'contact'
                    ? 'bg-[#022E64] text-white font-bold shadow-lg hover:scale-105 transform transition-all'
                    : 'text-slate-700 hover:text-[#022e64]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
