import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosPage from './pages/QuemSomosPage';
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosPage from './pages/ServicosPage';
import ServicosStaging from './pages/ServicosStaging'; // IMPORTAÇÃO DA NOVA PÁGINA SERVIÇOS
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ContatoPage from './pages/ContatoPage';
import CursosPage from './pages/CursosPage';
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quem-somos" element={<QuemSomosPage />} />
      <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/cursos" element={<CursosPage />} />
      <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
      <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
      <Route path="/inventarios" element={<InventarioPage />} />
      <Route path="/testamentos" element={<TestamentoPage />} />
      <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} />
      <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
      <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
      
      {/* ROTAS DE STAGING PARA VALIDAÇÃO */}
      <Route path="/home-staging" element={<HomeStaging />} />
      <Route path="/quem-somos-staging" element={<QuemSomosStaging />} />
      <Route path="/servicos-staging" element={<ServicosStaging />} />
    </Routes>
  );
}

export default App;