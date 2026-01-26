import { useState } from 'react';
import { ProjectsHoverEffect } from '../ui/projects-hover-effect';
import { projects } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

type ProjectFilter = 'all' | 'ai-ml' | 'web';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter || project.category === 'all';
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <>
      <section id="projects" className="pt-20 pb-6 px-6 -scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal-element">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-element flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === 'all' ? 'active' : ''
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === 'ai-ml' ? 'active' : ''
                }`}
                onClick={() => setActiveFilter('ai-ml')}
              >
                AI/ML
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === 'web' ? 'active' : ''
                }`}
                onClick={() => setActiveFilter('web')}
              >
                Web Development
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto" style={{ maxWidth: '1560px' }}>
          <div className="reveal-element">
            <ProjectsHoverEffect
              projects={filteredProjects}
              onProjectClick={(projectId) => setSelectedProjectId(projectId)}
            />
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </>
  );
}
