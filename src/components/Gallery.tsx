import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { content } from '../content'
import { assetUrl } from '../lib/asset'

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section id="galeria" className="bg-cream-dark/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crust">Galería</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Así es Tahona San Clemente
        </h2>
      </div>

      <div className="relative mt-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {content.gallery.map((photo) => (
              <div
                key={photo.src}
                className="min-w-0 flex-[0_0_82%] px-2 sm:flex-[0_0_46%] md:flex-[0_0_32%]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src={assetUrl(photo.src)}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex gap-1.5">
            {content.gallery.map((photo, i) => (
              <span
                key={photo.src}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? 'w-6 bg-crust' : 'w-1.5 bg-ink/20'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Foto anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:bg-ink hover:text-cream"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Foto siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:bg-ink hover:text-cream"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
