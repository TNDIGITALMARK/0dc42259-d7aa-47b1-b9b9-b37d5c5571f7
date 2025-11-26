'use client';

import { CheckSquare, ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: January 26, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Data Collection</h4>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4 text-center">
                  <Lock className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Data Security</h4>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4 text-center">
                  <Eye className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Your Rights</h4>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Cookie Policy</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card className="shadow-xl mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Information We Collect
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We collect information that you provide directly to us when you create an account, use our services, or communicate with us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, password, and profile details</li>
                  <li><strong>Health & Fitness Data:</strong> Workout logs, nutrition tracking, goals, and progress metrics</li>
                  <li><strong>Usage Information:</strong> How you interact with our app, features used, and session data</li>
                  <li><strong>Device Information:</strong> Device type, operating system, app version, and unique identifiers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <Lock className="h-6 w-6 text-secondary" />
                  How We Use Your Information
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your experience and deliver relevant content</li>
                  <li>Analyze usage patterns to enhance functionality</li>
                  <li>Communicate with you about updates, features, and support</li>
                  <li>Ensure security and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <Eye className="h-6 w-6 text-accent" />
                  Data Security
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We take data security seriously and implement industry-standard measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure authentication and access controls</li>
                  <li>Employee training on data privacy and security</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and enable two-factor authentication.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <CheckSquare className="h-6 w-6 text-primary" />
                  Your Privacy Rights
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:privacy@lifeplanpro.com" className="text-primary hover:underline">
                    privacy@lifeplanpro.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <FileText className="h-6 w-6 text-secondary" />
                  Cookie Policy
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              If you have any questions about our privacy practices, please don't hesitate to reach out.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-md shadow-lg text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Contact Us
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
