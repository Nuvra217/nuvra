import React from 'react';
import { ArrowRight, Bot, Zap, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automações{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Inteligentes
                </span>{' '}
                para sua Empresa
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialistas em chatbots personalizados e automações que aumentam a produtividade 
                e otimizam o atendimento ao cliente. Transforme sua empresa com soluções inovadoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('nuvra-chatbot')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat ao Vivo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Automações Criadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-sm text-gray-600">Suporte Disponível</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Chatbot Nuvra</div>
                    <div className="text-sm text-gray-500">Online agora</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Olá! Como posso ajudar você hoje?</p>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg ml-8">
                    <p className="text-sm">Gostaria de saber mais sobre automações</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Perfeito! Posso te explicar como nossas soluções podem transformar seu negócio...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;