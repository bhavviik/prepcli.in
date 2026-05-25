import AnimateIn from '@/components/AnimateIn'

export default function TransformSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-edge)', borderBottom: '1px solid var(--color-edge)' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: '900px',
          height: '500px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.014) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <AnimateIn delay={0.05} variant="blur">
          <p
            className="text-fg font-normal leading-[0.92]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            then the AI
            <br />
            <span className="text-dim">remembered.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
