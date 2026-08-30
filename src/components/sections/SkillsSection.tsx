import { DemoOne } from '../ui/demo';
import TextReveal from '../ui/text-reveal';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-[85vh] flex flex-col justify-center pt-16 md:pt-24 pb-36 md:pb-48 px-4 md:px-6 -scroll-mt-12 md:-scroll-mt-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12 reveal-element">
          <TextReveal word="Technical Skills" showReplayButton={false} showContainer={false} />
        </div>

        <div className="reveal-element">
          <DemoOne />
        </div>
      </div>
    </section>
  );
}
