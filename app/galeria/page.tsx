import Image from 'next/image'
import { PageIntro } from '@/components/giuliett/page-intro'
import { Section } from '@/components/giuliett/section'

const galleryImages = [
  {
    src: '/images/producto-cookies.png',
    alt: 'Cookies artesanales glaseadas con el logo de Giuliett sobre mármol blanco',
  },
  { src: '/images/producto-macarons.png', alt: 'Macarons artesanales en tonos lavanda y crema sobre lino' },
  { src: '/images/producto-kits.png', alt: 'Caja de regalo lila con macarons y cinta de raso' },
  { src: '/images/producto-mesas.png', alt: 'Mesa dulce montada con macarons, flores y cerámica lila' },
  { src: '/images/manifiesto-manos.png', alt: 'Manos decorando una cookie glaseada a mano' },
  { src: '/images/cierre-mesa-dulce.png', alt: 'Mesa dulce terminada para un evento' },
]

export default function GaleriaPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Galería"
        caps="Hecho para"
        script="compartir"
        description="Una selección de detalles, sabores y mesas que tomaron forma en nuestro obrador."
        image="/images/hero-caja-cookies.png"
        imageAlt="Caja Giuliett con cookies artesanales"
      />
      <Section tone="white" aria-labelledby="galeria-titulo">
        <h2 id="galeria-titulo" className="sr-only">
          Galería de Giuliett Pâtisserie
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <li
              key={image.src}
              className={index === 0 || index === 5 ? 'col-span-2 md:col-span-1' : undefined}
            >
              <figure className="relative aspect-[4/5] overflow-hidden rounded-lg bg-lilac-soft">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </figure>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
