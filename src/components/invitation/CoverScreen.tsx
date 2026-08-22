import React from 'react';
import { Button } from '../ui/button';
import { MonogramWreath } from '../common/MonogramWreath';
import { FloralCorner } from '../common/FloralCorner';
import { FloralDivider } from '../common/FloralDivider';
import { MailOpen, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CoverScreenProps {
  guestName: string;
  isPersonalized: boolean;
  onOpen: () => void;
  isOpen: boolean;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  guestName,
  onOpen,
  isOpen,
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-1000 ease-in-out maroon-gradient-bg overflow-hidden text-center',
        isOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
      )}
    >
      {/* Background Decorative Floral Corners */}
      <FloralCorner position="top-left" size={90} className="absolute top-4 left-4 opacity-70" />
      <FloralCorner position="top-right" size={90} className="absolute top-4 right-4 opacity-70" />
      <FloralCorner position="bottom-left" size={90} className="absolute bottom-4 left-4 opacity-70" />
      <FloralCorner position="bottom-right" size={90} className="absolute bottom-4 right-4 opacity-70" />

      {/* Main Cover Card Container */}
      <div className="relative z-10 max-w-lg w-full rounded-3xl border border-gold-500/40 bg-maroon-950/70 p-6 md:p-10 backdrop-blur-md shadow-2xl animate-fade-in-up">
        {/* Top Tagline */}
        <p className="font-serif tracking-[0.25em] text-xs md:text-sm text-gold-300/90 uppercase mb-3">
          Walimatul &apos;Urs
        </p>

        {/* Monogram Wreath */}
        <div className="my-2 flex justify-center">
          <MonogramWreath monogram="A & E" size={130} />
        </div>

        {/* Couple Title */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 tracking-wide mt-2 mb-1 gold-gradient-text">
          Arief &amp; Eka
        </h1>

        <p className="text-xs md:text-sm text-ivory-100/80 font-sans tracking-widest uppercase mb-4">
          Minggu, 27 September 2026
        </p>

        <FloralDivider className="my-3 opacity-80" />

        {/* Recipient Invitation Box */}
        <div className="mt-4 mb-6 p-4 rounded-2xl border border-gold-500/30 bg-maroon-900/60 backdrop-blur-sm">
          <p className="text-xs text-gold-300/80 font-sans uppercase tracking-wider mb-1.5 flex items-center justify-center gap-1.5">
            <Heart className="w-3 h-3 text-gold-400 fill-gold-400/40" />
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="font-serif text-xl md:text-2xl font-semibold text-white tracking-wide break-words px-2 py-1">
            {guestName}
          </div>
          <p className="text-[10px] text-ivory-200/60 italic mt-1">
            *Mohon maaf apabila ada kesalahan penulisan nama atau gelar
          </p>
        </div>

        {/* Open Invitation CTA Button */}
        <Button
          onClick={onOpen}
          variant="gold"
          size="lg"
          className="w-full md:w-auto px-8 py-3 rounded-2xl shadow-xl hover:scale-105 transition-all text-sm font-medium tracking-wide flex items-center justify-center gap-2 mx-auto animate-pulse-subtle"
        >
          <MailOpen className="w-4 h-4 text-maroon-950" />
          <span>Buka Undangan</span>
        </Button>
      </div>
    </div>
  );
};
