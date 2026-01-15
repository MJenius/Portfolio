import { motion } from 'framer-motion';
import { Mail, Phone, Github, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LiveEngineeringStats } from '../live-engineering-stats';

interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  githubUrl?: string;
  leetcodeUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = 'Mevin Jose',
    title = 'AI/ML & Software Engineering Student — PES University (2023–2027)',
    description =
      'I build production-grade machine learning systems, real-time computer vision pipelines, and full-stack web platforms with a strong emphasis on reliability, observability, and deployment discipline.\n\nMy work spans Python, FastAPI, Node.js, React, LightGBM, OpenCV, and reinforcement learning, with a focus on designing systems that remain stable under data drift, scale, and real-world noise.\n\nI\'m interested in roles where machine learning meets robust software engineering—building systems that don\'t just work in notebooks, but perform reliably in production.',
    email = 'mjenius1357@gmail.com',
    phone = '+91 99029 32228',
    githubUrl = 'https://github.com/MJenius',
    leetcodeUrl = 'https://leetcode.com/u/mjenius1357/',
    className,
  } = props;

  const socials = [
    { icon: Phone, label: 'Call', href: `tel:${phone}` },
    { icon: Mail, label: 'Email', href: `mailto:${email}` },
    { icon: Github, label: 'GitHub', href: githubUrl },
    { icon: Code2, label: 'LeetCode', href: leetcodeUrl },
  ];

  return (
    <div className={cn('max-w-fit mx-auto', className)}>
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center gap-0">
        {/* Left: Live Stats (replaces square image) */}
        <div className="w-[380px] flex-shrink-0">
          <LiveEngineeringStats />
        </div>

        {/* Right: Overlapping Card with text and socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-slate-900/90 border border-slate-700/60 rounded-3xl shadow-2xl p-6 ml-[-80px] z-10 max-w-xl flex-1 backdrop-blur"
        >
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
            <p className="text-xs font-medium text-slate-400">{title}</p>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed mb-6 whitespace-pre-line">
            {description}
          </p>

          <div className="flex space-x-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/70 border border-slate-700/70 rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 hover:scale-105 transition-transform"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="md:hidden max-w-sm mx-auto text-center"
      >
        {/* Mobile: Live Stats */}
        <div className="mb-6">
          <LiveEngineeringStats />
        </div>

        <div className="px-4">
          <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
          <p className="text-sm font-medium text-slate-400 mb-4">{title}</p>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 whitespace-pre-line">
            {description}
          </p>

          <div className="flex justify-center space-x-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/70 border border-slate-700/70 rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
