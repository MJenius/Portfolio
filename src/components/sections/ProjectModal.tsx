import { useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import { X } from 'lucide-react';

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

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div
        className="modal-content p-8 m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-4 gradient-text">{project.title}</h2>

        <div className="space-y-4 text-slate-300">
          <p>{project.details.overview}</p>

          <h3 className="text-xl font-semibold text-white">Key Achievements:</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.details.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-white">Technical Stack:</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.details.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
