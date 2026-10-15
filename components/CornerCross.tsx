import React from 'react';

interface CornerCrossProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function CornerCross({
  position = 'top-left',
  className = '',
}: CornerCrossProps) {
  // 13px by 13px container.
  // Center is at 6px, spanning 1px to 7px.
  // Offsetting by -6px places the 1px line exactly at 0px (the border line).
  const styleMap: Record<string, React.CSSProperties> = {
    'top-left': { top: '-6px', left: '-6px' },
    'top-right': { top: '-6px', right: '-6px' },
    'bottom-left': { bottom: '-6px', left: '-6px' },
    'bottom-right': { bottom: '-6px', right: '-6px' },
  };

  return (
    <span
      className={`absolute pointer-events-none select-none z-20 ${className}`}
      style={{
        width: '13px',
        height: '13px',
        ...styleMap[position],
      }}
      aria-hidden="true"
    >
      {/* Horizontal 1px crosshair line */}
      <span
        className="absolute w-full bg-[#7c3aed]"
        style={{ height: '1px', top: '6px', left: 0 }}
      />
      {/* Vertical 1px crosshair line */}
      <span
        className="absolute h-full bg-[#7c3aed]"
        style={{ width: '1px', left: '6px', top: 0 }}
      />
    </span>
  );
}
