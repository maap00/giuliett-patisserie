import Image from 'next/image'
import { CLIENTS } from '@/lib/giuliett'
import { ArtOkHand } from './line-art'
import { Reveal } from './reveal'
import { Section } from './section'
import { SectionLockup } from './section-lockup'

/** Prueba social editorial, con los clientes ya configurados para Giuliett. */
export function TrustedClients() {
  return (
    <Section tone="cream" aria-labelledby="clientes-confian">
      <Reveal>
        <div id="clientes-confian">
          <SectionLockup caps="Clientes que" script="confían" />
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-[1040px] items-center gap-10 lg:grid-cols-[132px_minmax(0,1fr)_230px] lg:gap-12">
        <Reveal className="hidden  lg:block" delay={80}>
          <img src="/images/mesero.png" className=" h-auto w-auto text-primary" />
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 text-center sm:grid-cols-4 lg:gap-x-8">
            {CLIENTS.map((client) => (
              <li key={client} className="tracked text-[13px] font-medium text-primary/75 md:text-[15px]">
                {client}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180} className="mx-auto w-full max-w-[190px] lg:max-w-none lg:self-end">
          <Image
            src="/images/gui_wine.png"
            alt="Ilustración de Giu, fundadora de Giuliett"
            width={4500}
            height={4500}
            sizes="(min-width: 1024px) 230px, 190px"
            className="h-auto w-full object-contain"
          />
        </Reveal>
      </div>
    </Section>
  )
}
