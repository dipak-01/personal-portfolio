import React from "react";
import {
  ArrowRight,
  Download,
  Send,
  Mail,
  ExternalLink,
  Heart,
  ChevronUp,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import InfiniteSkills from "../components/InfiniteSkills";
import ProjectCard, { Project } from "../components/ProjectCard";
import CopyEmailButton from "../components/CopyEmailButton";
import {
  SquiggleDivider,
  HeadingUnderline,
  StarburstBadge,
  FloatingConfetti,
  PolkaDotCluster,
} from "../components/GeometricShapes";

export default function Home() {
  const projects: Project[] = [
    {
      name: "Nimbus Cloud",
      description:
        "Fully self-hosted, end-to-end encrypted cloud storage platform with True Zero-Knowledge privacy, real-time communications, and enterprise collaboration.",
      github:
        "https://divya-agrawal.notion.site/Nimbus-Cloud-Services-21fec9fe9e428092a5e2c80975720bd0?source=copy_link",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Microservices",
        "PostgreSQL",
        "Cloudflare",
        "ChaCha20",
      ],
      featured: true,
      highlights: [
        "True Zero-Knowledge Encryption (ChaCha20) keeping metadata private, combined with LZ4 compression reducing file storage by up to 40%.",
        "Self-hosted on bare-metal servers securely exposed via Cloudflare Tunnels with Express and PostgreSQL.",
        "Enterprise collaboration tools: role-based access control (RBAC), secure link sharing with revocation, and real-time AES-GCM encrypted team chat.",
      ],
    },
    {
      name: "Production Kubernetes SRE Platform",
      description:
        "Enterprise-grade GitOps & SRE infrastructure automating multi-cluster Kubernetes deployments, declarative pipelines, and full-stack observability.",
      github: "https://github.com/dipak-01/Multi-Cluster-Kubernetes-Platform",
      technologies: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "ArgoCD",
        "Helm",
        "Prometheus",
        "Grafana",
      ],
      highlights: [
        "Provisioned reproducible AWS infrastructure using Terraform and automated Linux host configurations with Ansible.",
        "Deployed containerized microservices on Kubernetes using Helm with automated ArgoCD GitOps workflows for declarative rollouts and rollbacks.",
        "Implemented cluster-wide Prometheus & Grafana monitoring with SLIs/SLOs and automated alerting for reliability and resource utilization.",
      ],
    },
    {
      name: "Flash",
      description:
        "The all-in-one platform for sports enthusiasts to form teams, book venues, and connect with fellow players seamlessly.",
      url: "https://flash-frontend-plum.vercel.app",
      github: "https://github.com/dipak-01/Flash-Frontend",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    },
    {
      name: "QuickIntell",
      description:
        "AI-powered business intelligence and analytics tool built for rapid data insights, interactive dashboards, and actionable metrics.",
      url: "https://quickintell.vercel.app",
      github: "https://github.com/dipak-01/quickintell",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Animeflix",
      description:
        "Fast, sleek anime streaming platform with a vast curated catalog of shows, movie schedules, and responsive playback UI.",
      url: "https://anime-flix-two.vercel.app",
      github: "https://github.com/dipak-01/animeflix",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Upstyle",
      description:
        "High-energy sneaker e-commerce showcase with interactive product displays, fluid cart mechanics, and bold styling.",
      url: "https://sahil7741.github.io/UpStyle/frontend/html/index.html",
      github: "https://github.com/dipak-01/E-commerce-Website",
      technologies: ["JavaScript", "CSS3", "HTML5"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid">
      <FloatingConfetti />

      {/* Floating Navbar */}
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 pb-24">
        {/* ===================== HERO SECTION ===================== */}
        <section id="hero" className="pt-6 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-7 space-y-6 text-left relative">
              {/* Massive yellow backdrop circle */}
              <div
                className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[var(--tertiary)] opacity-30 dark:opacity-15 blur-2xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-xs font-heading font-extrabold shadow-pop-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--quaternary)] animate-pulse" />
                <span className="text-[var(--foreground)] uppercase tracking-wider">
                  Software & DevOps / Web Developer
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] tracking-tight leading-[1.1]">
                Hey, I&apos;m{" "}
                <span className="underline decoration-[var(--secondary)] decoration-wavy decoration-2">
                  Dipak
                </span>
                .
                <br />I craft{" "}
                <span className="inline-block bg-[var(--tertiary)] text-[var(--tertiary-foreground)] px-3 py-1 rounded-xl border-2 border-[var(--foreground)] shadow-pop-sm rotate-[-2deg] my-1">
                  reliable
                </span>{" "}
                & <span className="text-[var(--accent)]">efficient</span>{" "}
                cloud-native infrastructure.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                Software & Frontend Developer passionate about building robust
                cloud platforms, responsive user interfaces, and reliable
                cloud-native infrastructure with React, Next.js, TypeScript, and
                Kubernetes.
              </p>

              {/* CTA Buttons ("The Candy Button" + Secondary) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="candy-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-heading font-bold text-base select-none cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <div className="w-7 h-7 rounded-full bg-[var(--card)] text-[var(--foreground)] flex items-center justify-center border-2 border-[var(--foreground)]">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </a>

                <a
                  href="#contact"
                  className="secondary-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-bold text-base bg-[var(--card)] select-none cursor-pointer"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                  <span>Let&apos;s Connect</span>
                </a>
              </div>

              {/* Quick Highlight Stats Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] text-xs font-heading font-bold text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--shadow-ink)] flex items-center gap-1.5">
                  <span className="text-[var(--secondary)]">★</span> 1+ Year
                  Experience
                </div>
                <div className="px-3.5 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] text-xs font-heading font-bold text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--shadow-ink)] flex items-center gap-1.5">
                  <span className="text-[var(--tertiary)]">⚡</span> 6+ Live
                  Projects & Platforms
                </div>
                <div className="px-3.5 py-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--card)] text-xs font-heading font-bold text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--shadow-ink)] flex items-center gap-1.5">
                  <span className="text-[var(--quaternary)]">✦</span> Full-Stack
                  & Cloud-Native
                </div>
              </div>
            </div>

            {/* Right Column: Memphis Geometric Visual Avatar Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Polka dot cluster behind */}
                <PolkaDotCluster className="absolute -top-6 -left-6 z-0" />

                {/* Main Sticker Frame */}
                <div className="relative z-10 rounded-3xl border-2 border-[var(--foreground)] bg-[var(--card)] p-6 shadow-pop-lg transition-transform duration-300 hover:rotate-1">
                  {/* Floating Badge Header */}
                  <div className="flex items-center justify-between mb-4 border-b-2 border-[var(--border)] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[var(--secondary)] border-2 border-[var(--foreground)]" />
                      <div className="w-3 h-3 rounded-full bg-[var(--tertiary)] border-2 border-[var(--foreground)]" />
                      <div className="w-3 h-3 rounded-full bg-[var(--quaternary)] border-2 border-[var(--foreground)]" />
                    </div>
                    <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                      DIPAK.DEV
                    </span>
                  </div>

                  {/* Profile & Code Teaser */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--muted)] p-4 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl border-2 border-[var(--foreground)] bg-[var(--accent)] text-[var(--accent-foreground)] font-heading font-black text-2xl flex items-center justify-center shadow-pop-sm rotate-[-3deg]">
                        dk.
                      </div>
                      <div>
                        <h2 className="font-heading font-extrabold text-lg text-[var(--foreground)]">
                          Dipak Kurkute
                        </h2>
                        <p className="text-xs font-heading font-semibold text-[var(--muted-foreground)]">
                          Software & Web Developer
                        </p>
                      </div>
                    </div>

                    {/* Interactive Code Block Card */}
                    <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--input)] p-4 font-mono text-xs text-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--shadow-ink)] space-y-1.5">
                      <div className="text-[var(--secondary)] font-bold">
                        const developer = &#123;
                      </div>
                      <div className="pl-4">
                        focus:{" "}
                        <span className="text-[var(--accent)]">
                          &apos;Web & Cloud Architecture&apos;
                        </span>
                        ,
                      </div>
                      <div className="pl-4">
                        stack: [
                        <span className="text-[var(--quaternary)]">
                          &apos;React&apos;
                        </span>
                        ,{" "}
                        <span className="text-[var(--quaternary)]">
                          &apos;Node.js&apos;
                        </span>
                        ,{" "}
                        <span className="text-[var(--quaternary)]">
                          &apos;K8s&apos;
                        </span>
                        ],
                      </div>
                      <div className="pl-4">
                        motto:{" "}
                        <span className="text-[var(--tertiary)]">
                          &apos;Clean, Resilient & Playful&apos;
                        </span>
                        ,
                      </div>
                      <div className="text-[var(--secondary)] font-bold">
                        &#125;;
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Starburst Badge */}
                <div className="absolute -bottom-8 -right-6 z-20">
                  <StarburstBadge text="100% CODE" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Squiggle Section Divider */}
        <SquiggleDivider />

        {/* ===================== SKILLS MARQUEE ===================== */}
        <section id="skills" className="space-y-6 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/30 mb-2">
              Tech Stack & Tooling
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--foreground)]">
              Skills & Superpowers
            </h2>
            <HeadingUnderline className="mt-1" />
          </div>

          <p className="text-[var(--muted-foreground)] text-sm sm:text-base max-w-lg mx-auto">
            Tools, frameworks, and cloud-native systems I use to build scalable,
            performant, and delightful software.
          </p>

          <InfiniteSkills />
        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section id="about" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Speech-Bubble Sticker Card */}
            <div className="lg:col-span-8 rounded-3xl rounded-bl-none border-2 border-[var(--foreground)] bg-[var(--card)] p-6 sm:p-8 shadow-pop-lg relative">
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full border border-[var(--secondary)]/30 mb-3 inline-block">
                About Me
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--foreground)] mb-4">
                Designing with intention, building with precision.
              </h2>

              <p className="text-[var(--foreground)] text-base sm:text-lg leading-relaxed mb-4">
                I am a developer with experience engineering full-stack web
                applications, zero-knowledge encrypted cloud platforms, and
                automated cloud infrastructure. I combine clean architectural
                code with bold visual aesthetics and robust backend reliability.
              </p>

              <p className="text-[var(--muted-foreground)] text-sm sm:text-base leading-relaxed">
                Whether creating privacy-first encrypted storage solutions,
                GitOps-driven Kubernetes environments, or high-conversion web
                apps, my goal is always resilient engineering, snappy
                performance, and memorable user experiences.
              </p>

              {/* Decorative mini badge inside */}
              <div className="mt-6 pt-4 border-t-2 border-[var(--border)] flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-[var(--foreground)]">
                  <div className="w-6 h-6 rounded-full bg-[var(--quaternary)] flex items-center justify-center text-[var(--quaternary-foreground)] font-bold">
                    ✓
                  </div>
                  Full-Stack React & Node.js
                </div>
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-[var(--foreground)]">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--accent-foreground)] font-bold">
                    ✓
                  </div>
                  Cloud Native & Kubernetes GitOps
                </div>
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-[var(--foreground)]">
                  <div className="w-6 h-6 rounded-full bg-[var(--tertiary)] flex items-center justify-center text-[var(--tertiary-foreground)] font-bold">
                    ✓
                  </div>
                  Zero-Knowledge Security & TypeScript
                </div>
              </div>
            </div>

            {/* Side Card: Quick Facts */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--tertiary)] text-[var(--tertiary-foreground)] p-5 shadow-pop transition-transform hover:-translate-y-1">
                <h3 className="font-heading font-black text-lg mb-1">
                  Passionate Builder
                </h3>
                <p className="text-xs font-medium leading-relaxed">
                  Always exploring modern web architecture, distributed systems,
                  and developer tooling.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--accent)] text-[var(--accent-foreground)] p-5 shadow-pop transition-transform hover:-translate-y-1">
                <h3 className="font-heading font-black text-lg mb-1">
                  Clean Architecture
                </h3>
                <p className="text-xs font-medium leading-relaxed">
                  Writing modular, accessible, and automated systems that scale
                  with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Squiggle Section Divider */}
        <SquiggleDivider />

        {/* ===================== PROJECTS SECTION ===================== */}
        <section id="projects" className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full border border-[var(--secondary)]/30">
              Selected Works
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--foreground)]">
              Featured Projects & Platforms
            </h2>
            <div className="flex justify-center">
              <HeadingUnderline className="text-[var(--accent)]" />
            </div>
            <p className="text-[var(--muted-foreground)] text-sm sm:text-base max-w-lg mx-auto pt-2">
              A collection of cloud storage platforms, infrastructure projects,
              and responsive web applications built with modern engineering
              standards.
            </p>
          </div>

          {/* Sticker Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Squiggle Section Divider */}
        <SquiggleDivider />

        {/* ===================== RESUME SECTION ===================== */}
        <section id="resume">
          <div className="relative rounded-3xl border-2 border-[var(--foreground)] bg-[var(--card)] p-8 sm:p-10 shadow-pop-lg overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--tertiary)]/20 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--quaternary)] bg-[var(--quaternary)]/15 px-3 py-1 rounded-full border border-[var(--quaternary)]/40">
                  Curriculum Vitae
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--foreground)]">
                  Looking for a detailed breakdown?
                </h2>
                <p className="text-[var(--muted-foreground)] text-sm sm:text-base max-w-md">
                  Download my full resume for an in-depth view of my technical
                  skills, cloud architecture, and development experience.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="/Resume.pdf"
                  download="Dipak_Kurkute_Resume.pdf"
                  className="candy-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-heading font-bold text-base select-none cursor-pointer"
                >
                  <span>Download Resume</span>
                  <div className="w-7 h-7 rounded-full bg-[var(--card)] text-[var(--foreground)] flex items-center justify-center border-2 border-[var(--foreground)]">
                    <Download className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/30">
              Get in Touch
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--foreground)]">
              Let&apos;s Build Something Awesome
            </h2>
            <div className="flex justify-center">
              <HeadingUnderline className="text-[var(--tertiary)]" />
            </div>
            <p className="text-[var(--muted-foreground)] text-sm sm:text-base max-w-md mx-auto pt-2">
              Have a project in mind, an opportunity, or just want to say hi?
              Feel free to reach out anytime!
            </p>
          </div>

          {/* Tactile Contact Sticker Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--card)] p-6 shadow-pop hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)] text-[var(--accent-foreground)] flex items-center justify-center mb-4 shadow-pop-sm">
                  <Mail className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--foreground)] mb-1">
                  Email
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-4 break-all">
                  deepakkurkutedk007@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t-2 border-[var(--border)]">
                <CopyEmailButton email="deepakkurkutedk007@gmail.com" />
                <a
                  href="mailto:deepakkurkutedk007@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] transition-colors shadow-pop-sm"
                  aria-label="Send email directly"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--card)] p-6 shadow-pop hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-2 border-[var(--foreground)] bg-[var(--secondary)] text-[var(--secondary-foreground)] flex items-center justify-center mb-4 shadow-pop-sm">
                  <FaGithub className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--foreground)] mb-1">
                  GitHub
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-4">
                  Check out repositories, cloud infrastructure architectures,
                  and open-source code.
                </p>
              </div>
              <div className="pt-2 border-t-2 border-[var(--border)]">
                <a
                  href="https://github.com/dipak-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)] font-heading font-bold text-sm shadow-pop hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
                >
                  <span>github.com/dipak-01</span>
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--card)] p-6 shadow-pop hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-2 border-[var(--foreground)] bg-[var(--quaternary)] text-[var(--quaternary-foreground)] flex items-center justify-center mb-4 shadow-pop-sm">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--foreground)] mb-1">
                  LinkedIn
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-4">
                  Connect for professional networking and career opportunities.
                </p>
              </div>
              <div className="pt-2 border-t-2 border-[var(--border)]">
                <a
                  href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)] font-heading font-bold text-sm shadow-pop hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
                >
                  <span>dipak-kurkute</span>
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t-2 border-[var(--foreground)] bg-[var(--card)] py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)] text-[var(--accent-foreground)] font-heading font-extrabold text-sm flex items-center justify-center shadow-pop-sm">
              dk.
            </div>
            <span className="font-heading font-bold text-sm text-[var(--foreground)]">
              Dipak Kurkute &copy; {new Date().getFullYear()}
            </span>
          </div>

          <p className="text-xs text-[var(--muted-foreground)] font-heading font-semibold flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-[var(--secondary)] fill-current" />{" "}
          </p>

          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)] shadow-pop-sm hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>
      </footer>
    </div>
  );
}
