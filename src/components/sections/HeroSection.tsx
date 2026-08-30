import { useEffect, useRef } from 'react';
import { GradientButton } from '../ui/gradient-button';
import { GooeyText } from '../ui/gooey-text-morphing';
import { SocialLinks } from '../social-links';
import { Eye, Download } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';
import { createTimeline, animate, stagger } from 'animejs';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarWrapperRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGSVGElement>(null);
  const ring2Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // 1. Master Entrance Timeline
    const tl = createTimeline({
      defaults: {
        ease: 'outBack(1.4)',
      },
    });

    const avatar = avatarWrapperRef.current;
    const titleWrap = heroRef.current.querySelector('.hero-title-wrap');
    const btnItems = heroRef.current.querySelectorAll('.hero-btn-item');
    const socialsWrap = heroRef.current.querySelector('.hero-socials-wrap');
    const rings = heroRef.current.querySelectorAll('.hero-ring');

    if (avatar) {
      tl.add(avatar, {
        scale: [0.4, 1],
        opacity: [0, 1],
        duration: 1000,
        ease: 'outElastic(1, 0.6)',
      });
    }

    if (rings.length > 0) {
      tl.add(
        Array.from(rings) as HTMLElement[],
        {
          scale: [0.6, 1],
          opacity: [0, 0.85],
          duration: 900,
          delay: stagger(150),
          ease: 'outCubic',
        },
        '-=600'
      );
    }

    if (titleWrap) {
      tl.add(
        titleWrap as HTMLElement,
        {
          translateY: [24, 0],
          opacity: [0, 1],
          duration: 800,
          ease: 'outQuad',
        },
        '-=500'
      );
    }

    if (btnItems.length > 0) {
      tl.add(
        Array.from(btnItems) as HTMLElement[],
        {
          translateY: [20, 0],
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: 700,
          delay: stagger(100),
          ease: 'outBack(1.5)',
        },
        '-=400'
      );
    }

    if (socialsWrap) {
      tl.add(
        socialsWrap as HTMLElement,
        {
          translateY: [16, 0],
          opacity: [0, 1],
          duration: 600,
          ease: 'outQuad',
        },
        '-=300'
      );
    }

    // 2. Continuous rotating holographic rings
    let ringAnim1: any;
    let ringAnim2: any;

    if (ring1Ref.current) {
      ringAnim1 = animate(ring1Ref.current, {
        rotate: [0, 360],
        duration: 24000,
        loop: true,
        ease: 'linear',
      });
    }

    if (ring2Ref.current) {
      ringAnim2 = animate(ring2Ref.current, {
        rotate: [360, 0],
        duration: 32000,
        loop: true,
        ease: 'linear',
      });
    }

    return () => {
      tl.revert();
      ringAnim1?.revert();
      ringAnim2?.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-start justify-center pt-28 px-6 max-md:min-h-0 max-md:pt-20 max-md:px-4 max-md:pb-12"
    >
      <div className="max-w-6xl mx-auto text-center relative z-20">
        {/* Holographic Avatar with Orbiting SVG Tech Rings (Stationary) */}
        <div className="relative inline-block mb-8 max-md:mb-6">
          {/* Outer SVG Tech Ring 1 */}
          <svg
            ref={ring1Ref}
            className="hero-ring absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-10 opacity-75"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#ringGrad1)"
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
              <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner SVG Tech Ring 2 */}
          <svg
            ref={ring2Ref}
            className="hero-ring absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-10 opacity-60"
            viewBox="0 0 180 180"
          >
            <circle
              cx="90"
              cy="90"
              r="82"
              fill="none"
              stroke="url(#ringGrad2)"
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
              <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Avatar Image Wrapper */}
          <div
            ref={avatarWrapperRef}
            className="relative z-20"
          >
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
      </div>
    </section>
  );
}
