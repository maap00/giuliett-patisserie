import { Search, ThumbsUp } from 'lucide-react'
import { CONTACT, WA_GENERAL, waLink } from '@/lib/giuliett'
import { IconInstagram, IconWhatsApp } from '../line-art'

const socialLinks = [
  { label: 'WhatsApp', href: waLink(WA_GENERAL), Icon: IconWhatsApp },
  { label: 'Instagram', href: CONTACT.instagramUrl, Icon: IconInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/giuliettpatisserie', Icon: ThumbsUp },
  { label: 'Google', href: 'https://www.google.com/search?q=Giuliett+P%C3%A2tisserie+Mendoza', Icon: Search },
] as const

/** Cierre de portada: pieza estable fuera del área interactiva del carrusel. */
export function HomeFooter() {
  return (
    <footer className="relative isolate overflow-hidden pt-12 sm:pt-16">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-12 -z-10 bg-surface" />
      <div aria-hidden="true" className="absolute -top-[72px] left-1/2 -z-10 h-[144px] w-[130%] -translate-x-1/2 rounded-[50%] bg-surface" />

      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-6 pb-[calc(116px+env(safe-area-inset-bottom))] pt-14 text-center sm:px-8 sm:pb-16 md:pt-16">
        <p className="tracked text-[10px] font-medium text-primary sm:text-[11px]">Empresas · Cafeterías · Eventos</p>
        <span aria-hidden="true" className="mt-4 h-px w-7 bg-primary/55" />
        <p className="mt-5 max-w-[30ch] text-balance text-[18px] leading-[1.5] text-primary sm:text-[20px]">
          Creamos experiencias dulces únicas
          <br />
          para cada ocasión.
        </p>
        <p className="mt-5 text-[13px] leading-relaxed text-primary/80 sm:text-[14px]">Calidad, diseño y sabor en cada detalle.</p>

        <ul className="mt-8 flex items-center justify-center gap-3.5" aria-label="Redes de Giuliett">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/45 text-primary transition-[background-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground active:scale-[0.96]"
              >
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.6} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
