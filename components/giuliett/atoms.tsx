import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IconArrow } from './line-art'

/* ---------------- Pill de categoría ---------------- */

type PillProps = {
  label: string
  script?: string
  className?: string
  /** Variante para pills que van superpuestas al borde de una foto. */
  tone?: 'lilac' | 'lilac-deep'
}

/** Etiqueta de categoría. No es un botón: es una etiqueta. */
export function Pill({ label, script, className, tone = 'lilac' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex flex-col items-start rounded-sm px-4 py-2 leading-none transition-colors duration-200',
        tone === 'lilac' ? 'bg-lilac text-primary' : 'bg-lilac-deep text-primary',
        className,
      )}
    >
      <span className="tracked-tight text-[11px] font-medium md:text-[12px]">{label}</span>
      {script ? <span className="font-script -mt-0.5 text-[19px] md:text-[21px]">{script}</span> : null}
    </span>
  )
}

/* ---------------- Divisores punteados ---------------- */

export function DottedX({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('dotted-x w-full', className)} />
}

export function DottedY({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('dotted-y self-stretch', className)} />
}

/* ---------------- Botones ---------------- */

type ActionProps = {
  href: string
  children: React.ReactNode
  className?: string
  /** Los links a WhatsApp e Instagram abren en pestaña nueva. */
  external?: boolean
  ariaLabel?: string
}

/**
 * CTA primario. Sin sombra en reposo: se levanta del papel al tocarlo.
 */
export function PrimaryAction({ href, children, className, external = true, ariaLabel }: ActionProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex min-h-[54px] items-center justify-center rounded-sm bg-primary px-8',
        'text-[16px] font-medium text-primary-foreground',
        'transition-[background-color,box-shadow,transform] duration-[250ms] ease-out',
        'hover:bg-lilac-ink hover:shadow-[var(--shadow-giuliett)] active:scale-[0.985]',
        className,
      )}
    >
      {children}
    </a>
  )
}

/**
 * Link secundario. El subrayado no aparece: se escribe desde la izquierda.
 */
export function QuietLink({ href, children, className, external = true, ariaLabel }: ActionProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'underline-write inline-flex min-h-[44px] items-center gap-1.5 text-[14px] text-primary/70',
        'transition-colors duration-200 hover:text-primary',
        className,
      )}
    >
      {children}
    </a>
  )
}

/** Ancla interna con flecha. Este bloque no convierte: clasifica. */
export function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="underline-write group inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-primary"
    >
      {children}
      <IconArrow className="h-4 w-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-1" />
    </a>
  )
}

/* ---------------- Foto contenida ---------------- */

type FramedPhotoProps = {
  src: string
  alt: string
  /** Ratio del recorte. Ninguna foto va full-bleed rectangular. */
  ratio: '4/5' | '16/9' | '4/3' | '1/1'
  radius?: 'md' | 'lg'
  priority?: boolean
  sizes?: string
  className?: string
  /** Sombra sólo cuando la foto flota sobre un fondo de color. */
  lifted?: boolean
}

/**
 * Toda imagen es una pieza contenida con esquinas muy redondeadas:
 * se lee como algo pegado en un álbum, no como una ventana al mundo.
 */
export function FramedPhoto({
  src,
  alt,
  ratio,
  radius = 'lg',
  priority = false,
  sizes = '(min-width: 1024px) 480px, 100vw',
  className,
  lifted = false,
}: FramedPhotoProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-lilac-soft',
        radius === 'lg' ? 'rounded-lg' : 'rounded-md',
        lifted && 'shadow-[var(--shadow-giuliett)]',
        className,
      )}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  )
}
