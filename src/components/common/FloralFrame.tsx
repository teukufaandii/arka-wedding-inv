import React from 'react';
import { FloralCorner } from './FloralCorner';
import { cn } from '../../lib/utils';

interface FloralFrameProps {
  children: React.ReactNode;
  className?: string;
  cornerSize?: number;
  variant?: 'card' | 'screen' | 'compact';
  borderColor?: string;
}

export const FloralFrame: React.FC<FloralFrameProps> = ({
  children,
  className,
  cornerSize = 48,
  variant = 'card',
  borderColor = 'border-gold-500/30',
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl border p-6 md:p-8 bg-white/95 shadow-sm transition-all duration-300',
        borderColor,
        variant === 'screen' ? 'min-h-[85vh] flex flex-col justify-center' : '',
        variant === 'compact' ? 'p-4 md:p-6' : '',
        className
      )}
    >
      {/* 4 Corner Ornaments */}
      <FloralCorner position="top-left" size={cornerSize} className="absolute top-2 left-2" />
      <FloralCorner position="top-right" size={cornerSize} className="absolute top-2 right-2" />
      <FloralCorner position="bottom-left" size={cornerSize} className="absolute bottom-2 left-2" />
      <FloralCorner position="bottom-right" size={cornerSize} className="absolute bottom-2 right-2" />

      {/* Frame content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
