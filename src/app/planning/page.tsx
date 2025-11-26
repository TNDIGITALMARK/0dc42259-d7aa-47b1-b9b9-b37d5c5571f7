'use client';

import { Dumbbell, Apple, Target, Plus, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { weeklyWorkouts, weeklyMeals, lifeGoals } from '@/lib/mock-data';
import { BottomNav } from '@/components/bottom-nav';

export default function PlanningPage() {
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
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Week View
              </Button>
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                SC
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 pb-24 md:pb-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Goal Planning Studio</h2>
          <p className="text-secondary text-lg">Create and manage your workout programs, meal plans, and life goals</p>
        </div>

        <Tabs defaultValue="workouts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="workouts">
              <Dumbbell className="h-4 w-4 mr-2" />
              Workouts
            </TabsTrigger>
            <TabsTrigger value="meals">
              <Apple className="h-4 w-4 mr-2" />
              Meals
            </TabsTrigger>
            <TabsTrigger value="goals">
              <Target className="h-4 w-4 mr-2" />
              Goals
            </TabsTrigger>
          </TabsList>

          {/* Workout Planning */}
          <TabsContent value="workouts" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Weekly Workout Program</CardTitle>
                    <CardDescription>Strength Building - 3 days per week</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Workout
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyWorkouts.map((workout) => (
                    <Card key={workout.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{workout.day}</CardTitle>
                            <CardDescription>{workout.type} • {workout.duration} min</CardDescription>
                          </div>
                          <Badge variant="secondary">{workout.exercises.length} exercises</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {workout.exercises.map((exercise, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                              <div>
                                <p className="font-medium text-sm">{exercise.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {exercise.sets} sets × {exercise.reps}
                                  {exercise.weight && ` @ ${exercise.weight}lbs`}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Meal Planning */}
          <TabsContent value="meals" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Weekly Meal Plan</CardTitle>
                    <CardDescription>Mediterranean Diet - 1,800 calories daily</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Meal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyMeals.map((meal) => (
                    <Card key={meal.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="capitalize">{meal.type}</Badge>
                              <CardTitle className="text-lg">{meal.name}</CardTitle>
                            </div>
                            <CardDescription>{meal.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-6">
                            <div>
                              <p className="text-sm text-muted-foreground">Calories</p>
                              <p className="text-lg font-bold">{meal.calories}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Protein</p>
                              <p className="text-lg font-bold">{meal.protein}g</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Prep Time</p>
                              <p className="text-lg font-bold">{meal.prepTime}m</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Remove</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Life Goals Planning */}
          <TabsContent value="goals" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Life Goals</CardTitle>
                    <CardDescription>Track career, financial, health, and personal development goals</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Goal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lifeGoals.map((goal) => (
                    <Card key={goal.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="secondary" className="capitalize">{goal.category}</Badge>
                              <CardTitle className="text-lg">{goal.title}</CardTitle>
                            </div>
                            <CardDescription>{goal.description}</CardDescription>
                          </div>
                          {goal.targetDate && (
                            <Badge variant="outline">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(goal.targetDate).toLocaleDateString()}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-sm font-medium">Milestones</p>
                              <p className="text-sm text-muted-foreground">
                                {goal.milestones.filter(m => m.completed).length}/{goal.milestones.length} completed
                              </p>
                            </div>
                            <div className="space-y-2">
                              {goal.milestones.map((milestone) => (
                                <div key={milestone.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                                  <div className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                                    milestone.completed ? 'bg-primary border-primary' : 'border-muted-foreground'
                                  }`}>
                                    {milestone.completed && (
                                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <p className={`text-sm ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                                      {milestone.title}
                                    </p>
                                  </div>
                                  {milestone.dueDate && !milestone.completed && (
                                    <p className="text-xs text-muted-foreground">
                                      Due {new Date(milestone.dueDate).toLocaleDateString()}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">Edit Goal</Button>
                            <Button variant="ghost" size="sm">Delete</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
}
