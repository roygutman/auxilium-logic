create table public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  first_name  text,
  last_name   text,
  email       text not null,
  company     text,
  phone       text,
  loan_volume text,
  message     text,
  created_at  timestamptz not null default now()
);

-- No public read access; admin client handles all writes
alter table public.contact_submissions enable row level security;
