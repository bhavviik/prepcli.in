'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CopyCommand    from '@/components/CopyCommand'
import MagneticButton from '@/components/MagneticButton'
import { ROLLING_PHRASES } from '@/lib/content'

const TITLE = 'prepcli'

const GLOW_LERP_FACTOR = 0.055
const ROLLING_TEXT_BOOT_DELAY_MS = 1600
const ROLLING_TEXT_INTERVAL_MS = 2800

const TITLE_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
} as const

const CHAR_VARIANTS = {
  hidden: { opacity: 0, rotateX: -90, y: 30 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef      = useRef<HTMLDivElement>(null)
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const boot = setTimeout(() => {
      const id = setInterval(
        () => setPhraseIdx((i) => (i + 1) % ROLLING_PHRASES.length),
        ROLLING_TEXT_INTERVAL_MS,
      )
      return () => clearInterval(id)
    }, ROLLING_TEXT_BOOT_DELAY_MS)
    return () => clearTimeout(boot)
  }, [])

  useEffect(() => {
    const el   = containerRef.current
    const glow = glowRef.current
    if (!el || !glow) return

    let rafId: number | null = null
    let tX = 40, tY = 40, cX = 40, cY = 40
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      cX = lerp(cX, tX, GLOW_LERP_FACTOR)
      cY = lerp(cY, tY, GLOW_LERP_FACTOR)
      glow.style.left = `${cX}%`
      glow.style.top  = `${cY}%`
      rafId = requestAnimationFrame(tick)
    }
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tX = ((e.clientX - r.left) / r.width)  * 100
      tY = ((e.clientY - r.top)  / r.height) * 100
    }

    rafId = requestAnimationFrame(tick)
    el.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <div className="hero-grid absolute inset-0" />

      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          ref={glowRef}
          className="absolute rounded-full"
          style={{
            width: '900px', height: '600px',
            transform: 'translate(-50%,-50%)',
            left: '40%', top: '45%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.026) 0%, transparent 65%)',
            filter: 'blur(48px)',
          }}
        />
        <div className="absolute rounded-full"
          style={{ width: '500px', height: '320px', right: '-60px', top: '0',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.012) 0%, transparent 70%)',
            filter: 'blur(70px)' }} />
        <div className="absolute rounded-full"
          style={{ width: '360px', height: '220px', left: '-80px', bottom: '80px',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.010) 0%, transparent 70%)',
            filter: 'blur(55px)' }} />
        <div className="absolute rounded-full"
          style={{ width: '500px', height: '300px', right: '10%', bottom: '5%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.009) 0%, transparent 70%)',
            filter: 'blur(65px)' }} />
      </div>

      <div
        className="absolute left-6 top-0 bottom-0 hidden lg:block"
        style={{
          width: '1px',
          background: 'linear-gradient(180deg, transparent 0%, var(--color-edge) 20%, var(--color-edge) 80%, transparent 100%)',
          opacity: 0.45,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-8 w-full">

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-label mb-5 flex items-center gap-4"
        >
          <span className="inline-block w-6 h-px bg-subtle opacity-50" />
          cli tool
        </motion.div>

        <div className="hero-title-wrap mb-3">
          <motion.h1
            className="text-fg font-normal tracking-tight leading-[0.9]"
            style={{ fontSize: 'clamp(4rem, 11vw, 12rem)' }}
            aria-label={TITLE}
            variants={TITLE_VARIANTS}
            initial="hidden"
            animate="visible"
          >
            {TITLE.split('').map((char, i) => (
              <motion.span key={i} className="hero-char" variants={CHAR_VARIANTS}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="mb-5"
        >
          <div className="shimmer-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-3"
        >
          <p
            className="text-fg font-normal leading-tight"
            style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
          >
            <span className="text-subtle">stop re-explaining.</span>
            <br />
            <span className="text-fg">start building.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
          style={{ maxWidth: '48ch' }}
        >
          <div className="relative overflow-hidden" style={{ height: '1.75em' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0,  opacity: 1 }}
                exit={{    y: -20, opacity: 0 }}
                transition={{ duration: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 text-subtle leading-relaxed whitespace-nowrap"
                style={{ fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)' }}
              >
                {ROLLING_PHRASES[phraseIdx]}
                <span className="cursor-blink text-dim ml-0.5">▍</span>
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 mb-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.84, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CopyCommand />
          </motion.div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.94, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <MagneticButton href="/docs" strength={0.28}>
                read the docs →
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.08 }}
              className="flex items-center gap-x-4 gap-y-1 flex-wrap"
            >
              <span
                className="text-dim"
                style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                works with
              </span>
              {['Claude Code', 'Cursor', 'Windsurf', 'Antigravity'].map((tool, i) => (
                <span key={tool} className="flex items-center gap-3">
                  {i > 0 && <span className="text-dim opacity-40" aria-hidden="true">·</span>}
                  <span className="text-subtle" style={{ fontSize: '11px' }}>{tool}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <div className="shimmer-line mt-auto" />
    </div>
  )
}
