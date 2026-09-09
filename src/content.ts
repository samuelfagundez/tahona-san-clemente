// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 9 de septiembre de 2026.
// No hay redes sociales publicadas por el negocio: los campos de `social`
// se dejan vacíos a propósito (no se inventan).

export const content = {
  name: 'Tahona San Clemente',
  shortName: 'Tahona San Clemente',
  tagline: 'Panadería con obrador y cafetería en Campanar, València',
  description:
    'Tahona San Clemente es una panadería con obrador y cafetería en el barrio de Campanar, en València. Cada mañana horneamos pan, bollería y salados, y los servimos con un buen café en un local pequeño y acogedor donde el trato es cercano y familiar. Es el sitio al que venir a desayunar antes de trabajar, a por la barra del día o a llevarte unas napolitanas recién hechas. También preparamos arroz al horno y otros platos caseros para llevar, todo a precios de barrio.',
  metaDescription:
    'Panadería, obrador y cafetería en Campanar, València. Pan y bollería recién horneados cada día, desayunos, buen café y platos caseros para llevar.',
  keywords: [
    'Tahona San Clemente',
    'panadería Campanar',
    'panadería Valencia',
    'desayunos Campanar',
    'cafetería Campanar',
    'pan artesano Valencia',
    'bollería Valencia',
    'Campanar',
  ],
  priceRange: '1 € - 10 €',
  priceRangeDisplay: '1 € – 10 € por persona',
  cuisine: 'Panadería y cafetería',

  rating: { value: 4.3, count: 451, countDisplay: '451 reseñas' },
  highlights: [
    'Pan, bollería y salados horneados cada mañana en el propio obrador.',
    'Desayunos con buen café y opciones sin lactosa, con un trato cercano y familiar.',
    'Arroz al horno y platos caseros preparados para llevar.',
    'Local acogedor en Campanar, con mesa para comer aquí o servicio para llevar. Entrada y aseo accesibles.',
  ],

  address: {
    streetAddress: 'Carrer de Sant Clement, 2',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46015',
    addressCountry: 'ES',
    full: 'Carrer de Sant Clement, 2, Campanar, 46015 València, Valencia',
  },
  geo: { lat: 39.4901623, lng: -0.4018123 },

  phone: '+34 665 87 85 07',
  phoneDisplay: '665 87 85 07',
  whatsappNumber: '34665878507',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/tahona-san-clemente/',

  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: '7:00 – 21:00' },
    { day: 'Martes', hours: '7:00 – 21:00' },
    { day: 'Miércoles', hours: '7:00 – 21:00' },
    { day: 'Jueves', hours: '7:00 – 21:00' },
    { day: 'Viernes', hours: '7:00 – 21:00' },
    { day: 'Sábado', hours: 'Cerrado' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00',
    },
  ],

  gallery: [
    {
      src: '/gallery/tahona-san-clemente-obrador-interior.jpg',
      alt: 'Interior de Tahona San Clemente, panadería y cafetería en Campanar, València, con el mostrador lleno de bollería',
    },
    {
      src: '/gallery/tahona-san-clemente-cafe-y-bolleria.jpg',
      alt: 'Dos cafés con leche y bollería artesana recién hecha en Tahona San Clemente',
    },
    {
      src: '/gallery/tahona-san-clemente-tostadas-y-cafe.jpg',
      alt: 'Desayuno de tostadas con tomate y café en Tahona San Clemente, Campanar',
    },
    {
      src: '/gallery/tahona-san-clemente-bolleria-artesana.jpg',
      alt: 'Palmera de chocolate y berlina recién horneadas en Tahona San Clemente',
    },
    {
      src: '/gallery/tahona-san-clemente-napolitanas-de-chocolate.jpg',
      alt: 'Napolitanas de chocolate recién hechas para llevar de Tahona San Clemente',
    },
    {
      src: '/gallery/tahona-san-clemente-vitrina-de-salados.jpg',
      alt: 'Vitrina con empanadillas y salados horneados en Tahona San Clemente',
    },
    {
      src: '/gallery/tahona-san-clemente-arroz-al-horno.jpg',
      alt: 'Arroz al horno casero para llevar de Tahona San Clemente, Campanar',
    },
    {
      src: '/gallery/tahona-san-clemente-desayuno-en-la-terraza.jpg',
      alt: 'Desayuno con pan con tomate, zumo de naranja y café en la terraza de Tahona San Clemente',
    },
    {
      src: '/gallery/tahona-san-clemente-mostrador.jpg',
      alt: 'Mostrador de Tahona San Clemente con la luz de la mañana sobre el pan y la bollería',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Tahona San Clemente, Carrer de Sant Clement 2, 46015 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=1560259174807620344&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Tahona San Clemente y tengo una consulta.'
export const WHATSAPP_ORDER_MESSAGE =
  '¡Hola! Vengo de la página web de Tahona San Clemente y me gustaría hacer un encargo.'

// Sin sistema de pedidos propio: el encargo cae siempre a WhatsApp.
export const orderLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function orderHref(): string {
  return orderLink || whatsappLink(WHATSAPP_ORDER_MESSAGE)
}

export function phoneHref(): string {
  return `tel:${content.phone.replace(/\s+/g, '')}`
}
