import { content, contactHref, orderHref } from '../content'
import { assetUrl } from '../lib/asset'

export default function Hero() {
  const bg = content.gallery[0]

  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img
        src={assetUrl(bg.src)}
        alt={bg.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Campanar · València
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/90">{content.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={orderHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-crust px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-crust/30 transition hover:bg-crust-dark"
          >
            Hacer un encargo
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/70 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-ink"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
