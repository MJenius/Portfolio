import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scaleOnHover?: number;
  showGlare?: boolean;
  as?: 'div' | 'a';
}

export function TiltCard({
  children,
  className,
  maxTilt = 12,
  perspective = 1000,
  scaleOnHover = 1.02,
  showGlare = true,
  as = 'div',
  href,
  target,
  rel,
  onClick,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth interpolation
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 3D rotations derived from mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const scale = useSpring(1, springConfig);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareOpacity = useMotionValue(0);
  const glareOpacitySpring = useSpring(glareOpacity, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
    scale.set(scaleOnHover);
    if (showGlare) glareOpacity.set(0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    if (showGlare) glareOpacity.set(0);
  };

  if (as === 'a' && href) {
    return (
      <motion.a
        ref={cardRef as any}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        style={{
          perspective,
          transformStyle: 'preserve-3d',
        }}
        className="block w-full h-full cursor-pointer select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className={cn('relative w-full h-full rounded-2xl transition-shadow', className)}
        >
          {children}

          {/* Specular Glare Overlay */}
          {showGlare && (
            <motion.div
              style={{
                opacity: glareOpacitySpring,
                background: useTransform(
                  [glareX, glareY],
                  ([gx, gy]) =>
                    `radial-gradient(circle 250px at ${gx} ${gy}, rgba(255,255,255,0.4), transparent 80%)`
                ),
              }}
              className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 mix-blend-overlay"
            />
          )}
        </motion.div>
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className={cn('relative w-full h-full rounded-2xl transition-shadow', className)}
        {...(props as any)}
      >
        {children}

        {/* Specular Glare Overlay */}
        {showGlare && (
          <motion.div
            style={{
              opacity: glareOpacitySpring,
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle 250px at ${gx} ${gy}, rgba(255,255,255,0.4), transparent 80%)`
              ),
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 mix-blend-overlay"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
