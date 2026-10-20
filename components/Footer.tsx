'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          <span>&copy; {new Date().getFullYear()} Dipak Kurkute. Designed with clean simplicity.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/Resume.pdf"
            download="Dipak_Kurkute_Resume.pdf"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1 font-medium"
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <span className="text-zinc-300">&bull;</span>
          <a
            href="https://github.com/dipak-01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-300">&bull;</span>
          <a
            href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
