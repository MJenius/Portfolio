export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/50 py-12 px-6 pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-slate-400 reveal-element">
          <p className="mb-2">
            © {currentYear} Mevin Jose. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
