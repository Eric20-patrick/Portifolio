import { useRef, useEffect } from 'react';
import { ArrowRight, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const skills = [
    {
      icon: Code,
      title: 'Desenvolvimento Frontend',
      description:
        'Crie interfaces de usuário interativas e responsivas com React.js, TypeScript e Tailwind CSS.',
      technologies: ['React.js', 'TypeScript', 'tailwind'],
    },

    {
      icon: Layout,
      title: 'UI/UX Design',
      description:
        'Projetando experiências de usuário bonitas e intuitivas com estruturas modernas.',
      technologies: ['Figma'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center">
        <div ref={heroRef} className="section-container opacity-0">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Eric Patrick
              </span>
              <br />
              Desenvolvedor Web
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Construindo aplicativos web modernos com React, e Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Entre em contato comigo
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a
            href="#skills"
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div ref={skillsRef} className="section-container opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Minha experiência
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
                  <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Explore meus projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
