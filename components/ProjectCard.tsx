'use client';

import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export interface Project {
  name: string;
  description: string;
  url?: string;
  github?: string;
  technologies: string[];
  featured?: boolean;
  highlights?: string[];
  badge?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between bg-white border border-zinc-200/80 rounded-xl p-6 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
      <div>
        {/* Header: Badge & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {project.badge ? (
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200/60">
              {project.badge}
            </span>
          ) : (
            <span />
          )}

          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
              <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5 border-l-2 border-zinc-200 pl-3 py-0.5">
            {project.highlights.map((point, idx) => (
              <li key={idx} className="text-xs text-zinc-600 leading-relaxed">
                &bull; {point}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-50 border border-zinc-200/80 text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>

        <span className="text-[11px] font-mono text-zinc-400">
          {project.url ? 'Deployed' : 'Repository'}
        </span>
      </div>
    </article>
  );
}
