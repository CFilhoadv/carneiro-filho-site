import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo (posição 0, 0) em cada mudança de rota
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada visual
};

export default ScrollToTop;