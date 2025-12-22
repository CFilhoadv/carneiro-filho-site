import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Informações da empresa */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-left uppercase tracking-wider border-l-4 border-blue-900 pl-4">Carneiro Filho Advocacia</h3>
            <p className="mb-4 text-left text-gray-300 leading-relaxed">
              Atuação jurídica responsável nas áreas cível, familiar, sucessória e patrimonial, com foco em técnica e transparência.
            </p>
          </div>

          {/* Coluna 2: Informações de contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-left uppercase tracking-wider border-l-4 border-blue-900 pl-4">Contato</h3>
            <div className="space-y-2 text-left text-gray-300">
              <p>
                Telefone: <a href="tel:+551142106194" className="hover:text-blue-400 transition-colors">(11) 4210-6194</a>
              </p>
              <p>
                WhatsApp: <a 
                  href="https://wa.me/551142106194" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  (11) 4210-6194
                </a>
              </p>
              <p>Email: contato@carneirofilho.com.br</p>
              <p className="pt-2">
                Av. Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                Jardim Paulistano, São Paulo/SP<br />
                CEP: 01452-001
              </p>
            </div>
          </div>

          {/* Coluna 3: Links rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-left uppercase tracking-wider border-l-4 border-blue-900 pl-4">Links Rápidos</h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/planejamento-sucessorio" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Planejamento Sucessório
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Carneiro Filho Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;