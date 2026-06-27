-- Stores every audit run from the public SEO Checker (/seo-checker).
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run.
--
-- The full structured report (scorecard, strengths/"good", issues/"bad",
-- quick wins, checklist) is kept in the `report` jsonb column, so the admin
-- SEO Audits page can show both the good and bad findings for each URL.

create table if not exists public.seo_audits (
  id              text primary key,
  url             text not null default '',
  domain          text not null default '',
  name            text not null default '',
  email           text not null default '',
  score           integer not null default 0,
  strengths_count integer not null default 0,
  issues_count    integer not null default 0,
  report          jsonb not null default '{}'::jsonb,
  status          text not null default 'new',
  created_at      timestamptz not null default now()
);

create index if not exists seo_audits_created_at_idx on public.seo_audits (created_at desc);
create index if not exists seo_audits_email_idx on public.seo_audits (email);

-- The app reads/writes with the service-role key (server-side only), which
-- bypasses RLS. Enable RLS so the table is locked down to everyone else.
alter table public.seo_audits enable row level security;

-- ── Gemini API key (optional) ──────────────────────────────────────────────
-- The report engine key can also be managed from Admin → SEO Audits, which
-- stores it in the existing `settings` table under key 'gemini_api_key'.
-- Seed it here if you prefer (otherwise set GEMINI_API_KEY in the environment):
-- insert into public.settings (key, value)
-- values ('gemini_api_key', 'AIza...your-key...')
-- on conflict (key) do update set value = excluded.value;
