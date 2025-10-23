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
        {
          id: 'solution:TT-Cloud-Guard',
          label: 'TT-Cloud Guard',
          href: '/solution/TT-Cloud-Guard',
          children: [
            { id: 'solution:TT-Cloud-Guard:ssx', label: 'Seceon- SIEM & XDR', href: '/solution/TT-Cloud-Guard/ssx' },
          ],
        },
        {
          id: 'solution:TT-Data-Guard',
          label: 'TT-Data Guard',
          href: '/solution/TT-Data-Guard',
          children: [
            { id: 'solution:TT-Data-Guard:rss', label: 'Recunion Storage Security', href: '/solution/TT-Data-Guard/rss' },
          ],
        },
        {
          id: 'solution:TT-Perimeter-Guard',
          label: 'TT-Perimeter Guard',
          href: '/solution/TT-Perimeter-Guard',
          children: [
            { id: 'solution:TT-Perimeter-Guard:ntem', label: 'Nanitor Threat Exposure Management (CTEM)', href: '/solution/TT-Perimeter-Guard/ntem' },
            { id: 'solution:TT-Perimeter-Guard:zswg', label: 'Zecurion Secure Web Gateway (SWG)', href: '/solution/TT-Perimeter-Guard/zswg' },
            { id: 'solution:TT-Perimeter-Guard:dds', label: 'DNSSense DNS Security', href: '/solution/TT-Perimeter-Guard/dds' },
            { id: 'solution:TT-Perimeter-Guard:qndr', label: 'QAS NDR', href: '/solution/TT-Perimeter-Guard/qndr' },
          ],
        },
        {
          id: 'solution:TT-Operational-Guard',
          label: 'TT-Operational Guard',
          href: '/solution/TT-Operational-Guard',
          children: [
            { id: 'solution:TT-Operational-Guard:sba', label: 'Seceon- SIEM, XDR, Behavioral Analytics', href: '/solution/TT-Operational-Guard/sba' },
            { id: 'solution:TT-Operational-Guard:dd', label: 'DNSSense-DOR 2.0', href: '/solution/TT-Operational-Guard/dd' },
            { id: 'solution:TT-Operational-Guard:qass', label: 'QAS - SIEM', href: '/solution/TT-Operational-Guard/qass' },
            { id: 'solution:TT-Operational-Guard:qast', label: 'QAS - TIP', href: '/solution/TT-Operational-Guard/qast' },
          ],
        },
        {
          id: 'solution:TT-Vulnerability-Guard',
          label: 'TT-Vulnerability Guard',
          href: '/solution/TT-Vulnerability-Guard',
          children: [
            { id: 'solution:TT-Vulnerability-Guard:nvm', label: 'Nanitor Vulnerability Management System', href: '/solution/TT-Operational-Guard/nvm' },
            { id: 'solution:TT-Vulnerability-Guard:oxc', label: 'OctoXLabs - CAASM', href: '/solution/TT-Operational-Guard/oxc' },
          ],
        },
        {
          id: 'solution:TT-End-point-Digital-identity-Guard',
          label: 'TT-End point & Digital Identity Guard',
          href: '/solution/TT-End-point-Digital-identity-Guard',
          children: [
            { id: 'solution:TT-End-point-Digital-identity-Guard:nes', label: 'Nanitor - Endpoint Security', href: '/solution/TT-Operational-Guard/nes' },
            { id: 'solution:TT-End-point-Digital-identity-Guard:moi', label: 'MiniOrange - IAM', href: '/solution/TT-Operational-Guard/moi' },
            { id: 'solution:TT-End-point-Digital-identity-Guard:qedr', label: 'QAS - EDR', href: '/solution/TT-Operational-Guard/qedr' },
          ],
        },
      ],
    },
    { id: 'services', href: '/services', label: 'Services' },
    { id: 'faq', href: '/faq', label: 'FAQ' },
    { id: 'contact', href: '/contact', label: 'Contact Us' },
  ];

  const openDropdownWithDelay = (id: string) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdownId(id);
  };

  const closeDropdownWithDelay = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdownId(null);
      setOpenSubDropdownId(null);
      hoverTimeoutRef.current = null;
    }, 120);
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
                onMouseLeave={closeDropdownWithDelay}
              >
                <button
                  className="flex items-center text-slate-700 hover:text-[#022e64] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-[#022e64]/10"
                  aria-expanded={openDropdownId === link.id}
                  aria-label={`${link.label} menu`}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${openDropdownId === link.id ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Level 1 dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border transform transition-all duration-200 ease-out origin-top ${
                    openDropdownId === link.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
                  }`}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      window.clearTimeout(hoverTimeoutRef.current);
                      hoverTimeoutRef.current = null;
                    }
                    setOpenDropdownId(link.id);
                  }}
                  onMouseLeave={closeDropdownWithDelay}
                >
                  {link.children.map((sub) => (
                    <div key={sub.id} className="relative">
                      <Link
                        href={sub.href ?? '#'}
                        className="flex justify-between items-center px-4 py-2 text-slate-700 hover:bg-[#022e64]/10 transition-colors"
                        onMouseEnter={() => setOpenSubDropdownId(sub.id)}
                        onMouseLeave={() => setOpenSubDropdownId(null)}
                      >
                        {sub.label}
                        {sub.children && <ChevronRight size={14} aria-hidden="true" />}
                      </Link>

                      {/* Level 2 dropdown */}
                      {sub.children && (
                        <div
                          className={`absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border transform transition-all duration-200 ease-out origin-left ${
                            openSubDropdownId === sub.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
                          }`}
                          onMouseEnter={() => setOpenSubDropdownId(sub.id)}
                          onMouseLeave={() => setOpenSubDropdownId(null)}
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
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.id}
                href={link.href ?? '#'}
                className="text-slate-700 hover:text-[#022e64] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-[#022e64]/10"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => {
            setMobileMenuOpen((s) => !s);
            if (mobileMenuOpen) {
              setMobileOpenDropdownId(null);
              setMobileOpenSubId(null);
            }
          }}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg mt-1 py-4 px-6 rounded-b-lg transition-all duration-200">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.id} className="mb-2">
                <button
                  className="flex justify-between w-full items-center py-3 text-slate-700 font-medium"
                  onClick={() => toggleMobileDropdown(link.id)}
                  aria-expanded={mobileOpenDropdownId === link.id}
                  aria-label={
                    mobileOpenDropdownId === link.id
                      ? `Collapse ${link.label} section`
                      : `Expand ${link.label} section`
                  }
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileOpenDropdownId === link.id ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {mobileOpenDropdownId === link.id && (
                  <div className="ml-3 border-l border-gray-200 pl-4 animate-[fadeIn_0.2s_ease-in-out]">
                    {link.children.map((sub) => (
                      <div key={sub.id} className="mb-1">
                        <div className="flex justify-between items-center">
                          <Link
                            href={sub.href ?? '#'}
                            className="py-2 text-slate-600 block"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileOpenDropdownId(null);
                              setMobileOpenSubId(null);
                            }}
                          >
                            {sub.label}
                          </Link>

                          {sub.children && (
                            <button
                              onClick={() => toggleMobileSub(sub.id)}
                              className="px-2 py-2 text-slate-600"
                              aria-expanded={mobileOpenSubId === sub.id}
                              aria-label={
                                mobileOpenSubId === sub.id
                                  ? `Collapse ${sub.label} submenu`
                                  : `Expand ${sub.label} submenu`
                              }
                            >
                              <ChevronDown
                                size={14}
                                className={`${mobileOpenSubId === sub.id ? 'rotate-180' : ''} transition-transform`}
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>

                        {mobileOpenSubId === sub.id && sub.children && (
                          <div className="ml-4 border-l border-gray-100 pl-3">
                            {sub.children.map((deep) => (
                              <Link
                                key={deep.id}
                                href={deep.href}
                                className="block py-2 text-slate-500 hover:text-[#022e64] transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileOpenDropdownId(null);
                                  setMobileOpenSubId(null);
                                }}
                              >
                                {deep.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.id}
                href={link.href ?? '#'}
                className="block py-3 text-slate-700 hover:text-[#022e64] font-medium transition-colors"
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
