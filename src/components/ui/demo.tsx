import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { GradientCard } from "@/components/ui/gradient-card";
import TechnologiesShowcase from "@/components/ui/gradient-card-showcase";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { Component } from "@/components/ui/image-auto-slider";

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full">
      <ThreeDPhotoCarousel />
    </div>
  );
}

export function CaseDemo() {
  return (
    <div className="block">
      <Case />
    </div>
  );
}

export const Demo = () => {
  return <GradientCard />;
};

export const DemoOne = () => {
  return <TechnologiesShowcase />;
};

export function ImageAutoSliderDemo() {
  return <Component />;
}
