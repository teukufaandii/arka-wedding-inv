# Quickstart & Verification Guide

**Feature**: `001-wedding-invitation-portal`
**Date**: 2026-08-22
**Status**: Ready for Verification

## 1. Prerequisites & Installation

- **Node.js**: v18.0.0 or higher
- **Package Manager**: npm (or pnpm/yarn)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

---

## 2. End-to-End Validation Scenarios

### Scenario 1: Dynamic Guest Personalization & Fallback
1. Open `http://localhost:5173/?to=Budi+Santoso`.
   - **Expected**: Cover card and greeting display `"Budi Santoso"`.
2. Open `http://localhost:5173/?to=Sarah+%26+Rekan`.
   - **Expected**: Decoded name `"Sarah & Rekan"` displays correctly.
3. Open `http://localhost:5173/` (no parameters).
   - **Expected**: Gracefully displays `"Tamu Undangan"`.

### Scenario 2: TasteSkill Aesthetics & Vector Verification
1. Inspect the visual layout on mobile (375px) and desktop (1280px).
   - **Expected**: Dominant deep maroon (`#6A1024`), champagne gold accents (`#D4AF37`), ivory card backgrounds (`#FCFBF7`).
   - **Expected**: 100% vector botanical ornaments (`FloralCorner`, `FloralDivider`, `FloralFrame`).
   - **Expected**: Zero portrait photographs present anywhere on the page.

### Scenario 3: Real-Time Multi-Stage Countdown
1. Observe the countdown counter.
   - **Expected**: Live tick every second without UI drift.
   - **Expected**: Correct calculation of Days, Hours, Minutes, and Seconds.

### Scenario 4: Event Navigation & Digital Gift Copying
1. Click **"Buka Google Maps"** on the Akad or Resepsi card.
   - **Expected**: Opens Google Maps in a new tab with venue destination pre-populated.
2. Click **"Salin Nomor Rekening"** on a Bank Card.
   - **Expected**: Account number copied to clipboard, Sonner toast notification appears, and button switches to `"Tersalin!"` with gold checkmark for 2.5 seconds.

### Scenario 5: Protected Family Share Portal (`/share`)
1. Navigate directly to `http://localhost:5173/share` (without token).
   - **Expected**: Immediately redirected back to `/`.
2. Navigate to `http://localhost:5173/share?token=wrongtoken`.
   - **Expected**: Immediately redirected back to `/`.
3. Navigate to `http://localhost:5173/share?token=arka-family-2026`.
   - **Expected**: Access granted. Displays the Family Share Portal.

### Scenario 6: WhatsApp Link Generation
1. In the Share Portal, enter `"dr. Hendra & Keluarga"`.
2. Click **"Buat Tautan Undangan"**.
   - **Expected**: Generates `http://localhost:5173/?to=dr.+Hendra+%26+Keluarga`.
3. Click **"Kirim via WhatsApp"**.
   - **Expected**: Launches WhatsApp Web / App with pre-filled formal invitation message containing the personalized link.
