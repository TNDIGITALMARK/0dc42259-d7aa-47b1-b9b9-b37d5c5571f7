'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Server,
  Code,
  Headphones,
  Megaphone,
  BookOpen,
  CreditCard,
  Users,
  Building2,
  Lightbulb,
  PiggyBank,
  TrendingUp,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function PricingBreakdownPage() {
  const revenueAllocations = [
    {
      category: 'Infrastructure & Hosting',
      icon: Server,
      percentage: 17.5,
      amount: 1.75,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      description: 'Cloud hosting, databases, CDN, security, backups',
      details: [
        'Supabase database hosting: $25-50/mo',
        'Vercel/AWS hosting: $50-200/mo',
        'Media storage (CDN): $20-100/mo',
        'Monitoring & security: $30-50/mo',
        'Ensures 99.9% uptime and fast performance'
      ]
    },
    {
      category: 'Product Development',
      icon: Code,
      percentage: 27.5,
      amount: 2.75,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      description: 'Engineering, design, QA, new features',
      details: [
        'Engineering team salaries',
        'UI/UX designers',
        'Product managers',
        'Quality assurance testing',
        'New feature development & bug fixes'
      ]
    },
    {
      category: 'Marketing & Growth',
      icon: Megaphone,
      percentage: 22.5,
      amount: 2.25,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      description: 'Ads, content, SEO, influencer partnerships',
      details: [
        'Google & Facebook Ads',
        'Content marketing & SEO',
        'Influencer partnerships',
        'Social media management',
        'Referral & affiliate programs'
      ]
    },
    {
      category: 'Customer Support',
      icon: Headphones,
      percentage: 12.5,
      amount: 1.25,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      description: 'Support team, help desk, live chat',
      details: [
        'Support team salaries',
        'Help desk software (Zendesk)',
        'Knowledge base creation',
        'Email & chat support',
        '24/7 support for Premium users'
      ]
    },
    {
      category: 'Content Creation',
      icon: BookOpen,
      percentage: 7.5,
      amount: 0.75,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      description: 'Recipes, workouts, videos, expert content',
      details: [
        'Workout routine development',
        'Recipe creation & testing',
        'Exercise video production',
        'Nutrition guides',
        'Expert consultations (trainers, nutritionists)'
      ]
    },
    {
      category: 'Business Operations',
      icon: Building2,
      percentage: 7.5,
      amount: 0.75,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      description: 'Legal, accounting, insurance, tools',
      details: [
        'Legal fees & compliance',
        'Accounting & bookkeeping',
        'Business insurance',
        'SaaS tools (Slack, Notion, Jira)',
        'HR & recruitment'
      ]
    },
    {
      category: 'Payment Processing',
      icon: CreditCard,
      percentage: 4.0,
      amount: 0.40,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      description: 'Stripe fees, app store fees, taxes',
      details: [
        'Stripe fees: 2.9% + $0.30 per transaction',
        'App Store fees: 15-30%',
        'Google Play fees: 15-30%',
        'Chargeback handling',
        'Tax compliance services'
      ]
    },
    {
      category: 'R&D Innovation',
      icon: Lightbulb,
      percentage: 1.0,
      amount: 0.10,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      description: 'AI/ML, experimental features, research',
      details: [
        'AI/ML model training',
        'Experimental features',
        'User research & testing',
        'Competitive analysis',
        'Technology evaluation'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: 0,
      annual: 0,
      users: '50,000',
      color: 'border-gray-400'
    },
    {
      name: 'Pro',
      price: 9.99,
      annual: 119.88,
      users: '10,000',
      color: 'border-primary',
      featured: true
    },
    {
      name: 'Premium',
      price: 19.99,
      annual: 239.88,
      users: '2,000',
      color: 'border-accent'
    }
  ];

  const calculateProjections = (users: number, price: number) => {
    const monthlyRevenue = users * price;
    const annualRevenue = monthlyRevenue * 12;
    return {
      monthly: monthlyRevenue,
      annual: annualRevenue
    };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pricing Breakdown
                </h1>
                <p className="text-sm text-muted-foreground">Where your subscription money goes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`shadow-lg border-2 ${tier.color} ${tier.featured ? 'scale-105' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  {tier.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-accent">Most Popular</Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>~{tier.users} active users</CardDescription>
              </CardHeader>
              <CardContent>
                {tier.price > 0 && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Revenue:</span>
                      <span className="font-semibold">
                        ${(parseFloat(tier.users.replace(/,/g, '')) * tier.price).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Revenue:</span>
                      <span className="font-semibold">
                        ${(parseFloat(tier.users.replace(/,/g, '')) * tier.annual).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Allocation Breakdown */}
        <Card className="shadow-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Revenue Allocation - Pro Tier ($9.99/month)
            </CardTitle>
            <CardDescription>
              Detailed breakdown of where every dollar goes to deliver exceptional value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="overview">Visual Overview</TabsTrigger>
                <TabsTrigger value="details">Detailed View</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {revenueAllocations.map((allocation) => {
                  const Icon = allocation.icon;
                  return (
                    <div key={allocation.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${allocation.bgColor}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{allocation.category}</h3>
                            <p className="text-sm text-muted-foreground">{allocation.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">${allocation.amount.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">{allocation.percentage}%</div>
                        </div>
                      </div>
                      <Progress
                        value={allocation.percentage}
                        className="h-3"
                      />
                    </div>
                  );
                })}

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total Monthly Subscription</span>
                    <span className="text-primary">$9.99</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                {revenueAllocations.map((allocation) => {
                  const Icon = allocation.icon;
                  return (
                    <Card key={allocation.category} className={`border-2 ${allocation.borderColor}`}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-3 rounded-lg ${allocation.bgColor}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{allocation.category}</CardTitle>
                            <CardDescription>{allocation.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-xl">${allocation.amount.toFixed(2)}</div>
                            <Badge variant="secondary">{allocation.percentage}%</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {allocation.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Scaling Projections */}
        <Card className="shadow-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              Revenue Scaling Projections
            </CardTitle>
            <CardDescription>
              How revenue grows with user base (Pro tier baseline)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { users: 1000, label: 'Startup Phase' },
                { users: 10000, label: 'Growth Phase' },
                { users: 50000, label: 'Scale Phase' },
                { users: 100000, label: 'Enterprise Phase' }
              ].map((scenario) => {
                const projections = calculateProjections(scenario.users, 9.99);
                return (
                  <Card key={scenario.users} className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{scenario.label}</CardTitle>
                      <CardDescription>{scenario.users.toLocaleString()} users</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                        <div className="text-2xl font-bold text-primary">
                          ${projections.monthly.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Annual Revenue</div>
                        <div className="text-xl font-semibold">
                          ${projections.annual.toLocaleString()}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border text-xs text-muted-foreground">
                        <div>Infrastructure: ${(projections.monthly * 0.175).toLocaleString()}/mo</div>
                        <div>Development: ${(projections.monthly * 0.275).toLocaleString()}/mo</div>
                        <div>Marketing: ${(projections.monthly * 0.225).toLocaleString()}/mo</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="shadow-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <PiggyBank className="h-6 w-6 text-accent" />
              Key Financial Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Largest Investment</h3>
                <p className="text-3xl font-bold text-primary">27.5%</p>
                <p className="text-sm text-muted-foreground">
                  Product Development ensures continuous innovation and feature improvements
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Growth Engine</h3>
                <p className="text-3xl font-bold text-pink-600">22.5%</p>
                <p className="text-sm text-muted-foreground">
                  Marketing & Growth acquisition drives new user sign-ups and brand awareness
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">User Experience</h3>
                <p className="text-3xl font-bold text-green-600">30%</p>
                <p className="text-sm text-muted-foreground">
                  Combined Support + Infrastructure ensures fast, reliable, helpful experience
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <h3 className="font-semibold text-lg">Strategic Priorities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Continuous Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Nearly 28% investment in development keeps product competitive and feature-rich
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <div className="h-8 w-8 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Sustainable Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      22.5% marketing investment fuels user acquisition and brand building
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Headphones className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Customer Happiness</h4>
                    <p className="text-sm text-muted-foreground">
                      12.5% dedicated to support ensures users get help when they need it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Server className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Reliable Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      17.5% infrastructure investment guarantees 99.9% uptime and fast speeds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block shadow-2xl bg-gradient-to-br from-primary via-accent to-secondary p-1">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Transparent Pricing, Real Value</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Every dollar you invest goes directly into making LifePlan Pro the best life planning app.
                We're committed to transparency and delivering exceptional value.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    View Pricing Plans
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
