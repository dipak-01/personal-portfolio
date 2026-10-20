import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ContactCtaSection from '../components/ContactCtaSection';
import Footer from '../components/Footer';
import { Project } from '../components/ProjectCard';

export default function Home() {
  const projects: Project[] = [
    {
      name: 'Personal Homelab & K3s Cluster',
      description:
        'Self-hosted home infrastructure orchestrating containerized microservices on K3s Kubernetes, automated with custom Helm charts and Ansible.',
      github: 'https://github.com/dipak-01/homelab',
      technologies: [
        'K3s (Kubernetes)',
        'Helm',
        'Docker',
        'Ansible',
        'Traefik',
        'Tailscale',
        'Linux',
      ],
      featured: true,
      badge: 'Cloud & DevOps',
      highlights: [
        'Modular Helm charts for stateful workloads (Paperless-ngx, Immich, Uptime Kuma) with PVC storage and Traefik ingress.',
        'Private mesh network security over Tailscale overlay with clean subdomain routing.',
        'Automated node configuration and container runtime setup using Ansible infrastructure-as-code playbooks.',
      ],
    },
    {
      name: 'Nimbus Cloud',
      description:
        'A self-hosted, end-to-end encrypted cloud storage platform with True Zero-Knowledge privacy, real-time communications, and team collaboration.',
      github:
        'https://divya-agrawal.notion.site/Nimbus-Cloud-Services-21fec9fe9e428092a5e2c80975720bd0?source=copy_link',
      technologies: [
        'React.js',
        'TypeScript',
        'Node.js',
        'ChaCha20-Poly1305',
        'LZ4 Compression',
        'PostgreSQL',
        'Cloudflare Tunnels',
      ],
      featured: true,
      badge: 'Zero-Knowledge Privacy',
      highlights: [
        'Client-side ChaCha20 encryption keeps metadata private, combined with LZ4 compression reducing file storage overhead by up to 40%.',
        'Self-hosted on bare-metal servers securely exposed via Cloudflare Tunnels with Express and PostgreSQL.',
        'Features role-based access control (RBAC), secure link sharing with instant revocation, and AES-GCM encrypted team chat.',
      ],
    },
    {
      name: 'Production Kubernetes SRE Platform',
      description:
        'Enterprise-grade GitOps & SRE infrastructure automating multi-cluster Kubernetes deployments, declarative pipelines, and full-stack observability.',
      github: 'https://github.com/dipak-01/Multi-Cluster-Kubernetes-Platform',
      technologies: [
        'AWS',
        'Kubernetes',
        'Terraform',
        'ArgoCD',
        'Helm',
        'Prometheus',
        'Grafana',
        'Ansible',
      ],
      featured: true,
      badge: 'GitOps & SRE',
      highlights: [
        'Provisioned reproducible AWS infrastructure using Terraform and automated Linux host configurations with Ansible.',
        'Deployed containerized microservices on Kubernetes using Helm with automated ArgoCD GitOps workflows for declarative rollouts and rollbacks.',
        'Cluster-wide Prometheus & Grafana monitoring with custom SLIs/SLOs and automated alerting.',
      ],
    },
    {
      name: 'Flash',
      description:
        'All-in-one platform for sports enthusiasts to organize matches, book local venues, and coordinate with teammates in real time.',
      url: 'https://flash-frontend-plum.vercel.app',
      github: 'https://github.com/dipak-01/Flash-Frontend',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React 19'],
      badge: 'Web Application',
      highlights: [
        'Instant venue search with interactive booking calendars and dynamic availability calculation.',
        'Responsive mobile-first layout with smooth micro-interactions and high-contrast accessibility.',
      ],
    },
    {
      name: 'QuickIntell',
      description:
        'AI-powered business intelligence and analytics platform delivering automated data insights, interactive chart visualizations, and KPIs.',
      url: 'https://quickintell.vercel.app',
      github: 'https://github.com/dipak-01/quickintell',
      technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      badge: 'Analytics & AI',
      highlights: [
        'Streamlined ingestion of multi-source business metrics transformed into intuitive graphical charts.',
        'Sub-second query response times with optimized client-side state caching.',
      ],
    },
    {
      name: 'AnimeFlix',
      description:
        'Anime streaming platform with 1,500+ titles, featuring advanced search, community posts, real-time chat, and an integrated upcoming episode timetable.',
      url: 'https://anime-flix-two.vercel.app',
      github: 'https://github.com/dipak-01/animeflix',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Socket.IO', 'MongoDB', 'Redux'],
      badge: 'Streaming & Community',
      highlights: [
        'Anime streaming platform with 1,500+ titles, advanced search, community posts, and real-time chat.',
        'Responsive user-focused interface using React.js and Tailwind CSS with personalized watchlists, favorites, and trending sections.',
      ],
    },
    {
      name: 'Upstyle',
      description:
        'High-energy e-commerce showcase featuring interactive product sliders, tactile cart animations, and dynamic checkout flow.',
      url: 'https://sahil7741.github.io/UpStyle/frontend/html/index.html',
      github: 'https://github.com/dipak-01/E-commerce-Website',
      technologies: ['JavaScript ES6+', 'CSS3', 'HTML5', 'Responsive Design'],
      badge: 'E-Commerce UI',
      highlights: [
        'Lightweight vanilla JavaScript architecture with zero external runtime dependencies.',
        'Kinetic shopping bag and product detail animations.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* Sticky Clean Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection projects={projects} />

        {/* Skills Section */}
        <SkillsSection />

        {/* About & Education Section */}
        <AboutSection />

        {/* Contact CTA Section */}
        <ContactCtaSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
