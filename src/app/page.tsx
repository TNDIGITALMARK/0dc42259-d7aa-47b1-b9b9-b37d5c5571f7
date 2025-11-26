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
              <Link href="/blog">
                <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                  Blog
                </span>
              </Link>
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
                  src="/generated/hero-fitness-group.png"
                  alt="Diverse group achieving fitness goals together - Transform your life with LifePlan Pro"
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
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features Designed For You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to transform your life in one beautiful, intuitive app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Workout Feature */}
            <Card className="shadow-lg text-center border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden group cursor-pointer">
              <CardHeader className="flex flex-col items-center relative pb-4">
                <div className="absolute inset-0 gradient-purple opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/generated/fitness-feature.png"
                    alt="Workout & Fitness"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Workout & Fitness</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Plan workout routines, progress tracking
                  <br />
                  & exercise integration
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Custom workout programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Progress tracking & analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Exercise library & guides</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Feature */}
            <Card className="shadow-lg text-center border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden group cursor-pointer">
              <CardHeader className="flex flex-col items-center relative pb-4">
                <div className="absolute inset-0 gradient-cyan opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/generated/nutrition-feature.png"
                    alt="Nutrition & Meal Prep"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Nutrition & Meal Prep</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Healthy recipes, calorie tracking
                  <br />
                  & diet insights
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-secondary" />
                    <span>200+ healthy recipes</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-secondary" />
                    <span>Smart calorie tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-secondary" />
                    <span>Personalized meal plans</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals Feature */}
            <Card className="shadow-lg text-center border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden group cursor-pointer">
              <CardHeader className="flex flex-col items-center relative pb-4">
                <div className="absolute inset-0 gradient-pink opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative mb-4 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/generated/goals-feature.png"
                    alt="Goals & Habits"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Goals & Habits</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Set milestones, track your habits
                  <br />
                  & visualize success
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-accent" />
                    <span>Unlimited goal setting</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-accent" />
                    <span>Habit streak tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckSquare className="h-4 w-4 text-accent" />
                    <span>Visual progress charts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-sm text-muted-foreground">Workouts Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-sm text-muted-foreground">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Start free and upgrade anytime. All plans include core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="shadow-lg border-2 border-border hover:border-primary/50 transition-all hover:shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-4 mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect to get started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">Basic workout tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">Meal planning templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">Goal setting (up to 3)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">Basic progress insights</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="block">
                  <Button variant="outline" className="w-full rounded-md border-2 hover:bg-muted mt-6">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan - Featured */}
            <Card className="shadow-2xl border-2 border-primary relative hover:shadow-primary/20 transition-all scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 mx-auto shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pro
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">For serious achievers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Everything in Free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Unlimited goals & habits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Custom workout programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Personalized meal plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="block">
                  <Button className="w-full rounded-md shadow-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 mt-6">
                    Start Pro Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="shadow-lg border-2 border-accent/50 hover:border-accent transition-all hover:shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 mb-4 mx-auto shadow-lg">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Premium
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Maximum transformation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm font-medium">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">1-on-1 coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">AI-powered recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">Custom integration support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">Exclusive community access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <CheckSquare className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">VIP support (24/7)</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="block">
                  <Button variant="outline" className="w-full rounded-md border-2 border-accent hover:bg-accent/10 mt-6">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Compare Plans</h3>
            <Card className="shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-semibold">Features</th>
                        <th className="text-center p-4 font-semibold">Free</th>
                        <th className="text-center p-4 font-semibold bg-primary/5">Pro</th>
                        <th className="text-center p-4 font-semibold">Premium</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="p-4">Workout Tracking</td>
                        <td className="text-center p-4">
                          <CheckSquare className="h-5 w-5 text-success mx-auto" />
                        </td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckSquare className="h-5 w-5 text-success mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckSquare className="h-5 w-5 text-success mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">Meal Planning</td>
                        <td className="text-center p-4 text-muted-foreground">Basic</td>
                        <td className="text-center p-4 bg-primary/5 font-medium">Advanced</td>
                        <td className="text-center p-4 font-medium">Custom</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">Goals & Habits</td>
                        <td className="text-center p-4 text-muted-foreground">Up to 3</td>
                        <td className="text-center p-4 bg-primary/5 font-medium">Unlimited</td>
                        <td className="text-center p-4 font-medium">Unlimited</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">Analytics & Insights</td>
                        <td className="text-center p-4 text-muted-foreground">Basic</td>
                        <td className="text-center p-4 bg-primary/5 font-medium">Advanced</td>
                        <td className="text-center p-4 font-medium">AI-Powered</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4">1-on-1 Coaching</td>
                        <td className="text-center p-4 text-muted-foreground">-</td>
                        <td className="text-center p-4 bg-primary/5 text-muted-foreground">-</td>
                        <td className="text-center p-4">
                          <CheckSquare className="h-5 w-5 text-success mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4">Priority Support</td>
                        <td className="text-center p-4 text-muted-foreground">-</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckSquare className="h-5 w-5 text-success mx-auto" />
                        </td>
                        <td className="text-center p-4 font-medium">24/7 VIP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ or Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckSquare className="h-5 w-5 text-success" />
                </div>
                <span className="text-sm font-medium">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-sm font-medium">Secure payment processing</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by over 50,000+ users worldwide • 98% satisfaction rate
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories with Real Photos */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real People, Real Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See how our community is transforming their lives with LifePlan Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/generated/hero-fitness-group.png"
                  alt="Fitness community working out together"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Community Fitness</h3>
                <p className="text-muted-foreground">
                  Join a supportive community of like-minded individuals all working towards their wellness goals together.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/generated/nutrition-people.png"
                  alt="People preparing healthy meals together"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Nutrition Made Easy</h3>
                <p className="text-muted-foreground">
                  Discover delicious, healthy recipes and learn to prepare meals that fuel your body and delight your taste buds.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/generated/goals-achievement.png"
                  alt="Person celebrating achievement"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Achieve Your Dreams</h3>
                <p className="text-muted-foreground">
                  Set ambitious goals and watch yourself accomplish them with our proven tracking and motivation system.
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
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 drop-shadow-lg">What Our Users Say</h2>
            <p className="text-white/95 text-lg drop-shadow">
              Join thousands who have transformed their lives with LifePlan Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-2xl bg-white border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden shadow-lg border-2 border-primary/20">
                    <img
                      src="/generated/testimonial-jane.png"
                      alt="Jane D - Fitness Coach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Jane D</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "LifePlan Pro has been a game-changer for my lifestyle. I was struggling
                  with staying consistent, meal prepping, and juggling multiple goals."
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Lost 15lbs in 3 months</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl bg-white border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden shadow-lg border-2 border-secondary/20">
                    <img
                      src="/generated/testimonial-mike.png"
                      alt="Mike K - Business Professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Mike K</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "As a busy professional, I needed something to keep me organized. The workout and meal tracking features are incredible!"
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">45-day workout streak</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl bg-white border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden shadow-lg border-2 border-accent/20">
                    <img
                      src="/generated/testimonial-sarah.png"
                      alt="Sarah C - Wellness Enthusiast"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah C</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "The goal tracking feature keeps me motivated every day. I've achieved more in 6 months than I did in the past 2 years!"
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Completed 12 major goals</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/dashboard">
              <Button size="lg" className="rounded-md text-base px-8 bg-white text-primary hover:bg-white/90 shadow-xl">
                Start Your Transformation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
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
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
                <li><Link href="/press" className="text-sm text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://facebook.com/lifeplanpro" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="https://twitter.com/lifeplanpro" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="https://instagram.com/lifeplanpro" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">Instagram</a></li>
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