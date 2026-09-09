// Prefija cualquier ruta de /public con el `base` real de Vite (import.meta.env.BASE_URL).
// Necesario porque el sitio se publica en un subdirectorio de GitHub Pages
// (https://usuario.github.io/tahona-san-clemente/), no en la raíz del dominio:
// un <img src="/gallery/x.jpg"> escrito a mano se resolvería contra la raíz
// del dominio y rompería en producción. Usar SIEMPRE para imágenes de
// /public referenciadas desde JSX.
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}
