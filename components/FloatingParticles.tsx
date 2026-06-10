'use client'

import { useEffect, useRef } from 'react'

const COUNT = 100

interface Dot {
  x: number       // 0..1 (fraction of canvas width)
  progress: number // 0..1 through one full rise cycle
  size: number
  speed: number   // seconds for one full cycle
  maxOpacity: number
}

function makeDots(): Dot[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    x:          ((i * 37 + (i % 5) * 11) % 96 + 2) / 100,
    progress:   ((i * 41) % 100) / 100,
    size:       i % 5 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1.5,
    speed:      55 + ((i * 67) % 2500) / 100,
    maxOpacity: 0.22,
  }))
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dots = makeDots()
    let raf: number
    let running = true
    let last = performance.now()

    const resize = () => {
      const p = canvas.parentElement
      if (!p) return
      canvas.width  = p.offsetWidth
      canvas.height = p.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const draw = (now: number) => {
      if (!running) return
      const dt = (now - last) / 1000
      last = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#f2f2f2'

      for (const d of dots) {
        d.progress += dt / d.speed
        if (d.progress >= 1) {
          d.progress = 0
          d.x = Math.random() * 0.96 + 0.02
        }

        const y = (1 - d.progress * 1.3) * canvas.height

        let opacity = 0
        if (d.progress < 0.06) {
          opacity = (d.progress / 0.06) * d.maxOpacity
        } else if (d.progress > 0.90) {
          opacity = ((1 - d.progress) / 0.10) * d.maxOpacity
        } else {
          opacity = d.maxOpacity
        }

        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.arc(d.x * canvas.width, y, d.size, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else {
        running = true
        last = performance.now()
        raf = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none select-none"
    />
  )
}
