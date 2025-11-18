# Repository Guidelines

## Project Structure & Module Organization
Markdown drives everything: `components/` holds reusable pieces, `days/` contains itineraries, `decisions/` logs trade-offs, `guides/` shares tips, and `budget/` tracks costs. Vite shells (`index.html`, `viewer.html`, `pdf-export.html`) and print assets read those files directly, so keep new scripts inside `scripts/` or beside `pdf-generator.js` for easy traceability.

## Build, Test, and Development Commands
- `npm install` – install the Node 18+ toolchain.
- `npm run dev` – start the Vite dev server to preview Markdown edits live.
- `npm run build && npm run preview` – produce and inspect the deployable bundle.
- `npm run pdf`, `npm run pdf:days`, `npm run pdf:guides` – generate PDFs; append `--single days/day-03.md` for spot exports.
- `npm run lint` / `npm run format` – apply ESLint and Prettier before committing.

## Coding Style & Naming Conventions
Use ES modules with 4-space indents and descriptive constants (`CONFIG`, `generateHTMLTemplate`). Markdown headings can include emojis; keep sentence-case text and kebab-case filenames like `components/routes/cdg-to-reims.md`. Link shared components instead of duplicating content, and finish edits with `npm run format` to normalize whitespace.

## Testing Guidelines
`npm test` is a stub, so rely on manual checks: use `npm run dev` to click through multiple Markdown routes, confirming charts and caching still initialize. After touching PDF or print logic, run at least one PDF command and review `pdf-output/`. Record manual steps or estimates inside the changed Markdown file so reviewers can revalidate quickly.

## Commit & Pull Request Guidelines
Commits follow Conventional Commit syntax with optional emojis (`feat(vehicle): …`, `🏰 Day 1: …`); include the touched directory in the scope (`docs(days)`, `feat(pdf)`) and keep related Markdown/assets together. Pull requests must include a short bullet summary, linked issues or decision docs, screenshots or PDF diffs for visual changes, and the commands executed (`npm run build`, `npm run pdf:guides`). Tag reviewers who own the affected area.

## Architecture Notes
Travel Plan is a Markdown-first planner rendered by Vite with `marked`, `chart.js`, and `localforage`. Node-only helpers such as `pdf-generator.js` should stay DOM-free and share layout snippets through `pdf-templates/`. Expose any new automation through `package.json` scripts so other agents have consistent entry points.
