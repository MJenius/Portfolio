import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { GradientButton } from '../ui/gradient-button';
import { GooeyText } from '../ui/gooey-text-morphing';
import { SocialLinks } from '../social-links';
import { Eye, Download } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';

export function ScrollLoopTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Pure background zoom through space:
  // Downward scroll: Hero emerges from the stars and zooms in smoothly (0.18 -> 1.0).
  // Upward scroll: Hero shrinks out into deep space (1.0 -> 0.18) and fades away.
  const heroOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.35, 0.70, 0.92, 1.0],
    [0.0, 0.40, 0.85, 1.0, 1.0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0.08, 0.92, 1.0],
    [0.18, 1.0, 1.0]
  );

  // Seamless jump to top when the zoom reaches scale 1.0 while scrolling down
  useEffect(() => {
    const jumpedRef = { current: false };

    const unsubscribe = scrollYProgress.on('change', (value) => {
      const isMovingDown = (lenis?.velocity ?? 0) >= 0;
      if (value >= 0.95 && isMovingDown && !jumpedRef.current) {
        jumpedRef.current = true;
        // Immediate reset to top - matches exactly pixel-for-pixel with hero section
        lenis?.scrollTo(0, { immediate: true });
      } else if (value < 0.80) {
        jumpedRef.current = false;
      }
    });

    return unsubscribe;
  }, [scrollYProgress, lenis]);

  return (
    <section id="loop-transition" ref={sectionRef} className="relative h-[160vh] md:h-[180vh] z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
        {/* Destination: The starting screen gradually approaching from deep in the background as you zoom through */}
        <div className="absolute inset-0 flex items-start justify-center pt-28 px-6 max-md:min-h-0 max-md:pt-20 max-md:px-4 max-md:pb-12 pointer-events-none">
          <motion.div
            className="max-w-6xl mx-auto text-center relative z-20"
            style={{
              opacity: heroOpacity,
              scale: heroScale,
              transformOrigin: '50% 45%',
            }}
          >
            {/* Holographic Avatar with Orbiting SVG Tech Rings */}
            <div className="relative inline-block mb-8 max-md:mb-6">
              {/* Outer SVG Tech Ring 1 */}
              <svg
                className="hero-ring animate-tech-ring-1 absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-10 opacity-75"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#ringGrad1-loop)"
                  strokeWidth="1.5"
                  strokeDasharray="8 12"
                />
                <circle
                  cx="100"
                  cy="10"
                  r="3.5"
                  fill="#38bdf8"
                  className="filter drop-shadow-[0_0_6px_#38bdf8]"
                />
                <defs>
                  <linearGradient id="ringGrad1-loop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner SVG Tech Ring 2 */}
              <svg
                className="hero-ring animate-tech-ring-2 absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-10 opacity-60"
                viewBox="0 0 180 180"
              >
                <circle
                  cx="90"
                  cy="90"
                  r="82"
                  fill="none"
                  stroke="url(#ringGrad2-loop)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="90"
                  cy="172"
                  r="2.5"
                  fill="#ec4899"
                  className="filter drop-shadow-[0_0_6px_#ec4899]"
                />
                <defs>
                  <linearGradient id="ringGrad2-loop" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Avatar Image Wrapper */}
              <div className="relative z-20">
                <img
                  src="resources/profile-avatar.png"
                  alt="Mevin Jose Profile Pic"
                  className="profile-avatar mx-auto rounded-full shadow-2xl ring-2 ring-indigo-500/30 filter drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Morphing Role Title */}
            <div className="hero-title-wrap">
              <div className="h-32 max-md:h-20 flex items-center justify-center mb-10 max-md:mb-6">
                <GooeyText
                  texts={['AI Developer', 'ML Engineer', 'Fullstack Dev', 'Problem Solver']}
                  morphTime={1}
                  cooldownTime={0.25}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-md:gap-3 justify-center items-center mb-4 max-sm:px-2">
              <div className="hero-btn-item max-sm:w-full">
                <GradientButton asChild className="max-sm:w-full">
                  <a href="#projects">
                    <Eye className="w-5 h-5 mr-2" />
                    View My Work
                  </a>
                </GradientButton>
              </div>
              <div className="hero-btn-item max-sm:w-full">
                <GradientButton variant="variant" asChild className="max-sm:w-full">
                  <a href={contactInfo.resume} download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </GradientButton>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-socials-wrap flex justify-center mt-2">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}