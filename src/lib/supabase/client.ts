import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
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

export const TENANT_ID = 'LYcbHIm61Dhm4SEh0nOp73RnpiG2';
export const PROJECT_ID = '0dc42259-d7aa-47b1-b9b9-b37d5c5571f7';
