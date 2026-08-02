'use client'

import Link from 'next/link'
import { Camera, House, MessageCircle, Sparkles, type LucideIcon, UserRound } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type NavigationItem = {
  href: string
  label: string
  icon: LucideIcon
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home', icon: House },
  { href: '/eventos', label: 'Eventos', icon: Sparkles },
  { href: '/galeria', label: 'Galería', icon: Camera },
  { href: '/giu', label: 'Giu', icon: UserRound },
  { href: '/contacto', label: 'Contacto', icon: MessageCircle },
]

function isCurrentPath(pathname: string, href: string) {
  return href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)
}

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden"
    >
      <ul className="mx-auto flex min-h-[68px] max-w-md items-center justify-around rounded-[28px] bg-[#FFF8E9]/90 px-3 shadow-[0_12px_32px_-12px_rgb(63_42_80/0.14)] backdrop-blur-md">
        {navigationItems.map(({ href, label, icon: Icon }) => {
          const active = isCurrentPath(pathname, href)

          return (
            <li key={href} className="flex flex-1 justify-center">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex min-h-[56px] min-w-[48px] flex-col items-center justify-center gap-1 px-1.5',
                  'transition-colors duration-200 ease-out',
                  active ? 'text-[#51375C]' : 'text-[#9C8065]',
                )}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className={cn('h-5 w-5 transition-transform duration-200 ease-out', active ? 'scale-100' : 'scale-[0.95]')}
                />
                <span className="text-[10px] font-medium leading-none tracking-[0.02em]">{label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute bottom-0.5 h-1 w-1 rounded-full bg-current transition-[opacity,transform] duration-200 ease-out',
                    active ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                  )}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
