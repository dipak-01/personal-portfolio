'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactCtaSection() {
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
    <section id="contact" className="relative space-y-12">
      
      {/* Container Envelope with Ambient Glow Beam */}
      <div className="relative rounded-[24px] overflow-hidden">
        
        {/* Soft rotating pastel luminescence ambient glow beam */}
        <div
          className="absolute -top-12 -left-12 -right-12 -bottom-12 luminescence-ambient-glow animate-ambient-glow pointer-events-none"
          aria-hidden="true"
        />

        {/* Contact Surface Box */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md border border-[#d5cfef] rounded-[24px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_-20px_rgba(26,21,58,0.12)] overflow-hidden">
          
          {/* Subtle dot matrix overlay */}
          <div
            className="absolute inset-0 luminescence-dots pointer-events-none opacity-50"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f3fb] border border-[#d5cfef] text-xs font-mono text-[#7c3aed]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Available for Software Engineering Roles &amp; Freelance</span>
            </div>

            <h2 className="font-grotesque font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight leading-tight">
              Let&apos;s build something great together.
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-[#686082] leading-relaxed max-w-2xl">
              I&apos;m currently open to new opportunities. Whether you have a project in mind, an opportunity to discuss, or just want to connect, feel free to reach out!
            </p>

            {/* Direct Copy Prompt & Email Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-start gap-4">
              {/* Interactive Copy Email Button */}
              <button
                type="button"
                onClick={handleCopy}
                className={`group relative inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg border text-sm font-mono font-medium transition-all duration-200 cursor-pointer select-none ${
                  copied
                    ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]'
                    : 'bg-[#f4f3fb] hover:bg-white border-[#d5cfef] hover:border-[#7c3aed] text-[#1a153a] shadow-xs'
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
                <span>{copied ? 'Copied to clipboard!' : email}</span>
              </button>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${email}`}
                className="btn-purple px-6 py-3.5 text-sm font-semibold gap-2"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* Social Channels 3-Card Grid */}
          <div className="relative z-10 mt-12 pt-8 border-t border-[#e6e0fe] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Email Card */}
            <div className="bg-[#f4f3fb] border border-[#d5cfef] rounded-[14px] p-6 flex flex-col justify-between hover:border-[#7c3aed] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e6e0fe] flex items-center justify-center text-[#7c3aed] mb-4">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="font-grotesque font-bold text-base text-[#1a153a] mb-1">
                  Email
                </div>
                <div className="font-mono text-xs text-[#686082] break-all">
                  {email}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#d5cfef]">
                <a
                  href={`mailto:${email}`}
                  className="text-xs font-mono font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
                >
                  <span>Write an email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#f4f3fb] border border-[#d5cfef] rounded-[14px] p-6 flex flex-col justify-between hover:border-[#7c3aed] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e6e0fe] flex items-center justify-center text-[#1a153a] mb-4">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div className="font-grotesque font-bold text-base text-[#1a153a] mb-1">
                  GitHub
                </div>
                <div className="font-mono text-xs text-[#686082]">
                  Explore repositories &amp; code
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#d5cfef]">
                <a
                  href="https://github.com/dipak-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
                >
                  <span>github.com/dipak-01</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#f4f3fb] border border-[#d5cfef] rounded-[14px] p-6 flex flex-col justify-between hover:border-[#7c3aed] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e6e0fe] flex items-center justify-center text-[#0a66c2] mb-4">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div className="font-grotesque font-bold text-base text-[#1a153a] mb-1">
                  LinkedIn
                </div>
                <div className="font-mono text-xs text-[#686082]">
                  Professional profile &amp; network
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#d5cfef]">
                <a
                  href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
                >
                  <span>Connect with Dipak</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
