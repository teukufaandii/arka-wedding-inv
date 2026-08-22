import React from 'react';
import { cn } from '../../lib/utils';

interface FloralCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  color?: string;
}

export const FloralCorner: React.FC<FloralCornerProps> = ({
  position = 'top-left',
  className,
  size = 64,
  color = '#D4AF37',
}) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={cn('inline-block pointer-events-none transition-transform', rotation, className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Main curved vine */}
        <path
          d="M10 90 C10 40 40 10 90 10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Secondary inner delicate vine */}
        <path
          d="M15 85 C15 45 45 15 85 15"
          stroke={color}
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />
        {/* Corner leaf flourish */}
        <path
          d="M10 10 C25 15 30 30 30 30 C30 30 15 25 10 10 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M10 10 C15 25 30 30 30 30 C30 30 25 15 10 10 Z"
          fill={color}
          opacity="0.65"
        />
        {/* Mid-curve botanical leaves */}
        <path
          d="M45 25 C52 18 62 20 62 20 C62 20 56 28 45 25 Z"
          fill={color}
        />
        <path
          d="M25 45 C18 52 20 62 20 62 C20 62 28 56 25 45 Z"
          fill={color}
        />
        {/* Buds & Berries */}
        <circle cx="68" cy="18" r="3" fill={color} />
        <circle cx="18" cy="68" r="3" fill={color} />
        <circle cx="85" cy="11" r="2" fill={color} />
        <circle cx="11" cy="85" r="2" fill={color} />
      </svg>
    </div>
  );
};
