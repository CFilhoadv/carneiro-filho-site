import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ClipboardCheck } from 'lucide-react';

const AbipStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* 1. Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            ABIP – Administração de Bens Imóveis Próprios
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* 2. Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Estrutura Patrimonial Imobiliária)
            </p>

            <p>
              A ABIP é uma estrutura jurídica voltada à organização e à gestão da atividade imobiliária própria, reunindo imóveis destinados à locação ou exploração patrimonial sob uma única pessoa jurídica.
            </p>

            <p>
              A adoção desse modelo deve ser precedida de análise comparativa entre a tributação da pessoa física e a tributação da pessoa jurídica (<strong>lucro presumido</strong>), avaliando base de cálculo, alíquotas e impactos financeiros conforme a realidade patrimonial.
            </p>

            <p>
              Esta estrutura permite maior organização administrativa e separação entre a pessoa física e a atividade imobiliária, desde que estruturada dentro dos limites legais, tributários e contábeis aplicáveis.
            </p>

            <div className="bg-blue-50 p-5 md:p-6 border-l-4 border-blue-900 text-sm md:text-base mt-8 italic text-blue-900 shadow-sm">
              <strong>⚠️ Observação relevante:</strong> Há discussões e possíveis mudanças legislativas que podem impactar a tributação de rendimentos distribuídos por pessoas jurídicas à pessoa física. Esse fator deve ser considerado na análise de viabilidade da estrutura.
            </div>

            {/* 3. Seção Como Funciona */}
            <div className="mt-12 md:mt-16 bg-gray-50 p-8 border border-gray-100 rounded-sm text-left">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Como funciona</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-sm text-gray-700">Você inicia o processo preenchendo o diagnóstico online abaixo.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                  <p className="text-sm text-gray-700">Fazemos uma triagem e uma análise do cenário familiar/patrimonial com base nos dados enviados.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                  <p className="text-sm text-gray-700">Agendamos a reunião para indicar o caminho jurídico adequado e os próximos passos.</p>
                </div>
              </div>
            </div>

            {/* 4. CTA ÚNICO DE CONVERSÃO */}
            <div className="mt-12 md:mt-16 pt-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-6 uppercase tracking-widest">Deseja analisar seu patrimônio?</h3>
              <Link
                to="/diagnostico-planejamento-sucessorio"
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-all shadow-lg"
              >
                <ClipboardCheck size={20} className="mr-2" /> Iniciar Diagnóstico Online
              </Link>
            </div>

            {/* 5. Navegação Interna */}
            <div className="mt-12 flex flex-col items-center space-y-4 text-center">
              <Link
                to="/planejamento-sucessorio"
                className="text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline flex items-center"
              >
                ← Voltar para Planejamento Sucessório
              </Link>
              <Link
                to="/servicos"
                className="text-gray-400 hover:text-gray-600 font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all"
              >
                Ver todos os serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AbipStaging;