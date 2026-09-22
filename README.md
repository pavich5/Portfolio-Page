# Antonio Pavic — Portfolio

A responsive React and TypeScript portfolio with a warm neutral palette, lime accents, light and dark themes, and a custom SVG hero illustration.

## Development

```sh
npm install
npm run dev
```

Vite runs the local preview at `http://localhost:3000`.

```sh
npm run build
```

The production website is generated in `dist/` and can be hosted on any static hosting service.

## Content and design

- `src/data/portfolio.ts` contains the original project descriptions, project links, experience, and skills.
- `src/components/` contains the page sections, project filtering, mobile navigation, and email actions.
- `src/index.css` contains the design tokens, layouts, responsive styles, and reduced-motion support.
- `public/assets/antonio-pavic-cv.pdf` is the downloadable résumé.
- Project images have 720px and 1440px WebP variants, selected responsively. Original artwork is preserved.
- The Manrope variable font is self-hosted in `public/fonts/`, with its SIL Open Font License.

The contact section opens the visitor’s email app or copies the email address. It does not require a backend or claim that a message has been sent.

## Browser verification

Checked layouts from 320px to 1440px wide, including mobile navigation, Escape dismissal, project filters and expanded details, theme persistence, email copying, and asset loading. `npm run build` produces the deployable static site.
