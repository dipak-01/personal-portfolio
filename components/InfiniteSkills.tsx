'use client';

import React, { useState } from 'react';
import { 
  HtmlIcon, 
  ReactIcon, 
  NodeIcon, 
  JavaScriptIcon, 
  NextIcon, 
  TailwindIcon, 
  GitIcon, 
  SqlIcon, 
  TypeScriptIcon,
  DockerIcon,
  KubernetesIcon,
  HelmIcon,
  CICDIcon,
  TerraformIcon,
  AWSIcon,
  PrometheusIcon,
  ArgoCDIcon,
  JenkinsIcon,
} from './icons';

interface Skill {
  name: string;
  category: 'frontend' | 'devops' | 'backend';
  icon: React.ReactNode;
  tag: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', icon: <ReactIcon className="w-5 h-5" />, tag: 'UI Library' },
  { name: 'Next.js 15', category: 'frontend', icon: <NextIcon className="w-5 h-5" />, tag: 'Full-Stack Framework' },
  { name: 'TypeScript', category: 'frontend', icon: <TypeScriptIcon className="w-5 h-5" />, tag: 'Strict Type Safety' },
  { name: 'Tailwind CSS', category: 'frontend', icon: <TailwindIcon className="w-5 h-5" />, tag: 'Engineered CSS' },
  { name: 'JavaScript ESNext', category: 'frontend', icon: <JavaScriptIcon className="w-5 h-5" />, tag: 'Modern Runtime' },
  { name: 'HTML5 Semantic', category: 'frontend', icon: <HtmlIcon className="w-5 h-5" />, tag: 'Accessible Markup' },

  // DevOps & Cloud
  { name: 'Kubernetes', category: 'devops', icon: <KubernetesIcon className="w-5 h-5" />, tag: 'Multi-Cluster Orchestration' },
  { name: 'AWS Cloud', category: 'devops', icon: <AWSIcon className="w-5 h-5" />, tag: 'VPC & EC2 Infra' },
  { name: 'Terraform', category: 'devops', icon: <TerraformIcon className="w-5 h-5" />, tag: 'Declarative IaC' },
  { name: 'ArgoCD', category: 'devops', icon: <ArgoCDIcon className="w-5 h-5" />, tag: 'Automated GitOps' },
  { name: 'Docker', category: 'devops', icon: <DockerIcon className="w-5 h-5" />, tag: 'Containerization' },
  { name: 'Helm', category: 'devops', icon: <HelmIcon className="w-5 h-5" />, tag: 'K8s Package Specs' },
  { name: 'Prometheus & Grafana', category: 'devops', icon: <PrometheusIcon className="w-5 h-5" />, tag: 'SLI/SLO Observability' },
  { name: 'CI/CD Pipelines', category: 'devops', icon: <CICDIcon className="w-5 h-5" />, tag: 'Automated Releases' },

  // Backend & Security
  { name: 'Node.js', category: 'backend', icon: <NodeIcon className="w-5 h-5" />, tag: 'Asynchronous Services' },
  { name: 'PostgreSQL', category: 'backend', icon: <SqlIcon className="w-5 h-5" />, tag: 'Relational Schemas' },
  { name: 'Git & GitHub', category: 'backend', icon: <GitIcon className="w-5 h-5" />, tag: 'Version Control' },
  { name: 'Jenkins', category: 'devops', icon: <JenkinsIcon className="w-5 h-5" />, tag: 'Build Pipelines' },
];

export default function InfiniteSkills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'devops' | 'backend'>('all');

  const categories = [
    { id: 'all', label: 'All Skills', accent: '#7c3aed', count: '18' },
    { id: 'frontend', label: 'Frontend Development', accent: '#7c3aed', count: '06' },
    { id: 'devops', label: 'Cloud & DevOps', accent: '#4a90f1', count: '08' },
    { id: 'backend', label: 'Backend & Databases', accent: '#55c5cf', count: '04' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full space-y-10">
      
      {/* Category Tabs: Editorial Serif with Semantic Accent Underline */}
      <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-8 border-b border-[#e6e0fe] pb-px">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={`group relative pb-3 px-1 font-serif text-base sm:text-lg transition-colors cursor-pointer select-none flex items-center gap-2 ${
                isActive ? 'text-[#1a153a] font-medium' : 'text-[#686082] hover:text-[#1a153a]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`font-mono text-xs px-1.5 py-0.5 rounded ${
                  isActive
                    ? 'bg-[#e6e0fe] text-[#7c3aed] font-semibold'
                    : 'bg-[#f4f3fb] text-[#686082]'
                }`}
              >
                {cat.count}
              </span>

              {/* Dedicated category accent bottom border */}
              {isActive && (
                <span
                  className="absolute bottom-0 inset-x-0 h-0.5"
                  style={{ backgroundColor: cat.accent }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Infinite Marquee Ribbon with Ethereal Lavender Cards */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="flex animate-marquee py-1">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group flex items-center gap-3 px-4 py-2.5 mx-2 rounded-[10px] border border-[#d5cfef] bg-[#f4f3fb] hover:bg-white hover:border-[#7c3aed] hover:shadow-[0_4px_14px_rgba(124,58,237,0.15)] transition-all duration-200 shrink-0 select-none cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-[#e6e0fe] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                {skill.icon}
              </div>
              <div className="text-left">
                <span className="font-grotesque font-bold text-xs sm:text-sm text-[#1a153a] group-hover:text-[#7c3aed] transition-colors block">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-[#686082] block leading-tight">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Grid for Selected Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group p-4 rounded-[10px] border border-[#d5cfef] bg-[#f4f3fb] hover:bg-white hover:border-[#7c3aed] transition-all duration-200 shadow-xs flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-[#e6e0fe] flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
              {skill.icon}
            </div>
            <div className="min-w-0">
              <div className="font-grotesque font-bold text-sm text-[#1a153a] truncate group-hover:text-[#7c3aed] transition-colors">
                {skill.name}
              </div>
              <div className="text-xs font-mono text-[#686082] truncate">
                {skill.tag}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
