import { Monitor, Lightbulb, Settings, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '@/data/portfolioData';

type TechnologyCardConfig = {
  title: string;
  icon: LucideIcon;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
};

const cards: TechnologyCardConfig[] = [
  {
    title: "Programming Languages",
    icon: Code,
    technologies: skills.languages,
    gradientFrom: "#3b82f6",
    gradientTo: "#2563eb",
  },
  {
    title: "Web & Backend",
    icon: Monitor,
    technologies: skills.webBackend,
    gradientFrom: "#4dff03",
    gradientTo: "#00d0ff",
  },
  {
    title: "AI / ML & Data",
    icon: Lightbulb,
    technologies: skills.aiMl,
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
  },
  {
    title: "Infra, DevOps & Databases",
    icon: Settings,
    technologies: skills.infraDevops,
    gradientFrom: "#03a9f4",
    gradientTo: "#ff0058",
  },
];

export default function SkewCards() {
  return (
    <>
      <section className="px-6 pb-20 scroll-mt-32 md:scroll-mt-40">
        <div className="max-w-[100rem] mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
            {cards.map(({ title, icon: Icon, technologies, gradientFrom, gradientTo }, idx) => (
              <div
                key={idx}
                className="group relative w-full min-h-[400px] h-full transition-all duration-500 cursor-pointer"
              >
                {/* Skewed gradient panels */}
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] opacity-90"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] opacity-80"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />

                {/* Animated blurs */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                </span>

                {/* Content */}
                <div className="relative z-20 left-0 p-[20px_25px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:-left-[25px] group-hover:p-[40px_25px] h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-2 mb-4 shrink-0">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold leading-snug break-words">{title}</h3>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 overflow-visible">
                    {technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-[13px] font-medium text-white/90 hover:bg-white/20 transition-colors whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailwind custom utilities for animation and shadows */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
        .shadow-\[0_5px_15px_rgba\(0,0,0,0.08\) { box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
      `}</style>
    </>
  );
}
