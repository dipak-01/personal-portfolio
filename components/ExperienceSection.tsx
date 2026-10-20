'use client';

import React from 'react';
import { Calendar, Download } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: 'GPT Innovations',
      role: 'Software Developer Intern',
      period: 'Sep 2024 – Feb 2025',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Developed an interactive frontend dashboard to visualize and manage patient files and extracted medical data, improving operational workflow efficiency by 60%.',
        'Implemented AI-powered voice agents for medical billing pre-authorization using Twilio and OpenAI, streamlining complex manual workflows and reducing callback rates.',
        'Optimized UI performance in React.js and Tailwind CSS through component refactoring and client caching, cutting page load times to under 300ms.',
      ],
      skills: ['React.js', 'Tailwind CSS', 'OpenAI', 'Twilio', 'REST APIs', 'TypeScript'],
    },
    {
      company: 'Luco Homes',
      role: 'Software Developer Intern',
      period: 'Feb 2024 – Mar 2024',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Designed and developed a mobile-first, responsive web platform for a pre-engineered homes startup, improving customer engagement and product discoverability.',
        'Integrated video-based customer testimonials and interactive FAQs with seamless playback, increasing browsing engagement by 35%.',
        'Built an intuitive, admin-friendly content management interface for non-technical team members, substantially reducing content update times.',
      ],
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'CMS'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Work Experience
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Software engineering internships and industry experience
            </p>
          </div>
          <a
            href="/Resume.pdf"
            download="Dipak_Kurkute_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Full Resume (PDF)</span>
          </a>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white border border-zinc-200/80 rounded-xl p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-zinc-100 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-zinc-700 flex items-center gap-2 mt-0.5">
                    <span className="text-zinc-900 font-semibold">{exp.company}</span>
                    <span className="text-zinc-300">&bull;</span>
                    <span className="text-zinc-500">{exp.location}</span>
                    <span className="text-zinc-300">&bull;</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 font-mono">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-5">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-100">
                <span className="text-xs text-zinc-400 font-mono mr-1.5">Tech:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
