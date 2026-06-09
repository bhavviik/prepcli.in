'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'getting started',        href: '#getting-started' },
  { label: '→ installation',         href: '#installation' },
  { label: '→ authentication',       href: '#authentication' },
  { label: '→ init project',         href: '#init' },
  { label: '→ install workflows',    href: '#install-workflows' },
  { label: '→ using slash commands', href: '#using-slash-commands' },
  { label: 'commands',               href: '#commands' },
  { label: '→ auth',                 href: '#cmd-auth' },
  { label: '→ init',                 href: '#cmd-init' },
  { label: '→ context',              href: '#cmd-context' },
  { label: '→ install',              href: '#cmd-install' },
  { label: '→ session',              href: '#cmd-session' },
  { label: '→ log',                  href: '#cmd-log' },
  { label: '→ record',               href: '#cmd-record' },
  { label: 'how it works',           href: '#how-it-works' },
  { label: '→ context injection',    href: '#context-injection' },
  { label: '→ decision history',     href: '#decision-history' },
  { label: '→ decision records',     href: '#decision-records' },
  { label: 'self-hosting',           href: '#self-hosting' },
]

export default function DocsSidebar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '0px 0px -72% 0px', threshold: 0 },
    )

    document
      .querySelectorAll('article h2[id], article h3[id]')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden md:block">
      <div className="sticky top-20">
        <div className="section-label mb-6">prepcli docs</div>
        <nav className="flex flex-col">
          {links.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            const isChild = link.label.startsWith('→')

            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs py-1 transition-colors duration-150 ${
                  isActive
                    ? 'text-fg'
                    : 'text-dim hover:text-subtle'
                }`}
                style={{
                  paddingLeft: isChild ? '1rem' : undefined,
                  borderLeft: isActive
                    ? '1px solid var(--color-subtle)'
                    : '1px solid transparent',
                  marginLeft: isActive ? '-1px' : undefined,
                }}
              >
                {isChild ? link.label.replace('→ ', '') : link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
