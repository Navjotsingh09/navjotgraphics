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

- PJ Glass: AI-generated conceptual accessories composition based on the shop screenshot, with a small shopping card.
- Chrome n hero: original AI-generated artwork for this portfolio.
- PNJ Bespoke: timber library cabinetry photograph used on the PNJ Bespoke website: https://pnjbespoke.co.uk/assets/library-DOlvtZOT.jpg
- Puramilk Health: AI-edited product composition based on the owner-supplied branded dairy artwork (milk, paneer, ghee and butter).
- Joinery Studio: original AI-generated illustrative 3D cabinetry concept; visibly labelled as an illustration on its project page, not an app screenshot.

## Validation

JavaScript syntax checked with `node --check dist/app.js`. All internal routes and local image references checked across eight pages. Project image crops reviewed for desktop cards and mobile project images; production Work page visually checked in the browser.

## Deploy on Vercel

Import this GitHub repository. Keep the project root at the repository root and use the Other framework preset. The included `vercel.json` serves the committed `dist/` folder directly, with no dependency installation or build step. No environment variables are required.

After editing page content in `build.py`, regenerate it with `python3 build.py` and commit the resulting HTML. Styling and browser interactions live in `dist/style.css` and `dist/app.js`.

PNJ Bespoke cover now uses three real photographs in a responsive composition: kitchen (PNJ website https://pnjbespoke.co.uk/assets/kitchen-hero-JaB9Sjkl.jpg), bedroom (Aleksandra Dementeva, Unsplash https://unsplash.com/photos/modern-bedroom-with-white-built-in-wardrobe-and-bed-VKcAq1_PlYY), and staircase (Pexels https://images.pexels.com/photos/7031583/pexels-photo-7031583.jpeg). These represent the service categories rather than claiming that every photograph depicts a completed PNJ installation.

### NavOS design branch

The `design/windows-xp` branch keeps the existing portfolio available at `/simple/` and adds a 2001 Luna-style welcome screen and desktop at `/`. No password or account is collected. Four project folders, About, Skills and Contact retain the approved portfolio content.

Desktop behavior: single-click selects, double-click/Enter opens (single tap on touch); title bars drag and double-click maximize; task buttons minimize/restore; minimize activates the next visible window; Back maintains per-window folder history; Up opens My Computer; Escape dismisses menus; Log Off returns to the two-profile screen. Display Properties switches the wallpaper. Date, volume and shutdown controls open local dialogs. Volume is visual only because no audio plays.

XP visual assets in `dist/assets/xp/` were retrieved from https://github.com/Cyanoxide/react-xp/tree/main/frontend/public (Bliss, system icons, skateboard account tile and Start-button sprite). Original Microsoft artwork remains owned by its respective rights holders; NavOS is an independent portfolio recreation. The HTML/CSS/JavaScript implementation here is original. It is a portfolio desktop, not an operating-system emulator.

Verification: generated static pages, JavaScript syntax and whitespace checks pass. Browser visual verification is still required: internal `terminal.local` preview was blocked by the cloud browser and the connected Vercel account could not access this team's protected previews.
