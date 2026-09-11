-- Anfeh Municipality — Supabase Database Schema
-- Run this in the Supabase SQL Editor

-- ─── REPORTS ──────────────────────────────────────────────────────────────────
create table if not exists reports (
  id           uuid primary key default gen_random_uuid(),
  reference    text not null unique,
  category     text not null,
  description  text not null,
  location     text not null,
  name         text,
  phone        text,
  photo_url    text,
  status       text not null default 'new',  -- new | review | progress | resolved
  admin_note   text,
  submitted_at timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ─── CONTACTS ────────────────────────────────────────────────────────────────
create table if not exists contacts (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  phone        text,
  email        text,
  subject      text,
  message      text not null,
  read         boolean not null default false,
  submitted_at timestamptz not null default now()
);

-- ─── SERVICE REQUESTS ────────────────────────────────────────────────────────
create table if not exists service_requests (
  id           uuid primary key default gen_random_uuid(),
  reference    text not null unique,
  type         text not null,
  full_name    text not null,
  phone        text,
  email        text,
  request_type text,
  message      text not null,
  status       text not null default 'new',  -- new | review | resolved
  admin_note   text,
  submitted_at timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ─── NEWS ─────────────────────────────────────────────────────────────────────
create table if not exists news (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique,
  title      text not null,
  excerpt    text not null,
  content    text not null,
  date       date not null default current_date,
  category   text not null default 'municipality',
  author     text not null default 'Anfeh Municipality',
  image_url  text,
  featured   boolean not null default false,
  published  boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── EVENTS ──────────────────────────────────────────────────────────────────
create table if not exists events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text not null,
  date        date not null,
  time        text,
  end_time    text,
  location    text not null,
  category    text not null default 'community',
  organizer   text,
  image_url   text,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ─── ANNOUNCEMENTS ───────────────────────────────────────────────────────────
create table if not exists announcements (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  content    text not null,
  date       date not null default current_date,
  category   text not null default 'General',
  important  boolean not null default false,
  published  boolean not null default true,
  created_at timestamptz not null default now()
);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────────────────────
-- Reports: anyone can insert, nobody can select (admin uses service_role key)
alter table reports enable row level security;
create policy "Public can insert reports" on reports for insert with check (true);

-- Contacts: anyone can insert
alter table contacts enable row level security;
create policy "Public can insert contacts" on contacts for insert with check (true);

-- Service requests: anyone can insert
alter table service_requests enable row level security;
create policy "Public can insert service requests" on service_requests for insert with check (true);

-- News: anyone can read published articles
alter table news enable row level security;
create policy "Public can read published news" on news for select using (published = true);

-- Events: anyone can read published events
alter table events enable row level security;
create policy "Public can read published events" on events for select using (published = true);

-- Announcements: anyone can read published announcements
alter table announcements enable row level security;
create policy "Public can read published announcements" on announcements for select using (published = true);
