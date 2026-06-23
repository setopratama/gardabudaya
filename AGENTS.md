# Gardabudaya — Agent Guide

## Stack

- Pure HTML + CSS + JS, **no build step**.
- Tailwind CSS via CDN (`cdn.tailwindcss.com`) — config in-page `<script>` block per page.
- Font Awesome 6, AOS 2.3.1 via CDN.
- Google Fonts: Inter (body), Playfair Display (headings).
- Custom brand palette `brand-50..brand-950` (amber hues) — defined per page in tailwind.config.

## Project Structure

```
public/           # Static site root (firebase.json "public" dir)
  index.html      # Beranda (9 pages + 404.html)
  tentang.html    # Tentang
  program.html    # Program
  kemitraan.html  # Kemitraan
  donasi.html     # Donasi
  berita.html     # Berita
  galeri.html     # Galeri
  relawan.html    # Relawan
  kontak.html     # Kontak
  404.html
  css/style.css   # Font imports + smooth scroll only
  js/main.js      # Navbar toggle + scroll-to-top
```

**IMPORTANT**: Global components (Navbar, Footer, CTA, Breadcrumbs) are **duplicated** across every page. Changes must be applied to all HTML files.

## Commands

| Command | Action |
|---|---|
| `npm run serve` | Firebase hosting emulator on `0.0.0.0:5000` |
| `npm run deploy` | Deploy to `gardabudaya-dev` Firebase project |
| `docker compose up --build` | Run via Docker (port 5000) |

## Firebase & Deployment

- **Project**: `gardabudaya-dev` — live at https://gardabudaya-dev.web.app
- **Auth**: OAuth2 refresh token in `FIREBASE_REFRESH_TOKEN` env var (email: setopratama@gmail.com).
- `entrypoint.sh` writes token to `/root/.config/configstore/firebase-tools.json` automatically.
- `firebase.json` rewrites all routes (`**`) to `/index.html` — beware of false 404s during dev.
- **Domain target**: `gardabudaya.org` (not yet configured).

## Key Content

- **Donation account**: BRI `3068-01-036202-53-8` a.n. YAYASAN RAKAI MATARAM AGUNG (logo: `BRI_2020.svg` from Wikimedia).
- **Phone/WA**: `+62 821-4125-9701` / `wa.me/6282141259701`.
- **Email**: `info@gardabudaya.org`.
- **Address**: Yogyakarta, Indonesia.
- Online donation & volunteer signup forms are **hidden** — replaced by WhatsApp CTA buttons.

## Conventions

- All pages use `scroll-smooth` on `<html>` and `flex flex-col min-h-screen` on `<body>`.
- Tailwind CDN config block is an inline `<script>` at the top of `<head>` — keep brand colors identical across pages.
- No package manager build scripts, no bundler, no framework JS — just plain HTML files.
- 404 page exists at `public/404.html` (Firebase Hosting serves it automatically).
