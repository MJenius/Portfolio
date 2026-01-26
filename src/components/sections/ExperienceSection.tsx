import { ExperienceTimeline } from '../ui/experience-timeline';
import { experiences } from '@/data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-32 pb-16 px-6 -scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience Timeline</h2>
          <p className="text-slate-300">My journey in technology and software development</p>
        </div>

        <div className="reveal-element">
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </section>
  );
}
