import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import CursosPage from './pages/CursosPage';
import ContatoPage from './pages/ContatoPage';
import ReformaTributariaParte1Page from './pages/ReformaTributariaParte1Page';
import ReformaTributariaParte2Page from './pages/ReformaTributariaParte2Page';
import HoldingFamiliarReformaTributariaPage from './pages/HoldingFamiliarReformaTributariaPage';
import PoliticaDePrivacidadePage from './pages/PoliticaDePrivacidadePage';
// **** IMPORTAÇÕES DE TODAS AS PÁGINAS DE CONTEÚDO DE PLANEJAMENTO SUCESSÓRIO ****
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
// ********************************************************************************
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        {/* Rotas para as Publicações de Informativos */}
        <Route path="/informativos/reforma-tributaria-parte-1" element={<ReformaTributariaParte1Page />} />
        <Route path="/informativos/reforma-tributaria-parte-2" element={<ReformaTributariaParte2Page />} />
        <Route path="/informativos/holding-familiar-reforma-tributaria" element={<HoldingFamiliarReformaTributariaPage />} />
        {/* Rota para a Página de Política de Privacidade */}
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidadePage />} />
        {/* **** ROTAS PARA TODAS AS PÁGINAS DE CONTEÚDO DE PLANEJAMENTO SUCESSÓRIO **** */}
        <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
        <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
        <Route path="/inventarios" element={<InventarioPage />} /> {/* ALTERADO: de /inventario para /inventarios */}
        <Route path="/testamentos" element={<TestamentoPage />} /> {/* ALTERADO: de /testamento para /testamentos */}
        <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} /> {/* ALTERADO: de /administradora-imoveis para /administradoras-de-bens-proprios */}
        {/* ************************************************************************** */}
      </Routes>
    </Router>
  );
}

export default App;