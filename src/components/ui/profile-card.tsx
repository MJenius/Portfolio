import { motion } from 'framer-motion';
import { Mail, Phone, Github, Code2, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LiveEngineeringStats } from '../live-engineering-stats';
import { MicroExpander } from './micro-expander';

interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  leetcodeUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = 'Mevin Jose',
    title = 'AI/ML & Software Engineering Student | PES University (2023-2027)',
    description =
    'I build machine learning systems and full-stack platforms that hold up in production, not just in notebooks. My work covers agentic AI pipelines, real-time computer vision, event-driven microservices, and data engineering workflows built for scale.\n\nSome numbers: 95-100% NL-to-SQL accuracy on a 100-query benchmark, a LightGBM forecasting pipeline trained on 58.3M records, a Kafka-based platform hitting 553 req/s with 57% throughput gains, and a PPO traffic system that cut emergency transit time by 10.6%. I care about validation rigor, drift detection, and systems that stay reliable under real-world noise.\n\nI am looking for roles where machine learning meets strong software engineering. If you are building something that needs to work at scale, I would love to talk.',
    email = 'mjenius1357@gmail.com',
    phone = '+91 99029 32228',
    githubUrl = 'https://github.com/MJenius',
    linkedinUrl = 'https://www.linkedin.com/in/mevin-jose',
    leetcodeUrl = 'https://leetcode.com/u/mjenius1357/',
    className,
  } = props;

  const socials = [
    { icon: Phone, label: 'Call', href: `tel:${phone}` },
    { icon: Mail, label: 'Email', href: `mailto:${email}` },
    { icon: Linkedin, label: 'LinkedIn', href: linkedinUrl },
    { icon: Github, label: 'GitHub', href: githubUrl },
    { icon: Code2, label: 'LeetCode', href: leetcodeUrl },
  ];

  return (
    <div className={cn('max-w-6xl mx-auto w-full', className)}>
      {/* Desktop Layout - Clean Side-by-Side without clipping */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Live Stats (5 columns) */}
        <div className="lg:col-span-5 flex flex-col">
          <LiveEngineeringStats />
        </div>

        {/* Right: Bio & Socials Card (7 columns) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-7 bg-slate-900/90 border border-slate-700/60 rounded-3xl shadow-2xl p-7 flex flex-col justify-between backdrop-blur"
        >
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
              <p className="text-xs font-medium text-slate-400">{title}</p>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {description}
            </p>
          </div>

          <div className="flex space-x-2 pt-2 border-t border-slate-800/80">
            {socials.map(({ icon: Icon, label, href }) => (
              <MicroExpander
                key={label}
                text={label}
                icon={<Icon className="w-5 h-5" />}
                variant="ghost"
                onClick={() => window.open(href, '_blank')}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Medium & Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="lg:hidden max-w-xl mx-auto space-y-6"
      >
        {/* Live Stats */}
        <div className="w-full">
          <LiveEngineeringStats />
        </div>

        <div className="bg-slate-900/90 border border-slate-700/60 rounded-3xl shadow-2xl p-6 backdrop-blur">
          <h2 className="text-xl font-bold text-white mb-1.5">{name}</h2>
          <p className="text-xs font-medium text-slate-400 mb-4">{title}</p>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 whitespace-pre-line">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {socials.map(({ icon: Icon, label, href }) => (
              <MicroExpander
                key={label}
                text={label}
                icon={<Icon className="w-5 h-5" />}
                variant="ghost"
                onClick={() => window.open(href, '_blank')}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
