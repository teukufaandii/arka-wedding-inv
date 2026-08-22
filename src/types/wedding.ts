export interface PersonProfile {
  fullName: string;
  shortName: string;
  fatherName: string;
  motherName: string;
  orderInFamily: string; 
}

export interface CoupleData {
  groom: PersonProfile;
  bride: PersonProfile;
  monogram: string; 
}

export type EventType = 'akad' | 'resepsi';

export interface EventDetail {
  id: EventType;
  title: string;
  dateFormatted: string; 
  targetTimestamp: string; 
  timeRange: string; 
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  calendarUrl?: string;
}

export interface WeddingEvents {
  akad: EventDetail;
  resepsi: EventDetail;
}

export type BankAccountCategory = 'mempelai' | 'keluarga_pria' | 'keluarga_wanita';

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  recipientCategory: string;
  category?: BankAccountCategory;
}

export interface QuranVerse {
  surah: string;
  ayat: number;
  arabicText: string;
  indonesianTranslation: string;
}

export interface GuestInvitationContext {
  rawParam: string | null;
  guestName: string;
  isPersonalized: boolean;
}

export type CountdownPhase = 'before_akad' | 'before_resepsi' | 'completed';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalRemainingMs: number;
  phase: CountdownPhase;
  phaseLabel: string;
}

export interface ShareFormState {
  guestNameInput: string;
  encodedUrl: string;
  customMessage: string;
  whatsappDeepLink: string;
}

export interface WeddingConfig {
  couple: CoupleData;
  events: WeddingEvents;
  verse: QuranVerse;
  bankAccounts: BankAccount[];
  defaultGuestFallback: string;
  staticShareToken: string;
  whatsappTemplate: (guestName: string, invitationUrl: string) => string;
}
