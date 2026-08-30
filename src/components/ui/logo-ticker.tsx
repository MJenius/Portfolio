import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Code2,
  Database,
  Cpu,
  Server,
  Layers,
  Globe,
  Boxes,
  Workflow,
  Sparkles,
  Zap,
  Terminal,
  Brain,
  Shield,
  Activity,
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const techItems: TechItem[] = [
  { name: 'Python', category: 'Language', icon: Code2, color: '#3b82f6' },
  { name: 'PyTorch', category: 'Deep Learning', icon: Brain, color: '#ee4c2c' },
  { name: 'FastAPI', category: 'API Framework', icon: Zap, color: '#009688' },
  { name: 'LangChain & RAG', category: 'Agentic AI', icon: Sparkles, color: '#a855f7' },
  { name: 'LightGBM & ML', category: 'MLOps', icon: Activity, color: '#f59e0b' },
  { name: 'Apache Kafka', category: 'Streaming', icon: Workflow, color: '#ec4899' },
  { name: 'Docker', category: 'Containerization', icon: Boxes, color: '#2496ed' },
  { name: 'TypeScript', category: 'Language', icon: Code2, color: '#3178c6' },
  { name: 'React', category: 'Frontend', icon: Globe, color: '#61dafb' },
  { name: 'Node.js', category: 'Backend', icon: Server, color: '#68a063' },
  { name: 'PostgreSQL', category: 'Database', icon: Database, color: '#336791' },
  { name: 'MongoDB', category: 'NoSQL', icon: Database, color: '#47a248' },
  { name: 'Redis', category: 'In-Memory', icon: Layers, color: '#dc382d' },
  { name: 'Three.js / WebGL', category: '3D Graphics', icon: Cpu, color: '#00ffff' },
  { name: 'Vector Search', category: 'Embeddings', icon: Shield, color: '#8b5cf6' },
  { name: 'Linux / Bash', category: 'DevOps', icon: Terminal, color: '#f97316' },
];

export function LogoTicker({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden py-6 select-none',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

      {/* Infinite Scrolling Track */}
      <motion.div
        className="flex w-max gap-4 md:gap-6 items-center"
        animate={{
          x: isHovered ? ['0%', '-50%'] : ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: isHovered ? 60 : 30, // Slow on hover
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {/* Render items duplicated for seamless infinite loop */}
        {[...techItems, ...techItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-800/60 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${item.color}18`,
                  color: item.color,
                }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
