import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Authentication Middleware
 *
 * Protects routes by checking for authentication token.
 * Redirects unauthenticated users to login page.
 */

// Public routes that don't require authentication
const publicRoutes = [
  '/',           // Landing page
  '/login',      // Login page
  '/signup',     // Signup page
  '/auth',       // Combined auth page
  '/blog',       // Blog pages
];

// Routes that should redirect to login if not authenticated
const protectedRoutes = [
  '/dashboard',
  '/workouts',
  '/nutrition',
  '/progress',
  '/planning',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))) {
    return NextResponse.next();
  }

  // Allow static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/generated') ||
    pathname.startsWith('/phoenix-editor') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check for authentication token in cookies
  const authToken = request.cookies.get('zylo-auth-token')?.value;
  const isAuthenticated = !!authToken;

  // Check if route requires authentication
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // Redirect to login if accessing protected route without auth
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from login/signup pages
  if (isAuthenticated && ['/login', '/signup', '/auth'].includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
