# Café Athena – Greek & Mediterranean Restaurant (Pacific Beach, San Diego)

A high-converting, aesthetically rich web experience for Café Athena, Pacific Beach's 35-year family-owned Greek culinary institution. Combines a parallax hero and warm rustic Mediterranean visual identity with deep AI Search Engine Optimization (AISEO/GEO), rich JSON-LD structured data, instant menu filtering, and an interactive reservation engine.

> [!IMPORTANT]
> **User Clarifications & Confirmed Design Choices (Phase 1):**
> - **Navigation Architecture**: Seamless single-page architecture with smooth section scrolling, sticky navigational bar, and instant modal overlays for deep exploration.
> - **Aesthetic & Color Direction**: Warm rustic Mediterranean—natural sunbaked sandstone (`#FAF7F2` canvas, `#F4EFE6` surfaces), rich olive grove green (`#3D5A40` / `#2D4230`), deep Aegean navy anchor (`#1B3044`), warm terracotta/clay accents (`#C86446`), and crisp editorial typography.
> - **Table Reservation System**: Fully interactive on-site table booking modal with instant confirmation, seating preference, dietary safety flags, and separate dedicated workflow for large parties (10+ guests).

---

### 1. Overview & Core Concept

- **What It Does**: Delivers an immersive digital experience for diners discovering and booking at Café Athena on Garnet Avenue in Pacific Beach, San Diego. Solves critical local AI-search blind spots (ChatGPT Search, Perplexity, Google Gemini) through crawlable HTML markup, detailed nutritional/dietary tags, constraint-led pricing transparency ($25/person dinner combinations, mezze under $15), and schema-grounded facts.
- **Target Audience / Persona**: Health-conscious social diners (aged 25–40), local PB/Mission Beach/La Jolla residents, coastal travelers, large social gatherings, and casual happy hour patrons.
- **Key Value**: Frictionless conversion from search discovery to confirmed table reservation or takeout order, celebrating 35+ years of authentic multi-generational Greek family hospitality.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Discovery & Immediate Booking**: Visitor lands on cinematic parallax hero with golden Mediterranean lighting, views trust markers ("35+ Years Local Heritage", "Fresh Greek & Mediterranean", "Dine-In • Patio • Takeout"), and interacts with the Quick Booking Bar (Party Size $\to$ Date $\to$ Time Slot $\to$ Instant Reservation Modal).
2. **Constraint-Led Menu Exploration**: Diners switch between curated tabs (*Signature Mezze*, *Entrees & Souvlaki*, *Plant-Based & Vegan*, *Gluten-Free Specialties*, *Desserts & Wine*) and apply live budget/dietary filters (e.g., *Under $20*, *Vegan*, *Gluten-Free*). Each item features rich culinary storytelling, exact ingredients, and pricing.
3. **Happy Hour & Budget Dining Discovery**: Dedicated showcase highlighting Tuesday–Sunday 4:00 PM – 6:00 PM small plates under $12, craft cocktails, Greek wines by the glass, and shareable mezze platters for groups.
4. **Group Dining & Celebration Bookings (10+ Guests)**: Step-by-step inquiry modal with custom prix-fixe family-style menu selection, patio buyout requests, and celebration notes (birthdays, rehearsals, anniversaries).
5. **Conversational AI / FAQ Accordion**: Direct answers to high-intent queries (parking on Garnet Ave, $25 dinner for 4, vegan/GF kitchen protocols, group policies).

#### Visual Identity & Design System
- **Aesthetic Direction**: Warm rustic coastal Mediterranean with modern editorial polish. Subtle Greek geometric key motifs, warm sandstone cards, soft hairline dividers, and organic olive leaf accents.
- **Color Palette (60-30-10 Discipline)**:
  - *60% Dominant Neutral Canvas*: Sunbaked Sandstone & Alabaster (`#FBF9F5`, `#F5EFEB`).
  - *30% Structural Surfaces & Typography*: Deep Aegean Navy (`#1B3044`) for high-contrast headers, Olive Grove Green (`#354E38`) for dietary tags & secondary surfaces, Warm Muted Charcoal (`#2C3539`) for body text.
  - *10% Accent Budget*: Sun-drenched Terracotta Clay (`#C86446`, hover `#B05439`) concentrated strictly on high-intent CTAs (Book Table, Submit Reservation).
- **Typography Hierarchy**:
  - *Display / Headings*: Elegant Serif pairing (`Cinzel` / `Playfair Display`) for editorial prestige and Mediterranean heritage.
  - *Body / Interface*: Clean geometric Sans-Serif (`Plus Jakarta Sans`) for maximum legibility on mobile and desktop.
  - *Numerals & Pricing*: Tabular figures (`font-mono tabular-nums`) ensuring vertical baseline alignment across menu cards and receipts.
- **Parallax Motion & Smooth Scrolling**:
  - CSS/Motion-driven subtle parallax layer depth in the Hero section responding smoothly to scroll.
  - Fluid scroll-snapping anchor links with offset compensation for the sticky top navigation.
  - Subtle interactive micro-interactions ($\le 150\text{ms}$) on cards, filter pills, and reservation slot chips.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Single-Page Architecture with Modal Overlays vs. Multi-Page Routing**
  - *Chosen Approach*: Unified single-page experience with smooth section scrolling (`#menu`, `#about`, `#happy-hour`, `#large-groups`, `#faq`, `#contact`) augmented by modal drawers for deep reservation bookings and dish ingredient modals.
  - *Why*: Eliminates route-loading latency, keeps the user's booking intent in immediate view, and ensures crawlers can index every single dish, policy, and FAQ in one single crawl pass without client-side routing delays.
- **Decision 2: Comprehensive On-Site Reservation & Group Booking Engine**
  - *Chosen Approach*: Built-in stateful booking engine with real-time slot selection, SMS/email reminder simulation, party size management, dietary notes, and direct instant confirmation code generation. Also includes direct phone and address fallbacks.
  - *Why*: Zero drop-off to third-party portals, instant feedback, and specialized handling for large parties (10+) which usually fail on automated table engines.
- **Decision 3: AISEO / GEO Semantic Architecture & Complete JSON-LD Schema**
  - *Chosen Approach*: Inject comprehensive JSON-LD graphs in `<head>` covering `Restaurant`, `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `Menu`, `MenuItem`, and `FAQPage`.
  - *Why*: Maximizes AI search engine synthesis (ChatGPT Search, Perplexity, Gemini AI Overviews) while strictly matching NAP consistency (Name, Address, Phone) on Garnet Ave in Pacific Beach.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Café Athena Application                         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Global Navigation & Top Bar (Hours, Address, Call CTA, Nav Links)   │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Parallax Hero Section (Cinematic Backdrop, Value Prop, Quick Book)   │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Constraint-Led Feature Highlights (Under $25 Dinners, Vegan, Patio) │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Full Crawlable HTML Menu & Dietary Filter System (Tabs & Search)   │
├────────────────────────────────────────────────────────────────────────┤
│ 5. 35-Year Heritage & Culinary Story (Family origins, olive oil, PB)  │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Happy Hour & Patio Social Dining Module (Tue-Sun 4-6pm specials)    │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Large Party (10+) & Private Banquet Planning Experience             │
├────────────────────────────────────────────────────────────────────────┤
│ 8. Conversational AI-Optimized FAQ Accordion (6 Core Discovery Queries)│
├────────────────────────────────────────────────────────────────────────┤
│ 9. Pacific Beach Location, Map, Parking & Footer NAP Info              │
├────────────────────────────────────────────────────────────────────────┤
│ 10. Interactive Reservation Modal & Group Event Request Modal          │
└────────────────────────────────────────────────────────────────────────┘
```

#### Core Data Entities
- **MenuItem**: `id`, `name`, `greekName`, `category`, `price`, `description`, `dietary` (`vegan`, `vegetarian`, `glutenFree`), `isSignature`, `isUnder20`, `calories`, `allergens`.
- **ReservationState**: `step`, `partySize`, `date`, `timeSlot`, `seatingArea` (Indoor / Garden Patio / High Top), `guestName`, `email`, `phone`, `specialRequests`, `confirmationId`.
- **GroupDiningRequest**: `fullName`, `email`, `phone`, `company`, `estimatedGuests` (10-80), `targetDate`, `timeOfDay`, `eventStyle` (Family-Style Greek Banquet / Cocktail Reception / Seated Prix-Fixe), `budgetTier`, `message`.
- **FAQItem**: `question`, `answer`, `aiKeywords` (optimized for Perplexity & Google Search snippets).

---

### 5. Verification & Quality Gates
1. **Compilation**: Verify build with `compile_applet` and check types.
2. **SEO & Structured Data Check**: Validate JSON-LD syntax against Schema.org standards for `Restaurant`, `Menu`, and `FAQPage`.
3. **Responsive UI & Touch Targets**: Test on mobile (375px), tablet (768px), and desktop (1440px). Ensure buttons have $\ge 44\text{px}$ touch targets.
4. **Interactive Handlers**: Ensure all filter tabs, reservation steps, modal open/close actions, and group forms function flawlessly without errors or broken links.
