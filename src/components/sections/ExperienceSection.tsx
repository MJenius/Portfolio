import { useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TextReveal from '../ui/text-reveal';
import { Timeline } from '../ui/timeline';
import { GlowEffect } from '../ui/glow-effect';

const experienceCards = [
  {
    year: '2026',
    title: 'AI Intern',
    organization: 'Wadhwani Foundation',
    period: 'Jun 2026 – Aug 2026',
    description: 'Worked with a multi-tenant AI platform spanning RAG, vector search, document processing, and conversational AI. Traced FastAPI workflows and studied retrieval architecture and embeddings.',
    tags: ['RAG', 'FastAPI', 'Vector Search', 'Embeddings'],
    glowColors: ['#6366f1', '#a855f7', '#ec4899']
  },
  {
    year: '2025',
    title: 'Web Developer Intern',
    organization: 'Superhhero Learning',
    period: 'Jun 2025 – Sep 2025',
    description: 'Built 4 of 5 application routes and 5 core UI modules for an online education platform using Next.js, React, and Tailwind CSS, delivering responsive, interactive, data-driven components through 8 merged PRs.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    glowColors: ['#0894FF', '#C959DD', '#FF2E54']
  },
  {
    year: 'Education',
    title: 'B.Tech in Computer Science (AI & Machine Learning)',
    organization: 'PES University',
    period: 'Aug 2023 – May 2027',
    description: 'CGPA: 7.85 / 10.00 · AI/ML, Deep Learning, Reinforcement Learning, Algorithms',
    tags: ['AI & ML', 'Deep Learning', 'RL', 'Distributed Systems'],
    glowColors: ['#9333ea', '#ec4899', '#3b82f6']
  }
];

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const [animationSettled, setAnimationSettled] = useState(false);

  const educationCard = experienceCards[experienceCards.length - 1];
  const internshipCards = experienceCards.slice(0, -1);

  const timelineData = internshipCards.map((card) => ({
    title: card.year,
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 shadow-xl shadow-black/30">
        <GlowEffect
          colors={card.glowColors}
          mode="static"
          blur="medium"
          className="opacity-55"
        />
        <div className="relative z-10 bg-slate-900/60 backdrop-blur-2xl p-6">
          <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1.5">
            {card.title}
          </h4>
          <p className="text-blue-400 text-sm font-medium tracking-wide mb-3">
            {card.organization} · {card.period}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-white/[0.06] border border-white/10 text-slate-300 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }));

  const toggleExpanded = () => {
    if (expanded) {
      setAnimationSettled(false);
    }
    setExpanded(!expanded);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <section
      id="experience"
      className="min-h-[85vh] flex flex-col justify-start pt-24 md:pt-36 pb-48 md:pb-64 px-4 md:px-6 -scroll-mt-12 md:-scroll-mt-16 relative z-10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12 reveal-element">
          <TextReveal word="Experience Timeline" showReplayButton={false} showContainer={false} />
        </div>

        {/* Education & Internships Dropdown */}
        <div className="reveal-element max-w-5xl mx-auto">
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
            onClick={toggleExpanded}
            onKeyDown={handleCardKeyDown}
            className="group relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 hover:border-white/25 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            <GlowEffect
              colors={educationCard.glowColors}
              mode="static"
              blur="medium"
              className="opacity-55"
            />
            <div className="relative z-10 bg-slate-900/60 backdrop-blur-2xl p-6 pb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1.5 pt-1">
                {educationCard.title}
              </h3>
              <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide mb-3">
                {educationCard.organization} · {educationCard.period}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {educationCard.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {educationCard.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/[0.06] border border-white/10 text-slate-300 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="-mx-6 mt-5 px-6 py-3.5 border-t border-white/10 bg-white/[0.02] rounded-b-2xl flex items-center justify-center gap-2.5 group-hover:bg-white/[0.05] transition-colors duration-300">
                <ChevronDown
                  className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                />
                <span className="text-sm font-semibold tracking-wide text-blue-400 group-hover:text-blue-300 transition-colors">
                  {expanded ? 'Hide Internships' : 'Internships'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="internships-timeline"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => setAnimationSettled(true)}
              style={{ overflow: animationSettled ? 'visible' : 'hidden' }}
            >
              <Timeline data={timelineData} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
