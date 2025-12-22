import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HoldingStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            Holding Familiar
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Instrumento de Planejamento Patrimonial e Sucessório)
            </p>
            <p>
              A holding familiar é uma pessoa jurídica constituída com a finalidade de centralizar, administrar e organizar o patrimônio de uma família, como imóveis, participações societárias e investimentos.
            </p>
            <p>
              Por meio desse modelo, os bens deixam de pertencer diretamente às pessoas físicas e passam a integrar a estrutura da empresa, permitindo separação entre patrimônio pessoal e patrimônio organizado (<strong>blindagem patrimonial:</strong> proteção jurídica contra riscos externos, dentro dos limites legais).
            </p>
            <p>
              A holding é indicada para famílias com patrimônio relevante ou atividade empresarial, pois possibilita gestão e governança familiar, planejamento sucessório estruturado, redução de conflitos familiares e organização tributária lícita.
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 text-base mt-8">
              Sua constituição exige análise integrada jurídica, tributária e contábil, considerando riscos, custos de manutenção e compatibilidade com a realidade familiar.
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col items-center gap-8">
              <Link to="/analise-preliminar" className="bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors text-center w-full md:w-auto">
                Encaminhar informações para análise preliminar
              </Link>
              <Link to="/planejamento-sucessorio" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                ← Voltar para Planejamento Sucessório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HoldingStaging;