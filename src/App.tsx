import { Routes, Route, Navigate } from 'react-router-dom';

// Importação do Componente de Scroll
import ScrollToTop from './components/ScrollToTop';

// Componentes Consolidados (Produção)
import HomeStaging from './pages/HomeStaging'; 
import QuemSomosStaging from './pages/QuemSomosStaging';
import ServicosStaging from './pages/ServicosStaging';
import PlanejamentoSucessorioStaging from './pages/PlanejamentoSucessorioStaging';
import HoldingStaging from './pages/HoldingStaging';
import DoacaoStaging from './pages/DoacaoStaging';
import TestamentosStaging from './pages/TestamentosStaging';
import AbipStaging from './pages/AbipStaging';
import InventarioPage from './pages/InventarioPage';
import ContatoStaging from './pages/ContatoStaging';

// NOVA ROTA: Hub de Parcerias Estratégicas (Arquitetura 2026)
import ParceriasPage from './pages/ParceriasPage';

// ROTA: Domine a Reforma Tributária
import DomineAReformaTributariaPage from './pages/domine-a-reforma-tributaria';

// NOVA ROTA: Camada II - Parceria Estratégica com Contabilidades
import ParceriaContabil from './pages/ParceriaContabil';

// NOVO FUNIL B2C 2026: Diagnóstico Inicial de Planejamento Sucessório
import DiagnosticoSucessorioPage from './pages/DiagnosticoSucessorioPage';

// NOVO RECURSO: Cartão Digital de Visitas (Fev/2026)
import CartaoDigital from './pages/CartaoDigital';

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Rotas Definitivas de Produção */}
        <Route path="/" element={<HomeStaging />} />
        <Route path="/quem-somos" element={<QuemSomosStaging />} />
        <Route path="/servicos" element={<ServicosStaging />} />
        <Route path="/contato" element={<ContatoStaging />} />
        
        <Route path="/domine-a-reforma-tributaria" element={<DomineAReformaTributariaPage />} />
        
        {/* HUB DE PARCERIAS */}
        <Route path="/parcerias" element={<ParceriasPage />} />
        
        {/* Rota para Contabilidades */}
        <Route path="/parceria-contabil" element={<ParceriaContabil />} />

        {/* FUNIL DE CAPTAÇÃO E CARTÃO DIGITAL */}
        <Route path="/diagnostico-planejamento-sucessorio" element={<DiagnosticoSucessorioPage />} />
        <Route path="/cartao-digital" element={<CartaoDigital />} />

        {/* Hierarquia Consolidada: Planejamento Sucessório */}
        <Route path="/planejamento-sucessorio" element={<PlanejamentoSucessorioStaging />} />
        <Route path="/planejamento-sucessorio/holding" element={<HoldingStaging />} />
        <Route path="/planejamento-sucessorio/doacao" element={<DoacaoStaging />} />
        <Route path="/planejamento-sucessorio/testamentos" element={<TestamentosStaging />} />
        <Route path="/planejamento-sucessorio/abip" element={<AbipStaging />} />
        <Route path="/planejamento-sucessorio/inventario" element={<InventarioPage />} />

        {/* Redirects de Segurança */}
        <Route path="/home-staging" element={<Navigate to="/" replace />} />
        <Route path="/quem-somos-staging" element={<Navigate to="/quem-somos" replace />} />
        <Route path="/servicos-staging" element={<Navigate to="/servicos" replace />} />
        <Route path="/contato-staging" element={<Navigate to="/contato" replace />} />
        <Route path="/planejamento-sucessorio-staging" element={<Navigate to="/planejamento-sucessorio" replace />} />
      </Routes>
    </>
  );
}

export default App;