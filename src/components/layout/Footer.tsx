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
          
          {/* Contato e Unidades */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Contato</h3>
            <div className="space-y-6 text-sm text-gray-400">
              
              {/* Canal de E-mail */}
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-900" /> 
                contato@carneirofilho.com.br
              </div>
              
              {/* Unidade Sorocaba */}
              <div className="flex items-start border-t border-gray-800 pt-4">
                <MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                <div>
                  <span className="font-bold text-gray-300 uppercase block mb-1 text-xs tracking-wider">Unidade de Atendimento - Sorocaba</span>
                  <p>Av. Profa. Izoraida Marques Peres, 256</p>
                  <p>Edifício Av. Paulista, 9º andar - Campolim</p>
                  <p>Sorocaba/SP</p>
                  <div className="flex items-center mt-2 text-blue-900 font-bold">
                    <Phone size={14} className="mr-2" />
                    <span>(15) 2121-0044</span>
                  </div>
                </div>
              </div>

              {/* Unidade São Paulo */}
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                <div>
                  <span className="font-bold text-gray-300 uppercase block mb-1 text-xs tracking-wider">Unidade Administrativa - São Paulo</span>
                  <p>Av. Brigadeiro Faria Lima, 1811 - Conj. 1119</p>
                  <p>Jardim Paulistano, São Paulo/SP</p>
                  <div className="flex items-center mt-2 text-blue-900 font-bold">
                    <Phone size={14} className="mr-2" />
                    <span>(11) 4210-6194</span>
                  </div>
                </div>
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

          {/* Institucional Conforme Diretriz OAB */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest border-l-4 border-blue-900 pl-4">Institucional</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p className="font-bold text-white uppercase">Carneiro Filho Sociedade Individual de Advocacia</p>
              <p>OAB/SP nº 47.631</p>
              <p className="pt-2">Responsável Técnico:</p>
              <p>Francisco de Assis Carneiro Filho</p>
              <p>OAB/SP nº 189.404</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Carneiro Filho Sociedade Individual de Advocacia | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;