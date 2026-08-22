import React from 'react';
import { CoupleData } from '../../types/wedding';
import { FloralDivider } from '../common/FloralDivider';
import { FloralCorner } from '../common/FloralCorner';

interface CoupleProfileProps {
  couple: CoupleData;
}

export const CoupleProfile: React.FC<CoupleProfileProps> = ({ couple }) => {
  return (
    <section className="my-12 w-full max-w-2xl mx-auto px-4 text-center">
      {/* Section Header */}
      <p className="font-serif italic text-sm text-gold-600 tracking-wider mb-2">
        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900 tracking-wide mb-3">
        Mempelai Bahagia
      </h2>
      <FloralDivider className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mt-8 items-stretch">
        {/* Groom Card */}
        <div className="relative rounded-3xl border border-gold-500/30 bg-white/80 p-6 md:p-8 shadow-sm backdrop-blur-md flex flex-col justify-between items-center transition-all hover:border-gold-500/60">
          <FloralCorner position="top-left" size={40} className="absolute top-2 left-2 opacity-60" />
          <FloralCorner position="bottom-right" size={40} className="absolute bottom-2 right-2 opacity-60" />

          <div>
            <div className="w-16 h-16 rounded-full bg-maroon-800 text-gold-300 font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4 border border-gold-500/40 shadow-sm">
              A
            </div>
            <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
              {couple.groom.fullName}
            </h3>
            <p className="text-xs md:text-sm text-maroon-800/80 font-sans leading-relaxed">
              {couple.groom.orderInFamily}
              <br />
              <span className="font-semibold text-maroon-950">{couple.groom.fatherName}</span>
              <br />
              &amp; <span className="font-semibold text-maroon-950">{couple.groom.motherName}</span>
            </p>
          </div>
        </div>

        {/* Bride Card */}
        <div className="relative rounded-3xl border border-gold-500/30 bg-white/80 p-6 md:p-8 shadow-sm backdrop-blur-md flex flex-col justify-between items-center transition-all hover:border-gold-500/60">
          <FloralCorner position="top-right" size={40} className="absolute top-2 right-2 opacity-60" />
          <FloralCorner position="bottom-left" size={40} className="absolute bottom-2 left-2 opacity-60" />

          <div>
            <div className="w-16 h-16 rounded-full bg-maroon-800 text-gold-300 font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4 border border-gold-500/40 shadow-sm">
              E
            </div>
            <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
              {couple.bride.fullName}
            </h3>
            <p className="text-xs md:text-sm text-maroon-800/80 font-sans leading-relaxed">
              {couple.bride.orderInFamily}
              <br />
              <span className="font-semibold text-maroon-950">{couple.bride.fatherName}</span>
              <br />
              &amp; <span className="font-semibold text-maroon-950">{couple.bride.motherName}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
