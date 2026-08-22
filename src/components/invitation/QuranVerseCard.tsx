import React from 'react';
import { QuranVerse } from '../../types/wedding';
import { FloralFrame } from '../common/FloralFrame';
import { FloralDivider } from '../common/FloralDivider';
import { BookOpen } from 'lucide-react';

interface QuranVerseCardProps {
  verse: QuranVerse;
}

export const QuranVerseCard: React.FC<QuranVerseCardProps> = ({ verse }) => {
  return (
    <section className="my-12 w-full max-w-2xl mx-auto px-4">
      <FloralFrame cornerSize={44} className="bg-white/85 shadow-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-gold-600" />
          <span className="font-serif text-xs md:text-sm font-semibold tracking-widest uppercase text-gold-600">
            Q.S. {verse.surah} Ayat {verse.ayat}
          </span>
        </div>

        {/* Arabic Typography */}
        <p className="font-arabic text-xl md:text-2xl lg:text-3xl leading-loose md:leading-[2.5] text-maroon-950 my-6 px-2 md:px-6 dir-rtl" dir="rtl">
          {verse.arabicText}
        </p>

        <FloralDivider className="my-3 opacity-70" />

        {/* Indonesian Translation */}
        <p className="font-sans text-xs md:text-sm text-maroon-900/80 leading-relaxed italic px-2 md:px-6 mt-4">
          &ldquo;{verse.indonesianTranslation}&rdquo;
        </p>
      </FloralFrame>
    </section>
  );
};
