import { FramedPhoto, PrimaryAction } from '@/components/giuliett/atoms'
import { Reveal } from '@/components/giuliett/reveal'
import { Section } from '@/components/giuliett/section'
import { waLink } from '@/lib/giuliett'

const eventProposals = [
  {
    id: 'bodas',
    eyebrow: '01 · Bodas',
    title: 'Mucho más que una mesa dulce.',
    paragraphs: [
      'Creamos experiencias dulces totalmente personalizadas para uno de los días más importantes de sus vidas. Los acompañamos desde el asesoramiento inicial hasta la producción artesanal, el traslado y el montaje, cuidando cada detalle para que todo salga perfecto.',
    ],
    cta: 'Hablemos de tu boda',
    message: 'Hola Giuliett, quisiera solicitar presupuesto para una boda.',
    image: '/images/cierre-mesa-dulce.png',
    imageAlt: 'Mesa dulce con macarons, tartas y cookies sobre stands de cerámica lila',
    tone: 'cream',
    imageFirstOnDesktop: false,
    closing: undefined,
  },
  {
    id: 'empresas',
    eyebrow: '02 · Empresas',
    title: 'Regalos y experiencias que dejan huella.',
    paragraphs: [
      'Desarrollamos propuestas gastronómicas personalizadas para empresas, eventos corporativos, lanzamientos, acciones de marketing y regalos institucionales.',
      'Incorporamos la identidad de tu marca en cada detalle para crear una experiencia memorable.',
    ],
    cta: 'Hablemos de tu proyecto',
    message: 'Hola Giuliett, quisiera consultar por eventos corporativos.',
    image: '/images/producto-kits.png',
    imageAlt: 'Caja de regalo lila con macarons y cinta de raso',
    tone: 'white',
    imageFirstOnDesktop: true,
    closing: undefined,
  },
  {
    id: 'celebraciones',
    eyebrow: '03 · Celebraciones',
    title: 'Cada momento especial merece un detalle único.',
    paragraphs: [
      'Cumpleaños, bautismos, comuniones, baby showers, aniversarios y mucho más.',
      'Diseñamos propuestas a medida con mesas dulces, tortas, macarons y detalles pensados especialmente para vos.',
    ],
    closing: 'Contanos tu idea y creemos juntos una propuesta única.',
    cta: 'Contanos tu idea',
    message: 'Hola Giuliett, quiero mi presupuesto para una celebración.',
    image: '/images/producto-mesas.png',
    imageAlt: 'Mesa dulce montada con macarons, flores y cerámica lila',
    tone: 'lilac-soft',
    imageFirstOnDesktop: false,
  },
] as const

export default function EventosPage() {
  return (
    <main>
      {eventProposals.map((proposal, index) => (
        <EventSection key={proposal.id} proposal={proposal} first={index === 0} />
      ))}
    </main>
  )
}

type EventProposal = (typeof eventProposals)[number]

function EventSection({ proposal, first }: { proposal: EventProposal; first: boolean }) {
  return (
    <Section tone={proposal.tone} layered={!first} className={first ? 'pt-12 md:pt-20' : undefined} aria-labelledby={proposal.id}>
      <div className="grid gap-10 md:gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal
          className={`order-1 w-full ${proposal.imageFirstOnDesktop ? 'lg:order-1' : 'lg:order-2'}`}
          delay={40}
        >
          <FramedPhoto
            src={proposal.image}
            alt={proposal.imageAlt}
            ratio="4/5"
            lifted
            className="w-full transition-transform duration-[350ms] ease-out lg:hover:-translate-y-1"
            sizes="(min-width: 1024px) 50vw, calc(100vw - 48px)"
          />
        </Reveal>

        <div className={`order-2 flex flex-col items-start ${proposal.imageFirstOnDesktop ? 'lg:order-2' : 'lg:order-1'}`}>
          <Reveal delay={100}>
            <p className="tracked text-[30px] font-medium text-muted-foreground" >{proposal.eyebrow}</p>
          </Reveal>
          <Reveal delay={160}>
            <h1 id={proposal.id} className="mt-5 max-w-[18ch] text-balance text-[30px] font-light leading-[1.18] text-primary md:text-[40px] lg:text-[46px]">
              {proposal.title}
            </h1>
          </Reveal>
          <Reveal delay={220} className="max-w-[52ch]">
            <div className="mt-7 space-y-4 text-[15px] leading-[1.7] text-muted-foreground md:text-[16px]">
              {proposal.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {proposal.closing ? <p className="text-primary">{proposal.closing}</p> : null}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <PrimaryAction href={waLink(proposal.message)} className="mt-9 w-full sm:w-auto">
              {proposal.cta}
            </PrimaryAction>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
