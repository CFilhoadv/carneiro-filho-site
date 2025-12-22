import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* 1. FAIXA INSTITUCIONAL CURTA (H2 para conformidade hierárquica) */}
      <section className="bg-gray-50 py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Carneiro Filho Advocacia
          </h2>
          <p className="text-xs md:text-sm text-blue-900 font-semibold tracking-[0.2em] uppercase mt-1">
            Soluções Patrimoniais, Sucessórias e Empresariais
          </p>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO (Texto amplo e institucionalizado) */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            O escritório Carneiro Filho Advocacia oferece assessoria jurídica técnica e personalizada, voltada à solução responsável de demandas patrimoniais, familiares e empresariais, com rigor técnico e transparência em todas as etapas do atendimento.
          </p>
        </div>
      </section>

      {/* 3. ACESSO ÀS ÁREAS E PLANEJAMENTO (Links de direcionamento) */}
      <section className="py-10 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Atuação Jurídica</h2>
              <p className="text-gray-600 mb-3 text-sm">Contencioso e consultoria em demandas cíveis, empresariais, fiscais e trabalhistas.</p>
              <Link to="/servicos" className="text-blue-900 font-bold hover:underline">
                Acesse as Áreas de Atuação →
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-50">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Planejamento Sucessório</h2>
              <p className="text-gray-600 mb-3 text-sm">Área específica dedicada à organização antecipada da transmissão patrimonial e estruturas societárias.</p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold hover:underline">
                Conheça os Instrumentos Jurídicos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMA DE ATENDIMENTO */}
      <section className="py-10 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Procedimento de Atendimento</h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>1. Encaminhamento de informações preliminares;</li>
            <li>2. Avaliação técnica da demanda;</li>
            <li>3. Agendamento do atendimento jurídico especializado.</li>
          </ul>
        </div>
      </section>

      {/* 5. CTA FINAL DISCRETO E INSTITUCIONAL */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-blue-800 transition-colors text-sm uppercase tracking-widest"
          >
            Análise Preliminar
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;