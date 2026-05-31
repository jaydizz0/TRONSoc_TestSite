# TRONSoc — Carleton Mechatronics Society

**Stack:** Vite + React + Tailwind CSS v4 + React Router + gh-pages

## Project Structure

```
tronsoc-site/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageHeader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── Exec.jsx
│   │   └── Shop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Hot-reload is enabled — changes save instantly.

## Customizing

- **Calendar** — in `src/pages/Events.jsx`, replace the `<iframe src="...">` with your TRONSoc Google Calendar embed link
- **Exec photos** — in `src/pages/Exec.jsx`, replace the `initials` placeholder in each card with an `<img>` tag
- **Shop products** — edit the `products` array in `src/pages/Shop.jsx`
- **Links/socials** — update `href`s in `src/components/Footer.jsx` and `src/pages/Exec.jsx`
- **Base URL** — in `vite.config.js`, update `base: '/tronsoc-site/'` to match your GitHub repo name

## Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

That runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch automatically.

**First-time setup:**
1. Create a GitHub repo named `tronsoc-site`
2. Push your code to `main`
3. In `vite.config.js` set `base: '/tronsoc-site/'`
4. In `package.json` set `"homepage": "https://YOUR-USERNAME.github.io/tronsoc-site"`
5. Run `npm run deploy`
6. Go to repo Settings → Pages → Source: `gh-pages` branch

Your site will be live at `https://YOUR-USERNAME.github.io/tronsoc-site/`
