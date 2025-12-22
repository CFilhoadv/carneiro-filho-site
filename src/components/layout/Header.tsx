import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* LOGOMARCA RESTAURADA: Arquivo de imagem institucional */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="https://i.ibb.co/Rp2GCqKM/logo-carneiro-filho-site.png" 
              alt="Logo Carneiro Filho Advocacia" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            {/* O nome agora faz parte da identidade visual integrada */}
            <div className="flex flex-col border-l border-gray-200 pl-4">
              <span className="font-bold text-lg md:text-xl text-gray-800 leading-none tracking-tight">CARNEIRO FILHO</span>
              <span className="text-[10px] md:text-xs text-blue-900 font-semibold tracking-[0.2em] uppercase">Advocacia</span>
            </div>
          </Link>
        </div>

        {/* NAVEGAÇÃO E REDES SOCIAIS DESKTOP */}
        <div className="hidden lg:flex items-center space-x-8"> 
          <nav>
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-900 font-semibold text-xs uppercase tracking-widest transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ÍCONES SOCIAIS REINTRODUZIDOS: Estilo monocromático discreto */}
          <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
            {socialLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-900 transition-colors"
                aria-label={item.label}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* BOTÃO MOBILE */}
        <div className="lg:hidden"> 
          <button onClick={toggleMobileMenu} className="text-blue-900 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-6">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  onClick={toggleMobileMenu} 
                  className="text-blue-900 font-bold uppercase tracking-widest"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-8 space-x-6">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                <item.icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;