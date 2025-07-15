import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nuvra</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em automações inteligentes e chatbots personalizados para transformar seu negócio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Automações com n8n</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Integração de APIs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bots para WhatsApp</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Chat Web</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@nuvra.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nuvra. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;