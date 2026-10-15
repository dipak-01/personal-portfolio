'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Autohide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-[500] w-full bg-white/95 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'shadow-[0_1px_0_rgba(36,23,91,0.05),0_10px_28px_-16px_rgba(36,23,91,0.25)] border-b border-[#e6e0fe]'
          : 'border-b border-[#e6e0fe]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-[#e6e0fe] h-18 sm:h-20 flex items-center justify-between">
        
        {/* Personal Logo & Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] rounded-lg p-1"
          aria-label="Dipak Kurkute Portfolio"
        >
          {/* Avatar Monogram */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#a5b4fc] text-white flex items-center justify-center font-grotesque font-bold text-sm shadow-xs group-hover:scale-105 transition-transform shrink-0">
            DK
          </div>

          <div className="flex flex-col">
            <span className="font-grotesque font-extrabold text-lg sm:text-xl tracking-tight text-[#1a153a] flex items-center leading-none">
              Dipak Kurkute
            </span>
            <span className="text-[11px] font-mono text-[#686082] pt-1">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-[#686082] hover:text-[#7c3aed] transition-colors duration-200 rounded-md"
            >
              {/* Top ambient highlight on hover */}
              <span
                className="absolute inset-x-2 -top-1 h-3 bg-gradient-to-b from-[#7c3aed]/20 to-transparent blur-sm rounded-t-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative z-10">{link.label}</span>
              {/* Expanding underline gradient */}
              <span
                className="absolute inset-x-3 bottom-0 h-0.5 bg-gradient-to-r from-violet-500/0 via-[#7c3aed] to-violet-500/0 scale-x-0 group-hover:scale-x-100 transition-all duration-300 pointer-events-none"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Action Buttons: Resume & Contact */}
        <div className="flex items-center gap-3">
          {/* GitHub link */}
          <a
            href="https://github.com/dipak-01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#d5cfef] bg-white text-[#2e2e2e] hover:text-[#7c3aed] hover:border-[#7c3aed] hover:bg-[#f4f3fb] transition-colors shadow-xs"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#d5cfef] bg-white text-[#2e2e2e] hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#f4f3fb] transition-colors shadow-xs"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>

          {/* Resume PDF */}
          <a
            href="/Resume.pdf"
            download="Dipak_Kurkute_Resume.pdf"
            className="btn-secondary-fly hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold"
          >
            <FileText className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Resume</span>
          </a>

          {/* Primary Action Button: Contact */}
          <a
            href="#contact"
            className="btn-purple px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold gap-1.5"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[#d5cfef] bg-white text-[#2e2e2e] hover:bg-[#f4f3fb] transition focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
            aria-label="Toggle navigation drawer"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#1a153a]" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5 text-[#1a153a]" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#e6e0fe] bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#2e2e2e] hover:bg-[#f4f3fb] hover:text-[#7c3aed] transition flex items-center justify-between"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e6e0fe] flex flex-col gap-2">
            <a
              href="/Resume.pdf"
              download="Dipak_Kurkute_Resume.pdf"
              className="btn-secondary-fly flex items-center justify-center gap-2 py-2.5 text-xs font-semibold w-full"
            >
              <FileText className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span>Download Resume (PDF)</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href="https://github.com/dipak-01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#686082] hover:text-[#1a153a]"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-[#d5cfef]">&bull;</span>
              <a
                href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#686082] hover:text-[#1a153a]"
              >
                <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
