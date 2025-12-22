import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const AbipStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            ABIP – Administração de Bens Imóveis Próprios
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Estrutura Patrimonial Imobiliária)
            </p>
            <p>
              A ABIP é uma estrutura jurídica voltada à organização e à gestão da atividade imobiliária própria, reunindo imóveis destinados à locação ou exploração patrimonial sob uma única pessoa jurídica.
            </p>
            <p>
              A adoção desse modelo não depende do volume do patrimônio, mas da análise comparativa entre a tributação da pessoa física (<strong>imposto de renda progressivo</strong>) e a tributação da pessoa jurídica (<strong>lucro presumido</strong>), avaliando base de cálculo, alíquotas e impactos financeiros ao longo do tempo.
            </p>
            <p>
              A ABIP permite maior organização administrativa, controle de receitas e despesas e separação entre a pessoa física e a atividade imobiliária, desde que estruturada dentro dos limites legais, tributários e contábeis aplicáveis.
            </p>
            <div className="bg-blue-50 p-6 border-l-4 border-blue-900 text-base mt-8 italic text-blue-900">
              <strong>⚠️ Observação relevante:</strong> A partir de 2026, haverá incidência de imposto de renda sobre determinados rendimentos distribuídos por pessoas jurídicas à pessoa física, observados limites legais de isenção. Esse fator deve ser considerado na análise de viabilidade da estrutura.
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

export default AbipStaging;