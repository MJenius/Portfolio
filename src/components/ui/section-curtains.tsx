import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WavyBackground from './blue-meshy-background';
import { notifyOverlayClose, notifyOverlayOpen } from '@/lib/overlay-events';

export type CurtainDirection = 'down' | 'up';

export interface CurtainEventDetail {
  sectionName?: string;
  direction?: CurtainDirection;
  targetId?: string;
}

export const triggerCurtainTransition = (
  sectionName?: string,
  direction: CurtainDirection = 'down',
  targetId?: string
) => {
  window.dispatchEvent(
    new CustomEvent<CurtainEventDetail>('portfolio:curtain-transition', {
      detail: { sectionName, direction, targetId },
    })
  );
};

export function SectionCurtains() {
  const [active, setActive] = useState(false);
  const [sectionLabel, setSectionLabel] = useState<string | null>(null);
  const [direction, setDirection] = useState<CurtainDirection>('down');

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;
    let dismissTimer: ReturnType<typeof setTimeout>;

    const handleTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<CurtainEventDetail>;
      const { sectionName, direction: dir = 'down', targetId } = customEvent.detail || {};
      
      setSectionLabel(sectionName || null);
      setDirection(dir);
      setActive(true);
      notifyOverlayOpen();

      // At 350ms, curtain fully covers the screen. Teleport scroll position instantly.
      scrollTimer = setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId.replace('#', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
          }
        }
      }, 350);

      // Dismiss curtain when full animation finishes
      dismissTimer = setTimeout(() => {
        setActive(false);
        notifyOverlayClose();
      }, 920);
    };

    window.addEventListener('portfolio:curtain-transition', handleTrigger);
    return () => {
      window.removeEventListener('portfolio:curtain-transition', handleTrigger);
      clearTimeout(scrollTimer);
      clearTimeout(dismissTimer);
      notifyOverlayClose();
    };
  }, []);

  const isDown = direction === 'down';
  const words = (sectionLabel || '').trim().split(/\s+/).filter(Boolean);

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Main Luminous Space Curtain Panel */}
          <motion.div
            initial={{ y: isDown ? '-100%' : '100%' }}
            animate={{
              y: isDown ? ['-100%', '0%', '0%', '100%'] : ['100%', '0%', '0%', '-100%'],
            }}
            exit={{ y: isDown ? '100%' : '-100%' }}
            transition={{
              duration: 0.92,
              times: [0, 0.38, 0.62, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full bg-slate-950/95 overflow-hidden flex items-center justify-center border-y-2 border-cyan-400/60 shadow-[0_0_120px_rgba(56,189,248,0.4)]"
          >
            {/* Lighter WebGL Blue Meshy Domain-Warped Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90">
              <WavyBackground className="w-full h-full" />
            </div>

            {/* Glowing Leading Shimmer Edge */}
            <div
              className={`absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_35px_#38bdf8] ${
                isDown ? 'bottom-0' : 'top-0'
              }`}
            />

            {/* Massive Cinema Typography Scaled to Full Screen Without Clipping */}
            {sectionLabel && (
              <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-6 select-none">
                {words.length === 2 ? (
                  <svg
                    viewBox="0 0 1400 680"
                    className="w-[94vw] h-[80vh] max-w-full drop-shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <text
                      x="50%"
                      y="32%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-sans font-black uppercase tracking-tight"
                      fontSize={words[0].length <= 5 ? '260' : '200'}
                    >
                      {words[0]}
                    </text>
                    <text
                      x="50%"
                      y="74%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-sans font-black uppercase tracking-tight"
                      fontSize={words[1].length <= 4 ? '260' : words[1].length <= 7 ? '200' : '185'}
                    >
                      {words[1]}
                    </text>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 1400 480"
                    className="w-[94vw] h-[78vh] max-w-full drop-shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <text
                      x="50%"
                      y="54%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-sans font-black uppercase tracking-tight"
                      fontSize={
                        sectionLabel.length <= 4
                          ? '340'
                          : sectionLabel.length <= 6
                          ? '250'
                          : sectionLabel.length <= 7
                          ? '210'
                          : sectionLabel.length <= 9
                          ? '195'
                          : '175'
                      }
                    >
                      {sectionLabel}
                    </text>
                  </svg>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
