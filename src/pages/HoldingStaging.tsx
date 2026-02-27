import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const HoldingStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:+551531911432";
  const telSP = "tel:+551142106194";

  return (
    <MainLayout>
      {/* 1. Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Holding Familiar
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* 2. Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Instrumento de Planejamento Patrimonial e Sucessório)
            </p>
            <p>
              A holding familiar é uma pessoa jurídica constituída com a finalidade de organizar e administrar o patrimônio de uma família, como imóveis, participações societárias e investimentos.
            </p>
            <p>
              Por meio dessa estrutura, busca-se maior clareza na gestão patrimonial e na definição de regras de <strong>governança familiar</strong>, disciplinando a administração e a sucessão do patrimônio entre gerações de forma estruturada.
            </p>
            <p>
              Esse instrumento é utilizado avaliando alternativas para organizar a participação dos herdeiros e permitir uma visão integrada dos reflexos patrimoniais e tributários, sempre respeitando os limites legais vigentes.
            </p>
            <div className="bg-gray-50 p-5 md:p-6 border-l-4 border-blue-900 text-sm md:text-base mt-8 italic shadow-sm text-justify md:text-left text-blue-900">
              Sua constituição exige análise jurídica, tributária e contábil integrada, considerando riscos e a realidade de cada família. Não se trata de uma solução padronizada ou automática.
            </div>

            {/* 3. Seção Como funciona (Padronizada Item 3.5) */}
            <div className="mt-12 md:mt-16 bg-gray-50 p-8 border border-gray-100 rounded-sm text-left">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Como funciona</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-sm text-gray-700">Você inicia o contato pelo WhatsApp.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                  <p className="text-sm text-gray-700">Fazemos uma triagem e uma análise do cenário familiar/patrimonial.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                  <p className="text-sm text-gray-700">Indicamos o caminho jurídico adequado e os próximos passos.</p>
                </div>
              </div>
            </div>

            {/* 4. Bloco de Atendimento Padronizado */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARD SOROCABA E REGIÃO */}
                <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-1 border-blue-800 pb-1 text-blue-200 text-left">Sorocaba e região • Atendimento digital e presencial</h3>
                    <p className="text-blue-100 text-[10px] md:text-xs leading-relaxed mb-6 italic opacity-80 text-left">Orientação técnica e análise individualizada conforme o caso.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md group">
                      <div className="flex items-center">
                        <MessageCircle size={16} className="mr-2" /> Iniciar Atendimento Digital
                      </div>
                    </a>
                    {/* Microcopy de triagem item 2.c */}
                    <p className="text-[9px] text-blue-200 text-center leading-tight px-2">
                      Para agilizar, informe sua cidade e descreva brevemente seu objetivo. Se houver, envie foto do documento/intimação.
                    </p>
                    <a href={telSorocaba} className="flex items-center justify-center bg-blue-800 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-md border border-blue-400">
                      <Phone size={16} className="mr-2" /> (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* UNIDADE SÃO PAULO */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-gray-200 pb-2 text-left">São Paulo • Administrativo</h3>
                    <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed mb-6 italic text-left">Suporte estratégico e gestão documental para estruturas corporativas.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={telSP} className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] border-2 border-blue-900 hover:bg-gray-100 transition-all shadow-sm">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </a>
                    <p className="text-[9px] text-gray-400 uppercase text-center tracking-widest font-bold">Atendimento Administrativo</p>
                  </div>
                </div>
              </div>

              {/* 5. Navegação Interna */}
              <div className="mt-12 flex flex-col items-center space-y-4 text-center">
                <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline flex items-center">
                  ← Voltar para Planejamento Sucessório
                </Link>
                <Link to="/servicos" className="text-gray-400 hover:text-gray-600 font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all">
                  Ver todos os serviços
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