// Exercise Types
export type ExerciseType = 'homework' | 'gym';
export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type ExerciseCategory = 'cardio' | 'strength' | 'flexibility' | 'reading' | 'writing' | 'math' | 'science' | 'other';

export interface Exercise {
  id: string;
  tenantid: string;
  projectid: string;
  name: string;
  description?: string;
  type: ExerciseType;
  category?: ExerciseCategory;
  difficulty?: ExerciseDifficulty;
  equipment?: string[];
  target_muscles?: string[];
  instructions?: string;
  video_url?: string;
  image_url?: string;
  duration_minutes?: number;
  calories_burned?: number;
  is_default?: boolean;
  created_at: string;
  updated_at: string;
}

// Workout Types
export type WorkoutType = 'homework' | 'gym' | 'mixed';

export interface WorkoutExercise {
  exercise_id: string;
  exercise?: Exercise; // Populated when fetched
  sets?: number;
  reps?: number;
  duration?: number;
  notes?: string;
}

export interface Workout {
  id: string;
  tenantid: string;
  projectid: string;
  title: string;
  description?: string;
  type: WorkoutType;
  exercises: WorkoutExercise[];
  total_duration_minutes?: number;
  difficulty?: ExerciseDifficulty;
  tags?: string[];
  is_template?: boolean;
  created_at: string;
  updated_at: string;
}

// Workout Session Types
export type SessionStatus = 'scheduled' | 'in_progress' | 'completed' | 'skipped';
export type SessionMood = 'great' | 'good' | 'okay' | 'tired' | 'exhausted';

export interface CompletedExercise extends WorkoutExercise {
  completed: boolean;
  actual_sets?: number;
  actual_reps?: number;
  actual_duration?: number;
  performance_notes?: string;
}

export interface WorkoutSession {
  id: string;
  tenantid: string;
  projectid: string;
  workout_id?: string;
  workout?: Workout; // Populated when fetched
  title: string;
  type: WorkoutType;
  scheduled_date: string; // date in YYYY-MM-DD format
  completed_at?: string;
  status: SessionStatus;
  exercises_completed: CompletedExercise[];
  duration_minutes?: number;
  calories_burned?: number;
  notes?: string;
  mood?: SessionMood;
  difficulty_rating?: number; // 1-5
  created_at: string;
  updated_at: string;
}

// Default Exercises Data
export const DEFAULT_GYM_EXERCISES: Partial<Exercise>[] = [
  {
    name: 'Push-ups',
    description: 'Classic upper body exercise',
    type: 'gym',
    category: 'strength',
    difficulty: 'beginner',
    target_muscles: ['chest', 'triceps', 'shoulders'],
    equipment: [],
    duration_minutes: 5,
    calories_burned: 35,
    is_default: true
  },
  {
    name: 'Squats',
    description: 'Lower body strength exercise',
    type: 'gym',
    category: 'strength',
    difficulty: 'beginner',
    target_muscles: ['quads', 'glutes', 'hamstrings'],
    equipment: [],
    duration_minutes: 10,
    calories_burned: 50,
    is_default: true
  },
  {
    name: 'Running',
    description: 'Cardio endurance training',
    type: 'gym',
    category: 'cardio',
    difficulty: 'beginner',
    equipment: ['running shoes'],
    duration_minutes: 30,
    calories_burned: 300,
    is_default: true
  },
  {
    name: 'Dumbbell Curls',
    description: 'Bicep isolation exercise',
    type: 'gym',
    category: 'strength',
    difficulty: 'beginner',
    target_muscles: ['biceps'],
    equipment: ['dumbbells'],
    duration_minutes: 10,
    calories_burned: 40,
    is_default: true
  },
  {
    name: 'Plank',
    description: 'Core stability exercise',
    type: 'gym',
    category: 'strength',
    difficulty: 'beginner',
    target_muscles: ['core', 'abs'],
    equipment: ['mat'],
    duration_minutes: 5,
    calories_burned: 25,
    is_default: true
  }
];

export const DEFAULT_HOMEWORK_EXERCISES: Partial<Exercise>[] = [
  {
    name: 'Math Problem Set',
    description: 'Complete assigned math problems',
    type: 'homework',
    category: 'math',
    difficulty: 'intermediate',
    equipment: ['textbook', 'calculator', 'notebook'],
    duration_minutes: 45,
    is_default: true
  },
  {
    name: 'Reading Assignment',
    description: 'Read assigned chapters and take notes',
    type: 'homework',
    category: 'reading',
    difficulty: 'beginner',
    equipment: ['textbook'],
    duration_minutes: 30,
    is_default: true
  },
  {
    name: 'Essay Writing',
    description: 'Draft and revise essay assignment',
    type: 'homework',
    category: 'writing',
    difficulty: 'advanced',
    equipment: ['computer', 'notes'],
    duration_minutes: 60,
    is_default: true
  },
  {
    name: 'Science Lab Report',
    description: 'Complete lab report with findings',
    type: 'homework',
    category: 'science',
    difficulty: 'intermediate',
    equipment: ['lab notes', 'computer'],
    duration_minutes: 45,
    is_default: true
  },
  {
    name: 'Study Session',
    description: 'Review notes and study for upcoming test',
    type: 'homework',
    category: 'other',
    difficulty: 'beginner',
    equipment: ['notes', 'textbook'],
    duration_minutes: 30,
    is_default: true
  }
];
