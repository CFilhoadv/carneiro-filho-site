import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const HoldingStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:1531911432";
  const telSP = "tel:1142106194";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Holding Familiar
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Instrumento de Planejamento Patrimonial e Sucessório)
            </p>
            <p>
              A holding familiar é uma pessoa jurídica constituída com a finalidade de centralizar, organizar e administrar o patrimônio de uma família, como imóveis, participações societárias e investimentos.
            </p>
            <p>
              Por meio dessa estrutura, os bens deixam de estar diretamente vinculados às pessoas físicas e passam a integrar uma organização jurídica única, permitindo maior clareza na gestão patrimonial e na definição de regras familiares (<strong>governança familiar:</strong> conjunto de normas que disciplinam a administração, o controle e a sucessão do patrimônio entre gerações).
            </p>
            <p>
              A holding familiar é utilizada para estruturar a sucessão, organizar a participação dos herdeiros, reduzir conflitos familiares e permitir uma visão integrada dos reflexos patrimoniais, empresariais e tributários das decisões tomadas.
            </p>
            <div className="bg-gray-50 p-5 md:p-6 border-l-4 border-blue-900 text-sm md:text-base mt-8 italic shadow-sm text-justify md:text-left">
              Sua constituição exige análise jurídica, tributária e contábil integrada, considerando riscos, custos de manutenção, impactos sucessórios e compatibilidade com a realidade e os objetivos da família. Não se trata de solução padronizada ou automática.
            </div>

            {/* BLOCO DE ATENDIMENTO PADRONIZADO */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARD SOROCABA - ATENDIMENTO PRESENCIAL */}
                <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-blue-800 pb-2 text-blue-200">Sorocaba • Presencial</h3>
                    <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para análise de viabilidade e estruturação de Holding Familiar.</p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md">
                      <MessageCircle size={16} className="mr-2" /> Iniciar Atendimento Digital
                    </a>
                    <a href={telSorocaba} className="flex items-center justify-center bg-blue-800 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-md border border-blue-400">
                      <Phone size={16} className="mr-2" /> (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* UNIDADE SÃO PAULO - ADMINISTRATIVO (Legibilidade Total) */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-gray-200 pb-2">São Paulo • Administrativo</h3>
                    <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed mb-6 italic">Suporte estratégico e gestão documental para estruturas corporativas.</p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <a href={telSP} className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] border-2 border-blue-900 hover:bg-gray-100 transition-all shadow-sm">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </a>
                    <p className="text-[9px] text-gray-400 uppercase text-center tracking-widest font-bold">Atendimento Administrativo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 text-center">
                <Link to="/planejamento-sucessorio" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                  ← Voltar para Planejamento Sucessório
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HoldingStaging;