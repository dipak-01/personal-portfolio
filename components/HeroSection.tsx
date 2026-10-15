'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Check,
  Copy,
  ExternalLink,
  Code2,
  Sparkles,
  User,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CornerCross from './CornerCross';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'deepakkurkutedk007@gmail.com';

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#f4f6eb] border-b border-[#e6e0fe]"
    >
      {/* Subtle background radial dot matrix */}
      <div
        className="absolute inset-0 luminescence-dots-dark pointer-events-none opacity-30 overflow-hidden"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto border-x border-[#e6e0fe] px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        {/* Corner Plus Accents */}
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Narrative & Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#d5cfef] shadow-xs text-xs font-mono text-[#1a153a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="font-semibold text-[#1a153a]">Software Developer</span>
              <span className="text-[#d5cfef]">&bull;</span>
              <span className="text-[#686082]">Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-grotesque font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#000000] tracking-tight leading-[1.08]">
              Hi, I&apos;m <span className="text-[#7c3aed]">Dipak Kurkute</span>.
              <br />
              I build web apps with{' '}
              <span className="font-serif italic font-normal text-[#1a153a] underline decoration-[#7c3aed]/40 decoration-2 underline-offset-4">
                speed, care, &amp; scale
              </span>
              .
            </h1>

            {/* Personal bio */}
            <p className="text-base sm:text-lg text-[#4a4568] max-w-2xl leading-relaxed">
              I am a <strong>Full-Stack Software Developer</strong> driven by a passion for crafting responsive, intuitive user interfaces in <strong>Next.js</strong> and <strong>TypeScript</strong>, backed by resilient backend services and <strong>Kubernetes</strong> cloud infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn-purple px-6 py-3 text-sm sm:text-base font-semibold gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopy}
                className={`group relative inline-flex items-center gap-2.5 px-4 py-3 rounded-lg border text-sm font-mono font-medium transition-all duration-200 cursor-pointer select-none ${
                  copied
                    ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]'
                    : 'bg-white hover:bg-[#f4f3fb] border-[#d5cfef] hover:border-[#7c3aed] text-[#2e2e2e] shadow-xs'
                }`}
                aria-label="Copy email address"
              >
                <span className="relative w-4 h-4 flex items-center justify-center shrink-0">
                  <Copy
                    className={`w-4 h-4 text-[#7c3aed] absolute transition-all duration-200 ${
                      copied ? 'scale-50 opacity-0' : 'scale-100 opacity-100 group-hover:scale-110'
                    }`}
                    strokeWidth={2}
                  />
                  <Check
                    className={`w-4 h-4 text-[#059669] absolute transition-all duration-200 ${
                      copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                    strokeWidth={2.5}
                  />
                </span>
                <span>
                  {copied ? 'Copied deepakkurkutedk007@gmail.com!' : 'Copy Email'}
                </span>
              </button>

              {/* Download Resume */}
              <a
                href="/Resume.pdf"
                download="Dipak_Kurkute_Resume.pdf"
                className="btn-secondary-fly px-4 py-3 text-sm font-semibold gap-2"
              >
                <Download className="w-4 h-4 text-[#7c3aed]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Personal Stats & Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#d5cfef] max-w-xl">
              <div className="border-l-2 border-[#d5cfef] pl-4 sm:pl-6 py-1">
                <div className="font-grotesque font-extrabold text-2xl sm:text-3xl text-[#7c3aed]">
                  7+
                </div>
                <div className="text-xs sm:text-sm text-[#686082] font-medium pt-0.5">
                  Shipped Projects
                </div>
              </div>

              <div className="border-l-2 border-[#d5cfef] pl-4 sm:pl-6 py-1">
                <div className="font-grotesque font-extrabold text-2xl sm:text-3xl text-[#1a153a]">
                  Full-Stack
                </div>
                <div className="text-xs sm:text-sm text-[#686082] font-medium pt-0.5">
                  Frontend &amp; DevOps
                </div>
              </div>

              <div className="border-l-2 border-[#d5cfef] pl-4 sm:pl-6 py-1">
                <div className="font-grotesque font-extrabold text-2xl sm:text-3xl text-[#10b981]">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#686082] font-medium pt-0.5">
                  Open Source Code
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Personal Developer Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white border border-[#d5cfef] rounded-[16px] shadow-[0_20px_40px_-15px_rgba(26,21,58,0.1)] overflow-hidden">
              
              {/* Profile Card Header */}
              <div className="bg-[#f4f3fb] border-b border-[#e6e0fe] p-5 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#a5b4fc] text-white flex items-center justify-center font-grotesque font-bold text-lg shadow-xs shrink-0">
                  DK
                </div>
                <div>
                  <h3 className="font-grotesque font-bold text-base text-[#1a153a] leading-tight">
                    Dipak Kurkute
                  </h3>
                  <p className="text-xs text-[#686082] font-mono leading-tight pt-0.5">
                    Software Developer
                  </p>
                </div>
              </div>

              {/* Bio & Focus Points */}
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7c3aed] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Current Focus</span>
                  </div>
                  <p className="text-sm text-[#4a4568] leading-relaxed">
                    Building zero-knowledge encrypted cloud storage (Nimbus Cloud) and experimenting with multi-cluster Kubernetes GitOps.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#e6e0fe]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a90f1] flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Primary Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React.js', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Kubernetes', 'Docker', 'AWS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#f4f3fb] border border-[#d5cfef] text-[#1a153a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#e6e0fe]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#10b981] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </div>
                  <p className="text-xs text-[#686082] leading-relaxed">
                    Integrated B.Tech and M.Tech in Information Technology at Indian Institute of Information Technology and Management, Gwalior (2022–2027).
                  </p>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="bg-[#f8f7fc] border-t border-[#e6e0fe] px-6 py-3.5 flex items-center justify-between text-xs font-mono">
                <a
                  href="https://github.com/dipak-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#686082] hover:text-[#1a153a] flex items-center gap-1.5 font-medium transition-colors"
                >
                  <FaGithub className="w-4 h-4 text-[#1a153a]" />
                  <span>github.com/dipak-01</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c3aed] hover:underline flex items-center gap-1 font-bold"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
