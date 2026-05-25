import type { FragmentLine } from '@/types'

interface PainFragmentProps {
  label: string
  lines: FragmentLine[]
}

export default function PainFragment({ label, lines }: PainFragmentProps) {
  return (
    <div className="code-block" style={{ maxWidth: '320px', opacity: 0.68 }}>
      <div
        className="flex items-center gap-2 mb-3 pb-3"
        style={{ borderBottom: '1px solid var(--color-edge)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--color-edge)' }} />
        <span className="text-dim ml-2 select-none" style={{ fontSize: '10px', letterSpacing: '0.07em' }}>
          {label}
        </span>
      </div>
      {lines.map((line, i) => (
        <div key={i} className={`text-${line.style} leading-relaxed`} style={{ fontSize: '12px' }}>
          {line.text}
        </div>
      ))}
    </div>
  )
}
