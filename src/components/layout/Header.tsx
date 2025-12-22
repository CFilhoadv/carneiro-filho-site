import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react';
import logoImg from '../../assets/images/logo_carneiro_filho.webp';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/carneirofilhoadvocacia", label: "Instagram" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/carneiro-filho-advocacia", label: "LinkedIn" },
    { icon: Facebook, url: "https://www.facebook.com/carneirofilhoadvocacia", label: "Facebook" },
  ];

  const navLinks = [
    { title: "Início", href: "/" },
    { title: "Quem Somos", href: "/quem-somos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Serviços", href: "/servicos" },
    { title: "Contato", href: "/contato" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        
        {/* Logomarca Institucional - Nome já incluso no arquivo */}
        <Link to="/" className="flex items-center h-full py-2">
          <img 
            src={logoImg} 
            alt="Carneiro Filho Advocacia" 
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Navegação e Redes Sociais Desktop */}
        <div className="hidden lg:flex items-center space-x-6 h-full">
          <nav className="h-full flex items-center">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
                      location.pathname === link.href ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900'
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3 border-l border-gray-200 pl-6 h-6">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Botão Mobile */}
        <button className="lg:hidden text-blue-900" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile com Redes Sociais */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  onClick={toggleMobileMenu}
                  className="block text-blue-900 font-bold uppercase tracking-widest text-xs"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-5 mt-6 pt-4 border-t border-gray-100">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;