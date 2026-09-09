# Tahona San Clemente

Landing page de una sola página para Tahona San Clemente, panadería con obrador
y cafetería en Campanar, València.

## Stack

- React 19 + TypeScript + Vite 8
- `vite-react-ssg` (pre-render en build, SEO técnico real)
- Tailwind CSS 4
- `react-helmet-async` (meta + JSON-LD)
- `embla-carousel-react` (galería)
- Hosting: GitHub Pages vía GitHub Actions

## Desarrollo

```bash
npm ci --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build      # genera dist/ con HTML pre-renderizado
```

El `base` de Vite es `/tahona-san-clemente/` (repo de GitHub Pages). Al conectar
un dominio propio, definir `VITE_BASE=/` en el workflow y añadir `public/CNAME`.

## Contenido

Toda la información del negocio vive en `src/content.ts` (única fuente de verdad).
