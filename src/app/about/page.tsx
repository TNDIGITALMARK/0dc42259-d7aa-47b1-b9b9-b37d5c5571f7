'use client';

import { CheckSquare, ArrowLeft, Target, Dumbbell, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <CheckSquare className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LIFEPLAN PRO
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              LifePlan Pro was born from a simple belief: everyone deserves the tools to live their best life.
              We're on a mission to help people achieve their wellness goals and unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg border-2 border-primary/20 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 mx-auto shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To empower individuals worldwide with intuitive tools that make wellness, organization, and personal growth accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary mb-4 mx-auto shadow-lg">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  A world where everyone has the confidence and capability to achieve their health, fitness, and life goals with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-accent/20 hover:border-accent transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary mb-4 mx-auto shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Our Values</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Integrity, innovation, and user-centricity guide everything we do. We believe in creating products that genuinely improve lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Journey
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    2023
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary/30 pl-6">
                  <h4 className="font-semibold mb-2">The Beginning</h4>
                  <p className="text-muted-foreground">
                    LifePlan Pro was founded by a team of wellness enthusiasts and tech innovators who saw a gap in the market for comprehensive life planning tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                    2024
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-secondary/30 pl-6">
                  <h4 className="font-semibold mb-2">First Launch</h4>
                  <p className="text-muted-foreground">
                    We launched our beta version and received overwhelming positive feedback from our early adopters, helping us refine our features.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                    2025
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-accent/30 pl-6">
                  <h4 className="font-semibold mb-2">Growing Strong</h4>
                  <p className="text-muted-foreground">
                    Today, we serve over 50,000 active users worldwide, helping them achieve their wellness goals and live their best lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 gradient-rainbow opacity-90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4 drop-shadow-lg">Join Our Community</h2>
            <p className="text-white/95 text-lg mb-6 drop-shadow">
              Become part of thousands who are transforming their lives with LifePlan Pro
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="rounded-md shadow-xl text-base px-8 bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LifePlan Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
