import { Monitor, Lightbulb, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TechnologyCardConfig = {
  title: string;
  icon: LucideIcon;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
};

const cards: TechnologyCardConfig[] = [
  {
    title: "Web & Backend",
    icon: Monitor,
    technologies: ["FastAPI", "Flask", "Node.js", "Express.js", "React", "Next.js", "TypeScript", "REST APIs", "WebSockets (Socket.IO)"],
    gradientFrom: "#4dff03",
    gradientTo: "#00d0ff",
  },
  {
    title: "AI / ML & Data",
    icon: Lightbulb,
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "LightGBM", "OpenCV", "Pandas", "NumPy", "Stable-Baselines3", "SUMO"],
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
  },
  {
    title: "Infra, DevOps & Databases",
    icon: Settings,
    technologies: [
      "Docker", "Git", "GitHub Actions", "Vercel", "Modal", "FFmpeg",
      "PostgreSQL", "MongoDB", "SQLite", "TensorBoard", "pytest"
    ],
    gradientFrom: "#03a9f4",
    gradientTo: "#ff0058",
  },
];

export default function TechnologiesShowcase() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Technologies & Frameworks
            </h2>
            <p className="text-xl text-slate-300">
              Tools and technologies I work with regularly
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex justify-center items-center flex-wrap gap-8">
            {cards.map(({ title, icon: Icon, technologies, gradientFrom, gradientTo }, idx) => (
              <div
                key={idx}
                className="group relative w-[340px] min-h-[420px] transition-all duration-500"
              >
                {/* Skewed gradient panels */}
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
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
                <div className="relative z-20 left-0 p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-8 h-full">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/20 transition-colors"
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

      {/* Tailwind custom utilities for animation */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
