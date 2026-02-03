import { Routes, Route, Navigate } from 'react-router-dom';

// Importação do Componente de Scroll
import ScrollToTop from './components/ScrollToTop';

// Componentes Consolidados (Produção)
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging';
import DoacaoStaging from './pages/DoacaoStaging';
import TestamentosStaging from './pages/TestamentosStaging';
import AbipStaging from './pages/AbipStaging';
import ContatoStaging from './pages/ContatoStaging';

// Outros Componentes Necessários
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

function App() {
  return (
    <>
      {/* ScrollToTop agora funciona corretamente consumindo o Router do main.tsx */}
      <ScrollToTop />

      <Routes>
        {/* Rotas Definitivas de Produção */}
        <Route path="/" element={<HomeStaging />} />
        <Route path="/quem-somos" element={<QuemSomosStaging />} />
        <Route path="/servicos" element={<ServicosStaging />} />
        <Route path="/contato" element={<ContatoStaging />} />
        
        {/* ROTA INATIVADA - Para futura reativação, basta remover o comentário abaixo */}
        {/* <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} /> */}
        
        <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
        
        {/* Hierarquia Consolidada: Planejamento Sucessório */}
        <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioStaging />} />
        <Route path="/planejamento-sucessorio/holding" element={<HoldingStaging />} />
        <Route path="/planejamento-sucessorio/doacao" element={<DoacaoStaging />} />
        <Route path="/planejamento-sucessorio/testamentos" element={<TestamentosStaging />} />
        <Route path="/planejamento-sucessorio/abip" element={<AbipStaging />} />

        {/* Redirects de Segurança */}
        <Route path="/home-staging" element={<Navigate to="/" replace />} />
        <Route path="/quem-somos-staging" element={<Navigate to="/quem-somos" replace />} />
        <Route path="/servicos-staging" element={<Navigate to="/servicos" replace />} />
        <Route path="/contato-staging" element={<Navigate to="/contato" replace />} />
        <Route path="/planejamento-sucessorio-staging" element={<Navigate to="/planejamento-sucessorio" replace />} />
      </Routes>
    </>
  );
}

export default App;