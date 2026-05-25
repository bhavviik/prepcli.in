import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-24"
      style={{ borderTop: '1px solid var(--color-edge)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-fg text-sm mb-1">prepcli</div>
            <div className="text-dim text-xs">persistent AI collaboration layer</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs text-dim">
            <Link href="/"     className="hover:text-muted transition-colors duration-200">home</Link>
            <Link href="/docs" className="hover:text-muted transition-colors duration-200">docs</Link>
            <a
              href="https://github.com/bhavviik/prepcli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted transition-colors duration-200"
            >
              github
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--color-edge)' }}
        >
          <div className="text-xs text-dim">
            no lock-in — decision history is pure git, readable without a prepcli account
          </div>
          <div className="text-xs text-dim">
            works with Claude Code · Cursor · Windsurf · Antigravity
          </div>
        </div>
      </div>
    </footer>
  )
}
