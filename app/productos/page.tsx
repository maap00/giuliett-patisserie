import { ProductCatalog } from '@/components/giuliett/product-catalog'
import { Section } from '@/components/giuliett/section'
import { SectionLockup } from '@/components/giuliett/section-lockup'
import { isProductCategory } from '@/lib/products'
import { PRODUCT_CATEGORIES } from '@/types/product'

type ProductosPageProps = {
  searchParams: Promise<{ categoria?: string }>
}

export default async function ProductosPage({ searchParams }: ProductosPageProps) {
  const { categoria } = await searchParams
  const categoryParam = categoria ?? null
  const initialCategory = isProductCategory(categoryParam) ? categoryParam : PRODUCT_CATEGORIES.CLASSIC_CAKES

  return (
    <main>
      <Section tone="cream" layered={false} className="pb-20 pt-12 md:pb-28 md:pt-20" aria-labelledby="productos-titulo">
        <h1 id="productos-titulo" className="sr-only">
          Nuestros productos
        </h1>
        <SectionLockup caps="Nuestros productos" script="Favoritos" size="lg" />
        <ProductCatalog initialCategory={initialCategory} />
      </Section>
    </main>
  )
}
