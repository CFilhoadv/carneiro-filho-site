import { Routes, Route } from 'react-router-dom';

// Páginas Originais e Staging Consolidadas
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

// Componentes de Staging
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging';
import DoacaoStaging from './pages/DoacaoStaging';
import TestamentosStaging from './pages/TestamentosStaging';
import AbipStaging from './pages/AbipStaging';
import ContatoStaging from './pages/ContatoStaging';

function App() {
  return (
    <Routes>
      {/* Rotas de Produção Atuais */}
      <Route path="/" element={<HomePage />} />
      <Route path="/quem-somos" element={<QuemSomosPage />} />
      <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
      <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
      
      {/* Ambiente de Staging (Validação) */}
      <Route path="/home-staging" element={<HomeStaging />} />
      <Route path="/quem-somos-staging" element={<QuemSomosStaging />} />
      <Route path="/servicos-staging" element={<ServicosStaging />} />
      <Route path="/contato-staging" element={<ContatoStaging />} />
      
      {/* Hierarquia de Planejamento Sucessório Staging */}
      <Route path="/planejamento-sucessorio-staging" element={<PlanejamentoSucessorioStaging />} />
      <Route path="/planejamento-sucessorio/holding" element={<HoldingStaging />} />
      <Route path="/planejamento-sucessorio/doacao" element={<DoacaoStaging />} />
      <Route path="/planejamento-sucessorio/testamentos" element={<TestamentosStaging />} />
      <Route path="/planejamento-sucessorio/abip" element={<AbipStaging />} />
    </Routes>
  );
}

export default App;