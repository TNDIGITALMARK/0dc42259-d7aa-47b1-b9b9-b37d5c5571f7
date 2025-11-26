import { createClient } from '@supabase/supabase-js';

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

async function exploreSchema() {
  console.log('=== DATABASE SCHEMA EXPLORATION ===\n');

  const tablesToCheck = ['workouts', 'exercises', 'workout_sessions', 'workout_plans', 'todos', 'projects'];

  for (const tableName of tablesToCheck) {
    const { error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });

    if (!error) {
      console.log(`✅ ${tableName}: ${count} rows`);
    } else {
      console.log(`❌ ${tableName}: table not found`);
    }
  }
}

exploreSchema();
