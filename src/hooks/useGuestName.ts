import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { weddingData } from '../data/weddingData';
import { GuestInvitationContext } from '../types/wedding';

/**
 * Sanitizes a raw guest name string to prevent HTML/script injection
 * and normalizes whitespace while handling common URL-encoding nuances.
 */
export function sanitizeGuestName(raw: string | null): string {
  if (!raw) return '';

  try {
    const decoded = decodeURIComponent(raw.replace(/\+/g, ' '));
    // Strip HTML tags and unsafe characters
    const sanitized = decoded.replace(/<[^>]*>?/gm, '').trim();
    return sanitized;
  } catch {
    // If malformed URI sequence, fallback to standard cleanup
    return raw.replace(/<[^>]*>?/gm, '').trim();
  }
}

/**
 * React hook to parse, decode, and sanitize recipient name from query parameters (?to= or ?u=)
 * with graceful fallback to "Tamu Undangan".
 */
export function useGuestName(): GuestInvitationContext {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const rawTo = searchParams.get('to') || searchParams.get('u');
    const cleaned = sanitizeGuestName(rawTo);

    if (cleaned.length > 0) {
      return {
        rawParam: rawTo,
        guestName: cleaned,
        isPersonalized: true,
      };
    }

    return {
      rawParam: null,
      guestName: weddingData.defaultGuestFallback || 'Tamu Undangan',
      isPersonalized: false,
    };
  }, [searchParams]);
}
