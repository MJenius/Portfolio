import { ThreeDPhotoCarouselDemo } from '../ui/demo';

export function FeaturedProjectsSection() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 reveal-element">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my most impactful work in AI/ML and full-stack development
          </p>
        </div>

        <div className="reveal-element">
          <ThreeDPhotoCarouselDemo />
        </div>
      </div>
    </section>
  );
}
