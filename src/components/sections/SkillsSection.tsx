import { DemoOne } from '../ui/demo';

export function SkillsSection() {
  return (
    <>
      <section id="skills" className="pt-20 pb-12 px-6 -scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal-element">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
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
