import { ProfileCard } from '../ui/profile-card';

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/0 via-slate-900/40 to-slate-950"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
        </div>

        <div className="reveal-element flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
