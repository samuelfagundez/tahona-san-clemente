import { content } from '../content'

export default function LocationMap() {
  return (
    <section id="ubicacion" className="bg-cream-dark/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crust">
          Cómo llegar
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Estamos en Campanar
        </h2>
        <p className="mt-3 max-w-xl text-ink/75">{content.address.full}</p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10">
          <iframe
            title={`Mapa de ubicación de ${content.name}`}
            src={content.mapEmbedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={content.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink/85"
        >
          Cómo llegar en Google Maps
        </a>
      </div>
    </section>
  )
}
