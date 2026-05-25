import AnimateIn from '@/components/AnimateIn'
import { COMMANDS } from '@/lib/content'

export default function CommandsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-edge)' }}
    >
      <div className="ghost-num" aria-hidden="true">cmd</div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <AnimateIn variant="clip" className="mb-6">
          <div className="section-label flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            workflow slash commands
          </div>
        </AnimateIn>

        <AnimateIn delay={0.06} className="mb-10" variant="blur">
          <p className="text-muted text-xs leading-relaxed max-w-[48ch]">
            Six structured workflows installed into your AI tool. Each starts with your
            project context already loaded and ends with a decision record saved automatically.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="max-w-3xl">
          <div className="code-block p-0 overflow-hidden">
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                borderBottom: '1px solid var(--color-edge)',
                background: 'var(--color-surface)',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-edge)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-edge)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-edge)' }} />
              <span className="text-dim ml-3" style={{ fontSize: '10px' }}>prepcli workflows</span>
            </div>
            {COMMANDS.map((row, i) => (
              <div
                key={row.cmd}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 px-5 py-4 hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-150"
                style={{
                  borderBottom: i < COMMANDS.length - 1 ? '1px solid var(--color-edge)' : undefined,
                }}
              >
                <div className="text-fg text-xs w-24 shrink-0 font-mono">{row.cmd}</div>
                <div className="flex-1">
                  <div className="text-muted text-xs mb-1">{row.desc}</div>
                  <div className="text-subtle text-xs leading-relaxed">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
