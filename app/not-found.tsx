import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — prepcli',
}

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 flex flex-col gap-6">
      <div className="section-label">404</div>
      <h1
        className="text-fg font-normal leading-none"
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
      >
        page not found.
      </h1>
      <p className="text-muted text-xs leading-relaxed max-w-[40ch]">
        This route doesn&apos;t exist. Head back home or check the docs.
      </p>
      <div className="flex gap-6 mt-2">
        <Link href="/" className="text-xs text-subtle hover:text-fg transition-colors duration-200">
          ← home
        </Link>
        <Link href="/docs" className="text-xs text-subtle hover:text-fg transition-colors duration-200">
          docs
        </Link>
      </div>
    </div>
  )
}
