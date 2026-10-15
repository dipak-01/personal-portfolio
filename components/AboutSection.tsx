'use client';

import React from 'react';
import {
  Code2,
  Server,
  GraduationCap,
  Sparkles,
  Heart,
  Terminal,
  ArrowUpRight,
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="space-y-12">
      
      {/* Section Header */}
      <div className="text-left space-y-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7c3aed] bg-[#ede9fe] px-3.5 py-1 rounded-full border border-[#d5cfef] inline-block">
          About Me &bull; My Journey
        </span>
        <h2 className="font-grotesque font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight">
          Designing with empathy, engineering with rigor.
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-[#686082] max-w-2xl leading-relaxed">
          &ldquo;I bridge the gap between creative user interfaces and resilient backend systems.&rdquo;
        </p>
      </div>

      {/* 2-Column Story & Focus Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 bg-[#f4f3fb] border border-[#d5cfef] rounded-[16px] p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#d5cfef] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7c3aed] flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Who I Am</span>
              </span>
              <span className="font-mono text-[11px] text-[#686082] bg-white px-2.5 py-0.5 rounded border border-[#d5cfef]">
                Developer Story
              </span>
            </div>

            <h3 className="font-grotesque font-bold text-2xl sm:text-3xl text-[#1a153a] leading-tight">
              A developer obsessed with building software that is fast, reliable, and a joy to use.
            </h3>

            <div className="space-y-4 text-[#4a4568] text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I&apos;m <strong>Dipak Kurkute</strong>, a full-stack developer pursuing an <strong>Integrated B.Tech and M.Tech in Information Technology</strong> at <strong>IIITM Gwalior</strong>. My passion for technology began with a curiosity about how the web connects people and systems, which led me to dive deep into both client and server development.
              </p>
              <p>
                On the <strong>frontend</strong>, I care deeply about user experience, typography, and responsive micro-interactions. I take pride in writing clean, declarative <strong>React</strong> and <strong>Next.js</strong> code with strict <strong>TypeScript</strong> types.
              </p>
              <p>
                On the <strong>infrastructure &amp; backend</strong> side, I believe great software needs solid foundations. I enjoy building containerized microservices, deploying them on <strong>Kubernetes</strong> clusters, provisioning cloud resources with <strong>Terraform</strong>, and experimenting with my own self-hosted homelab.
              </p>
            </div>
          </div>

          {/* Education & Values Quick Strip */}
          <div className="pt-5 border-t border-[#d5cfef] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-lg bg-white border border-[#e6e0fe] space-y-1">
              <div className="text-[#686082] flex items-center gap-1.5 text-[11px]">
                <GraduationCap className="w-3.5 h-3.5 text-[#7c3aed]" />
                Education
              </div>
              <div className="font-bold text-[#1a153a]">Integrated B.Tech &amp; M.Tech (IT)</div>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#e6e0fe] space-y-1">
              <div className="text-[#686082] flex items-center gap-1.5 text-[11px]">
                <Heart className="w-3.5 h-3.5 text-[#10b981]" />
                Passion
              </div>
              <div className="font-bold text-[#1a153a]">Web Apps, Cloud Native &amp; Homelabs</div>
            </div>
          </div>
        </div>

        {/* Right Column: How I Build / Engineering Principles */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Card 1: User-Centric Frontend */}
          <div className="bg-white border border-[#d5cfef] hover:border-[#7c3aed] rounded-[16px] p-6 shadow-xs transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-grotesque font-bold text-base text-[#1a153a]">
                  Thoughtful User Interfaces
                </h4>
                <p className="text-xs sm:text-sm text-[#4a4568] mt-1.5 leading-relaxed">
                  I don&apos;t just make things look good — I build for accessibility, sub-second rendering, keyboard navigation, and responsive ergonomics across all screen sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: DevOps & Cloud Architecture */}
          <div className="bg-white border border-[#d5cfef] hover:border-[#4a90f1] rounded-[16px] p-6 shadow-xs transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#4a90f1] flex items-center justify-center shrink-0">
                <Server className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-grotesque font-bold text-base text-[#1a153a]">
                  Infrastructure &amp; Automation
                </h4>
                <p className="text-xs sm:text-sm text-[#4a4568] mt-1.5 leading-relaxed">
                  From Dockerizing multi-service apps to managing declarative GitOps deployments with ArgoCD, Helm, and Terraform on AWS, I treat infrastructure as first-class code.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Security & Privacy */}
          <div className="bg-white border border-[#d5cfef] hover:border-[#10b981] rounded-[16px] p-6 shadow-xs transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#10b981] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-grotesque font-bold text-base text-[#1a153a]">
                  Privacy &amp; End-to-End Craft
                </h4>
                <p className="text-xs sm:text-sm text-[#4a4568] mt-1.5 leading-relaxed">
                  I love diving into encryption (like ChaCha20 in Nimbus Cloud), secure tunneling, and self-hosted workflows that preserve data sovereignty and privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA Link */}
          <div className="p-4 rounded-[12px] bg-[#f4f3fb] border border-[#d5cfef] flex items-center justify-between text-xs font-mono">
            <span className="text-[#686082]">Want to collaborate or discuss a role?</span>
            <a
              href="#contact"
              className="text-[#7c3aed] font-bold hover:underline flex items-center gap-1"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
