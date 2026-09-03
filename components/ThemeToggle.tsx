'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-[var(--foreground)] shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--shadow-ink)] transition-all duration-200 cursor-pointer overflow-hidden group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          strokeWidth={2.5}
          className={`w-5 h-5 transition-all duration-300 absolute text-amber-500 ${
            resolvedTheme === 'dark'
              ? 'opacity-0 rotate-90 scale-50'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          strokeWidth={2.5}
          className={`w-5 h-5 transition-all duration-300 absolute text-violet-400 ${
            resolvedTheme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
      </div>
    </button>
  );
}
