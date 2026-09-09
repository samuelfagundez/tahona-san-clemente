import { content } from '../content'

export default function Hours() {
  return (
    <section id="horario" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crust">Horario</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Cuándo encontrarnos
          </h2>
          <dl className="mt-6 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/40">
            {content.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between px-5 py-3 text-sm">
                <dt className="font-medium text-ink">{h.day}</dt>
                <dd className="text-ink/70">{h.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-ink/60">
            Abrimos de lunes a viernes desde primera hora. Sábados y domingos permanecemos cerrados.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 rounded-3xl bg-cocoa/10 p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cocoa-dark">
              Precio medio
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">
              {content.priceRangeDisplay}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink/75">
            Comer en el local o para llevar, con desayunos y cafés. Aseo y entrada accesibles. Se
            aceptan tarjeta de crédito, débito y pago sin contacto.
          </p>
        </div>
      </div>
    </section>
  )
}
