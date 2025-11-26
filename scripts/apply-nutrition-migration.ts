const createNutritionSchemaSql = `
-- ============================================
-- Migration: Create nutrition and meal prep tables
-- Purpose: Store recipes, meal logs, calorie tracking, and diet insights
-- Tables: recipes, meal_logs, calorie_logs, diet_insights
-- ============================================

-- RECIPES TABLE
create table if not exists public.recipes (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Recipe information
  name text not null,
  description text,
  category text check (category in ('breakfast', 'lunch', 'dinner', 'snack', 'smoothie', 'dessert')),
  diet_type text[] default '{}',

  -- Nutrition facts
  calories integer not null,
  protein integer not null,
  carbs integer not null,
  fat integer not null,
  fiber integer default 0,

  -- Recipe details
  prep_time integer,
  cook_time integer,
  servings integer default 1,
  ingredients jsonb default '[]',
  instructions text[],
  tags text[] default '{}',

  -- Context indicators
  gym_suitable boolean default false,
  pre_workout boolean default false,
  post_workout boolean default false,

  -- Image
  image_url text,

  -- Metadata
  is_favorite boolean default false,
  times_made integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add FK constraints for recipes
alter table public.recipes drop constraint if exists fk_recipes_tenant;
alter table public.recipes drop constraint if exists fk_recipes_project;

alter table public.recipes
  add constraint fk_recipes_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.recipes
  add constraint fk_recipes_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for recipes
alter table public.recipes enable row level security;

-- RLS policies for recipes
drop policy if exists "anon_select_recipes" on public.recipes;
drop policy if exists "auth_select_recipes" on public.recipes;
drop policy if exists "auth_insert_recipes" on public.recipes;
drop policy if exists "auth_update_recipes" on public.recipes;
drop policy if exists "auth_delete_recipes" on public.recipes;

create policy "anon_select_recipes"
  on public.recipes for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_recipes"
  on public.recipes for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_recipes"
  on public.recipes for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_recipes"
  on public.recipes for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_recipes"
  on public.recipes for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes for recipes
create index if not exists idx_recipes_tenant_project
  on public.recipes(tenantid, projectid);
create index if not exists idx_recipes_category
  on public.recipes(category);
create index if not exists idx_recipes_calories
  on public.recipes(calories);
create index if not exists idx_recipes_tags
  on public.recipes using gin(tags);

-- MEAL LOGS TABLE
create table if not exists public.meal_logs (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Meal information
  recipe_id uuid references public.recipes(id) on delete set null,
  meal_date date not null,
  meal_type text not null check (meal_type in ('breakfast', 'lunch', 'dinner', 'snack')),

  -- Custom meal
  custom_name text,
  custom_calories integer,
  custom_protein integer,
  custom_carbs integer,
  custom_fat integer,

  -- Context
  location text check (location in ('home', 'gym', 'work', 'restaurant', 'other')),
  notes text,

  -- Servings consumed
  servings decimal(4,2) default 1.0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add FK constraints for meal_logs
alter table public.meal_logs drop constraint if exists fk_meal_logs_tenant;
alter table public.meal_logs drop constraint if exists fk_meal_logs_project;

alter table public.meal_logs
  add constraint fk_meal_logs_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.meal_logs
  add constraint fk_meal_logs_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for meal_logs
alter table public.meal_logs enable row level security;

-- RLS policies for meal_logs
drop policy if exists "anon_select_meal_logs" on public.meal_logs;
drop policy if exists "auth_all_meal_logs" on public.meal_logs;

create policy "anon_select_meal_logs"
  on public.meal_logs for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_all_meal_logs"
  on public.meal_logs for all to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes for meal_logs
create index if not exists idx_meal_logs_tenant_project
  on public.meal_logs(tenantid, projectid);
create index if not exists idx_meal_logs_date
  on public.meal_logs(meal_date desc);
create index if not exists idx_meal_logs_recipe
  on public.meal_logs(recipe_id) where recipe_id is not null;

-- CALORIE LOGS TABLE
create table if not exists public.calorie_logs (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Date tracking
  log_date date not null,

  -- Daily totals
  total_calories integer default 0,
  total_protein integer default 0,
  total_carbs integer default 0,
  total_fat integer default 0,
  total_fiber integer default 0,

  -- Goals
  calorie_goal integer not null default 2000,
  protein_goal integer not null default 150,
  carbs_goal integer not null default 200,
  fat_goal integer not null default 65,

  -- Context
  workout_day boolean default false,
  gym_meals_count integer default 0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add unique constraint if not exists
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'calorie_logs_tenant_project_date_key') then
    alter table public.calorie_logs add constraint calorie_logs_tenant_project_date_key unique(tenantid, projectid, log_date);
  end if;
end $$;

-- Add FK constraints for calorie_logs
alter table public.calorie_logs drop constraint if exists fk_calorie_logs_tenant;
alter table public.calorie_logs drop constraint if exists fk_calorie_logs_project;

alter table public.calorie_logs
  add constraint fk_calorie_logs_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.calorie_logs
  add constraint fk_calorie_logs_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for calorie_logs
alter table public.calorie_logs enable row level security;

-- RLS policies for calorie_logs
drop policy if exists "anon_select_calorie_logs" on public.calorie_logs;
drop policy if exists "auth_all_calorie_logs" on public.calorie_logs;

create policy "anon_select_calorie_logs"
  on public.calorie_logs for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_all_calorie_logs"
  on public.calorie_logs for all to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes for calorie_logs
create index if not exists idx_calorie_logs_tenant_project
  on public.calorie_logs(tenantid, projectid);
create index if not exists idx_calorie_logs_date
  on public.calorie_logs(log_date desc);

-- DIET INSIGHTS TABLE
create table if not exists public.diet_insights (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Time period
  period_start date not null,
  period_end date not null,

  -- Calculated insights
  avg_daily_calories integer,
  avg_daily_protein integer,
  avg_daily_carbs integer,
  avg_daily_fat integer,

  days_met_calorie_goal integer default 0,
  days_met_protein_goal integer default 0,
  total_days integer not null,

  -- Patterns
  most_common_meal_type text,
  gym_meals_percentage decimal(5,2),
  favorite_recipes jsonb default '[]',

  -- Recommendations
  recommendations text[],

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add FK constraints for diet_insights
alter table public.diet_insights drop constraint if exists fk_diet_insights_tenant;
alter table public.diet_insights drop constraint if exists fk_diet_insights_project;

alter table public.diet_insights
  add constraint fk_diet_insights_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.diet_insights
  add constraint fk_diet_insights_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for diet_insights
alter table public.diet_insights enable row level security;

-- RLS policies for diet_insights
drop policy if exists "anon_select_diet_insights" on public.diet_insights;
drop policy if exists "auth_all_diet_insights" on public.diet_insights;

create policy "anon_select_diet_insights"
  on public.diet_insights for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_all_diet_insights"
  on public.diet_insights for all to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes for diet_insights
create index if not exists idx_diet_insights_tenant_project
  on public.diet_insights(tenantid, projectid);
create index if not exists idx_diet_insights_period
  on public.diet_insights(period_start, period_end);
`;

async function applyMigration() {
  try {
    const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'create_nutrition_tables_v2',
        sql: createNutritionSchemaSql,
        autoApply: false, // Don't auto apply - we'll do it manually
        skipValidation: false
      })
    });

    const result = await response.json();
    console.log('Migration file created:', result.success);

    if (result.success && result.validation?.passed) {
      console.log('✅ Migration validated successfully');
      console.log('   File:', result.fileName);

      // Now apply it directly to database using Supabase client
      console.log('\n📋 Applying migration to database...');

      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        'https://hfndfmtxhqvubnfiwzlz.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
        {
          global: {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkxZY2JISW02MURobTRTRWgwbk9wNzNSbnBpRzIiLCJwcm9qZWN0X2lkIjoiMGRjNDIyNTktZDdhYS00N2IxLWI5YjktYjM3ZDVjNTU3MWY3IiwianRpIjoiNjAzMGMzMWQtNGQ4My00ZGJmLWI2YzEtMmVjZTMzNDg1YWNlIiwiaWF0IjoxNzY0MTYyNjYxLCJleHAiOjE3NjQxNjUzNjF9.0eWGHDGC9mjo6Nk2DpG7c-tpVJmqmPB0zfzuw6gQKsc`
            }
          }
        }
      );

      // Execute the SQL directly
      const { error } = await supabase.rpc('exec_sql', { sql_query: createNutritionSchemaSql });

      if (error) {
        console.error('❌ Failed to apply migration:', error.message);
      } else {
        console.log('✅ Migration applied successfully to database!');
      }
    } else {
      console.error('❌ Validation failed:', result.validation?.errors);
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

applyMigration();
