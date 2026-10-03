# navjotgraphics

A eight-page portfolio inspired by GOATS' editorial typography, generous spacing, grey/pink palette and motion language. Original navjotgraphics branding and hero artwork.

## Contents

- Home, Work, About, Contact
- Individual pages for PJ Glass, PNJ Bespoke, Puramilk Health and Joinery Studio
- Accessible full-screen menu, work grid/list switcher, intersection-based scroll reveals, reduced-motion support
- Responsive layouts and local optimised images

`dist/` is the published static site. `build.py` regenerates page markup; shared styling and interactions are `dist/style.css` and `dist/app.js`.

## Content and launch work

Project text is a starting draft based on the supplied project context. Review contributions before sharing publicly. PJ Glass, PNJ Bespoke and Puramilk Health project photos are assets from the respective project websites. Joinery Studio uses an actual screenshot of the live app. Replace them with approved portfolio screenshots and expand the visual galleries. The contact form downloads a local brief; it does not send enquiries. Connect the owner's verified email and a submission backend before making it a public lead-generation site. A CMS, blog and results-based case studies are not included in this initial version.

## Assets

- Joinery Studio: screenshot of https://joinery-studio-l9ak.vercel.app/

- Chrome n hero: original AI-generated artwork for this portfolio.
- PJ Glass website hero: https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&auto=format&fit=crop&q=80
- Puramilk Health website hero: https://puramilkhealth.com/beautiful-green-farm-with-cows-pastoral-landscape.jpg
- PNJ Bespoke website hero: https://images.pexels.com/photos/7031583/pexels-photo-7031583.jpeg?auto=compress&cs=tinysrgb&w=1800

## Validation

JavaScript syntax checked with `node --check dist/app.js`. All internal routes and local image references checked across eight pages. No browser visual QA performed: managed Sites preview does not support plain static assets in this environment.

## Deploy on Vercel

Import this GitHub repository. Keep the project root at the repository root and use the Other framework preset. The included `vercel.json` serves the committed `dist/` folder directly, with no dependency installation or build step. No environment variables are required.

After editing page content in `build.py`, regenerate it with `python3 build.py` and commit the resulting HTML. Styling and browser interactions live in `dist/style.css` and `dist/app.js`.
