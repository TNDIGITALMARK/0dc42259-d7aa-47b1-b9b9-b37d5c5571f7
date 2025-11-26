'use client';

import { CheckSquare, ArrowLeft, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former wellness coach with 10+ years of experience helping people achieve their fitness goals.',
      image: '/team/sarah.jpg',
      gradient: 'from-primary to-accent'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech visionary with expertise in building scalable, user-friendly applications.',
      image: '/team/michael.jpg',
      gradient: 'from-secondary to-primary'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist passionate about creating intuitive experiences that delight users.',
      image: '/team/emily.jpg',
      gradient: 'from-accent to-secondary'
    },
    {
      name: 'David Park',
      role: 'Lead Designer',
      bio: 'Award-winning designer focused on beautiful, accessible interfaces.',
      image: '/team/david.jpg',
      gradient: 'from-primary to-secondary'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Wellness',
      bio: 'Certified nutritionist and personal trainer dedicated to holistic health.',
      image: '/team/lisa.jpg',
      gradient: 'from-secondary to-accent'
    },
    {
      name: 'James Wilson',
      role: 'Engineering Lead',
      bio: 'Full-stack engineer building robust systems that power millions of workouts.',
      image: '/team/james.jpg',
      gradient: 'from-accent to-primary'
    }
  ];

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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a diverse group of wellness enthusiasts, designers, engineers, and innovators united by a common goal: helping you live your best life.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent to-black" />
                    <div className="relative w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                        <Twitter className="h-4 w-4 text-secondary" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <Mail className="h-4 w-4 text-accent" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="relative py-16 overflow-hidden bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Want to Join Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're always looking for passionate individuals to join our mission. Check out our open positions and apply today!
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-md shadow-lg text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LifePlan Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
