async function createWorkoutSchema() {
  const migrationSQL = `
-- ============================================
-- Migration: Create Workout Tracking System
-- Purpose: Track homework and gym workouts with exercises and sessions
-- Tables: exercises, workouts, workout_sessions
-- ============================================

-- EXERCISES TABLE - Library of all exercises (homework & gym)
create table if not exists public.exercises (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Exercise details
  name text not null,
  description text,
  type text not null check (type in ('homework', 'gym')),
  category text, -- e.g., 'cardio', 'strength', 'flexibility', 'reading', 'writing'
  difficulty text check (difficulty in ('beginner', 'intermediate', 'advanced')),
  equipment text[], -- e.g., ['dumbbells', 'mat'] or ['textbook', 'notebook']
  target_muscles text[], -- e.g., ['chest', 'arms'] for gym
  instructions text,
  video_url text,
  image_url text,
  duration_minutes integer,
  calories_burned integer,
  is_default boolean default false, -- system-provided exercises

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Foreign key constraints
alter table public.exercises
  add constraint fk_exercises_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_exercises_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS
alter table public.exercises enable row level security;

-- RLS Policies
create policy "anon_select_exercises"
  on public.exercises for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_exercises"
  on public.exercises for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_exercises"
  on public.exercises for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_exercises"
  on public.exercises for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_exercises"
  on public.exercises for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes
create index if not exists idx_exercises_tenant_project
  on public.exercises(tenantid, projectid);
create index if not exists idx_exercises_type
  on public.exercises(type);
create index if not exists idx_exercises_category
  on public.exercises(category);

-- Comments
comment on table public.exercises is 'Library of exercises for homework and gym workouts';
comment on column public.exercises.type is 'Type: homework or gym';
comment on column public.exercises.category is 'Category like cardio, strength, reading, writing';


-- WORKOUTS TABLE - Planned workout routines
create table if not exists public.workouts (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Workout details
  title text not null,
  description text,
  type text not null check (type in ('homework', 'gym', 'mixed')),
  exercises jsonb not null default '[]'::jsonb, -- Array of {exercise_id, sets, reps, duration, notes}
  total_duration_minutes integer,
  difficulty text check (difficulty in ('beginner', 'intermediate', 'advanced')),
  tags text[],
  is_template boolean default false,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Foreign key constraints
alter table public.workouts
  add constraint fk_workouts_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_workouts_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS
alter table public.workouts enable row level security;

-- RLS Policies
create policy "anon_select_workouts"
  on public.workouts for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_workouts"
  on public.workouts for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_workouts"
  on public.workouts for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_workouts"
  on public.workouts for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_workouts"
  on public.workouts for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes
create index if not exists idx_workouts_tenant_project
  on public.workouts(tenantid, projectid);
create index if not exists idx_workouts_type
  on public.workouts(type);

-- Comments
comment on table public.workouts is 'Workout routines with exercises';
comment on column public.workouts.exercises is 'JSON array of exercise details';


-- WORKOUT_SESSIONS TABLE - Completed workout sessions
create table if not exists public.workout_sessions (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Session details
  workout_id uuid, -- reference to workouts table (can be null for ad-hoc sessions)
  title text not null,
  type text not null check (type in ('homework', 'gym', 'mixed')),
  scheduled_date date not null,
  completed_at timestamptz,
  status text not null default 'scheduled' check (status in ('scheduled', 'in_progress', 'completed', 'skipped')),

  -- Performance tracking
  exercises_completed jsonb default '[]'::jsonb, -- Array of completed exercise details with actual performance
  duration_minutes integer,
  calories_burned integer,
  notes text,
  mood text check (mood in ('great', 'good', 'okay', 'tired', 'exhausted')),
  difficulty_rating integer check (difficulty_rating >= 1 and difficulty_rating <= 5),

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Foreign key constraints
alter table public.workout_sessions
  add constraint fk_workout_sessions_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade,
  add constraint fk_workout_sessions_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade,
  add constraint fk_workout_sessions_workout
    foreign key (workout_id)
    references public.workouts(id)
    on delete set null;

-- Enable RLS
alter table public.workout_sessions enable row level security;

-- RLS Policies
create policy "anon_select_workout_sessions"
  on public.workout_sessions for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_workout_sessions"
  on public.workout_sessions for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_workout_sessions"
  on public.workout_sessions for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_workout_sessions"
  on public.workout_sessions for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_workout_sessions"
  on public.workout_sessions for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes
create index if not exists idx_workout_sessions_tenant_project
  on public.workout_sessions(tenantid, projectid);
create index if not exists idx_workout_sessions_scheduled_date
  on public.workout_sessions(scheduled_date);
create index if not exists idx_workout_sessions_status
  on public.workout_sessions(status);
create index if not exists idx_workout_sessions_workout_id
  on public.workout_sessions(workout_id);

-- Comments
comment on table public.workout_sessions is 'Scheduled and completed workout sessions';
comment on column public.workout_sessions.exercises_completed is 'JSON array of completed exercises with performance data';
comment on column public.workout_sessions.scheduled_date is 'Date when workout is scheduled or was completed';
`;

  const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'create_workout_tracking_system',
      sql: migrationSQL,
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
      result.validation.errors?.forEach((err: string) => console.error('  -', err));
    }
    console.error('Steps:', result.steps);
  }
}

createWorkoutSchema();
