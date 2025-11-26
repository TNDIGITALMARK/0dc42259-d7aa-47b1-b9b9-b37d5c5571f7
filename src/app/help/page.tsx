'use client';

import { CheckSquare, ArrowLeft, Search, HelpCircle, Book, Video, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function HelpPage() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      articles: [
        'How to create your first workout plan',
        'Setting up your nutrition goals',
        'Understanding the dashboard',
        'Syncing with wearable devices'
      ]
    },
    {
      title: 'Account & Billing',
      icon: CheckSquare,
      articles: [
        'Managing your subscription',
        'Updating payment information',
        'Canceling your account',
        'Billing FAQs'
      ]
    },
    {
      title: 'Features & Tools',
      icon: Video,
      articles: [
        'Using the workout tracker',
        'Meal planning and recipes',
        'Goal setting best practices',
        'Understanding analytics'
      ]
    },
    {
      title: 'Troubleshooting',
      icon: HelpCircle,
      articles: [
        'App not syncing properly',
        'Login issues and password reset',
        'Data not displaying correctly',
        'Performance optimization tips'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Is LifePlan Pro free to use?',
      answer: 'Yes! We offer a free plan with basic features. You can upgrade to Pro or Premium for advanced features and unlimited access.'
    },
    {
      question: 'Can I use LifePlan Pro on multiple devices?',
      answer: 'Absolutely! Your account syncs across all your devices - phone, tablet, and web browser.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime from your account settings. Your access will continue until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact support for a full refund.'
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
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers, learn tips, and get the most out of LifePlan Pro
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {helpCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                          <CheckSquare className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="group-hover:underline">{article}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 mx-auto shadow-xl">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our support team is here to help you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-md shadow-lg text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Contact Support
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-md text-base px-8 border-2 border-primary hover:bg-primary/10">
                Live Chat
              </Button>
            </div>
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
