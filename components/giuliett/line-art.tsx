/* ============================================================
   Sistema de line art — monolineal, sin relleno, terminación
   redonda, trazo con leve temblor de mano.
   Todo comparte grosor óptico para que nada desequilibre.
   ============================================================ */

type ArtProps = {
  className?: string
  strokeWidth?: number
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  vectorEffect: 'non-scaling-stroke' as const,
}

/* ---------- Iconos funcionales (redibujados al sistema) ---------- */

export function IconWhatsApp({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M12.02 3.2c-4.83 0-8.75 3.9-8.75 8.71 0 1.55.41 3 1.13 4.27L3.2 20.8l4.74-1.17a8.8 8.8 0 0 0 4.08 1c4.83 0 8.75-3.9 8.75-8.72 0-4.81-3.92-8.71-8.75-8.71Z"
      />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M9.05 8.02c.3-.03.56.06.72.42.15.34.5 1.2.55 1.34.05.15.02.32-.09.47-.11.16-.36.44-.44.53-.1.11-.13.24-.05.4.35.7 1.55 2.2 3.24 2.83.18.06.32.03.44-.1.11-.12.5-.55.63-.73.13-.19.29-.2.46-.14.18.07 1.16.56 1.36.66.2.1.33.15.38.24.05.1.05.55-.14 1.07-.2.52-1.1 1.03-1.6 1.06-.5.03-.98.03-2.1-.4-1.13-.44-2.6-1.62-3.6-3.06-1-1.45-1.2-2.5-1.19-3 .02-.5.5-1.3.7-1.5.17-.17.28-.2.35-.2Z"
      />
    </svg>
  )
}

export function IconPhone({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M6.1 3.6h2.6l1.5 3.7-1.9 1.4a11.3 11.3 0 0 0 5.5 5.5l1.4-1.9 3.7 1.5v2.6c0 1.2-1 2.1-2.2 2-3.4-.3-6.6-1.8-9-4.3-2.5-2.4-4-5.6-4.3-9-.1-1.2.8-2.2 2-2.2Z"
      />
    </svg>
  )
}

export function IconMail({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...base} strokeWidth={strokeWidth} x="2.8" y="5.2" width="18.4" height="13.6" rx="2.6" />
      <path {...base} strokeWidth={strokeWidth} d="M4.1 7.4 12 12.8l7.9-5.4" />
    </svg>
  )
}

export function IconInstagram({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...base} strokeWidth={strokeWidth} x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle {...base} strokeWidth={strokeWidth} cx="12" cy="12" r="4.1" />
      <path {...base} strokeWidth={strokeWidth} d="M16.9 7.2h.01" />
    </svg>
  )
}

export function IconGlobe({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...base} strokeWidth={strokeWidth} cx="12" cy="12" r="8.8" />
      <path {...base} strokeWidth={strokeWidth} d="M3.4 12h17.2M12 3.2c2.2 2.4 3.3 5.5 3.3 8.8S14.2 18.4 12 20.8c-2.2-2.4-3.3-5.5-3.3-8.8S9.8 5.6 12 3.2Z" />
    </svg>
  )
}

export function IconArrow({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} strokeWidth={strokeWidth} d="M4.5 12h14.2m-4.6-4.8L18.7 12l-4.6 4.8" />
    </svg>
  )
}

export function IconClose({ className, strokeWidth = 1.7 }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} strokeWidth={strokeWidth} d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6" />
    </svg>
  )
}

/* ---------- Ilustraciones de objeto ---------- */

/** Dos copas de vino — audiencia Empresas */
export function ArtWineGlasses({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M17.5 12.5h13.2c.3 5.4-.4 9.6-2.1 12.4-1 1.6-2.6 2.5-4.5 2.5s-3.5-.9-4.5-2.5c-1.7-2.8-2.4-7-2.1-12.4Z"
      />
      <path {...base} strokeWidth={strokeWidth} d="M18.6 18.4h11M24.1 27.4v18.9M18.9 46.6h10.4" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M33.4 19.8h13.2c.3 5.4-.4 9.6-2.1 12.4-1 1.6-2.6 2.5-4.5 2.5s-3.5-.9-4.5-2.5c-1.7-2.8-2.4-7-2.1-12.4Z"
      />
      <path {...base} strokeWidth={strokeWidth} d="M34.5 25.7h11M40 34.7v17.8M34.8 52.8h10.4" />
    </svg>
  )
}

/** Bolsa de café — audiencia Cafeterías */
export function ArtCoffeeBag({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M16.8 20.6c0-1 .8-1.8 1.8-1.8h26.6c1 0 1.8.8 1.8 1.8l-1.6 28.9c-.1 1.7-1.5 3.1-3.2 3.1H21.5c-1.7 0-3.1-1.4-3.2-3.1L16.8 20.6Z"
      />
      <path {...base} strokeWidth={strokeWidth} d="M18.2 12.4h27.4l1.4 6.4H16.8l1.4-6.4Z" />
      <path {...base} strokeWidth={strokeWidth} d="M24.4 30.6h15.4M24.4 36.9h11.2" />
      <path {...base} strokeWidth={strokeWidth} d="M30.6 8.2c-2.4 1.6-2.4 3.4 0 4.2M35.8 7.4c-2.4 1.6-2.4 3.4 0 4.2" />
    </svg>
  )
}

/** Torre Eiffel — formación en Francia */
export function ArtEiffel({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...base} strokeWidth={strokeWidth} d="M24 4.2v6.4" />
      <path {...base} strokeWidth={strokeWidth} d="M21.4 10.6h5.2l1.4 8.4h-8l1.4-8.4Z" />
      <path {...base} strokeWidth={strokeWidth} d="M20 19h8l2.6 12.4H17.4L20 19Z" />
      <path {...base} strokeWidth={strokeWidth} d="M17.4 31.4h13.2l4.8 12.4H12.6l4.8-12.4Z" />
      <path {...base} strokeWidth={strokeWidth} d="M14.6 38.8h18.8M18.6 23.6h10.8" />
      <path {...base} strokeWidth={strokeWidth} d="M22.2 31.6 20 43.8M25.8 31.6 28 43.8" />
    </svg>
  )
}

/** Camioneta de reparto — entregas a domicilio */
export function ArtVan({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M3.6 14.6c0-1.3 1-2.3 2.3-2.3h18.5c1.3 0 2.3 1 2.3 2.3v18.9H3.6V14.6Z"
      />
      <path {...base} strokeWidth={strokeWidth} d="M26.7 19.4h7.9l7.8 7.6v6.5H26.7V19.4Z" />
      <path {...base} strokeWidth={strokeWidth} d="M29.6 22.2h4.6l3.8 3.8h-8.4v-3.8Z" />
      <path {...base} strokeWidth={strokeWidth} d="M3.6 33.5h7.2M17.6 33.5h9.1M33.9 33.5h8.3" />
      <circle {...base} strokeWidth={strokeWidth} cx="14.2" cy="34.2" r="3.6" />
      <circle {...base} strokeWidth={strokeWidth} cx="30.4" cy="34.2" r="3.6" />
      <path {...base} strokeWidth={strokeWidth} d="M9.8 18.8h9.6M9.8 23.4h6.2" />
    </svg>
  )
}

/** Caja atada con cinta — presentación premium */
export function ArtGiftBox({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...base} strokeWidth={strokeWidth} d="M7.4 16.8h33.2v5.8H7.4v-5.8Z" />
      <path {...base} strokeWidth={strokeWidth} d="M10 22.6h28v19.2c0 .9-.7 1.6-1.6 1.6H11.6c-.9 0-1.6-.7-1.6-1.6V22.6Z" />
      <path {...base} strokeWidth={strokeWidth} d="M24 16.8v26.6" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M24 16.6c-3.4-.2-6-1.4-7-3.2-.8-1.4-.4-3.1.9-3.9 1.4-.8 3.2-.3 4.2 1.1 1 1.4 1.7 3.4 1.9 6ZM24 16.6c3.4-.2 6-1.4 7-3.2.8-1.4.4-3.1-.9-3.9-1.4-.8-3.2-.3-4.2 1.1-1 1.4-1.7 3.4-1.9 6Z"
      />
    </svg>
  )
}

/** Batidor y mano — atención directa con la fundadora */
export function ArtFounderIcon({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle {...base} strokeWidth={strokeWidth} cx="24" cy="14.4" r="6.4" />
      <path {...base} strokeWidth={strokeWidth} d="M20.2 9.6c1.6-2.4 6-2.4 7.6 0" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M11.6 43.4c0-6.2 3.2-11.2 7-12.9 1.6-.7 3.5-1 5.4-1s3.8.3 5.4 1c3.8 1.7 7 6.7 7 12.9"
      />
      <path {...base} strokeWidth={strokeWidth} d="M14.9 34.6h18.2M14.2 39.2h19.6" />
    </svg>
  )
}

/** Mano con gesto OK — anclaje del muro de clientes */
export function ArtOkHand({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 100 190" className={className} aria-hidden="true">
      <circle {...base} strokeWidth={strokeWidth} cx="34" cy="44" r="15" />
      <path {...base} strokeWidth={strokeWidth} d="M43 33c6-6 13-8 17-4 4 4 2 11-4 17" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M56 46c5-8 10-12 13.5-9.5 3.5 2.5 2 9-2.5 16M63 55c5-7 9.5-10 12.5-7.5 3 2.5 1.5 8-2.5 14M68 66c4.5-5.5 8.5-7.5 11-5.5 2.5 2 1.5 6.5-2 11"
      />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M24 57c-4 8-6 17-5.5 26.5.5 11 4 21 9.5 29.5 4 6 6 12 6 19v36"
      />
      <path {...base} strokeWidth={strokeWidth} d="M77 72c2 10 1 21-3 30-4 9-6 16-6 24v42" />
      <path {...base} strokeWidth={strokeWidth} d="M34 148h34" />
      <path {...base} strokeWidth={strokeWidth} d="M40 160h22M40 172h22" />
    </svg>
  )
}

/* ---------- El personaje de la fundadora ---------- */

/**
 * Pose insignia: sentada sobre una pila de tortas, copa en mano.
 * Remera marinera de rayas horizontales, pelo recogido.
 */
export function ArtFounderSeated({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 150 220" className={className} aria-hidden="true">
      {/* pila de tortas */}
      <ellipse {...base} strokeWidth={strokeWidth} cx="70" cy="196" rx="46" ry="12" />
      <path {...base} strokeWidth={strokeWidth} d="M24 196v-16c0-6.6 20.6-12 46-12s46 5.4 46 12v16" />
      <ellipse {...base} strokeWidth={strokeWidth} cx="70" cy="180" rx="46" ry="12" />
      <path {...base} strokeWidth={strokeWidth} d="M30 172v-15c0-6.2 17.9-11.2 40-11.2s40 5 40 11.2v15" />
      <ellipse {...base} strokeWidth={strokeWidth} cx="70" cy="157" rx="40" ry="11" />
      <path {...base} strokeWidth={strokeWidth} d="M38 149v-13c0-5.6 14.3-10.2 32-10.2s32 4.6 32 10.2v13" />
      <ellipse {...base} strokeWidth={strokeWidth} cx="70" cy="136" rx="32" ry="9" />

      {/* cabeza y pelo recogido */}
      <circle {...base} strokeWidth={strokeWidth} cx="72" cy="34" r="14" />
      <path {...base} strokeWidth={strokeWidth} d="M58 30c1-9 7-14 14-14s13 5 14 14" />
      <path {...base} strokeWidth={strokeWidth} d="M86 22c5-3 9-1 8 3-1 3.6-4.6 4.6-7.6 3.4" />

      {/* torso con remera de rayas */}
      <path {...base} strokeWidth={strokeWidth} d="M62 47c-7 3-11 9-12 17l-3 26c-.5 5 2 8 6 8h40c4 0 6.5-3 6-8l-3-26c-1-8-5-14-12-17" />
      <path {...base} strokeWidth={strokeWidth} d="M52 60h40M50.5 70h43M49.5 80h45M48.5 90h46" />

      {/* brazo con copa */}
      <path {...base} strokeWidth={strokeWidth} d="M50 52c-8 5-13 12-14 20-.8 6 2 10 6 10 3.4 0 6-2 7-5" />
      <path {...base} strokeWidth={strokeWidth} d="M36 74c-3.4 1-5.6 3.4-6 6.6" />
      {/* copa */}
      <path {...base} strokeWidth={strokeWidth} d="M20 52h13c.3 5.4-.4 9.5-2.1 11.6-.9 1.2-2.2 1.8-4.4 1.8s-3.5-.6-4.4-1.8C20.4 61.5 19.7 57.4 20 52Z" />
      <path {...base} strokeWidth={strokeWidth} d="M21 57h11M26.5 65.4V78M22 79h9" />

      {/* piernas cruzadas */}
      <path {...base} strokeWidth={strokeWidth} d="M64 98c-2 10-1 19 3 26 3 5 4 10 3 15" />
      <path {...base} strokeWidth={strokeWidth} d="M84 98c3 11 2 21-3 29-3 5-4 9-3 13" />
      <path {...base} strokeWidth={strokeWidth} d="M64 139c-5 3-8 6-9 10M78 140c-5 2-8 5-9 9" />
    </svg>
  )
}

/**
 * Media figura saludando — footer.
 */
export function ArtFounderWaving({ className, strokeWidth = 1.6 }: ArtProps) {
  return (
    <svg viewBox="0 0 130 200" className={className} aria-hidden="true">
      <circle {...base} strokeWidth={strokeWidth} cx="62" cy="38" r="16" />
      <path {...base} strokeWidth={strokeWidth} d="M46 33c1-10 8-16 16-16s15 6 16 16" />
      <path {...base} strokeWidth={strokeWidth} d="M78 24c6-3 10-.5 8.6 4-1.2 4-5.4 5-8.8 3.6" />
      <path {...base} strokeWidth={strokeWidth} d="M55 53c-9 3-15 10-16 19l-5 60c-.6 6 2.4 10 7 10h42c4.6 0 7.6-4 7-10l-5-60c-1-9-7-16-16-19" />
      <path {...base} strokeWidth={strokeWidth} d="M42 70h42M40.5 82h45M39.5 94h47M38.5 106h48M37.5 118h49" />
      {/* brazo saludando */}
      <path {...base} strokeWidth={strokeWidth} d="M88 60c8 4 13 11 14 19 .6 5-1 9-4 11" />
      <path {...base} strokeWidth={strokeWidth} d="M98 90c-1 5 1 8 4.6 8.6" />
      <path {...base} strokeWidth={strokeWidth} d="M100 76c4-6 8-8 10.6-5.6 2.6 2.4 1.4 7-2 11" />
      <path {...base} strokeWidth={strokeWidth} d="M104 66c3-5 6.6-6.6 9-4.6 2.4 2 1.4 6-1.6 9.6" />
      {/* piernas */}
      <path {...base} strokeWidth={strokeWidth} d="M50 142v52M78 142v52" />
      <path {...base} strokeWidth={strokeWidth} d="M42 194h14M72 194h14" />
    </svg>
  )
}
