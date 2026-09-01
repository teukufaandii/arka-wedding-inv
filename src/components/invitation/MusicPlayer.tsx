import React, { useState, useEffect, useRef, useCallback } from 'react';
import bgmAudio from '../../assets/music/bgm.m4a';
import { Play } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MusicPlayerProps {
  isCoverOpen?: boolean;
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isCoverOpen = false,
  autoPlay = true,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipMessage, setTooltipMessage] = useState<string>('Musik Latar');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isManuallyPausedRef = useRef<boolean>(false);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerTooltip = useCallback((msg: string, duration = 2200) => {
    setTooltipMessage(msg);
    setShowTooltip(true);
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, duration);
  }, []);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.debug('Autoplay prevented by browser policy (awaiting user gesture):', error);
          setIsPlaying(false);
        });
    }
  }, []);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const audio = new Audio(bgmAudio);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlayEvent = () => setIsPlaying(true);
    const handlePauseEvent = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlayEvent);
    audio.addEventListener('pause', handlePauseEvent);

    if (autoPlay && !isManuallyPausedRef.current) {
      playAudio();
    }

    const handleFirstGesture = () => {
      if (!isManuallyPausedRef.current && audioRef.current && audioRef.current.paused) {
        playAudio();
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });

    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      audio.removeEventListener('play', handlePlayEvent);
      audio.removeEventListener('pause', handlePauseEvent);
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (isCoverOpen && !isManuallyPausedRef.current && audioRef.current && audioRef.current.paused) {
      playAudio();
      triggerTooltip('Musik Diputar', 2000);
    }
  }, [isCoverOpen, playAudio, triggerTooltip]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      isManuallyPausedRef.current = true;
      pauseAudio();
      triggerTooltip('Musik Dijeda', 2000);
    } else {
      isManuallyPausedRef.current = false;
      playAudio();
      triggerTooltip('Musik Diputar', 2000);
    }
  };

  return (
    <div
      className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-40 flex items-center gap-2 select-none pointer-events-auto"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
      }}
    >
      <div
        className={cn(
          'transition-all duration-300 ease-out transform px-3 py-1.5 rounded-full border border-gold-500/40 bg-maroon-950/90 text-gold-300 text-xs shadow-lg backdrop-blur-md flex items-center gap-1.5 pointer-events-none',
          showTooltip
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-3 scale-95 pointer-events-none'
        )}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        <span className="font-sans font-medium whitespace-nowrap">{tooltipMessage}</span>
      </div>

      <button
        onClick={handleTogglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => {
          if (!tooltipTimeoutRef.current) setShowTooltip(false);
        }}
        type="button"
        aria-label={isPlaying ? 'Jeda musik latar' : 'Putar musik latar'}
        title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
        className={cn(
          'relative group flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 active:scale-95 shadow-xl',
          'w-12 h-12 md:w-14 md:h-14',
          'bg-maroon-950/90 border-2 border-gold-500/70 hover:border-gold-400 hover:shadow-gold-500/20 backdrop-blur-md'
        )}
      >
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-gold-500/20 animate-ping opacity-60 pointer-events-none" />
        )}

        <div
          className={cn(
            'w-full h-full rounded-full flex items-center justify-center transition-transform',
            isPlaying ? 'animate-spin-slow' : 'transform-none'
          )}
        >
          <div className="absolute inset-1 rounded-full border border-gold-500/20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-gold-500/15 pointer-events-none" />
          <div className="absolute inset-4 rounded-full border border-gold-500/25 pointer-events-none" />

          <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-500 flex items-center justify-center shadow-inner border border-gold-300/60">
            <span className="font-serif text-[8px] md:text-[9px] font-bold text-maroon-950 tracking-tighter">
              A&amp;I
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 bg-maroon-900 border border-gold-400/80 rounded-full p-1 shadow-md text-gold-300">
          {isPlaying ? (
            <div className="flex items-end justify-center gap-0.5 w-3 h-3 px-0.5">
              <span className="w-0.5 bg-gold-400 rounded-full animate-sound-wave-1 h-3" />
              <span className="w-0.5 bg-gold-400 rounded-full animate-sound-wave-2 h-2" />
              <span className="w-0.5 bg-gold-400 rounded-full animate-sound-wave-3 h-3" />
            </div>
          ) : (
            <Play className="w-2.5 h-2.5 text-gold-400 fill-gold-400" />
          )}
        </div>
      </button>
    </div>
  );
};
