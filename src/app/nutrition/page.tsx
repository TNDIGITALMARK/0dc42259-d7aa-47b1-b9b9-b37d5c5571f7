'use client';

import { useState } from 'react';
import { Apple, Search, Filter, Heart, Clock, MapPin, TrendingUp, Target, Award, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BottomNav } from '@/components/bottom-nav';
import { AuthGuard } from '@/components/auth-guard';
import {
  healthyRecipes,
  todaysMealLogs,
  weeklyCalorieLogs,
  currentDietInsight,
  type Recipe,
  type MealLog,
  type DailyCalorieLog
} from '@/lib/mock-data';

export default function NutritionPage() {
  return (
    <AuthGuard>
      <NutritionContent />
    </AuthGuard>
  );
}

function NutritionContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietType, setSelectedDietType] = useState<string>('all');
  const [showGymSuitable, setShowGymSuitable] = useState(false);

  // Today's calorie log
  const todaysLog = weeklyCalorieLogs[0];
  const calorieProgress = (todaysLog.totalCalories / todaysLog.calorieGoal) * 100;
  const proteinProgress = (todaysLog.totalProtein / todaysLog.proteinGoal) * 100;

  // Filter recipes
  const filteredRecipes = healthyRecipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDietType = selectedDietType === 'all' || recipe.dietType.includes(selectedDietType);
    const matchesGymSuitable = !showGymSuitable || recipe.gymSuitable;

    return matchesSearch && matchesCategory && matchesDietType && matchesGymSuitable;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Apple className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Nutrition & Meal Prep</h1>
                <p className="text-sm text-muted-foreground">Track your diet & discover healthy recipes</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {todaysLog.date}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 pb-24 md:pb-8">
        {/* Context Indicator - In/Out of Gym */}
        <Card className="mb-6 shadow-card border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Gym Mode Active</p>
                  <p className="text-sm text-muted-foreground">Showing gym-friendly nutrition options</p>
                </div>
              </div>
              <Button
                variant={showGymSuitable ? "default" : "outline"}
                size="sm"
                onClick={() => setShowGymSuitable(!showGymSuitable)}
                className={showGymSuitable ? "bg-gradient-to-r from-primary to-accent" : ""}
              >
                {showGymSuitable ? 'Gym Only' : 'All Meals'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Today's Calories</div>
              <div className="text-2xl font-bold">{todaysLog.totalCalories}</div>
              <div className="text-xs text-muted-foreground">/ {todaysLog.calorieGoal} goal</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Protein</div>
              <div className="text-2xl font-bold">{todaysLog.totalProtein}g</div>
              <div className="text-xs text-muted-foreground">/ {todaysLog.proteinGoal}g goal</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Meals Logged</div>
              <div className="text-2xl font-bold">{todaysMealLogs.length}</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Gym Meals</div>
              <div className="text-2xl font-bold">{todaysLog.gymMealsCount}</div>
              <div className="text-xs text-muted-foreground">In-gym nutrition</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="recipes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="recipes">Healthy Recipes</TabsTrigger>
            <TabsTrigger value="tracking">Calorie Tracking</TabsTrigger>
            <TabsTrigger value="insights">Diet Insights</TabsTrigger>
          </TabsList>

          {/* HEALTHY RECIPES TAB */}
          <TabsContent value="recipes" className="space-y-6">
            {/* Search and Filter */}
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search recipes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={selectedCategory === 'breakfast' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('breakfast')}
                    >
                      Breakfast
                    </Button>
                    <Button
                      variant={selectedCategory === 'lunch' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('lunch')}
                    >
                      Lunch
                    </Button>
                    <Button
                      variant={selectedCategory === 'dinner' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('dinner')}
                    >
                      Dinner
                    </Button>
                    <Button
                      variant={selectedCategory === 'snack' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('snack')}
                    >
                      Snacks
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedDietType === 'all' ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedDietType('all')}
                    >
                      All Diets
                    </Badge>
                    <Badge
                      variant={selectedDietType === 'mediterranean' ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedDietType('mediterranean')}
                    >
                      Mediterranean
                    </Badge>
                    <Badge
                      variant={selectedDietType === 'vegan' ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedDietType('vegan')}
                    >
                      Vegan
                    </Badge>
                    <Badge
                      variant={selectedDietType === 'paleo' ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedDietType('paleo')}
                    >
                      Paleo
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <Card key={recipe.id} className="shadow-card hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Apple className="h-16 w-16 text-primary/30" />
                    </div>
                    {recipe.isFavorite && (
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                      </div>
                    )}
                    {recipe.gymSuitable && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary shadow-md">
                          <Dumbbell className="h-3 w-3 mr-1" />
                          Gym-Friendly
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-1">{recipe.name}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">{recipe.description}</CardDescription>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge variant="secondary" className="text-xs capitalize">
                        {recipe.category}
                      </Badge>
                      {recipe.postWorkout && (
                        <Badge variant="outline" className="text-xs">Post-Workout</Badge>
                      )}
                      {recipe.preWorkout && (
                        <Badge variant="outline" className="text-xs">Pre-Workout</Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <div className="text-lg font-bold text-primary">{recipe.calories}</div>
                        <div className="text-xs text-muted-foreground">calories</div>
                      </div>
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <div className="text-lg font-bold text-secondary">{recipe.protein}g</div>
                        <div className="text-xs text-muted-foreground">protein</div>
                      </div>
                      <div className="p-2 rounded-lg bg-accent/10">
                        <div className="text-lg font-bold text-accent">{recipe.carbs}g</div>
                        <div className="text-xs text-muted-foreground">carbs</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Made {recipe.timesMade}x</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-accent">
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <Card className="shadow-card">
                <CardContent className="p-12 text-center">
                  <Apple className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No recipes found matching your filters</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedDietType('all');
                      setShowGymSuitable(false);
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* CALORIE TRACKING TAB */}
          <TabsContent value="tracking" className="space-y-6">
            {/* Daily Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Today's Nutrition Progress</CardTitle>
                <CardDescription>{todaysLog.date} • {todaysLog.workoutDay ? 'Workout Day' : 'Rest Day'}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Calories</span>
                    <span className="text-sm text-muted-foreground">
                      {todaysLog.totalCalories} / {todaysLog.calorieGoal} cal
                    </span>
                  </div>
                  <Progress value={calorieProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {todaysLog.calorieGoal - todaysLog.totalCalories > 0
                      ? `${todaysLog.calorieGoal - todaysLog.totalCalories} calories remaining`
                      : `${todaysLog.totalCalories - todaysLog.calorieGoal} calories over goal`}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Protein</span>
                    <span className="text-sm text-muted-foreground">
                      {todaysLog.totalProtein}g / {todaysLog.proteinGoal}g
                    </span>
                  </div>
                  <Progress value={proteinProgress} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <div className="text-sm text-muted-foreground mb-1">Carbs</div>
                    <div className="text-lg font-bold">{todaysLog.totalCarbs}g</div>
                    <div className="text-xs text-muted-foreground">/ {todaysLog.carbsGoal}g</div>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10">
                    <div className="text-sm text-muted-foreground mb-1">Fat</div>
                    <div className="text-lg font-bold">{todaysLog.totalFat}g</div>
                    <div className="text-xs text-muted-foreground">/ {todaysLog.fatGoal}g</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Meals */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Today's Meals</CardTitle>
                <CardDescription>{todaysMealLogs.length} meals logged</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysMealLogs.map((meal) => (
                  <div
                    key={meal.id}
                    className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="capitalize">
                            {meal.mealType}
                          </Badge>
                          {meal.location === 'gym' && (
                            <Badge className="bg-primary">
                              <Dumbbell className="h-3 w-3 mr-1" />
                              At Gym
                            </Badge>
                          )}
                        </div>
                        <h4 className="font-semibold">{meal.recipeName}</h4>
                        {meal.notes && (
                          <p className="text-sm text-muted-foreground mt-1">{meal.notes}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="capitalize">{meal.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="text-sm">
                        <div className="font-bold">{meal.calories}</div>
                        <div className="text-xs text-muted-foreground">cal</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold">{meal.protein}g</div>
                        <div className="text-xs text-muted-foreground">protein</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold">{meal.carbs}g</div>
                        <div className="text-xs text-muted-foreground">carbs</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold">{meal.fat}g</div>
                        <div className="text-xs text-muted-foreground">fat</div>
                      </div>
                    </div>
                  </div>
                ))}

                <Button className="w-full" variant="outline">
                  + Log New Meal
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Weekly Calorie Tracking</CardTitle>
                <CardDescription>Last 5 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyCalorieLogs.slice(0, 5).map((log) => {
                    const progress = (log.totalCalories / log.calorieGoal) * 100;
                    const date = new Date(log.date);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

                    return (
                      <div key={log.date} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{dayName}</span>
                            {log.workoutDay && (
                              <Badge variant="outline" className="text-xs">
                                <Dumbbell className="h-3 w-3 mr-1" />
                                Workout
                              </Badge>
                            )}
                          </div>
                          <span className="text-muted-foreground">
                            {log.totalCalories} / {log.calorieGoal} cal
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* DIET INSIGHTS TAB */}
          <TabsContent value="insights" className="space-y-6">
            {/* Period Overview */}
            <Card className="shadow-card border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>Your Diet Insights</CardTitle>
                <CardDescription>
                  {currentDietInsight.periodStart} to {currentDietInsight.periodEnd} ({currentDietInsight.totalDays} days)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{currentDietInsight.avgDailyCalories}</div>
                    <div className="text-xs text-muted-foreground">Avg Daily Calories</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-secondary/10">
                    <Target className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-secondary">{currentDietInsight.avgDailyProtein}g</div>
                    <div className="text-xs text-muted-foreground">Avg Daily Protein</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">{currentDietInsight.daysMetCalorieGoal}/{currentDietInsight.totalDays}</div>
                    <div className="text-xs text-muted-foreground">Days Met Calorie Goal</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <Dumbbell className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{currentDietInsight.gymMealsPercentage.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">Gym Meals</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Macro Averages</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="text-sm text-muted-foreground mb-1">Carbs</div>
                      <div className="text-xl font-bold">{currentDietInsight.avgDailyCarbs}g</div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="text-sm text-muted-foreground mb-1">Protein</div>
                      <div className="text-xl font-bold">{currentDietInsight.avgDailyProtein}g</div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="text-sm text-muted-foreground mb-1">Fat</div>
                      <div className="text-xl font-bold">{currentDietInsight.avgDailyFat}g</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Favorite Recipes */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Favorite Recipes</CardTitle>
                <CardDescription>Most frequently made meals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentDietInsight.favoriteRecipes.map((fav, index) => (
                  <div
                    key={fav.recipeId}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{fav.name}</p>
                        <p className="text-sm text-muted-foreground">Made {fav.timesMade} times</p>
                      </div>
                    </div>
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>Tips to improve your nutrition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentDietInsight.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm">{rec}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
}

