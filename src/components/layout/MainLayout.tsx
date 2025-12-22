import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header oficial com Logomarca e Redes Sociais */}
      <Header />
      
      {/* Conteúdo dinâmico da página */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer oficial consolidado */}
      <Footer />
    </div>
  );
};

export default MainLayout;