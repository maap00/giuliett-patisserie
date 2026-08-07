import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Ephesis, Poppins } from 'next/font/google'
import { GlobalNavigation } from '@/components/giuliett/mobile-bottom-nav'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ephesis',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giuliett Pâtisserie · Pastelería francesa en Mendoza',
  description:
    'Pastelería francesa artesanal para empresas, cafeterías y eventos. Cookies con tu marca, macarons, kits y mesas dulces. Mendoza.',
  generator: 'v0.app',
  openGraph: {
    title: 'Giuliett Pâtisserie · Pastelería francesa en Mendoza',
    description:
      'Pastelería francesa artesanal para empresas, cafeterías y eventos. Cookies con tu marca, macarons, kits y mesas dulces.',
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#d8cbe8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${poppins.variable} ${ephesis.variable} bg-background`}>
      <body className="bg-background pb-[calc(92px+env(safe-area-inset-bottom))] font-sans antialiased md:pb-0">
        <GlobalNavigation />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
