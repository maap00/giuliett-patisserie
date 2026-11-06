import type { Metadata } from 'next'
import { Hero } from '@/components/giuliett/sections/hero'

export const metadata: Metadata = {
  openGraph: {
    title: 'Giuliett Pâtisserie · Pastelería francesa en Mendoza',
    description:
      'Pastelería francesa artesanal para empresas, cafeterías y eventos. Cookies con tu marca, macarons, kits y mesas dulces.',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://giuliettpatisserie.com/images/giuliett-og-2026.jpg',
        width: 1600,
        height: 900,
        alt: 'Giuliett Pâtisserie · Pastelería francesa en Mendoza',
      },
    ],
  },
}

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  )
}
