# Jason Dewhurst – Developer Portfolio

A personal portfolio site built with HTML, CSS and vanilla JavaScript, presenting my projects, skills and a working contact form inside a 
phone-and-tablet themed interface.

**Live site:** [add your GitHub Pages link here](https://USERNAME.github.io/REPO-NAME/)

---

## About

I'm a developer who recently completed a career change from logistics, through a Level 4 BCS-Accredited Full Stack Web Development course. 
This portfolio is my first fully self-built site: designed, coded and tested from scratch without frameworks, to show what I can do with 
the fundamentals.

## Features

- **Search bar** – searches the page content and returns clickable result buttons that switch to the correct tab, scroll to the match and briefly highlight it
- **Tabbed tablet section** – "About Me" and "My Work" tabs with active states
- **Interactive terminal** – a "Run Script" button types out commands one at a time (`whoami`, `cat developer.json`, `ls ./projects`, `git status`), disables while running and can be replayed
- **Live nav clock** – updates every second, zero-padded from the first second
- **Navigation** – anchor links that open the right tab and scroll smoothly; the current page is marked and excluded from hover effects
- **Contact form** – sends messages through [Formspree](https://formspree.io/), with status feedback
- **Skills section** – competency grids (Client Side / Server Side) and an infinitely scrolling skills ticker
- **Responsive layout** – tested from 3840px wide screens down to 360px phones

## Built With

- HTML5
- CSS3 (Flexbox, Grid, custom properties, media queries, `:has()`, `:not()`)
- JavaScript (ES6, DOM manipulation, event listeners, no libraries)
- Formspree (form handling)
- GitHub Pages (hosting)

## Project Structure

```
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    │   └── skills/          # skill ticker icons
    └── js/
        ├── clock.js         # nav clock
        ├── form.js          # contact form submission and status
        ├── navid.js         # nav links, tab switching, current page
        ├── search-bar.js    # page search, results, highlight
        ├── skills-ticker.js # scrolling skills ticker
        ├── tabs.js          # About Me / My Work tabs
        └── terminal.js      # typing terminal
```

## Responsive Notes

The site was built desktop-first and adapted downwards with `max-width` media queries. On smaller screens the layout stacks, 
the navigation wraps onto two rows, and some content is simplified:

- The nav clock is hidden on narrow screens
- The terminal is hidden on small phones (its text is too wide to read comfortably)

A note in the site's Helpful Information section explains this to visitors. Best viewed on screens 360px and wider.

## What I Learned

- Planning layouts for mobile from the start, rather than adapting a desktop design at the end
- How CSS specificity, the cascade and media query order interact
- Pseudo-classes (`:hover`, `:active`, `:not()`, `:has()`) and how they combine
- Debugging layout with browser dev tools (flex/grid overlays, box model, computed styles)
- Structuring JavaScript into small single-purpose files

## Future Plans (Version 2)

- Redesigned navigation with a hamburger menu on mobile
- Mobile-first layout, with the terminal and clock available on every screen size
- Dedicated Skills section
- Search improvements (punctuation-tolerant matching)
- Back-to-top button and scroll-aware navigation

## Contact

- **LinkedIn:** [jay-dewhurst](https://www.linkedin.com/in/jay-dewhurst/)
- Or use the contact form on the live site

---

© 2026 Jason Dewhurst. All rights reserved.
