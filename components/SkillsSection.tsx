'use client';

import React from 'react';

interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export default function SkillsSection() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      description: 'Core programming and scripting languages',
      skills: [
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'Python' },
        { name: 'C/C++' },
        { name: 'SQL' },
        { name: 'HTML5 & CSS3' },
      ],
    },
    {
      category: 'Frontend Development',
      description: 'Modern client libraries and UI architecture',
      skills: [
        { name: 'React.js', highlight: true },
        { name: 'Next.js 15', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Redux Toolkit' },
        { name: 'Responsive Web Design' },
        { name: 'Web Performance Optimization' },
      ],
    },
    {
      category: 'Backend & Databases',
      description: 'Server runtime, data stores, and API architectures',
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js' },
        { name: 'PostgreSQL', highlight: true },
        { name: 'MongoDB' },
        { name: 'REST APIs' },
        { name: 'Socket.IO' },
      ],
    },
    {
      category: 'Cloud, DevOps & Infrastructure',
      description: 'Containerization, orchestration, IaC, and observability',
      skills: [
        { name: 'Kubernetes (K3s)', highlight: true },
        { name: 'Docker', highlight: true },
        { name: 'AWS Cloud', highlight: true },
        { name: 'Terraform (IaC)' },
        { name: 'ArgoCD (GitOps)' },
        { name: 'Helm' },
        { name: 'Prometheus & Grafana' },
        { name: 'Ansible' },
        { name: 'CI/CD Pipelines' },
        { name: 'Git & GitHub' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="border-b border-zinc-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            Technical Skills
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Technologies, libraries, and infrastructure tools I work with daily
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-zinc-200/80 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-base font-bold text-zinc-900">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors ${
                      skill.highlight
                        ? 'bg-zinc-100 border-zinc-300 text-zinc-900 font-semibold'
                        : 'bg-zinc-50 border-zinc-200/80 text-zinc-700'
                    }`}
                  >
                    {skill.name}
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
