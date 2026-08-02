import { cn } from '@/lib/utils'

type Tone = 'cream' | 'white' | 'lilac' | 'lilac-soft' | 'lilac-deep'

const TONES: Record<Tone, string> = {
  cream: 'bg-background',
  white: 'bg-surface',
  lilac: 'bg-lilac',
  'lilac-soft': 'bg-lilac-soft',
  'lilac-deep': 'bg-lilac-deep',
}

type Props = {
  id?: string
  tone: Tone
  children: React.ReactNode
  /** Esquinas superiores redondeadas + solapamiento: capas de papel. */
  layered?: boolean
  /** Sección de respiro: 64px en vez de 96px. */
  breather?: boolean
  className?: string
  innerClassName?: string
  'aria-labelledby'?: string
}

/**
 * El sitio no es un scroll continuo: es una pila de hojas de papel
 * apoyadas una sobre otra. Cada sección solapa 32px sobre la anterior
 * con esquinas superiores de 40px.
 */
export function Section({
  id,
  tone,
  children,
  layered = true,
  breather = false,
  className,
  innerClassName,
  ...rest
}: Props) {
  return (
    <section
      id={id}
      {...rest}
      className={cn(
        'relative',
        TONES[tone],
        layered && '-mt-8 rounded-t-xl',
        breather ? 'py-16 md:py-24' : 'py-24 md:py-[140px]',
        className,
      )}
    >
      <div className={cn('mx-auto w-full max-w-[1200px] px-6 md:px-8', innerClassName)}>{children}</div>
    </section>
  )
}

/** Contenedor de lectura: máximo 62 caracteres por línea. */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('max-w-[62ch] text-[16px] leading-[1.65] text-muted-foreground', className)}>{children}</div>
  )
}
