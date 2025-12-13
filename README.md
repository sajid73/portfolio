
# Sajid — Personal Portfolio

This repository holds a personal portfolio website built with Next.js and TypeScript. It showcases projects, skills, and contact information in a modern, responsive layout.

## Overview

- **Purpose:** A personal website to present portfolio projects, resume, and contact details.
- **Audience:** Employers, collaborators, and anyone evaluating web development work.

## Features

- Clean, responsive design with accessible components
- Project listing with cards and details
- Sections for hero, about, skills, resume, projects, blog, and contact
- Theme (light/dark) support and small UI primitives

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS / PostCSS (project uses `postcss.config.mjs` and global styles)
- npm for package management (comes with Node.js)

## Project Structure (important files/folders)

- `app/` — Next.js application entry (routes, layout, pages)
- `components/` — UI components and page sections (hero, projects, contact, etc.)
- `components/ui/` — Reusable UI primitives and small components
- `lib/` — Helpers and data (e.g., `portfolio-data.ts`, `utils.ts`)
- `hooks/` — Custom React hooks (e.g., `use-mobile.ts`, `use-toast.ts`)
- `public/` — Static assets (images, favicon)
- `styles/` — Global CSS (`globals.css`)
- `next.config.mjs`, `tsconfig.json`, `package.json` — build and TypeScript configuration

## Getting Started

Prerequisites:

- Node.js (recommend v18 or later)
- npm (comes with Node.js) — or use your package manager of choice

Install dependencies and run locally :

```batch
npm install
npm run dev
```

Build for production:

```batch
npm run build
npm run start
```

If the project uses a different script name, run `npm run` to list available scripts.