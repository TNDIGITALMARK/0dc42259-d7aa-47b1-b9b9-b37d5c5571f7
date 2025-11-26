'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Dumbbell,
  BookOpen,
  Plus,
  X,
  ArrowLeft,
  Save,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { DEFAULT_GYM_EXERCISES, DEFAULT_HOMEWORK_EXERCISES } from '@/lib/types/workout';
import type { WorkoutType, WorkoutExercise } from '@/lib/types/workout';

export default function CreateWorkoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const typeParam = searchParams.get('type') as WorkoutType | null;

  const [workoutType, setWorkoutType] = useState<WorkoutType>(typeParam || 'gym');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<WorkoutExercise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const exerciseLibrary = workoutType === 'gym' ? DEFAULT_GYM_EXERCISES : DEFAULT_HOMEWORK_EXERCISES;
  const filteredExercises = exerciseLibrary.filter(ex =>
    ex.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ex.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addExercise = (exerciseName: string) => {
    const exercise = exerciseLibrary.find(ex => ex.name === exerciseName);
    if (!exercise) return;

    const newExercise: WorkoutExercise = {
      exercise_id: exercise.name!, // In real app, use actual ID
      sets: workoutType === 'gym' ? 3 : undefined,
      reps: workoutType === 'gym' ? 10 : undefined,
      duration: exercise.duration_minutes,
      notes: ''
    };

    setSelectedExercises([...selectedExercises, newExercise]);
  };

  const removeExercise = (index: number) => {
    setSelectedExercises(selectedExercises.filter((_, i) => i !== index));
  };

  const updateExercise = (index: number, field: keyof WorkoutExercise, value: any) => {
    const updated = [...selectedExercises];
    updated[index] = { ...updated[index], [field]: value };
    setSelectedExercises(updated);
  };

  const totalDuration = selectedExercises.reduce((sum, ex) => sum + (ex.duration || 0), 0);

  const handleSave = () => {
    // In real app, save to Supabase
    console.log('Saving workout:', {
      title,
      description,
      type: workoutType,
      exercises: selectedExercises,
      total_duration_minutes: totalDuration
    });
    router.push('/workouts');
  };

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
                <h1 className="text-xl font-bold">Create Workout</h1>
                <p className="text-xs text-muted-foreground">Design your perfect routine</p>
              </div>
            </div>
            <Button onClick={handleSave} disabled={!title || selectedExercises.length === 0} className="bg-gradient-to-r from-primary to-accent">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6 max-w-4xl">
        {/* Workout Type Selection */}
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Workout Type</CardTitle>
            <CardDescription>Select what type of workout you want to create</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setWorkoutType('gym')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  workoutType === 'gym'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Dumbbell className={`h-8 w-8 mx-auto mb-2 ${workoutType === 'gym' ? 'text-primary' : 'text-muted-foreground'}`} />
                <p className="font-semibold">Gym Workout</p>
                <p className="text-xs text-muted-foreground mt-1">Fitness & exercise routines</p>
              </button>
              <button
                onClick={() => setWorkoutType('homework')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  workoutType === 'homework'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-border hover:border-secondary/50'
                }`}
              >
                <BookOpen className={`h-8 w-8 mx-auto mb-2 ${workoutType === 'homework' ? 'text-secondary' : 'text-muted-foreground'}`} />
                <p className="font-semibold">Homework</p>
                <p className="text-xs text-muted-foreground mt-1">Study & assignments</p>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Workout Details */}
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Workout Details</CardTitle>
            <CardDescription>Give your workout a name and description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Workout Title *</Label>
              <Input
                id="title"
                placeholder={workoutType === 'gym' ? 'e.g., Upper Body Strength' : 'e.g., Math Chapter 5'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                placeholder={workoutType === 'gym' ? 'Describe your workout goals...' : 'What topics will you cover?'}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Exercise Selection */}
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Add Exercises</CardTitle>
            <CardDescription>
              {workoutType === 'gym' ? 'Select exercises for your workout' : 'Add homework tasks to complete'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={workoutType === 'gym' ? 'Search exercises...' : 'Search homework tasks...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Exercise Library */}
            <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
              {filteredExercises.map((exercise, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium">{exercise.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs capitalize">{exercise.category}</Badge>
                      {exercise.difficulty && (
                        <Badge variant="secondary" className="text-xs capitalize">{exercise.difficulty}</Badge>
                      )}
                      {exercise.duration_minutes && (
                        <span className="text-xs text-muted-foreground">{exercise.duration_minutes} min</span>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addExercise(exercise.name!)}
                    disabled={selectedExercises.some(ex => ex.exercise_id === exercise.name)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Selected Exercises */}
        {selectedExercises.length > 0 && (
          <Card className="shadow-card mb-6 border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Selected Exercises ({selectedExercises.length})</CardTitle>
                  <CardDescription>Total duration: {totalDuration} minutes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedExercises.map((exercise, idx) => (
                <div key={idx} className="p-4 rounded-lg border-2 bg-card space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{exercise.exercise_id}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeExercise(idx)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {workoutType === 'gym' && (
                      <>
                        <div>
                          <Label className="text-xs">Sets</Label>
                          <Input
                            type="number"
                            value={exercise.sets || ''}
                            onChange={(e) => updateExercise(idx, 'sets', parseInt(e.target.value) || 0)}
                            className="mt-1"
                            min="1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Reps</Label>
                          <Input
                            type="number"
                            value={exercise.reps || ''}
                            onChange={(e) => updateExercise(idx, 'reps', parseInt(e.target.value) || 0)}
                            className="mt-1"
                            min="1"
                          />
                        </div>
                      </>
                    )}
                    <div className={workoutType === 'gym' ? '' : 'col-span-2'}>
                      <Label className="text-xs">Duration (min)</Label>
                      <Input
                        type="number"
                        value={exercise.duration || ''}
                        onChange={(e) => updateExercise(idx, 'duration', parseInt(e.target.value) || 0)}
                        className="mt-1"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs">Notes (optional)</Label>
                    <Input
                      placeholder="Add any notes..."
                      value={exercise.notes || ''}
                      onChange={(e) => updateExercise(idx, 'notes', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Save Button (Bottom) */}
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.back()} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!title || selectedExercises.length === 0}
            className="flex-1 bg-gradient-to-r from-primary to-accent"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Workout
          </Button>
        </div>
      </main>
    </div>
  );
}
