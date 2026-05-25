'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── Easing ─────────────────────────────────────────────────────────── */
const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const      // snappy premium ease-out
const EASE_SMOOTH  = [0.25, 0.1, 0.25, 1] as const   // standard smooth

/* ── AnimateIn ──────────────────────────────────────────────────────── */
interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  y?: number
  once?: boolean
  variant?: 'fade' | 'clip' | 'blur'
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.75,
  className = '',
  y = 24,
  once = true,
  variant = 'fade',
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  /* Clip-path shutter reveal — premium text entrance */
  if (variant === 'clip') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={isInView
          ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 }
          : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        transition={{ duration, delay, ease: EASE_PREMIUM }}
      >
        {children}
      </motion.div>
    )
  }

  /* Blur-to-focus reveal */
  if (variant === 'blur') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
        animate={isInView
          ? { opacity: 1, filter: 'blur(0px)', y: 0 }
          : { opacity: 0, filter: 'blur(12px)', y: 10 }}
        transition={{ duration, delay, ease: EASE_SMOOTH }}
      >
        {children}
      </motion.div>
    )
  }

  /* Default: fade + slide */
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  )
}

/* ── StaggerGroup ───────────────────────────────────────────────────── */
export function StaggerGroup({
  children,
  className = '',
  staggerDelay = 0.1,
  baseDelay = 0,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: baseDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ── StaggerItem ────────────────────────────────────────────────────── */
export function StaggerItem({
  children,
  className = '',
  y = 20,
}: {
  children: React.ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
