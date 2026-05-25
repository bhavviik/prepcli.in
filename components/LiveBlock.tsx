'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { LiveBlockLine } from '@/types'

interface LiveBlockProps {
  label: string
  lines: LiveBlockLine[]
}

export default function LiveBlock({ label, lines }: LiveBlockProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div ref={ref} className="code-block text-xs self-start">
      <motion.div
        className="text-subtle mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {label}
      </motion.div>

      {lines.map((line, i) => (
        <motion.div
          key={i}
          className={`text-${line.c}`}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{
            duration: 0.32,
            delay: 0.1 + i * 0.07,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {line.t}
        </motion.div>
      ))}
    </div>
  )
}
