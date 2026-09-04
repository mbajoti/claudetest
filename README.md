# PWA Starter

A minimal, dependency-free Progressive Web App. No build step, no framework —
just HTML, CSS, and JS you can open straight in a browser or serve as static
files.

## What's included

- `index.html` — app shell
- `css/style.css` — styling (light/dark aware)
- `js/app.js` — counter demo, online/offline detection, install prompt
- `manifest.json` — makes the app installable on Android/Chrome
- `sw.js` — service worker that caches the app shell so it works offline
- `icons/` — app icons (192, 512, and a maskable 512 for Android's adaptive icon shape)

## Run it locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

**Note:** service workers require HTTPS (or `localhost`). If you deploy this
(GitHub Pages, Netlify, Vercel, etc.), it'll get HTTPS automatically and the
offline/installable behavior will work there too.

## Install it on your Android phone

1. Deploy this to any static host, or serve it over your LAN and open the
   URL in Chrome on your phone.
2. Chrome will show an "Add to Home screen" banner, or use the in-page
   Install button (see `js/app.js`'s `beforeinstallprompt` handler).
3. Once installed, it opens full-screen with its own icon — no browser UI.

## Customize

- Update `manifest.json` (`name`, `short_name`, `theme_color`,
  `background_color`) to rebrand the app.
- Replace the icons in `icons/` (keep the same filenames/sizes, or update
  `manifest.json` and `sw.js` to match).
- Bump `CACHE_NAME` in `sw.js` whenever you change cached assets, so
  installed clients pick up the update.
