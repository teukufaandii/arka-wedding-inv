import React from 'react';
import { cn } from '../../lib/utils';

interface FloralDividerProps {
  className?: string;
  color?: string;
}

export const FloralDivider: React.FC<FloralDividerProps> = ({
  className,
  color = '#D4AF37',
}) => {
  return (
    <div className={cn('flex items-center justify-center gap-3 my-6 w-full max-w-xs mx-auto', className)} aria-hidden="true">
      {/* Left delicate rule */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-500/60 to-gold-500" />
      
      {/* Center Botanical Flourish */}
      <svg
        width="36"
        height="24"
        viewBox="0 0 36 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Center Diamond */}
        <polygon points="18,4 23,12 18,20 13,12" fill={color} />
        <circle cx="18" cy="12" r="1.5" fill="#FCFBF7" />
        
        {/* Left leaf petal */}
        <path d="M12 12 C8 9 2 11 2 11 C2 11 6 15 12 12 Z" fill={color} opacity="0.8" />
        <circle cx="1" cy="11" r="1" fill={color} />

        {/* Right leaf petal */}
        <path d="M24 12 C28 9 34 11 34 11 C34 11 30 15 24 12 Z" fill={color} opacity="0.8" />
        <circle cx="35" cy="11" r="1" fill={color} />
      </svg>

      {/* Right delicate rule */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gold-500/60 to-gold-500" />
    </div>
  );
};
