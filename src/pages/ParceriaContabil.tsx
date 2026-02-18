import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

const ParceriaContabil: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Cabeçalho: Foco em Segurança Jurídica e Resultado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Suporte Jurídico Estratégico
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal: Tensão e Solução Pragmática */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            
            <div className="text-center md:text-left">
              <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-4">
                (Parecer jurídico e sustentação técnica para decisões tributárias e societárias)
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
                A conformidade já não basta: o auto de infração não pergunta apenas "como foi calculado", mas "qual o fundamento jurídico da interpretação adotada".
              </h2>

              <p className="mb-6">
                Recuperações de crédito, reclassificações de insumos e planejamentos tributários nascem no campo contábil, mas morrem no campo jurídico. Quando a decisão envolve interpretação controvertida ou crédito expressivo, a exposição deixa de ser apenas operacional e passa a ser jurídica, alcançando inclusive a responsabilidade do assessor.
              </p>

              <div className="bg-gray-50 p-6 border-l-4 border-red-700 mb-8 shadow-sm">
                <p className="font-bold text-gray-900 mb-3 text-sm md:text-base">
                  Riscos que o cliente final corre sem sustentação jurídica prévia:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-800">
                  <li>Responsabilização técnica e solidária do assessor contábil e do empresário;</li>
                  <li>Questionamentos estruturais sobre a validade jurídica de créditos e planejamentos;</li>
                  <li>Insegurança na continuidade operacional perante o Fisco e o Judiciário.</li>
                </ul>
              </div>
            </div>

            <hr className="my-12 border-gray-100" />

            {/* Soluções Estratégicas para o Cliente Final */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Soluções Estratégicas para o Cliente Final
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><TrendingUp size={16} className="mr-2"/> 1. Recuperação e Fluxo Produtivo</h3>
                  <p className="text-sm">Identificação de créditos (ICMS, PIS e COFINS) através da análise profunda da operação — incluindo insumos e ativos imobilizados — com o devido enquadramento normativo e respaldo legal.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><Landmark size={16} className="mr-2"/> 2. Transição (Reforma Tributária)</h3>
                  <p className="text-sm">Planejamento jurídico estratégico para a implementação do novo sistema (CBS/IBS), garantindo que o estoque de créditos atuais seja preservado e a transição ocorra sem sobressaltos operacionais.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><TrendingUp size={16} className="mr-2"/> 3. Incentivos Fiscais e Marketing</h3>
                  <p className="text-sm">Fundamentação jurídica para o uso de benefícios como PAT e Leis de Incentivo (Rouanet/Audiovisual), permitindo o uso da renúncia fiscal para alavancar projetos de visibilidade institucional.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><ShieldCheck size={16} className="mr-2"/> 4. Parecer de Sustentação Técnica</h3>
                  <p className="text-sm">Emissão de parecer jurídico fundamentado sobre a decisão fiscal, com análise de precedentes administrativos e judiciais para delimitar com precisão o grau de risco jurídico.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><ShieldCheck size={16} className="mr-2"/> 5. Formalização Probatória</h3>
                  <p className="text-sm">Estruturação técnica da tese e organização de dossiê probatório (baseado em laudos e evidências materiais) apto a sustentar e encerrar questionamentos já na fase administrativa.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center"><Landmark size={16} className="mr-2"/> 6. Regimes e Reorganização</h3>
                  <p className="text-sm">Validação jurídica de regimes tributários e suporte em cisões ou planejamentos sucessórios para otimização do IRPJ, CSLL e redução de encargos previdenciários.</p>
                </div>
              </div>
            </section>

            {/* Diferencial Especialista */}
            <div className="bg-blue-50 p-5 md:p-8 rounded-sm mt-12 border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-sm mb-4">Diferencial Especialista</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 text-blue-900 flex-shrink-0" size={18} />
                  <span><strong>35 anos de atuação executiva:</strong> Larga experiência em ambientes corporativos e indústrias de grande porte integrando normas contábeis (FIPECAFI) e o Direito Tributário.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 text-blue-900 flex-shrink-0" size={18} />
                  <span><strong>Assunção de Responsabilidade:</strong> Minha atuação eleva o trabalho contábil através da fundamentação jurídica formal em cada análise realizada, com responsabilidade técnica direta sobre o parecer emitido.</span>
                </li>
              </ul>
            </div>

            {/* CTA Final */}
            <div className="mt-16 py-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-widest mb-6">Viabilizar Conversa Técnica</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Agende uma reunião para avaliar como a formalização jurídica pode potencializar a segurança e a rentabilidade das decisões fiscais da sua carteira de clientes.
              </p>
              <a 
                href={calendlyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg"
              >
                <Calendar size={18} className="mr-3" /> Agendar Conversa Técnica com Dr. Francisco
              </a>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const CheckCircle2 = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default ParceriaContabil;