# Portfolio Design Guidelines — New Build

**Owner:** Kento Yokozuka (横塚 健人)  
**Version:** 2.0 — New Build  
**Last Updated:** 2026-04-14

---

## 1. Concept & Design Direction

### "Signal / Noise"

Kento stands at the intersection of two disciplines that rarely coexist: infrastructure engineering at cloud scale and human-centered UX design. The portfolio must feel like it was built by someone who thinks in systems — precise, intentional, nothing wasted — but also someone who thinks in experiences, with warmth and care in every detail.

The design concept is **Signal / Noise**: the idea that great engineering (and great design) is about surfacing what matters and eliminating everything else. The visual language is spare and architectural. Typography does the heavy lifting. Color is used like a scalpel, not a brush. Motion is precise and purposeful — no ambient particle fields, no floating orbs. When something moves, it means something.

**The one thing visitors will remember:** Large, confident typography on vast negative space, punctuated by a single warm accent color that appears only where it truly matters.

---

## 2. Aesthetic Direction

### Mood
Refined editorial. Think: *Pentagram portfolio*, *Swiss grid poster*, *Japanese architectural journal*. Clean to the point of tension, then released by moments of warmth.

### Theme
**Light base, dark type.** Single dark-on-light theme. No dark mode per-page switching. Consistency across pages is part of the identity.

### Personality Keywords
`Precise` · `Minimal` · `Confident` · `Warm` · `Human`

---

## 3. Color System

The palette uses near-neutrals with a single expressive accent. Discipline: if you're considering adding a second accent color, don't.

### Core Palette

```
--color-bg:         #F7F5F0   /* Warm off-white — page background */
--color-surface:    #EFEDE7   /* Slightly darker warm white — cards, surfaces */
--color-border:     #E2DED6   /* Subtle warm gray — dividers, borders */
--color-text:       #1A1917   /* Near-black with warmth — primary text */
--color-text-muted: #706C65   /* Warm medium gray — secondary text */
--color-accent:     #C8552A   /* Terracotta — the only color */
--color-accent-dim: #C8552A1A /* Accent at 10% opacity — hover fills */
```

### Usage Rules

| Token | Used For |
|-------|----------|
| `--color-bg` | Page background only |
| `--color-surface` | Cards, code blocks, tag backgrounds |
| `--color-border` | All borders and dividers |
| `--color-text` | Headings, body text, labels |
| `--color-text-muted` | Metadata, timestamps, secondary labels |
| `--color-accent` | Links, active states, underlines, one call-to-action per page |
| `--color-accent-dim` | Hover fills on interactive elements |

### What the Accent Touches

The terracotta accent (`#C8552A`) appears on:
- Inline links (underline color)
- Active navigation indicator
- The primary CTA button on each page
- Section number labels (`01`, `02`, …)
- Tag/badge borders on hover

It does **not** appear on:
- Backgrounds (no gradient fills)
- Decorative shapes
- Multiple elements on the same component

### Grays for Code & Technical Content

For code blocks and terminal content in the Software section, use a near-black surface:

```
--color-code-bg:   #1E1C19
--color-code-text: #E8E4DC
--color-code-dim:  #706C65
```

---

## 4. Typography

Typography is the primary visual element. Two typefaces only — no exceptions.

### Typefaces

| Role | Font | Source | CSS Variable |
|------|------|---------|--------------|
| Display / Headings | **Cormorant Garamond** | Google Fonts | `--font-display` |
| Body / UI | **DM Sans** | Google Fonts | `--font-body` |

```ts
// next/font/google
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})
```

**Why Cormorant Garamond:** It reads as both literary and precise — a serif that feels architectural rather than decorative. Its italic cut is expressive enough for pull quotes. It visually elevates the engineering/design duality.

**Why DM Sans:** Clean, neutral, excellent legibility at small sizes, works perfectly with Japanese system fonts as a fallback context. Not a default font anywhere.

### Type Scale

All sizes use `clamp()` for fluid scaling between mobile and desktop.

```css
--text-xs:    0.75rem                          /* 12px — metadata, timestamps */
--text-sm:    0.875rem                         /* 14px — labels, tags */
--text-base:  1rem                             /* 16px — body */
--text-lg:    1.125rem                         /* 18px — lead text */
--text-xl:    1.25rem                          /* 20px — card titles (body font) */
--text-2xl:   clamp(1.5rem, 3vw, 2rem)        /* section subheadings */
--text-3xl:   clamp(2rem, 4vw, 3rem)          /* section headings */
--text-hero:  clamp(3.5rem, 8vw, 7rem)        /* hero / page title */
--text-jumbo: clamp(5rem, 12vw, 10rem)        /* decorative section numbers */
```

### Typographic Rules

**Headings use Cormorant Garamond.** Always. At large sizes (h1, hero), use `font-weight: 300` — light weight with high contrast reads as confident restraint. At h2–h3, use `font-weight: 500`.

**Body uses DM Sans.** At `font-weight: 400` for prose, `500` for UI labels.

**Italic is expressive.** Use Cormorant's italic for pull quotes, taglines, and the hero subtitle. Do not italicize body copy.

**No all-caps headings.** Sentence case only. All-caps feels generic.

**Line height:**
```
Display text:  line-height: 0.95  (tight — creates tension at large sizes)
Body text:     line-height: 1.7   (generous — supports long reads)
UI labels:     line-height: 1.3
```

**Letter spacing:**
```
Display text:  letter-spacing: -0.02em  (tighten at large sizes)
Body text:     letter-spacing: 0        (no adjustment)
Uppercase tags: letter-spacing: 0.08em  (only for 2–3 character codes/labels)
```

### Section Numbering

Each major section is prefixed with a large decorative number in the accent color:

```tsx
<span className="font-display text-jumbo font-light text-accent/20 select-none absolute -top-4 -left-2">
  01
</span>
```

This creates depth and a sense of intentional layout architecture.

---

## 5. Layout & Spacing

### Philosophy
**More space than you think you need.** Then add more. Negative space is not wasted space — it creates visual weight for the elements that remain.

### Grid

A 12-column grid with generous gutters. The grid is the scaffold; it's also allowed to break.

```css
--grid-cols:    12
--grid-gutter:  clamp(1rem, 3vw, 2rem)
--grid-margin:  clamp(1.5rem, 5vw, 6rem)
--max-width:    1280px
```

Common column spans:

```
Full width content     : 12 cols
Prose / text content   : 7 cols (left-aligned, not centered)
Sidebar / metadata     : 3 cols (offset right)
Cards (3-up)           : 4 cols each
Cards (2-up)           : 6 cols each
Hero heading           : 10 cols
```

**No centered text blocks for prose.** Left-align all body copy. Center only applies to isolated typographic moments (section numbers, standalone pull quotes).

### Spacing Scale

Based on an 8px base unit:

```css
--space-1:   0.25rem   /*  4px */
--space-2:   0.5rem    /*  8px */
--space-3:   0.75rem   /* 12px */
--space-4:   1rem      /* 16px */
--space-6:   1.5rem    /* 24px */
--space-8:   2rem      /* 32px */
--space-12:  3rem      /* 48px */
--space-16:  4rem      /* 64px */
--space-24:  6rem      /* 96px */
--space-32:  8rem      /* 128px */
--space-40:  10rem     /* 160px */
```

Sections are separated by `--space-32` to `--space-40`. Cards use `--space-8` internal padding.

### Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Small desktop */
xl:  1280px  /* Standard desktop */
```

---

## 6. Components

### Cards

No glass morphism. Cards use the slightly warm surface color with a clean border.

```tsx
<article className="bg-surface border border-border p-8 group hover:border-accent/40 transition-colors duration-300">
```

No border-radius, or use `rounded-none` explicitly. The square corners reinforce the architectural, grid-based aesthetic.

On hover: the border shifts toward accent at 40% opacity. No translate, no shadow lift. The change is subtle and precise.

### Buttons

**Primary (accent fill):**
```tsx
<button className="bg-accent text-white font-body font-medium px-8 py-3 text-sm tracking-wide hover:bg-accent/90 transition-colors duration-200">
  Get in touch
</button>
```

**Secondary (outline):**
```tsx
<button className="border border-text text-text font-body font-medium px-8 py-3 text-sm tracking-wide hover:bg-accent-dim hover:border-accent hover:text-accent transition-all duration-200">
  View work
</button>
```

No rounded corners on primary actions. `rounded-none` or no radius class.

### Navigation

The header is minimal and fixed:

```
Left:  Kento Yokozuka (text mark, font-display italic, text-base)
Right: Software · UI/UX · Contact  (font-body text-sm, text-muted)
```

Active link: accent-colored bottom border, 1px, full width.  
Hover: text color shifts to text (from muted), 200ms.  
No background, no blur, no shadow. The header is transparent over the page background.

### Tags & Badges

```tsx
<span className="font-body text-xs border border-border px-3 py-1 text-text-muted">
  AWS
</span>
```

No color fills. Border only. On hover, border shifts to accent. Technology tags in the Software section use monospace for the label text.

### Dividers

A single 1px line in `--color-border`. No gradient fades.

```tsx
<hr className="border-0 border-t border-border" />
```

### Code Blocks

Used in the Software section to show technical depth:

```tsx
<pre className="bg-code-bg text-code-text font-mono text-sm p-6 overflow-x-auto">
  <code>{snippet}</code>
</pre>
```

Syntax highlighting uses two colors only: `text-code-text` (default) and `text-accent` (keywords/strings). No rainbow syntax highlighting.

---

## 7. Animation & Motion

Motion is rare, which makes it meaningful. The rule: **one animation per interaction, one interaction per component.**

### Principles

- **No ambient loops.** Nothing animates continuously on the idle page (no floating particles, no rotating rings, no pulsing orbs).
- **Entrance only.** Elements animate in once when they enter the viewport. They do not animate out.
- **Linear progress.** Use `ease-out` for enters, `ease-in-out` for state changes.
- **Durations:** 200ms (micro), 400ms (transitions), 600ms (reveals).

### Entrance Animation

A simple fade + slight upward translate. Applied to sections via Intersection Observer:

```css
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: revealUp 0.6s ease-out both;
}
```

Stagger children with `animation-delay`: `0.1s` increments, max 5 items (0.4s total).

### Line Draw Animation

For the horizontal dividers under section headings:

```css
@keyframes lineGrow {
  from { width: 0; }
  to   { width: 100%; }
}
```

A 40px line grows left to right over 400ms when the section enters view. Single use per section.

### Hover Effects

```
Links:      Underline color transitions to accent (200ms)
Cards:      Border color transitions to accent/40 (300ms)
Buttons:    Background lightens by 10% (200ms)
Nav items:  Color transitions from muted to text (200ms)
```

No translate-y on hover. No box-shadow changes. No scale transforms.

### Custom Cursor

A small, refined custom cursor to signal that this is a crafted experience:

```tsx
/* Outer ring: 24px, border 1px accent, no fill, mix-blend-mode: multiply */
/* Inner dot: 4px, fill accent */
/* Lag: outer ring follows with 80ms delay for soft tracking */
```

The cursor ring inverts to white + border on dark surfaces (code blocks).

---

## 8. Page Structure & Sections

### Home (`/`)

```
[Header — fixed, transparent]

[Hero]
  Large section number: "00" in accent/15
  Name: Cormorant Garamond light, --text-hero
  Tagline (italic): "Software Engineer & UI/UX Designer"
  Two-line intro: DM Sans, text-lg, text-muted, max-w-prose
  CTA pair: "View Software Work" (primary) + "View Design Work" (secondary)

[About — 2 col: text left, timeline right]
  Short bio paragraph
  Key numbers: 8+ years, N projects, 2 disciplines

[Featured Work — card grid, 2-up]
  2 cards: one software, one design project
  Each: image (monochrome treatment), title, category tag, brief description

[Contact CTA — full-width, sparse]
  One line, one button
```

### Software (`/software`)

```
[Hero]
  Section marker: "Software Engineering"
  Heading: one strong statement ("Cloud infrastructure at scale.")
  Skills bar: horizontal scrolling chip list

[Experience — timeline, left-bordered]
  Each role: company, title, dates, 2–3 bullet metrics
  Expandable for full detail

[Projects — 3-up card grid]
  Each: name, tech tags, one-line description, case study link

[Technical Skills — grouped, dl/dt/dd]
  Cloud · Languages · Frameworks · Tools
```

### UI/UX (`/uiux`)

```
[Hero]
  Section marker: "UI/UX Design"
  Heading: "Design rooted in research."
  Philosophy line (italic): brief statement on user-centered approach

[Process — 4 steps, horizontal on desktop]
  Research → Define → Design → Test
  One sentence per step

[Projects — 2-up cards with large images]
  Each case study gets more visual space than software cards

[Education]
  CICCC program details, brief
```

### Contact (`/contact`)

```
[Single centered section]
  Section number: "04"
  Heading: "Let's work together."
  Email as large styled link (accent color)
  Social links: GitHub · LinkedIn (icon + text, small)
```

---

## 9. Imagery & Media

### Photography Treatment

All photos use a subtle desaturation treatment: `filter: saturate(0.85) contrast(1.05)`. This unifies images across the portfolio regardless of their original color tone.

Project screenshots/mockups are shown in a device frame or flat with a `--color-surface` background and `--color-border` border. No drop shadows under images.

### Aspect Ratios

```
Hero project image:  16/9
Card thumbnail:      3/2
Profile photo:       1/1 (circle crop, used sparingly)
```

### Placeholder

Before images load, use a `--color-surface` background with a subtle pulse animation.

---

## 10. Bilingual Support (EN/JP)

### Language Toggle

Small toggle in the header, right side: `EN | JP`  
Active language: `text-text font-medium`  
Inactive: `text-text-muted`  
Separator: `text-border`

### Japanese Typography

When displaying Japanese text, append these to the font stack:
```css
font-family: var(--font-body), 'Hiragino Sans', 'Yu Gothic', sans-serif;
```

Japanese body text uses `line-height: 1.9` (slightly more generous than English).  
Japanese display text at `--text-hero` and larger uses `letter-spacing: 0.05em` for legibility.

Cormorant Garamond does not have Japanese glyphs. For Japanese headings, use the system Mincho font as the display fallback:
```css
font-family: var(--font-display), 'Hiragino Mincho ProN', 'Yu Mincho', serif;
```

---

## 11. Anti-Patterns

The following are explicitly prohibited in this build:

| Pattern | Why |
|---------|-----|
| Gradient backgrounds | Too expected; we use color through typography and accent only |
| Glass morphism / backdrop-blur cards | Overused; our cards use solid surfaces |
| Floating particles or ambient loops | Creates noise, not signal |
| Multiple accent colors | Dilutes the accent's impact; terracotta only |
| Purple/blue gradient on white | Cliché AI-era portfolio aesthetic |
| Large colored icon grids | Visual clutter; we prefer text-based skill lists |
| Rounded pill buttons | Use square corners for architectural consistency |
| Centered body text columns | Left-align all prose; centered text is for headings only |
| Inter, Roboto, Space Grotesk | Generic; we use Cormorant + DM Sans |
| Emoji in UI | Out of tone for this aesthetic |
| Hover scale transforms | Too playful; we use color/border transitions only |

---

## 12. Accessibility

- **Contrast ratios:** `--color-text` on `--color-bg` is at minimum 7:1. `--color-accent` on `--color-bg` is at minimum 4.5:1. Verify both with a contrast checker before shipping.
- **Motion:** All animations respect `prefers-reduced-motion`. Wrap `@keyframes` declarations inside `@media (prefers-reduced-motion: no-preference)`.
- **Focus styles:** Visible focus ring using `outline: 2px solid var(--color-accent)` with `outline-offset: 3px`. Never `outline: none` without a replacement.
- **Semantic HTML:** Per CLAUDE.md — one `<h1>` per page, `<section aria-labelledby>`, `<article>` for cards, `<time>` for dates, `<address>` for contact.
- **Images:** All `<img>` / `<Image>` elements have meaningful `alt` text. Decorative images use `alt=""`.

---

## 13. Implementation Notes

### CSS Architecture

Custom properties live in `:root` in `globals.css`. Tailwind is used for layout utilities only (grid, flex, spacing). Typography and color classes map to CSS custom properties via a thin config layer.

```css
/* globals.css */
:root {
  --color-bg: #F7F5F0;
  --color-surface: #EFEDE7;
  --color-border: #E2DED6;
  --color-text: #1A1917;
  --color-text-muted: #706C65;
  --color-accent: #C8552A;
  --color-accent-dim: rgb(200 85 42 / 0.1);
  --color-code-bg: #1E1C19;
  --color-code-text: #E8E4DC;

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'DM Sans', sans-serif;
}
```

### File Structure

Follows the feature-based + layered architecture defined in CLAUDE.md:
```
src/features/home/
src/features/software/
src/features/uiux/
src/features/contact/
src/shared/ui/        ← Header, Footer, LanguageSwitcher, CustomCursor
src/shared/data/      ← siteConfig, design tokens as JS constants
```

### Performance

- Fonts loaded via `next/font/google` (automatic subset + preload)
- Images use `next/image` with proper `sizes` attributes
- No animation libraries — CSS-only motion
- No UI component libraries — all components hand-built
