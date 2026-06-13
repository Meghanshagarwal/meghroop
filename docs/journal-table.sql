-- Supabase table for auto-published journal articles (POST /api/journal).
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run.
--
-- Curated articles stay hardcoded in lib/journal.ts; this table holds the
-- auto-generated ones. lib/journal.ts merges both at request time (ISR).

create table if not exists public.journal_articles (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  subtitle      text default '',
  description   text default '',
  date          date not null default current_date,
  last_updated  date not null default current_date,
  read_time     text default '5 min read',
  category      text default 'AI Infrastructure',
  author        jsonb default '{"name":"MeghRoop","role":"AI Engineering Studio","avatar":"/favicon.svg"}'::jsonb,
  hero_image    text default '',
  blocks        jsonb not null default '[]'::jsonb,
  seo           jsonb not null default '{}'::jsonb,
  faqs          jsonb not null default '[]'::jsonb,
  created_at    timestamptz not null default now()
);

create index if not exists journal_articles_date_idx on public.journal_articles (date desc);

-- The app reads/writes with the service-role key (server-side only), which
-- bypasses RLS. Enable RLS so the table is locked down to everyone else.
alter table public.journal_articles enable row level security;
