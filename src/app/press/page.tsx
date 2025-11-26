'use client';

import { CheckSquare, ArrowLeft, Award, Newspaper, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'January 15, 2025',
      title: 'LifePlan Pro Surpasses 50,000 Active Users Milestone',
      excerpt: 'Leading life planning platform celebrates rapid growth and user satisfaction rates.',
      link: '#'
    },
    {
      date: 'December 8, 2024',
      title: 'LifePlan Pro Named "Best Wellness App of 2024"',
      excerpt: 'Industry recognition highlights innovation in holistic life management.',
      link: '#'
    },
    {
      date: 'November 22, 2024',
      title: 'New AI-Powered Features Launch for Premium Users',
      excerpt: 'Advanced analytics and personalized recommendations revolutionize goal tracking.',
      link: '#'
    }
  ];

  const mediaKit = [
    { label: 'Company Logo', icon: CheckSquare },
    { label: 'Press Kit (PDF)', icon: Newspaper },
    { label: 'Brand Guidelines', icon: Award },
    { label: 'Media Assets', icon: Radio }
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
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The latest news, press releases, and media resources from LifePlan Pro. For media inquiries, please contact press@lifeplanpro.com
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recent Press Releases
            </h2>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                          <Newspaper className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-medium mb-2">{release.date}</div>
                        <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                        <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                        <Button variant="outline" size="sm" className="hover:bg-primary/10">
                          Read Full Release
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Media Kit
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Download our official media assets, brand guidelines, and press materials
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {mediaKit.map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 mx-auto shadow-lg">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              For press inquiries, interviews, or additional information, please reach out to our media team:
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:press@lifeplanpro.com" className="text-primary hover:underline">
                  press@lifeplanpro.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="rounded-md shadow-lg text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Contact Us
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
