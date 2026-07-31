# David Herrera — Portfolio

Single-page portfolio site. Next.js (App Router) + TypeScript + Tailwind v4.

Editorial design direction: light background (`#FAF8F4`), near-black text,
one accent color (forest green), Fraunces serif for display type paired with
Inter for body text. No dark mode, no gradients, no card shadows — thin
dividers and generous whitespace instead.

## Structure

- `src/app/layout.tsx` — fonts (`Fraunces`, `Inter`) + metadata
- `src/app/globals.css` — color/font theme tokens (`@theme inline`)
- `src/components/Nav.tsx`, `Footer.tsx` — chrome
- `src/components/Reveal.tsx` — subtle scroll fade-in (IntersectionObserver, respects `prefers-reduced-motion`)
- `src/components/sections/` — Hero, About, Projects, Stack, Contact

Project screenshots are gray placeholders (`bg-surface` boxes in
`Projects.tsx`) — swap in real images per project when available.

**Before deploying:** replace the placeholder Upwork URL in
`src/components/sections/Contact.tsx` (`UPWORK_URL`) with the real profile
link.

## Development

```bash
npm install
npm run dev
```

Runs on [http://localhost:3006](http://localhost:3006).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deploy

Deployable to Vercel as-is (no environment variables required).
