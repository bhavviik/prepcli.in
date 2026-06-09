import type { Problem, Benefit, Command, Feature, QuickNote } from '@/types'

export const ROLLING_PHRASES: string[] = [
  'The AI that already knows your project.',
  "Everything your team decided last month — still here.",
  'No re-explaining. Every session starts where you left off.',
  'New teammate joins. Full context. Day one.',
  'Six smart workflows. One install.',
  'The longer you use it, the better it gets.',
]

export const PROBLEMS: Problem[] = [
  {
    n: '01',
    title: 'every session\nstarts from scratch.',
    body: "You open an AI session on a project you've been building for months. The AI has no idea who you are, what you've built, or what matters. It asks the same basic questions it asked last week. You paste the same context block you always paste. Explain the same constraints. And the conversation that should start with solving your problem starts with onboarding the AI — again.",
    fragLabel: 'what the AI asks every single time',
    fragment: [
      { text: '?  what tech stack are you using?',             style: 'subtle' },
      { text: '?  are there any rules or files to avoid?',     style: 'subtle' },
      { text: '?  what have you already tried?',               style: 'subtle' },
      { text: '?  what was decided in the last session?',      style: 'subtle' },
      { text: '?  any third-party services involved?',         style: 'subtle' },
      { text: '   same questions. different day. no memory.',  style: 'dim' },
    ],
  },
  {
    n: '02',
    title: 'the "why" behind\nevery decision disappears.',
    body: "Someone removed a library three months ago. You don't remember why. The code doesn't say. The commit message says 'cleanup'. An AI working on the same feature today will confidently suggest that exact library again — because it has no idea it was a deliberate choice. That's not just annoying. It's how hours get wasted rediscovering decisions that were already made.",
    fragLabel: 'looking at your codebase 6 months later',
    fragment: [
      { text: '  commit: removed date-fns library',           style: 'fg' },
      { text: '  commit: auth middleware made read-only',     style: 'fg' },
      { text: '  commit: switched away from Redis sessions',  style: 'fg' },
      { text: '',                                              style: 'dim' },
      { text: '  why any of this happened: no record.',       style: 'dim' },
      { text: '  what was tried before: no record.',          style: 'dim' },
    ],
  },
  {
    n: '03',
    title: 'nothing you teach\nthe AI ever sticks.',
    body: "Every correction you make after hitting GO is gone by the next session. Every constraint you explain, every pattern you establish, every 'don't do it that way' — erased. You're not building shared understanding with your AI. You're filling a bucket that empties every time you close the tab. And the AI keeps suggesting the same things you keep rejecting.",
    fragLabel: 'the AI, session after session',
    fragment: [
      { text: '  suggestion: use date-fns for dates',         style: 'subtle' },
      { text: '  suggestion: try moment.js as a fallback',    style: 'subtle' },
      { text: '  suggestion: add Redis for session storage',  style: 'subtle' },
      { text: '',                                              style: 'dim' },
      { text: '  all three: already removed or ruled out.',   style: 'dim' },
      { text: '  the AI has no memory of any of it.',         style: 'dim' },
    ],
  },
]

export const BENEFITS: Benefit[] = [
  {
    n: '01',
    title: 'the AI walks in\nalready knowing your project.',
    body: "After a one-time setup, every AI session starts with your full project knowledge already loaded — silently, before the first word. Your tech stack, your team's rules, recent decisions, things that are off-limits, and unresolved questions. The AI doesn't ask what framework you're using. It doesn't suggest what you've already rejected. It operates as if it's been on your team for months.",
    code: {
      label: 'loaded before the session begins',
      lines: [
        { c: 'fg',     t: '  stack: Next.js 15 · TypeScript 5 · tRPC · Prisma' },
        { c: 'muted',  t: '  rule: date-fns is removed — causes timezone bugs' },
        { c: 'muted',  t: '  rule: auth module is off-limits (legal requirement)' },
        { c: 'muted',  t: '  rule: keep bundle under 200kb — no heavy libraries' },
        { c: 'subtle', t: '  last decision: JWT tokens expire after 7 days max' },
        { c: 'subtle', t: '  open question: payment retry logic still unresolved' },
        { c: 'dim',    t: '  ready. no re-explanation needed.' },
      ],
    },
  },
  {
    n: '02',
    title: 'every important decision\nis saved and searchable.',
    body: "When a session ends, prepcli quietly records what was done, why that approach was chosen, what was tried and rejected, and what constraints were in play. That record travels with your codebase — anyone who clones the repo can see the full reasoning, linked to the exact code change it produced. Six months from now, when someone asks 'why is it built this way?' — the answer is already there.",
    code: {
      label: 'prepcli log — your full decision history',
      lines: [
        { c: 'fg',     t: '  May 24  ·  debug  ·  3 turns  ·  commit a4f2c1d' },
        { c: 'muted',  t: '    fixed calendar — removed date-fns' },
        { c: 'subtle', t: '    why: UTC+5:30 half-hour offsets break silently' },
        { c: 'subtle', t: '    tried: dayjs, moment.js — same root issue' },
        { c: 'dim',    t: '    ruled out: all external timezone libraries' },
        { c: 'fg',     t: '  May 20  ·  plan  ·  5 turns  ·  commit def456' },
        { c: 'muted',  t: '    JWT refresh: sliding window, hard 7-day cap' },
      ],
    },
  },
  {
    n: '03',
    title: 'a new teammate hits\nthe ground running.',
    body: "Your project's full history — every decision, every rule, every lesson learned — travels with the repository. When a new developer joins, they run two commands and immediately have the same context the rest of the team built over months. The AI they work with is already calibrated to your codebase. No ramp-up wiki. No 'ask the senior dev.' No re-learning what was already figured out.",
    code: {
      label: 'new teammate · day one · two commands',
      lines: [
        { c: 'subtle', t: '  $ git clone github.com/company/project' },
        { c: 'fg',     t: '  $ prepcli auth login && prepcli install' },
        { c: 'dim',    t: '' },
        { c: 'muted',  t: '  stack loaded: Next.js 15 · TypeScript · tRPC' },
        { c: 'muted',  t: '  41 team decisions available from history' },
        { c: 'muted',  t: '  12 active rules applied to this session' },
        { c: 'subtle', t: '  same context as the rest of the team. day one.' },
      ],
    },
  },
]

export const COMMANDS: Command[] = [
  {
    cmd: '/debug',
    desc: 'diagnose a bug — properly',
    detail: 'Starts with your full project context already loaded. Asks four sharp questions about the specific bug — informed by how similar issues have played out in your codebase before. Gives you a structured diagnosis with root cause and fix, not a generic guess.',
  },
  {
    cmd: '/plan',
    desc: 'plan before you write a line',
    detail: 'Catches every ambiguity and hidden conflict before any code is written. Checks what you are planning against your existing rules and past decisions. Surfaces integration risks. Saves hours of rework.',
  },
  {
    cmd: '/prep',
    desc: 'turn a rough idea into a precise brief',
    detail: 'Takes your messy task description and turns it into a complete, scoped prompt — with context, constraints, and boundaries made explicit. The AI knows exactly what to do before you say GO.',
  },
  {
    cmd: '/refactor',
    desc: 'clean up code — without breaking things',
    detail: 'Knows which parts of the codebase are off-limits, what patterns your team uses, and what was already tried and rejected. Improves the code without undoing decisions that were made on purpose.',
  },
  {
    cmd: '/review',
    desc: 'review against your actual standards',
    detail: 'Reviews code against your team\'s real conventions — not generic internet advice. Catches violations specific to your codebase. Doesn\'t flag decisions your team made deliberately.',
  },
  {
    cmd: '/write',
    desc: 'write docs that match reality',
    detail: 'Writes documentation that reflects how your project actually works today — your terminology, your architecture, your decisions. Not a generic template with your project name filled in.',
  },
]

export const LIVE_FEATURES: Feature[] = [
  { name: 'prepcli install',     desc: 'drops all six commands into Claude Code, Cursor, Windsurf, and Antigravity' },
  { name: 'prepcli auth login',  desc: 'sign in with just your email — no passwords, no third-party accounts' },
  { name: 'prepcli init',        desc: 'reads your project once, remembers it forever' },
  { name: 'prepcli context',     desc: 'see exactly what the AI knows about your project right now' },
  { name: 'prepcli log',         desc: 'browse every AI decision linked to the commit where it happened' },
  { name: 'prepcli session add', desc: 'records each AI turn as it happens — works offline, no login needed' },
  { name: 'prepcli record',      desc: 'save any decision to the history yourself, any time' },
  { name: '6 slash commands',    desc: '/debug /plan /prep /refactor /review /write' },
]

export const COMING_FEATURES: Feature[] = [
  { name: 'quality tracking',        desc: 'see how many corrections you had to make after saying GO — and watch it drop' },
  { name: 'smarter questions',       desc: 'questions that learn from your sessions and stop missing the same things twice' },
  { name: 'session analytics',       desc: 'which workflows are improving, which gaps keep coming up, and how it trends' },
  { name: 'team sharing',            desc: 'shared rules and history across the whole team — not just your own sessions' },
  { name: 'setup check',             desc: 'one command that tells you exactly what is not configured and how to fix it' },
  { name: 'before vs after reports', desc: 'how much back-and-forth you had 3 months ago vs today' },
]

export const QUICK_NOTES: QuickNote[] = [
  {
    title: 'set up once, never configure again',
    body: 'Run one command in your project folder. prepcli reads your codebase and builds a picture of it. From the next session onward, every AI you work with starts already knowing your project.',
  },
  {
    title: 'works inside the tools you already use',
    body: 'No new app to learn. No browser tab to switch to. prepcli adds six commands directly inside Claude Code, Cursor, Windsurf, or Antigravity — the tools your team already uses every day.',
  },
  {
    title: 'your codebase stays completely clean',
    body: 'Nothing extra gets added to your main code. All the history prepcli tracks is stored invisibly alongside your project — readable by your team, invisible to anyone just looking at the code.',
  },
  {
    title: 'free to start, no credit card',
    body: 'The full core experience — all six commands, the decision log, and session recording — is completely free. Upgrade when you want the AI to start improving its questions automatically over time.',
  },
]
