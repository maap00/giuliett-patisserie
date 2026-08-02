import { FramedPhoto } from './atoms'
import { Section } from './section'
import { SectionLockup } from './section-lockup'

type PageIntroProps = {
  eyebrow: string
  caps: string
  script: string
  description: string
  image: string
  imageAlt: string
}

/** Opening shared by the secondary screens, keeping their hierarchy calm and familiar. */
export function PageIntro({ eyebrow, caps, script, description, image, imageAlt }: PageIntroProps) {
  return (
    <Section tone="cream" layered={false} className="overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-center lg:items-start">
          <p className="tracked text-[10px] font-medium text-muted-foreground">{eyebrow}</p>
          <SectionLockup
            as="h1"
            caps={caps}
            script={script}
            size="lg"
            className="mt-5 lg:items-start lg:text-left"
          />
          <p className="mt-7 max-w-[38ch] text-center text-[15px] leading-[1.7] text-muted-foreground lg:text-left">
            {description}
          </p>
        </div>
        <FramedPhoto
          src={image}
          alt={imageAlt}
          ratio="4/3"
          lifted
          className="w-full max-w-[520px] shrink-0 lg:w-[46%]"
          sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
        />
      </div>
    </Section>
  )
}
