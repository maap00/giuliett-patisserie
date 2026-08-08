'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { PRODUCT_CATEGORY_OPTIONS, PRODUCTS } from '@/lib/products'
import type { ProductCategory } from '@/types/product'

type ProductCatalogProps = {
  initialCategory: ProductCategory
}

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory)
  const products = PRODUCTS.filter((product) => product.category === selectedCategory)

  return (
    <div>
      <div className="flex justify-center md:justify-end">
        <label className="sr-only" htmlFor="product-category">
          Categoría de productos
        </label>
        <select
          id="product-category"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value as ProductCategory)}
          className="min-h-[46px] border-b border-primary/40 bg-transparent px-1 pr-9 text-[14px] text-primary outline-none transition-colors duration-200 focus-visible:border-primary"
        >
          {PRODUCT_CATEGORY_OPTIONS.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:mt-14 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-x-10">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/productos/${product.slug}`} className="group block min-w-0" aria-label={`Ver ${product.name}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-lilac-soft">
                <Image
                  src={product.imagePrimary}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 30vw, 46vw"
                  className="object-cover transition-opacity duration-[250ms] ease-out md:group-hover:opacity-0"
                />
                <Image
                  src={product.imageSecondary}
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 30vw, 46vw"
                  className="hidden object-cover opacity-0 transition-opacity duration-[250ms] ease-out md:block md:group-hover:opacity-100"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <h2 className="text-[14px] font-medium leading-snug text-primary md:text-[15px]">{product.name}</h2>
                <p className="text-[13px] text-muted-foreground">{priceFormatter.format(product.price)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
