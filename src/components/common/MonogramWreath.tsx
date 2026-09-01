import React from 'react';
import { cn } from '../../lib/utils';

interface MonogramWreathProps {
  monogram?: string;
  className?: string;
  size?: number;
  color?: string;
}

export const MonogramWreath: React.FC<MonogramWreathProps> = ({
  monogram = 'A & I',
  className,
  size = 140,
  color = '#D4AF37',
}) => {
  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer dotted accent ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke={color}
          strokeWidth="0.75"
          strokeDasharray="3 3"
          opacity="0.6"
        />

        {/* Main botanical wreath left branch */}
        <path
          d="M100 15 C45 15 15 55 15 100 C15 145 45 185 100 185"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Main botanical wreath right branch */}
        <path
          d="M100 15 C155 15 185 55 185 100 C185 145 155 185 100 185"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Leaves around perimeter */}
        {/* Top leaves */}
        <path d="M100 15 C95 8 85 12 85 12 C85 12 90 20 100 15 Z" fill={color} />
        <path d="M100 15 C105 8 115 12 115 12 C115 12 110 20 100 15 Z" fill={color} />

        {/* Upper Left leaves */}
        <path d="M45 45 C35 40 32 50 32 50 C32 50 42 52 45 45 Z" fill={color} />
        <path d="M25 75 C15 72 15 82 15 82 C15 82 25 82 25 75 Z" fill={color} />

        {/* Upper Right leaves */}
        <path d="M155 45 C165 40 168 50 168 50 C168 50 158 52 155 45 Z" fill={color} />
        <path d="M175 75 C185 72 185 82 185 82 C185 82 175 82 175 75 Z" fill={color} />

        {/* Lower Left leaves */}
        <path d="M25 125 C15 128 18 138 18 138 C18 138 28 135 25 125 Z" fill={color} />
        <path d="M45 155 C38 162 48 168 48 168 C48 168 52 158 45 155 Z" fill={color} />

        {/* Lower Right leaves */}
        <path d="M175 125 C185 128 182 138 182 138 C182 138 172 135 175 125 Z" fill={color} />
        <path d="M155 155 C162 162 152 168 152 168 C152 168 148 158 155 155 Z" fill={color} />

        {/* Bottom cluster */}
        <circle cx="100" cy="185" r="4" fill={color} />
        <circle cx="92" cy="183" r="2.5" fill={color} opacity="0.8" />
        <circle cx="108" cy="183" r="2.5" fill={color} opacity="0.8" />

        {/* Inner thin solid ring */}
        <circle cx="100" cy="100" r="76" stroke={color} strokeWidth="1" opacity="0.4" />
      </svg>

      {/* Monogram in Center */}
      <span className="absolute font-serif text-2xl md:text-3xl font-bold tracking-widest text-gold-500 drop-shadow-sm select-none">
        {monogram}
      </span>
    </div>
  );
};
