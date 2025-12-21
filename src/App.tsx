import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosPage from './pages/QuemSomosPage';
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosPage from './pages/ServicosPage';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging'; // NOVA IMPORTAÇÃO
import ContatoPage from './pages/ContatoPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

// Outras páginas atuais
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quem-somos" element={<QuemSomosPage />} />
      <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
      <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
      
      {/* MANUTENÇÃO DAS PÁGINAS ORIGINAIS */}
      <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
      <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
      <Route path="/inventarios" element={<InventarioPage />} />
      <Route path="/testamentos" element={<TestamentoPage />} />
      <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} />

      {/* ROTAS DE STAGING PARA VALIDAÇÃO */}
      <Route path="/home-staging" element={<HomeStaging />} />
      <Route path="/quem-somos-staging" element={<QuemSomosStaging />} />
      <Route path="/servicos-staging" element={<ServicosStaging />} />
      <Route path="/planejamento-sucessorio-staging" element={<PlanejamentoSucessorioStaging />} />
      <Route path="/holding-staging" element={<HoldingStaging />} />
    </Routes>
  );
}

export default App;