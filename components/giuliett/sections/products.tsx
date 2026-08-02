'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { PRODUCTS, type Product, waLink } from '@/lib/giuliett'
import { cn } from '@/lib/utils'
import { Pill, PrimaryAction } from '../atoms'
import { IconClose } from '../line-art'
import { Reveal } from '../reveal'
import { Section } from '../section'
import { SectionLockup } from '../section-lockup'

/**
 * 04 · PRODUCTOS — el catálogo visual.
 * Sin precio, sin descripción, sin botón por tarjeta: la foto vende.
 * La grilla se mantiene en 2 columnas en mobile porque el formato
 * vertical del brochure es nativo del teléfono.
 */
export function Products() {
  const [active, setActive] = useState<Product | null>(null)

  return (
    <Section id="productos" tone="cream" aria-labelledby="productos-titulo">
      <Reveal>
        <SectionLockup id="productos-titulo" caps="Nuestros productos" script="Favoritos" />
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 md:mt-14 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <Reveal as="li" key={product.id} delay={i * 80}>
            <ProductCard product={product} onOpen={() => setActive(product)} />
          </Reveal>
        ))}
      </ul>

      <ProductSheet product={active} onClose={() => setActive(null)} />
    </Section>
  )
}

/* ---------------- Tarjeta ---------------- */

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${product.label} ${product.script}`}
      className="group block w-full text-left transition-transform duration-[250ms] ease-out active:scale-[0.99]"
    >
      <div className="relative">
        {/* La foto crece, el marco no. */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-lilac-soft">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 260px, 45vw"
            className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Pill superpuesta al borde superior: el gesto exacto del brochure. */}
        <Pill
          label={product.label}
          script={product.script}
          className="absolute -top-[18px] left-3 group-hover:bg-lilac-deep"
        />
      </div>
    </button>
  )
}

/* ---------------- Bottom sheet ---------------- */

function ProductSheet({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  // Se mantiene montado durante la salida para que la animación termine.
  useEffect(() => {
    if (product) setMounted(true)
  }, [product])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!product) return
    document.addEventListener('keydown', onKeyDown)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previous
    }
  }, [product, onKeyDown])

  if (!mounted) return null

  const open = Boolean(product)

  return (
    <div
      className={cn('fixed inset-0 z-50', open ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!open}
    >
      {/* Backdrop con velo lila */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Cerrar"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-[350ms]',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={product ? `${product.label} ${product.script}` : undefined}
        className={cn(
          'absolute inset-x-0 bottom-0 mx-auto w-full max-w-[520px] rounded-t-lg bg-surface',
          'md:inset-y-0 md:my-auto md:h-fit md:rounded-lg',
          'transition-transform duration-[350ms] [transition-timing-function:var(--ease-sheet)]',
          open ? 'translate-y-0' : 'translate-y-full md:translate-y-6',
        )}
      >
        {product ? (
          <div className="flex flex-col p-6 pb-8">
            <div className="flex items-start justify-between gap-4">
              <div aria-hidden="true" className="mx-auto h-1 w-10 rounded-full bg-border md:hidden" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-auto -mr-1 -mt-1 flex h-11 w-11 items-center justify-center text-primary/60 transition-colors duration-200 hover:text-primary"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-1 aspect-[16/9] w-full overflow-hidden rounded-md bg-lilac-soft">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(min-width: 768px) 480px, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>

            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="tracked text-[13px] font-medium text-primary">{product.label}</span>
              <span className="font-script text-[24px] leading-none text-primary/70">{product.script}</span>
            </p>

            {/* Una línea de deseo + una línea de dato. Nada más. */}
            <p className="mt-3 text-[16px] leading-[1.6] text-primary">{product.desire}</p>
            <p className="mt-1.5 text-[14px] text-muted-foreground">{product.fact}</p>

            <PrimaryAction href={waLink(product.waMessage)} className="mt-6 w-full">
              Consultar por WhatsApp
            </PrimaryAction>
          </div>
        ) : null}
      </div>
    </div>
  )
}
