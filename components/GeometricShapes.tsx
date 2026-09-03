import React from 'react';

export function SquiggleDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden flex justify-center py-6 ${className}`}>
      <svg
        className="w-48 sm:w-64 h-6 text-[var(--accent)]"
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12C20 4 36 20 52 12C68 4 84 20 100 12C116 4 132 20 148 12C164 4 180 20 196 12C212 4 228 20 236 12"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HeadingUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-3 w-full max-w-[120px] text-[var(--secondary)] ${className}`}
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7C22 2 42 11 62 7C82 3 102 10 118 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarburstBadge({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center relative font-heading font-extrabold ${className}`}>
      <svg
        className="w-24 h-24 text-[var(--tertiary)] animate-spin-slow drop-shadow-sm"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 L61 35 L97 35 L68 57 L79 91 L50 70 L21 91 L32 57 L3 35 L39 35 Z" />
      </svg>
      <span className="absolute text-xs uppercase tracking-wider font-extrabold text-[var(--foreground)] rotate-[-8deg] text-center max-w-[70px] leading-tight select-none">
        {text}
      </span>
    </div>
  );
}

export function FloatingConfetti() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Circle top left */}
      <div className="absolute top-16 left-[5%] w-8 h-8 rounded-full border-2 border-[var(--foreground)] bg-[var(--secondary)] opacity-80 dark:opacity-60 animate-float" />
      
      {/* Triangle top right */}
      <div 
        className="absolute top-28 right-[8%] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[var(--tertiary)] opacity-85 dark:opacity-60 rotate-12 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Pill shape middle left */}
      <div 
        className="absolute top-[45%] left-[3%] w-12 h-5 rounded-full border-2 border-[var(--foreground)] bg-[var(--quaternary)] opacity-80 dark:opacity-60 rotate-[-25deg] animate-float"
        style={{ animationDelay: '3s' }}
      />
      
      {/* Squiggle middle right */}
      <svg 
        className="absolute top-[52%] right-[4%] w-10 h-10 text-[var(--accent)] opacity-80 dark:opacity-60 animate-float"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 40 40" 
        fill="none"
      >
        <path d="M5 20 Q 15 5, 25 20 T 45 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Donut circle bottom left */}
      <div 
        className="absolute bottom-32 left-[8%] w-9 h-9 rounded-full border-4 border-[var(--tertiary)] opacity-80 dark:opacity-60 animate-float"
        style={{ animationDelay: '2.5s' }}
      />

      {/* Square cutout bottom right */}
      <div 
        className="absolute bottom-24 right-[10%] w-7 h-7 border-2 border-[var(--foreground)] bg-[var(--secondary)] opacity-80 dark:opacity-60 rotate-45 animate-float"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}

export function PolkaDotCluster({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 opacity-60 dark:opacity-40 select-none ${className}`} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-2 h-2 rounded-full bg-[var(--foreground)]" />
      ))}
    </div>
  );
}
