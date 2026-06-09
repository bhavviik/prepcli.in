export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-subtle font-normal mb-8 mt-20 pt-5 first:mt-0 first:pt-0 border-t border-[var(--color-edge)] first:border-t-0"
      style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
    >
      {children}
    </h2>
  )
}

export function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-fg font-normal mb-4 mt-10 flex items-center gap-2.5" style={{ fontSize: '13px' }}>
      <span className="inline-block w-px self-stretch shrink-0" style={{ background: 'var(--color-edge)', minHeight: '14px' }} />
      {children}
    </h3>
  )
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted text-xs leading-loose mb-4 max-w-2xl">{children}</p>
  )
}

export function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-fg text-xs">{children}</code>
}

export function Cmd({ cmd, comment }: { cmd: string; comment?: string }) {
  return (
    <div>
      <span className="text-subtle">$</span>
      <span className="text-fg ml-2">{cmd}</span>
      {comment && <span className="text-dim ml-4">{comment}</span>}
    </div>
  )
}

export function DocCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="code-block text-xs mb-6 leading-relaxed">{children}</div>
  )
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-6 px-4 py-3.5 text-xs"
      style={{ borderLeft: '1px solid var(--color-subtle)', background: 'rgba(255,255,255,0.014)' }}
    >
      {children}
    </div>
  )
}

export function CmdTable({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6" style={{ border: '1px solid var(--color-edge)' }}>
      {label && (
        <div
          className="px-4 py-2"
          style={{ borderBottom: '1px solid var(--color-edge)', background: 'var(--color-surface)' }}
        >
          <span className="section-label">{label}</span>
        </div>
      )}
      <div className="divide-y divide-[var(--color-edge)]">{children}</div>
    </div>
  )
}

export function CmdTableRow({ cmd, desc }: { cmd: string; desc: string }) {
  return (
    <div className="flex items-start gap-6 px-4 py-2.5">
      <span className="text-fg text-xs shrink-0" style={{ minWidth: '88px' }}>{cmd}</span>
      <span className="text-subtle text-xs leading-relaxed">{desc}</span>
    </div>
  )
}

export function Flag({ name, desc }: { name: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-6 py-2.5"
      style={{ borderBottom: '1px solid var(--color-edge)' }}
    >
      <code className="text-fg text-xs shrink-0" style={{ minWidth: '160px' }}>{name}</code>
      <span className="text-subtle text-xs leading-relaxed">{desc}</span>
    </div>
  )
}
