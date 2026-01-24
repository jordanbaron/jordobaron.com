# Agent Instructions

## Project Overview

This is a personal website built with Astro, hosted on Railway.

## Package Manager

**This project uses Bun, not npm.**

- Use `bun install` instead of `npm install`
- Use `bun run <script>` instead of `npm run <script>`
- The lockfile is `bun.lockb`, not `package-lock.json`

## Tech Stack

- **Framework**: Astro 5.x (static output)
- **UI**: SolidJS, Tailwind CSS
- **Language**: TypeScript
- **Database**: PocketBase (external), Drizzle ORM
- **Auth**: better-auth
- **Deployment**: Railway via Nixpacks

## Common Commands

```bash
bun install        # Install dependencies
bun run dev        # Start dev server
bun run build      # Build for production (astro check && astro build)
bun run preview    # Preview production build
bun run typegen    # Generate PocketBase types
```

## Environment Variables

See `.env.example` for required environment variables. The project uses PocketBase which requires:
- `POCKETBASE_URL`
- `POCKETBASE_ADMIN_EMAIL`
- `POCKETBASE_ADMIN_PASSWORD`

## Code Rules
- Avoid useless comments. Code should be as self-explanatory as possible.
- When dealing with PocketBase-related code, use the generated types under `src/lib/pocketbase-types.ts`.
