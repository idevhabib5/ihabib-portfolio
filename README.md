# Habib Ur Rehman — Personal Portfolio

A Sewood-inspired biodata portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Light biodata layout with fixed sidebar profile panel
- Fully responsive (desktop, tablet, mobile)
- Scroll-triggered animations and professional typography
- SEO-optimized with Open Graph metadata, sitemap, and robots.txt
- Resume download and contact form

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

This project is ready for Vercel with zero extra configuration.

### Option 1: Vercel Dashboard (recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects **Next.js** — click **Deploy**
5. After deploy, optionally add a custom domain under **Project Settings → Domains**

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

### Environment variables (optional)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://yourname.vercel.app`) for SEO, sitemap, and Open Graph |

Set this in **Vercel → Project Settings → Environment Variables** after adding a custom domain.

Copy `.env.example` to `.env.local` for local overrides.

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Layout, sections, UI
├── data/          # Portfolio content (edit portfolio.ts)
└── lib/           # Utilities and site URL helper
public/
├── avatar.jpg     # Profile photo
└── resume.pdf     # Downloadable resume
```

## Customize content

Edit `src/data/portfolio.ts` to update your info, projects, experience, and certifications.
