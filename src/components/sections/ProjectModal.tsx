import { useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import { X, ExternalLink, Github, BookOpen } from 'lucide-react';
import { notifyOverlayClose, notifyOverlayOpen } from '@/lib/overlay-events';
import { motion, AnimatePresence } from 'framer-motion';
import { BorderBeam } from '../ui/border-beam';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    notifyOverlayOpen();
    return () => notifyOverlayClose();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Expanded Bento Modal Card with Shared layoutId */}
          <motion.div
            layoutId={`project-card-${project.id}`}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 28,
            }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar bg-slate-900/95 border border-indigo-500/40 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <BorderBeam size={220} duration={8} colorFrom="#38bdf8" colorTo="#ec4899" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title with layoutId */}
            <motion.h2
              layoutId={`project-title-${project.id}`}
              className="text-2xl md:text-3xl font-extrabold mb-4 gradient-text pr-12 tracking-tight"
            >
              {project.title}
            </motion.h2>

            {/* Modal details content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="space-y-5 text-slate-300 text-sm leading-relaxed"
            >
              <p className="text-slate-200 leading-relaxed text-base">
                {project.details.overview}
              </p>

              <div>
                <h3 className="text-base font-bold text-white mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Key Achievements & Numbers:
                </h3>
                <ul className="space-y-2 pl-2">
                  {project.details.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Technical Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2.5 rounded-xl text-white font-medium transition-all shadow-lg hover:shadow-indigo-500/25"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.doi && (
                  <a
                    href={project.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-2.5 rounded-xl text-white font-medium transition-all shadow-lg hover:shadow-purple-500/25"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Paper (DOI)
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 rounded-xl text-white font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
