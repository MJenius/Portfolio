import { ExperienceTimeline } from '../ui/experience-timeline';
import { experiences } from '@/data/portfolioData';
import TextReveal from '../ui/text-reveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 -scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12 reveal-element">
          <TextReveal word="Experience Timeline" showReplayButton={false} showContainer={false} />
        </div>

        <div className="reveal-element">
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </section>
  );
}
