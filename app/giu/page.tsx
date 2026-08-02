import { PageIntro } from '@/components/giuliett/page-intro'
import { Manifesto } from '@/components/giuliett/sections/manifesto'
import { Reasons } from '@/components/giuliett/sections/reasons'
import { SocialProof } from '@/components/giuliett/sections/social-proof'

export default function GiuPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Giu"
        caps="Técnica francesa,"
        script="alma mendocina"
        description="Detrás de Giuliett hay una forma de hacer las cosas: con oficio, escucha y atención por cada detalle."
        image="/images/Axx.jpg"
        imageAlt="La fundadora de Giuliett Pâtisserie"
      />
      <Manifesto />
      <Reasons />
      <SocialProof />
    </main>
  )
}
