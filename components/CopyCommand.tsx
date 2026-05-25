'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INSTALL_CMD = 'curl -fsSL https://prepcli.in/install.sh | bash'

export default function CopyCommand() {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
    } catch {
      // Clipboard API unavailable (non-HTTPS or restricted browser) — skip silently
    }
    setState('copied')
    setTimeout(() => setState('idle'), 2200)
  }

  return (
    <button
      onClick={handleCopy}
      className="copy-cmd group"
      aria-label={`Copy: ${INSTALL_CMD}`}
    >
      <span className="text-subtle select-none">$</span>
      <span className="text-fg">{INSTALL_CMD}</span>

      <span className="ml-3 pl-3 flex items-center" style={{ borderLeft: '1px solid var(--color-edge)' }}>
        <AnimatePresence mode="wait">
          {state === 'idle' ? (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-dim text-xs"
            >
              copy
            </motion.span>
          ) : (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-subtle text-xs"
            >
              ✓ copied
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  )
}
