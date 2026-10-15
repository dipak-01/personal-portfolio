import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#f4f6eb',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dipak Kurkute | Full-Stack & Cloud-Native Systems Engineer',
  description: 'Portfolio of Dipak Kurkute. Architectural web applications, zero-knowledge encryption platforms, and automated cloud infrastructure built with Next.js, TypeScript, and Kubernetes.',
  keywords: [
    'Dipak Kurkute',
    'Full-Stack Developer',
    'Frontend Engineer',
    'DevOps',
    'Kubernetes',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio'
  ],
  authors: [{ name: 'Dipak Kurkute' }],
  openGraph: {
    title: 'Dipak Kurkute | Full-Stack & Cloud-Native Systems Engineer',
    description: 'Modernist web applications, zero-knowledge encryption platforms, and automated cloud infrastructure.',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-[#2e2e2e]">
        {children}
      </body>
    </html>
  );
}
