import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar } from 'lucide-react';

const ParceriaContabil: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Cooperação Técnica Estruturada
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Infraestrutura Jurídica de Segundo Nível para Escritórios de Contabilidade)
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mt-8 mb-4 text-center md:text-left">
              Além da Conformidade: A Necessidade de Sustentação Jurídica Formal
            </h2>

            <p>
              No cenário tributário e regulatório atual, a conformidade (compliance) é o patamar mínimo, mas não é mais o limite da segurança. Em procedimentos fiscalizatórios recentes, a autoridade tem questionado não apenas a correção dos cálculos, mas a fundamentação técnica e a robustez documental que embasam decisões estruturais.
            </p>
            
            <p>
              Quando um escritório de contabilidade orienta um planejamento ou uma recuperação de crédito, ele assume uma responsabilidade técnica que, se não estiver blindada por uma arquitetura jurídica defensável, pode gerar exposição solidária e riscos reputacionais incalculáveis. 
            </p>

            <p>
              Nossa estrutura de segundo nível atua justamente nessa lacuna: oferecemos o lastro jurídico necessário para que a sua excelência contábil seja inatacável perante o fisco e o judiciário.
            </p>

            {/* Grid de Serviços Técnicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">1. Contencioso e Gestão de Passivos</h3>
                <p className="text-sm">Atuação administrativa e judicial com foco na preservação do caixa e mitigação de riscos, alinhada aos impactos no balanço patrimonial.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">2. Arquitetura Societária e Fiscal</h3>
                <p className="text-sm">Revisão de estruturas visando proteção patrimonial e eficiência, com instrumentos resistentes a questionamentos de simulação.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">3. Planejamento de Segundo Nível</h3>
                <p className="text-sm">Validação jurídica de planejamentos fiscais com emissão de pareceres que resguardam a integridade técnica do assessor contábil.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">4. Regimes e Benefícios Fiscais</h3>
                <p className="text-sm">Estruturação e protocolo de Regimes Especiais fundamentados em experiência executiva em grandes indústrias.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">5. Recuperação de Créditos e ERP</h3>
                <p className="text-sm">Identificação de créditos com revisão técnica em sistemas SAP e Protheus para garantir aproveitamento seguro e auditável.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">6. Blindagem Documental</h3>
                <p className="text-sm">Elaboração de contratos sociais e acordos de sócios sob rigor técnico e conformidade com normas ISO 9001.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-5 md:p-8 rounded-sm mt-12 border border-blue-100">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-sm mb-4">Diferencial Executivo</h3>
              <p className="text-sm md:text-base italic text-gray-700">
                Com 35 anos de atuação executiva, dominamos a linguagem da controladoria. Nossa proposta não é substituir o contador, mas elevar seu trabalho através da segurança jurídica formal e transferência de responsabilidade.
              </p>
            </div>

            {/* BLOCO DE CHAMADA PARA AÇÃO (CTA) */}
            <div className="mt-16 py-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-widest mb-6">Próximo Passo Estratégico</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Inicie uma interlocução técnica para verificar como nossa estrutura pode fortalecer a segurança dos seus maiores clientes.
              </p>
              <a 
                href={calendlyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg"
              >
                <Calendar size={18} className="mr-3" /> Solicitar Reunião Técnica
              </a>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriaContabil;