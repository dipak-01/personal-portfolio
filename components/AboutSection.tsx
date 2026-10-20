'use client';

import React from 'react';
import { GraduationCap, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="border-b border-zinc-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            About &amp; Education
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Academic foundation, core engineering principles, and technical background
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Personal Narrative */}
          <div className="md:col-span-7 bg-white border border-zinc-200/80 rounded-xl p-6 sm:p-7 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-zinc-500" />
              <span>Background &amp; Philosophy</span>
            </h3>

            <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
              <p>
                I am a full-stack developer with a deep passion for writing clean,
                maintainable code and architecting scalable backend systems. Currently pursuing
                an <strong>Integrated B.Tech and M.Tech in Information Technology</strong> at{' '}
                <strong className="text-zinc-900">IIITM Gwalior</strong>.
              </p>
              <p>
                My work spans the entire application lifecycle—from crafting pixel-accurate,
                responsive frontends in <strong>Next.js</strong> and <strong>TypeScript</strong>,
                to deploying resilient containerized services with <strong>Kubernetes (K3s)</strong>,{' '}
                <strong>Helm</strong>, and automated CI/CD pipelines.
              </p>
              <p>
                I value practical engineering rigor: fast load times, readable types, thoughtful
                developer ergonomics, and zero-downtime reliability over flashy gimmicks.
              </p>
            </div>
          </div>

          {/* Right Column: Formal Education & Highlights */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            {/* Education Card */}
            <div className="bg-white border border-zinc-200/80 rounded-xl p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500">2022 – 2027</span>
                  <h4 className="text-sm font-bold text-zinc-900 mt-0.5">
                    Integrated B.Tech &amp; M.Tech (IT)
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1">
                    Indian Institute of Information Technology and Management, Gwalior
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1.5">
                  Core Coursework:
                </span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Data Structures &amp; Algorithms, Computer Networks, Operating Systems,
                  DBMS, System Design, Object-Oriented Programming, Cloud Computing.
                </p>
              </div>
            </div>

            {/* Quick Strengths Card */}
            <div className="bg-white border border-zinc-200/80 rounded-xl p-5 shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                What I Bring
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Production full-stack execution with modern TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Hands-on Kubernetes, Docker &amp; GitOps deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Self-driven continuous learner with open-source ethos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
