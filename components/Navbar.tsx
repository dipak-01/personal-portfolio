'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)]/90 backdrop-blur-md shadow-pop transition-all duration-300">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)] text-[var(--accent-foreground)] font-heading font-extrabold text-lg flex items-center justify-center shadow-pop-sm group-hover:rotate-12 transition-transform duration-200">
            dk.
          </div>
          <span className="font-heading font-bold text-base sm:text-lg text-[var(--foreground)] hidden sm:inline-block">
            Dipak Kurkute
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--muted)] px-3 py-1.5 rounded-full border-2 border-[var(--border)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1 text-sm font-heading font-semibold text-[var(--foreground)] rounded-full hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Status indicator & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-xs font-heading font-bold shadow-pop-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--quaternary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--quaternary)]"></span>
            </span>
            <span className="text-[var(--foreground)]">Available for work</span>
          </div>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-[var(--foreground)] shadow-pop hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl border-2 border-[var(--foreground)] bg-[var(--card)] shadow-pop-lg flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-base text-[var(--foreground)] hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] transition-colors duration-150 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <Sparkles className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="pt-2 border-t-2 border-[var(--border)] mt-1 flex items-center justify-between px-2">
            <span className="text-xs font-heading font-bold text-[var(--muted-foreground)]">Status:</span>
            <span className="text-xs font-heading font-bold text-[var(--quaternary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--quaternary)] animate-pulse" />
              Available for work
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
