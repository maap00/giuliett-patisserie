import { AUDIENCES } from '@/lib/giuliett'
import { cn } from '@/lib/utils'
import { AnchorLink, DottedX, DottedY, Pill } from '../atoms'
import { ArtCoffeeBag, ArtWineGlasses } from '../line-art'
import { Reveal } from '../reveal'
import { Section } from '../section'
import { SectionLockup } from '../section-lockup'

const ART = {
  empresas: ArtWineGlasses,
  cafeterias: ArtCoffeeBag,
} as const

/**
 * 02 · PARA QUIÉN — la pantalla más estratégica del sitio.
 * Segmenta el tráfico difuso de Instagram en dos intenciones reales.
 * Sin fotografía: line art exclusivamente, porque acá se procesa
 * información y una foto competiría.
 */
export function Audiences() {
  return (
    <Section tone="cream" aria-labelledby="soluciones-titulo">
      <Reveal>
        <SectionLockup id="soluciones-titulo" caps="Soluciones dulces" script="para cada ocasión" />
      </Reveal>

      <div className="mt-14 flex flex-col items-stretch md:mt-16 md:flex-row md:justify-center md:gap-0">
        {AUDIENCES.map((audience, i) => {
          const Art = ART[audience.id as keyof typeof ART]

          return (
            <div key={audience.id} className="contents">
              {/* Frontera entre audiencias: horizontal en mobile, vertical en desktop */}
              {i > 0 ? (
                <>
                  <DottedX className="my-12 md:hidden" />
                  <DottedY className="mx-10 hidden md:block lg:mx-16" />
                </>
              ) : null}

              <Reveal className="flex flex-1 flex-col items-center md:max-w-[420px]" delay={i * 80}>
                {/* Círculo blanco con ilustración de línea */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface md:h-[120px] md:w-[120px]">
                  <Art className="h-12 w-12 text-primary md:h-14 md:w-14" />
                </div>

                <Pill label={audience.pill} className="mt-5 text-center" />

                <ul className="mt-6 flex w-full flex-col gap-5">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet.title} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary"
                      />
                      <div>
                        <h3 className="text-[16px] font-semibold leading-snug text-primary">{bullet.title}</h3>
                        <p className="mt-1 text-[14px] leading-[1.6] text-muted-foreground">{bullet.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={cn('mt-6 self-start')}>
                  <AnchorLink href="#productos">Ver productos</AnchorLink>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
