# Portfolio Project — Development Guidelines

## Frontend Architecture: Feature-based + Layered Architecture

### Directory Structure

```
src/
├── app/                        # Next.js App Router (thin routing layer only)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── software/
│   ├── uiux/
│   └── contact/
│
├── features/                   # Feature-based modules
│   ├── home/
│   │   ├── ui/                 # UI layer: React components
│   │   ├── model/              # Logic layer: custom hooks
│   │   └── data/               # Data layer: content, constants
│   ├── software/
│   │   ├── ui/
│   │   ├── model/
│   │   ├── data/
│   │   └── types/
│   ├── uiux/
│   │   ├── ui/
│   │   ├── model/
│   │   ├── data/
│   │   └── types/
│   └── contact/
│       ├── ui/
│       ├── model/
│       ├── data/
│       └── types/
│
└── shared/                     # Truly cross-feature shared code
    ├── ui/                     # Header, Footer, LanguageSwitcher, etc.
    ├── data/                   # siteConfig, constants, particles
    ├── hooks/
    ├── types/
    └── utils/
```

### Layer Responsibilities

| Layer | Directory | Responsibility |
|-------|-----------|----------------|
| UI | `ui/` | React components (presentational + container) |
| Logic | `model/` | Custom hooks, state management, side effects |
| Data | `data/` | Content objects, API data, constants |
| Types | `types/` | TypeScript interfaces and type definitions |

### Rules

- **`app/` is a thin routing layer only.** Pages import from `features/` and compose layouts. No business logic or inline content in page files.
- **Features are self-contained.** A feature owns its own ui, model, data, and types. Cross-feature imports are not allowed; use `shared/` instead.
- **`shared/` is for truly reusable code** used by 2+ features. Do not pre-emptively move things there.
- **Each layer has a barrel export** (`index.ts`) so imports are clean: `import { HeroSection } from '@/features/software/ui'`.
- **Import direction:** `app` → `features` → `shared`. Never import upward.

---

## Semantic HTML

Always use semantic HTML elements instead of generic `<div>` wrappers.

### Required Elements

| Context | Use |
|---------|-----|
| Page-level navigation | `<header>`, `<nav>`, `<footer>` |
| Main content area | `<main>` |
| Thematic sections | `<section aria-labelledby="...">` |
| Self-contained content | `<article>` |
| Complementary content | `<aside>` |
| Skill/project lists | `<ul>` + `<li>` |
| Key-value pairs (skills, metadata) | `<dl>` + `<dt>` + `<dd>` |
| Images with captions | `<figure>` + `<figcaption>` |
| Dates and times | `<time datetime="...">` |
| Contact information | `<address>` |
| Buttons (actions) | `<button type="button">` |
| Navigation links | `<a>` |

### Examples

```tsx
// Page structure
<body>
  <header>
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main>
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">...</h1>
    </section>
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Featured Projects</h2>
      <ul>
        <li><article>...</article></li>
      </ul>
    </section>
  </main>
  <footer>...</footer>
</body>

// Experience timeline
<section aria-labelledby="experience-heading">
  <h2 id="experience-heading">Experience</h2>
  <ol>
    <li>
      <article>
        <h3>Job Title</h3>
        <p><time datetime="2022-04">April 2022</time> – Present</p>
      </article>
    </li>
  </ol>
</section>

// Skills list
<section aria-labelledby="skills-heading">
  <h2 id="skills-heading">Skills</h2>
  <ul>
    <li>AWS</li>
    <li>Python</li>
  </ul>
</section>

// Contact info
<address>
  <a href="mailto:kento@example.com">kento@example.com</a>
</address>
```

### Heading Hierarchy

- `<h1>`: One per page, the primary page title
- `<h2>`: Major sections (Hero, Experience, Projects, Skills, Contact)
- `<h3>`: Items within a section (individual project titles, job titles)
- `<h4>` and below: Sub-items only when genuinely needed

---

## Import Path Aliases

```ts
'@/features/software/ui'    // software UI components
'@/features/software/model' // software hooks
'@/features/software/data'  // software content
'@/features/uiux/ui'
'@/features/contact/ui'
'@/shared/ui'               // Header, Footer, LanguageSwitcher
'@/shared/data'             // siteConfig, constants
'@/shared/utils'
```
