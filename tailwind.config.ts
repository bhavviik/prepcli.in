import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        edge:    'var(--color-edge)',
        fg:      'var(--color-fg)',
        muted:   'var(--color-muted)',
        subtle:  'var(--color-subtle)',
        dim:     'var(--color-dim)',
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'var(--color-edge)',
      },
    },
  },
  plugins: [],
}

export default config
