'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const tx = useSpring(x, { stiffness: 160, damping: 22 })
  const ty = useSpring(y, { stiffness: 160, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sharedProps = {
    style: { x: tx, y: ty },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `magnetic-btn ${className}`,
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        {...sharedProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...sharedProps}
    >
      {children}
    </motion.button>
  )
}
