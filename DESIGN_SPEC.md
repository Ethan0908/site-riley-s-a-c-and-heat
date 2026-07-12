# Design Spec - Riley's A/C and Heat

## Design Read

Riley's A/C and Heat has thin but useful factual data: Manhattan HVAC positioning, phone number, website, 4.9 Google rating, 42 Google reviews, and a Broadway listing in the notes. There are no supplied photos, logo, services, FAQs, email, or brand colors. The implementation must therefore earn premium quality through art direction, typography, layout, and conversion clarity rather than borrowed photography or invented proof.

Chosen art direction: `neighbourhood-thermal-field-guide`.

The page should feel like a refined Manhattan service dossier: calm, editorial, practical, and phone-first. The visual system should use thermal-line CSS art, gridded building silhouettes, ductwork/airflow linework, and a restrained warm/cool palette. The concept should make the site specific to HVAC in Manhattan without claiming emergency availability, licenses, warranties, years in business, same-day service, or detailed services that are not present in data.

Design dials:

- `DESIGN_VARIANCE`: 8 - premium and custom, with art-directed composition and varied section rhythms.
- `MOTION_INTENSITY`: 3 - mostly static, with subtle hover/focus states and disclosure transitions.
- `VISUAL_DENSITY`: 5 - editorial whitespace, but enough proof/contact density for a service buyer.

## Source Data Rules

- Use `data/business.json` and `data/site-plan.json` as factual source inputs.
- Use phone `(929) 298-9750` for primary conversion.
- Use website `https://rileys-hvac.com/` as a secondary verification path.
- The notes contain `hvac`, `manhattan`, `4.9 rating`, `42 Google reviews`, and `817 Broadway, New York, NY 10003, USA`; these may be displayed as provided facts.
- No email should be rendered because the data has no email.
- No photo, logo, certification, warranty, financing, emergency, 24/7, same-day, insured, licensed, family-owned, or years-in-business claims.
- If service language is needed, keep it broad and factual to HVAC/A/C/heat: cooling, heating, comfort issues, system checks, project coordination, and deciding whether to call. Avoid detailed repair/install promises unless supplied later.

## Colour Scheme

Use the existing warm premium tokens but add HVAC-specific contrast so the site does not become a one-note beige page.

- `--paper`: `#f5f1eb` - warm page base.
- `--paper-warm`: `#efe5d7` - selected editorial bands.
- `--ink`: `#15110d` - primary text.
- `--charcoal`: `#26211c` - high-contrast panels.
- `--muted`: `#6f655b` - support text.
- `--line`: `#d7c9b8` - dividers and technical grid lines.
- `--surface`: `rgba(255,255,255,0.76)` - translucent panels.
- `--white`: `#ffffff` - crisp cards and form/contact panels.
- `--copper`: `#9b5f2b` - primary brand accent from design plan.
- `--copper-dark`: `#5b3318` - CTA hover and dark accent.
- `--cool`: `#2f6f86` - cooling counter-accent for HVAC specificity.
- `--cool-soft`: `#d8edf0` - cool background fills.
- `--heat-soft`: `#f0c98d` - small thermal highlights only.

The dominant read should be warm paper, graphite, copper, and restrained cool blue. Do not use purple gradients, bright SaaS colors, heavy shadows, or random glass effects.

## Typography

Use custom fonts through `next/font/google` in `app/layout.tsx`.

- Display: `Fraunces`, weights 500, 600, 700, variable optical sizing if available. Use for H1, major section headlines, big numerals, and editorial pull statements.
- Body/UI: `Instrument_Sans`, weights 400, 500, 600, 700. Use for body text, navigation, CTAs, panels, and data labels.
- CSS variables: `--font-display` and `--font-body` applied from `next/font`.
- Hero H1 target: about 2-3 lines on desktop at a max width near 980px. Use `clamp(3.6rem, 8vw, 8.4rem)` with careful line-height around 0.9-0.98.
- Body copy: concise, mostly 1-3 sentence blocks, max width around 62ch.
- Avoid raw `system-ui`, Arial, Helvetica, default browser fonts, negative letter spacing, and oversized text inside compact cards.

## Asset And Branding Plan

No supplied photos, logo, or brand colors exist. Do not add unrelated stock photography or hotlink external images.

Create visual richness with CSS-native assets:

- Hero "thermal map" panel: Manhattan-like vertical building grid, airflow arcs, warm/cool split line, and small measurement ticks.
- Small monogram mark: text-based `R` or `R/AH` lockup generated in markup/CSS, not a fake logo image.
- Section divider linework: thin duct/vent motifs, grid coordinates, and temperature-style chips.
- Final CTA panel: high-contrast dark graphite with copper/cool line treatment.

If real public business photos are later added to `business.photos`, place them in a small proof/gallery ribbon or hero side panel only after validating they are supplied in data.

## Page Structure And Sections

Build a complete single-page site with at least 10 meaningful sections including navigation and footer. The implementation should use component functions rather than one long unstructured JSX file.

1. `SiteHeader` - premium sticky navigation with anchors and call CTA.
   - Anchors: `Approach`, `Services`, `Proof`, `Process`, `Contact`.
   - CTA: `Call now` linking to `tel:+19292989750`.
   - Include compact brand lockup and Manhattan context.

2. `Hero` - oversized editorial split canvas.
   - H1 direction: "Manhattan A/C and heat help, without the guesswork."
   - Deck should mention HVAC, Manhattan, and a direct call path.
   - CTA row: primary call button, secondary website button.
   - Distinctive right-side thermal map/contact panel with phone, area, and Google rating.
   - Avoid generic center hero and avoid fake service badges.

3. `CredibilityStrip` - compact proof/positioning band.
   - Four concise factual items: Manhattan HVAC, 4.9 rating, 42 Google reviews, Broadway listing.
   - Use ticker/rail rhythm rather than repeated cards.

4. `BrandThesis` - belief/mission section.
   - Two-column editorial section: "Good HVAC guidance starts with the room, the building, and the caller's priorities."
   - Explain that the page helps people frame the call and get oriented.
   - Do not claim proprietary process or guaranteed outcomes.

5. `ServiceArchitecture` - service/program architecture that is not just cards.
   - Use a horizontal selector or segmented tabs with broad categories:
     - Cooling concerns
     - Heating concerns
     - Comfort diagnostics
     - Manhattan property coordination
   - Each panel gives practical call framing and what information to have ready.
   - The language must stay broad because no explicit service list was supplied.

6. `DecisionGuide` - buyer decision support.
   - Asymmetric bento with no empty holes.
   - Help visitors decide when to call, what to describe, and how to compare options.
   - Include "not stated in data" guardrails in copy by avoiding emergency/same-day claims.

7. `LocalProofPanel` - factual proof and local context.
   - Use the supplied Google rating and review count from notes.
   - Use the Broadway listing as local context.
   - Use a Manhattan grid/map-inspired CSS panel; no external map or stock map.

8. `ProcessStory` - human/process/story section.
   - Sticky left narrative plus right-side timeline.
   - Steps should be factual and generic to contact flow:
     - Call with the issue and location.
     - Describe the system, symptoms, and access details.
     - Discuss the next appropriate service step.
   - Do not promise quote timing, appointment availability, or repair completion.

9. `ExpectationsMatrix` - commitments/principles.
   - Principles can be framed as page expectations, not company claims:
     - Clear problem description before the call.
     - Real contact paths.
     - Manhattan-specific practical details.
     - No unsupported claims on the page.
   - This section makes thin data feel intentional and transparent.

10. `QuestionsAccordion` - useful disclosure interaction.
   - Use safely derived questions:
     - "What should I mention when I call?"
     - "Is there an email address listed?"
     - "Can I use the website instead?"
     - "What service area is shown?"
   - Answers must only use supplied data or conservative call-prep guidance.

11. `FinalContactCta` - high-contrast final conversion section.
   - Primary action: call `(929) 298-9750`.
   - Secondary action: visit `rileys-hvac.com`.
   - Include service area and factual proof in a compact side panel.
   - Should feel designed, not pasted at the bottom.

12. `Footer` - compact footer with anchors, contact links, data transparency note, and site/business name.
   - Include phone and website.
   - Do not add address if implementation cannot safely parse it from notes; if displayed, label it as the Broadway listing from supplied notes.

## Component Order

Suggested `app/page.tsx` component order:

1. data helpers: `phoneHref`, `websiteHref`, `normalizeCity`, `extractNotesFacts`.
2. static arrays for nav items, service lenses, decision guide items, process steps, expectation items, and FAQs.
3. presentational components:
   - `SiteHeader`
   - `ThermalMapPanel`
   - `Hero`
   - `CredibilityStrip`
   - `BrandThesis`
   - `ServiceArchitecture`
   - `DecisionGuide`
   - `LocalProofPanel`
   - `ProcessStory`
   - `ExpectationsMatrix`
   - `QuestionsAccordion`
   - `FinalContactCta`
   - `Footer`
   - `MobileCallBar`
4. default page export composing all components.

Keep all content local and static. No client component is required unless an interaction needs state. Prefer native `<details>` for accordion and radio inputs/CSS for service tabs when possible.

## Interactions

- Header anchors smooth-scroll to page sections with clear focus states.
- Service selector: CSS radio tabs or accessible buttons if a client component is introduced; default to first panel visible.
- FAQ accordion: native `<details>` with styled summary, keyboard accessible.
- Hover states: CTAs shift background/line color, cards/panels adjust border color, no large motion.
- Mobile sticky call bar: fixed bottom action with phone CTA when viewport is small.
- Reduced motion: disable transitions and smooth scroll under `prefers-reduced-motion: reduce`.

## CTA Map

- Header CTA: `Call now` -> `tel:+19292989750`.
- Hero primary: `Call Riley's A/C and Heat` -> `tel:+19292989750`.
- Hero secondary: `Visit website` -> `https://rileys-hvac.com/`.
- Service panel CTA: `Talk through the issue` -> phone.
- Decision guide CTA: `Have these details ready, then call` -> phone.
- Local proof CTA: `Open website` -> website.
- Final CTA primary: `Call (929) 298-9750` -> phone.
- Final CTA secondary: `Visit rileys-hvac.com` -> website.
- Mobile sticky CTA: phone only.

No email CTA because no email is supplied.

## Responsive Behaviour

- Desktop:
  - Max site width around 1180-1240px.
  - Hero uses asymmetric grid: wide editorial text and right-side thermal/contact panel.
  - Sticky header with compact CTA.
  - Process section uses sticky left narrative and scrolling right timeline.
  - Service architecture can use horizontal tabs with a two-column active panel.

- Tablet:
  - Hero becomes stacked but keeps the thermal panel visually prominent.
  - Credibility strip wraps into two rows.
  - Bento grids become two columns.
  - Header nav reduces spacing; CTA remains visible.

- Mobile:
  - Use single-column composition with deliberate section spacing, not squeezed desktop.
  - Hide dense nav links behind a simple anchor row or wrap them cleanly.
  - Hero H1 uses `clamp()` and remains readable in 3-5 lines.
  - Thermal panel appears below hero text with stable aspect ratio.
  - Service tabs stack into full-width segmented controls.
  - Sticky mobile call bar reserves bottom padding so it does not cover footer/CTA content.
  - Ensure `overflow-x: hidden`, stable min widths, and no horizontal scrolling.

## Stage Plan For Implementation

1. Foundation pass:
   - Update `app/layout.tsx` for metadata and `next/font/google` classes.
   - Replace scaffold CSS with design tokens, reset, typography, layout utilities, focus states, and reduced-motion handling.

2. Full composition pass:
   - Rewrite `app/page.tsx` from a blank canvas with the component order above.
   - Build all 12 sections with factual data and CSS-art assets.

3. Interaction pass:
   - Add native details accordion, service selector, header anchors, and mobile sticky call bar.
   - Keep interactions accessible and static-build friendly.

4. Visual polish pass:
   - Check hierarchy, spacing rhythm, CTA contrast, mobile collapse, and section variety.
   - Remove any generic card-stack or placeholder phrasing.

5. QA pass:
   - Run `npm run build`.
   - Inspect desktop and mobile if browser tooling is available.
   - Check no unsupported claims, no stock images, no missing contact paths, no horizontal overflow.

## QA Risks

- Thin data may tempt invented service claims. Keep all service language broad and call-prep oriented.
- Notes contain address/rating/review facts in a single string. If parsing is brittle, display them as conservative proof items or omit address rather than misstate it.
- No photos means the CSS-art must be strong enough; avoid weak decorative filler.
- Warm palette can become monotone. Use graphite and cool blue intentionally.
- Header and mobile sticky CTA can overlap content; reserve bottom spacing and test small viewports.
- Service tabs must remain accessible if implemented without JavaScript.
- Google font loading can fail in restricted environments; still define a sensible fallback after the custom font variables, but do not rely on browser defaults as the visual identity.

## Deletion Plan For Later Build

When implementation starts, treat starter `app/page.tsx` and `app/globals.css` as disposable. Remove centered generic hero structures, repeated default cards, scaffold labels, placeholder copy, weak generic headings, cheap shadows, and any layout that could fit any business by only changing the name.

## Visual Director Check

Before final handoff after implementation, reject the build unless all are true:

- First viewport is clearly art-directed around Manhattan HVAC and thermal linework.
- There are at least 9 meaningful sections plus footer.
- Custom fonts are loaded through `next/font/google`.
- The site has real anchor navigation and phone/website CTAs.
- Mobile layout is intentionally designed and has a sticky call action.
- No fake claims, stock images, or unsupported proof appear.
- The section rhythms vary across hero, strip, editorial split, service selector, bento, sticky process, accordion, and final CTA.
