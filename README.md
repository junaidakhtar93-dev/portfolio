# Personal Portfolio

A single-page personal portfolio for **Junaid Akhtar** — Computer Science graduate and systems & web developer. Dark theme, smooth-scroll navigation, and fade-in-on-scroll animations, now built as a modern component-based app.

> Originally built in 2023; rebuilt with React + TypeScript in 2026.

## Live site

Served via GitHub Pages at:

```
https://junaidakhtar93-dev.github.io/portfolio/
```

Deployment is automated — every push to `main` builds the app and publishes `dist/` to Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Tech stack

- **Vite** — build tool / dev server
- **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin
- Google Fonts (Inter, JetBrains Mono)
- `IntersectionObserver` for scroll-reveal animations (React hook)

## Run locally

```bash
# Install dependencies.
npm install

# Start the dev server (http://localhost:5173).
npm run dev

# Type-check and produce the production build into dist/.
npm run build
```

## Structure

- `index.html` — Vite entry, loads `/src/main.tsx`
- `src/main.tsx` — React root
- `src/App.tsx` — composes all sections
- `src/components/` — `Nav`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`, `Footer`
- `src/data.ts` — typed content (skills, projects, timeline, etc.)
- `src/hooks/useScrollEffects.ts` — nav-highlight + fade-in hooks
- `src/index.css` — Tailwind import plus the ported design styles

## Sections

About · Skills · Projects · Experience & Education · Contact

## License

[MIT](LICENSE) © Junaid Akhtar
