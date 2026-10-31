# Adesh Pandey — Portfolio

A retro, animated personal portfolio for **Adesh Pandey**, a software engineer based in Kathmandu, Nepal. Built with React, TypeScript, and Framer Motion. No templates, no page builders.

## What's inside

- Hero with a photo frame, rotating role, and quick links
- About, skills, experience timeline, education, and credentials
- Filterable project gallery covering every public project
- Playground with a playable Tic-Tac-Toe game and links to older mini-projects
- Contact form (opens the visitor's email client) with GitHub, LinkedIn, Instagram, and email links
- Scroll progress, marquees, reveal animations, and reduced-motion support
- SEO metadata, Open Graph image, JSON-LD person schema, and PWA manifest

## Scripts

```bash
npm start      # development server at http://localhost:3000
npm test       # run tests
npm run build  # production build in /build
```

## Editing content

All personal content lives in **`src/data/portfolio.ts`**:

- `profile` — name, role, email, tagline, hero copy, resume/photo paths
- `socials` — GitHub, LinkedIn, Instagram, email
- `experience` — roles, dates, highlights, tech tags
- `education` / `credentials` — schools, training, volunteering
- `skillGroups` — skill categories and chips
- `projects` — project cards, categories, links, status
- `miniProjects` — playground links

## Add your photo

Replace **`public/photo.jpg`** with your portrait. A styled placeholder is included for now. No code changes needed.

## Resume

The downloadable CV lives at **`public/Adesh-Pandey-CV.pdf`**. Replace that file to update the download.

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Keep the detected settings: build command `npm run build`, output directory `build`.
4. Deploy.

The site is a single page with anchor navigation, so no SPA rewrite rules are required.

## Structure

```
public/                 static assets, CV, OG image, icons
src/
  components/           page sections and UI primitives
  data/portfolio.ts     all content
  App.tsx               page composition
  index.css             design system and responsive styles
  index.tsx             entry point
```
