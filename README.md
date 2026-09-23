# My Portfolio

Personal portfolio website built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Font (UI) | Plus Jakarta Sans |
| Font (Code) | JetBrains Mono |

## Design Tokens

| Token | Value |
|---|---|
| Background | `#08090d` |
| Background (elevated) | `#0b0f19` |
| Accent | `#2c67ed` (Electric Blue) |
| Card border | `rgba(255,255,255,0.10)` |
| Card border (hover) | `rgba(44,103,237,0.50)` |
| Card style | `glass` — bg-white/3, backdrop-blur-md |

## Project Structure

```
src/
├── components/
│   ├── Navbar/      → Fixed nav with scroll-aware backdrop
│   ├── Hero/        → Full-screen landing with stagger animation
│   ├── AboutMe/     → Bio, skills grid, stats strip
│   ├── Portfolio/   → Filterable project grid with AnimatePresence
│   ├── Contact/     → Form + social links
│   └── Footer/      → Copyright + back-to-top
├── constants/
│   └── site.js      → All data in one place (projects, skills, links)
├── hooks/
│   └── useScrolled.js
├── lib/
│   └── motion.js    → Shared Framer Motion variants
└── index.css        → Global CSS + design token CSS variables
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Customisation Checklist

- [ ] Edit `src/constants/site.js` — name, email, social links, projects
- [ ] Replace `YourName` placeholder in `Navbar.jsx` and `Footer.jsx`
- [ ] Add your photo to `public/` and update `AboutMe.jsx`
- [ ] Add project thumbnails to `public/images/` and update `PROJECTS`
- [ ] Wire up the contact form to EmailJS / Formspree / Resend
- [ ] Swap `favicon.svg` for your own logo
- [ ] Update `<meta>` tags in `index.html`
