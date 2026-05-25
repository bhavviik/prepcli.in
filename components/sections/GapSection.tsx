import AnimateIn from '@/components/AnimateIn'
import PainFragment from '@/components/PainFragment'
import { PROBLEMS } from '@/lib/content'

export default function GapSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="ghost-num" aria-hidden="true">gap</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn variant="clip" className="mb-14">
          <div className="section-label flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            the gap
          </div>
        </AnimateIn>

        <div className="problems-group" style={{ borderTop: '1px solid var(--color-edge)' }}>
          {PROBLEMS.map((p, i) => (
            <AnimateIn key={p.n} delay={i * 0.08}>
              <div
                className="problem-row py-10 relative"
                style={{ borderBottom: '1px solid var(--color-edge)' }}
              >
                <span
                  className="text-dim font-mono block mb-4"
                  style={{ fontSize: '10px', letterSpacing: '0.14em' }}
                >
                  {p.n}
                </span>

                <h3
                  className="text-fg font-normal leading-[0.93] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)', whiteSpace: 'pre-line' }}
                >
                  {p.title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <p className="text-muted text-xs leading-relaxed max-w-[44ch]">{p.body}</p>
                  <div>
                    <PainFragment label={p.fragLabel} lines={p.fragment} />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
