import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';
import QuemSomosPage from './pages/QuemSomosPage';
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
import AnalisePreliminarPage from './pages/AnalisePreliminarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quem-somos" element={<QuemSomosPage />} />
      <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
      <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
      <Route path="/inventarios" element={<InventarioPage />} />
      <Route path="/testamentos" element={<TestamentoPage />} />
      <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} />
      <Route path="/analise-preliminar" element={<AnalisePreliminarPage />} />
    </Routes>
  );
}

export default App;