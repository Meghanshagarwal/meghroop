-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)

-- Projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  gradient text not null default 'from-purple-600 via-violet-600 to-blue-600',
  image text not null default '',
  tags text[] not null default '{}',
  live_url text not null default '#',
  github_url text not null default '#',
  year text not null default '2024',
  category text not null default 'Web',
  display_order integer not null default 0,
  created_at timestamptz default now()
);

-- Settings table
create table if not exists settings (
  key text primary key,
  value text not null default ''
);

-- Seed default settings keys
insert into settings (key, value) values
  ('ga_id', ''),
  ('meta_pixel_id', ''),
  ('clarity_id', ''),
  ('whatsapp_number', '')
on conflict (key) do nothing;

-- Disable public read access (all access is via service role key server-side)
alter table projects enable row level security;
alter table settings enable row level security;
