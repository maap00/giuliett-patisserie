import { CONTACT } from '@/lib/giuliett'
import { DottedX } from '../atoms'
import { ArtFounderWaving, IconInstagram, IconMail, IconPhone } from '../line-art'
import { Reveal } from '../reveal'
import { SectionLockup } from '../section-lockup'
import Image from 'next/image'

/**
 * 09 · FOOTER — cero relleno. Sin newsletter, sin misión, sin mapa
 * del sitio. La marca no tiene treinta páginas; fingirlo la haría
 * parecer más chica, no más grande.
 */
export function Footer() {
  return (
    <footer className="relative -mt-8 rounded-t-xl bg-lilac-deep pb-28 pt-20 md:pb-14 md:pt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Reveal>
              <SectionLockup
                caps="Comunicate con"
                script="Giuliett"
                as="h2"
                className="md:items-start md:text-left"
              />
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-8 flex flex-col items-center gap-4 md:items-start">
                <li>
                  <a
                    href={`tel:+${CONTACT.phoneRaw}`}
                    className="underline-write inline-flex min-h-[44px] items-center gap-3 text-[15px] text-primary opacity-70 transition-opacity duration-200 hover:opacity-100"
                  >
                    <IconPhone className="h-[18px] w-[18px] shrink-0" />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="underline-write inline-flex min-h-[44px] items-center gap-3 break-all text-[15px] text-primary opacity-70 transition-opacity duration-200 hover:opacity-100"
                  >
                    <IconMail className="h-[18px] w-[18px] shrink-0" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-write inline-flex min-h-[44px] items-center gap-3 text-[15px] text-primary opacity-70 transition-opacity duration-200 hover:opacity-100"
                  >
                    <IconInstagram className="h-[18px] w-[18px] shrink-0" />
                    {CONTACT.instagramHandle}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* La fundadora saludando, recortada por el borde inferior. */}
          <Reveal delay={160} className="relative w-[150px] shrink-0 overflow-hidden md:w-[180px]">
            <figure className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
                                    <div
                                      className="relative overflow-hidden rounded-[32px] bg-[#BFB4DC]/20 shadow-[0_20px_48px_-20px_rgb(81_55_92/0.22)]"
                                      style={{ aspectRatio: '2 / 5' }}
                                    >
                                      <Image
                                        src="/images/giu_character.png"
                                        alt="Caja de cookies artesanales con el logo de Giuliett sobre mármol blanco"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 54vw, calc(100vw - 40px)"
                                        className="object-cover"
                                      />
                                    </div>
                                    <figcaption className="sr-only">Pastelería francesa artesanal Giuliett</figcaption>
                                  </figure>
          </Reveal>
        </div>

        <DottedX className="mt-12 opacity-60" />

        <div className="mt-6 flex flex-col items-center gap-1.5 text-[12px] text-primary/60 md:flex-row md:justify-between">
          <p>{CONTACT.city}</p>
          <p>© {new Date().getFullYear()} Giuliett Pâtisserie</p>
        </div>
      </div>
    </footer>
  )
}
