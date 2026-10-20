'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Software Engineering Roles &amp; Internships</span>
          </div>

          {/* Headline & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Dipak Kurkute
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 font-medium">
              Full-Stack Software Developer &amp; Cloud Systems Engineer
            </p>
          </div>

          {/* Concise Bio */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Integrated B.Tech &amp; M.Tech student in Information Technology at{' '}
            <span className="font-semibold text-zinc-900">IIITM Gwalior</span>. I build
            scalable, intuitive web applications using{' '}
            <span className="font-semibold text-zinc-900">React, Next.js, and TypeScript</span>,
            backed by declarative cloud infrastructure and{' '}
            <span className="font-semibold text-zinc-900">Kubernetes</span>.
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Primary: Download Resume */}
            <a
              href="/Resume.pdf"
              download="Dipak_Kurkute_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Copy Email */}
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Direct Mail */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>Send Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dipak-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Quick Metadata Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-mono">
            <div>
              <span className="text-zinc-400">Education:</span>{' '}
              <span className="text-zinc-700 font-medium">IIITM Gwalior (2022–2027)</span>
            </div>
            <div className="text-zinc-300">&bull;</div>
            <div>
              <span className="text-zinc-400">Experience:</span>{' '}
              <span className="text-zinc-700 font-medium">2 Software Internships</span>
            </div>
            <div className="text-zinc-300">&bull;</div>
            <div>
              <span className="text-zinc-400">Location:</span>{' '}
              <span className="text-zinc-700 font-medium">India (Remote Available)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
