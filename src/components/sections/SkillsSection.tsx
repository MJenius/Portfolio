import { DemoOne } from '../ui/demo';
import TextReveal from '../ui/text-reveal';

export function SkillsSection() {
  return (
    <>
      <section id="skills" className="pt-6 md:pt-8 pb-2 md:pb-4 px-4 md:px-6 -scroll-mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal-element">
            <TextReveal word="Technical Skills" showReplayButton={false} showContainer={false} />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-element">
            <DemoOne />
          </div>
        </div>
      </section>
    </>
  );
}
