import AnimateIn from '@/components/AnimateIn'
import { LIVE_FEATURES, COMING_FEATURES } from '@/lib/content'

export default function FeatureStatusSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-edge)' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <AnimateIn variant="clip" className="mb-12">
          <div className="section-label flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            what&apos;s available
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl">
          <AnimateIn delay={0.05}>
            <div
              className="text-xs text-fg mb-6 pb-3"
              style={{ borderBottom: '1px solid var(--color-edge)' }}
            >
              live now
            </div>
            <ul className="flex flex-col gap-3">
              {LIVE_FEATURES.map((f) => (
                <li key={f.name} className="flex flex-col gap-0.5">
                  <span className="text-fg text-xs font-mono">{f.name}</span>
                  <span className="text-subtle text-xs">{f.desc}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div
              className="text-xs text-subtle mb-6 pb-3"
              style={{ borderBottom: '1px solid var(--color-edge)' }}
            >
              coming soon
            </div>
            <ul className="flex flex-col gap-3">
              {COMING_FEATURES.map((f) => (
                <li key={f.name} className="flex flex-col gap-0.5">
                  <span className="text-subtle text-xs font-mono">{f.name}</span>
                  <span className="text-dim text-xs">{f.desc}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
