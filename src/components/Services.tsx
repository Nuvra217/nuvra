import React from 'react';
import { Bot, Zap, MessageSquare, Share2, Settings, Code } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automações com n8n',
      description: 'Criação de fluxos automatizados personalizados para otimizar processos internos e externos da sua empresa.',
      features: ['Integração de sistemas', 'Workflows personalizados', 'Monitoramento em tempo real']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Integração de APIs',
      description: 'Conectamos diferentes sistemas e plataformas através de APIs para uma comunicação perfeita.',
      features: ['APIs REST e GraphQL', 'Sincronização de dados', 'Middleware customizado']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Bots para WhatsApp',
      description: 'Chatbots inteligentes para WhatsApp Business que automatizam atendimento e vendas.',
      features: ['Atendimento 24/7', 'Integração com CRM', 'Respostas personalizadas']
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Chat Web',
      description: 'Chatbots para websites que melhoram a experiência do usuário e aumentam conversões.',
      features: ['Interface customizada', 'Suporte multilíngue', 'Analytics avançados']
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Bots para Redes Sociais',
      description: 'Automação para Instagram, Facebook, Telegram e outras plataformas sociais.',
      features: ['Resposta automática', 'Gerenciamento de leads', 'Campanhas automatizadas']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Consultoria em Automação',
      description: 'Análise completa dos seus processos e recomendações para otimização através de automação.',
      features: ['Auditoria de processos', 'Plano de implementação', 'Treinamento da equipe']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em automação e chatbots para transformar a forma como sua empresa opera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;