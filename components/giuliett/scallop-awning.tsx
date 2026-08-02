/**
 * Cenefa de arcos — el toldo de la pastelería.
 * Es arquitectura: nunca se anima.
 * Se dibuja como SVG repetible para que escale a cualquier ancho.
 */
export function ScallopAwning({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="block h-8 w-full md:h-10"
        role="presentation"
      >
        <defs>
          <pattern id="giuliett-scallop" x="0" y="0" width="12.5" height="22" patternUnits="userSpaceOnUse">
            {/* arco individual: media pastilla con hombros rectos */}
            <path d="M0 22V8.6A6.25 6.25 0 0 1 12.5 8.6V22Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100" height="22" fill="url(#giuliett-scallop)" />
      </svg>
    </div>
  )
}
