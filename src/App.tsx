import { useEffect, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { ResponsiveMagneticDock } from './components/ui/responsive-magnetic-dock';
import { Home, Briefcase, Lightbulb, MessageSquare, User, BriefcaseBusiness, Award } from 'lucide-react';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificationsSection, ContactSection } from './components/sections/ContactSection';
import { ScrollLoopTransition } from './components/sections/ScrollLoopTransition';
import { Vortex } from './components/ui/vortex';
import { LogoTicker } from './components/ui/logo-ticker';
import { SectionCurtains } from './components/ui/section-curtains';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About Me', url: '#about', icon: User },
  { name: 'Work Experience', url: '#experience', icon: BriefcaseBusiness },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Lightbulb },
  { name: 'Certifications', url: '#certifications', icon: Award },
  { name: 'Contact', url: '#contact', icon: MessageSquare }
];

function AppContent({ isMobile }: { isMobile: boolean }) {
  const lenis = useLenis();

  // Bidirectional circular looping:
  // When at the top and scrolling up, seamlessly enter the loop transition at full scale 1.0
  // (visually identical to #home) and shrink out into deep space in reverse towards the Contact section
  useEffect(() => {
    let lastTriggerTime = 0;

    const triggerLoopUp = () => {
      const now = Date.now();
      if (now - lastTriggerTime < 600) return;
      lastTriggerTime = now;

      const loopEl = document.getElementById('loop-transition');
      if (loopEl && lenis) {
        const minScroll = loopEl.offsetTop;
        const maxScroll = loopEl.offsetTop + loopEl.offsetHeight - window.innerHeight;
        // Target scroll where hero is at full scale 1.0 (scrollYProgress ~ 0.93),
        // identical to #home, ready to smoothly shrink out as the user scrolls up
        const targetScroll = minScroll + 0.93 * (maxScroll - minScroll);

        // Instantly teleport to loop transition at scale 1.0 (zero visual difference from #home)
        lenis.scrollTo(targetScroll, { immediate: true });

        // Apply an initial smooth upward scroll impulse to begin shrinking out immediately
        requestAnimationFrame(() => {
          lenis.scrollTo(targetScroll - 160, {
            duration: 0.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 2),
          });
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      // Trigger when at or near the top (<= 20px) and scrolling up
      if (scrollY <= 20 && e.deltaY < -5) {
        triggerLoopUp();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      const currentY = e.touches[0]?.clientY ?? 0;
      const diff = currentY - touchStartY;
      if (scrollY <= 20 && diff > 30) {
        triggerLoopUp();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      if (scrollY <= 20 && (e.key === 'ArrowUp' || e.key === 'PageUp')) {
        triggerLoopUp();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lenis]);

  return (
    <>
      <SectionCurtains />
      <div className="fixed inset-0 -z-10 inline-flex pointer-events-none">
        <Vortex
          backgroundColor="#000000"
          rangeY={800}
          particleCount={isMobile ? 120 : 300}
          baseHue={220}
          className="w-full h-full"
        />
      </div>
      <ResponsiveMagneticDock items={navItems} />
      <div className="relative z-10">
        <HeroSection />
        {/* Infinite Logo Ticker */}
        <div className="max-w-6xl mx-auto px-4 -mt-8 mb-4 reveal-element">
          <LogoTicker />
        </div>
        <FeaturedProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <ScrollLoopTransition />
      </div>
    </>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-element');
    let revealObserver: IntersectionObserver | null = null;
    if (revealElements.length) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );
      revealElements.forEach((element) => {
        revealObserver?.observe(element);
      });
    }
    return () => {
      revealObserver?.disconnect();
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.16, wheelMultiplier: 1.35, touchMultiplier: 1.5, anchors: true }}>
      <AppContent isMobile={isMobile} />
    </ReactLenis>
  );
}

export default App;
