# Implementation Plan: Elegant Digital Wedding Invitation & Family Share Portal

**Branch**: `001-wedding-invitation-portal` | **Date**: 2026-08-22 | **Spec**: [specs/001-wedding-invitation-portal/spec.md](spec.md)

**Input**: Feature specification from `/specs/001-wedding-invitation-portal/spec.md`

## Summary

Build an elegant, high-performance digital wedding invitation Single Page Application (SPA) built with Vite, React 19, TypeScript, Tailwind CSS, and shadcn/ui. The design is strictly anchored on TasteSkill design principles featuring a luxurious Deep Maroon (`#6A1024` / `#4B0918`) and Champagne Gold (`#D4AF37`) palette with custom vector botanical ornaments and zero portrait photographs. Key functional capabilities include dynamic guest personalization via `?to=...` with `"Tamu Undangan"` fallback, an active 2-stage countdown timer, Q.S. Ar-Rum: 21 verse card, Google Maps turn-by-turn navigation, digital gift account copying with instant toast feedback, and a static-token-protected `/share` portal for generating personalized links and pre-filled WhatsApp invitation messages without requiring any backend database.

## Technical Context

**Language/Version**: TypeScript 5.7+ / React 19 / HTML5 / CSS3

**Primary Dependencies**:
- `vite` (v6.x)
- `react` & `react-dom` (v19.x)
- `react-router-dom` (v7.x / v6.28+)
- `tailwindcss` & `tailwindcss-animate`
- `clsx` & `tailwind-merge`
- `lucide-react`
- `@radix-ui/react-slot`, `@radix-ui/react-label`, `@radix-ui/react-tooltip`, `@radix-ui/react-dialog`
- `sonner` (Toast notifications)

**Storage**: Zero external database. Static typed configuration centralized in `src/data/weddingData.ts`.

**Testing**: Vitest + React Testing Library + `@testing-library/jest-dom` + `jsdom`.

**Target Platform**: Modern mobile and desktop web browsers (Mobile-first responsive across 320px to 4K).

**Project Type**: Single Page Web Application (Static SPA).

**Performance Goals**:
- Initial bundle load < 1.5s on standard 4G mobile.
- Cumulative Layout Shift (CLS) = 0.
- 60fps smooth scroll animations and opening transitions.

**Constraints**:
- Strictly zero portrait photographs (vector floral/botanical ornaments only).
- TasteSkill spacing (4px/8px rhythm) and typography hierarchy strictly enforced.
- 100% database-free architecture with static token route protection for `/share`.

**Scale/Scope**: 2 primary client routes (`/`, `/share`), 1 cover screen, 6 invitation feature modules, 4 reusable vector ornament components.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle / Rule | Evaluation | Status |
| :--- | :--- | :--- |
| **I. TasteSkill Design Priority** | Enforced via Tailwind tokens (`maroon-*`, `gold-*`, `ivory-*`), 4px/8px spacing rhythm, optical margins, and typography scale. | ✅ PASS |
| **II. Aesthetic Direction & Zero Photos** | Deep maroon palette (`#6A1024` / `#4B0918`), warm gold (`#D4AF37`), ivory (`#FCFBF7`). 100% SVG botanical ornaments (`FloralCorner`, `FloralDivider`, `FloralFrame`, `MonogramWreath`). 0 portrait photos. | ✅ PASS |
| **III. Dynamic Personalization** | `useGuestName` hook dynamically parses `?to=` parameter, decodes URI, sanitizes string, and provides `"Tamu Undangan"` fallback without page reload or CLS. | ✅ PASS |
| **IV. Database-Free Route Protection** | Client-side `ProtectedRoute` validates `?token=` parameter against static token constant (`arka-family-2026`). Unauthorized visits immediately bounce to `/`. | ✅ PASS |
| **V. Functional Utilities UX** | Real-time 2-stage `useCountdown` hook, zero-dependency `navigator.clipboard` with toast feedback, direct Google Maps deep link, dynamic WhatsApp URL builder. | ✅ PASS |

## Project Structure

### Documentation (this feature)

```text
specs/001-wedding-invitation-portal/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 architectural & technical decisions
├── data-model.md        # Phase 1 schema, types, & state transitions
├── contracts/           # Phase 1 interface, URL & deep-link contracts
│   └── ui-contracts.md
├── quickstart.md        # Phase 1 validation scenarios & run guide
├── checklists/          # Quality validation checklists
│   └── requirements.md
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
arka-wedding-inv/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── globals.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── FloralCorner.tsx
│   │   │   ├── FloralDivider.tsx
│   │   │   ├── FloralFrame.tsx
│   │   │   └── MonogramWreath.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── badge.tsx
│   │   │   └── sonner.tsx
│   │   ├── invitation/
│   │   │   ├── CoverScreen.tsx
│   │   │   ├── HeroCountdown.tsx
│   │   │   ├── CoupleProfile.tsx
│   │   │   ├── QuranVerseCard.tsx
│   │   │   ├── EventDetailCards.tsx
│   │   │   └── DigitalEnvelope.tsx
│   │   └── share/
│   │       └── WhatsAppSharePortal.tsx
│   ├── data/
│   │   └── weddingData.ts
│   ├── hooks/
│   │   ├── useCountdown.ts
│   │   └── useGuestName.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── routes/
│   │   ├── InvitationPage.tsx
│   │   ├── SharePage.tsx
│   │   └── ProtectedRoute.tsx
│   ├── types/
│   │   └── wedding.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

**Structure Decision**: Standard modern Vite React SPA layout with dedicated directories for TasteSkill vector ornaments (`components/common`), shadcn/ui primitives (`components/ui`), invitation domain components (`components/invitation`), share utility (`components/share`), centralized configuration (`data`), custom hooks (`hooks`), and routing (`routes`).

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
| :--- | :--- | :--- |
| *None* | Architecture strictly adheres to minimal static SPA principles with 0 database dependencies. | N/A |
