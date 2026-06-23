import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ClipboardCheck } from 'lucide-react';

const DoacaoStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Doação com Reserva de Usufruto
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Instrumento de Planejamento Sucessório)
            </p>

            <p>
              A doação com reserva de usufruto é o instrumento jurídico pelo qual uma pessoa transfere a propriedade de um bem aos herdeiros, mantendo para si o direito de uso, administração e percepção dos rendimentos do bem.
            </p>

            <div className="bg-red-50 p-5 md:p-6 border-l-4 border-red-800 italic text-sm md:text-base mt-8 text-red-900 shadow-sm text-justify md:text-left">
              <strong>⚠️ Alerta:</strong> A adoção inadequada desse instrumento deve ser precedida de análise jurídica individualizada, conforme o caso.
            </div>

            {/* Seção Como Funciona */}
            <div className="mt-12 md:mt-16 bg-gray-50 p-8 border border-gray-100 rounded-sm">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6 text-center md:text-left">
                Como funciona
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                    1
                  </span>
                  <p className="text-sm text-gray-700">Você inicia o processo preenchendo o diagnóstico online abaixo.</p>
                </div>

                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                    2
                  </span>
                  <p className="text-sm text-gray-700">
                    Fazemos uma triagem e uma análise do cenário familiar/patrimonial com base nos dados enviados.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                    3
                  </span>
                  <p className="text-sm text-gray-700">
                    Agendamos a reunião para indicar o caminho jurídico adequado e os próximos passos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA ÚNICO DE CONVERSÃO */}
            <div className="mt-12 md:mt-16 pt-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-6 uppercase tracking-widest">Deseja analisar seu patrimônio?</h3>
              <Link
                to="/diagnostico-planejamento-sucessorio"
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-all shadow-lg"
              >
                <ClipboardCheck size={20} className="mr-2" /> Iniciar Diagnóstico Online
              </Link>
            </div>

            {/* Navegação Interna */}
            <div className="mt-12 flex flex-col items-center space-y-4">
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

export default DoacaoStaging;