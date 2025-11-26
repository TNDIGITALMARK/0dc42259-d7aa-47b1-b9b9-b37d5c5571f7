'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useZyloLoading } from '@/lib/zylo/hooks';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

/**
 * AuthGuard Component
 *
 * Client-side authentication guard that:
 * - Checks authentication status
 * - Shows loading state while checking
 * - Redirects unauthenticated users to login
 * - Prevents flash of protected content
 */
export function AuthGuard({
  children,
  requireAuth = true,
  redirectTo = '/login',
}: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuth();
  const isZyloLoading = useZyloLoading();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      if (isZyloLoading) {
        // Wait for Zylo to initialize
        return;
      }

      try {
        const authenticated = await auth.isAuthenticated();

        if (requireAuth && !authenticated) {
          // Redirect to login with return URL
          const loginUrl = `${redirectTo}?redirect=${encodeURIComponent(pathname)}`;
          router.push(loginUrl);
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthorized(false);
        if (requireAuth) {
          router.push(redirectTo);
        }
      } finally {
        setIsChecking(false);
      }
    }

    checkAuth();
  }, [auth, isZyloLoading, requireAuth, redirectTo, pathname, router]);

  // Show loading state
  if (isZyloLoading || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show content only if authorized or auth not required
  if (!requireAuth || isAuthorized) {
    return <>{children}</>;
  }

  // Return null while redirecting
  return null;
}
