'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  email?: string;
}

export default function CopyEmailButton({
  email = 'deepakkurkutedk007@gmail.com',
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer select-none ${
        copied
          ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]'
          : 'bg-white hover:bg-[#f4f3fb] border-[#d5cfef] hover:border-[#7c3aed] text-[#686082] hover:text-[#1a153a] shadow-xs'
      }`}
      aria-label="Copy email address"
    >
      {/* Icon swap container */}
      <span className="relative w-4 h-4 flex items-center justify-center shrink-0">
        <Copy
          className={`w-4 h-4 text-[#7c3aed] absolute transition-all duration-200 ${
            copied
              ? 'scale-50 opacity-0'
              : 'scale-100 opacity-100 group-hover:scale-110'
          }`}
          strokeWidth={2}
        />
        <Check
          className={`w-4 h-4 text-[#059669] absolute transition-all duration-200 ${
            copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          strokeWidth={2.5}
        />
      </span>

      <span className="transition-colors duration-200">
        {copied ? 'Copied to clipboard!' : email}
      </span>
    </button>
  );
}
