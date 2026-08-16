'use client'

import Image from 'next/image'
import { useRef, useState, type PointerEvent } from 'react'
import { PRODUCTS } from '@/lib/giuliett'
import { cn } from '@/lib/utils'

type DragState = {
  pointerId: number
  startX: number
  startScrollLeft: number
}

type CarouselSlide = {
  id?: string
  image: string
  alt: string
  text?: string
  label?: string
  script?: string
}

type HeroCarouselProps = {
  /** Slides opcionales para reutilizar el gesto de carrusel fuera del hero. */
  slides?: readonly CarouselSlide[]
  /** Mantiene la proporción de la fotografía que el carrusel reemplaza. */
  ratio?: '4/5' | '16/9' | '4/3' | '1/1'
  sizes?: string
  className?: string
  showProductButton?: boolean
  showIndicators?: boolean
  ariaLabel?: string
}

const productSlides: readonly CarouselSlide[] = PRODUCTS.map((product) => ({
  id: product.id,
  image: product.image,
  alt: product.alt,
  label: product.label,
  script: product.script,
}))

/**
 * Native horizontal scrolling gives touch the same direct feel as an image
 * post. Pointer handling is limited to a mouse so mobile keeps its browser
 * scrolling physics and scroll snap settles every gesture naturally.
 */
export function HeroCarousel({
  slides,
  ratio = '4/5',
  sizes = '(min-width: 1024px) 54vw, calc(100vw - 40px)',
  className,
  showProductButton = true,
  showIndicators = true,
  ariaLabel = 'Productos Giuliett',
}: HeroCarouselProps) {
  const carouselSlides = slides ?? productSlides
  const viewportRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<DragState | null>(null)
  const animationFrame = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragging, setDragging] = useState(false)

  const updateActiveSlide = () => {
    const viewport = viewportRef.current
    if (!viewport) return

    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth)
    setActiveIndex(Math.min(carouselSlides.length - 1, Math.max(0, nextIndex)))
  }

  const handleScroll = () => {
    if (animationFrame.current !== null) return

    animationFrame.current = window.requestAnimationFrame(() => {
      animationFrame.current = null
      updateActiveSlide()
    })
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return

    const viewport = viewportRef.current
    if (!viewport) return

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
    }
    viewport.setPointerCapture(event.pointerId)
    setDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const drag = dragRef.current
    if (!viewport || !drag || event.pointerId !== drag.pointerId) return

    viewport.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX)
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const drag = dragRef.current
    if (!viewport || !drag || event.pointerId !== drag.pointerId) return

    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId)
    dragRef.current = null
    setDragging(false)
    updateActiveSlide()
  }

  return (
    <div className="w-full">
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label={ariaLabel}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          'flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden rounded-[32px] bg-[#BFB4DC]/20',
          'touch-pan-x select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'shadow-[0_20px_48px_-20px_rgb(81_55_92/0.22)]',
          dragging ? 'cursor-grabbing' : 'cursor-grab',
          className,
        )}
      >
        {carouselSlides.map((slide, index) => (
          <figure
            key={slide.id ?? slide.image}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${carouselSlides.length}${slide.label ? `: ${slide.label}${slide.script ? ` ${slide.script}` : ''}` : ''}`}
            className="relative min-w-full snap-center"
          >
            <div className="relative" style={{ aspectRatio: ratio.replace('/', ' / ') }}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes={sizes}
                draggable={false}
                className="object-cover"
              />
            </div>
            {slide.text ? (
              <figcaption className="absolute bottom-3 left-3 right-3 truncate rounded-sm bg-white/82 px-3 py-2 text-center text-[12px] font-medium text-primary backdrop-blur-sm">
                {slide.text}
              </figcaption>
            ) : null}
            {showProductButton ? (
              <button
                type="button"
                aria-label={`Ver producto: ${slide.label}`}
                className="absolute bottom-4 left-1/2 min-h-[40px] -translate-x-1/2 rounded-full bg-[#FFF8E9]/82 px-5 text-[12px] font-medium text-[#51375C] shadow-[0_8px_20px_-10px_rgb(63_42_80/0.35)] backdrop-blur-md transition-colors duration-200 hover:bg-[#FFF8E9]"
              >
                Ver producto
              </button>
            ) : null}
          </figure>
        ))}
      </div>

      {showIndicators ? (
        <div className="mt-4 flex justify-center gap-1.5" aria-label={`Producto ${activeIndex + 1} de ${carouselSlides.length}`}>
          {carouselSlides.map((slide, index) => (
            <span
              key={slide.id ?? slide.image}
              aria-hidden="true"
              className={cn(
                'h-1.5 rounded-full bg-[#51375C] transition-[opacity,width] duration-200 ease-out',
                index === activeIndex ? 'w-4 opacity-100' : 'w-1.5 opacity-30',
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
