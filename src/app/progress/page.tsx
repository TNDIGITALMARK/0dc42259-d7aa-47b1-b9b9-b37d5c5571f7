'use client';

import { Target, TrendingUp, Award, Calendar, Flame } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { lifeGoals } from '@/lib/mock-data';
import { Progress } from '@/components/ui/progress';
import { BottomNav } from '@/components/bottom-nav';
import { AuthGuard } from '@/components/auth-guard';

export default function ProgressPage() {
  return (
    <AuthGuard>
      <ProgressContent />
    </AuthGuard>
  );
}

function ProgressContent() {
  const completedMilestones = lifeGoals.reduce((sum, goal) =>
    sum + goal.milestones.filter(m => m.completed).length, 0
  );
  const totalMilestones = lifeGoals.reduce((sum, goal) => sum + goal.milestones.length, 0);
  const avgProgress = Math.round(lifeGoals.reduce((sum, goal) => sum + goal.progress, 0) / lifeGoals.length);

  // Mock streak data
  const currentStreak = 14;
  const longestStreak = 21;
  const weeklyData = [
    { day: 'Mon', workouts: 1, meals: 3, goals: 2 },
    { day: 'Tue', workouts: 0, meals: 3, goals: 1 },
    { day: 'Wed', workouts: 1, meals: 3, goals: 2 },
    { day: 'Thu', workouts: 0, meals: 3, goals: 1 },
    { day: 'Fri', workouts: 1, meals: 3, goals: 2 },
    { day: 'Sat', workouts: 0, meals: 2, goals: 1 },
    { day: 'Sun', workouts: 0, meals: 2, goals: 0 },
  ];

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
                This Month
              </Badge>
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
          <h2 className="text-3xl font-bold mb-2">Progress Analytics</h2>
          <p className="text-secondary text-lg">Track your achievements and celebrate your journey</p>
        </div>

        {/* Stats Overview - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-orange-500 mb-1">{currentStreak}</div>
              <p className="text-xs text-muted-foreground">days in a row 🔥</p>
              <Progress value={(currentStreak / longestStreak) * 100} className="mt-3 h-1" />
            </CardContent>
          </Card>

          <Card className="shadow-card border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Award className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-1">{longestStreak}</div>
              <p className="text-xs text-muted-foreground">days record 🏆</p>
              <div className="mt-3">
                <Badge variant="outline" className="text-xs">Personal Best</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-2 border-secondary/20 hover:border-secondary hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Milestones</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                <Target className="h-5 w-5 text-secondary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-secondary mb-1">
                {completedMilestones}<span className="text-2xl text-muted-foreground">/{totalMilestones}</span>
              </div>
              <p className="text-xs text-muted-foreground">completed</p>
              <Progress value={(completedMilestones / totalMilestones) * 100} className="mt-3 h-1" />
            </CardContent>
          </Card>

          <Card className="shadow-card border-2 border-success/20 hover:border-success hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-success/10 group-hover:bg-success/20 flex items-center justify-center transition-colors">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-1">
                {avgProgress}%
              </div>
              <p className="text-xs text-muted-foreground">across all goals</p>
              <div className="mt-3">
                {avgProgress >= 75 ? (
                  <Badge className="bg-success text-xs">Excellent!</Badge>
                ) : avgProgress >= 50 ? (
                  <Badge variant="secondary" className="text-xs">Good Progress</Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">Keep Going!</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Activity */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your consistency this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 justify-between">
              {weeklyData.map((day, index) => {
                const totalActivities = day.workouts + (day.meals > 0 ? 1 : 0) + (day.goals > 0 ? 1 : 0);
                const height = Math.max(20, (totalActivities / 4) * 100);
                const isActive = totalActivities > 0;

                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-secondary rounded-t-lg relative" style={{ height: '120px' }}>
                      <div
                        className={`absolute bottom-0 w-full rounded-t-lg transition-all ${
                          isActive ? 'bg-primary' : 'bg-muted'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <p className="text-xs font-medium">{day.day}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Goal Progress Breakdown */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Goal Progress Breakdown</CardTitle>
            <CardDescription>Detailed view of your life goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {lifeGoals.map((goal) => (
                <div key={goal.id}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="capitalize">{goal.category}</Badge>
                        <p className="font-semibold">{goal.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-primary">{goal.progress}%</p>
                      {goal.currentStreak && (
                        <div className="flex items-center gap-1 text-orange-500 mt-1">
                          <Flame className="h-3 w-3" />
                          <p className="text-xs font-medium">{goal.currentStreak} days</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />

                  {/* Milestones */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {goal.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className={`text-sm p-2 rounded-lg ${
                          milestone.completed
                            ? 'bg-success/10 text-success'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full flex items-center justify-center ${
                            milestone.completed ? 'bg-success' : 'bg-muted'
                          }`}>
                            {milestone.completed && (
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <p className={`text-xs font-medium ${milestone.completed ? '' : 'text-muted-foreground'}`}>
                            {milestone.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Celebrate your wins!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-success/10 border-2 border-success/20">
                <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">14-Day Streak!</p>
                  <p className="text-sm text-muted-foreground">Maintained daily consistency for 2 weeks</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  Today
                </Badge>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border-2 border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Marketing Course Milestone</p>
                  <p className="text-sm text-muted-foreground">Completed 2 courses in certification program</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  3 days ago
                </Badge>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border-2 border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Savings Goal Progress</p>
                  <p className="text-sm text-muted-foreground">Reached $2,000 in emergency fund</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  1 week ago
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}

