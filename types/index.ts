export type TextColor = 'fg' | 'muted' | 'subtle' | 'dim'

export interface FragmentLine {
  text: string
  style: TextColor
}

export interface Problem {
  n: string
  title: string
  body: string
  fragLabel: string
  fragment: FragmentLine[]
}

export interface LiveBlockLine {
  c: TextColor
  t: string
}

export interface Benefit {
  n: string
  title: string
  body: string
  code: {
    label: string
    lines: LiveBlockLine[]
  }
}

export interface Command {
  cmd: string
  desc: string
  detail: string
}

export interface Feature {
  name: string
  desc: string
}

export interface QuickNote {
  title: string
  body: string
}

export type LineType = 'cmd' | 'info' | 'ask' | 'data' | 'ready' | 'sep'

export interface TerminalLine {
  id: number
  type: LineType
  text: string
}
