import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Curriculo from '../../components/curriculo';

const Index = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Clique para enviar e-mail',
      link: 'mailto:eric.gomes205@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: 'Clique para conversar no WhatsApp',
      link: 'https://wa.me/5511977485165',
    },
    {
      icon: Github,
      label: 'Github',
      value: 'Acesse meu GitHub',
      link: 'https://github.com/Eric20-patrick',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Visite meu perfil no LinkedIn',
      link: 'https://www.linkedin.com/in/ericpatrick-dev/',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo-SP',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="section-container">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Entre em contato
          </span>
        </h1>
        <div className="lg:pl-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sinta-se à vontade para entrar em contato por meio de qualquer um
            desses canais.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
