'use client';

import { useEffect, useState, useRef } from 'react';
import { LucideIcon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MicroExpander } from '@/components/ui/micro-expander';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile viewport
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
      if (!e.matches) setMobileMenuOpen(false);
    };
    handleChange(mql);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Section scroll tracking
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

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name);
    setMobileMenuOpen(false);
    const element = document.getElementById(item.url.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mobile: hamburger FAB + slide-up overlay
  if (isMobile) {
    return (
      <>
        {/* Floating hamburger button */}
        <motion.button
          className={cn(
            'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full',
            'bg-slate-900/80 backdrop-blur-xl border border-slate-700/60',
            'flex items-center justify-center shadow-2xl',
            'active:scale-95 transition-transform',
            className
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label="Navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Full-screen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.nav
                className="flex flex-col items-center justify-center h-full gap-2 px-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {items.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                      className={cn(
                        'flex items-center gap-4 w-full max-w-xs px-6 py-3.5 rounded-2xl',
                        'text-lg font-medium no-underline transition-colors duration-200',
                        isActive
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop: original pill bar
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
                handleNavClick(item);
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
