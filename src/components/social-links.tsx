import { MicroExpander } from './ui/micro-expander';
import { Github, Code2, Mail, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  text: string;
  href: string;
  colorClass: string;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      text: 'GitHub',
      href: 'https://github.com/MJenius',
      colorClass: 'hover:text-white hover:border-slate-400/40 hover:bg-slate-800/60',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mevin-jose/',
      colorClass: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      text: 'LeetCode',
      href: 'https://leetcode.com/u/mjenius1357/',
      colorClass: 'hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'Email',
      href: 'mailto:mjenius1357@gmail.com',
      colorClass: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4">
      {socialLinks.map((link) => (
        <a
          key={link.text}
          href={link.href}
          target={link.text === 'Email' ? undefined : '_blank'}
          rel={link.text === 'Email' ? undefined : 'noopener noreferrer'}
          className="no-underline rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={link.text}
        >
          <MicroExpander
            text={link.text}
            variant="ghost"
            icon={link.icon}
            className={`text-slate-300 border-white/10 ${link.colorClass}`}
          />
        </a>
      ))}
    </div>
  );
}
