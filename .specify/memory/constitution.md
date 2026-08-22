<!--
Sync Impact Report
==================
Version Change: None (Unratified Template) -> v1.0.0
Ratification Date: 2026-08-22
Last Amended Date: 2026-08-22

Principles Defined:
- [PRINCIPLE_1_NAME] -> I. TasteSkill Design Priority (Supreme Frontend Guideline)
- [PRINCIPLE_2_NAME] -> II. Aesthetic Direction & Vector-Only Botanical Artistry (Zero Portrait Photos)
- [PRINCIPLE_3_NAME] -> III. Dynamic Guest Personalization with Graceful Fallbacks
- [PRINCIPLE_4_NAME] -> IV. Database-Free Route Protection & Access Control
- [PRINCIPLE_5_NAME] -> V. Functional Utilities & High-Fidelity Interaction UX

Added Sections:
- Core Principles (I through V)
- Technical Stack & Quality Constraints
- Development Workflow & Quality Gates
- Governance & Versioning Policies

Templates Alignment Status:
- .specify/templates/plan-template.md: ✅ Aligned (Constitution Check gates mapped)
- .specify/templates/spec-template.md: ✅ Aligned (User stories & requirements conform)
- .specify/templates/tasks-template.md: ✅ Aligned (Phase gates reflect design & utility principles)

Deferred Items / TODOs:
- None. All placeholders resolved.
-->

# Arka Wedding Invitation Constitution

## Core Principles

### I. TasteSkill Design Priority (Supreme Frontend Guideline)
- **TasteSkill Supremacy**: TasteSkill design rules, design tokens, visual hierarchy, mathematical spacing systems (4px/8px grid rhythm), and typography scale standards MUST serve as the supreme frontend authority across all screens, modals, cards, and interactive components.
- **Visual Discipline**: Every UI component MUST adhere strictly to consistent scale steps, optical padding, intentional contrast ratios, and cohesive line-heights.
- **Token Integrity**: Arbitrary, ad-hoc styling, unstructured inline magic numbers, or conflicting styling rules outside the established design token system are strictly prohibited.
- **Rationale**: A digital wedding invitation relies on emotional resonance, sophistication, and flawless visual polish. Establishing TasteSkill standards as the supreme design authority guarantees a luxurious, unified aesthetic experience.

### II. Aesthetic Direction & Vector-Only Botanical Artistry (Zero Portrait Photos)
- **Color Palette**: The color palette MUST be strictly anchored on Deep Maroon as the dominant brand color (`#6A1024` primary, `#4B0918` deep shade/background accents), Champagne/Warm Gold (`#D4AF37` / `#E5C158`) as refined accent/border/highlight tokens, and warm Ivory (`#FDFBF7` / `#FAF6F0`) as backdrop/card surfaces.
- **Botanical Vector Elements**: Visual embellishments MUST be 100% vector-based (SVG, pure CSS, or vector illustrations) depicting elegant floral, foliage, and botanical motifs.
- **Zero Portrait Photographs**: Under no circumstances shall portrait photographs of individuals, couples, or models be included anywhere in the application.
- **Rationale**: Vector-based botanical aesthetics convey timeless elegance, scale crisply across all screen resolutions and densities, optimize load performance, and honor the explicit design directive to exclude portrait photography.

### III. Dynamic Guest Personalization with Graceful Fallbacks
- **Query Parameter Parsing**: The application MUST dynamically parse the recipient's name from URL query parameters (specifically `?to=...`), sanitizing and URL-decoding the input before rendering.
- **Graceful Fallbacks**: When the query parameter is absent, empty, or malformed, the system MUST gracefully fall back to a polite default designation (e.g., `"Tamu Undangan"` or `"Bapak/Ibu/Saudara/i"`).
- **Universal Propagation**: Guest personalization MUST seamlessly propagate through the cover screen, hero greeting banner, invitation card, and shareable link generator without requiring database fetches, server roundtrips, or causing layout shifts.
- **Rationale**: Personalized digital invitations elevate guest engagement and respect, while robust fallback handling ensures zero broken UI or jarring empty states when invitations are opened directly.

### IV. Database-Free Route Protection & Access Control
- **Database-Free Architecture**: The invitation suite MUST operate entirely without an external database. All application states, personalization parameters, and event details MUST be static, deterministic, or URL/token-driven.
- **Route Gate for `/share`**: Administrative and link-generation interfaces (specifically `/share`) MUST be secured using client/middleware static token verification (e.g., `/share?token=STATIC_TOKEN`).
- **Strict Unauthorized Bounce**: Any access attempt to protected routes lacking a valid token MUST be immediately bounced/redirected back to the root route (`/`).
- **Rationale**: Eliminating database infrastructure keeps the architecture lightweight, ultra-fast, cost-free, and deployable on static or edge hosts, while static token protection prevents unauthorized access to invitation distribution tools.

### V. Functional Utilities & High-Fidelity Interaction UX
- **Interactive Countdown Timer**: MUST provide an interactive, drift-free real-time countdown to the wedding ceremony and reception dates, displaying days, hours, minutes, and seconds with graceful expiration and event-day states.
- **Zero-Dependency Copy-to-Clipboard**: Bank account and digital envelope details MUST feature a zero-dependency copy-to-clipboard mechanism with immediate, accessible tactile feedback (e.g., toast notification, tooltip, or visual state transition).
- **Direct Maps Redirection**: Location and venue components MUST offer direct, one-click redirection to Google Maps with validated destination coordinates and place queries.
- **Dynamic WhatsApp URL Builder**: RSVP confirmation and invitation link sharing utilities MUST construct pre-formatted, URL-encoded WhatsApp messages dynamically incorporating guest names, attendance confirmation status, and customized invitation links.
- **Rationale**: Utilities must be dependable, immediate, and zero-friction on mobile devices, where guest interactions (navigating, gifting, RSVPing) occur in real-world contexts.

## Technical Stack & Quality Constraints

- **Frontend Core**: Modern React / Next.js / Vite framework with TypeScript (strict mode enabled).
- **Styling Architecture**: Tailwind CSS or CSS Modules utilizing custom CSS custom properties / tokens for the `#6A1024` maroon, `#D4AF37` gold, and `#FDFBF7` ivory palette.
- **Zero External Database**: All state is client-side, embedded static data, or query-parameter derived.
- **Asset Discipline**: Pure SVG vectors for all floral/botanical elements; no raster portrait photography.
- **Performance & Mobile-First**: Sub-second load time, zero Cumulative Layout Shift (CLS), responsive across 320px–4k breakpoints.
- **Accessibility**: Semantic HTML5, WCAG 2.1 AA color contrast compliance for text on maroon/ivory/gold backgrounds, and accessible keyboard/screen-reader navigation.

## Development Workflow & Quality Gates

- **Gate 1 (TasteSkill Design Audit)**: Every screen and component must be reviewed against TasteSkill tokens, typography scales, optical margins, and color codes before merging.
- **Gate 2 (Asset & Imagery Compliance)**: Automated/manual check verifying that only vector botanical assets are present and zero portrait photos are embedded.
- **Gate 3 (Security & Route Protection)**: Automated verification confirming that `/share` without a valid `token` query parameter redirects immediately to `/`.
- **Gate 4 (Utility Validation)**: Verification of countdown timer precision, zero-dependency copy action with instant feedback, Google Maps navigation links, and dynamic WhatsApp URL creation.

## Governance

- **Supremacy**: This Constitution supersedes all ad-hoc implementation choices and informal discussions.
- **Amendments**: Amendments require a formal version bump, explicit rationale, and a Sync Impact Report verifying alignment across templates and documentation.
- **Versioning Policy**: Semantic versioning (`MAJOR.MINOR.PATCH`):
  - **MAJOR**: Fundamental changes to architecture, removal/redefinition of core principles.
  - **MINOR**: Addition of new principles, structural sections, or material guideline expansions.
  - **PATCH**: Clarifications, wording adjustments, formatting, or non-semantic refinements.
- **Compliance Review**: All feature specifications, implementation plans, task lists, and pull requests MUST verify compliance against these principles.

**Version**: 1.0.0 | **Ratified**: 2026-08-22 | **Last Amended**: 2026-08-22

