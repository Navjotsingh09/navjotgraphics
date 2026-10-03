# navjotgraphics

A eight-page portfolio inspired by GOATS' editorial typography, generous spacing, grey/pink palette and motion language. Original navjotgraphics branding and hero artwork.

## Contents

- Home, Work, About, Contact
- Individual pages for PJ Glass, PNJ Bespoke, Puramilk Health and Joinery Studio, with project purpose, audience, challenge, design approach and visitor journey
- Accessible full-screen menu, work grid/list switcher, intersection-based scroll reveals, reduced-motion support
- Responsive layouts and local optimised images

`dist/` is the published static site. `build.py` regenerates page markup; `project-stories.json` holds the detailed project explanations; shared styling and interactions are `dist/style.css` and `dist/app.js`.

## Content and launch work

Project explanations are based on the supplied project context and public project information. Review contributions before sharing publicly. The contact form downloads a local brief; it does not send enquiries. Connect the owner's verified email and a submission backend before making it a public lead-generation site.

## Assets

- PJ Glass: actual accessories ecommerce screenshot from https://pj-glass.co.uk/accessories, showing filters, prices and add-to-cart buttons.
- Chrome n hero: original AI-generated artwork for this portfolio.
- PNJ Bespoke: kitchen cabinetry image from https://pnjbespoke.co.uk/assets/kitchen-hero-JaB9Sjkl.jpg
- Puramilk Health: AI-edited product composition based on the owner-supplied branded dairy artwork (milk, paneer, ghee and butter).
- Joinery Studio: original AI-generated illustrative 3D cabinetry concept; visibly labelled as an illustration on its project page, not an app screenshot.

## Validation

JavaScript syntax checked with `node --check dist/app.js`. All internal routes and local image references checked across eight pages. Project image crops reviewed for desktop cards and mobile project images; production Work page visually checked in the browser.

## Deploy on Vercel

Import this GitHub repository. Keep the project root at the repository root and use the Other framework preset. The included `vercel.json` serves the committed `dist/` folder directly, with no dependency installation or build step. No environment variables are required.

After editing page content in `build.py`, regenerate it with `python3 build.py` and commit the resulting HTML. Styling and browser interactions live in `dist/style.css` and `dist/app.js`.
