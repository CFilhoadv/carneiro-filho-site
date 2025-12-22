import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Links do Menu Principal atualizados para as rotas definitivas
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Quem Somos", href: "/quem-somos" },
    { title: "Serviços", href: "/servicos" },
    { title: "Planejamento Sucessório", href: "/planejamento-sucessorio" },
    { title: "Contato", href: "/contato" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Barra de Navegação */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tighter">CARNEIRO FILHO</span>
              <span className="text-xs text-blue-900 font-medium tracking-[0.2em] uppercase">Advocacia</span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                    location.pathname === link.href ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Botão Mobile */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-base font-medium text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Conteúdo da Página */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Rodapé Institucional */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-900 pl-4 uppercase tracking-widest">Escritório</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Advocacia focada em soluções patrimoniais, sucessórias e empresariais, com atendimento pautado na técnica e transparência.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-900 pl-4 uppercase tracking-widest">Navegação</h3>
              <ul className="space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-900 pl-4 uppercase tracking-widest">Contato</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center"><Phone size={16} className="mr-3 text-blue-900" /> (11) 4210-6194</div>
                <div className="flex items-center"><Mail size={16} className="mr-3 text-blue-900" /> contato@carneirofilho.com.br</div>
                <div className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-blue-900" /> 
                  Av. Brigadeiro Faria Lima, 1811 - 1119<br />Jardim Paulistano, São Paulo/SP
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Carneiro Filho Advocacia | Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;