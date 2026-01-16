'use client';

import { MicroExpander } from '@/components/ui/micro-expander';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export function MicroExpanderDemo() {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-background/50 border border-border rounded-full shadow-sm">
        <MicroExpander 
          text="Resume" 
          variant="ghost" 
          icon={<Download className="w-5 h-5" />}
          onClick={() => {
            // Handle resume download
            const link = document.createElement('a');
            link.href = '/resources/Mevin_Jose_Resume.pdf';
            link.download = 'Mevin_Jose_Resume.pdf';
            link.click();
          }}
        />
        <MicroExpander 
          text="GitHub" 
          variant="ghost" 
          icon={<Github className="w-5 h-5" />}
          onClick={() => window.open('https://github.com/MJenius', '_blank')}
        />
        <MicroExpander 
          text="LinkedIn" 
          variant="ghost" 
          icon={<Linkedin className="w-5 h-5" />}
          onClick={() => window.open('https://linkedin.com/in/mevin-jose', '_blank')}
        />
        <MicroExpander 
          text="Email" 
          variant="ghost" 
          icon={<Mail className="w-5 h-5" />}
          onClick={() => window.location.href = 'mailto:mevin@example.com'}
        />
      </div>
    </div>
  );
}
