'use client';

import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export interface Project {
  name: string;
  description: string;
  url?: string;
  image?: string;
  github?: string;
  technologies: string[];
  featured?: boolean;
  highlights?: string[];
  colorType?: 'accent' | 'secondary' | 'tertiary' | 'quaternary';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const colorThemes = [
  {
    badgeBg: 'bg-[var(--accent)]',
    badgeText: 'text-[var(--accent-foreground)]',
    tagBg: 'bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]',
    glowShadow: 'shadow-pop-accent',
  },
  {
    badgeBg: 'bg-[var(--secondary)]',
    badgeText: 'text-[var(--secondary-foreground)]',
    tagBg: 'bg-[var(--secondary)]/15 text-[var(--secondary)] border-[var(--secondary)]',
    glowShadow: 'shadow-pop-secondary',
  },
  {
    badgeBg: 'bg-[var(--tertiary)]',
    badgeText: 'text-[var(--tertiary-foreground)]',
    tagBg: 'bg-[var(--tertiary)]/15 text-[var(--tertiary-foreground)] border-[var(--tertiary)]',
    glowShadow: 'shadow-pop-tertiary',
  },
  {
    badgeBg: 'bg-[var(--quaternary)]',
    badgeText: 'text-[var(--quaternary-foreground)]',
    tagBg: 'bg-[var(--quaternary)]/15 text-[var(--quaternary-foreground)] border-[var(--quaternary)]',
    glowShadow: 'shadow-pop-quaternary',
  },
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const theme = colorThemes[index % colorThemes.length];

  return (
    <div
      className={`group relative rounded-2xl border-2 border-[var(--foreground)] bg-[var(--card)] p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:-rotate-1 flex flex-col justify-between ${
        project.featured 
          ? 'shadow-[8px_8px_0px_0px_var(--shadow-ink)] dark:shadow-[8px_8px_0px_0px_var(--accent)] border-2 ring-2 ring-[var(--accent)]/30' 
          : 'shadow-[8px_8px_0px_0px_var(--shadow-ink)]'
      }`}
    >
      {/* Floating half-in / half-out circle icon badge */}
      <div
        className={`absolute -top-5 left-6 w-11 h-11 rounded-full border-2 border-[var(--foreground)] ${theme.badgeBg} ${theme.badgeText} flex items-center justify-center font-heading font-extrabold text-base shadow-pop-sm group-hover:rotate-12 transition-transform duration-300 z-10`}
      >
        {project.featured ? (
          <Star className="w-5 h-5 fill-current" />
        ) : (
          <span>{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>

      {/* Featured Ribbon */}
      {project.featured && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full border-2 border-[var(--foreground)] bg-[var(--tertiary)] text-[var(--tertiary-foreground)] text-xs font-heading font-extrabold uppercase tracking-wider rotate-3 shadow-pop-sm select-none">
          ★ Featured Project
        </div>
      )}

      {/* Card Header & Content */}
      <div className="pt-2">
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--foreground)] mt-2 mb-2 flex items-center gap-2">
          {project.name}
        </h3>
        
        <p className="text-[var(--muted-foreground)] text-sm sm:text-base leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights / Feature points if provided */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-[var(--foreground)]/90">
            {project.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--accent)] font-bold text-xs mt-0.5">✦</span>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-heading font-bold rounded-full border-2 border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--shadow-ink)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t-2 border-[var(--border)] mt-auto">
        {project.url ? (
          <>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] border-2 border-[var(--foreground)] font-heading font-bold text-sm shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--shadow-ink)] transition-all duration-200"
            >
              <span>Live Demo</span>
              <div className="w-5 h-5 rounded-full bg-[var(--card)] text-[var(--foreground)] flex items-center justify-center">
                <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
              </div>
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-[var(--foreground)] shadow-pop hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--shadow-ink)] transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
          </>
        ) : (
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] border-2 border-[var(--foreground)] font-heading font-bold text-sm shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--shadow-ink)] transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
              <span>View Repository & Architecture</span>
              <div className="w-5 h-5 rounded-full bg-[var(--card)] text-[var(--foreground)] flex items-center justify-center ml-1">
                <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
}
