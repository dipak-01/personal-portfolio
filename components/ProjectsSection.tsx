'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -480, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 480, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="space-y-12">
      
      {/* Section Header with Carousel Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7c3aed] bg-[#ede9fe] px-3.5 py-1 rounded-full border border-[#d5cfef] inline-block">
            Featured Work &bull; Portfolio
          </span>
          <h2 className="font-grotesque font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight">
            Projects I&apos;ve Built &amp; Shipped
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#686082] max-w-xl">
            A curated selection of cloud platforms, web apps, and DevOps automation pipelines built with modern engineering standards.
          </p>
        </div>

        {/* Dual Circular Stepper Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={scrollLeft}
            aria-label="Previous project"
            className="btn-stepper cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next project"
            className="btn-stepper cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Modernist Horizontal Snap Rail Envelope with subtle dot pattern */}
      <div className="relative rounded-[20px] bg-[#f4f3fb] border border-[#d5cfef] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xs">
        {/* Subtle dot matrix overlay */}
        <div
          className="absolute inset-0 luminescence-dots pointer-events-none"
          aria-hidden="true"
        />

        {/* Horizontal Snap Rail */}
        <div
          ref={carouselRef}
          className="relative z-10 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 pt-1"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={idx}
              inCarousel={true}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="relative z-10 mt-6 pt-4 border-t border-[#d5cfef] flex items-center justify-between text-xs font-mono text-[#686082]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            FEATURED SHOWCASE &bull; {projects.length} PROJECTS
          </span>
          <span className="hidden sm:inline">
            SWIPE OR USE ARROW BUTTONS TO EXPLORE
          </span>
        </div>
      </div>

      {/* Grid View for Full Project Index */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-[#e6e0fe] pb-3 flex items-center justify-between">
          <h3 className="font-grotesque font-bold text-xl text-[#1a153a]">
            All Repositories &amp; Projects
          </h3>
          <span className="font-mono text-xs text-[#686082]">
            INDEX VIEW
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={`grid-${project.name}`}
              project={project}
              index={idx}
              inCarousel={false}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
