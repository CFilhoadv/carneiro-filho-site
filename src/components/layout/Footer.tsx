import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { title: "Início", href: "/" },
    { title: "Serviços", href: "/servicos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Contato", href: "/contato" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Coluna 1: Contato e Unidades */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4 text-white">Canais</h3>
            <div className="space-y-6 text-sm text-gray-400">
              
              {/* Canal de E-mail */}
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-900" /> 
                <a href="mailto:contato@carneirofilho.com.br" className="hover:text-white transition-colors">
                  contato@carneirofilho.com.br
                </a>
              </div>
              
              {/* Unidade Sorocaba - FALE VONO */}
              <div className="flex items-start border-t border-gray-800 pt-4">
                <MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                <div>
                  <span className="font-bold text-gray-300 uppercase block mb-1 text-xs tracking-wider">Unidade Sorocaba (Principal)</span>
                  <p>Edifício Av. Paulista, 9º andar - Campolim</p>
                  <p>Sorocaba/SP</p>
                  <div className="flex items-center mt-2 text-blue-100 font-bold bg-blue-900/30 px-2 py-1 rounded-sm w-fit">
                    <Phone size={14} className="mr-2" />
                    <a href="tel:1521210044" className="hover:text-white">(15) 2121-0044</a>
                  </div>
                </div>
              </div>

              {/* Unidade São Paulo - LINHA VIRTUAL */}
              <div className="flex items-start opacity-70">
                <MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                <div>
                  <span className="font-bold text-gray-300 uppercase block mb-1 text-xs tracking-wider">Unidade Administrativa - SP</span>
                  <p>Av. Brigadeiro Faria Lima, 1811</p>
                  <div className="flex items-center mt-2 text-gray-400 font-medium">
                    <Phone size={12} className="mr-2" />
                    <span>(11) 4210-6194</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
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

          {/* Coluna 3: Institucional */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Institucional</h3>
            <div className="text-gray-400 text-sm space-y-2 bg-gray-800/50 p-6 rounded-sm border border-gray-800 shadow-inner">
              <p className="font-bold text-white uppercase text-xs">Carneiro Filho Sociedade Individual de Advocacia</p>
              <p className="border-b border-gray-700 pb-2">OAB/SP nº 47.631</p>
              <p className="pt-2 text-xs text-gray-500 uppercase font-bold tracking-tighter italic">Responsável Técnico:</p>
              <p className="text-gray-300 font-bold">Francisco de Assis Carneiro Filho</p>
              <p>OAB/SP nº 189.404</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Carneiro Filho Sociedade Individual de Advocacia | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;