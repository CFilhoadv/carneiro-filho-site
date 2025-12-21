import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeStaging from './pages/HomeStaging'; // IMPORTAÇÃO DA NOVA HOME (STAGING)
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';
import QuemSomosPage from './pages/QuemSomosPage';
import CursosPage from './pages/CursosPage';
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';
// IMPORTAÇÃO DA PÁGINA DE VENDAS (APONTANDO PARA O NOME EXATO DO SEU ARQUIVO)
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
      {/* NOVA ROTA CONECTADA */}
      <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
      
      {/* ROTA DE STAGING PARA VALIDAÇÃO DA NOVA HOME */}
      <Route path="/home-staging" element={<HomeStaging />} />
    </Routes>
  );
}

export default App;