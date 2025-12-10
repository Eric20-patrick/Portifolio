import { useRef, useEffect } from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';
import Curriculo from '../../components/curriculo';

const About = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (bioRef.current) observer.observe(bioRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  const experiences = [
    {
      title: 'Desenvolvedor Frontend',
      company: 'Desenvolvedor Front-End | ShopperUm (Remoto)',
      period: '2021 - 2023',
      description:
        'Desenvolvimento de interfaces dinâmicas e responsivas usando React e Tailwind, melhorando significativamente a experiência do usuário final e Desenvolvimento de interfaces dinâmicas e responsivas usando React e JavaScript, melhorando significativamente a experiência do usuário final e 	Implementação de Design Responsivo utilizando CSS, SASS.',
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'FreeLancer',
      period: '2023 -',
      description:
        'Design: Utilização do Figma para criação de layouts e protótipos interativos, Front-End: Desenvolvimento com React.js, TypeScript, JavaScript, Tailwind e CSS,Back-End: Implementação de Laravel para o desenvolvimento de funcionalidades e integração com o front-end',
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Habilidades',
      period: '',
      description:
        'Linguagens e Frameworks: JavaScript (ES6+), React.js, TypeScript, HTML5, CSS, Bibliotecas e Ferramentas: Redux, React Router, Git, UI/UX Design: Figma, Lógica de Programação: Capacidade de desenvolver soluções eficientes e lógicas.',
    },
  ];

  const education = [
    {
      degree: 'TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMA',
      institution: 'Cruzeiro do Sul, São Paulo, SP',
      year: '2024 - 2026',
      description: '',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="section-container">
        <div
          ref={bioRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 opacity-0"
        >
          <div className="md:col-span-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Eric Patrick
              </span>
              <br />
              Desenvolvedor Web
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sou um Desenvolvedor Front-End com Experiência em React.js,
              typescript, e Tailwind CSS, SASS
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h1 className="font-bold mb-2">Front-end</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  React, TypeScript, Tailwind CSS, SASS.
                </p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h1 className="font-bold mb-2">Analista de Suporte Técnico</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Conhecimento avançado em Windows, Pacote Office, manutenção de
                  hardware e software
                </p>
              </div>
              <Curriculo />
            </div>
          </div>
        </div>

        <div ref={experienceRef} className="mb-16 opacity-0">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="mr-2 text-blue-600 dark:text-blue-400" />
            Experiência de trabalho
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900"
              >
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={educationRef} className="opacity-0">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-2 text-blue-600 dark:text-blue-400" />
            Educação
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900"
              >
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
