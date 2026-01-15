import { MicroExpander } from './ui/micro-expander';
import { Github, Code2, Mail } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  text: string;
  href: string;
  color: string;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      text: 'GitHub',
      href: 'https://github.com/MJenius',
      color: 'hover:text-white hover:bg-slate-700/30',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      text: 'LeetCode',
      href: 'https://leetcode.com/u/mjenius1357/',
      color: 'hover:text-orange-400 hover:bg-orange-500/10',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'Email',
      href: 'mailto:mjenius1357@gmail.com',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
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
          className="no-underline"
        >
          <MicroExpander
            text={link.text}
            variant="ghost"
            icon={link.icon}
            className={`text-slate-400 ${link.color} border-slate-600`}
          />
        </a>
      ))}
    </div>
  );
}
