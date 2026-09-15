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

  const filteredProjects = projects
    .filter((project) => {
      const matchesFilter =
        activeFilter === 'all' ||
        project.category === 'all' ||
        (Array.isArray(project.category)
          ? project.category.includes(activeFilter)
          : project.category === activeFilter);
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (activeFilter === 'web') {
        if (a.id === 'adaptive-golf') return -1;
        if (b.id === 'adaptive-golf') return 1;
        return 0;
      }
      return 0;
    });

  // When viewing 'All Projects', interleave categories so projects with the same color are not bunched together
  const displayProjects = activeFilter === 'all' && searchQuery.trim() === ''
    ? (() => {
        const aiProjects = filteredProjects.filter((p) => {
          const cat = Array.isArray(p.category) ? p.category[0] : p.category;
          return cat === 'ai-ml';
        });
        const webProjects = filteredProjects.filter((p) => {
          const cat = Array.isArray(p.category) ? p.category[0] : p.category;
          return cat === 'web';
        });
        const dataProjects = filteredProjects.filter((p) => {
          const cat = Array.isArray(p.category) ? p.category[0] : p.category;
          return cat === 'data-analysis';
        });

        const interleaved: typeof filteredProjects = [];
        const maxLen = Math.max(aiProjects.length, webProjects.length, dataProjects.length);
        for (let i = 0; i < maxLen; i++) {
          if (i < aiProjects.length) interleaved.push(aiProjects[i]);
          if (i < webProjects.length) interleaved.push(webProjects[i]);
          if (i < dataProjects.length) interleaved.push(dataProjects[i]);
        }
        return interleaved;
      })()
    : filteredProjects;

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

      <section className="pb-3 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-element flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between mb-2 md:mb-3">
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

      <section className="pb-16 md:pb-20 w-full overflow-hidden">
        <div className="w-full">
          <div className="reveal-element">
            <ProjectsHoverEffect
              projects={displayProjects}
              onProjectClick={(projectId) => setSelectedProjectId(projectId)}
              isSearching={searchQuery.trim().length > 0}
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
