'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DollarSign,
  Users,
  TrendingUp,
  Calculator,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import Link from 'next/link';

export default function RevenueCalculatorPage() {
  const [freeUsers, setFreeUsers] = useState(50000);
  const [proUsers, setProUsers] = useState(10000);
  const [premiumUsers, setPremiumUsers] = useState(2000);
  const [proPrice, setProPrice] = useState(9.99);
  const [premiumPrice, setPremiumPrice] = useState(19.99);

  const calculateRevenue = () => {
    const monthlyProRevenue = proUsers * proPrice;
    const monthlyPremiumRevenue = premiumUsers * premiumPrice;
    const totalMonthly = monthlyProRevenue + monthlyPremiumRevenue;
    const totalAnnual = totalMonthly * 12;

    const allocations = {
      infrastructure: totalMonthly * 0.175,
      development: totalMonthly * 0.275,
      marketing: totalMonthly * 0.225,
      support: totalMonthly * 0.125,
      content: totalMonthly * 0.075,
      operations: totalMonthly * 0.075,
      payment: totalMonthly * 0.04,
      rd: totalMonthly * 0.01
    };

    return {
      monthly: {
        pro: monthlyProRevenue,
        premium: monthlyPremiumRevenue,
        total: totalMonthly
      },
      annual: {
        pro: monthlyProRevenue * 12,
        premium: monthlyPremiumRevenue * 12,
        total: totalAnnual
      },
      allocations,
      totalUsers: freeUsers + proUsers + premiumUsers,
      conversionRate: {
        freeToPro: ((proUsers / (freeUsers + proUsers + premiumUsers)) * 100).toFixed(2),
        proToPremium: ((premiumUsers / proUsers) * 100).toFixed(2)
      }
    };
  };

  const revenue = calculateRevenue();

  const allocationCategories = [
    { name: 'Infrastructure & Hosting', amount: revenue.allocations.infrastructure, color: 'bg-blue-500' },
    { name: 'Product Development', amount: revenue.allocations.development, color: 'bg-purple-500' },
    { name: 'Marketing & Growth', amount: revenue.allocations.marketing, color: 'bg-pink-500' },
    { name: 'Customer Support', amount: revenue.allocations.support, color: 'bg-green-500' },
    { name: 'Content Creation', amount: revenue.allocations.content, color: 'bg-orange-500' },
    { name: 'Business Operations', amount: revenue.allocations.operations, color: 'bg-cyan-500' },
    { name: 'Payment Processing', amount: revenue.allocations.payment, color: 'bg-yellow-500' },
    { name: 'R&D Innovation', amount: revenue.allocations.rd, color: 'bg-indigo-500' }
  ];

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
                  Revenue Calculator
                </h1>
                <p className="text-sm text-muted-foreground">Model your subscription business</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Input Parameters
                </CardTitle>
                <CardDescription>Adjust values to see impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Free Users */}
                <div className="space-y-2">
                  <Label htmlFor="free-users" className="text-sm font-medium">
                    Free Tier Users
                  </Label>
                  <Input
                    id="free-users"
                    type="number"
                    value={freeUsers}
                    onChange={(e) => setFreeUsers(parseInt(e.target.value) || 0)}
                    className="text-lg font-semibold"
                  />
                  <Slider
                    value={[freeUsers]}
                    onValueChange={([value]) => setFreeUsers(value)}
                    max={200000}
                    step={1000}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {freeUsers.toLocaleString()} users • $0 revenue
                  </p>
                </div>

                <Separator />

                {/* Pro Users */}
                <div className="space-y-2">
                  <Label htmlFor="pro-users" className="text-sm font-medium">
                    Pro Tier Users
                  </Label>
                  <Input
                    id="pro-users"
                    type="number"
                    value={proUsers}
                    onChange={(e) => setProUsers(parseInt(e.target.value) || 0)}
                    className="text-lg font-semibold"
                  />
                  <Slider
                    value={[proUsers]}
                    onValueChange={([value]) => setProUsers(value)}
                    max={100000}
                    step={500}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {proUsers.toLocaleString()} users • ${revenue.monthly.pro.toLocaleString()}/mo
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pro-price" className="text-sm font-medium">
                    Pro Price ($/month)
                  </Label>
                  <Input
                    id="pro-price"
                    type="number"
                    step="0.01"
                    value={proPrice}
                    onChange={(e) => setProPrice(parseFloat(e.target.value) || 0)}
                    className="text-lg font-semibold"
                  />
                </div>

                <Separator />

                {/* Premium Users */}
                <div className="space-y-2">
                  <Label htmlFor="premium-users" className="text-sm font-medium">
                    Premium Tier Users
                  </Label>
                  <Input
                    id="premium-users"
                    type="number"
                    value={premiumUsers}
                    onChange={(e) => setPremiumUsers(parseInt(e.target.value) || 0)}
                    className="text-lg font-semibold"
                  />
                  <Slider
                    value={[premiumUsers]}
                    onValueChange={([value]) => setPremiumUsers(value)}
                    max={50000}
                    step={100}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {premiumUsers.toLocaleString()} users • ${revenue.monthly.premium.toLocaleString()}/mo
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="premium-price" className="text-sm font-medium">
                    Premium Price ($/month)
                  </Label>
                  <Input
                    id="premium-price"
                    type="number"
                    step="0.01"
                    value={premiumPrice}
                    onChange={(e) => setPremiumPrice(parseFloat(e.target.value) || 0)}
                    className="text-lg font-semibold"
                  />
                </div>

                <Separator />

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setFreeUsers(50000);
                    setProUsers(10000);
                    setPremiumUsers(2000);
                    setProPrice(9.99);
                    setPremiumPrice(19.99);
                  }}
                >
                  Reset to Defaults
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Revenue Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Monthly Recurring Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    ${revenue.monthly.total.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pro: ${revenue.monthly.pro.toLocaleString()} + Premium: ${revenue.monthly.premium.toLocaleString()}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Annual Recurring Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">
                    ${revenue.annual.total.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    12x monthly revenue
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">
                    {revenue.totalUsers.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Across all tiers
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conversion Rates */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Conversion Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Free → Pro Conversion</div>
                    <div className="text-3xl font-bold text-green-600">
                      {revenue.conversionRate.freeToPro}%
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {proUsers.toLocaleString()} of {revenue.totalUsers.toLocaleString()} total users
                    </p>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Pro → Premium Conversion</div>
                    <div className="text-3xl font-bold text-purple-600">
                      {revenue.conversionRate.proToPremium}%
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {premiumUsers.toLocaleString()} of {proUsers.toLocaleString()} Pro users
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Allocation */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Monthly Revenue Allocation
                </CardTitle>
                <CardDescription>
                  Where your ${revenue.monthly.total.toLocaleString()} goes each month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {allocationCategories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="secondary">
                        ${category.amount.toLocaleString()}
                      </Badge>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.color} transition-all duration-500`}
                        style={{
                          width: `${(category.amount / revenue.monthly.total) * 100}%`
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {((category.amount / revenue.monthly.total) * 100).toFixed(1)}% of total revenue
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Detailed Breakdown Table */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Detailed Annual Breakdown</CardTitle>
                <CardDescription>
                  Full year financial projection based on current inputs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Category</th>
                        <th className="text-right p-3 font-semibold">Monthly</th>
                        <th className="text-right p-3 font-semibold">Annual</th>
                        <th className="text-right p-3 font-semibold">% of Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allocationCategories.map((category, idx) => (
                        <tr key={category.name} className={idx % 2 === 0 ? 'bg-muted/30' : ''}>
                          <td className="p-3">{category.name}</td>
                          <td className="text-right p-3 font-medium">
                            ${category.amount.toLocaleString()}
                          </td>
                          <td className="text-right p-3 font-medium">
                            ${(category.amount * 12).toLocaleString()}
                          </td>
                          <td className="text-right p-3">
                            {((category.amount / revenue.monthly.total) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-border font-bold">
                        <td className="p-3">Total</td>
                        <td className="text-right p-3 text-primary">
                          ${revenue.monthly.total.toLocaleString()}
                        </td>
                        <td className="text-right p-3 text-primary">
                          ${revenue.annual.total.toLocaleString()}
                        </td>
                        <td className="text-right p-3">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Business Health Indicators
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">Average Revenue Per User (ARPU)</h3>
                  <div className="text-2xl font-bold">
                    ${((revenue.monthly.total / (proUsers + premiumUsers)) || 0).toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Across paying users only
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">Customer Lifetime Value (LTV)</h3>
                  <div className="text-2xl font-bold">
                    ${(((revenue.monthly.total / (proUsers + premiumUsers)) * 18) || 0).toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Assuming 18-month average lifetime
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">Target CAC (Customer Acquisition Cost)</h3>
                  <div className="text-2xl font-bold text-green-600">
                    ${((revenue.allocations.marketing / (proUsers + premiumUsers)) || 0).toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Monthly marketing budget per paying user
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">LTV:CAC Ratio</h3>
                  <div className="text-2xl font-bold text-purple-600">
                    {((((revenue.monthly.total / (proUsers + premiumUsers)) * 18) / ((revenue.allocations.marketing / (proUsers + premiumUsers)) * 12)) || 0).toFixed(2)}:1
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Target: >3:1 for healthy growth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
