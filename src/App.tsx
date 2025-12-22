import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação ajustada para o padrão de componentes
import ScrollToTop from './components/ScrollToTop';

// Componentes Consolidados
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging';
import DoacaoStaging from './pages/DoacaoStaging';
import TestamentosStaging from './pages/TestamentosStaging';
import AbipStaging from './pages/AbipStaging';
import ContatoStaging from './pages/ContatoStaging';

// Outros Componentes
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeStaging />} />
        <Route path="/quem-somos" element={<QuemSomosStaging />} />
        <Route path="/servicos" element={<ServicosStaging />} />
        <Route path="/contato" element={<ContatoStaging />} />
        <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
        <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
        
        <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioStaging />} />
        <Route path="/planejamento-sucessorio/holding" element={<HoldingStaging />} />
        <Route path="/planejamento-sucessorio/doacao" element={<DoacaoStaging />} />
        <Route path="/planejamento-sucessorio/testamentos" element={<TestamentosStaging />} />
        <Route path="/planejamento-sucessorio/abip" element={<AbipStaging />} />

        {/* Redirects */}
        <Route path="/home-staging" element={<Navigate to="/" replace />} />
        <Route path="/quem-somos-staging" element={<Navigate to="/quem-somos" replace />} />
        <Route path="/servicos-staging" element={<Navigate to="/servicos" replace />} />
        <Route path="/contato-staging" element={<Navigate to="/contato" replace />} />
        <Route path="/planejamento-sucessorio-staging" element={<Navigate to="/planejamento-sucessorio" replace />} />
      </Routes>
    </Router>
  );
}

export default App;