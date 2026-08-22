# Technical Research & Architectural Decisions

**Feature**: `001-wedding-invitation-portal`
**Date**: 2026-08-22
**Status**: Completed

## 1. Frontend Framework & Tooling

### Decision: Vite + React 19 + TypeScript (Strict Mode)
- **Rationale**: Vite provides instant HMR and optimized tree-shaking for static SPA builds. React 19 provides first-class concurrent rendering and clean transition primitives. TypeScript in strict mode ensures zero runtime type surprises for query parsing, date math, and configuration props.
- **Alternatives Considered**:
  - *Next.js (App Router)*: Overkill for a static database-free invitation SPA; requires Node server or static export config without added benefit over pure Vite SPA.
  - *Astro*: Great for static content, but React 19 SPA gives superior stateful micro-interactions, opening cover animations, and client-side route transitions.

## 2. Design System, Tokens & TasteSkill Enforcement

### Decision: Tailwind CSS v3/v4 with Custom CSS Custom Property Tokens & shadcn/ui Primitives
- **Palette Tokens**:
  - `maroon-900`: `#4A0917` (Deepest backdrop & dark contrast surfaces)
  - `maroon-800`: `#6A1024` (Primary brand color & dominant theme)
  - `maroon-700`: `#800020` (Rich burgundy accent & interactive hover)
  - `gold-500`: `#D4AF37` (Warm champagne gold accents, borders, & badge highlights)
  - `gold-300`: `#F3E5AB` (Subtle gold tint for secondary filigree & text highlights)
  - `ivory-50`: `#FCFBF7` (Soft warm ivory background & card surfaces)
  - `ivory-100`: `#FAF6F0` (Card backdrop and subtle elevation)
- **Typography Standards**:
  - Primary Display/Serif: `Playfair Display` or `Cinzel` for couple names, titles, and verse citations.
  - Body/Sans-Serif: `Plus Jakarta Sans` or `Inter` for crisp readability at small sizes.
  - Arabic Typography: `Amiri` or `Traditional Arabic` font stack for Q.S. Ar-Rum: 21 Arabic script.
- **Spacing & Layout**:
  - Strict 4px/8px mathematical rhythm with TasteSkill optical padding.
- **Vector Ornaments**:
  - SVG-based filigree corner flourishes (`FloralCorner`), gold section dividers (`FloralDivider`), floral framing wrappers (`FloralFrame`), and central circular wreath (`MonogramWreath`).
  - Strict zero-photograph rule enforced.
- **Alternatives Considered**:
  - *CSS-in-JS (Styled Components / Emotion)*: Slower runtime performance, larger bundle size, less ergonomic for TasteSkill utility tokens than Tailwind CSS.

## 3. Client Routing & Route Guard Protection

### Decision: React Router with Declarative Static Token Route Guard
- **Public Route (`/`)**:
  - Custom hook `useGuestName` inspects `URLSearchParams` for `?to=` (or alias `?u=`), decodes URI components, sanitizes strings (stripping dangerous HTML/script tags), and defaults to `"Tamu Undangan"`.
- **Protected Route (`/share`)**:
  - Guard component `ProtectedRoute` reads `?token=` parameter.
  - Validates against `import.meta.env.VITE_STATIC_SHARE_TOKEN` (with fallback constant `arka-family-2026`).
  - If token is invalid or missing, renders `<Navigate to="/" replace />` with zero delay.
- **Alternatives Considered**:
  - *Server-side Middleware / HTTP Basic Auth*: Requires active backend server; violates database-free static hosting requirement.
  - *Password Modal on `/share`*: Inconvenient for mobile family members sharing via pre-authenticated links. URL static token allows 1-click access for family members while preventing public access.

## 4. Countdown Timer Engine & Dynamic Multi-Stage Transition

### Decision: Custom `useCountdown` Hook with 1000ms Interval and Auto-Phase Advancement
- **Calculation Logic**:
  - Phase 1 (Before Akad): Countdown to `akadDate` (e.g. 2026-10-25 08:00:00).
  - Phase 2 (After Akad starts, before Resepsi ends): Countdown to `resepsiDate` (e.g. 2026-10-25 11:00:00) with banner "Akad Nikah Sedang Berlangsung / Menuju Resepsi".
  - Phase 3 (After Resepsi ends): Celebratory state "Alhamdulillah, Acara Telah Selesai".
- **Time Drift Prevention**: Calculates delta against `Date.now()` on each tick rather than decrementing counters.
- **Alternatives Considered**:
  - *Third-party countdown library*: Adds unnecessary bundle weight; custom hook is ~30 lines, zero dependencies, and 100% typed.

## 5. Clipboard Integration & Visual Feedback

### Decision: Native `navigator.clipboard.writeText` with Fallback & Toast Notification
- **Execution**:
  - Executes `navigator.clipboard.writeText(accountNumber)`.
  - On success: triggers Sonner / shadcn toast (`"Nomor rekening berhasil disalin!"`) and flips local copy button state to `"Tersalin!"` with gold checkmark for 2500ms.
  - Fallback: standard `document.execCommand('copy')` on hidden input for legacy webviews.
- **Alternatives Considered**:
  - *Heavy clipboard library (clipboard.js)*: Unnecessary dependency for standard modern browser support.

## 6. Dynamic WhatsApp Link Builder

### Decision: Client-side URI-Encoded WhatsApp Deep-link Generator
- **URL Structure**: `https://api.whatsapp.com/send?text=${encodeURIComponent(messageBody)}`
- **Template Structure**:
  - *Bismillahirrohmanirrohim*
  - *Assalamu'alaikum Warahmatullahi Wabarakatuh*
  - Personal greeting addressed to `${guestName}`
  - Wedding announcement of Arka Pratama & Nadia Safira
  - Personalized link: `${origin}/?to=${encodeURIComponent(guestName)}`
  - Polite prayer and closing
- **In-Browser Editor**: Allows family members to preview or tweak text before tapping "Kirim via WhatsApp".
