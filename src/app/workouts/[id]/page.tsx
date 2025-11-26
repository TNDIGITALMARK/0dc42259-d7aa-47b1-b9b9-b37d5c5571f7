'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Timer,
  Award,
  TrendingUp,
  Smile,
  Meh,
  Frown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function WorkoutSessionPage() {
  const router = useRouter();
  const params = useParams();
  const workoutId = params.id as string;

  // Mock workout data - in real app, fetch from Supabase
  const workout = {
    id: workoutId,
    title: workoutId === '1' ? 'Math Homework' : 'Upper Body Workout',
    type: workoutId === '1' ? 'homework' : 'gym',
    duration: workoutId === '1' ? 45 : 40,
    exercises: workoutId === '1' ? [
      { id: '1', name: 'Algebra Problems', duration: 20, completed: false },
      { id: '2', name: 'Geometry Review', duration: 25, completed: false }
    ] : [
      { id: '1', name: 'Push-ups', sets: 3, reps: 15, completed: false },
      { id: '2', name: 'Dumbbell Curls', sets: 3, reps: 12, completed: false },
      { id: '3', name: 'Shoulder Press', sets: 3, reps: 10, completed: false }
    ]
  };

  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [mood, setMood] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [difficultyRating, setDifficultyRating] = useState<number>(3);

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  const progress = (completedExercises.size / workout.exercises.length) * 100;

  const handleComplete = () => {
    // In real app, save to Supabase
    console.log('Completing workout:', {
      workout_id: workoutId,
      completed_exercises: Array.from(completedExercises),
      duration_minutes: sessionTime,
      mood,
      notes,
      difficulty_rating: difficultyRating
    });
    router.push('/workouts');
  };

  const moodOptions = [
    { value: 'great', label: 'Great', icon: Smile, color: 'text-green-500' },
    { value: 'good', label: 'Good', icon: Smile, color: 'text-blue-500' },
    { value: 'okay', label: 'Okay', icon: Meh, color: 'text-yellow-500' },
    { value: 'tired', label: 'Tired', icon: Frown, color: 'text-orange-500' },
    { value: 'exhausted', label: 'Exhausted', icon: Frown, color: 'text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">{workout.title}</h1>
                <p className="text-xs text-muted-foreground capitalize">{workout.type} • {workout.duration} min</p>
              </div>
            </div>
            <Badge
              variant={progress === 100 ? 'default' : 'secondary'}
              className="text-sm"
            >
              {Math.round(progress)}%
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6 max-w-3xl pb-24">
        {/* Progress Overview */}
        <Card className="shadow-card mb-6 border-2 border-primary/20">
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Progress</p>
                <p className="text-sm text-muted-foreground">
                  {completedExercises.size}/{workout.exercises.length} completed
                </p>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Timer className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-sm font-semibold">{workout.duration}min</p>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground">Exercises</p>
                <p className="text-sm font-semibold">{workout.exercises.length}</p>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-xs text-muted-foreground">Done</p>
                <p className="text-sm font-semibold">{completedExercises.size}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exercise List */}
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Exercises</CardTitle>
            <CardDescription>Tap to mark as completed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {workout.exercises.map((exercise, idx) => {
              const isCompleted = completedExercises.has(exercise.id);
              return (
                <button
                  key={exercise.id}
                  onClick={() => toggleExercise(exercise.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    isCompleted
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-primary text-white' : 'bg-muted'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                        {exercise.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {('sets' in exercise)
                          ? `${exercise.sets} sets × ${exercise.reps} reps`
                          : `${exercise.duration} minutes`}
                      </p>
                    </div>
                    {isCompleted && (
                      <Badge variant="default">Done</Badge>
                    )}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Post-Workout Feedback */}
        {progress === 100 && (
          <Card className="shadow-card mb-6 border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Great Job!
              </CardTitle>
              <CardDescription>How was your workout?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Mood Selection */}
              <div>
                <Label className="mb-2 block">How do you feel?</Label>
                <div className="grid grid-cols-5 gap-2">
                  {moodOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setMood(option.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          mood === option.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon className={`h-6 w-6 mx-auto mb-1 ${option.color}`} />
                        <p className="text-xs">{option.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Difficulty Rating */}
              <div>
                <Label className="mb-2 block">Difficulty (1-5)</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setDifficultyRating(rating)}
                      className={`flex-1 h-10 rounded-lg border-2 font-semibold transition-all ${
                        difficultyRating === rating
                          ? 'border-primary bg-primary text-white'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="How did it go? Any observations?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleComplete}
            disabled={progress !== 100}
            className="flex-1 bg-gradient-to-r from-primary to-accent"
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Complete Workout
          </Button>
        </div>
      </main>
    </div>
  );
}
