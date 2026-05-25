import AnimateIn from '@/components/AnimateIn'
import LiveBlock from '@/components/LiveBlock'
import { BENEFITS } from '@/lib/content'

export default function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="ghost-num" aria-hidden="true">mem</div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <AnimateIn variant="clip" className="mb-14">
          <div className="section-label flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            what changes
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-20">
          {BENEFITS.map((b) => (
            <AnimateIn key={b.n} delay={0.05}>
              <div className="benefit-item grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <span className="text-dim text-xs font-mono block mb-4">{b.n}</span>
                  <h3
                    className="text-fg font-normal leading-[0.95] mb-5"
                    style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)', whiteSpace: 'pre-line' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed max-w-[42ch]">{b.body}</p>
                </div>
                <LiveBlock label={b.code.label} lines={b.code.lines} />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
