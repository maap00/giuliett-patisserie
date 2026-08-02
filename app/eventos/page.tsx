import { PageIntro } from '@/components/giuliett/page-intro'
import { Closing } from '@/components/giuliett/sections/closing'
import { Process } from '@/components/giuliett/sections/process'
import { Products } from '@/components/giuliett/sections/products'

export default function EventosPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Eventos"
        caps="Momentos que se"
        script="celebran"
        description="Mesas dulces, recuerdos personalizados y detalles que hacen especial cada encuentro."
        image="/images/cierre-mesa-dulce.png"
        imageAlt="Mesa dulce con macarons, tartas y cookies sobre stands de cerámica lila"
      />
      <Products />
      <Process />
      <Closing />
    </main>
  )
}
