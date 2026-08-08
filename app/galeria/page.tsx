import Image from 'next/image'
import { PageIntro } from '@/components/giuliett/page-intro'
import { Section } from '@/components/giuliett/section'
import { PRODUCT_CATEGORIES } from '@/types/product'

const productCategories = [
  {
    name: 'Tortas clásicas',
    src: '/images/producto-cookies.png',
    alt: 'Cookies artesanales glaseadas con el logo de Giuliett sobre mármol blanco',
    imageFirstOnDesktop: false,
    category: PRODUCT_CATEGORIES.CLASSIC_CAKES,
  },
  {
    name: 'Tortas personalizadas',
    src: '/images/producto-mesas.png',
    alt: 'Mesa dulce montada con macarons, flores y cerámica lila',
    imageFirstOnDesktop: true,
    category: PRODUCT_CATEGORIES.CUSTOM_CAKES,
  },
  {
    name: 'Galletas personalizadas',
    src: '/images/manifiesto-manos.png',
    alt: 'Manos decorando una cookie glaseada a mano',
    imageFirstOnDesktop: false,
    category: PRODUCT_CATEGORIES.CUSTOM_COOKIES,
  },
  {
    name: 'Boxes',
    src: '/images/producto-kits.png',
    alt: 'Caja de regalo lila con macarons y cinta de raso',
    imageFirstOnDesktop: true,
    category: PRODUCT_CATEGORIES.BOXES,
  },
] as const

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
      <Section tone="white" aria-labelledby="galeria-titulo" innerClassName="max-w-[1280px] px-5 md:px-8">
        <h2 id="galeria-titulo" className="sr-only">
          Categorías de productos Giuliett Pâtisserie
        </h2>
        <ul className="flex flex-col gap-16 md:gap-0">
          {productCategories.map((category) => (
            <li key={category.name} className="grid md:min-h-[440px] md:grid-cols-2 lg:min-h-[520px]">
              <div
                className={`order-1 flex min-h-[240px] flex-col items-center justify-center bg-background px-8 py-14 text-center md:min-h-0 md:px-12 lg:px-16 ${
                  category.imageFirstOnDesktop ? 'md:order-2' : ''
                }`}
              >
                <h3 className="tracked max-w-[14ch] text-[20px] font-medium leading-[1.25] text-primary md:text-[26px] lg:text-[32px]">
                  {category.name}
                </h3>
                <a
                  href={`/productos?categoria=${category.category}`}
                  className="mt-8 inline-flex min-h-[44px] items-center border-b border-primary/40 text-[13px] text-primary transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary"
                >
                  Ver todos los productos <span aria-hidden="true">→</span>
                </a>
              </div>
              <figure
                className={`relative order-2 aspect-[4/3] overflow-hidden bg-lilac-soft md:aspect-auto md:min-h-0 ${
                  category.imageFirstOnDesktop ? 'md:order-1' : ''
                }`}
              >
                <Image
                  src={category.src}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
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
