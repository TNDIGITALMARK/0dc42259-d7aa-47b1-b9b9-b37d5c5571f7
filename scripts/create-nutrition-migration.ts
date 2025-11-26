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
  diet_type text[] default '{}', -- ['vegan', 'vegetarian', 'keto', 'paleo', 'mediterranean']

  -- Nutrition facts
  calories integer not null,
  protein integer not null, -- grams
  carbs integer not null, -- grams
  fat integer not null, -- grams
  fiber integer default 0, -- grams

  -- Recipe details
  prep_time integer, -- minutes
  cook_time integer, -- minutes
  servings integer default 1,
  ingredients jsonb default '[]', -- [{name: string, amount: string, unit: string}]
  instructions text[],
  tags text[] default '{}', -- ['high-protein', 'quick', 'meal-prep-friendly']

  -- Context indicators
  gym_suitable boolean default false, -- suitable for in-gym consumption
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
alter table public.recipes
  add constraint fk_recipes_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_recipes_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for recipes
alter table public.recipes enable row level security;

-- RLS policies for recipes
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

-- Comments for recipes
comment on table public.recipes is 'Healthy recipes with nutrition information and context indicators';
comment on column public.recipes.tenantid is 'FK to tenants.id';
comment on column public.recipes.projectid is 'FK to projects.id';
comment on column public.recipes.gym_suitable is 'Can be consumed in-gym';

-- MEAL LOGS TABLE
create table if not exists public.meal_logs (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Meal information
  recipe_id uuid references public.recipes(id) on delete set null,
  meal_date date not null,
  meal_type text not null check (meal_type in ('breakfast', 'lunch', 'dinner', 'snack')),

  -- Custom meal (if not from recipe)
  custom_name text,
  custom_calories integer,
  custom_protein integer,
  custom_carbs integer,
  custom_fat integer,

  -- Context
  location text check (location in ('home', 'gym', 'work', 'restaurant', 'other')),
  notes text,

  -- Servings consumed (multiplier for recipe nutrition)
  servings decimal(4,2) default 1.0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add FK constraints for meal_logs
alter table public.meal_logs
  add constraint fk_meal_logs_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_meal_logs_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for meal_logs
alter table public.meal_logs enable row level security;

-- RLS policies for meal_logs
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

-- Comments for meal_logs
comment on table public.meal_logs is 'Daily meal tracking logs with location context';

-- CALORIE LOGS TABLE (Daily Summary)
create table if not exists public.calorie_logs (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Date tracking
  log_date date not null,

  -- Daily totals (calculated from meal_logs)
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
  updated_at timestamptz default now(),

  -- Unique constraint to prevent duplicate daily logs
  unique(tenantid, projectid, log_date)
);

-- Add FK constraints for calorie_logs
alter table public.calorie_logs
  add constraint fk_calorie_logs_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_calorie_logs_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for calorie_logs
alter table public.calorie_logs enable row level security;

-- RLS policies for calorie_logs
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

-- Comments for calorie_logs
comment on table public.calorie_logs is 'Daily calorie and macro tracking summary';

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
  favorite_recipes jsonb default '[]', -- [{recipe_id, times_made}]

  -- Recommendations
  recommendations text[],

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add FK constraints for diet_insights
alter table public.diet_insights
  add constraint fk_diet_insights_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_diet_insights_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS for diet_insights
alter table public.diet_insights enable row level security;

-- RLS policies for diet_insights
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

-- Comments for diet_insights
comment on table public.diet_insights is 'Calculated diet insights and recommendations';
`;

async function createMigration() {
  const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'create_nutrition_tables',
      sql: createNutritionSchemaSql,
      autoApply: true
    })
  });

  const result = await response.json();

  if (result.success) {
    console.log('✅ Migration successful!');
    console.log('   File:', result.fileName);
    console.log('   Applied:', result.applied);
    console.log('   Validation:', result.validation.passed ? '✅ Passed' : '❌ Failed');
  } else {
    console.error('❌ Migration failed:', result.error);
    if (result.validation && !result.validation.passed) {
      console.error('Validation errors:');
      result.validation.errors.forEach((err: string) => console.error('  -', err));
    }
    console.error('Steps:', result.steps);
  }
}

createMigration();
