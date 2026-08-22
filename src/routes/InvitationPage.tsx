import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { useGuestName } from '../hooks/useGuestName';
import { CoverScreen } from '../components/invitation/CoverScreen';
import { HeroCountdown } from '../components/invitation/HeroCountdown';
import { CoupleProfile } from '../components/invitation/CoupleProfile';
import { QuranVerseCard } from '../components/invitation/QuranVerseCard';
import { EventDetailCards } from '../components/invitation/EventDetailCards';
import { DigitalEnvelope } from '../components/invitation/DigitalEnvelope';
import { MonogramWreath } from '../components/common/MonogramWreath';
import { FloralDivider } from '../components/common/FloralDivider';
import { FloralCorner } from '../components/common/FloralCorner';
import { Heart } from 'lucide-react';

export const InvitationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { guestName, isPersonalized } = useGuestName();

  // Strict scroll lock while CoverScreen is active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-maroon-950 flex flex-col items-center justify-start overflow-x-hidden selection:bg-gold-500/30 selection:text-maroon-900">
      {/* Introductory Fullscreen Cover Screen with Strict Scroll Lock */}
      <CoverScreen
        guestName={guestName}
        isPersonalized={isPersonalized}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Invitation Container */}
      <main className="w-full max-w-3xl px-4 py-8 md:py-16 flex flex-col items-center relative overflow-hidden">
        {/* Background Subtle Floral Flourishes - Absolute for high 60fps GPU performance */}
        <FloralCorner position="top-left" size={90} className="absolute top-2 left-2 opacity-20 pointer-events-none" />
        <FloralCorner position="top-right" size={90} className="absolute top-2 right-2 opacity-20 pointer-events-none" />
        <FloralCorner position="bottom-left" size={90} className="absolute bottom-2 left-2 opacity-20 pointer-events-none" />
        <FloralCorner position="bottom-right" size={90} className="absolute bottom-2 right-2 opacity-20 pointer-events-none" />

        {/* Hero Section */}
        <header className="text-center w-full max-w-xl my-6 animate-fade-in-up">
          <p className="font-serif tracking-[0.3em] text-xs md:text-sm text-gold-600 uppercase mb-3">
            The Wedding of
          </p>

          <div className="my-4 flex justify-center">
            <MonogramWreath monogram={weddingData.couple.monogram} size={150} />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-maroon-900 tracking-wide mt-3 mb-2 gold-gradient-text">
            Arief &amp; Eka
          </h1>

          <p className="text-sm md:text-base text-maroon-800/80 font-sans tracking-widest uppercase font-medium">
            {weddingData.events.akad.dateFormatted}
          </p>

          {/* Personalized Greeting Chip */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/40 bg-white/80 shadow-sm backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-600/30" />
            <span className="text-xs md:text-sm font-sans text-maroon-900">
              Yth. <span className="font-semibold">{guestName}</span>
            </span>
          </div>

          <FloralDivider className="my-6" />
        </header>

        {/* Live Countdown Section */}
        <HeroCountdown events={weddingData.events} />

        {/* Sacred Verse Card (Q.S. Ar-Rum: 21) */}
        <QuranVerseCard verse={weddingData.verse} />

        {/* Couple Profile Section */}
        <CoupleProfile couple={weddingData.couple} />

        {/* Event Details Section (Akad & Resepsi with Maps) */}
        <EventDetailCards events={weddingData.events} />

        {/* Digital Gift Giving Section (BCA & Mandiri) */}
        <DigitalEnvelope bankAccounts={weddingData.bankAccounts} />

        {/* Closing & Prayer Section */}
        <footer className="my-16 text-center w-full max-w-xl px-4">
          <FloralDivider className="my-6" />
          <p className="font-sans text-xs md:text-sm text-maroon-900/80 leading-relaxed mb-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>
          <p className="font-serif text-sm font-semibold text-maroon-950 italic mb-6">
            Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
          <div className="font-serif text-lg font-bold text-gold-600">
            Keluarga Besar Arief &amp; Eka
          </div>
          <div className="mt-8 text-[11px] text-maroon-900/40 font-sans">
            &copy; 2026 Arief &amp; Eka Wedding • All Rights Reserved
          </div>
        </footer>
      </main>
    </div>
  );
};
