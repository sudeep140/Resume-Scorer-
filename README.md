# Markline — Resume Scorer Landing Page

A production-ready SaaS marketing site for a resume-scoring product, built with React, TypeScript, Vite, and Tailwind CSS.

## Design concept

The product scores and marks up a document, so the design leans into that literally: a paper-and-ink palette, a serif/mono type pairing that reads like a printed report, and a signature "ink stamp" score badge overlaid on an annotated resume mockup in the hero.

- **Palette:** cool paper background, ink-navy text, a single vermillion "red pen" accent used for CTAs, links, and the score stamp. Green/amber are reserved as functional colors (pass states, warnings), not decoration.
- **Type:** Fraunces (display serif) for headings, Manrope (sans) for body copy, IBM Plex Mono for scores, labels, and eyebrows.
- **Signature element:** `ScoreStamp` — a rotated rubber-stamp-style score badge — paired with `ResumeMock`, a document mockup with red-pen underlines, a strikethrough, and a margin note.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build      # type-check and build for production
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Folder structure

```
src/
  components/
    ui/              # reusable primitives: Button, Card, Badge, Container,
                      # SectionHeading, AccordionItem
    icons.tsx         # inline SVG icon set (no external icon dependency)
    ScoreStamp.tsx     # signature score badge
    ResumeMock.tsx      # signature annotated-resume illustration
    Navbar.tsx, Hero.tsx, Features.tsx, Pricing.tsx,
    Testimonials.tsx, FAQ.tsx, CTABand.tsx, Footer.tsx
  data/                # typed content for each section (features, pricing,
                      # testimonials, faq) — edit these to change copy
  types/               # shared TypeScript interfaces
  App.tsx               # assembles the page from section components
  main.tsx               # React entry point
  index.css               # Tailwind layers + base styles
tailwind.config.ts        # design tokens: colors, fonts, shadows, keyframes
```

## Editing content

All section copy lives in `src/data/*.ts` as typed arrays — update those files rather than editing JSX directly to change features, pricing tiers, testimonials, or FAQ entries.

## Accessibility

- Visible focus rings via `:focus-visible`
- `prefers-reduced-motion` disables all animation
- Accordion and mobile menu use `aria-expanded`
- Score stamp has an `aria-label` describing the score for screen readers
