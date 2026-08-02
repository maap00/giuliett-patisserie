import { REASONS } from '@/lib/giuliett'
import { ArtEiffel, ArtFounderIcon, ArtGiftBox, ArtVan } from '../line-art'
import { Reveal } from '../reveal'
import { Section } from '../section'
import { SectionLockup } from '../section-lockup'

const ART = {
  francia: ArtEiffel,
  entregas: ArtVan,
  presentacion: ArtGiftBox,
  fundadora: ArtFounderIcon,
} as const

/**
 * 05 · DIFERENCIALES — sección de respiro después del pico de densidad.
 * Cuatro señales de dos palabras, sin descripción: los íconos explican.
 * 11 palabras en toda la pantalla.
 */
export function Reasons() {
  return (
    <Section tone="white" breather aria-labelledby="razones-titulo">
      <Reveal>
        <SectionLockup id="razones-titulo" caps="¿Por qué nos eligen?" size="sm" />
      </Reveal>

      <ul className="mx-auto mt-12 grid max-w-[720px] grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
        {REASONS.map((reason, i) => {
          const Art = ART[reason.id]

          return (
            <Reveal as="li" key={reason.id} delay={i * 80} className="flex flex-col items-center text-center">
              <Art className="h-11 w-11 text-primary md:h-12 md:w-12" />
              <p className="mt-3 text-[14px] font-medium leading-snug text-primary md:text-[15px]">{reason.text}</p>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
