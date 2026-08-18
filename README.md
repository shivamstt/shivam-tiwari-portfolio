# shivamtiwari.dev — personal portfolio & blog

Personal site for **Shivam Tiwari**, platform engineer. A fast, minimal,
dark/light portfolio with a Markdown-powered blog.

🔗 **Live:** _add your deployed URL here_

## Tech stack about portfolio

- **React 19** + **Vite 7** — SPA with fast HMR and an optimized production build
- **React Router 7** — client-side routing (`/`, `/blog`, `/blog/:slug`)
- **Markdown blog** — posts live in `src/content/*.md`, parsed at build time with
  `front-matter`, rendered via `react-markdown` + `rehype-highlight` for syntax highlighting
- **CSS custom properties** — theming with dark as the default and a manual light toggle
  (choice persisted in `localStorage`), no UI framework
- **Inter** via Google Fonts

## Features

- **Deploy Log** — work experience rendered as a commit history, with skill tags that
  filter the list when clicked
- **Projects** — case-study cards (problem → approach → result) for key initiatives
- **Systems · Stack** — the platform toolset grouped by domain (IaC, Kubernetes, CI/CD,
  observability, resilience)
- **Command palette** (`⌘K` / `Ctrl+K`) — fuzzy-searchable navigation and actions
  (jump to a section, copy email, open LinkedIn, toggle theme)
- **Interactive terminal** — the hero's terminal window plays a scripted intro, then
  drops into a live shell (`help`, `whoami`, `skills`, `experience`, `certs`, `contact`,
  `theme`, `linkedin`, `clear`) once you click into it

## Project structure for portfolio

```
src/
  components/    Header, Hero, Footer, Systems, Terminal, ThemeToggle, CommandPalette
  pages/         Home, Blog, BlogPost
  content/       Blog posts as Markdown (front-matter: title, date, description, tags)
  index.css      Design tokens (colors, spacing, type) + base styles
  theme.jsx      Theme context/provider (dark by default, persisted toggle)
  App.jsx        Routes
public/
  favicon.svg
```

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # eslint
```

## Adding a blog post

Create a new file in `src/content/`, e.g. `my-post.md`:

```md
---
title: "Your title"
date: "2026-01-15"
description: "One-line summary shown on the blog index."
tags: ["platform", "aws"]
---

Your content in Markdown…
```

It's picked up automatically — the slug is the filename (`my-post`).

## License

© Shivam Tiwari. All rights reserved.
