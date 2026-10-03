# navjotgraphics

A eight-page portfolio inspired by GOATS' editorial typography, generous spacing, white/silver palette and motion language. Original navjotgraphics branding and hero artwork.

## Contents

- Home, Work, About, Contact
- Individual pages for PJ Glass, PNJ Bespoke, Puramilk Health and Joinery Studio, with project purpose, audience, challenge, design approach and visitor journey
- Accessible full-screen menu, work grid/list switcher, intersection-based scroll reveals, reduced-motion support
- Responsive layouts and local optimised images

`dist/` is the published static site. `build.py` regenerates page markup; `project-stories.json` holds the detailed project explanations; shared styling and interactions are `dist/style.css` and `dist/app.js`.

## Content and launch work

Project explanations are based on the supplied project context and public project information. Review contributions before sharing publicly. The contact form downloads a local brief; it does not send enquiries. Connect the owner's verified email and a submission backend before making it a public lead-generation site.

## Assets

- PJ Glass: AI-generated conceptual accessories composition based on the shop screenshot, with a small shopping card.
- Chrome n hero: original AI-generated artwork for this portfolio.
- PNJ Bespoke: representative real fitted-wardrobe photograph by Aleksandra Dementeva, licensed from Unsplash (source below).
- Puramilk Health: AI-edited product composition based on the owner-supplied branded dairy artwork (milk, paneer, ghee and butter).
- Joinery Studio: original AI-generated illustrative 3D cabinetry concept; visibly labelled as an illustration on its project page, not an app screenshot.

## Validation

JavaScript syntax checked with `node --check dist/app.js`. All internal routes and local image references checked across eight pages. Project image crops reviewed for desktop cards and mobile project images; production Work page visually checked in the browser.

## Deploy on Vercel

Import this GitHub repository. Keep the project root at the repository root and use the Other framework preset. The included `vercel.json` serves the committed `dist/` folder directly, with no dependency installation or build step. No environment variables are required.

After editing page content in `build.py`, regenerate it with `python3 build.py` and commit the resulting HTML. Styling and browser interactions live in `dist/style.css` and `dist/app.js`.

## Subscription-inspired hero
React + Vite hero, with Tailwind CSS installed and all visual styling written in custom CSS. Run `npm ci` then `npm run build`; the build regenerates eight static pages and bundles the hero into the committed dist folder. Existing Vercel deployment still serves committed dist directly. Hero adapted for Navjot, using actual projects and contact links. No client partnership, subscription plan or calendar availability claims. Motion respects reduced-motion settings.

PNJ wardrobe: representative licensed interior photograph by Aleksandra Dementeva, https://unsplash.com/photos/modern-bedroom-with-white-built-in-wardrobe-and-bed-VKcAq1_PlYY, Unsplash License. Original source https://images.unsplash.com/photo-1782730951536-d81badeca960. Hero background supplied via MotionSites/Higgs; rendered in grayscale for the white/silver palette.
