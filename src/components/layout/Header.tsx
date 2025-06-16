import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_carneiro_filho.png';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Cabeçalho em linha única conforme site de referência */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo à esquerda com telefone e e-mail centralizados à esquerda */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Carneiro Filho Advocacia" className="h-40" />
            </Link>
            
            {/* Informações de contato centralizadas à esquerda, próximas ao logotipo */}
            <div className="flex flex-col ml-4 py-2">
              <div className="flex items-center text-green-600 mb-1">
                <FaWhatsapp className="mr-2" />
                <span className="text-base font-medium">(11) 4210-6194</span>
              </div>
              <div className="flex items-center text-blue-600">
                <AiOutlineMail className="mr-2" />
                <span className="text-sm">contato@carneirofilho.com.br</span>
              </div>
            </div>
          </div>

          {/* Área direita - Redes Sociais */}
          <div className="flex items-center space-x-6">
            {/* Ícones de Redes Sociais */}
            <div className="flex items-center space-x-3">
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

            {/* Menu mobile (hamburger) */}
            <div className="lg:hidden">
              <button className="text-blue-900 hover:text-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Navegação */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
