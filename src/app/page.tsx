'use client';

import { Dumbbell, Apple, Target, CheckSquare, Star, ArrowRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <CheckSquare className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">LIFEPLAN PRO</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="https://blog.example.com" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button className="rounded-md shadow">Download App</Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                Unlock Your Full Potential
                <br />
                with LifePlan Pro
              </h1>
              <p className="text-lg text-secondary mb-8">
                All-in-one life planner for wellness, organization
                <br />
                & achievement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-md shadow text-base px-8">
                    Get Started Free
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-md text-base px-8">
                  Available On
                  <span className="ml-2 flex items-center gap-1">
                    <div className="h-5 w-5 bg-foreground rounded" />
                    <div className="h-5 w-5 bg-foreground rounded" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/50 rounded-full blur-3xl scale-75" />
              <div className="relative bg-white rounded-3xl shadow-lg p-6 max-w-sm mx-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border-2 border-primary/20">
                    <div className="h-5 w-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Morning Workout</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <div className="h-5 w-5 rounded border-2 border-muted-foreground" />
                    <span className="text-sm">Meal Prep</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <div className="h-5 w-5 rounded border-2 border-muted-foreground" />
                    <span className="text-sm">Work on Goals</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <div className="h-5 w-5 rounded border-2 border-muted-foreground" />
                    <span className="text-sm">Evening Run</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Features Designed For You</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Workout & Fitness</h3>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Plan workout routines, progress tracking
                  <br />
                  & exercise integration
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Apple className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Nutrition & Meal Prep</h3>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Healthy recipes, calorie tracking
                  <br />
                  & diet insights
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Goals & Habits</h3>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Set milestones, track your habits
                  <br />
                  & visualize success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 gradient-blue text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Take Control of Your Life</h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of users who have transformed their lives
                with LifePlan Pro. Start your journey today.
              </p>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="rounded-md text-base px-8">
                  Download Now
                </Button>
              </Link>
            </div>

            <Card className="shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Jane D</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-secondary leading-relaxed">
                  "LifePlan Pro has been a game-changer for my lifestyle. I was struggling
                  with staying consistent, meal prepping, and juggling multiple goals. This app brought
                  everything together in one place!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Our Story</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Team</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Facebook</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-secondary mb-3">Get the latest updates and tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="rounded-md">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-secondary">
              © 2025 LifePlan Pro. All reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}