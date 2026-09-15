"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl md:text-3xl md:text-4xl tracking-tight lg:max-w-xl font-bold text-left text-white">
            Trusted by teams & engineering ecosystems worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-2xl aspect-square bg-slate-900/60 border border-white/10 backdrop-blur-xl items-center justify-center p-6 text-slate-300 font-medium hover:border-white/20 transition-colors">
                    <span className="text-sm">Client {index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function CaseDemo() {
  return (
    <div className="block">
      <Case />
    </div>
  );
}

export { Case, CaseDemo };
