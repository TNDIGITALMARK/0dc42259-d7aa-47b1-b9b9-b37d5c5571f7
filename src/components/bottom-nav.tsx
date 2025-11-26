'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Target, TrendingUp, Dumbbell, Apple } from 'lucide-react';

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      href: '/workouts',
      label: 'Workouts',
      icon: Dumbbell,
    },
    {
      href: '/nutrition',
      label: 'Nutrition',
      icon: Apple,
    },
    {
      href: '/planning',
      label: 'Planning',
      icon: Target,
    },
    {
      href: '/progress',
      label: 'Progress',
      icon: TrendingUp,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 py-3 px-6 transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
