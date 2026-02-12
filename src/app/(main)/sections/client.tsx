import React from 'react'
import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'

const clients = [
  { src: '/assets/clients/frankLogo.svg', alt: 'Frank' },
  { src: '/assets/clients/accentLogo.svg', alt: 'Accent Translations' },
  { src: '/assets/clients/ostacoLogo.svg', alt: 'Ostaco' },
  { src: '/assets/clients/profilletLogo.svg', alt: 'Profillet' },
  { src: '/assets/clients/ekarLogo.svg', alt: 'Ekar' },
  { src: '/assets/clients/hirooLogo.svg', alt: 'Hiroo' },
]

const ReviewCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('m-5 self-center p-4 opacity-60 hover:opacity-100 transition-opacity duration-300', className)}>
      {children}
    </div>
  )
}

export const Client = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by forward-thinking companies
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {clients.map((logo, index) => (
            <ReviewCard key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="brightness-0 invert"
              />
            </ReviewCard>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
      </div>
    </section>
  )
}
