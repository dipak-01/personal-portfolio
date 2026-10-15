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
  index: number;
  inCarousel?: boolean;
}

export default function ProjectCard({
  project,
  index,
  inCarousel = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between transition-all duration-300 ${
        inCarousel
          ? 'snap-start shrink-0 w-[88vw] sm:w-[460px] bg-white border border-[#d5cfef] rounded-[16px] p-7 sm:p-8 shadow-[0_2px_25px_rgba(0,0,0,0.06)] hover:border-[#7c3aed] hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.2)]'
          : 'bg-[#f4f3fb] border border-[#d5cfef] rounded-[14px] p-7 sm:p-8 hover:bg-white hover:border-[#7c3aed] hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.15)]'
      }`}
    >
      <div>
        {/* Header: Project Index & Badge */}
        <div className="flex items-center justify-between gap-2 border-b border-[#e6e0fe] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#7c3aed] bg-[#e6e0fe] px-2 py-0.5 rounded">
              0{index + 1}
            </span>
            {project.badge && (
              <span className="font-mono text-xs text-[#686082]">
                {project.badge}
              </span>
            )}
          </div>

          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#e6e0fe] text-[#7c3aed] border border-[#d4c4fd]">
              <Star className="w-3 h-3 fill-[#7c3aed]" />
              <span>Featured Project</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-grotesque font-bold text-xl sm:text-2xl text-[#000000] group-hover:text-[#7c3aed] transition-colors leading-snug mb-2.5">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-[#4a4568] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5 space-y-1.5 border-l-2 border-[#d5cfef] pl-3 py-1">
            {project.highlights.map((point, idx) => (
              <p key={idx} className="text-xs text-[#2e2e2e] leading-snug">
                &bull; {point}
              </p>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded bg-white border border-[#d5cfef] text-[#1a153a] group-hover:border-[#d4c4fd] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live Demo & GitHub */}
      <div className="pt-4 border-t border-[#e6e0fe] flex items-center justify-between gap-3 mt-auto">
        <div className="flex flex-wrap items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple px-4 py-2 text-xs font-semibold gap-1.5"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-fly px-3.5 py-2 text-xs font-mono font-semibold gap-1.5"
            >
              <FaGithub className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span>Source Code</span>
            </a>
          )}
        </div>

        <span className="font-mono text-[11px] text-[#686082]">
          {project.url ? 'Deployed' : 'Open Source'}
        </span>
      </div>
    </article>
  );
}
