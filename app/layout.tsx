import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dipak Kurkute | Full-Stack & Cloud Software Developer',
  description:
    'Portfolio of Dipak Kurkute. Full-Stack Developer & Cloud Systems Engineer specializing in Next.js, TypeScript, React, Kubernetes, and AWS infrastructure.',
  keywords: [
    'Dipak Kurkute',
    'Software Developer',
    'Full-Stack Developer',
    'Frontend Engineer',
    'DevOps Engineer',
    'Kubernetes',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Dipak Kurkute' }],
  openGraph: {
    title: 'Dipak Kurkute | Full-Stack & Cloud Software Developer',
    description:
      'Full-Stack Developer & Cloud Systems Engineer specializing in Next.js, TypeScript, React, Kubernetes, and AWS infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}

