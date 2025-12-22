import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { title: "Serviços", href: "/servicos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Contato", href: "/contato" },
    { title: "Política de Privacidade", href: "/politica-de-privacidade" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Contato</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center"><Phone size={16} className="mr-3 text-blue-900" /> (11) 4210-6194</div>
              <div className="flex items-center"><Mail size={16} className="mr-3 text-blue-900" /> contato@carneirofilho.com.br</div>
              <div className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                Av. Brigadeiro Faria Lima, 1811 - 1119<br />Jardim Paulistano, São Paulo/SP
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Estrutura Institucional */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Institucional</h3>
            <p className="text-gray-400 text-sm">
              Carneiro Filho Advocacia<br />
              OAB/SP nº [Número]<br />
              Atendimento especializado em Sorocaba e Região.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Carneiro Filho Advocacia | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;