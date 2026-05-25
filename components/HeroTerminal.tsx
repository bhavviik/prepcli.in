'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { LineType, TerminalLine } from '@/types'

const COLD_LINE_START_MS = 350
const COLD_LINE_INTERVAL_MS = 480
const LOADING_START_MS = 4000
const LOADING_FLASH_MS = 4500
const WARM_PHASE_START_MS = 5000
const WARM_LINE_START_MS = 5200
const WARM_LINE_INTERVAL_MS = 260
const LOOP_INTERVAL_MS = 11000

const COLD: TerminalLine[] = [
  { id: 1, type: 'cmd',  text: '$ /debug' },
  { id: 2, type: 'info', text: 'no project context found.' },
  { id: 3, type: 'ask',  text: 'what framework are you using?' },
  { id: 4, type: 'ask',  text: 'any constraints I should know?' },
  { id: 5, type: 'ask',  text: 'what was decided last session?' },
]

const WARM: TerminalLine[] = [
  { id: 10, type: 'cmd',   text: '$ /debug' },
  { id: 11, type: 'data',  text: 'stack: Next.js 15 · TypeScript · tRPC' },
  { id: 12, type: 'data',  text: 'constraints: no date-fns · auth read-only' },
  { id: 13, type: 'data',  text: 'last session: pages/ → app/ router' },
  { id: 14, type: 'ready', text: 'ready.' },
]

const LINE_COLORS: Record<LineType, string> = {
  cmd:   'text-fg',
  info:  'text-dim',
  ask:   'text-subtle',
  data:  'text-muted',
  ready: 'text-fg',
  sep:   'text-subtle',
}

const LINE_PREFIXES: Record<LineType, string> = {
  cmd:   '',
  info:  '  ↳ ',
  ask:   '  ? ',
  data:  '  · ',
  ready: '  → ',
  sep:   '',
}

export default function HeroTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [phase, setPhase] = useState<'cold' | 'loading' | 'warm'>('cold')
  const timerIds = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const clearTimers = () => {
      timerIds.current.forEach(clearTimeout)
      timerIds.current = []
    }
    const schedule = (fn: () => void, ms: number) => {
      timerIds.current.push(setTimeout(fn, ms))
    }

    const run = () => {
      clearTimers()
      setLines([])
      setPhase('cold')

      COLD.forEach((line, i) => {
        schedule(
          () => setLines((prev) => [...prev, line]),
          COLD_LINE_START_MS + i * COLD_LINE_INTERVAL_MS,
        )
      })

      schedule(() => { setPhase('loading'); setLines([]) }, LOADING_START_MS)

      schedule(() => {
        setLines([{ id: 99, type: 'sep', text: '── prepcli · loading context ──' }])
      }, LOADING_FLASH_MS)

      schedule(() => { setPhase('warm'); setLines([]) }, WARM_PHASE_START_MS)

      WARM.forEach((line, i) => {
        schedule(
          () => setLines((prev) => [...prev, line]),
          WARM_LINE_START_MS + i * WARM_LINE_INTERVAL_MS,
        )
      })

      schedule(run, LOOP_INTERVAL_MS)
    }

    run()
    return clearTimers
  }, [])

  return (
    <div
      className="code-block"
      style={{
        minHeight: '172px',
        transition: 'box-shadow 1.4s ease',
        boxShadow:
          phase === 'warm'
            ? '0 0 80px rgba(255,255,255,0.018), inset 0 0 30px rgba(255,255,255,0.006)'
            : 'none',
      }}
    >
      <div
        className="flex items-center gap-2 mb-4 pb-3"
        style={{ borderBottom: '1px solid var(--color-edge)' }}
      >
        <span className="w-2 h-2 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />
        <span className="w-2 h-2 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />
        <span className="w-2 h-2 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />

        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-dim ml-2 select-none"
            style={{ fontSize: '10px', letterSpacing: '0.08em' }}
          >
            {phase === 'cold'    && 'ai session · no context'}
            {phase === 'loading' && 'loading context…'}
            {phase === 'warm'    && 'ai session · context loaded'}
          </motion.span>
        </AnimatePresence>
      </div>

      <div style={{ minHeight: '116px' }}>
        <AnimatePresence>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className={LINE_COLORS[line.type]}
              style={{
                fontSize: '12px',
                lineHeight: '1.9',
                fontFamily: 'inherit',
                ...(line.type === 'ready' && {
                  textShadow: '0 0 22px rgba(240,240,240,0.28)',
                }),
                ...(line.type === 'sep' && {
                  fontSize: '10px',
                  letterSpacing: '0.07em',
                  textAlign: 'center' as const,
                  display: 'block',
                  margin: '2px 0',
                }),
              }}
            >
              {LINE_PREFIXES[line.type]}{line.text}
              {line.type === 'ready' && (
                <span className="cursor-blink text-subtle ml-0.5">▍</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {lines.length === 0 && (
          <span className="text-dim cursor-blink" style={{ fontSize: '12px' }}>▍</span>
        )}
      </div>
    </div>
  )
}
