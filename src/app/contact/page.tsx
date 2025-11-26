'use client';

import { CheckSquare, ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have a question or feedback? We'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                </CardHeader>
                <CardContent>
                  <a href="mailto:support@lifeplanpro.com" className="text-primary hover:underline">
                    support@lifeplanpro.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                </CardHeader>
                <CardContent>
                  <a href="tel:+15551234567" className="text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mon-Fri, 9am-6pm PST
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    123 Wellness Avenue<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Send us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you as soon as possible</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-lg shadow-lg text-base bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Map integration coming soon</p>
              </div>
            </div>
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
