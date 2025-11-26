/**
 * ================================================
 * LIFEPLAN PRO - MOCK DATA
 * Sample data for MVP demonstration
 * ================================================
 */

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goalWeight?: number;
  preferredWorkoutTime: string;
  dietaryPreference: string;
  currentLifeGoal: string;
}

export interface Workout {
  id: string;
  day: string;
  type: string;
  duration: number; // minutes
  exercises: Exercise[];
  completed: boolean;
  date: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  weight?: number;
}

export interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  description: string;
  prepTime: number; // minutes
  day: string;
}

export interface LifeGoal {
  id: string;
  title: string;
  category: 'career' | 'financial' | 'health' | 'personal' | 'habit';
  description: string;
  targetDate?: string;
  progress: number; // 0-100
  milestones: Milestone[];
  currentStreak?: number;
}

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
}

// Sample User Profile
export const sampleUser: UserProfile = {
  id: '1',
  name: 'Sarah Chen',
  email: 'sarah.chen@example.com',
  fitnessLevel: 'intermediate',
  goalWeight: 135,
  preferredWorkoutTime: '6:00 AM',
  dietaryPreference: 'Mediterranean',
  currentLifeGoal: 'Career transition to marketing',
};

// Weekly Workout Program
export const weeklyWorkouts: Workout[] = [
  {
    id: 'w1',
    day: 'Monday',
    type: 'Upper Body Strength',
    duration: 45,
    date: '2025-11-26',
    completed: false,
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '8-10', weight: 95 },
      { name: 'Overhead Press', sets: 3, reps: '10-12', weight: 55 },
      { name: 'Pull-ups', sets: 3, reps: '8-10' },
      { name: 'Tricep Dips', sets: 3, reps: '12-15' },
    ],
  },
  {
    id: 'w2',
    day: 'Wednesday',
    type: 'Cardio & Core',
    duration: 30,
    date: '2025-11-27',
    completed: false,
    exercises: [
      { name: 'Running', sets: 1, reps: '3 miles' },
      { name: 'Plank', sets: 3, reps: '60 sec' },
      { name: 'Russian Twists', sets: 3, reps: '20' },
      { name: 'Mountain Climbers', sets: 3, reps: '30 sec' },
    ],
  },
  {
    id: 'w3',
    day: 'Friday',
    type: 'Full Body Circuit',
    duration: 50,
    date: '2025-11-29',
    completed: false,
    exercises: [
      { name: 'Squats', sets: 4, reps: '12-15', weight: 135 },
      { name: 'Deadlifts', sets: 4, reps: '8-10', weight: 185 },
      { name: 'Push-ups', sets: 3, reps: '15-20' },
      { name: 'Lunges', sets: 3, reps: '12/leg' },
    ],
  },
];

// Weekly Meal Plan
export const weeklyMeals: Meal[] = [
  {
    id: 'm1',
    name: 'Greek Yogurt Power Bowl',
    type: 'breakfast',
    calories: 380,
    protein: 28,
    description: 'Greek yogurt with mixed berries, granola, and honey',
    prepTime: 5,
    day: 'Daily',
  },
  {
    id: 'm2',
    name: 'Quinoa Chicken Salad',
    type: 'lunch',
    calories: 520,
    protein: 42,
    description: 'Grilled chicken breast, quinoa, mixed greens, cherry tomatoes, cucumber, feta, lemon vinaigrette',
    prepTime: 15,
    day: 'Monday-Friday',
  },
  {
    id: 'm3',
    name: 'Mediterranean Salmon',
    type: 'dinner',
    calories: 580,
    protein: 48,
    description: 'Baked salmon with roasted vegetables (zucchini, bell peppers, tomatoes) and olive oil',
    prepTime: 30,
    day: 'Monday, Wednesday, Friday',
  },
  {
    id: 'm4',
    name: 'Turkey & Veggie Wrap',
    type: 'lunch',
    calories: 450,
    protein: 35,
    description: 'Whole wheat wrap with turkey, hummus, spinach, carrots, and avocado',
    prepTime: 10,
    day: 'Tuesday, Thursday',
  },
  {
    id: 'm5',
    name: 'Protein Smoothie',
    type: 'snack',
    calories: 250,
    protein: 30,
    description: 'Protein powder, banana, almond milk, peanut butter, ice',
    prepTime: 5,
    day: 'Post-workout',
  },
];

// Life Goals
export const lifeGoals: LifeGoal[] = [
  {
    id: 'g1',
    title: 'Complete Marketing Certification',
    category: 'career',
    description: 'Finish Google Digital Marketing & E-commerce Certificate by December 2025',
    targetDate: '2025-12-31',
    progress: 35,
    milestones: [
      { id: 'm1', title: 'Complete Course 1: Foundations', completed: true },
      { id: 'm2', title: 'Complete Course 2: Attract & Engage', completed: true },
      { id: 'm3', title: 'Complete Course 3: Email Marketing', completed: false, dueDate: '2025-12-15' },
      { id: 'm4', title: 'Complete Course 4: Analytics', completed: false, dueDate: '2025-12-31' },
    ],
  },
  {
    id: 'g2',
    title: 'Build Emergency Fund',
    category: 'financial',
    description: 'Save $5,000 for emergency fund by saving $500 monthly',
    targetDate: '2026-05-01',
    progress: 40,
    milestones: [
      { id: 'm5', title: 'Save $1,000', completed: true },
      { id: 'm6', title: 'Save $2,000', completed: true },
      { id: 'm7', title: 'Save $3,500', completed: false, dueDate: '2026-02-01' },
      { id: 'm8', title: 'Reach $5,000 goal', completed: false, dueDate: '2026-05-01' },
    ],
  },
  {
    id: 'g3',
    title: 'Daily Reading Habit',
    category: 'habit',
    description: 'Read for 20 minutes every day',
    progress: 70,
    currentStreak: 14,
    milestones: [
      { id: 'm9', title: '7-day streak', completed: true },
      { id: 'm10', title: '30-day streak', completed: false },
      { id: 'm11', title: '90-day streak', completed: false },
      { id: 'm12', title: '365-day streak', completed: false },
    ],
  },
  {
    id: 'g4',
    title: 'Run a 5K Race',
    category: 'health',
    description: 'Complete a 5K race in under 30 minutes',
    targetDate: '2026-03-15',
    progress: 55,
    milestones: [
      { id: 'm13', title: 'Run 1 mile without stopping', completed: true },
      { id: 'm14', title: 'Run 5K distance', completed: true },
      { id: 'm15', title: 'Run 5K under 35 minutes', completed: false },
      { id: 'm16', title: 'Run 5K under 30 minutes', completed: false },
    ],
  },
];

// Today's Progress Summary
export interface DailySummary {
  date: string;
  workoutsCompleted: number;
  workoutsTotal: number;
  caloriesConsumed: number;
  caloriesTarget: number;
  goalsProgress: number; // average of all goals
  streakActive: boolean;
}

export const todaySummary: DailySummary = {
  date: '2025-11-26',
  workoutsCompleted: 0,
  workoutsTotal: 1,
  caloriesConsumed: 1450,
  caloriesTarget: 1800,
  goalsProgress: 50,
  streakActive: true,
};
