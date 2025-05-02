import { useState, useEffect, useRef } from 'react';
import ProjectCard, { ProjectType } from '@/components/ProjectCard';
import capa from '../fotos/teste.png';
import capam from '../fotos/capam.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Quiz Interativo de Séries',
      description:
        'Teste seus conhecimentos sobre as minhas séries favoritas! ',
      image: capa,
      technologies: ['React', 'typescript', 'Tailwind CSS'],
      url: 'https://www.google.com/',
      category: 'quiz',
    },
    {
      id: 2,
      title: 'Designer',
      description:
        'Enquanto esse projeto não esta finalizado, acompanhe o Designer ',
      image: capam,
      technologies: ['Figma'],
      url: 'https://www.figma.com/proto/utYRNFTHa3ibb7S89H54do/space-tourism-website?node-id=0-707&p=f&t=3gSsFKmXkDwikgdM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      category: 'espaco',
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'quiz', name: 'Quiz' },
    { id: 'espaco', name: 'Espaço' },
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="section-container">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Explore meu portfólio de projetos de desenvolvimento web mostrando
          minhas habilidades em React, e Tailwind CSS.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
