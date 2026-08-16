/* Fuente única de verdad: contacto, copy de productos y audiencias. */

export const CONTACT = {
  phoneDisplay: '+54 9 261 713 7765',
  phoneRaw: '5492617137765',
  email: 'giuliettpatisserie@giuliett.com',
  instagramHandle: '@giuliettpatisserie',
  instagramUrl: 'https://instagram.com/giuliettpatisserie',
  city: 'Mendoza, Argentina',
} as const

/** Abre WhatsApp con un mensaje pre-escrito como lo escribiría el cliente. */
export function waLink(message: string) {
  return `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`
}

export const WA_GENERAL = 'Hola Giuliett, quiero hacer una consulta.'

export type EventImage = {
  image: string
  alt: string
  /** Copy opcional superpuesto en la parte inferior de la fotografía. */
  text?: string
}

/** Fotografías para las tres propuestas de Eventos. */
export const EVENTOS = {
  bodas: [
    {
      image: '/images/cierre-mesa-dulce.png',
      alt: 'Mesa dulce con macarons, tartas y cookies sobre stands de cerámica lila',
      text: 'Mesa dulce para bodas',
    },
    {
      image: '/images/producto-mesas.png',
      alt: 'Mesa dulce montada con macarons, flores y cerámica lila',
    },
  ],
  empresas: [
    {
      image: '/images/producto-kits.png',
      alt: 'Caja de regalo lila con macarons y cinta de raso',
      text: 'Regalos corporativos personalizados',
    },
    {
      image: '/images/producto-cookies.png',
      alt: 'Cookies artesanales glaseadas con el logo de Giuliett sobre mármol blanco',
    },
  ],
  celebraciones: [
    {
      image: '/images/producto-mesas.png',
      alt: 'Mesa dulce montada con macarons, flores y cerámica lila',
      text: 'Detalles para celebrar',
    },
    {
      image: '/images/producto-macarons.png',
      alt: 'Macarons artesanales en tonos lavanda y crema apilados sobre lino',
    },
  ],
} as const satisfies Record<'bodas' | 'empresas' | 'celebraciones', readonly EventImage[]>

export type Product = {
  id: string
  label: string
  script: string
  image: string
  alt: string
  desire: string
  fact: string
  waMessage: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'cookies',
    label: 'Cookies',
    script: 'con tu marca',
    image: '/images/producto-cookies.png',
    alt: 'Cookies artesanales glaseadas con el logo de Giuliett sobre mármol blanco',
    desire: 'Tu logo, glaseado a mano, una por una.',
    fact: 'Desde 20 unidades.',
    waMessage: 'Hola Giuliett, me interesan las cookies con mi logo.',
  },
  {
    id: 'macarons',
    label: 'Macarons',
    script: 'artesanales',
    image: '/images/producto-macarons.png',
    alt: 'Macarons artesanales en tonos lavanda y crema apilados sobre lino',
    desire: 'Receta francesa. Sin conservantes.',
    fact: 'Desde 24 unidades.',
    waMessage: 'Hola Giuliett, quiero consultar por macarons.',
  },
  {
    id: 'kits',
    label: 'Kits & Boxes',
    script: 'personalizados',
    image: '/images/producto-kits.png',
    alt: 'Caja de regalo lila abierta con una hilera de macarons y cinta de raso',
    desire: 'Elegís los sabores, nosotros la presentación.',
    fact: 'Desde 10 cajas.',
    waMessage: 'Hola Giuliett, me interesan los kits personalizados.',
  },
  {
    id: 'mesas',
    label: 'Mesas Dulces',
    script: 'para eventos',
    image: '/images/producto-mesas.png',
    alt: 'Mesa dulce montada con stands de cerámica lila, macarons y flores secas',
    desire: 'Montamos todo. Vos recibís a tu gente.',
    fact: 'Consultamos según evento.',
    waMessage: 'Hola Giuliett, estoy organizando un evento.',
  },
]

export type Audience = {
  id: string
  pill: string
  bullets: { title: string; text: string }[]
}

export const AUDIENCES: Audience[] = [
  {
    id: 'empresas',
    pill: 'Empresas',
    bullets: [
      { title: 'Regalos corporativos', text: 'El detalle que se comenta después.' },
      { title: 'Kits de bienvenida', text: 'El primer día no se olvida.' },
      { title: 'Catering', text: 'Mesas dulces para reuniones que importan.' },
    ],
  },
  {
    id: 'cafeterias',
    pill: 'Cafeterías & Locales',
    bullets: [
      { title: 'Pastelería para vitrina', text: 'Producto de autor, fresco, con rotación semanal.' },
      { title: 'Cookies con tu marca', text: 'Volvete memorable.' },
    ],
  },
]

export const REASONS = [
  { id: 'francia', text: 'Formación en Francia', Image: '/images/alfajores.png' },
  { id: 'entregas', text: 'Entregas a domicilio', Image: '/images/alfajores.png' },
  { id: 'presentacion', text: 'Presentación premium', Image: '/images/alfajores.png' },
  { id: 'fundadora', text: 'Hablás con la fundadora', Image: '/images/founter.png' },
] as const

export const STEPS = [
  { n: '1', title: 'Contanos', text: 'Un mensaje alcanza. Sin compromiso.' },
  { n: '2', title: 'Diseñamos', text: 'Sabores, cantidades, tu marca.' },
  { n: '3', title: 'Entregamos', text: 'El día que lo necesitás.' },
] as const

export const CLIENTS = ['LTN', 'Marisolfa', 'UltraTex', 'Andreu'] as const
