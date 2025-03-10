'use client';
import { useState } from 'react';
import { FaGithub, FaGlobe, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  github?: string;
  technologies: string[];
}

// Function to generate a vibrant color based on project name
const getProjectColor = (name: string) => {
  // Generate consistent color based on name
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Define vibrant colors that work well with dark theme (increased opacity)
  const vibrantColors = [
      'rgba(120, 170, 255, 0.15)', // vibrant blue
    //   'rgba(255, 140, 180, 0.15)', // vibrant pink
    // 'rgba(130, 255, 230, 0.25)', // vibrant teal
    // 'rgba(255, 130, 130, 0.25)', // vibrant red
    // 'rgba(130, 255, 150, 0.25)', // vibrant green
    // 'rgba(190, 130, 255, 0.25)', // vibrant purple
    // 'rgba(255, 220, 100, 0.25)', // vibrant yellow
  ];
  
  // Use hash to pick a color
  const colorIndex = Math.abs(hash) % vibrantColors.length;
  return vibrantColors[colorIndex];
};

// Function to generate gradient overlay 

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="text-blue-400" />;
    case 'node':
      return <FaNodeJs className="text-green-500" />;
    case 'tailwind':
      return <SiTailwindcss className="text-blue-500" />;
    case 'next.js':
      return <SiNextdotjs className="text-white" />;
    case 'javascript':
      return <FaJs className="text-yellow-400" />;
    case 'typescript':
      return <SiTypescript className="text-blue-600" />;
    default:
      return <FaGlobe />;
  }
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get vibrant color for this project
  const bgColor = getProjectColor(project.name);
  
  // Compute border color - more saturated version of background
  const borderColor = bgColor.replace('0.25', '0.45');

  return (
    <div 
      className={`relative rounded-lg overflow-hidden h-56 transition-all duration-300 backdrop-blur-sm
                 ${isHovered ? 'transform scale-[1.02] shadow-lg shadow-black/30' : 'shadow-md shadow-black/20'}`}
      style={{ 
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        boxShadow: `0 0 20px ${bgColor.replace('0.25', '0.1')} inset`,
        transition: 'all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="w-full h-full">
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-center p-4 transform transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-200 text-sm mb-3 max-w-xs mx-auto">{project.description}</p>
              <div className="flex gap-4 justify-center mt-2">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <FaGlobe size={24} />
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="p-4 h-full flex flex-col">
          <h3 className="text-xl font-medium text-gray-200 mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="tooltip transition-all duration-200 hover:scale-110" 
                data-tip={tech}
              >
                {getTechIcon(tech)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
