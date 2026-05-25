import AnimateIn, { StaggerGroup, StaggerItem } from '@/components/AnimateIn'
import { QUICK_NOTES } from '@/lib/content'

export default function QuickStartSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-edge)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn variant="clip" className="mb-12">
          <div className="section-label flex items-center gap-4">
            <span className="inline-block w-6 h-px bg-subtle opacity-40" />
            quick start
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
          <AnimateIn delay={0.06}>
            <div className="code-block text-xs">
              <div className="text-subtle mb-1"># install</div>
              <div className="mb-1">
                <span className="text-subtle">$</span>
                <span className="text-fg ml-2">curl -fsSL https://prepcli.in/install.sh | bash</span>
              </div>
              <div className="text-dim mb-4" style={{ paddingLeft: '1rem', fontSize: '10px' }}>
                or: npm install -g @prepcli/prepcli
              </div>
              <div className="text-subtle mb-1"># authenticate</div>
              <div className="mb-4">
                <span className="text-subtle">$</span>
                <span className="text-fg ml-2">prepcli auth login</span>
              </div>
              <div className="text-subtle mb-1"># initialize project</div>
              <div className="mb-4">
                <span className="text-subtle">$</span>
                <span className="text-fg ml-2">prepcli init</span>
              </div>
              <div className="text-subtle mb-1"># install workflow files</div>
              <div>
                <span className="text-subtle">$</span>
                <span className="text-fg ml-2">prepcli install</span>
              </div>
            </div>
          </AnimateIn>

          <StaggerGroup className="flex flex-col gap-7" baseDelay={0.12}>
            {QUICK_NOTES.map((item) => (
              <StaggerItem key={item.title}>
                <div style={{ borderLeft: '1px solid var(--color-edge)', paddingLeft: '1.1rem' }}>
                  <div className="text-fg text-xs mb-1.5">{item.title}</div>
                  <div className="text-muted text-xs leading-relaxed">{item.body}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
