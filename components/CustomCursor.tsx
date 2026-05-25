'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only activate on real pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.body.classList.add('cursor-ready')

    const dot = dotRef.current
    if (!dot) return

    let mouseX = -100
    let mouseY = -100

    // Track raw mouse position — passive so it never blocks scroll
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Write directly to style.transform — no React, no spring, zero lag
    let rafId: number
    const render = () => {
      // translate(-50%, -50%) centers the dot on the cursor tip
      dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
      rafId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('cursor-ready')
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'white',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  )
}
