import AnimateIn from '@/components/AnimateIn'
import CopyCommand from '@/components/CopyCommand'

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-edge)' }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none select-none font-mono leading-none"
        style={{
          fontSize: 'clamp(9rem, 22vw, 20rem)',
          color: 'var(--color-fg)',
          opacity: 0.013,
          bottom: '-0.12em',
          right: '-0.04em',
          letterSpacing: '-0.04em',
        }}
      >
        now
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px',
          height: '600px',
          left: '30%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.016) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-28 relative z-10">
        <AnimateIn variant="clip">
          <div className="section-label mb-8 flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            get started
          </div>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <h2
            className="text-fg font-normal leading-[0.9] mb-10"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            start building
            <br />
            <span className="text-dim">with memory.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.12} variant="blur">
          <p className="text-muted text-sm mb-8 leading-relaxed max-w-[40ch]">
            Works with Claude Code, Cursor, Windsurf, and Antigravity.
            Two commands to set up — from the next session,
            the AI already knows your project.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <CopyCommand />
        </AnimateIn>
      </div>
    </section>
  )
}
