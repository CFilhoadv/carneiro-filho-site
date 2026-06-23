import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import '../index.css';

const PlanejamentoSucessorioStaging: React.FC = () => {
  return (
    <MainLayout>
      <main className="w-full max-w-6xl mx-auto px-4 py-8">
        
        {/* HERO */}
        <section className="text-center py-12 bg-gray-50 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-tight mb-4">
            Inteligência Patrimonial e Sucessória
          </h1>
          <p className="text-lg text-gray-700">Preservação de legado e harmonia familiar com segurança jurídica</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-blue-900 border border-gray-100">
            <span>⚖️</span> <span>Atendimento técnico em Sorocaba e região</span>
          </div>
        </section>

        {/* PÚBLICO E DIFERENCIAIS */}
        <section className="py-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Este serviço é para você que:</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3 p-2">🏢 <span>Possui múltiplos imóveis</span></li>
              <li className="flex items-center gap-3 p-2">🏗️ <span>Precisa de sucessão empresarial</span></li>
              <li className="flex items-center gap-3 p-2">👨‍👩‍👧‍👦 <span>Deseja proteger o patrimônio com segurança</span></li>
              <li className="flex items-center gap-3 p-2">📊 <span>Busca eficiência tributária lícita</span></li>
            </ul>
          </div>
          <div className="p-6 border border-blue-900 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Diferencial para alta renda</h3>
            <p className="text-gray-700 leading-relaxed">Abordagem integrada que une Direito e Contabilidade para organização patrimonial e segurança sucessória, buscando alternativas legais para a preservação de ativos.</p>
          </div>
        </section>

        {/* DIFERENCIAIS TÉCNICOS (NOVO BLOCO DE AUTORIDADE) */}
        <section className="py-12 bg-gray-50 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 px-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-bold text-blue-900">Segurança Jurídica</h3>
              <p className="text-sm text-gray-600 mt-2">Proteção em todas as etapas do planejamento.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📋</div>
              <h3 className="font-bold text-blue-900">Análise Tributária</h3>
              <p className="text-sm text-gray-600 mt-2">Estratégias personalizadas e fundamentadas.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-blue-900">Harmonização Familiar</h3>
              <p className="text-sm text-gray-600 mt-2">Plano focado na preservação do legado.</p>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES TÉCNICAS */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-blue-900 uppercase mb-8">Soluções Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/planejamento-sucessorio/doacao" className="p-6 border border-gray-200 hover:border-blue-900 transition-all block rounded-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">DOAÇÃO COM USUFRUTO</h3>
              <p className="text-sm text-gray-600">Antecipação de herança com orientação técnica sobre posse e renda para os pais.</p>
            </a>
            <a href="/planejamento-sucessorio/testamentos" className="p-6 border border-gray-200 hover:border-blue-900 transition-all block rounded-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">TESTAMENTOS</h3>
              <p className="text-sm text-gray-600">Organização da vontade com segurança jurídica e análise de sucessão.</p>
            </a>
            <a href="/planejamento-sucessorio/holding" className="p-6 border border-gray-200 hover:border-blue-900 transition-all block rounded-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">HOLDING FAMILIAR</h3>
              <p className="text-sm text-gray-600">Estruturação para organização de bens e busca por eficiência tributária.</p>
            </a>
            <a href="/planejamento-sucessorio/abip" className="p-6 border border-gray-200 hover:border-blue-900 transition-all block rounded-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">GESTÃO PATRIMONIAL (ABIP)</h3>
              <p className="text-sm text-gray-600">Administração técnica de ativos próprios conforme normas vigentes.</p>
            </a>
            <a href="/planejamento-sucessorio/inventario" className="p-6 border border-gray-200 hover:border-blue-900 transition-all block rounded-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">INVENTÁRIO E PARTILHA</h3>
              <p className="text-sm text-gray-600">Regularização de bens quando não houve planejamento sucessório prévio.</p>
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-12 text-center bg-gray-100 rounded-lg border-l-4 border-blue-900">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Pronto para estruturar seu planejamento?</h2>
          <p className="mb-6 text-gray-700">Agende uma conversa técnica para avaliar seu cenário patrimonial.</p>
          <div className="mb-6">
            <a href="tel:+551531911432" className="text-xl font-bold text-blue-900 underline">(15) 3191-1432</a>
          </div>
          <a href="/diagnostico-planejamento-sucessorio" className="inline-block bg-blue-900 text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition">
            Agendar minha reunião técnica →
          </a>
        </section>

      </main>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;