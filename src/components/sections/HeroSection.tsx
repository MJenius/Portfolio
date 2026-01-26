import { GradientButton } from '../ui/gradient-button';
import { GooeyText } from '../ui/gooey-text-morphing';
import { SocialLinks } from '../social-links';
import { Eye, Download } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-start justify-center pt-28 px-6">
      <div className="max-w-6xl mx-auto text-center relative z-20">
        <div className="reveal-element">
          <img
            src="resources/profile-avatar.png"
            alt="Mevin Jose Profile Pic"
            className="profile-avatar mx-auto mb-8 floating-animation"
          />
        </div>

        <div className="reveal-element">
          <div className="h-30 flex items-center justify-center mb-10">
            <GooeyText
              texts={['AI Developer', 'ML Engineer', 'Fullstack Dev', 'Problem Solver']}
              morphTime={1}
              cooldownTime={0.25}
            />
          </div>
        </div>

        <div className="reveal-element flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <GradientButton asChild>
            <a href="#projects">
              <Eye className="w-5 h-5 mr-2" />
              View My Work
            </a>
          </GradientButton>
          <GradientButton variant="variant" asChild>
            <a href={contactInfo.resume} download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </GradientButton>
        </div>

        <div className="reveal-element flex justify-center mt-2">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
