import React from 'react';
import { WeddingEvents } from '../../types/wedding';
import { Button } from '../ui/button';
import { FloralDivider } from '../common/FloralDivider';
import { FloralCorner } from '../common/FloralCorner';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

interface EventDetailCardsProps {
  events: WeddingEvents;
}

export const EventDetailCards: React.FC<EventDetailCardsProps> = ({ events }) => {
  const eventList = [events.akad, events.resepsi];

  return (
    <section className="my-12 w-full max-w-2xl mx-auto px-4 text-center">
      <p className="font-serif italic text-sm text-gold-600 tracking-wider mb-2">
        Waktu &amp; Lokasi Acara
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900 tracking-wide mb-3">
        Rangkaian Acara
      </h2>
      <FloralDivider className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {eventList.map((evt, idx) => (
          <div
            key={evt.id}
            className="relative rounded-3xl border border-gold-500/35 bg-white/85 p-6 md:p-8 shadow-sm backdrop-blur-md flex flex-col justify-between items-center text-center transition-all hover:border-gold-500/70"
          >
            <FloralCorner position={idx === 0 ? 'top-left' : 'top-right'} size={40} className="absolute top-2 left-2 opacity-50" />
            <FloralCorner position={idx === 0 ? 'bottom-right' : 'bottom-left'} size={40} className="absolute bottom-2 right-2 opacity-50" />

            <div className="w-full">
              {/* Event Badge / Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-maroon-800 text-gold-300 text-xs font-serif font-bold uppercase tracking-wider mb-4 border border-gold-500/30">
                {evt.title}
              </span>

              {/* Date */}
              <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-maroon-950 mb-2">
                <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{evt.dateFormatted}</span>
              </div>

              {/* Time */}
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-maroon-800/80 mb-4">
                <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{evt.timeRange}</span>
              </div>

              <div className="h-[1px] w-12 bg-gold-500/30 mx-auto my-3" />

              {/* Venue & Address */}
              <div className="mb-6">
                <p className="font-serif text-lg font-bold text-maroon-900 mb-1">
                  {evt.venueName}
                </p>
                <p className="text-xs text-maroon-800/75 leading-relaxed flex items-start justify-center gap-1.5 px-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span>{evt.venueAddress}</span>
                </p>
              </div>
            </div>

            {/* Google Maps CTA */}
            <Button
              asChild
              variant="outline"
              size="default"
              className="w-full rounded-xl text-xs font-semibold tracking-wide border-gold-500/50 hover:bg-gold-500/15"
            >
              <a
                href={evt.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-maroon-800" />
                <span>Buka Google Maps</span>
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
