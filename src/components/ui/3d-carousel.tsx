// 3d-carousel.tsx
import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

type ProjectCard = {
  icon: { gradientFrom: string; gradientTo: string; svg: string };
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metric: string;
  links?: { label: string; url: string; type: 'github' | 'demo' }[];
};

const projects: ProjectCard[] = [
  {
    icon: { gradientFrom: "from-emerald-500", gradientTo: "to-teal-600", svg: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    title: "Demand Forecasting ML",
    subtitle: "MLOps • End-to-End • Production",
    description: "End-to-end retail demand forecasting with hybrid ML + statistical models, drift detection, and auto-retraining pipeline.",
    tags: ["Python", "LightGBM", "FastAPI", "Pandas"],
    metric: "↓25% MAE improvement",
    links: [
      { label: "View GitHub", url: "https://github.com/MJenius/Demand-Forecasting-ML-System", type: "github" }
    ]
  },
  {
    icon: { gradientFrom: "from-red-500", gradientTo: "to-orange-600", svg: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    title: "AEGIS Surveillance",
    subtitle: "CV • Security • Top-10 Hackathon",
    description: "Tamper-resistant surveillance system using HMAC-SHA256 watermarking and real-time tamper detection (blur, glare, blackout).",
    tags: ["Python", "OpenCV", "Flask", "Socket.IO"],
    metric: "<2% false positives",
    links: [
      { label: "View GitHub", url: "https://github.com/ZeroDeaths7/Aegis-Tamper-Resistant-Surveillance-System", type: "github" }
    ]
  },
  {
    icon: { gradientFrom: "from-blue-500", gradientTo: "to-cyan-600", svg: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    title: "Adaptive Traffic Control",
    subtitle: "RL • PPO • Smart City",
    description: "Reinforcement Learning agent (PPO) optimizing emergency vehicle routing in SUMO, trained on Bangalore traffic data.",
    tags: ["Python", "Stable-Baselines3", "SUMO", "Pandas"],
    metric: "10.6% faster emergency travel",
    links: [
      { label: "View GitHub", url: "#", type: "github" }
    ]
  },
  {
    icon: { gradientFrom: "from-indigo-500", gradientTo: "to-purple-600", svg: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    title: "DocParse AI",
    subtitle: "Full Stack • Multi-Model • SaaS",
    description: "Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback. Deployed via Modal + Vercel.",
    tags: ["FastAPI", "Next.js", "Modal", "Vercel"],
    metric: "99% accuracy",
    links: [
      { label: "View GitHub", url: "https://github.com/MJenius/PDF-Extractor-With-PymuPDF", type: "github" }
    ]
  },
  {
    icon: { gradientFrom: "from-orange-500", gradientTo: "to-red-600", svg: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    title: "Superhhero Learning",
    subtitle: "MERN • Ed-Tech • Full Stack",
    description: "Full-stack MERN application for online learning platform with scalable architecture, ~100 monthly users, and optimized performance.",
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    metric: "25% faster development",
    links: [
      { label: "Live Demo", url: "https://superhhero.com/", type: "demo" }
    ]
  },
  {
    icon: { gradientFrom: "from-rose-500", gradientTo: "to-pink-600", svg: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    title: "AI Voice Assistant",
    subtitle: "Python • NLP • Voice",
    description: "Voice-enabled assistant for LeetCode with company-specific suggestions using spaCy NLP and LeetCode API integration.",
    tags: ["Python", "spaCy", "ElevenLabs", "LeetCode API"],
    metric: "30% accuracy improvement",
    links: [
      { label: "View GitHub", url: "https://github.com/MJenius/AI-Voice-Assistant-Python", type: "github" }
    ]
  },
];

const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] } as const;

// Gradient Card component for carousel
const CarouselCard = memo(
  ({
    faceWidth,
    index,
    faceCount,
    radius,
    handleClick,
    project,
  }: {
    faceWidth: number;
    index: number;
    faceCount: number;
    radius: number;
    handleClick: (imgUrl: string, index: number) => void;
    project: ProjectCard;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = -(y / rect.height) * 5;
        const rotateY = (x / rect.width) * 5;

        setRotation({ x: rotateX, y: rotateY });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };

    return (
      <motion.div
        key={`card-${project.title}-${index}`}
        className="absolute flex h-full origin-center items-center justify-center"
        style={{
          width: `${faceWidth}px`,
          transform: `rotateY(${index * (360 / faceCount)}deg) translateZ(${radius}px)`,
        }}
        onClick={() => handleClick(project.title, index)}
      >
        <motion.div
          ref={cardRef}
          className="relative rounded-2xl overflow-hidden w-full cursor-pointer"
          style={{
            height: `${faceWidth * 0.58}px`,
            transformStyle: "preserve-3d",
            backgroundColor: "#0e131f",
            boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
          }}
          initial={{ y: 0 }}
          animate={{
            y: isHovered ? -5 : 0,
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle glass reflection overlay */}
          <motion.div
            className="absolute inset-0 z-35 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(2px)",
            }}
            animate={{
              opacity: isHovered ? 0.7 : 0.5,
              rotateX: -rotation.x * 0.2,
              rotateY: -rotation.y * 0.2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />

          {/* Dark background */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
            }}
          />

          {/* Noise texture overlay */}
          <motion.div
            className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Purple/blue glow effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
            style={{
              background: `
                radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.7) -10%, rgba(79, 70, 229, 0) 70%),
                radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.7) -10%, rgba(79, 70, 229, 0) 70%)
              `,
              filter: "blur(40px)",
            }}
            animate={{
              opacity: isHovered ? 0.9 : 0.8,
              y: isHovered ? rotation.x * 0.5 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />

          {/* Central purple glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
            style={{
              background: `
                radial-gradient(circle at bottom center, rgba(161, 58, 229, 0.7) -20%, rgba(79, 70, 229, 0) 60%)
              `,
              filter: "blur(45px)",
            }}
            animate={{
              opacity: isHovered ? 0.85 : 0.75,
              y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />

          {/* Enhanced bottom border glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
            style={{
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
            }}
            animate={{
              boxShadow: isHovered
                ? "0 0 20px 4px rgba(172, 92, 255, 0.9), 0 0 30px 6px rgba(138, 58, 185, 0.7), 0 0 40px 8px rgba(56, 189, 248, 0.5)"
                : "0 0 15px 3px rgba(172, 92, 255, 0.8), 0 0 25px 5px rgba(138, 58, 185, 0.6), 0 0 35px 7px rgba(56, 189, 248, 0.4)",
              opacity: isHovered ? 1 : 0.9,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />

          {/* Card content */}
          <motion.div
            className="relative flex flex-col h-full p-3 z-40 justify-between items-center text-center"
            animate={{
              z: 2
            }}
          >
            {/* Icon circle */}
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2 flex-shrink-0 mx-auto"
              style={{
                background: `linear-gradient(225deg, ${project.icon.gradientFrom.replace('from-', '')} 0%, #121624 100%)`,
                position: "relative",
                overflow: "hidden"
              }}
              initial={{ filter: "blur(3px)", opacity: 0.7 }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                boxShadow: isHovered
                  ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
                  : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
                y: isHovered ? -2 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.icon.svg} />
              </svg>
            </motion.div>

            {/* Content positioning */}
            <motion.div
              className="flex-1 w-full flex flex-col items-center justify-center"
              animate={{
                rotateX: isHovered ? -rotation.x * 0.3 : 0,
                rotateY: isHovered ? -rotation.y * 0.3 : 0
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <motion.h3
                className="text-base font-bold text-white mb-0.5 leading-tight tracking-tight w-full"
                initial={{ filter: "blur(3px)", opacity: 0.7 }}
                animate={{
                  textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1
                }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-xs text-slate-300 mb-0.75 leading-relaxed font-semibold w-full"
                initial={{ filter: "blur(3px)", opacity: 0.7 }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 0.95,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15
                }}
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                className="text-xs text-slate-100 mb-1.25 leading-relaxed font-normal w-full"
                initial={{ filter: "blur(3px)", opacity: 0.7 }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-0.5 mb-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-slate-700/50 text-slate-100 px-2 py-0.5 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Footer metric */}
            <motion.div
              className="text-xs text-slate-400 pt-1 border-t border-slate-700/30"
              initial={{ filter: "blur(3px)", opacity: 0.7 }}
              animate={{
                filter: "blur(0px)",
                opacity: 0.9,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25
              }}
            >
              <span className="text-green-400 font-bold">●</span> <span className="text-sm font-semibold text-slate-100">{project.metric}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  });

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void;
    controls: any;
    cards: string[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const faceCount = cards.length;
    const faceWidth = isScreenSizeSm ? 260 : 380;
    const cylinderWidth = faceWidth * faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <CarouselCard
              key={`key-${imgUrl}-${i}`}
              faceWidth={faceWidth}
              index={i}
              faceCount={faceCount}
              radius={radius}
              handleClick={handleClick}
              project={projects[i % projects.length]}
            />
          ))}
        </motion.div>
      </div>
    );
  }
);

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(
    () => projects.map((p) => p.title),
    []
  );

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Carousel cards loaded:", cards);
  }, [cards]);

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 cursor-pointer"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden max-w-2xl w-full cursor-default"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#0e131f",
                boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dark background */}
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
                }}
              />

              {/* Purple/blue glow effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
                style={{
                  background: `
                    radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.7) -10%, rgba(79, 70, 229, 0) 70%),
                    radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.7) -10%, rgba(79, 70, 229, 0) 70%)
                  `,
                  filter: "blur(40px)",
                }}
              />

              {/* Central purple glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
                style={{
                  background: `
                    radial-gradient(circle at bottom center, rgba(161, 58, 229, 0.7) -20%, rgba(79, 70, 229, 0) 60%)
                  `,
                  filter: "blur(45px)",
                }}
              />

              {/* Content */}
              <motion.div
                className="relative p-6 z-40"
              >
              <div className="flex items-start mb-4">
                  {activeImg && projects.find((p) => p.title === activeImg) && (
                    <>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${projects.find((p) => p.title === activeImg)?.icon.gradientFrom} ${projects.find((p) => p.title === activeImg)?.icon.gradientTo} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={projects.find((p) => p.title === activeImg)?.icon.svg} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-0.5">{activeImg}</h3>
                        <p className="text-slate-400 text-sm">{projects.find((p) => p.title === activeImg)?.subtitle}</p>
                      </div>
                      <button
                        onClick={handleClose}
                        className="flex-shrink-0 text-slate-400 hover:text-white transition-colors ml-2"
                        aria-label="Close"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{projects.find((p) => p.title === activeImg)?.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.find((p) => p.title === activeImg)?.tags.map((tag) => (
                    <span key={tag} className="bg-slate-700/50 text-slate-200 px-2.5 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-slate-200 pt-3 border-t border-slate-700/30 mb-4 font-semibold">
                  <span className="text-green-400 font-bold">●</span> {projects.find((p) => p.title === activeImg)?.metric}
                </div>
                {projects.find((p) => p.title === activeImg)?.links && projects.find((p) => p.title === activeImg)?.links!.length! > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {projects.find((p) => p.title === activeImg)?.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 rounded text-xs font-medium transition-colors"
                      >
                        {link.type === 'github' ? (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[450px] w-full overflow-visible flex items-center justify-center">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}

export { ThreeDPhotoCarousel };
