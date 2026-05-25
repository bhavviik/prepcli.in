'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/docs',    label: 'docs' },
    { href: 'https://github.com/bhavviik/prepcli', label: 'github', external: true },
  ]

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'var(--color-nav-bg)',
        borderBottom: '1px solid var(--color-edge)',
        backdropFilter: 'blur(16px) saturate(1.1)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-fg font-mono text-sm font-normal tracking-tight hover:text-muted transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="currentColor" fillOpacity="0.12"/>
            <text x="3" y="22" fontFamily="Courier New, Courier, monospace" fontSize="14" fontWeight="normal" fill="currentColor" letterSpacing="-0.5">&gt;_</text>
          </svg>
          prepcli
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtle text-xs hover:text-fg transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors duration-200 ${
                  pathname === link.href || pathname?.startsWith(link.href + '/')
                    ? 'text-fg'
                    : 'text-subtle hover:text-fg'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
