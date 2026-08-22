import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { WeddingEvents } from '../../types/wedding';
import { Badge } from '../ui/badge';
import { Clock } from 'lucide-react';

interface HeroCountdownProps {
  events: WeddingEvents;
}

export const HeroCountdown: React.FC<HeroCountdownProps> = ({ events }) => {
  const countdown = useCountdown(events);

  const units = [
    { label: 'HARI', value: countdown.days },
    { label: 'JAM', value: countdown.hours },
    { label: 'MENIT', value: countdown.minutes },
    { label: 'DETIK', value: countdown.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center my-8">
      {/* Active Phase Badge */}
      <div className="mb-4">
        <Badge variant="gold" className="px-4 py-1.5 rounded-full text-xs md:text-sm tracking-wide gap-1.5">
          <Clock className="w-3.5 h-3.5 text-maroon-800 animate-pulse" />
          <span>{countdown.phaseLabel}</span>
        </Badge>
      </div>

      {/* Countdown Digits Grid */}
      <div className="grid grid-cols-4 gap-2.5 md:gap-4 max-w-sm md:max-w-md w-full">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl border border-gold-500/40 bg-white/95 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <span className="font-serif text-2xl md:text-4xl font-bold text-maroon-900 tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs font-sans tracking-widest text-maroon-800/70 uppercase font-semibold mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
