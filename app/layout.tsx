import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'prepcli — persistent AI collaboration layer',
  description:
    "AI sessions that start informed. Decisions that don't disappear. prepcli injects your project context before every AI session and records every decision automatically.",
  keywords: ['prepcli', 'AI collaboration', 'Claude Code', 'Cursor', 'Windsurf', 'Antigravity', 'AI sessions', 'developer tools', 'CLI'],
  openGraph: {
    title: 'prepcli — persistent AI collaboration layer',
    description: "AI sessions that start informed. Decisions that don't disappear.",
    url: 'https://prepcli.in',
    siteName: 'prepcli',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'prepcli — persistent AI collaboration layer',
    description: "AI sessions that start informed. Decisions that don't disappear.",
  },
  metadataBase: new URL('https://prepcli.in'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
