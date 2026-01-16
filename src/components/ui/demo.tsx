import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { GradientCard } from "@/components/ui/gradient-card";
import TechnologiesShowcase from "@/components/ui/gradient-card-showcase";

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full">
      <ThreeDPhotoCarousel />
    </div>
  );
}

export const Demo = () => {
  return <GradientCard />;
};

export const DemoOne = () => {
  return <TechnologiesShowcase />;
};
