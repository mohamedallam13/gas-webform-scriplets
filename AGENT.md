# AGENT.md — gas-webform-scriplets

## Purpose
A Google Apps Script WebApp that renders a dynamic form using GAS HTML Templating (scriplets), emulating a React-style component architecture without any build tools.

## Structure
```
gas-webform-scriplets/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json      ← GAS manifest
    ├── 0-Env.js             ← environment / config
    ├── A-Middleware.js      ← middleware layer
    ├── A-Server.js          ← doGet() entry point
    ├── index.html           ← main page shell
    ├── index-css.html       ← shared CSS partial
    ├── index-js.html        ← shared JS partial
    ├── test.html            ← dev test page
    └── Comp-*.html          ← reusable UI component partials
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Pattern:** Scriplet-based component system (no React/npm)
- **Entry point:** `A-Server.js` → `doGet()`
- **Components:** Each `Comp-*.html` is a reusable HTML partial included via `<?!= HtmlService.createTemplateFromFile(...).evaluate().getContent() ?>`

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; all logic is ES5-compatible GAS
