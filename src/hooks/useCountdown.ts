import { useState, useEffect } from 'react';
import { WeddingEvents, CountdownTime, CountdownPhase } from '../types/wedding';

/**
 * Calculates remaining days, hours, minutes, seconds and active phase
 * based on the 2-stage wedding schedule (Akad -> Resepsi -> Completed).
 */
export function useCountdown(events: WeddingEvents): CountdownTime {
  const calculateCountdown = (): CountdownTime => {
    const now = Date.now();
    const akadTime = new Date(events.akad.targetTimestamp).getTime();
    const resepsiTime = new Date(events.resepsi.targetTimestamp).getTime();

    let targetTime = akadTime;
    let phase: CountdownPhase = 'before_akad';
    let phaseLabel = 'Menuju Akad Nikah';

    if (now < akadTime) {
      targetTime = akadTime;
      phase = 'before_akad';
      phaseLabel = 'Menuju Akad Nikah';
    } else if (now >= akadTime && now < resepsiTime) {
      targetTime = resepsiTime;
      phase = 'before_resepsi';
      phaseLabel = 'Menuju Resepsi Pernikahan';
    } else {
      phase = 'completed';
      phaseLabel = 'Alhamdulillah, Acara Telah Selesai';
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalRemainingMs: 0,
        phase,
        phaseLabel,
      };
    }

    const totalRemainingMs = Math.max(0, targetTime - now);
    const seconds = Math.floor((totalRemainingMs / 1000) % 60);
    const minutes = Math.floor((totalRemainingMs / 1000 / 60) % 60);
    const hours = Math.floor((totalRemainingMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalRemainingMs / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
      totalRemainingMs,
      phase,
      phaseLabel,
    };
  };

  const [countdown, setCountdown] = useState<CountdownTime>(calculateCountdown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, [events]);

  return countdown;
}
