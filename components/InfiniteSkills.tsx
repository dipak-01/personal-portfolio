'use client';

import React from 'react';
import { 
  HtmlIcon, 
  CssIcon, 
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
  GrafanaIcon,
  ArgoCDIcon,
  JenkinsIcon,
} from './icons';

interface SkillItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  colorType: 'accent' | 'secondary' | 'tertiary' | 'quaternary';
}

const skillsList: SkillItem[] = [
  { id: 1, name: 'React', icon: <ReactIcon />, colorType: 'accent' },
  { id: 2, name: 'Next.js', icon: <NextIcon />, colorType: 'secondary' },
  { id: 3, name: 'TypeScript', icon: <TypeScriptIcon />, colorType: 'quaternary' },
  { id: 4, name: 'JavaScript', icon: <JavaScriptIcon />, colorType: 'tertiary' },
  { id: 5, name: 'Tailwind CSS', icon: <TailwindIcon />, colorType: 'accent' },
  { id: 6, name: 'Node.js', icon: <NodeIcon />, colorType: 'quaternary' },
  { id: 7, name: 'HTML5', icon: <HtmlIcon />, colorType: 'secondary' },
  { id: 8, name: 'CSS3', icon: <CssIcon />, colorType: 'tertiary' },
  { id: 9, name: 'Git & GitHub', icon: <GitIcon />, colorType: 'accent' },
  { id: 10, name: 'SQL & Databases', icon: <SqlIcon />, colorType: 'tertiary' },
  { id: 11, name: 'Docker', icon: <DockerIcon />, colorType: 'accent' },
  { id: 12, name: 'Kubernetes', icon: <KubernetesIcon />, colorType: 'secondary' },
  { id: 13, name: 'Helm', icon: <HelmIcon />, colorType: 'quaternary' },
  { id: 14, name: 'CI/CD', icon: <CICDIcon />, colorType: 'tertiary' },
  { id: 15, name: 'Terraform', icon: <TerraformIcon />, colorType: 'accent' },
  { id: 16, name: 'AWS', icon: <AWSIcon />, colorType: 'tertiary' },
  { id: 17, name: 'Prometheus', icon: <PrometheusIcon />, colorType: 'secondary' },
  { id: 18, name: 'Grafana', icon: <GrafanaIcon />, colorType: 'tertiary' },
  { id: 19, name: 'ArgoCD', icon: <ArgoCDIcon />, colorType: 'quaternary' },
  { id: 20, name: 'Jenkins', icon: <JenkinsIcon />, colorType: 'secondary' },
];

const colorStyles = {
  accent: {
    accentTag: 'bg-[var(--accent)]',
  },
  secondary: {
    accentTag: 'bg-[var(--secondary)]',
  },
  tertiary: {
    accentTag: 'bg-[var(--tertiary)]',
  },
  quaternary: {
    accentTag: 'bg-[var(--quaternary)]',
  },
};

export default function InfiniteSkills() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Left and right gradient vignettes */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-[var(--background)] to-transparent" />

      {/* Marquee Row */}
      <div className="flex animate-marquee py-2">
        {[...skillsList, ...skillsList].map((skill, index) => {
          const style = colorStyles[skill.colorType];
          return (
            <div
              key={`${skill.id}-${index}`}
              className="flex items-center gap-3 px-5 py-3 mx-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] shadow-pop hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:rotate-[-2deg] transition-all duration-200 cursor-default select-none shrink-0"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[var(--foreground)] bg-[var(--muted)] p-1 text-sm shadow-pop-sm">
                {skill.icon}
              </div>
              <span className="font-heading font-bold text-sm sm:text-base text-[var(--foreground)]">
                {skill.name}
              </span>
              <span className={`w-2.5 h-2.5 rounded-full ${style.accentTag}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
