import { DemoOne } from '../ui/demo';
import TextReveal from '../ui/text-reveal';

export function SkillsSection() {
  return (
    <>
      <section id="skills" className="pt-20 pb-12 px-6 -scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal-element">
            <TextReveal word="Technical Skills" showReplayButton={false} showContainer={false} />
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-element">
            <DemoOne />
          </div>
        </div>
      </section>
    </>
  );
}
