import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HoldingStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase">Holding Familiar</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase text-center">Instrumentos de Planejamento Sucessório</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>A denominada "Holding Familiar" consiste na constituição de uma pessoa jurídica para a centralização e gestão do patrimônio de uma família.</p>
            <div className="pt-4 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Objetivos e Funcionamento</h2>
              <p>Os bens da família são integralizados ao capital social da empresa. A transmissão aos herdeiros ocorre mediante doação de quotas com reserva de usufruto.</p>
            </div>
            <div className="pt-4 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Aspectos Relevantes</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Gestão Centralizada:</strong> Facilita a administração de múltiplos ativos.</li>
                <li><strong>Prevenção de Conflitos:</strong> Auxilia na governança familiar.</li>
                <li><strong>Eficiência Sucessória:</strong> Evita ou simplifica o inventário judicial.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-colors mb-6">
              Análise Preliminar
            </Link>
            <br />
            <Link to="/planejamento-sucessorio" className="text-blue-900 hover:underline font-medium">← Voltar para Planejamento Sucessório</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HoldingStaging;