'use client';

import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'fullstack'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'cloud') {
      return (
        p.technologies.some((t) =>
          ['Kubernetes', 'AWS', 'Terraform', 'Helm', 'Docker', 'Ansible'].includes(t)
        ) || p.badge?.includes('Cloud') || p.badge?.includes('SRE')
      );
    }
    if (filter === 'fullstack') {
      return (
        p.technologies.some((t) =>
          ['React', 'React.js', 'Next.js 15', 'TypeScript', 'Node.js'].includes(t)
        )
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-zinc-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Projects
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Production web applications, cloud native infrastructure, and open-source tools
            </p>
          </div>

          {/* Clean Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-lg text-xs font-medium self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('cloud')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'cloud'
                  ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Cloud &amp; DevOps
            </button>
            <button
              type="button"
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'fullstack'
                  ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Web &amp; Full-Stack
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
