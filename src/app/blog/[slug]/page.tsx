'use client';

import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LIFEPLAN PRO
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  All Posts
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="sm" className="rounded-md shadow-md bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <Link href={`/blog?category=${post.category}`} className="hover:text-primary transition-colors capitalize">
              {post.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </div>

          {/* Category & Reading Time */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-white shadow-lg">
                {post.authorName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-lg">{post.authorName}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-base leading-relaxed mb-6 text-foreground">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-foreground">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-base leading-relaxed ml-4">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-primary">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Card */}
          <Card className="mt-12 shadow-xl border-2 border-primary/20 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 gradient-rainbow opacity-20" />
              <CardContent className="relative p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Take Action?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Turn these insights into results with LifePlan Pro's comprehensive tracking and planning tools.
                </p>
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-md shadow-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Start Your Journey
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full shadow-lg border-2 border-border hover:border-primary transition-all hover:shadow-2xl overflow-hidden group cursor-pointer">
                    <div className="relative h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-5xl opacity-50 group-hover:scale-110 transition-transform">
                        {relatedPost.category === 'wellness' && '🧘'}
                        {relatedPost.category === 'fitness' && '💪'}
                        {relatedPost.category === 'nutrition' && '🥗'}
                        {relatedPost.category === 'goals' && '🎯'}
                        {relatedPost.category === 'productivity' && '⚡'}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTimeMinutes} min
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-muted via-background to-secondary/20 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 LifePlan Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
