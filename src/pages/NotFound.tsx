import { Helmet } from 'react-helmet-async'
import { content } from '../content'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center text-ink">
      <Helmet>
        <title>Página no encontrada — {content.name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="font-display text-6xl font-semibold text-crust">404</p>
      <h1 className="font-display text-2xl font-semibold">Esta página no existe</h1>
      <p className="max-w-sm text-ink/70">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <a
        href="./"
        className="mt-2 rounded-full bg-crust px-6 py-3 text-sm font-semibold text-cream transition hover:bg-crust-dark"
      >
        Volver al inicio
      </a>
    </div>
  )
}
