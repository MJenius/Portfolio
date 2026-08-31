import { ProfileCard } from '../ui/profile-card';
import TextReveal from '../ui/text-reveal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-8 pb-16 md:pt-10 md:pb-24 px-4 md:px-6 -scroll-mt-24 md:-scroll-mt-5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/40 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-6 reveal-element">
          <TextReveal word="About Me" showReplayButton={false} showContainer={false} />
        </div>

        <div className="reveal-element flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
