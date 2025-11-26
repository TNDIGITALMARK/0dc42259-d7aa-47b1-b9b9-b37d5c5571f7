'use client';

import { useState } from 'react';
import {
  Dumbbell,
  BookOpen,
  Calendar,
  Plus,
  TrendingUp,
  Award,
  Clock,
  Target,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BottomNav } from '@/components/bottom-nav';
import Link from 'next/link';

export default function WorkoutsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data - in real app, this would come from Supabase
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date().getDay();

  const stats = {
    thisWeek: {
      completed: 4,
      total: 7,
      streakDays: 3,
      totalMinutes: 180
    }
  };

  const todaysWorkouts = [
    {
      id: '1',
      title: 'Math Homework',
      type: 'homework' as const,
      category: 'math',
      duration: 45,
      status: 'scheduled' as const,
      exercises: [
        { name: 'Algebra Problems', duration: 20, completed: false },
        { name: 'Geometry Review', duration: 25, completed: false }
      ]
    },
    {
      id: '2',
      title: 'Upper Body Workout',
      type: 'gym' as const,
      category: 'strength',
      duration: 40,
      status: 'scheduled' as const,
      exercises: [
        { name: 'Push-ups', sets: 3, reps: 15, completed: false },
        { name: 'Dumbbell Curls', sets: 3, reps: 12, completed: false },
        { name: 'Shoulder Press', sets: 3, reps: 10, completed: false }
      ]
    }
  ];

  const upcomingWorkouts = [
    {
      id: '3',
      title: 'Reading Assignment',
      type: 'homework' as const,
      date: 'Tomorrow',
      duration: 30
    },
    {
      id: '4',
      title: 'Cardio Session',
      type: 'gym' as const,
      date: 'Tomorrow',
      duration: 35
    }
  ];

  const recentActivity = [
    {
      id: 'r1',
      title: 'Science Lab Report',
      type: 'homework' as const,
      completedAt: '2 hours ago',
      duration: 50,
      mood: 'good' as const
    },
    {
      id: 'r2',
      title: 'Morning Run',
      type: 'gym' as const,
      completedAt: 'Yesterday',
      duration: 30,
      caloriesBurned: 280,
      mood: 'great' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Workouts</h1>
                <p className="text-xs text-muted-foreground">Track homework & gym sessions</p>
              </div>
            </div>
            <Link href="/workouts/create">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                <Plus className="h-4 w-4 mr-1" />
                Create
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6 pb-24 md:pb-8">
        {/* Weekly Progress */}
        <Card className="shadow-card mb-6 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              This Week's Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats.thisWeek.completed}/{stats.thisWeek.total}</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{stats.thisWeek.streakDays}</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{stats.thisWeek.totalMinutes}</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">A+</div>
                <div className="text-xs text-muted-foreground">Grade</div>
              </div>
            </div>

            {/* Week Calendar */}
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day, index) => {
                const isToday = index === today - 1;
                const isCompleted = index < today - 1;
                return (
                  <div key={day} className="text-center">
                    <div className={`text-xs font-medium mb-1 ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>
                      {day}
                    </div>
                    <div
                      className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                        isToday
                          ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md'
                          : isCompleted
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Workout Types */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Workouts</TabsTrigger>
            <TabsTrigger value="homework">
              <BookOpen className="h-4 w-4 mr-1" />
              Homework
            </TabsTrigger>
            <TabsTrigger value="gym">
              <Dumbbell className="h-4 w-4 mr-1" />
              Gym
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-6">
            {/* Today's Workouts */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {todaysWorkouts.map((workout) => (
                  <Card key={workout.id} className="shadow-card hover:shadow-md transition-shadow border-l-4"
                    style={{ borderLeftColor: workout.type === 'homework' ? 'hsl(var(--secondary))' : 'hsl(var(--primary))' }}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                            workout.type === 'homework' ? 'bg-secondary/20' : 'bg-primary/20'
                          }`}>
                            {workout.type === 'homework' ? (
                              <BookOpen className="h-5 w-5 text-secondary" />
                            ) : (
                              <Dumbbell className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold">{workout.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs capitalize">
                                {workout.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {workout.duration} min
                              </span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/workouts/${workout.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                            <PlayCircle className="h-4 w-4 mr-1" />
                            Start
                          </Button>
                        </Link>
                      </div>

                      {/* Exercise List */}
                      <div className="space-y-2 pl-13">
                        {workout.exercises.map((exercise, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm p-2 rounded bg-muted/50">
                            <span>{exercise.name}</span>
                            <span className="text-muted-foreground">
                              {('sets' in exercise) ? `${exercise.sets}×${exercise.reps}` : `${exercise.duration}min`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Workouts */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Upcoming
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {upcomingWorkouts.map((workout) => (
                  <Card key={workout.id} className="shadow-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {workout.type === 'homework' ? (
                            <BookOpen className="h-5 w-5 text-secondary" />
                          ) : (
                            <Dumbbell className="h-5 w-5 text-primary" />
                          )}
                          <div>
                            <h4 className="font-medium">{workout.title}</h4>
                            <p className="text-xs text-muted-foreground">{workout.date} • {workout.duration}min</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <Card key={activity.id} className="shadow-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{activity.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {activity.completedAt} • {activity.duration}min
                              {activity.caloriesBurned && ` • ${activity.caloriesBurned} cal`}
                            </p>
                          </div>
                        </div>
                        <Badge variant={activity.mood === 'great' ? 'default' : 'secondary'} className="capitalize">
                          {activity.mood}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="homework" className="space-y-4 mt-6">
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Homework Workouts</h3>
              <p className="text-muted-foreground mb-4">Track your study sessions and assignments</p>
              <Link href="/workouts/create?type=homework">
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Homework
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="gym" className="space-y-4 mt-6">
            <div className="text-center py-12">
              <Dumbbell className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Gym Workouts</h3>
              <p className="text-muted-foreground mb-4">Plan and track your fitness routines</p>
              <Link href="/workouts/create?type=gym">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Gym Workout
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
}
