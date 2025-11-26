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

// ================================================
// NUTRITION & MEAL PREP DATA
// ================================================

export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'smoothie' | 'dessert';
  dietType: string[]; // 'vegan', 'vegetarian', 'keto', 'paleo', 'mediterranean'
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  fiber: number; // grams
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  ingredients: { name: string; amount: string; unit: string }[];
  instructions: string[];
  tags: string[]; // 'high-protein', 'quick', 'meal-prep-friendly', etc.
  gymSuitable: boolean; // suitable for in-gym consumption
  preWorkout: boolean;
  postWorkout: boolean;
  imageUrl: string;
  isFavorite: boolean;
  timesMade: number;
}

export interface MealLog {
  id: string;
  recipeId?: string;
  recipeName: string;
  mealDate: string; // ISO date
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  location: 'home' | 'gym' | 'work' | 'restaurant' | 'other';
  notes?: string;
  servings: number;
}

export interface DailyCalorieLog {
  date: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  calorieGoal: number;
  proteinGoal: number;
  carbsGoal: number;
  fatGoal: number;
  workoutDay: boolean;
  gymMealsCount: number;
}

export interface DietInsight {
  periodStart: string;
  periodEnd: string;
  avgDailyCalories: number;
  avgDailyProtein: number;
  avgDailyCarbs: number;
  avgDailyFat: number;
  daysMetCalorieGoal: number;
  daysMetProteinGoal: number;
  totalDays: number;
  mostCommonMealType: string;
  gymMealsPercentage: number;
  favoriteRecipes: { recipeId: string; name: string; timesMade: number }[];
  recommendations: string[];
}

// Sample Healthy Recipes
export const healthyRecipes: Recipe[] = [
  {
    id: 'r1',
    name: 'Protein Power Smoothie Bowl',
    description: 'High-protein breakfast bowl with Greek yogurt, berries, and granola',
    category: 'breakfast',
    dietType: ['vegetarian', 'mediterranean'],
    calories: 420,
    protein: 32,
    carbs: 48,
    fat: 12,
    fiber: 8,
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      { name: 'Greek yogurt', amount: '1', unit: 'cup' },
      { name: 'Banana', amount: '1', unit: 'medium' },
      { name: 'Mixed berries', amount: '1/2', unit: 'cup' },
      { name: 'Protein powder', amount: '1', unit: 'scoop' },
      { name: 'Granola', amount: '1/4', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'tbsp' },
    ],
    instructions: [
      'Blend Greek yogurt, banana, half the berries, and protein powder until smooth',
      'Pour into a bowl',
      'Top with remaining berries, granola, and honey drizzle',
      'Serve immediately'
    ],
    tags: ['high-protein', 'quick', 'post-workout', 'vegetarian'],
    gymSuitable: false,
    preWorkout: false,
    postWorkout: true,
    imageUrl: '/generated/smoothie-bowl.png',
    isFavorite: true,
    timesMade: 15
  },
  {
    id: 'r2',
    name: 'Grilled Chicken & Quinoa Power Bowl',
    description: 'Complete protein meal with grilled chicken, quinoa, and roasted vegetables',
    category: 'lunch',
    dietType: ['mediterranean', 'paleo'],
    calories: 545,
    protein: 45,
    carbs: 52,
    fat: 15,
    fiber: 9,
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    ingredients: [
      { name: 'Chicken breast', amount: '8', unit: 'oz' },
      { name: 'Quinoa', amount: '1', unit: 'cup' },
      { name: 'Broccoli', amount: '1', unit: 'cup' },
      { name: 'Bell peppers', amount: '1', unit: 'cup' },
      { name: 'Cherry tomatoes', amount: '1/2', unit: 'cup' },
      { name: 'Olive oil', amount: '2', unit: 'tbsp' },
      { name: 'Lemon juice', amount: '2', unit: 'tbsp' },
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Season and grill chicken breast until cooked through (165°F)',
      'Roast vegetables with olive oil at 425°F for 20 minutes',
      'Slice chicken and assemble bowl with quinoa and vegetables',
      'Drizzle with lemon juice and olive oil'
    ],
    tags: ['high-protein', 'meal-prep-friendly', 'balanced', 'gluten-free'],
    gymSuitable: false,
    preWorkout: false,
    postWorkout: true,
    imageUrl: '/generated/chicken-quinoa-bowl.png',
    isFavorite: true,
    timesMade: 22
  },
  {
    id: 'r3',
    name: 'Pre-Workout Energy Bites',
    description: 'Quick energy boost with oats, peanut butter, and dates',
    category: 'snack',
    dietType: ['vegan', 'vegetarian'],
    calories: 180,
    protein: 6,
    carbs: 22,
    fat: 8,
    fiber: 3,
    prepTime: 10,
    cookTime: 0,
    servings: 8,
    ingredients: [
      { name: 'Rolled oats', amount: '1', unit: 'cup' },
      { name: 'Peanut butter', amount: '1/2', unit: 'cup' },
      { name: 'Dates', amount: '1/2', unit: 'cup' },
      { name: 'Honey', amount: '2', unit: 'tbsp' },
      { name: 'Chia seeds', amount: '2', unit: 'tbsp' },
      { name: 'Dark chocolate chips', amount: '1/4', unit: 'cup' },
    ],
    instructions: [
      'Blend dates until they form a paste',
      'Mix all ingredients in a bowl',
      'Roll mixture into 1-inch balls',
      'Refrigerate for 30 minutes before eating',
      'Store in airtight container for up to 1 week'
    ],
    tags: ['quick', 'meal-prep-friendly', 'vegan', 'portable', 'energy-boost'],
    gymSuitable: true,
    preWorkout: true,
    postWorkout: false,
    imageUrl: '/generated/energy-bites.png',
    isFavorite: false,
    timesMade: 8
  },
  {
    id: 'r4',
    name: 'Mediterranean Salmon with Roasted Veggies',
    description: 'Omega-3 rich salmon with colorful Mediterranean vegetables',
    category: 'dinner',
    dietType: ['mediterranean', 'paleo'],
    calories: 485,
    protein: 42,
    carbs: 28,
    fat: 22,
    fiber: 7,
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    ingredients: [
      { name: 'Salmon fillet', amount: '10', unit: 'oz' },
      { name: 'Zucchini', amount: '1', unit: 'large' },
      { name: 'Bell peppers', amount: '2', unit: 'medium' },
      { name: 'Cherry tomatoes', amount: '1', unit: 'cup' },
      { name: 'Olive oil', amount: '3', unit: 'tbsp' },
      { name: 'Lemon', amount: '1', unit: 'whole' },
      { name: 'Garlic', amount: '3', unit: 'cloves' },
    ],
    instructions: [
      'Preheat oven to 400°F',
      'Cut vegetables into large pieces and toss with olive oil and minced garlic',
      'Spread vegetables on baking sheet',
      'Place salmon on top, drizzle with olive oil and lemon juice',
      'Bake for 20-25 minutes until salmon is cooked through'
    ],
    tags: ['high-protein', 'omega-3', 'mediterranean', 'healthy-fats', 'dinner'],
    gymSuitable: false,
    preWorkout: false,
    postWorkout: true,
    imageUrl: '/generated/salmon-veggies.png',
    isFavorite: true,
    timesMade: 18
  },
  {
    id: 'r5',
    name: 'Protein Pancakes',
    description: 'High-protein breakfast pancakes that taste amazing',
    category: 'breakfast',
    dietType: ['vegetarian'],
    calories: 340,
    protein: 28,
    carbs: 42,
    fat: 8,
    fiber: 5,
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    ingredients: [
      { name: 'Banana', amount: '2', unit: 'medium' },
      { name: 'Eggs', amount: '2', unit: 'large' },
      { name: 'Protein powder', amount: '2', unit: 'scoops' },
      { name: 'Oat flour', amount: '1/4', unit: 'cup' },
      { name: 'Baking powder', amount: '1', unit: 'tsp' },
      { name: 'Blueberries', amount: '1/2', unit: 'cup' },
    ],
    instructions: [
      'Mash bananas in a bowl',
      'Add eggs, protein powder, oat flour, and baking powder',
      'Mix until combined (lumps are okay)',
      'Heat non-stick pan over medium heat',
      'Pour 1/4 cup batter per pancake',
      'Add blueberries, cook until bubbles form, flip and cook 2 more minutes'
    ],
    tags: ['high-protein', 'breakfast', 'post-workout', 'filling'],
    gymSuitable: false,
    preWorkout: false,
    postWorkout: true,
    imageUrl: '/generated/protein-pancakes.png',
    isFavorite: true,
    timesMade: 12
  },
  {
    id: 'r6',
    name: 'Gym-Friendly Protein Shake',
    description: 'Quick protein shake perfect for in-gym consumption',
    category: 'smoothie',
    dietType: ['vegetarian'],
    calories: 285,
    protein: 35,
    carbs: 28,
    fat: 5,
    fiber: 2,
    prepTime: 2,
    cookTime: 0,
    servings: 1,
    ingredients: [
      { name: 'Protein powder', amount: '2', unit: 'scoops' },
      { name: 'Banana', amount: '1', unit: 'medium' },
      { name: 'Almond milk', amount: '1', unit: 'cup' },
      { name: 'Ice', amount: '1/2', unit: 'cup' },
    ],
    instructions: [
      'Add all ingredients to a shaker bottle or blender',
      'Shake or blend for 30 seconds',
      'Drink immediately after workout'
    ],
    tags: ['quick', 'high-protein', 'post-workout', 'portable', 'gym-friendly'],
    gymSuitable: true,
    preWorkout: false,
    postWorkout: true,
    imageUrl: '/generated/protein-shake.png',
    isFavorite: false,
    timesMade: 35
  },
];

// Today's Meal Logs
export const todaysMealLogs: MealLog[] = [
  {
    id: 'ml1',
    recipeId: 'r1',
    recipeName: 'Protein Power Smoothie Bowl',
    mealDate: '2025-11-26',
    mealType: 'breakfast',
    calories: 420,
    protein: 32,
    carbs: 48,
    fat: 12,
    location: 'home',
    servings: 1
  },
  {
    id: 'ml2',
    recipeId: 'r2',
    recipeName: 'Grilled Chicken & Quinoa Power Bowl',
    mealDate: '2025-11-26',
    mealType: 'lunch',
    calories: 545,
    protein: 45,
    carbs: 52,
    fat: 15,
    location: 'work',
    servings: 1
  },
  {
    id: 'ml3',
    recipeId: 'r6',
    recipeName: 'Gym-Friendly Protein Shake',
    mealDate: '2025-11-26',
    mealType: 'snack',
    calories: 285,
    protein: 35,
    carbs: 28,
    fat: 5,
    location: 'gym',
    notes: 'Post-workout shake after upper body session',
    servings: 1
  },
];

// Weekly Calorie Tracking
export const weeklyCalorieLogs: DailyCalorieLog[] = [
  {
    date: '2025-11-26',
    totalCalories: 1450,
    totalProtein: 142,
    totalCarbs: 158,
    totalFat: 42,
    calorieGoal: 1800,
    proteinGoal: 150,
    carbsGoal: 180,
    fatGoal: 50,
    workoutDay: true,
    gymMealsCount: 1
  },
  {
    date: '2025-11-25',
    totalCalories: 1720,
    totalProtein: 155,
    totalCarbs: 172,
    totalFat: 48,
    calorieGoal: 1800,
    proteinGoal: 150,
    carbsGoal: 180,
    fatGoal: 50,
    workoutDay: false,
    gymMealsCount: 0
  },
  {
    date: '2025-11-24',
    totalCalories: 1850,
    totalProtein: 148,
    totalCarbs: 192,
    totalFat: 52,
    calorieGoal: 1800,
    proteinGoal: 150,
    carbsGoal: 180,
    fatGoal: 50,
    workoutDay: true,
    gymMealsCount: 1
  },
  {
    date: '2025-11-23',
    totalCalories: 1680,
    totalProtein: 138,
    totalCarbs: 168,
    totalFat: 45,
    calorieGoal: 1800,
    proteinGoal: 150,
    carbsGoal: 180,
    fatGoal: 50,
    workoutDay: false,
    gymMealsCount: 0
  },
  {
    date: '2025-11-22',
    totalCalories: 1790,
    totalProtein: 152,
    totalCarbs: 178,
    totalFat: 49,
    calorieGoal: 1800,
    proteinGoal: 150,
    carbsGoal: 180,
    fatGoal: 50,
    workoutDay: true,
    gymMealsCount: 2
  },
];

// Diet Insights
export const currentDietInsight: DietInsight = {
  periodStart: '2025-11-20',
  periodEnd: '2025-11-26',
  avgDailyCalories: 1738,
  avgDailyProtein: 147,
  avgDailyCarbs: 173,
  avgDailyFat: 47,
  daysMetCalorieGoal: 5,
  daysMetProteinGoal: 6,
  totalDays: 7,
  mostCommonMealType: 'lunch',
  gymMealsPercentage: 28.6,
  favoriteRecipes: [
    { recipeId: 'r6', name: 'Gym-Friendly Protein Shake', timesMade: 35 },
    { recipeId: 'r2', name: 'Grilled Chicken & Quinoa Power Bowl', timesMade: 22 },
    { recipeId: 'r4', name: 'Mediterranean Salmon with Roasted Veggies', timesMade: 18 },
  ],
  recommendations: [
    'Great job meeting your protein goals consistently!',
    'Consider adding more fiber-rich foods to reach 30g daily',
    'Your gym meals are helping with post-workout recovery',
    'Try meal prepping on Sundays to stay on track during busy weekdays'
  ]
};
