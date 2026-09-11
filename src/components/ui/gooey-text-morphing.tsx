"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let animId: number;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }
    };

    // Calculate deterministic phase from performance.now() so all instances are synchronized
    const cycleDuration = (morphTime + cooldownTime) * 1000;

    function animate() {
      animId = requestAnimationFrame(animate);
      const now = performance.now();
      const totalIndex = Math.floor(now / cycleDuration);
      const cycleProgress = (now % cycleDuration) / 1000;

      const currentIndex = totalIndex % texts.length;
      const nextIndex = (totalIndex + 1) % texts.length;

      if (text1Ref.current && text2Ref.current) {
        if (text1Ref.current.textContent !== texts[currentIndex]) {
          text1Ref.current.textContent = texts[currentIndex];
        }
        if (text2Ref.current.textContent !== texts[nextIndex]) {
          text2Ref.current.textContent = texts[nextIndex];
        }

        if (cycleProgress < cooldownTime) {
          // Cooldown phase: text1 is visible (100%), text2 is hidden (0%)
          text1Ref.current.style.filter = "";
          text1Ref.current.style.opacity = "100%";
          text2Ref.current.style.filter = "";
          text2Ref.current.style.opacity = "0%";
        } else {
          // Morph phase: transitioning from text1 to text2
          const morphFraction = Math.min((cycleProgress - cooldownTime) / morphTime, 1);
          setMorph(morphFraction);
        }
      }
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none whitespace-nowrap text-center text-[28px] sm:text-5xl md:text-[60pt] font-bold",
            "text-white",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none whitespace-nowrap text-center text-[28px] sm:text-5xl md:text-[60pt] font-bold",
            "text-white",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
