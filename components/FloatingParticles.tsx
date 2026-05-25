const DOTS = Array.from({ length: 100 }, (_, i) => {
  const left  = ((i * 37 + (i % 5) * 11) % 96) + 2
  const top   = ((i * 53 + (i % 7) * 13) % 97) + 1
  const delay = ((i * 41) % 1000) / 100
  const dur   = 12 + ((i * 67) % 800) / 100
  const size  = i % 5 === 0 ? '5px' : i % 3 === 0 ? '4px' : '3px'
  return { left, top, delay, dur, size }
})

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {DOTS.map((p, i) => (
        <div
          key={i}
          className="particle-dot"
          style={{
            position:        'absolute',
            width:           p.size,
            height:          p.size,
            borderRadius:    '50%',
            backgroundColor: 'var(--color-fg)',
            left:            `${p.left}%`,
            top:             `${p.top}%`,
            opacity:         0,
            animation:       `particle-rise ${p.dur}s ${p.delay}s ease-in infinite`,
          }}
        />
      ))}
    </div>
  )
}
