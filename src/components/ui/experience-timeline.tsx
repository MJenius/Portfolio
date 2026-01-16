import { GlowEffect } from './glow-effect';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  glowColors?: string[];
}

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export function ExperienceTimeline({ items, className = '' }: ExperienceTimelineProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="timeline-item relative">
          {/* Glow effect card background */}
          <div className="relative overflow-hidden rounded-lg border border-slate-700">
            {/* Glow effect with custom colors */}
            <GlowEffect
              colors={item.glowColors || ['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
              mode="static"
              blur="medium"
              className="opacity-40"
            />

            {/* Card content */}
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="text-blue-400 font-semibold text-sm md:text-base">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-400 font-medium mb-2">{item.organization}</p>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed whitespace-pre-wrap">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
