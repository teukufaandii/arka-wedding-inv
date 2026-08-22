# Tasks: Elegant Digital Wedding Invitation & Family Share Portal

**Input**: Design documents from `/specs/001-wedding-invitation-portal/`
**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/ui-contracts.md](contracts/ui-contracts.md), [quickstart.md](quickstart.md)

## Organization & Execution Format

- Format: `- [ ] [TaskID] [P?] [Story?] Description with exact file path`
- `[P]`: Parallelizable task (independent file, zero incomplete dependencies)
- `[Story]`: User story mapping (`[US1]`, `[US2]`, `[US3]`)

---

## Phase 1: Setup (Shared Infrastructure & Environment)

**Purpose**: Project initialization, toolchain configuration, and dependency setup.

- [X] T001 Initialize Vite React 19 SPA with TypeScript and configuration in package.json, tsconfig.json, tsconfig.app.json, tsconfig.node.json, and vite.config.ts
- [X] T002 [P] Configure Tailwind CSS, postcss.config.js, tailwind.config.js, and TasteSkill color tokens (maroon-900, maroon-800, gold-500, gold-300, ivory-50) and typography variables in src/assets/styles/globals.css
- [X] T003 [P] Install core runtime dependencies (react-router-dom, clsx, tailwind-merge, lucide-react, sonner, Radix UI primitives) in package.json
- [X] T004 [P] Create Tailwind class merge utility helper (cn) in src/lib/utils.ts

---

## Phase 2: Foundational (Design Tokens, Base Types, Vector Assets & Central Config)

**Purpose**: Core infrastructure, types, TasteSkill vector ornaments, and centralized data configuration that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T005 [P] Define core domain TypeScript interfaces and data models (PersonProfile, CoupleData, EventDetail, WeddingEvents, BankAccount, QuranVerse, CountdownTime, GuestInvitationContext) in src/types/wedding.ts
- [ ] T006 [P] Implement centralized static wedding dataset with realistic Indonesian defaults ("Arka Pratama & Nadia Safira", Akad & Resepsi schedules, bank accounts, WhatsApp template, and static token) in src/data/weddingData.ts
- [ ] T007 [P] Implement TasteSkill vector filigree corner flourish SVG component in src/components/common/FloralCorner.tsx
- [ ] T008 [P] Implement TasteSkill vector gold horizontal section divider SVG component in src/components/common/FloralDivider.tsx
- [ ] T009 [P] Implement TasteSkill vector floral framing wrapper SVG component in src/components/common/FloralFrame.tsx
- [ ] T010 [P] Implement TasteSkill vector circular monogram wreath SVG component in src/components/common/MonogramWreath.tsx
- [ ] T011 [P] Implement base shadcn/ui primitives (Button, Card, Badge, Sonner, Input, Label) styled with TasteSkill maroon-gold tokens in src/components/ui/
- [ ] T012 Implement client-side query string extraction and sanitization hook (useGuestName) with "Tamu Undangan" fallback in src/hooks/useGuestName.ts

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Personalized Guest Invitation & Schedule Countdown (Priority: P1) 🎯 MVP

**Goal**: Deliver a complete, personalized wedding invitation experience featuring an opening cover curtain screen, dynamic guest greeting, hero countdown timer, couple profile (zero photos), sacred Quran verse card (Q.S. Ar-Rum: 21), and structured Akad/Resepsi schedule cards.

**Independent Test**: Navigate to `/?to=Budi+Santoso` and `/`, verify personalized greeting vs. `"Tamu Undangan"` fallback, verify 2-stage countdown decrement, verify Ar-Rum verse card with vector framing, and verify distinct Akad and Resepsi event cards.

- [ ] T013 [US1] Implement dynamic 2-stage countdown calculation hook (useCountdown) with 1000ms drift-free tick and automatic Akad to Resepsi phase transition in src/hooks/useCountdown.ts
- [ ] T014 [P] [US1] Implement animated introductory cover screen component (CoverScreen) with dynamic guest name greeting, floral frame, and "Buka Undangan" opening trigger in src/components/invitation/CoverScreen.tsx
- [ ] T015 [P] [US1] Implement hero countdown banner component (HeroCountdown) displaying real-time Days, Hours, Minutes, Seconds with TasteSkill gold badges in src/components/invitation/HeroCountdown.tsx
- [ ] T016 [P] [US1] Implement couple profile showcase component (CoupleProfile) with Arka & Nadia parent details, monogram wreath, and zero portrait photos in src/components/invitation/CoupleProfile.tsx
- [ ] T017 [P] [US1] Implement sacred Quran verse component (QuranVerseCard) featuring Q.S. Ar-Rum: 21 in Arabic and Indonesian translation with floral framing in src/components/invitation/QuranVerseCard.tsx
- [ ] T018 [US1] Implement structured event schedule timeline cards (EventDetailCards) for Akad Nikah and Resepsi in src/components/invitation/EventDetailCards.tsx
- [ ] T019 [US1] Assemble primary invitation landing page (InvitationPage) with smooth staggered scroll reveals and opening transition in src/routes/InvitationPage.tsx

**Checkpoint**: User Story 1 (MVP) is fully functional and independently testable.

---

## Phase 4: User Story 2 - Venue Navigation & Digital Gift Giving (Priority: P2)

**Goal**: Enable turn-by-turn Google Maps navigation redirection for both venues and zero-dependency copy-to-clipboard for digital wedding gifts with immediate toast and button confirmation feedback.

**Independent Test**: Click "Buka Google Maps" on Akad/Resepsi cards to verify Google Maps launches with correct destination query; click "Salin Nomor Rekening" on bank cards to verify clipboard copy and 2.5s "Tersalin!" visual feedback.

- [ ] T020 [P] [US2] Integrate Google Maps deep-link navigation action buttons (https://www.google.com/maps/dir/?api=1&destination=...) with encoded venue queries into src/components/invitation/EventDetailCards.tsx
- [ ] T021 [US2] Implement digital envelope & gift giving component (DigitalEnvelope) with BCA & Mandiri accounts, zero-dependency navigator.clipboard write with document.execCommand fallback, and 2.5s button state confirmation in src/components/invitation/DigitalEnvelope.tsx
- [ ] T022 [US2] Integrate DigitalEnvelope component and Sonner toast notifications into src/routes/InvitationPage.tsx

**Checkpoint**: User Stories 1 AND 2 are complete, integrated, and independently testable.

---

## Phase 5: User Story 3 - Protected Family Share Portal & WhatsApp Distribution (Priority: P3)

**Goal**: Provide a private, token-gated `/share` portal for family members to generate custom personalized guest links and pre-filled formal WhatsApp messages, while bouncing unauthorized visits back to `/`.

**Independent Test**: Navigate to `/share` and `/share?token=wrong` (verifying immediate redirect to `/`); navigate to `/share?token=arka-family-2026` (verifying access granted); input guest name (e.g. "Keluarga dr. Hendra"), generate personalized link, and verify WhatsApp deep-link generation.

- [ ] T023 [P] [US3] Implement client-side static token route guard (ProtectedRoute) verifying ?token=STATIC_TOKEN and bouncing unauthorized visits to / with Navigate replace in src/routes/ProtectedRoute.tsx
- [ ] T024 [US3] Implement WhatsApp share generator component (WhatsAppSharePortal) featuring recipient name input, dynamic link builder (?to=...), editable formal Islamic greeting preview, and 1-click WhatsApp deep link in src/components/share/WhatsAppSharePortal.tsx
- [ ] T025 [US3] Implement dedicated share page view (SharePage) wrapped with TasteSkill maroon-gold styling in src/routes/SharePage.tsx
- [ ] T026 [US3] Configure client application router with / and /share routes and Toast provider in src/App.tsx and src/main.tsx

**Checkpoint**: All three user stories are functional and testable end-to-end.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Metadata, responsive visual audits, TasteSkill design compliance verification, and end-to-end quickstart scenario testing.

- [ ] T027 [P] Configure HTML meta tags, OpenGraph social sharing preview, title ("The Wedding of Arka & Nadia"), and favicon in index.html and public/favicon.svg
- [ ] T028 [P] Perform TasteSkill design audit verifying 100% vector ornaments, 0 portrait photographs, 4px/8px spacing, and WCAG AA contrast across 320px to 4K viewports
- [ ] T029 Execute full end-to-end validation scenarios documented in specs/001-wedding-invitation-portal/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - executes immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 completion - BLOCKS all User Stories.
- **User Story 1 (Phase 3 - P1)**: Depends on Phase 2 completion. Delivers standalone MVP.
- **User Story 2 (Phase 4 - P2)**: Depends on Phase 3 completion (enhances event cards & landing page).
- **User Story 3 (Phase 5 - P3)**: Depends on Phase 2 & Phase 3 (uses share templates and routes).
- **Polish (Phase 6)**: Depends on all user stories being implemented.

### Parallel Execution Opportunities per Story

- **Phase 1 Setup**: `T002`, `T003`, and `T004` can run in parallel after `T001`.
- **Phase 2 Foundational**: `T005`, `T006`, `T007`, `T008`, `T009`, `T010`, and `T011` can all run in parallel.
- **Phase 3 User Story 1**: `T014`, `T015`, `T016`, and `T017` can run in parallel once `T013` is defined.
- **Phase 4 User Story 2**: `T020` and `T021` can run in parallel before `T022`.
- **Phase 5 User Story 3**: `T023` and `T024` can run in parallel before `T025` and `T026`.
- **Phase 6 Polish**: `T027` and `T028` can run in parallel before final validation `T029`.

---

## Implementation Strategy

### MVP Scope (User Story 1 Only)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (User Story 1).
3. **Validate MVP**: Test `/?to=Budi+Santoso` and `/` to verify personalized greeting, cover transition, live countdown, Ar-Rum verse card, and event timeline cards.

### Incremental Delivery Flow
1. **MVP (US1)**: Core invitation display and personal greeting.
2. **Increment 2 (US2)**: Google Maps turn-by-turn navigation and digital envelope gifts.
3. **Increment 3 (US3)**: Protected Family Share Portal (`/share?token=...`) with WhatsApp link generator.
4. **Final Polish**: Metadata, social share cards, responsive audit, and quickstart execution.
