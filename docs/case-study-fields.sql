-- Case-study detail fields for portfolio single pages (/work/[slug])
-- Run once in Supabase SQL editor. Safe to re-run (IF NOT EXISTS).

alter table projects add column if not exists slug          text;
alter table projects add column if not exists client_intro  text not null default '';
alter table projects add column if not exists services       text[] not null default '{}';
alter table projects add column if not exists project_types  text[] not null default '{}';
alter table projects add column if not exists timeline       text not null default '';
alter table projects add column if not exists outcome        text not null default '';
alter table projects add column if not exists deliverables   text[] not null default '{}';
alter table projects add column if not exists results        jsonb not null default '[]'::jsonb;
alter table projects add column if not exists gallery        text[] not null default '{}';

-- Unique slug (nulls allowed for legacy rows; detail page falls back to id)
create unique index if not exists projects_slug_key on projects (slug) where slug is not null;

-- Backfill slugs for existing rows from their title
update projects
set slug = lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'))
where slug is null or slug = '';

-- Reload PostgREST schema cache
notify pgrst, 'reload schema';
