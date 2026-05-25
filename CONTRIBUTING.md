# Contributing to prepcli.in

The website for [prepcli](https://github.com/prepcli/prepcli) — built with Next.js 15 and deployed to Cloudflare Pages as a static export.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verify static export builds cleanly
npm run lint    # ESLint check
```

## Project structure

```
app/
  page.tsx            ← Landing page — imports section components only
  docs/page.tsx       ← Documentation page
  layout.tsx          ← Root layout, metadata, global providers
  globals.css         ← Theme tokens, base styles, keyframes
components/
  sections/           ← One file per landing page section
  docs/               ← Shared prose components used in docs/page.tsx
  HeroSection.tsx     ← Hero (client — GSAP + Framer Motion)
  HeroTerminal.tsx    ← Animated terminal demo (client)
  AnimateIn.tsx       ← Scroll-triggered animation wrapper (client)
  LiveBlock.tsx       ← Animated code block (client)
  CopyCommand.tsx     ← Copy-to-clipboard install command (client)
  MagneticButton.tsx  ← Mouse-tracking magnetic button (client)
  CustomCursor.tsx    ← Custom pointer overlay (client)
  FloatingParticles.tsx ← Pure-CSS ambient particles (server-safe)
  Nav.tsx             ← Sticky navigation (client — uses usePathname)
  Footer.tsx          ← Footer links
  Grain.tsx           ← Film grain overlay
  SmoothScroll.tsx    ← Lenis smooth scroll init (client)
lib/
  content.ts          ← All page copy and data arrays
types/
  index.ts            ← Shared TypeScript interfaces
```

## Code style

- **Formatter**: Prettier (`.prettierrc` at repo root). Run `npx prettier --write .` before committing.
- **Linter**: ESLint with Next.js rules. Run `npm run lint` before committing.
- **Styling**: Tailwind CSS for layout and typography. Inline `style={}` only for dynamic values (`clamp()`, CSS variable references, Framer Motion `style` props).
- **Animations**: Framer Motion for DOM transitions. CSS keyframes for non-interactive effects (grain, particles, grid).
- **`'use client'`**: Add only when the component uses hooks, browser APIs, or event handlers. Server components are the default.

## Adding content

All page copy lives in `lib/content.ts`. Edit data there — no need to touch component files for copy changes.

## Pull requests

1. Keep PRs focused — one concern per PR.
2. Run `npm run build` before opening a PR. The CI check must pass.
3. No new animation libraries. The current stack (Framer Motion + Lenis) is intentional.
4. All new components should be server components unless they genuinely require client features.

## Design tokens

Defined in `app/globals.css` as CSS custom properties:

| Token              | Value     | Use                        |
|--------------------|-----------|----------------------------|
| `--color-bg`       | `#0a0a0a` | Page background            |
| `--color-surface`  | `#141414` | Card / panel backgrounds   |
| `--color-edge`     | `#242424` | All borders                |
| `--color-fg`       | `#f0f0f0` | Primary text               |
| `--color-muted`    | `#b8b8b8` | Secondary text             |
| `--color-subtle`   | `#787878` | Tertiary / meta text       |
| `--color-dim`      | `#484848` | Disabled / decorative text |
