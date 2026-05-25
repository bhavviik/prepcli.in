# prepcli.in

Website for [prepcli](https://github.com/prepcli/prepcli) — persistent AI collaboration layer.

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v3
- Framer Motion — scroll and entrance animations
- Lenis — smooth scroll
- Deployed to Cloudflare Pages

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # builds to out/
npm run lint      # ESLint check
```

## Deploy to Cloudflare Pages

### Via Dashboard

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create a project → Connect to Git
3. Set:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Add custom domain: `prepcli.in`

### Via Wrangler CLI

Requires a Cloudflare account. Authenticate first, then deploy:

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy out --project-name prepcli-in
```

> Replace `prepcli-in` with your own Cloudflare Pages project name.

## Pages

| Route   | Description                                          |
|---------|------------------------------------------------------|
| `/`     | Landing page — hero, problems, solutions, quick start |
| `/docs` | Full command reference + how it works                |

## Design Tokens

Defined as CSS custom properties in `app/globals.css`:

| Token              | Value     | Use                  |
|--------------------|-----------|----------------------|
| `--color-bg`       | `#0a0a0a` | Page background      |
| `--color-surface`  | `#141414` | Card backgrounds     |
| `--color-edge`     | `#242424` | Borders              |
| `--color-fg`       | `#f0f0f0` | Primary text         |
| `--color-muted`    | `#b8b8b8` | Secondary text       |
| `--color-subtle`   | `#787878` | Tertiary text        |
| `--color-dim`      | `#484848` | Disabled / decorative |
| Font               | `Courier New, Courier, monospace` | |

See [CONTRIBUTING.md](./CONTRIBUTING.md) for project structure and code style.
