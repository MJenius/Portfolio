'use client';

import { useEffect, useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MicroExpander } from '@/components/ui/micro-expander';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface MicroExpanderNavBarProps {
  items: NavItem[];
  className?: string;
}

export function MicroExpanderNavBar({ items, className }: MicroExpanderNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const sections = items.map(item => {
          const id = item.url.replace('#', '');
          return document.getElementById(id);
        });

        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i]) {
            const rect = sections[i]!.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
              setActiveTab(items[i].name);
              break;
            }
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [items]);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 mb-6 flex justify-center',
        className
      )}
    >
      <nav className="flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                const element = document.getElementById(item.url.replace('#', ''));
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="no-underline"
              aria-current={isActive ? 'page' : undefined}
            >
              <MicroExpander
                text={item.name}
                icon={<Icon className="w-5 h-5" />}
                variant={isActive ? 'default' : 'ghost'}
                className={cn(
                  'transition-colors duration-200',
                  isActive && 'shadow-lg'
                )}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
