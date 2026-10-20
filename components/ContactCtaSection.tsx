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
    <section id="contact" className="py-12 sm:py-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Let&apos;s connect
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              I am actively looking for full-time software engineering roles and internships.
              Whether you have an opening, a technical question, or an interesting project, I would love to hear from you.
            </p>

            {/* Email Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-50 border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied {email}!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="mt-8 pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 group-hover:text-zinc-700">
                    LinkedIn
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    dipak-kurkute
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
            </a>

            <a
              href="https://github.com/dipak-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
                  <FaGithub className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 group-hover:text-zinc-700">
                    GitHub
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    github.com/dipak-01
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
