# Interface & Routing Contracts

**Feature**: `001-wedding-invitation-portal`
**Date**: 2026-08-22
**Status**: Completed

## 1. URL Parameter Contracts

### 1.1 Public Invitation Route (`/`)

- **Path**: `/`
- **Supported Parameters**:
  - `to` (*optional, string*): Target recipient's name (e.g., `?to=Budi+Santoso` or `?to=Keluarga+dr.+Hendra+%26+Rekan`).
  - `u` (*optional alias, string*): Alternative shorthand for `to`.
- **Parsing Behavior**:
  - Parameter decoded using `decodeURIComponent`.
  - Sanitized to remove HTML entities or script characters.
  - Trimmed of leading/trailing whitespace.
  - If absent, empty string, or whitespace-only, resolves to default fallback: `"Tamu Undangan"`.

### 1.2 Protected Share Route (`/share`)

- **Path**: `/share`
- **Required Parameters**:
  - `token` (*mandatory, string*): Secret token required for access (e.g., `?token=arka-family-2026`).
- **Access Control Contract**:
  - `token === STATIC_SHARE_TOKEN` → HTTP Status 200 (renders Share Portal).
  - `token !== STATIC_SHARE_TOKEN` or `token` missing → Client redirect to `/` via `<Navigate to="/" replace />`.

---

## 2. External Integration Contracts

### 2.1 Google Maps Deep Link Contract

- **Base URL**: `https://www.google.com/maps/dir/`
- **Query Format**: `?api=1&destination=${encodeURIComponent(venueCoordinatesOrAddress)}`
- **Target**: `_blank` with `rel="noopener noreferrer"`.
- **Expected Payload**:
  - Akad: `Masjid+Raya+Al-Kautsar,+Jakarta+Utara` (or exact lat/long `"-6.1384,106.8792"`).
  - Resepsi: `Grand+Ballroom+Hotel+Mulia,+Jakarta+Pusat`.

### 2.2 WhatsApp Direct Messaging Contract

- **Base URL**: `https://api.whatsapp.com/send`
- **Query Format**: `?text=${encodeURIComponent(messageBody)}`
- **Message Body Contract**:
```text
Bismillahirrohmanirrohim
Assalamu'alaikum Warahmatullahi Wabarakatuh

Yth. {guestName},

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami:

Arka Pratama & Nadia Safira

Berikut tautan undangan digital Anda:
{personalizedUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Wassalamu'alaikum Warahmatullahi Wabarakatuh
Kami yang berbahagia,
Keluarga Besar Arka & Nadia
```

---

## 3. UI Component Contracts

### 3.1 `CoverScreen`
- **Props**:
  - `guestName: string`
  - `coupleMonogram: string`
  - `weddingDate: string`
  - `onOpenInvitation: () => void`
- **Behavior**: Fullscreen introductory splash with TasteSkill floral frame and animated "Buka Undangan" action button.

### 3.2 `HeroCountdown`
- **Props**:
  - `events: WeddingEvents`
- **State Output**: Real-time Days, Hours, Minutes, Seconds cards with TasteSkill gold border styling.

### 3.3 `DigitalEnvelope`
- **Props**:
  - `accounts: BankAccount[]`
  - `onCopy: (accountNumber: string) => void`
- **Feedback Contract**: Emits toast and updates button text to "Tersalin!" with gold checkmark for 2.5s.
