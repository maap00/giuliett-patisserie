import { CONTACT, WA_GENERAL, waLink } from '@/lib/giuliett'
import { PageIntro } from '@/components/giuliett/page-intro'
import { PrimaryAction } from '@/components/giuliett/atoms'
import { Footer } from '@/components/giuliett/sections/footer'
import { IconInstagram, IconMail, IconPhone } from '@/components/giuliett/line-art'
import { Section } from '@/components/giuliett/section'

const contactItems = [
  { label: 'WhatsApp', value: CONTACT.phoneDisplay, href: `tel:+${CONTACT.phoneRaw}`, Icon: IconPhone },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: IconMail },
  { label: 'Instagram', value: CONTACT.instagramHandle, href: CONTACT.instagramUrl, Icon: IconInstagram, external: true },
]

export default function ContactoPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        caps="Hablemos de tu"
        script="próximo pedido"
        description="Contanos qué estás imaginando. Respondemos el mismo día para empezar a darle forma."
        image="/images/hero-caja-cookies.png"
        imageAlt="Caja Giuliett con cookies artesanales"
      />
      <Section tone="lilac-soft" aria-labelledby="canales-titulo">
        <div className="mx-auto max-w-xl">
          <h2 id="canales-titulo" className="tracked text-center text-[13px] font-medium text-primary">
            Encontranos acá
          </h2>
          <ul className="mt-10 flex flex-col gap-4">
            {contactItems.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex min-h-[68px] items-center gap-4 rounded-md bg-surface px-5 text-primary shadow-[var(--shadow-giuliett)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[12px] text-muted-foreground">{label}</span>
                    <span className="truncate text-[15px] font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <PrimaryAction href={waLink(WA_GENERAL)} className="mt-10 w-full">
            Escribinos por WhatsApp
          </PrimaryAction>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
