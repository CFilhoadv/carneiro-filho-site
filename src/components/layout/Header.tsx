import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importa ícones necessários
import { Instagram, Linkedin, Facebook } from 'lucide-react'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dados das redes sociais (usando os links com a identidade Carneiro Filho Advocacia)
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/carneirofilhoadvocacia", label: "Instagram" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/carneiro-filho-advocacia", label: "LinkedIn" },
    { icon: Facebook, url: "https://www.facebook.com/carneirofilhoadvocacia", label: "Facebook" },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Container principal do cabeçalho */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:py-3">
        
        {/* Bloco esquerdo: Logomarca + Nome do Escritório */}
        <div className="flex flex-col md:flex-row items-center md:justify-start flex-grow md:flex-grow-0">
          <Link to="/" className="flex-shrink-0 mx-auto md:mx-0 md:mr-4">
            {/* LOGOMARCA */}
            <img src="https://i.ibb.co/Rp2GCqKM/logo-carneiro-filho-site.png" alt="Logomarca Carneiro Filho Advocacia" className="w-28 h-auto md:h-16" /> 
          </Link>
          {/* NOME DO ESCRITÓRIO DIGITADO */}
          <span className="font-bold text-xl md:text-2xl ml-0 md:ml-4 mt-2 md:mt-0 text-gray-800">Carneiro Filho Advocacia</span>
        </div>

        {/* Bloco direito: Menu mobile (hamburger) / Menu de Navegação Desktop e Ícones Sociais */}
        <div className="flex items-center"> 
          {/* Menu de Navegação - Desktop (visível apenas em lg) */}
          <nav className="hidden lg:block">
            <ul className="flex justify-center space-x-10">
              <li>
                <Link to="/" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/planejamento-sucessorio" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Planejamento Sucessório
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Contato
                </Link>
            </li>
            </ul>
          </nav>

          {/* Ícones de Redes Sociais - Desktop (visível apenas em lg) */}
          <div className="hidden lg:flex space-x-4 ml-8">
            {socialLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={item.label}
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <item.icon size={24} />
              </a>
            ))}
          </div>

          {/* Menu mobile (hamburger) - visível apenas em telas pequenas */}
          <div className="lg:hidden ml-4"> 
            <button onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile - visível apenas em telas pequenas quando isMobileMenuOpen for true */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-gray-50 border-t border-gray-200 py-3">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Início
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/planejamento-sucessorio" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Planejamento Sucessório
              </Link>
            </li>
            <li>
              <Link to="/servicos" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/cursos" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Contato
              </Link>
            </li>
          </ul>

          {/* Ícones de Redes Sociais - Mobile */}
          <div className="flex justify-center mt-6 space-x-6">
            {socialLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={item.label}
                onClick={toggleMobileMenu} // Fecha o menu ao clicar
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <item.icon size={28} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;