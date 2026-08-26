import React from 'react';
import { WhatsAppSharePortal } from '../components/share/WhatsAppSharePortal';
import { MonogramWreath } from '../components/common/MonogramWreath';
import { FloralCorner } from '../components/common/FloralCorner';
import { weddingData } from '../data/weddingData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SharePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-50 text-maroon-950 flex flex-col items-center justify-start relative py-8 selection:bg-gold-500/30 selection:text-maroon-900">
      {/* Decorative Floral Accents */}
      <FloralCorner position="top-left" size={80} className="fixed top-2 left-2 opacity-30 pointer-events-none" />
      <FloralCorner position="top-right" size={80} className="fixed top-2 right-2 opacity-30 pointer-events-none" />
      <FloralCorner position="bottom-left" size={80} className="fixed bottom-2 left-2 opacity-30 pointer-events-none" />
      <FloralCorner position="bottom-right" size={80} className="fixed bottom-2 right-2 opacity-30 pointer-events-none" />

      {/* Top Navigation Back to Invitation */}
      <div className="w-full max-w-2xl px-4 flex justify-between items-center mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-maroon-800 hover:text-gold-700 transition-colors px-3 py-1.5 rounded-full bg-white/80 border border-gold-500/30 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Lihat Undangan Utama</span>
        </Link>
        <span className="text-[11px] font-mono text-gold-700 bg-gold-500/10 px-2 py-0.5 rounded-full border border-gold-500/20">
          Akses Terverifikasi
        </span>
      </div>

      {/* Header Monogram */}
      <div className="text-center my-2">
        <MonogramWreath monogram={weddingData.couple.monogram} size={90} />
      </div>

      {/* Share Generator Portal Component */}
      <main className="w-full">
        <WhatsAppSharePortal />
      </main>

      <footer className="mt-8 text-center text-xs text-maroon-900/50 font-sans space-y-1">
        <p>&copy; 2026 {weddingData.couple.groom.shortName} &amp; {weddingData.couple.bride.shortName} Wedding • Portal Khusus Keluarga &amp; Panitia</p>
        <p className="text-[11px] text-maroon-900/40">
          Website dibangun oleh{' '}
          <a
            href="https://andyys-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-700 hover:text-gold-600 underline underline-offset-2 transition-colors"
          >
            AndyysDev
          </a>
        </p>
      </footer>
    </div>
  );
};
