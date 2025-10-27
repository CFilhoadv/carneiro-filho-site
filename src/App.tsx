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
import DoacaoComUsufrutoPage from './pages/DoacaoComUsufrutoPage';
import HoldingFamiliarPage from './pages/HoldingFamiliarPage';
import InventarioPage from './pages/InventarioPage';
import TestamentoPage from './pages/TestamentoPage';
import AdministradoraBensImoveisPage from './pages/AdministradoraBensImoveisPage';
import MidiaPage from './pages/MidiaPage';
import SalesPage from './pages/domine-a-reforma-tributaria';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// NOVO IMPORT: Página Central de Listagem de Informativos
import InformativosPage from './pages/InformativosPage'; // <--- ESTE É O NOVO IMPORT

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/contato" element={<ContatoPage />} />

        {/* ROTA CENTRAL DE LISTAGEM DE INFORMATIVOS */}
        <Route path="/informativos" element={<InformativosPage />} /> {/* <--- ESTA É A NOVA ROTA */}
        
        {/* ROTAS INDIVIDUAIS EXISTENTES (mantidas) */}
        <Route path="/informativos/holding-familiar-reforma-tributaria" element={<HoldingFamiliarReformaTributariaPage />} />
        <Route path="/informativos/reforma-tributaria-parte-1" element={<ReformaTributariaParte1Page />} />
        <Route path="/informativos/reforma-tributaria-parte-2" element={<ReformaTributariaParte2Page />} />

        {/* CORRIGIDO: A rota agora corresponde ao link no menu */}
        <Route path="/domine-a-reforma-tributaria" element={<SalesPage />} />

        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidadePage />} />
        <Route path="/doacao-com-usufruto" element={<DoacaoComUsufrutoPage />} />
        <Route path="/holding-familiar" element={<HoldingFamiliarPage />} />
        <Route path="/inventarios" element={<InventarioPage />} />
        <Route path="/testamentos" element={<TestamentoPage />} />
        <Route path="/administradoras-de-bens-proprios" element={<AdministradoraBensImoveisPage />} />
        <Route path="/midia" element={<MidiaPage />} />

      </Routes>
  );
}

export default App;