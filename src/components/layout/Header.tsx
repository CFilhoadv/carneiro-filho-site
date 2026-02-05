import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react';
import headerLogo from '../../assets/images/logo_carneiro_filho_header.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/carneirofilhoadvocacia", label: "Instagram" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/carneiro-filho-advocacia", label: "LinkedIn" },
    { icon: Facebook, url: "https://www.facebook.com/carneirofilhoadvocacia", label: "Facebook" },
  ];

  const navLinks = [
    { title: "Início", href: "/" },
    { title: "Quem Somos", href: "/quem-somos" },
    { title: "Serviços", href: "/servicos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Contato", href: "/contato" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 h-20 md:h-24">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Link da Logo com preenchimento vertical mínimo para maximizar a imagem */}
        <Link to="/" className="h-full py-0.5 flex items-center">
          <img 
            src={headerLogo} 
            alt="Carneiro Filho Advocacia" 
            className="h-20 md:h-22 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className={`text-[14px] uppercase tracking-[0.15em] font-bold transition-colors ${
                      location.pathname === link.href ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4 border-l border-gray-200 pl-6 h-6">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <button className="lg:hidden text-blue-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-6 px-4 absolute w-full left-0 shadow-xl">
          <ul className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block text-blue-900 font-bold uppercase tracking-widest text-sm"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-8 pt-6 border-t border-gray-100">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                <social.icon size={26} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;