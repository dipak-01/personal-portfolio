import React from 'react';
import { HtmlIcon, CssIcon, ReactIcon, NodeIcon, JavaScriptIcon, NextIcon, TailwindIcon, GitIcon, SqlIcon, TypeScriptIcon } from './icons';

const skillIcons = [
  { id: 1, icon: <HtmlIcon /> },
  { id: 2, icon: <CssIcon /> },
  { id: 3, icon: <ReactIcon /> },
  { id: 4, icon: <NodeIcon /> },
  { id: 5, icon: <JavaScriptIcon /> },
  { id: 6, icon: <NextIcon /> },
  { id: 7, icon: <TailwindIcon /> },
  { id: 8, icon: <GitIcon /> },
  { id: 9, icon: <SqlIcon /> },
  { id: 10, icon: <TypeScriptIcon /> },
];

const InfiniteSkills: React.FC = () => {
  return (
    <div className="overflow-hidden relative w-full">
      {/* Left vignette */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none 
                    bg-gradient-to-r from-background to-transparent"></div>
      
      <div className="skill-scroll-container flex">
        {/* First set of icons */}
        <div className="skill-scroll flex animate-scroll">
          {skillIcons.map((skill) => (
            <div 
              key={`a-${skill.id}`} 
              className="bg-gray-800 px-3 py-1 rounded flex items-center justify-center mx-4"
            >
              {skill.icon}
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="skill-scroll flex animate-scroll">
          {skillIcons.map((skill) => (
            <div 
              key={`b-${skill.id}`} 
              className="bg-gray-800 px-3 py-1 rounded flex items-center justify-center mx-4"
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
      
      {/* Right vignette */}
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none 
                    bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

export default InfiniteSkills;
