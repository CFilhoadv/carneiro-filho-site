import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Informações da empresa */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Carneiro Filho Advocacia</h3>
            <p className="mb-4">
              Assessoria Jurídica e Empresarial especializada em planejamento sucessório e holding familiar.
            </p>
          </div>

          {/* Coluna 2: Informações de contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            {/* Telefone como link clicável */}
            <p className="mb-2">
              Telefone: <a href="tel:+551142106194" className="hover:text-blue-400 transition-colors">(11) 4210-6194</a>
            </p>
            {/* NOVO: Link para WhatsApp Business */}
            <p className="mb-2">
              WhatsApp: <a 
                href="https://wa.me/551142106194" // Link internacional para WhatsApp Business
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
              >
                (11) 4210-6194
              </a>
            </p>
            <p className="mb-2">Email: contato@carneirofilho.com.br</p>
            <p className="mb-2">
              Av. Brigadeiro Faria Lima, 1811 - ESC 1119, Jardim Paulistano
            </p>
            <p>São Paulo/SP, CEP: 01452-001</p>
          </div>

          {/* Coluna 3: Links rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/planejamento-sucessorio" className="hover:text-blue-400 transition-colors">
                  Holding Familiar
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="hover:text-blue-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              {/* NOVO: Link para a Política de Privacidade */}
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Carneiro Filho Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
