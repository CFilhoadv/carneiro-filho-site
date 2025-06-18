import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_carneiro_filho.png';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Container principal do cabeçalho - Usa flexbox e permite quebra de linha */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">

          {/* Bloco esquerdo: Logo e Informações de Contato */}
          {/* Em mobile (até md), eles se comportam como coluna, centralizados. Em md+, como linha. */}
          <div className="flex flex-col md:flex-row items-center md:items-start flex-grow md:flex-grow-0 mb-4 md:mb-0">
            <Link to="/" className="flex-shrink-0 md:mr-4"> {/* md:mr-4 para espaçamento em desktop */}
              <img src={logo} alt="Carneiro Filho Advocacia" className="h-20 md:h-40" />
            </Link>

            {/* Informações de contato */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-4 md:py-2">
              <div className="flex items-center justify-center text-green-600 mb-1 whitespace-nowrap">
                <FaWhatsapp className="mr-2" />
                <span className="text-base font-medium">(11) 4210-6194</span>
              </div>
              <div className="flex items-center justify-center text-blue-600">
                <AiOutlineMail className="mr-2" />
                <span className="text-sm break-all md:break-normal">contato@carneirofilho.com.br</span>
              </div>
            </div>
          </div>

          {/* Bloco direito: Redes Sociais e Menu mobile (hamburger) */}
          {/* Em mobile, esses dois elementos (redes e hambúrguer) estarão lado a lado, justificados à direita. */}
          {/* flex-grow para que ocupe o espaço restante e empurre para a direita. */}
          <div className="flex items-center justify-center md:justify-end flex-grow">
            {/* Ícones de Redes Sociais */}
            {/* Adicionei 'mr-auto' para empurrar as redes sociais para a esquerda se houver espaço no mobile, antes do hambúrguer. */}
            {/* Em telas md+, ele será 'mr-4' conforme estava. */}
            <div className="flex items-center space-x-3 mr-auto md:mr-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <FaLinkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <FaYoutube size={20} />
              </a>
            </div>

            {/* Menu mobile (hamburger) - visível apenas em telas pequenas */}
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Navegação - Desktop (visível em lg) e Mobile (condicional) */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Menu principal - visível apenas em telas grandes (lg) */}
          <nav className="hidden lg:block py-3">
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

          {/* Menu mobile - visível apenas em telas pequenas (lg:hidden) quando isMobileMenuOpen for true */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-3">
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
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;