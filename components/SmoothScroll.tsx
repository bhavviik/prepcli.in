'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  /* Reset scroll position on every page navigation */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  /* Init Lenis once — properly cancel RAF on unmount */
  useEffect(() => {
    let lenis: InstanceType<typeof import('lenis').default> | null = null
    let rafId: number | null = null

    const init = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.2,
      })

      const raf = (time: number) => {
        lenis!.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      lenis?.destroy()
      rafId = null
      lenis = null
    }
  }, [])

  return <>{children}</>
}
