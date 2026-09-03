'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyEmailButton({ email }: { email: string }) {
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
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[var(--foreground)] bg-[var(--card)] text-[var(--foreground)] font-heading font-bold text-sm shadow-pop hover:bg-[var(--tertiary)] hover:text-[var(--tertiary-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--shadow-ink)] transition-all duration-200 cursor-pointer"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <div className="w-5 h-5 rounded-full bg-[var(--quaternary)] text-[var(--quaternary-foreground)] flex items-center justify-center">
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </div>
          <span>Copied to clipboard!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" strokeWidth={2.5} />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}
