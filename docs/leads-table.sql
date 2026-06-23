-- Dedicated table for CRM leads (contact form, exit-intent popup, chatbot).
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run.
--
-- WHY: leads used to be stored as one JSON blob in settings.client_leads_data.
-- Two leads arriving at the same time would read+overwrite the same array and
-- one would be lost (race condition), and the blob grew unbounded. Each lead is
-- now its own row, so concurrent inserts never clobber each other.

create table if not exists public.leads (
  id           text primary key,
  name         text not null default '',
  email        text not null default '',
  project_type text not null default 'Not specified',
  message      text not null default '',
  status       text not null default 'new',
  notes        text not null default '',
  created_at   timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- The app reads/writes with the service-role key (server-side only), which
-- bypasses RLS. Enable RLS so the table is locked down to everyone else.
alter table public.leads enable row level security;

-- ── One-time migration of existing leads out of the old JSON blob ──────────
-- Safe to run once; copies any leads already stored in settings.client_leads_data
-- into the new table. (Skips rows whose id already exists.)
insert into public.leads (id, name, email, project_type, message, status, notes, created_at)
select
  coalesce(elem->>'id', 'lead_' || substr(md5(random()::text), 1, 7)),
  coalesce(elem->>'name', ''),
  coalesce(elem->>'email', ''),
  coalesce(elem->>'projectType', 'Not specified'),
  coalesce(elem->>'message', ''),
  coalesce(elem->>'status', 'new'),
  coalesce(elem->>'notes', ''),
  coalesce((elem->>'createdAt')::timestamptz, now())
from public.settings s
cross join lateral jsonb_array_elements(s.value::jsonb) as elem
where s.key = 'client_leads_data'
on conflict (id) do nothing;

-- NOTIFY pgrst, 'reload schema';
