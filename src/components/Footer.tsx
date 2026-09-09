import { content, phoneHref } from '../content'

export default function Footer() {
  const hasSocial = Boolean(
    content.social.instagram || content.social.facebook || content.social.tiktok,
  )

  return (
    <footer className="bg-ink py-12 text-cream/85">
      <div
        className={`mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 ${hasSocial ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}
      >
        <div>
          <p className="font-display text-xl font-semibold text-cream">{content.shortName}</p>
          <p className="mt-2 text-sm">{content.address.full}</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-cream">Contacto</p>
          <p className="mt-2">
            <a href={phoneHref()} className="hover:text-gold">
              {content.phoneDisplay}
            </a>
          </p>
          {content.email && <p>{content.email}</p>}
          <p className="mt-1 text-cream/60">Lunes a viernes, 7:00 – 21:00</p>
        </div>

        {hasSocial && (
          <div className="text-sm">
            <p className="font-semibold text-cream">Síguenos</p>
            <div className="mt-2 flex gap-4">
              {content.social.instagram && (
                <a
                  href={content.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold underline-offset-4 hover:text-gold"
                >
                  Instagram
                </a>
              )}
              {content.social.facebook && (
                <a
                  href={content.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold underline-offset-4 hover:text-gold"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <p className="mt-10 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {content.name}. Todos los derechos reservados.
      </p>
    </footer>
  )
}
