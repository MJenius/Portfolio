import { ProfileCard } from '../ui/profile-card';
import TextReveal from '../ui/text-reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/0 via-slate-900/40 to-slate-950"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 reveal-element">
          <TextReveal word="About Me" showReplayButton={false} showContainer={false} />
        </div>

        <div className="reveal-element flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
