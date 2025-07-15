import React from 'react';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Inovação',
      description: 'Sempre à frente das tendências tecnológicas'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com nossos clientes'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excelência',
      description: 'Qualidade em cada projeto entregue'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Eficiência',
      description: 'Soluções rápidas e eficazes'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nuvra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, missão e os valores que nos guiam na criação de soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar o acesso a automações inteligentes e chatbots, permitindo que empresas de todos os tamanhos 
                possam otimizar seus processos, melhorar o atendimento ao cliente e aumentar sua produtividade através 
                de soluções tecnológicas acessíveis e eficazes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                Nossa Visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a referência nacional em automações e chatbots, reconhecida pela qualidade das soluções, 
                inovação constante e pelo impacto positivo que geramos na transformação digital das empresas brasileiras.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-cyan-600 mr-3" />
                Nossa História
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fundada com a visão de tornar a automação acessível a todos, a Nuvra nasceu da necessidade de 
                simplificar processos complexos através da tecnologia. Desde então, temos ajudado dezenas de 
                empresas a transformar seus negócios com soluções personalizadas e eficientes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Por que escolher a Nuvra?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                  <p className="text-blue-100">Expertise comprovada em automação e chatbots</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                  <p className="text-blue-100">Soluções 100% personalizadas para seu negócio</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                  <p className="text-blue-100">Suporte técnico dedicado e contínuo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                  <p className="text-blue-100">Implementação rápida e eficiente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                  <p className="text-blue-100">ROI comprovado em todos os projetos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;