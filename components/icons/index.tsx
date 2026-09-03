'use client';

import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiGithubactions,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiArgo,
  SiJenkins,
  SiMysql,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const HtmlIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiHtml5 className={`${className} text-[#E34F26]`} />
);

export const CssIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiCss3 className={`${className} text-[#1572B6]`} />
);

export const ReactIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiReact className={`${className} text-[#61DAFB]`} />
);

export const NodeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiNodedotjs className={`${className} text-[#5FA04E]`} />
);

export const JavaScriptIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiJavascript className={`${className} text-[#F7DF1E]`} />
);

export const NextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiNextdotjs className={`${className} text-[var(--foreground)]`} />
);

export const TypeScriptIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiTypescript className={`${className} text-[#3178C6]`} />
);

export const TailwindIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiTailwindcss className={`${className} text-[#06B6D4]`} />
);

export const GitIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiGit className={`${className} text-[#F05032]`} />
);

export const SqlIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiPostgresql className={`${className} text-[#4169E1]`} />
);

export const MysqlIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiMysql className={`${className} text-[#4479A1]`} />
);

export const DockerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiDocker className={`${className} text-[#2496ED]`} />
);

export const KubernetesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiKubernetes className={`${className} text-[#326CE5]`} />
);

export const HelmIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiHelm className={`${className} text-[#0F1689] dark:text-[#277BC0]`} />
);

export const CICDIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiGithubactions className={`${className} text-[#2088FF]`} />
);

export const TerraformIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiTerraform className={`${className} text-[#7B42BC]`} />
);

export const AWSIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <FaAws className={`${className} text-[#FF9900]`} />
);

export const PrometheusIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiPrometheus className={`${className} text-[#E6522C]`} />
);

export const GrafanaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiGrafana className={`${className} text-[#F46800]`} />
);

export const ArgoCDIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiArgo className={`${className} text-[#EF7B4D]`} />
);

export const JenkinsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <SiJenkins className={`${className} text-[#D24939]`} />
);
