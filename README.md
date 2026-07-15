# Vitara Interior — Design Beyond Imagination

Cinematic luxury interior design website. React 19 + Vite + Three.js (R3F) + GSAP + Lenis + Framer Motion.

## Run

```
npm install
npm run dev
```

## Build & Deploy

```
npm run build     # outputs to dist/
```

Deploy `dist/` to Hostinger (upload to public_html) or Vercel (vercel.json included).

## Customize

- Phone/email: `src/components/Contact.jsx` (PHONE, EMAIL) and `src/components/Footer.jsx`
- Portfolio images/copy: `src/data/rooms.js` (swap Unsplash URLs with real project photos)
- Rooms/materials/lighting copy: `src/data/rooms.js`

## Notes

- The villa is built procedurally in Three.js (marble reflector floor, walnut fluting, glass partition, animated curtains, dust particles, lightformer HDRI) — no GLTF/HDRI downloads needed, runs fully offline.
- Post-processing: Bloom, Depth of Field, Vignette. Contact shadows on all scenes.
- Reduced-motion and touch devices are respected (cursor and smooth scroll auto-disable).
