# prepcli.in

Website for [prepcli](https://prepcli.in) — persistent AI collaboration layer.

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

| Token              | Value     | Use                   |
|--------------------|-----------|-----------------------|
| `--color-bg`       | `#141414` | Page background       |
| `--color-surface`  | `#1c1c1c` | Card backgrounds      |
| `--color-edge`     | `#303030` | Borders               |
| `--color-fg`       | `#f2f2f2` | Primary text          |
| `--color-muted`    | `#cccccc` | Secondary text        |
| `--color-subtle`   | `#999999` | Tertiary text         |
| `--color-dim`      | `#666666` | Disabled / decorative |
| `--color-code-bg`  | `#1a1a1a` | Code block background |
| Font               | `Courier New, Courier, monospace` | |

See [CONTRIBUTING.md](./CONTRIBUTING.md) for project structure and code style.
