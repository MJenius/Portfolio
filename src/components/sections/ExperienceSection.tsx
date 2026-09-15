import { useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, Building2, Calendar } from 'lucide-react';
import TextReveal from '../ui/text-reveal';
import { Timeline } from '../ui/timeline';
import { BorderBeam } from '../ui/border-beam';

interface ExperienceItem {
  year: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  type: 'internship' | 'education';
}

const experienceCards: ExperienceItem[] = [
  {
    year: '2026',
    title: 'AI Engineering Intern',
    organization: 'Wadhwani Foundation',
    period: 'Jun 2026 – Aug 2026',
    description: 'Contributed to an enterprise-grade multi-tenant AI platform. Analyzed and optimized Python/FastAPI workflows for document parsing, OCR, and vector ingestion, evaluating Qdrant-backed semantic retrieval and RAG architectures.',
    tags: ['FastAPI', 'RAG', 'Qdrant', 'Vector Search', 'Distributed Systems'],
    type: 'internship'
  },
  {
    year: '2025',
    title: 'Web Developer Intern',
    organization: 'Superhhero Learning',
    period: 'Jun 2025 – Sep 2025',
    description: 'Engineered 4 of 5 core application routes and 5 interactive UI components for an online education platform using Next.js, React, and Tailwind CSS. Delivered responsive, high-performance user experiences through 8 production PRs.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'UI Architecture'],
    type: 'internship'
  },
  {
    year: '2023 – 2027',
    title: 'B.Tech in Computer Science (AI & Machine Learning)',
    organization: 'PES University, Bangalore',
    period: 'Aug 2023 – May 2027',
    description: 'Rigorous coursework spanning Deep Learning, Reinforcement Learning, Natural Language Processing, Distributed Database Systems, Cloud Computing, and Algorithmic Complexity.',
    tags: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Distributed Systems', 'Algorithms'],
    type: 'education'
  }
];

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const [animationSettled, setAnimationSettled] = useState(false);

  const educationCard = experienceCards.find((c) => c.type === 'education')!;
  const internshipCards = experienceCards.filter((c) => c.type === 'internship');

  const timelineData = internshipCards.map((card) => ({
    title: card.year,
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 shadow-xl shadow-black/40 hover:border-slate-600 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {card.title}
              </h4>
            </div>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {card.year}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-4 font-medium">
          <span className="flex items-center gap-1.5 text-sky-400">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            {card.organization}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {card.period}
          </span>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
          {card.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
          {card.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-slate-800/80 border border-slate-700/80 text-slate-300 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
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
          <TextReveal word="Experience & Education" showReplayButton={false} showContainer={false} />
        </div>

        {/* Professional Education Card */}
        <div className="reveal-element max-w-4xl mx-auto">
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
            onClick={toggleExpanded}
            onKeyDown={handleCardKeyDown}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 backdrop-blur-xl hover:border-slate-600 shadow-2xl shadow-black/50 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <BorderBeam size={280} duration={12} colorFrom="#38bdf8" colorTo="#6366f1" />

            <div className="p-6 sm:p-8 pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold">
                      DEGREE PROGRAM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {educationCard.title}
                    </h3>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {educationCard.year}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-4 font-medium pl-0.5">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Building2 className="w-3.5 h-3.5 text-sky-400" />
                  {educationCard.organization}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {educationCard.period}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal pl-0.5">
                {educationCard.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pb-5">
                {educationCard.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-slate-800/80 border border-slate-700/80 text-slate-300 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Toggle Tray */}
              <div className="-mx-6 sm:-mx-8 px-6 sm:px-8 py-3.5 border-t border-slate-800 bg-slate-950/40 rounded-b-2xl flex items-center justify-center gap-2 group-hover:bg-slate-950/70 transition-colors duration-200">
                <ChevronDown
                  className={`w-4 h-4 text-sky-400 transition-transform duration-300 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                />
                <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 group-hover:text-sky-300 transition-colors">
                  {expanded ? 'Hide Industry Internships' : 'View Industry Internships (2)'}
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
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
