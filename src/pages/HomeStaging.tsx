import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* HERO INSTITUCIONAL: Sem imagens, foco tipográfico e fundo sólido */}
      <section className="bg-gray-900 py-16 border-b border-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              CARNEIRO FILHO ADVOCACIA
            </h1>
            <div className="h-1 w-20 bg-blue-900 mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide uppercase">
              Soluções Patrimoniais, Sucessórias e Empresariais
            </p>
          </div>
        </div>
      </section>

      {/* 1. APRESENTAÇÃO INSTITUCIONAL */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.3em] mb-4">Apresentação</h2>
          <p className="text-gray-700 text-xl leading-relaxed text-justify">
            O escritório Carneiro Filho Advocacia oferece assessoria especializada com foco na preservação patrimonial e organização sucessória, pautando-se pelo rigor técnico e pela transparência em todas as etapas do atendimento.
          </p>
        </div>
      </section>

      {/* 2. ÁREAS DE ATUAÇÃO (Direcionamento para Serviços) */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.3em] mb-8">Atuação Especializada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contencioso e Consultoria</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Atuação em demandas cíveis, empresariais, fiscais e trabalhistas, com ênfase em casos de elevada complexidade fática e processual.</p>
              <Link to="/servicos" className="text-blue-900 text-xs font-bold uppercase tracking-widest hover:underline">Ver Serviços →</Link>
            </div>
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Família e Sucessões</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Gestão de inventários judiciais e extrajudiciais, partilhas e demais demandas decorrentes do Direito das Sucessões.</p>
              <Link to="/servicos" className="text-blue-900 text-xs font-bold uppercase tracking-widest hover:underline">Detalhes da Atuação →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLANEJAMENTO SUCESSÓRIO (Diferencial Técnico) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900 p-8 md:p-12 text-white">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Diferencial</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Planejamento Sucessório e Patrimonial</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Estruturação de soluções jurídicas preventivas, como Holdings e ABIP, visando a organização antecipada da transmissão de bens e a redução de conflitos familiares.
            </p>
            <Link 
              to="/planejamento-sucessorio" 
              className="inline-block border border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all"
            >
              Conhecer Instrumentos
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FORMA DE ATENDIMENTO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.3em] mb-6 text-center">Procedimento de Atendimento</h2>
          <div className="text-center space-y-4">
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              O atendimento é realizado de forma organizada. Adotamos um fluxo de análise prévia de cada demanda para garantir a viabilidade e a qualidade técnica da assessoria.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL DISCRETO */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/analise-preliminar" 
            className="text-blue-900 font-bold text-lg border-b-2 border-blue-900 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all"
          >
            Encaminhar informações para análise preliminar
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;