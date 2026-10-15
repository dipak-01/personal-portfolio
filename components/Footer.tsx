'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronUp, ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#110e23] border-t border-white/10 text-white overflow-hidden">
      
      {/* Background linear surface wash */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#110e23] to-[#0b0917] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10 px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Personal Intro (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#a5b4fc] text-white flex items-center justify-center font-grotesque font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                DK
              </div>

              <span className="font-grotesque font-extrabold text-xl tracking-tight text-white flex items-center">
                Dipak Kurkute
              </span>
            </Link>

            <p className="text-sm text-[#a29cb8] leading-relaxed max-w-md">
              Full-Stack Developer crafting high-performance, accessible web applications and reliable cloud infrastructure with Next.js, TypeScript, and Kubernetes.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#a29cb8]">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Available for software developer opportunities</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#a29cb8]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills &amp; Tools
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience &amp; Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a29cb8]">
              <li>
                <a
                  href="https://github.com/dipak-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#7c3aed]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaLinkedin className="w-4 h-4 text-[#4a90f1]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#7c3aed]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:deepakkurkutedk007@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#10b981]" />
                  <span>deepakkurkutedk007@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a29cb8]">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Dipak Kurkute. Designed &amp; built with care.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/Resume.pdf"
              download="Dipak_Kurkute_Resume.pdf"
              className="hover:text-white transition-colors underline decoration-[#7c3aed]"
            >
              Resume (PDF)
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#7c3aed] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
