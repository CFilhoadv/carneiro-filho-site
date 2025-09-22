import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// A importação do logo antigo foi removida, pois usaremos um URL direto
// import logo from '../../assets/images/logo_carneiro_filho.png';
// As importações de ícones de contato e redes sociais foram removidas por não estarem mais em uso no cabeçalho.
// import { FaWhatsapp } from 'react-icons/fa';
// import { AiOutlineMail } from 'react-icons/ai';
// import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Container principal do cabeçalho: Agora com mais py- para espaçamento vertical e alinhamento central */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:py-3"> {/* Ajustado py-2 para py-4 */}
        
        {/* Bloco esquerdo: Logomarca + Nome do Escritório */}
        {/* Em mobile: logo e nome empilhados (flex-col), centralizados. Em md+: lado a lado (flex-row). */}
        <div className="flex flex-col md:flex-row items-center md:justify-start flex-grow md:flex-grow-0">
          <Link to="/" className="flex-shrink-0 mx-auto md:mx-0 md:mr-4">
            {/* LOGOMARCA - Usando o URL direto do Imgbb */}
            {/* Mantido o w-28 para mobile, h-auto para proporção. md:h-16 para desktop. */}
            <img src="https://i.ibb.co/Rp2GCqKM/logo-carneiro-filho-site.png" alt="Logomarca Carneiro Filho Advocacia" className="w-28 h-auto md:h-16" /> 
          </Link>
          {/* NOME DO ESCRITÓRIO DIGITADO */}
          {/* Adicionado um pouco de mt-2 em mobile para espaçamento do logo */}
          <span className="font-bold text-xl md:text-2xl ml-0 md:ml-4 mt-2 md:mt-0 text-gray-800">Carneiro Filho Advocacia</span>
        </div>

        {/* Bloco direito: Menu mobile (hamburger) / Menu de Navegação Desktop */}
        {/* items-center para alinhar o hamburger verticalmente com o logo/nome */}
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
              {/* NOVO LINK ADICIONADO AQUI */}
              <li>
                <Link to="/domine-a-reforma-tributaria" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Curso Reforma Tributária
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Menu mobile (hamburger) - visível apenas em telas pequenas */}
          {/* ml-4 para espaçamento à esquerda do hamburger em mobile, se necessário */}
          <div className="lg:hidden ml-4"> 
            <button onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile - visível apenas em telas pequenas (lg:hidden) quando isMobileMenuOpen for true */}
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
            {/* NOVO LINK ADICIONADO AQUI TAMBÉM */}
            <li>
              <Link to="/domine-a-reforma-tributaria" onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 font-medium transition-colors text-lg">
                Curso Reforma Tributária
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
    </header>
  );
};

export default Header;
