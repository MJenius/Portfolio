'use client';

import * as React from 'react';
import {
  motion,
  type HTMLMotionProps,
  type Variants,
  AnimatePresence,
} from 'motion/react';
import { Plus, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Props for the MicroExpander component.
 */
interface MicroExpanderProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** The label text to display when the button is hovered/expanded. */
  text: string;
  /** An optional custom icon. Defaults to a Plus icon if not provided. */
  icon?: React.ReactNode;
  /** The visual style variant of the button. */
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  /** If true, displays a spinner, disables interaction, and collapses the button. */
  isLoading?: boolean;
}

/**
 * A micro-interaction button that smoothly expands from a circular icon to a pill shape
 * containing text upon hover without stutter or layout pop.
 */
const MicroExpander = React.forwardRef<HTMLButtonElement, MicroExpanderProps>(
  (
    {
      text,
      icon,
      variant = 'default',
      isLoading = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Fast, responsive spring without frame thrash
    const containerVariants: Variants = {
      initial: {
        width: 48,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.6,
        },
      },
      hover: {
        width: 'auto',
        transition: {
          type: 'spring',
          stiffness: 380,
          damping: 28,
          mass: 0.6,
        },
      },
      loading: {
        width: 48,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 30,
        },
      },
    };

    // Immediate synchronized text reveal - no delayed pop or stutter
    const textVariants: Variants = {
      initial: {
        opacity: 0,
        x: -6,
        filter: 'blur(2px)',
        transition: {
          duration: 0.12,
          ease: 'easeInOut',
        },
      },
      hover: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.04,
        },
      },
      exit: {
        opacity: 0,
        x: -4,
        transition: {
          duration: 0.1,
          ease: 'easeOut',
        },
      },
    };

    // Notice: removed CSS `transition-all duration-200` to prevent fight with Framer Motion spring ticks!
    const variantStyles = {
      default: 'bg-primary text-primary-foreground border border-primary',
      outline:
        'bg-transparent border border-input text-foreground hover:border-primary',
      ghost:
        'bg-slate-900/70 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] shadow-lg shadow-black/20',
      destructive:
        'bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) return;
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative flex h-12 items-center overflow-hidden rounded-full cursor-pointer select-none',
          'whitespace-nowrap font-medium text-sm tracking-wide',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          isLoading && 'cursor-not-allowed opacity-60',
          variantStyles[variant],
          className
        )}
        style={{ willChange: 'width, transform' }}
        initial='initial'
        animate={isLoading ? 'loading' : isHovered ? 'hover' : 'initial'}
        variants={containerVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={handleClick}
        disabled={isLoading}
        {...props}
        aria-label={text}
      >
        <div className='grid h-12 w-12 place-items-center shrink-0 z-10'>
          <AnimatePresence mode='popLayout'>
            {isLoading ? (
              <motion.div
                key='spinner'
                initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
              >
                <Loader2 className='h-5 w-5 animate-spin' />
              </motion.div>
            ) : (
              <motion.div
                key='icon'
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                {icon || <Plus className='h-5 w-5' />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          variants={textVariants}
          className='pr-5 pl-0.5 overflow-hidden'
        >
          {text}
        </motion.div>
      </motion.button>
    );
  }
);

MicroExpander.displayName = 'MicroExpander';

export { MicroExpander };
