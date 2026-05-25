import type { Metadata } from 'next'
import { H2, H3, P, Code, Cmd, DocCodeBlock, Flag } from '@/components/docs/Prose'

export const metadata: Metadata = {
  title: 'docs — prepcli',
  description:
    'prepcli command reference — install, auth, context, session, log, and record commands with examples.',
}

const sidebarLinks = [
  { label: 'getting started',          href: '#getting-started' },
  { label: '→ installation',           href: '#installation' },
  { label: '→ authentication',         href: '#authentication' },
  { label: '→ init project',           href: '#init' },
  { label: '→ install workflows',      href: '#install-workflows' },
  { label: '→ using slash commands',   href: '#using-slash-commands' },
  { label: 'commands',                 href: '#commands' },
  { label: '→ auth',                   href: '#cmd-auth' },
  { label: '→ init',                   href: '#cmd-init' },
  { label: '→ context',                href: '#cmd-context' },
  { label: '→ install',                href: '#cmd-install' },
  { label: '→ session',                href: '#cmd-session' },
  { label: '→ log',                    href: '#cmd-log' },
  { label: '→ record',                 href: '#cmd-record' },
  { label: 'how it works',             href: '#how-it-works' },
  { label: '→ context injection',      href: '#context-injection' },
  { label: '→ decision history',       href: '#decision-history' },
  { label: '→ decision records',       href: '#decision-records' },
  { label: 'self-hosting',             href: '#self-hosting' },
]

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 xl:grid-cols-[240px_1fr]">

        <aside className="hidden md:block">
          <div className="sticky top-20 bg-bg">
            <div className="section-label mb-5">prepcli docs</div>
            <nav className="flex flex-col gap-1">
              {sidebarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-subtle hover:text-fg transition-colors py-0.5"
                  style={{
                    paddingLeft: link.label.startsWith('→') ? '0.75rem' : undefined,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0">

          {/* GETTING STARTED */}
          <H2 id="getting-started">getting started</H2>

          <H3 id="installation">installation</H3>
          <P>prepcli is a global CLI tool. Install it once and use it across all your projects.</P>
          <DocCodeBlock>
            <Cmd cmd="curl -fsSL https://prepcli.in/install.sh | bash" comment="# recommended" />
          </DocCodeBlock>
          <P>
            Requires Node.js 18 or later. The script checks your Node version, installs prepcli
            globally, and prints next steps. Or install directly via npm:
          </P>
          <DocCodeBlock>
            <Cmd cmd="npm install -g @prepcli/prepcli" />
          </DocCodeBlock>
          <P>
            After installation, <Code>prepcli --version</Code> should print the current version.
          </P>

          <H3 id="authentication">authentication</H3>
          <P>
            Authentication uses email OTP — no passwords. Run the login command and enter your
            email. A 6-digit code is sent to your inbox. Enter the code to authenticate.
          </P>
          <DocCodeBlock>
            <Cmd cmd="prepcli auth login" />
            <div className="text-subtle mt-1">Email: you@example.com</div>
            <div className="text-subtle">Check your inbox for a 6-digit code.</div>
            <div className="text-subtle">Code: 482193</div>
            <div className="text-muted mt-1">Logged in as you@example.com</div>
          </DocCodeBlock>
          <P>
            The auth token is stored in <Code>~/.prepcli/config.json</Code> with mode 0600.
            It is never committed, never synced, never included in any project file.
            Run <Code>prepcli auth logout</Code> to invalidate the session and delete the local token.
          </P>

          <H3 id="init">initialize a project</H3>
          <P>
            Run <Code>prepcli init</Code> inside your project directory. It scans your codebase
            (package.json, lock files, config files), detects the stack, creates a{' '}
            <Code>.prepclirc</Code> file, and pushes an initial project context to the cloud.
          </P>
          <DocCodeBlock>
            <Cmd cmd="cd my-project" />
            <div className="mt-1"><Cmd cmd="prepcli init" /></div>
            <div className="text-subtle mt-1">Scanning codebase...</div>
            <div className="text-muted">Detected: Next.js 16, TypeScript 5, tRPC, Prisma, TailwindCSS, pnpm</div>
            <div className="text-subtle">Pushing context to cloud...</div>
            <div className="text-muted">Done. .prepclirc created (safe to commit).</div>
            <div className="text-subtle">Git hook installed at .git/hooks/pre-push</div>
          </DocCodeBlock>
          <P>
            <Code>.prepclirc</Code> contains only a project_id UUID and the API URL — no secrets.
            It is safe to commit. Every team member who clones the repo connects to the same
            project context automatically.
          </P>

          <H3 id="install-workflows">install workflow files</H3>
          <P>
            Run <Code>prepcli install</Code> to copy the six workflow files to your AI tools.
            It auto-detects Claude Code, Cursor, Windsurf, and Antigravity based on config
            files present in your environment.
          </P>
          <DocCodeBlock>
            <Cmd cmd="prepcli install" />
            <div className="text-subtle mt-1">Detected: Claude Code, Cursor</div>
            <div className="text-muted">Installed 6 workflow files to ~/.claude/commands/</div>
            <div className="text-muted">Installed 6 workflow files to .cursor/rules/</div>
            <div className="mt-3">
              <Cmd cmd="prepcli install --tool claude-code" comment="# install to one tool" />
            </div>
            <Cmd cmd="prepcli install --tool cursor,windsurf" />
            <Cmd cmd="prepcli install --tool antigravity" />
          </DocCodeBlock>

          <H3 id="using-slash-commands">using slash commands</H3>
          <P>
            Once <Code>prepcli install</Code> completes, the six workflow files are registered as
            native slash commands in your AI tool. You invoke them directly in the chat or
            terminal interface — no extra terminal, no flags, no copy-paste.
          </P>
          <DocCodeBlock>
            <div className="text-subtle mb-2">{`# available in Claude Code, Cursor, Windsurf, and Antigravity`}</div>
            <div className="text-fg">/debug<span className="text-dim ml-4">investigate a bug — project context loaded before the first question</span></div>
            <div className="text-fg">/plan<span className="text-dim ml-5">plan a feature or change before writing any code</span></div>
            <div className="text-fg">/prep<span className="text-dim ml-5">prime the AI with full context before a long task</span></div>
            <div className="text-fg">/refactor<span className="text-dim ml-2">refactor code with project constraints enforced</span></div>
            <div className="text-fg">/review<span className="text-dim ml-4">review a diff or PR with decision history in scope</span></div>
            <div className="text-fg">/write<span className="text-dim ml-5">generate new code with full context and active constraints</span></div>
          </DocCodeBlock>
          <P>
            In <strong className="text-muted font-normal">Claude Code</strong>, type the command
            in the chat panel or the in-terminal prompt. In{' '}
            <strong className="text-muted font-normal">Cursor</strong>, open the chat panel
            (⌘L) and type the slash command. In{' '}
            <strong className="text-muted font-normal">Windsurf</strong>, use the Cascade chat
            panel. In <strong className="text-muted font-normal">Antigravity</strong>, type it
            in the chat interface. The tool routes it to the installed workflow file, which
            silently loads your project context before the session starts.
          </P>
          <DocCodeBlock>
            <div className="text-subtle mb-2">{`# Claude Code terminal or chat`}</div>
            <div className="text-fg">/debug there&apos;s a timezone bug in the calendar</div>
            <div className="text-subtle mt-3 mb-2">{`# Cursor — Cmd+L → chat panel`}</div>
            <div className="text-fg">/plan add dark mode support to the settings page</div>
            <div className="text-subtle mt-3 mb-2">{`# Windsurf — Cascade chat`}</div>
            <div className="text-fg">/refactor the auth module is getting too large</div>
            <div className="text-subtle mt-3 mb-2">{`# Antigravity — chat panel`}</div>
            <div className="text-fg">/review</div>
          </DocCodeBlock>
          <P>
            Each session is tracked automatically. At <Code>git push</Code>, prepcli surfaces the
            accumulated turns and asks for a one-line summary before saving the decision to
            your project history.
          </P>

          {/* COMMANDS */}
          <H2 id="commands">commands reference</H2>

          <H3 id="cmd-auth">prepcli auth</H3>
          <DocCodeBlock>
            <Cmd cmd="prepcli auth login"  comment="# send OTP, store token" />
            <Cmd cmd="prepcli auth logout" comment="# invalidate session, delete token" />
            <Cmd cmd="prepcli auth status" comment="# show logged-in user and token expiry" />
          </DocCodeBlock>

          <H3 id="cmd-init">prepcli init</H3>
          <P>
            Scans the current directory, detects the stack, creates <Code>.prepclirc</Code>,
            pushes initial context to cloud, creates the decision history branch,
            and installs the pre-push git hook.
          </P>
          <DocCodeBlock>
            <Cmd cmd="prepcli init"               comment="# private project (default)" />
            <Cmd cmd="prepcli init --org acme"    comment="# link to an organization" />
            <Cmd cmd="prepcli init --public"      comment="# public project, community opt-in" />
          </DocCodeBlock>
          <P>
            Re-running <Code>prepcli init</Code> is safe. It never recreates or overwrites the
            decision history. It only updates the context snapshot and re-installs hooks
            if missing.
          </P>

          <H3 id="cmd-context">prepcli context</H3>
          <P>Fetch and display the current project context stored in the cloud.</P>
          <DocCodeBlock>
            <Cmd cmd="prepcli context"           comment="# print full context as JSON" />
            <Cmd cmd="prepcli context --preview" comment="# show what gets injected at session start" />
            <Cmd cmd="prepcli context edit"      comment="# open context editor" />
          </DocCodeBlock>

          <H3 id="cmd-install">prepcli install / update</H3>
          <DocCodeBlock>
            <Cmd cmd="prepcli install"                    comment="# install to all detected AI tools" />
            <Cmd cmd="prepcli install --tool claude-code" />
            <Cmd cmd="prepcli install --tool cursor,windsurf" />
            <div className="mt-2">
              <Cmd cmd="prepcli update" comment="# show diff before overwriting workflow files" />
            </div>
          </DocCodeBlock>

          <H3 id="cmd-session">prepcli session</H3>
          <P>
            Called by AI workflow files at the end of each task. Writes one session turn
            to the local <Code>.prepcli-session</Code> file. No network call. No auth required.
            Works offline.
          </P>
          <DocCodeBlock>
            <div className="text-fg">{`prepcli session add \\`}</div>
            <div className="text-fg">{`  --workflow=debug \\`}</div>
            <div className="text-fg">{`  --what="identified date-fns as root cause" \\`}</div>
            <div className="text-fg">{`  --why="UTC+5:30 half-hour offsets fail silently"`}</div>
          </DocCodeBlock>
          <P>
            At <Code>git push</Code>, the pre-push hook reads <Code>.prepcli-session</Code>, shows
            the accumulated turns, and asks for one final summary sentence before saving.
            Pressing Enter skips recording — the push is never blocked.
          </P>

          <H3 id="cmd-log">prepcli log</H3>
          <P>Browse decisions from your project&apos;s history.</P>
          <DocCodeBlock>
            <Cmd cmd="prepcli log"                    comment="# last 10 decisions" />
            <Cmd cmd="prepcli log --last 30d"         comment="# last 30 days" />
            <Cmd cmd="prepcli log --workflow debug"   comment="# filter by workflow type" />
            <Cmd cmd="prepcli log --file src/auth.ts" comment="# decisions touching this file" />
            <Cmd cmd="prepcli log --commit a4f2c1d"   comment="# linked to a specific commit" />
          </DocCodeBlock>

          <H3 id="cmd-record">prepcli record</H3>
          <P>
            Manually save a decision. Use this for decisions not tied to an AI session —
            architectural discoveries, dependency choices, security decisions.
          </P>
          <DocCodeBlock>
            <Cmd cmd="prepcli record" comment="# interactive mode" />
            <div className="mt-2 text-fg">{`prepcli record \\`}</div>
            <div className="text-fg">{`  --workflow=refactor \\`}</div>
            <div className="text-fg">{`  --what="migrated from date-fns to custom UTC handler" \\`}</div>
            <div className="text-fg">{`  --why="no half-hour offset support" \\`}</div>
            <div className="text-fg">{`  --ruled-out="dayjs, moment.js"`}</div>
          </DocCodeBlock>

          {/* HOW IT WORKS */}
          <H2 id="how-it-works">how it works</H2>

          <H3 id="context-injection">context injection</H3>
          <P>
            Every workflow file begins with a silent context fetch. Before the AI asks the user
            a single question, it loads your project context from the cloud — stack, constraints,
            recent decisions, hard limits, and open questions.
          </P>
          <P>
            The AI carries this context silently and operates as if it already knows the project.
            It does not announce what it read or summarize it back — it just uses it.
          </P>
          <DocCodeBlock>
            <div className="text-subtle mb-2">{`# what gets loaded at session start`}</div>
            <div className="text-muted">{`stack:              your detected framework, language, tooling`}</div>
            <div className="text-muted">{`active_constraints: things the AI must respect — absolute`}</div>
            <div className="text-muted">{`recent_decisions:   what was decided recently and why`}</div>
            <div className="text-muted">{`hard_limits:        project boundaries that cannot be crossed`}</div>
            <div className="text-muted">{`open_questions:     unresolved items — flagged if relevant`}</div>
          </DocCodeBlock>

          <H3 id="decision-history">the decision history</H3>
          <P>
            Every AI work session is recorded as a structured decision — what was done, why,
            what was ruled out, what constraints were active. Records are linked to the commits
            they produced, travel with every clone of the repo, and are readable without a
            prepcli account.
          </P>
          <DocCodeBlock>
            <Cmd cmd="prepcli log" />
            <div className="text-fg mt-2">{`May 24  ·  debug  ·  3 turns  ·  commit a4f2c1d`}</div>
            <div className="text-muted pl-2">{`rebuilt calendar — dropped date-fns for custom UTC handler`}</div>
            <div className="text-subtle pl-2">{`Why:   date-fns has no support for UTC+5:30 half-hour offsets`}</div>
            <div className="text-subtle pl-2">{`Tried: dayjs (same problem), moment.js (too heavy)`}</div>
          </DocCodeBlock>

          <H3 id="decision-records">decision records format</H3>
          <P>
            Each record is a structured Markdown file with YAML frontmatter. The frontmatter
            links it to the commit. The body contains the full narrative.
          </P>
          <DocCodeBlock>
            <div className="text-subtle">{`---`}</div>
            <div className="text-subtle">{`id: dec-a4f2c1d`}</div>
            <div className="text-subtle">{`commit: a4f2c1d`}</div>
            <div className="text-subtle">{`date: 2025-05-24T11:30:00Z`}</div>
            <div className="text-subtle">{`workflow: debug`}</div>
            <div className="text-subtle">{`files_changed: [src/calendar.tsx, src/utils/date.ts]`}</div>
            <div className="text-subtle mb-2">{`---`}</div>
            <div className="text-muted">{`## Summary`}</div>
            <div className="text-muted">{`Rebuilt calendar with custom timezone handling — dropped date-fns`}</div>
            <div className="text-muted mt-2">{`## Why This Approach`}</div>
            <div className="text-muted">{`date-fns had no support for UTC+5:30 half-hour offsets`}</div>
            <div className="text-muted mt-2">{`## What Was Tried and Ruled Out`}</div>
            <div className="text-muted">{`- date-fns — no half-hour offset support`}</div>
            <div className="text-muted">{`- dayjs — same problem with spacetime plugin`}</div>
            <div className="text-muted">{`- moment.js — too heavy (67KB), same issue`}</div>
            <div className="text-muted mt-2">{`## Constraints Active at Time of Decision`}</div>
            <div className="text-muted">{`- No new npm dependencies`}</div>
            <div className="text-muted">{`- Must support UTC+5:30`}</div>
          </DocCodeBlock>

          {/* SELF-HOSTING */}
          <H2 id="self-hosting">self-hosting</H2>

          <P>
            prepcli uses Supabase as its cloud backend. The schema is open — enterprise users
            can self-host on their own Supabase instance (or raw PostgreSQL with pgvector)
            with no code changes.
          </P>

          <H3 id="self-hosting-setup">supabase setup</H3>
          <P>
            Create a Supabase project, enable the pgvector extension, and run the schema
            migrations. Then set <Code>SUPABASE_URL</Code> and <Code>SUPABASE_ANON_KEY</Code> in the
            prepcli environment.
          </P>
          <DocCodeBlock>
            <div className="text-subtle mb-2">{`-- enable pgvector`}</div>
            <div className="text-muted">{`create extension if not exists vector;`}</div>
            <div className="text-subtle mt-3 mb-1">{`-- core tables`}</div>
            <div className="text-muted">{`users, projects, project_members`}</div>
            <div className="text-muted">{`project_context, prompt_sessions, delta_records`}</div>
          </DocCodeBlock>

          <H3 id="self-hosting-env">environment variables</H3>
          <div className="mb-6">
            <Flag name="SUPABASE_URL"      desc="your Supabase project URL" />
            <Flag name="SUPABASE_ANON_KEY" desc="public anon key — safe to expose in CLI" />
          </div>

          <H3 id="self-hosting-rls">row level security</H3>
          <P>
            All tables have Row Level Security enabled. Users can only read and write data
            for projects they are members of. This isolation is enforced at the database
            level — bypassing it at the application layer is not possible.
          </P>
          <DocCodeBlock>
            <div className="text-subtle">{`-- members can only read their project's sessions`}</div>
            <div className="text-muted">{`create policy "member_read_sessions" on prompt_sessions`}</div>
            <div className="text-muted">{`  for select using (`}</div>
            <div className="text-muted">{`    exists (`}</div>
            <div className="text-muted">{`      select 1 from project_members`}</div>
            <div className="text-muted">{`      where project_id = prompt_sessions.project_id`}</div>
            <div className="text-muted">{`      and user_id = auth.uid()`}</div>
            <div className="text-muted">{`    )`}</div>
            <div className="text-muted">{`  );`}</div>
          </DocCodeBlock>

        </article>
      </div>
    </div>
  )
}
