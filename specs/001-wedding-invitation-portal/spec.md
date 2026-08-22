# Feature Specification: Elegant Digital Wedding Invitation & Family Share Portal

**Feature Branch**: `001-wedding-invitation-portal`

**Created**: 2026-08-22

**Status**: Draft

**Input**: User description: "Create a functional feature specification for an elegant digital wedding invitation website designed according to TasteSkill design principles. 1. Aesthetic & Visual Direction: Theme (Deep maroon dominant, gold/champagne accents, ivory backdrop), Imagery (Exclusively vector floral botanical, zero portrait photos), TasteSkill UI/UX spacing & visual hierarchy. 2. Core Invitation Experience: Dynamic Recipient Greeting (?to=... with polite fallback), Live Countdown Timer, Sacred Verse Display (Q.S. Ar-Rum: 21 Indonesian translation), Event Details & Route Navigation (Akad Nikah & Resepsi with Google Maps turn-by-turn action), Digital Gift Section (Bride & Groom bank accounts with one-click copy). 3. Family Share Portal: Dedicated Sharing Page (/share) protected by static token (?token=STATIC_TOKEN) redirecting unauthorized visits to /, guest name input, dynamic link builder, and one-click WhatsApp sharing action."

## Clarifications

### Session 2026-08-22
- Q: Countdown Target Schedule & Phase Transition → A: Dynamic 2-stage transition: Countdown targets Akad Nikah initially, automatically transitions to the Resepsi schedule once Akad starts/completes, and then switches to the celebratory "Acara Berlangsung / Selesai" state.
- Q: WhatsApp Share Message Template & Customization → A: Editable formal template: Pre-populates a formal Islamic/Indonesian greeting (Bismillah, Assalamu'alaikum, recipient name, wedding copy, link, closing) in an editable preview with a 1-click WhatsApp launch button.
- Q: Default Wedding Data Configuration & Bride/Groom Defaults → A: Centralized realistic Indonesian defaults: Structured in a single configuration schema (`weddingData.ts`) with couple "Arka Pratama & Nadia Safira", Sunday schedule (Akad 08:00-10:00, Resepsi 11:00-14:00), BCA & Mandiri accounts, and "Tamu Undangan" fallback.
- Q: TasteSkill Vector Botanical Motifs & Micro-Interactions → A: Refined gold-filigree motifs & staggered scroll reveals: Vector floral corner flourishes, delicate gold horizontal dividers, and a central monogram wreath, paired with smooth staggered fade-up scroll reveals and an elegant cover-to-invitation opening transition.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Personalized Guest Invitation & Schedule Countdown (Priority: P1) 🎯 MVP

As an invited wedding guest opening a personalized invitation link (or a generic link), I want to view a personalized greeting with my name, an aesthetic cover and hero section, an active countdown timer, the sacred Quranic verse (Q.S. Ar-Rum: 21), and clear schedules for both Akad Nikah and Resepsi, so that I feel honored, spiritually connected to the union, and fully informed of the wedding schedule.

**Why this priority**: This constitutes the core emotional and informational value of the invitation. Guests must immediately understand whose wedding it is, when it takes place, feel personally addressed, and experience the sacred tone of the event.

**Independent Test**: Can be verified by navigating to the home URL with and without the `?to=` query parameter (e.g., `/?to=Budi+Santoso` vs `/`), observing the personalized greeting vs. default fallback, verifying the real-time countdown calculation, and checking the Ar-Rum verse and event timeline cards.

**Acceptance Scenarios**:

1. **Given** a guest opens an invitation link containing `?to=Sarah+%26+Partner`, **When** the page renders, **Then** the greeting displays "Sarah & Partner" with polished typography on the cover and hero banner.
2. **Given** a guest opens an invitation link without a query parameter or with an empty parameter, **When** the page renders, **Then** the greeting displays the polite fallback "Tamu Undangan" without layout shifting or broken placeholders.
3. **Given** the current date and time is before the wedding date, **When** viewing the countdown section, **Then** an active, synchronized timer displays remaining Days, Hours, Minutes, and Seconds updating continuously every second.
4. **Given** a guest scrolls through the invitation, **When** reaching the spiritual section, **Then** the complete Indonesian translation of Surah Ar-Rum ayat 21 is presented with balanced typography and vector botanical framing.
5. **Given** a guest navigates to the event schedule, **When** viewing event details, **Then** distinct cards for "Akad Nikah" and "Resepsi" show respective dates, start/end times, venue names, and full addresses.

---

### User Story 2 - Venue Navigation & Digital Gift Giving (Priority: P2)

As a guest planning travel or sending blessings, I want to click a navigation button to open Google Maps turn-by-turn directions to the venue, and access bank account details with a single-click copy button, so that I can easily reach the venue on the wedding day and send digital gifts conveniently.

**Why this priority**: Practical logistics (travel navigation and gift transfer) are the primary transactional actions guests perform after reading the invitation.

**Independent Test**: Can be tested by clicking the "Buka Google Maps" / "Petunjuk Arah" action button and verifying that Google Maps opens with the exact venue coordinates/query, and clicking "Salin Nomor Rekening" to verify that account numbers are copied to clipboard with immediate visual confirmation feedback.

**Acceptance Scenarios**:

1. **Given** a guest is viewing the Akad or Resepsi event section, **When** they click the Google Maps navigation button, **Then** a new tab/app launches Google Maps targeted to the exact venue location with turn-by-turn navigation ready.
2. **Given** a guest is viewing the Digital Gift section, **When** they click the "Salin" (Copy) button on the Bride or Groom's bank account card, **Then** the exact account number is copied to their clipboard and the button transitions to a "Tersalin!" (Copied!) confirmation state with clear visual feedback for at least 2 seconds.
3. **Given** a device with clipboard permissions denied or restricted, **When** the guest clicks copy, **Then** a graceful fallback or selectable text dialog ensures the account number remains easily accessible.

---

### User Story 3 - Protected Family Share Portal & WhatsApp Distribution (Priority: P3)

As a family coordinator or host with a valid authorization token, I want to access `/share?token=VALID_TOKEN` to generate custom personalized invitation links for specific guests and immediately launch pre-formatted WhatsApp messages, while unauthorized visitors without the token are securely redirected to the home page, so that our family can distribute invitations smoothly without manual link construction mistakes.

**Why this priority**: Streamlines the invitation distribution workflow for wedding hosts and family members while protecting the generation utility against unauthorized public tinkering.

**Independent Test**: Can be tested by attempting to access `/share` without a token (verifying immediate redirection to `/`), accessing `/share?token=STATIC_TOKEN` (verifying access granted), entering a recipient name (e.g., "Keluarga dr. Hendra"), generating the customized link, and clicking the WhatsApp share button to verify the pre-populated message structure.

**Acceptance Scenarios**:

1. **Given** an unauthenticated user navigates to `/share` without a query token or with an invalid token, **When** the page loads, **Then** the user is immediately redirected to the home page (`/`) without exposing sharing controls.
2. **Given** an authorized family member navigates to `/share?token=STATIC_TOKEN`, **When** the page loads, **Then** the family share portal interface is displayed with guest name input and link builder tools.
3. **Given** a family member enters a guest name (e.g., "Bapak Rudi & Keluarga") and clicks "Buat Tautan", **When** the action triggers, **Then** a properly encoded URL (`/?to=Bapak+Rudi+%26+Keluarga`) is generated and shown with a copyable link field and a "Kirim via WhatsApp" action.
4. **Given** a generated personalized link, **When** clicking "Kirim via WhatsApp", **Then** the application opens WhatsApp with a pre-filled, culturally appropriate Indonesian wedding invitation message template containing the recipient's name, warm greetings, and the personalized invitation link.

---

### Edge Cases

- **Special Characters in Guest Names**: Query strings containing ampersands (`&`), quotes, non-Latin characters, emojis, or punctuation (e.g., `?to=Drs.+H.+Ahmad+%26+Istri`) MUST be sanitized, safely decoded, and rendered without layout distortion or XSS vulnerabilities.
- **Excessively Long Guest Names**: Guest names exceeding 50 characters must wrap gracefully and adjust typography scale without overflowing container boundaries or breaking hero card visual balance.
- **Event Date Expiration**: When the current date and time passes the event date, the countdown timer must display a celebratory completion state (e.g., "Alhamdulillah, Acara Telah Selesai" or "Sedang Berlangsung") rather than displaying negative numbers.
- **Direct Navigation without Query Parameters**: Directly accessing the root URL (`/`) must render with the default fallback name ("Tamu Undangan") with zero visual flicker, console errors, or placeholder flashes.
- **Clipboard API Inavailability**: In environments where `navigator.clipboard` is unavailable (e.g., insecure HTTP contexts or older mobile webviews), an automatic textarea selection fallback must execute smoothly.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST implement a dominant Deep Maroon palette (`#6A1024` / `#4B0918`), Champagne/Warm Gold accents (`#D4AF37`), and warm Ivory backdrop (`#FDFBF7`) strictly following TasteSkill visual hierarchy, typography scales, 4px/8px spacing systems, and smooth staggered scroll reveals.
- **FR-002**: The system MUST exclusively use vector-based botanical/floral motifs (SVG/CSS filigree corner flourishes, delicate gold horizontal dividers, and a central monogram/verse wreath) and MUST NOT contain any portrait photographs of individuals or couples anywhere across the application.
- **FR-003**: The system MUST dynamically parse the guest's name from the `?to=` query parameter on the root route, decode standard URI encoding, sanitize the string, and render it in greeting placements.
- **FR-004**: The system MUST display a default polite fallback ("Tamu Undangan") whenever the `?to=` parameter is missing, empty, or whitespace-only.
- **FR-005**: The system MUST display an active, real-time countdown timer tracking days, hours, minutes, and seconds, operating with a dynamic 2-stage transition (targeting Akad Nikah initially, automatically switching to the Resepsi schedule once Akad starts/completes, and displaying an active celebratory state after Resepsi) updating every 1000ms without time-drift.
- **FR-006**: The system MUST feature the Indonesian translation of Surah Ar-Rum ayat 21 in an elegant, dedicated spiritual section with refined botanical ornament framing.
- **FR-007**: The system MUST display distinct, structured event cards for both "Akad Nikah" and "Resepsi", specifying the date, time window, venue name, address, and special notes.
- **FR-008**: The system MUST provide an external navigation button on event cards that opens Google Maps turn-by-turn navigation to the designated venue in a new tab or native mobile app.
- **FR-009**: The system MUST display bank account numbers and account holder names for digital gift giving (bride and groom accounts) with a one-click copy button.
- **FR-010**: The copy button MUST provide immediate visual feedback (e.g., text/icon switch to "Tersalin!" with distinct accent color) upon successful copy to clipboard.
- **FR-011**: The system MUST restrict access to the `/share` route via static token verification (`?token=STATIC_TOKEN`).
- **FR-012**: The system MUST redirect any visit to `/share` lacking a valid token parameter back to the root route (`/`) immediately.
- **FR-013**: The `/share` portal MUST provide an input form where users can input guest names and generate properly encoded personalized invitation URLs (`?to=...`).
- **FR-014**: The `/share` portal MUST generate an editable pre-formatted formal Islamic/Indonesian WhatsApp invitation message preview and a dynamic WhatsApp sharing URL (`https://wa.me/?text=...`) encoding the finalized message text, recipient name, and personalized link.
- **FR-015**: The entire application MUST operate in a database-free architecture where all state, parameters, and tokens are evaluated statically and client-side.

### Key Entities *(include if feature involves data)*

- **Guest Invitation Context**:
  - `recipientName`: Display name decoded from `?to=` parameter or `"Tamu Undangan"` fallback.
  - `isPersonalized`: Boolean flag indicating if a valid custom recipient name was supplied.
- **Event Schedule Item**:
  - `eventType`: "Akad Nikah" | "Resepsi".
  - `date`: Human-readable formatted date string (e.g., Indonesian locale).
  - `time`: Time window string (e.g., "08:00 - 10:00 WIB").
  - `venueName`: Name of building/mosque/hall.
  - `venueAddress`: Complete physical address.
  - `mapsUrl`: Google Maps target URL with encoded destination coordinates/place.
- **Digital Gift Account**:
  - `bankName`: Bank / Wallet name (e.g., "Bank Central Asia (BCA)", "Bank Mandiri").
  - `accountNumber`: Numerical account string.
  - `accountHolder`: Registered account holder name.
  - `recipientLabel`: "Mempelai Pria" | "Mempelai Wanita".
- **Share Generator Model**:
  - `inputGuestName`: Raw user input for guest name.
  - `generatedUrl`: Fully qualified URL with query parameter.
  - `whatsappShareUrl`: URL-encoded WhatsApp deep-link with message body.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of invitation visits with `?to=` query parameter render the recipient's name within the initial viewport load without layout shifts (CLS = 0).
- **SC-002**: 100% of direct visits without query parameters smoothly fallback to "Tamu Undangan" without error or placeholder flicker.
- **SC-003**: 100% of unauthorized attempts to access `/share` without a valid token are bounced to `/` within 200ms.
- **SC-004**: Family members can generate a personalized link and launch WhatsApp share in under 10 seconds per guest.
- **SC-005**: 100% of clicks on the bank copy button successfully write the account number to the clipboard and display confirmation feedback.
- **SC-006**: Visual elements and typography adhere strictly to TasteSkill spacing and contrast guidelines with 0 raster portrait photographs across the site.
- **SC-007**: Initial page load time is under 1.5 seconds on standard 4G mobile connections.

## Assumptions

- **Static Token Configuration**: The static security token for the `/share` route is configured via project constants / environment configuration and shared privately among immediate family members.
- **WhatsApp Web / App Availability**: Guests and family members have access to WhatsApp (app or web) when clicking WhatsApp distribution links.
- **Language & Locale**: The primary invitation text, date formatting, and WhatsApp template are localized in Bahasa Indonesia.
- **Static Deployment**: The application is designed to be hosted on static/edge hosting (e.g., Vercel, Netlify, Cloudflare Pages, GitHub Pages) without database infrastructure.
