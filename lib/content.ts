import type { Problem, Benefit, Command, Feature, QuickNote } from '@/types'

export const ROLLING_PHRASES: string[] = [
  'No cold starts. Ever.',
  "Decisions that don't disappear.",
  'Context that travels with every clone.',
  'The AI already knows your project.',
  'Six workflows. One install.',
  'AI that finally remembers your work.',
]

export const PROBLEMS: Problem[] = [
  {
    n: '01',
    title: 'every session\nstarts cold.',
    body: "The AI asks what your stack is. Suggests things you ruled out last month. Doesn't know which files are off-limits. Every conversation starts blank.",
    fragLabel: 'new session',
    fragment: [
      { text: '? what framework are you using?',     style: 'subtle' },
      { text: '? any constraints I should know?',    style: 'subtle' },
      { text: '? what was decided last session?',    style: 'subtle' },
      { text: '? can you remind me of the context?', style: 'dim' },
    ],
  },
  {
    n: '02',
    title: 'decisions\nvanish.',
    body: 'Git tracks what changed. Nothing tracks why. No record of why the AI chose approach A over B. Six months later, nobody knows.',
    fragLabel: '6 months later',
    fragment: [
      { text: '? why was date-fns removed?',         style: 'subtle' },
      { text: '? why is auth middleware read-only?',  style: 'subtle' },
      { text: '? what approaches were ruled out?',    style: 'subtle' },
      { text: '  reasoning: none found.',             style: 'dim' },
    ],
  },
  {
    n: '03',
    title: 'context\ndies.',
    body: 'Stack, conventions, constraints — re-explained every single time. An AI without your constraints will suggest things that are off-limits.',
    fragLabel: 'ai suggestion',
    fragment: [
      { text: '  try date-fns for timezone support.',   style: 'subtle' },
      { text: '  add moment.js as a fallback.',         style: 'subtle' },
      { text: '',                                       style: 'dim' },
      { text: '  (ruled out. twice. still suggested.)', style: 'dim' },
    ],
  },
]

export const BENEFITS: Benefit[] = [
  {
    n: '01',
    title: 'the AI already knows\nyour project.',
    body: "After a one-time setup, every session starts with your stack, constraints, and recent decisions already loaded. The AI doesn't ask what framework you're using. It operates as if it was already in the room.",
    code: {
      label: 'session context auto-injected',
      lines: [
        { c: 'fg',     t: '> stack: Next.js 15, TypeScript, Tailwind' },
        { c: 'muted',  t: '> constraints: no date-fns (UTC+5:30 issue)' },
        { c: 'muted',  t: '> auth-middleware: read-only — legal hold' },
        { c: 'muted',  t: '> recent: migrated from pages/ → app/ router' },
        { c: 'subtle', t: 'ready. no re-explanation needed.' },
      ],
    },
  },
  {
    n: '02',
    title: "important reasoning\nnever disappears.",
    body: 'Every AI work session captures what was done, why, and what was ruled out — linked to the commit it produced. Travels with every clone. Readable by anyone without a prepcli account.',
    code: {
      label: '$ prepcli log',
      lines: [
        { c: 'fg',     t: 'May 24  ·  debug  ·  3 turns  ·  commit a4f2c1d' },
        { c: 'muted',  t: '  rebuilt calendar — dropped date-fns' },
        { c: 'subtle', t: '  Why:   UTC+5:30 half-hour offsets fail silently' },
        { c: 'subtle', t: '  Tried: dayjs, moment.js — same problem' },
        { c: 'fg',     t: 'May 22  ·  prep  ·  5 turns  ·  commit def4561' },
        { c: 'muted',  t: '  added rate limiting to finalize endpoint' },
      ],
    },
  },
  {
    n: '03',
    title: 'a new team member\nis ready immediately.',
    body: 'Clone the repo and run two commands. Every decision, every constraint, every past AI session is immediately available. No catch-up. No wiki to read.',
    code: {
      label: '# new member, first day',
      lines: [
        { c: 'subtle', t: '$ git clone repo && cd project' },
        { c: 'fg',     t: '$ prepcli auth login && prepcli install' },
        { c: 'dim',    t: '' },
        { c: 'muted',  t: '> context: Next.js 15, TypeScript, tRPC' },
        { c: 'muted',  t: '> 34 decisions loaded from history' },
        { c: 'subtle', t: 'ready. full context from day one.' },
      ],
    },
  },
]

export const COMMANDS: Command[] = [
  { cmd: '/debug',    desc: 'structured bug diagnosis',         detail: 'Asks four targeted questions grounded in your actual codebase. Produces a diagnosis, not a guess.' },
  { cmd: '/plan',     desc: 'feature planning before any code', detail: 'Surfaces ambiguities, flags constraint conflicts, identifies integration risks before a line is written.' },
  { cmd: '/prep',     desc: 'generate the structured prompt',   detail: 'Turns a task description into a fully-scoped prompt with all context made explicit.' },
  { cmd: '/refactor', desc: 'context-aware refactor sessions',  detail: 'Knows which files are off-limits, patterns must be preserved, and what was ruled out in past sessions.' },
  { cmd: '/review',   desc: 'code review with project context', detail: 'Reviews against your actual conventions — not generic best practices. Flags real violations.' },
  { cmd: '/write',    desc: 'docs, specs, technical writing',   detail: 'Writes documentation that reflects the actual state of your project — your terminology, your decisions.' },
]

export const LIVE_FEATURES: Feature[] = [
  { name: 'prepcli install',     desc: 'workflow files for Claude Code, Cursor, Windsurf, Antigravity' },
  { name: 'prepcli auth login',  desc: 'email OTP — no passwords' },
  { name: 'prepcli init',        desc: 'stack detection, cloud context push' },
  { name: 'prepcli context',     desc: 'view and preview project context' },
  { name: 'prepcli session add', desc: 'silent turn recording, no network needed' },
  { name: 'prepcli log',         desc: 'browse your decision history' },
  { name: 'prepcli record',      desc: 'manual decision recording' },
  { name: '6 slash commands',    desc: '/debug /plan /prep /refactor /review /write' },
]

export const COMING_FEATURES: Feature[] = [
  { name: 'delta tracker',           desc: 'measure prompt quality, classify gaps per session' },
  { name: 'prepcli stats',           desc: 'quality trends and gap patterns over time' },
  { name: 'RAG pipeline',            desc: 'questions informed by your session history automatically' },
  { name: 'prepcli doctor',          desc: 'setup diagnostics' },
  { name: 'team features',           desc: 'shared context, team invites, org-level constraints' },
  { name: 'prepcli stats --compare', desc: 'quality before vs after, across workflows' },
]

export const QUICK_NOTES: QuickNote[] = [
  {
    title: 'one-time setup per project',
    body: 'Run once. From the next session onward, the AI already knows your project — no re-explanation needed.',
  },
  {
    title: 'new team member',
    body: 'Clone the repo, run auth login and install. Immediately has full project context and the complete decision history.',
  },
  {
    title: 'auth is email OTP',
    body: 'No passwords, no OAuth. Enter your email, get a code, done. Free to use.',
  },
]
