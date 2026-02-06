# replit.md

## Overview

This is a personal portfolio website for Julian Jacklin, a Reed College student. The site is a static, multi-page HTML/CSS/jQuery website that showcases different aspects of Julian's life: Career, Academics, Community, and Teaching. The site uses a minimalist design with image cards that link between pages, fade-in animations, and a consistent header navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Static Site Structure:**
- This is a purely static website with no backend, no build tools, and no frameworks. All pages are plain HTML files served directly.
- Pages: `index.html` (homepage), `Career.html`, `Academics.html`, `Community.html`, `MyStory.html` (Teaching), `Pursuits.html` (My Story)
- Single CSS file (`style.css`) shared across all pages
- Single JS file (`script.js`) shared across all pages

**Frontend Technologies:**
- HTML5 with standard semantic markup
- CSS for styling (no preprocessors like SASS)
- jQuery for animations (fade-in effects on page load for images and text blocks)
- Google Fonts: GFS Didot and Noto Sans

**Navigation Pattern:**
- The header contains the site owner's name ("Julian Jacklin") which links back to `index.html`
- The name uses a show/hide pattern where "ulian" and "acklin" are hidden by default (CSS `display: none`), showing only "J J" as initials
- Navigation between pages is done through clickable image cards with overlay text labels
- No traditional nav bar or menu

**Page Layout Pattern:**
- Each page follows the same template: header → page text content → image card links to other pages
- Image cards (`.imgcont`) contain a full-width image with a text overlay (`.text-block`)
- jQuery handles staggered fade-in animations for image containers and page text

**Known Issues / Notes:**
- Some HTML files appear truncated or have unclosed tags
- `Pursuits.html` has the title set to "replit" instead of "Julian Jacklin"
- `MyStory.html` page heading says "Teaching" while `Pursuits.html` heading says "My Story" — there may be some content/naming confusion between these pages
- Much of the page content is commented out (especially in `MyStory.html`)
- The favicon reference (`dice.png`) has a line break inside the href attribute

## External Dependencies

- **jQuery**: Used for DOM manipulation and animations (loaded via CDN, though the CDN link isn't visible in the provided files — the `script.js` uses `$` syntax requiring jQuery)
- **Google Fonts**: GFS Didot and Noto Sans loaded from `fonts.googleapis.com`
- **No database, no API, no server-side code**: This is entirely a client-side static site
- **Images**: Local image files (`.jpeg`, `.jpg`, `.png`) referenced in HTML — these are stored in the project root directory