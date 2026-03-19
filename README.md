# GAS Webform Scriplets

A Google Apps Script WebApp that renders a dynamic form using GAS HTML Templating (scriplets), emulating a component-based UI architecture with no build tools or npm dependencies at runtime.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Overview

This project demonstrates how to build a React-style component system entirely within Google Apps Script using its native `HtmlService` templating engine. Each UI element is a standalone `.html` partial that is included and rendered server-side — keeping the codebase modular without introducing a frontend framework or build pipeline.

---

## Features

- Component-based form rendering using GAS scriplets (`<?!= ?>`)
- Reusable UI components: inputs, textareas, dropdowns, multi-choice questions, add/remove buttons
- Shared CSS and JS injected as partials for DRY styling and logic
- Server-side middleware layer for routing and data access
- Zero npm dependencies at runtime — pure GAS

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Pattern  | GAS scriplet component system   |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
gas-webform-scriplets/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json          # GAS manifest
    ├── 0-Env.js                 # Environment config / Sheet IDs
    ├── A-Middleware.js          # Server-side middleware / routing
    ├── A-Server.js              # doGet() entry point
    ├── index.html               # Page shell — composes all components
    ├── index-css.html           # Shared stylesheet partial
    ├── index-js.html            # Shared client-side JS partial
    ├── test.html                # Dev test page
    ├── Comp-Add-Button.html     # Add-row button component
    ├── Comp-Dropdown.html       # Dropdown select component
    ├── Comp-Footer.html         # Footer component
    ├── Comp-Footer-css.html     # Footer styles partial
    ├── Comp-Input.html          # Text input component
    ├── Comp-MCQ.html            # Multiple choice question component
    ├── Comp-Question-Group.html # Question group wrapper
    ├── Comp-Textarea.html       # Textarea component
    └── Comp-Topbar.html         # Top navigation bar component
```

---

## How the Component System Works

Each component is a `.html` file rendered server-side and composed into the page shell:

```html
<!-- In index.html -->
<?!= HtmlService.createTemplateFromFile('Comp-Input').evaluate().getContent() ?>
```

Props are passed by setting template variables before evaluation:

```javascript
const tpl = HtmlService.createTemplateFromFile('Comp-Dropdown');
tpl.options = ['Option A', 'Option B'];
const html = tpl.evaluate().getContent();
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/gas-webform-scriplets.git
   cd gas-webform-scriplets
   ```

2. Create or link an Apps Script project:
   ```bash
   clasp create --type webapp --title "GAS Webform Scriplets" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me · **Who has access**: Anyone
4. Click **Deploy** and copy the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
