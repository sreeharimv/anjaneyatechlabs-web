@AGENTS.md

# anjaneyatechlabs-web

## Purpose

Single-page company/portfolio site for Anjaneya Tech Labs —
anjaneyatechlabs.in. Gives visitors a clean overview of ATL and its
flagship live products. No subpages/routing, no CMS, no database.

## Tech Stack

- Next.js 16 (App Router), single page (`/`)
- Tailwind CSS v4 — theme tokens in `app/globals.css`
- Fonts (all via `next/font/google`, registered in `app/layout.tsx`):
  Caveat 600 (nav wordmark), Newsreader (hero tagline, serif), Inter
  (body/UI), Noto Sans Devanagari (verse)
- Fully static content, hand-edited in `app/components/`

## Deploy

- Repo: https://github.com/sreeharimv/anjaneyatechlabs-web
- Self-hosted on Anjaneya (home server): `ssh sreeh007@100.73.205.101`,
  Docker, port 8300, behind an existing Cloudflare Tunnel
- **Auto-deploy is live** — `~/anjaneyatechlabs-web-deploy.sh` runs via
  cron on Anjaneya every 5 min. It checks `origin/main`; if there's a
  new commit it runs `git pull --ff-only` then `docker compose up -d
  --build`. Just push to `main` — no manual deploy step needed.
  - Log: `/tmp/anjaneyatechlabs-web-deploy.log` on Anjaneya
  - Force an immediate deploy: `ssh sreeh007@100.73.205.101
    "~/anjaneyatechlabs-web-deploy.sh"`
  - Script lives at `~/anjaneyatechlabs-web-deploy.sh` on Anjaneya (not
    in this repo); cron entry added to the user's crontab there
- Cloudflare Tunnel ingress routes `anjaneyatechlabs.in` and
  `www.anjaneyatechlabs.in` → `localhost:8300` on Anjaneya. Routing is
  by port number, not container name — no tunnel changes needed as long
  as the container keeps binding host port 8300.
- This replaced a plain `nginx:alpine` static site that used to run on
  the same port (old files backed up then removed from
  `~/docker/anjaneyatechlabs/` on Anjaneya during the July 2026
  redesign).

## Key Files

- `app/layout.tsx` — fonts + metadata
- `app/globals.css` — Tailwind v4 theme tokens (palette, fonts)
- `app/components/Nav.tsx` — masthead-style header: utility row (verse +
  GitHub icon), centered wordmark, nav link row
- `app/components/Hero.tsx` — verse, Hanuman illustration, tagline, CTA
- `app/components/Projects.tsx` — the 4 project cards (data array +
  render in one file)
- `app/components/About.tsx`, `Footer.tsx`
- `Dockerfile`, `docker-compose.yml` — standalone Next.js build, maps
  host `8300` → container `3000`
- `public/hero.png` — Hanuman illustration, sourced from the
  pre-redesign static site

## Visual System

- Dark theme, warm amber/gold accents — full token list (bg/card/
  border/text/gold/cta/live/dev/beta) in `app/globals.css`
- No gradients, no shadows, hairline (0.5px) borders, generous
  whitespace
- Nav wordmark: Caveat 600, gold — no separate logo mark/icon, text only
- Hero tagline: Newsreader serif, deliberately small/quiet (not a bold
  sans headline)

## Known Issues / Gotchas

- **Kshethradanam's real domain is `kshetradanam.org`** (no second 'h')
  — the original design spec and the old site both had it misspelled as
  `kshethradanam.org`, which does not resolve. Don't "fix" it back to
  the spec spelling.
- Daily Cause List and digiSeva project cards intentionally have no
  outbound link — no live destination yet. Only Grabha
  (grabha.in) and Kshethradanam (kshetradanam.org) link out.
- No WhatsApp link/contact anywhere on the site currently — removed
  per Sreehari, not needed for now.

## Content Decisions

- About section is deliberately short and does not mention
  "self-hosted" or that it's a one-person studio — kept simple/generic
  per Sreehari's preference.
- Contact email: hello@anjaneyatechlabs.in (confirmed real, live)
- GitHub icon (nav + footer) links to Sreehari's personal profile
  (github.com/sreeharimv) — there's no ATL GitHub org yet.
- Daily Cause List pricing (₹199/mo) was intentionally removed from the
  card description — don't add it back without asking.
