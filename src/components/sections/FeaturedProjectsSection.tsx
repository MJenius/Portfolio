import { ThreeDPhotoCarouselDemo } from '../ui/demo';
import TextReveal from '../ui/text-reveal';

export function FeaturedProjectsSection() {
  return (
    <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 reveal-element">
          <TextReveal word="Featured Projects" showReplayButton={false} showContainer={false} />
        </div>

        <div className="reveal-element">
          <ThreeDPhotoCarouselDemo />
        </div>
      </div>
    </section>
  );
}
