'use client';

import { Dumbbell, Apple, Target, CheckSquare, Star, ArrowRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <CheckSquare className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">LIFEPLAN PRO</span>
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
                <Button className="rounded-md shadow-md bg-gradient-to-r from-primary to-accent hover:opacity-90">Download App</Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Vibrant Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Unlock Your Full Potential
                <br />
                with LifePlan Pro
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                All-in-one life planner for wellness, organization
                <br />
                & achievement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-md shadow-lg text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Get Started Free
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-md text-base px-8 border-2 border-primary hover:bg-primary/10">
                  Available On
                  <span className="ml-2 flex items-center gap-1">
                    <div className="h-5 w-5 bg-foreground rounded" />
                    <div className="h-5 w-5 bg-foreground rounded" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-3xl blur-3xl scale-90" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/generated/hero-lifeplan.png"
                  alt="Plan Your Future - Achieve your goals, live the best life"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 overflow-hidden">
        {/* Colorful Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-muted" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features Designed For You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your life in one beautiful, intuitive app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workout Feature */}
            <Card className="shadow-lg text-center border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl overflow-hidden group">
              <CardHeader className="flex flex-col items-center relative">
                <div className="absolute inset-0 gradient-purple opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/generated/fitness-feature.png"
                    alt="Workout & Fitness"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Workout & Fitness</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plan workout routines, progress tracking
                  <br />
                  & exercise integration
                </p>
              </CardContent>
            </Card>

            {/* Nutrition Feature */}
            <Card className="shadow-lg text-center border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-2xl overflow-hidden group">
              <CardHeader className="flex flex-col items-center relative">
                <div className="absolute inset-0 gradient-cyan opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/generated/nutrition-feature.png"
                    alt="Nutrition & Meal Prep"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Nutrition & Meal Prep</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Healthy recipes, calorie tracking
                  <br />
                  & diet insights
                </p>
              </CardContent>
            </Card>

            {/* Goals Feature */}
            <Card className="shadow-lg text-center border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl overflow-hidden group">
              <CardHeader className="flex flex-col items-center relative">
                <div className="absolute inset-0 gradient-pink opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/generated/goals-feature.png"
                    alt="Goals & Habits"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Goals & Habits</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
      <section id="testimonials" className="relative py-20 overflow-hidden">
        {/* Vibrant Rainbow Gradient Background */}
        <div className="absolute inset-0 gradient-rainbow opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6 drop-shadow-lg">Take Control of Your Life</h2>
              <p className="text-white/95 text-lg mb-8 drop-shadow">
                Join thousands of users who have transformed their lives
                with LifePlan Pro. Start your journey today.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="rounded-md text-base px-8 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Download Now
                </Button>
              </Link>
            </div>

            <Card className="shadow-2xl bg-white border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-white shadow-lg">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Jane D</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
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
      <footer className="relative bg-gradient-to-br from-muted via-background to-secondary/20 border-t border-border py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-primary">About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-3">Get the latest updates and tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-sm border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
                <Button size="sm" className="rounded-md bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 LifePlan Pro. All reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}