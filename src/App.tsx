import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import PlanejamentoSucessorioPage from './pages/PlanejamentoSucessorioPage';
import ServicosPage from './pages/ServicosPage';
import CursosPage from './pages/CursosPage';
import ContatoPage from './pages/ContatoPage';
import ReformaTributariaParte1Page from './pages/ReformaTributariaParte1Page';
import ReformaTributariaParte2Page from './pages/ReformaTributariaParte2Page';
import HoldingFamiliarReformaTributariaPage from './pages/HoldingFamiliarReformaTributariaPage'; // NOVO: Importa a página da Publicação 3
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
        {/* Rota para a Publicação 1 */}
        <Route path="/informativos/reforma-tributaria-parte-1" element={<ReformaTributariaParte1Page />} /> 
        {/* Rota para a Publicação 2 */}
        <Route path="/informativos/reforma-tributaria-parte-2" element={<ReformaTributariaParte2Page />} />
        {/* NOVO: Rota para a Publicação 3 */}
        <Route path="/informativos/holding-familiar-reforma-tributaria" element={<HoldingFamiliarReformaTributariaPage />} />
      </Routes>
    </Router>
  );
}

export default App;