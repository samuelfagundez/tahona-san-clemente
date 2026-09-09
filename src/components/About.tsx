import { content } from '../content'

export default function About() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crust">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Pan de verdad, recién hecho en Campanar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">{content.description}</p>

          <div className="mt-6 flex items-center gap-2 text-ink">
            <span className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                </svg>
              ))}
            </span>
            <span className="font-semibold">{content.rating.value}</span>
            <span className="text-ink/60">· {content.rating.countDisplay} en Google</span>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {content.highlights.map((h) => (
            <li
              key={h}
              className="rounded-2xl border border-cocoa/20 bg-cream-dark/60 p-5 text-sm leading-relaxed text-ink/85"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
