'use client';

import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      period: 'Sep 2024 – Feb 2025',
      role: 'Software Developer (Internship)',
      organization: 'GPT Innovations',
      type: 'Remote',
      description:
        'Engineered interactive frontend dashboards and implemented AI voice agents for medical workflows.',
      achievements: [
        'Developed an interactive frontend dashboard to visualize and manage patient files and extracted medical data, enabling seamless access to critical insights and improving overall operational workflow efficiency by 60%.',
        'Implemented AI-powered voice agents for medical billing pre-authorization, streamlining complex manual workflows using Twilio and OpenAI voice agents, significantly reducing human errors and callbacks.',
        'Optimized responsive and high-performing UIs using React.js and Tailwind CSS by profiling, caching, and refactoring components, resulting in improved user engagement and page load under 300ms.',
      ],
      skills: ['React.js', 'Tailwind CSS', 'OpenAI', 'Twilio', 'REST APIs'],
    },
    {
      period: 'Feb 2024 – Mar 2024',
      role: 'Software Developer (Internship)',
      organization: 'Luco Homes',
      type: 'Remote',
      description:
        'Designed and developed a mobile-first, responsive web platform with content management for a pre-engineered homes startup.',
      achievements: [
        'Designed a mobile-first, responsive website using modern frontend technologies, improving product visibility and driving higher customer engagement through intuitive design.',
        'Integrated video-based testimonials and interactive FAQs with seamless, mobile-friendly playback and smooth content management, improving browsing experiences by 35%.',
        'Developed an intuitive, admin-friendly content management interface for FAQs and testimonials, enabling quick updates without technical help and significantly reducing maintenance time.',
      ],
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'CMS'],
    },
    {
      period: 'Nov 2022 – May 2027',
      role: 'Integrated B.Tech and M.Tech in Information Technology',
      organization: 'Indian Institute of Information Technology and Management, Gwalior',
      type: 'Degree Program',
      description:
        'Comprehensive academic curriculum covering Data Structures, Algorithms, Computer Networks, Operating Systems, Database Management Systems, System Design, and Cloud Computing.',
      achievements: [
        'Hands-on technical curriculum in Information Technology, Software Engineering, and Distributed Systems.',
        'Actively building production-level full-stack and cloud DevOps systems alongside coursework.',
      ],
      skills: ['C/C++', 'Python', 'JavaScript', 'SQL', 'Data Structures', 'System Design'],
    },
  ];

  return (
    <section id="experience" className="space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e6e0fe] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7c3aed] bg-[#ede9fe] px-3.5 py-1 rounded-full border border-[#d5cfef] inline-block">
            Experience &bull; Resume
          </span>
          <h2 className="font-grotesque font-extrabold text-3xl sm:text-4xl text-[#000000] tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="font-serif italic text-[#686082] text-base max-w-xl">
            Software development internships and technical degree program directly from my resume.
          </p>
        </div>

        {/* Download Resume Button */}
        <a
          href="/Resume.pdf"
          download="Dipak_Kurkute_Resume.pdf"
          className="btn-purple px-5 py-3 text-sm font-semibold shrink-0 gap-2"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#d5cfef] rounded-[16px] p-7 sm:p-9 shadow-xs hover:border-[#7c3aed] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e6e0fe] pb-4 mb-5">
              <div>
                <span className="font-mono text-xs font-semibold text-[#7c3aed] bg-[#ede9fe] px-2.5 py-1 rounded inline-block mb-1">
                  {item.period}
                </span>
                <h3 className="font-grotesque font-bold text-xl sm:text-2xl text-[#1a153a]">
                  {item.role}
                </h3>
                <div className="text-sm text-[#4a4568] font-medium pt-0.5">
                  <span className="font-bold text-[#1a153a]">{item.organization}</span>
                  {item.type && (
                    <span className="text-[#686082]"> &bull; {item.type}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#10b981] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>Verified</span>
              </div>
            </div>

            <p className="text-[#4a4568] text-sm sm:text-base leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Achievements Bullet List */}
            <div className="space-y-2.5 mb-6">
              {item.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2e2e2e]">
                  <CheckCircle className="w-4 h-4 text-[#7c3aed] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{ach}</span>
                </div>
              ))}
            </div>

            {/* Skills tags */}
            <div className="pt-4 border-t border-[#e6e0fe] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#686082] mr-2">Technologies:</span>
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#f4f3fb] border border-[#d5cfef] text-[#1a153a]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
