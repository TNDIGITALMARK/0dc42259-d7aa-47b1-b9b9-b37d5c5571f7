'use client';

import { Dumbbell, Apple, Target, Calendar, TrendingUp, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { weeklyWorkouts, weeklyMeals, lifeGoals, todaySummary } from '@/lib/mock-data';
import { BottomNav } from '@/components/bottom-nav';
import { useState } from 'react';

export default function DashboardPage() {
  const [completedWorkouts, setCompletedWorkouts] = useState<Set<string>>(new Set());
  const todaysWorkout = weeklyWorkouts.find(w => w.date === todaySummary.date);

  const toggleWorkout = (id: string) => {
    setCompletedWorkouts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const completedCount = completedWorkouts.size;
  const workoutProgress = todaysWorkout ? (completedCount > 0 ? 100 : 0) : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">LifePlan Pro</h1>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {todaySummary.date}
              </Badge>
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                SC
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 pb-24 md:pb-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h2>
          <p className="text-secondary text-lg">Here's your progress for today</p>
        </div>

        {/* Daily Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Workout Progress</CardTitle>
              <Dumbbell className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{completedCount}/{todaySummary.workoutsTotal}</div>
              <Progress value={workoutProgress} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {todaysWorkout ? todaysWorkout.type : 'No workout today'}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Nutrition</CardTitle>
              <Apple className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {todaySummary.caloriesConsumed}/{todaySummary.caloriesTarget}
              </div>
              <Progress value={(todaySummary.caloriesConsumed / todaySummary.caloriesTarget) * 100} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {todaySummary.caloriesTarget - todaySummary.caloriesConsumed} calories remaining
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Goals Progress</CardTitle>
              <Target className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{todaySummary.goalsProgress}%</div>
              <Progress value={todaySummary.goalsProgress} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {lifeGoals.length} active goals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Workouts - Homework & Gym */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Homework Workout */}
          <Card className="shadow-card border-l-4 border-l-secondary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-secondary" />
                    </div>
                    Homework Today
                  </CardTitle>
                  <CardDescription>Study sessions & assignments</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <p className="font-medium text-sm">Math Chapter 5</p>
                  <p className="text-xs text-muted-foreground">45 minutes • 3 tasks</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/10">
                  <p className="font-medium text-sm">Reading Assignment</p>
                  <p className="text-xs text-muted-foreground">30 minutes • 2 chapters</p>
                </div>
              </div>
              <Link href="/workouts?type=homework" className="block">
                <Button className="w-full" variant="outline">
                  View All Homework
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Gym Workout */}
          <Card className="shadow-card border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Dumbbell className="h-5 w-5 text-primary" />
                    </div>
                    Gym Workout Today
                  </CardTitle>
                  <CardDescription>Upper body strength training</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {todaysWorkout?.exercises.slice(0, 2).map((exercise, index) => (
                  <div key={index} className="p-3 rounded-lg bg-primary/10">
                    <p className="font-medium text-sm">{exercise.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {exercise.sets} sets × {exercise.reps} reps
                      {exercise.weight && ` @ ${exercise.weight}lbs`}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/workouts?type=gym" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Start Workout
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access to Full Workout Tracker */}
        <Card className="shadow-card mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Track All Your Workouts</h3>
                  <p className="text-sm text-muted-foreground">Homework, gym, and everything in between</p>
                </div>
              </div>
              <Link href="/workouts">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Open Workouts
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Today's Meals */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Today's Meal Plan</CardTitle>
            <CardDescription>Mediterranean diet • 1,800 calories target</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyMeals.slice(0, 3).map((meal) => (
                <div key={meal.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs capitalize">{meal.type}</Badge>
                      <p className="font-medium">{meal.name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{meal.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm font-medium">{meal.calories} cal</p>
                    <p className="text-xs text-muted-foreground">{meal.protein}g protein</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Goals */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Goals</CardTitle>
            <CardDescription>Track your life goals and celebrate progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {lifeGoals.slice(0, 3).map((goal) => (
                <div key={goal.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                        {goal.category === 'career' && <TrendingUp className="h-4 w-4 text-primary" />}
                        {goal.category === 'financial' && <Target className="h-4 w-4 text-primary" />}
                        {goal.category === 'habit' && <Award className="h-4 w-4 text-primary" />}
                        {goal.category === 'health' && <Dumbbell className="h-4 w-4 text-primary" />}
                      </div>
                      <div>
                        <p className="font-medium">{goal.title}</p>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{goal.progress}%</p>
                      {goal.currentStreak && (
                        <p className="text-xs text-muted-foreground">{goal.currentStreak} day streak</p>
                      )}
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}
