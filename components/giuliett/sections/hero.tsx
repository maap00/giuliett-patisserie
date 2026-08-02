import { CONTACT, WA_GENERAL, waLink } from '@/lib/giuliett'
import { PrimaryAction } from '../atoms'
import { IconWhatsApp } from '../line-art'
import { Reveal } from '../reveal'
import { ScallopAwning } from '../scallop-awning'
import { SectionLockup } from '../section-lockup'
import Image from 'next/image'

/**
 * 01 · HERO
 * Una sola idea: quién es Giuliett y cómo escribirle.
 * Mobile first · foto primero · WhatsApp visible al instante.
 */
export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh flex-col bg-[#FFF8E9] text-[#51375C]">
      <ScallopAwning className="text-[#BFB4DC]" />
      <CheckerboardBand />

      <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
        <Reveal className="flex justify-center lg:justify-start">
          <Logotype />
        </Reveal>

        <div className="mt-10 flex flex-1 flex-col gap-10 sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
           <Reveal delay={180} className="w-full">
              <p className="mt-5 text-center text-[13px] tracking-[0.18em] text-[#51375C]/75 uppercase lg:text-left">
                Empresas · Cafeterías · Eventos
              </p>
            </Reveal>
          
          <Reveal className="w-full lg:w-[54%]" delay={60}>
            <figure className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
              <div
                className="relative overflow-hidden rounded-[32px] bg-[#BFB4DC]/20 shadow-[0_20px_48px_-20px_rgb(81_55_92/0.22)]"
                style={{ aspectRatio: '4 / 5' }}
              >
                <Image
                  src="/images/producto-mesas.png"
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

          <div className="flex w-full flex-col items-center lg:w-[46%] lg:items-start">
            <Reveal delay={120} className="w-full">
              <SectionLockup
                as="h1"
                caps="Pastelería"
                script="Francesa"
                size="lg"
                align="center"
                className="lg:items-start lg:text-left [&_span:first-child]:text-[#51375C] [&_span:last-child]:text-[#51375C]"
                capsClassName="font-light"
                scriptClassName="text-[#51375C]"
              />
            </Reveal>

           

            <Reveal delay={240} className="mt-10 flex w-full flex-col items-center lg:items-start">
              <PrimaryAction
                href={waLink(WA_GENERAL)}
                className="w-full max-w-[400px] bg-[#51375C] text-[#FFF8E9] hover:bg-[#4F100B] hover:shadow-[0_16px_40px_-14px_rgb(79_16_11/0.35)] lg:w-auto lg:min-w-[280px] lg:max-w-none"
                ariaLabel="Escribinos por WhatsApp"
              >
                Escribinos por WhatsApp
              </PrimaryAction>

              <p className="mt-5 text-center text-[12px] tracking-[0.06em] text-[#9C8065] lg:text-left">
                {CONTACT.city} 
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <a
        href={waLink(WA_GENERAL)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#51375C] text-[#FFF8E9] shadow-[0_12px_32px_-10px_rgb(81_55_92/0.45)] transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] sm:bottom-8 sm:right-8 lg:hidden"
      >
        <IconWhatsApp className="h-6 w-6" strokeWidth={1.7} />
      </a>
    </section>
  )
}

function Logotype() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <span className="font-script text-[48px] leading-none text-[#51375C] sm:text-[56px] lg:text-[64px]">
        Giuliett
      </span>
      <span className="tracked mt-2.5 text-[10px] font-medium text-[#9C8065] sm:text-[11px]">Pâtisserie</span>
    </div>
  )
}

/** Franja ajedrezada del brochure — sólo decoración de hero. */
function CheckerboardBand() {
  return (
    <div aria-hidden="true" className="h-3 w-full sm:h-3.5">
      <svg viewBox="0 0 120 12" preserveAspectRatio="none" className="block h-full w-full">
        <defs>
          <pattern id="hero-checker" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#BFB4DC" />
            <rect x="6" y="6" width="6" height="6" fill="#BFB4DC" />
            <rect x="6" width="6" height="6" fill="#E1B0AC" opacity="0.55" />
            <rect y="6" width="6" height="6" fill="#E1B0AC" opacity="0.55" />
          </pattern>
        </defs>
        <rect width="120" height="12" fill="url(#hero-checker)" />
      </svg>
    </div>
  )
}
