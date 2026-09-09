import { useState } from 'react'
import { content, orderHref, phoneHref } from '../content'

const NAV = [
  { href: '#sobre-nosotros', label: 'Nosotros' },
  { href: '#galeria', label: 'Galería' },
  { href: '#horario', label: 'Horario' },
  { href: '#ubicacion', label: 'Cómo llegar' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-xl font-semibold text-ink">
          {content.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition hover:text-crust"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={phoneHref()}
            className="rounded-full border border-cocoa px-4 py-2 text-sm font-semibold text-cocoa-dark transition hover:bg-cocoa hover:text-cream"
          >
            Llamar
          </a>
          <a
            href={orderHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-crust px-4 py-2 text-sm font-semibold text-cream transition hover:bg-crust-dark"
          >
            Hacer un encargo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream px-4 pb-5 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink/85 hover:bg-cream-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={phoneHref()}
              className="rounded-full border border-cocoa px-4 py-2.5 text-center text-sm font-semibold text-cocoa-dark"
            >
              Llamar
            </a>
            <a
              href={orderHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-crust px-4 py-2.5 text-center text-sm font-semibold text-cream"
            >
              Hacer un encargo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
