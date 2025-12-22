import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dados das redes sociais
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/carneirofilhoadvocacia", label: "Instagram" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/carneiro-filho-advocacia", label: "LinkedIn" },
    { icon: Facebook, url: "https://www.facebook.com/carneirofilhoadvocacia", label: "Facebook" },
  ];

  // Links de navegação consolidados
  const navLinks = [
    { title: "Início", href: "/" },
    { title: "Quem Somos", href: "/quem-somos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Serviços", href: "/servicos" },
    { title: "Contato", href: "/contato" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:py-3">
        
        {/* Logo e Nome */}
        <div className="flex flex-col md:flex-row items-center md:justify-start flex-grow md:flex-grow-0">
          <Link to="/" className="flex-shrink-0 mx-auto md:mx-0 md:mr-4">
            <img src="https://i.ibb.co/Rp2GCqKM/logo-carneiro-filho-site.png" alt="Logomarca Carneiro Filho Advocacia" className="w-28 h-auto md:h-16" /> 
          </Link>
          <span className="font-bold text-xl md:text-2xl ml-0 md:ml-4 mt-2 md:mt-0 text-gray-800 tracking-tight">Carneiro Filho Advocacia</span>
        </div>

        {/* Navegação Desktop */}
        <div className="flex items-center"> 
          <nav className="hidden lg:block">
            <ul className="flex justify-center space-x-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-blue-900 hover:text-blue-700 font-semibold transition-colors uppercase text-sm tracking-wider">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes Sociais Desktop */}
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
                <item.icon size={22} />
              </a>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <div className="lg:hidden ml-4"> 
            <button onClick={toggleMobileMenu} className="text-blue-900 hover:text-blue-700 focus:outline-none transition-transform active:scale-90">
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navegação Mobile */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-6 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  onClick={toggleMobileMenu} 
                  className="text-blue-900 hover:text-blue-700 font-bold transition-colors text-xl uppercase tracking-widest"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes Sociais Mobile */}
          <div className="flex justify-center mt-8 space-x-8">
            {socialLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={item.label}
                onClick={toggleMobileMenu}
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <item.icon size={30} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;