# Asset Inventory — Live Snapshot 2026-05-18

Captured from the Cloudflare-cached old Framer site at `myleslane.com` on 2026-05-18, before the cache revalidates against the dead Framer origin.

## HTML snapshots (this directory)

| File | Size | Source URL |
| --- | --- | --- |
| `home.html` | 270 KB | `https://myleslane.com/` |
| `about.html` | 176 KB | `https://myleslane.com/about-me` |
| `bondit.html` | 480 KB | `https://myleslane.com/bondit-case-study` |
| `linkedin.html` | 234 KB | `https://myleslane.com/linkedin-case-study` |

## Image assets → `public/site-assets/images/`

| Framer hash | Size | Native dims | Section / role |
| --- | --- | --- | --- |
| `SdHCQK8xg4nfGfsmpL8xSARysDE.png` | 35 KB | 723×179 | **Home hero illustration** (duotone-cropped face, above "Hi, I'm Myles..." greeting) |
| `WJ1OMoou3Aj441a4BFlrHpVar4M.png` | 1.4 MB | 4629w (huge) | **Bondit case study card** on home — "Bondit App Design / Leveraging real life relationships..." |
| `u88vSVQyrVDE8KxXYC8GzT46HU.png` | 103 KB | 1901w | **LinkedIn case study card** on home — "User-centric filtering: A UX Concept" |
| `PTGq8OdfoHKSmMQmm660Wj2Fkk.png` | 54 KB | 731×731 (displayed at 56px) | **Multilingual marquee portrait icon** — repeated between "Hallo, ich bin Myles · こんにちは、Myles..." phrases. Framer name: `IMG_0086`. |
| `YKPCd16xRvYxrNJzP1AxxzwlM.jpg` | 180 KB | 1215w | **About section photo (kid in pirate hat)** — appears on home About section AND About page |
| `aaMn4vfCkiE27WaoxB5JigMesZE.png` | 644 KB | 1100w | **About page collage photo** — second photo in the About page 3-photo collage |
| `nWdLMPCglVmv2eqbD3mYJU2qOs.jpg` | 187 KB | 729w | **About page collage photo** — Framer name: `06 Katheryns Party2 1` |
| `1xfe01J68LHWvJmoHAG0ARs0v0s.png` | 48 KB | — | OG / social share image (metadata only) |
| `YeOnCmfVdjpahO1z8k7k0mD44Gk.png` | 1.3 KB | — | Favicon |
| `vGIkC6s3EwsbeYRb5c65LBAfrs.png` | 5 KB | — | Apple touch icon / app icon |

## Font assets → `public/site-assets/fonts/`

7 `.woff2` files (Framer-hashed names). The old site uses **two** font families:

- **Albert Sans** — already documented in [[Build Status — 2026-05-17]] as the design-token webfont
- **Afacad** — **NOT previously documented.** Used by the case study card titles ("Bondit App Design", "User-centric filtering: A UX Concept") at 24px / 700 weight. Decide whether to keep Afacad for Phase A.5 (matches the old site verbatim) or drop it in favor of Albert Sans-only for design coherence. Both are on Google Fonts — could re-import from there in Phase B rather than ship the Framer woff2s.

## Color tokens visible in inline styles

- Body bg: `rgb(255, 255, 234)` — pale yellow paper (not currently in `global.css`)
- Primary text: `rgb(42, 58, 96)` and `rgb(45, 61, 105)` — navy variants
- Link colors: `#2d3d69` (default), `#4860a1` (hover) — same navy family

These conflict with the `--color-paper: #fafaf8` and `--color-ink: #111111` tokens already in `global.css`. For Phase A.5 (recruiter-safe "close to old"), prefer the captured Framer tokens. Phase B can re-decide the whole palette.

## Recovery method (for future re-runs)

```bash
# 1. Pull HTML
curl -sL -A "Mozilla/5.0" -o home.html https://myleslane.com
curl -sL -A "Mozilla/5.0" -o about.html https://myleslane.com/about-me

# 2. Extract framerusercontent.com URLs (skip JS/CSS chunks)
grep -oE 'https://framerusercontent\.com/[^"'"'"' )]+' *.html | grep -vE '\.mjs$|\.css$' | sort -u

# 3. Download base versions (drop ?scale-down-to= for full resolution)
```

Note: `framerusercontent.com` keeps serving public CDN assets indefinitely even without an active Framer subscription. Same protocol used for the LinkedIn case study asset recovery on 2026-05-17.
