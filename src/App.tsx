import { useEffect } from 'react';
import { MicroExpanderNavBar } from './components/ui/micro-expander-navbar';
import { Home, Briefcase, Lightbulb, MessageSquare, User, BriefcaseBusiness, Award } from 'lucide-react';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificationsSection, ContactSection } from './components/sections/ContactSection';
import { Vortex } from './components/ui/vortex';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About Me', url: '#about', icon: User },
  { name: 'Work Experience', url: '#experience', icon: BriefcaseBusiness },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Lightbulb },
  { name: 'Certifications', url: '#certifications', icon: Award },
  { name: 'Contact', url: '#contact', icon: MessageSquare }
];

function App() {
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
    <>
      <div className="fixed inset-0 -z-10">
        <Vortex
          backgroundColor="#000000"
          rangeY={800}
          particleCount={550}
          baseHue={220}
          className="w-full h-full"
        />
      </div>
      <MicroExpanderNavBar items={navItems} />
      <div className="relative z-10">
        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
