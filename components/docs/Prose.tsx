export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-fg text-sm font-normal mb-4 mt-12 first:mt-0"
      style={{ borderBottom: '1px solid var(--color-edge)', paddingBottom: '0.75rem' }}
    >
      {children}
    </h2>
  )
}

export function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-fg text-xs font-normal mb-3 mt-8">
      {children}
    </h3>
  )
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted text-xs leading-relaxed mb-4 max-w-2xl">{children}</p>
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

export function Flag({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex gap-6 mb-2">
      <span className="text-muted text-xs w-52 shrink-0">{name}</span>
      <span className="text-subtle text-xs">{desc}</span>
    </div>
  )
}
