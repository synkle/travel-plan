# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Interactive Travel Planning System** for a France-Germany family trip (2025.11.21-29). Component-based markdown architecture with web viewer and PDF export capabilities.

**Stack**: Vite + Vanilla JS + Markdown (marked.js) + Puppeteer (PDF generation)

## Development Commands

```bash
# Development
npm run dev              # Start Vite dev server (localhost:3000, HMR enabled)
npm run serve            # Simple HTTP server on port 8080

# Build & Preview
npm run build            # Production build → dist/
npm run preview          # Preview production build (localhost:8080)

# PDF Generation (Node.js + Puppeteer)
npm run pdf              # Generate all PDFs
npm run pdf:days         # Day 1-9 only
npm run pdf:guides       # Guides only
npm run pdf:single -- --single=days/day-01.md  # Single file

# Code Quality
npm run lint             # ESLint check
npm run format           # Prettier auto-format
npm test                 # (No tests implemented yet)
```

## Architecture: Component-Based Travel Planning

### Philosophy
```
"Reusable travel components + Daily itineraries + Decision documentation"
= DRY principle for travel planning
```

### Directory Structure & Purpose

```
travel-plan/
├── components/          # 📦 Reusable travel elements
│   ├── vehicles/        # Car rental info (Mercedes V-Class)
│   ├── accommodations/  # Hotel options by city
│   ├── activities/      # Tours & attractions
│   ├── restaurants/     # Dining guides
│   └── routes/          # Driving routes with stops
│
├── days/                # 📅 Daily itineraries (reference components)
│   ├── day-01.md        # Paris → Reims
│   ├── day-02.md        # Reims → Füssen (630km drive)
│   └── ...              # day-03 through day-09
│
├── guides/              # 📚 Cross-cutting travel guides
│   ├── family-tips.md
│   ├── packing-list.md
│   ├── rental-booking-confirmed.md
│   └── rental-terms-europcar.md
│
├── decisions/           # 🤔 Decision documentation
│   ├── plan-comparison.md   # Plan A vs B analysis
│   └── final-decision.md    # Final route decision
│
├── budget/              # 💰 Budget tracking
│   ├── overview.md
│   └── daily-breakdown.md
│
├── index.html           # Main landing page
├── viewer.html          # Interactive markdown viewer
├── pdf-export.html      # Browser-based PDF export tool
├── pdf-generator.js     # Node.js PDF generator (Puppeteer)
└── print.css            # Print/PDF optimized styles
```

### Component Reference Pattern

**Day files reference components** instead of duplicating information:

```markdown
## 🚗 Vehicle
📦 **Component**: [`vehicles/mercedes-v-class`](../components/vehicles/mercedes-v-class.md)

**Key Points**:
- 6 passengers + luggage
- ISOFIX x2 (for twins)
```

**Modification workflow**:
1. Update component once → `components/vehicles/mercedes-v-class.md`
2. All day files automatically reference latest version
3. No duplicate updates needed

## Web Application Architecture

### Build System (Vite)

**Input files** (vite.config.js):
- `index.html` → Landing page
- `viewer.html` → Markdown viewer
- `pdf-export.html` → PDF export tool

**Path aliases**:
```javascript
'@'           → ./src
'@components' → ./components
'@days'       → ./days
'@guides'     → ./guides
'@budget'     → ./budget
```

**Code splitting**:
- `vendor.js` → marked.js
- `charts.js` → chart.js
- `utils.js` → qrcode + localforage

### Key Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| `marked` | ^11.1.1 | Markdown → HTML conversion |
| `chart.js` | ^4.4.1 | Budget visualization |
| `qrcode` | ^1.5.3 | QR code generation |
| `html2pdf.js` | ^0.10.1 | Browser PDF export |
| `puppeteer` | ^21.9.0 | Server-side PDF generation |
| `localforage` | ^1.10.0 | Offline storage |

### PDF Generation (Two Methods)

**1. Browser-based** (`pdf-export.html` + `html2pdf.js`):
- Client-side PDF generation
- Uses `print.css` for styling
- Page break controls via CSS

**2. Server-based** (`pdf-generator.js` + Puppeteer):
- Higher quality output
- Batch processing
- Command-line options for file selection

### Responsive Design

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1200px
- Desktop: > 1200px

**Mobile-first approach** with progressive enhancement.

## Content Management

### Markdown File Structure

**Day files template**:
```markdown
# Day X: [Route] ([Date])

> **테마**: "Daily theme"
> **목표**: Daily objectives

## 📅 Basic Info
## 🎯 Mission
## ⏰ Timeline
## 🚗 Transportation (component reference)
## 🏨 Accommodation (component reference)
## 🎨 Activities (component reference)
## 🍽️ Dining (component reference)
## 📋 Checklist
## 💰 Budget
## ⚠️ Risk & Mitigation
## 👨‍👩‍👧‍👦 Family Care Tips
## 📊 Success Metrics
## 🔗 Related Components
## 🔄 Navigation (prev/next day)
```

**Component files** contain detailed, reusable information that can be referenced across multiple days.

### File Linking Convention

**Relative paths** from day files:
```markdown
📦 Component: [`vehicles/mercedes-v-class`](../components/vehicles/mercedes-v-class.md)
```

**Always use emoji indicators** for component references:
- 📦 = Component reference
- 📄 = Document reference

## Development Patterns

### Markdown Loading (viewer.html)

```javascript
async function loadMarkdown(path) {
    const response = await fetch(path);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    return html;
}
```

### LocalStorage Pattern

```javascript
// Save state
localStorage.setItem('key', JSON.stringify(data));

// Load state
const data = JSON.parse(localStorage.getItem('key') || '{}');
```

### PDF Optimization

**CSS print media queries** in `print.css`:
```css
@media print {
    .no-print { display: none !important; }
    .page-break-before { page-break-before: always; }
    h1, h2, h3 { page-break-after: avoid; }
}
```

**html2pdf options**:
```javascript
{
    margin: [10, 10, 10, 10],
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
}
```

## Project Context

**Travel Details**:
- **Dates**: Nov 21-29, 2025 (9 days, 8 nights)
- **Group**: 6 people (couple + elderly parents + 7-year-old twins)
- **Route**: Paris → Reims → Füssen → Colmar → Paris
- **Total Distance**: 1,460km
- **Vehicle**: Mercedes V-Class (7-seater)

**Key Highlights**:
- Neuschwanstein Castle (Day 3) - main attraction for kids
- Alsace wine villages (Day 5)
- Disneyland Paris (Day 7)

## Browser Compatibility

| Browser | Min Version | Status |
|---------|-------------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |
| IE | - | ❌ Not supported |

## Code Style

- **ESLint**: `eslint:recommended`, ES2021, semicolons required
- **Prettier**: 2 spaces, single quotes, 100-char line width
- **Commits**: Conventional commits (feat:, fix:, docs:, etc.)

## Performance Notes

**Vite optimization**:
- Automatic code splitting
- Tree shaking in production
- Terser minification (console/debugger stripped)

**Caching strategy**:
- Component markdown files cached via `localforage`
- Static assets cached by Vite

## Important Conventions

1. **Component updates**: Modify component files, NOT day files
2. **Markdown references**: Always use relative paths with `../` prefix
3. **PDF styling**: Use `print.css` classes for page breaks
4. **Base path**: Production builds use `/travel-plan/` base path (vite.config.js)

## Known Limitations

- No automated tests implemented (`npm test` is placeholder)
- No backend database (all content in markdown)
- Browser-based PDF quality lower than Puppeteer
- LocalStorage for persistence (not cross-device)

## Deployment

**Supported platforms**:
- GitHub Pages (set `base: '/travel-plan/'`)
- Netlify (build: `npm run build`, publish: `dist`)
- Vercel (auto-detected Vite config)

**Production checklist**:
1. Update `base` path in `vite.config.js`
2. Run `npm run build`
3. Test with `npm run preview`
4. Deploy `dist/` directory
