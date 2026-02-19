import { useState } from 'react';
import { ProjectsHoverEffect } from '../ui/projects-hover-effect';
import { projects } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';
import TextReveal from '../ui/text-reveal';

type ProjectFilter = 'all' | 'ai-ml' | 'web' | 'data-analysis';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter || project.category === 'all';
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);
  const hasMore = filteredProjects.length > 8;

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <>
      <section id="projects" className="pt-16 md:pt-20 pb-6 px-4 md:px-6 -scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal-element">
            <TextReveal word="My Projects" showReplayButton={false} showContainer={false} />
          </div>
        </div>
      </section>

      <section className="pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-element flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between mb-6 md:mb-8">
            <div className="flex-1 w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === 'all' ? 'active' : ''
                  }`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === 'ai-ml' ? 'active' : ''
                  }`}
                onClick={() => setActiveFilter('ai-ml')}
              >
                AI/ML
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === 'web' ? 'active' : ''
                  }`}
                onClick={() => setActiveFilter('web')}
              >
                Web Development
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === 'data-analysis' ? 'active' : ''
                  }`}
                onClick={() => setActiveFilter('data-analysis')}
              >
                Data Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto" style={{ maxWidth: '1560px' }}>
          <div className="reveal-element">
            <ProjectsHoverEffect
              projects={displayedProjects}
              onProjectClick={(projectId) => setSelectedProjectId(projectId)}
            />
          </div>
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>View All Projects ({filteredProjects.length})</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
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
