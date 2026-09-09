import { Helmet } from 'react-helmet-async'
import { content } from '../content'

export default function Seo() {
  const { name, tagline, metaDescription, keywords, siteUrl, address, geo, phone, priceRange, rating, social, openingHoursSchema, gallery } = content

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name,
        inLanguage: 'es-ES',
      },
      {
        '@type': 'Bakery',
        '@id': `${siteUrl}#business`,
        name,
        description: metaDescription,
        url: siteUrl,
        telephone: phone,
        priceRange,
        image: gallery.map((g) => `${siteUrl}${g.src.replace(/^\//, '')}`),
        address: {
          '@type': 'PostalAddress',
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.lat,
          longitude: geo.lng,
        },
        openingHoursSpecification: openingHoursSchema.map((block) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: block.dayOfWeek,
          opens: block.opens,
          closes: block.closes,
        })),
        aggregateRating: rating.count
          ? {
              '@type': 'AggregateRating',
              ratingValue: rating.value,
              reviewCount: rating.count,
            }
          : undefined,
        sameAs: [social.instagram, social.facebook, social.tiktok].filter(Boolean),
        keywords: keywords.join(', '),
      },
    ],
  }

  return (
    <Helmet>
      <title>{`${name} — ${tagline}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${name} — ${tagline}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:image" content={`${siteUrl}${gallery[0].src.replace(/^\//, '')}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} — ${tagline}`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}${gallery[0].src.replace(/^\//, '')}`} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
