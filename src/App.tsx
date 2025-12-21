import { Routes, Route } from 'react-router-dom';

// Páginas Originais (Produção)
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

// Páginas de Staging (Novas Versões)
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging';
import DoacaoStaging from './pages/DoacaoStaging';
import TestamentosStaging from './pages/TestamentosStaging';

function App() {
  return (
    <Routes>
      {/* Rotas Atuais de Produção */}
      <Route path="/" element={<HomePage />} />
      <Route path="/quem-somos" element={<QuemSomosPage />} />
      <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
      <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
      
      {/* Manutenção das Subpágina Originais */}
      <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
      <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
      <Route path="/inventarios" element={<InventarioPage />} />
      <Route path="/testamentos" element={<TestamentoPage />} />
      <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} />

      {/* Ambiente de Staging (Validação) */}
      <Route path="/home-staging" element={<HomeStaging />} />
      <Route path="/quem-somos-staging" element={<QuemSomosStaging />} />
      <Route path="/servicos-staging" element={<ServicosStaging />} />
      <Route path="/planejamento-sucessorio-staging" element={<PlanejamentoSucessorioStaging />} />
      <Route path="/holding-staging" element={<HoldingStaging />} />
      <Route path="/doacao-staging" element={<DoacaoStaging />} />
      <Route path="/testamentos-staging" element={<TestamentosStaging />} />
    </Routes>
  );
}

export default App;