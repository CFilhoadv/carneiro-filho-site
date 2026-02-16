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
          <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            
            {/* PRIMEIRA DOBRA OTIMIZADA */}
            <div className="text-center md:text-left">
              <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-4">
                (Infraestrutura jurídica de segundo nível para escritórios de contabilidade)
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
                A conformidade já não basta.
              </h2>

              <p className="mb-6">
                No cenário tributário atual, a fiscalização não questiona apenas a exatidão dos cálculos — questiona a fundamentação jurídica das decisões estruturais.
              </p>

              <div className="bg-gray-50 p-6 border-l-4 border-red-700 mb-8">
                <p className="font-bold text-gray-900 mb-3 text-sm md:text-base">
                  Planejamentos e recuperações de crédito sem arquitetura jurídica formal podem gerar:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-800">
                  <li>Responsabilização técnica e solidária do assessor;</li>
                  <li>Autuações estruturais e questionamentos de simulação;</li>
                  <li>Risco reputacional crítico perante a carteira de clientes.</li>
                </ul>
              </div>

              <p>
                Nossa estrutura de segundo nível atua exatamente nessa lacuna. Oferecemos o <strong>lastro jurídico formal</strong> necessário para que decisões tributárias relevantes estejam tecnicamente blindadas perante o Fisco e o Judiciário.
              </p>
            </div>

            <hr className="my-12 border-gray-100" />

            {/* Grid de Serviços Técnicos */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Os 6 Pilares da Cooperação Técnica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">1. Contencioso e Gestão de Passivos</h3>
                  <p className="text-sm">Atuação estratégica focada na preservação do caixa, integrando a visão jurídica aos impactos no balanço patrimonial.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">2. Arquitetura Societária e Fiscal</h3>
                  <p className="text-sm">Desenvolvimento de estruturas resistentes a questionamentos de abuso de forma, garantindo segurança nas reorganizações.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">3. Planejamento de Segundo Nível</h3>
                  <p className="text-sm">Emissão de pareceres que fundamentam tecnicamente as estratégias propostas pelo escritório, assumindo a responsabilidade jurídica.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">4. Regimes e Benefícios Fiscais</h3>
                  <p className="text-sm">Protocolo de Regimes Especiais viabilizados por 35 anos de experiência executiva em grandes indústrias e sistemas ERP.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">5. Recuperação de Créditos e ERP</h3>
                  <p className="text-sm">Revisão técnica em sistemas SAP e Protheus para garantir que a monetização de créditos seja segura e rastreável.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 uppercase text-sm mb-2">6. Blindagem Documental</h3>
                  <p className="text-sm">Redação de contratos e acordos sob rigor de compliance (ISO 9001), garantindo prova documental defensável.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 p-5 md:p-8 rounded-sm mt-12 border border-blue-100">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-sm mb-4">Diferencial Operacional</h3>
              <p className="text-sm md:text-base italic text-gray-700">
                Dominamos a linguagem da controladoria. Nossa atuação foca na <strong>assunção formal da responsabilidade jurídica</strong> no escopo de cada parecer emitido, elevando a segurança institucional da sua assessoria.
              </p>
            </div>

            {/* BLOCO DE CHAMADA PARA AÇÃO (CTA) AJUSTADO */}
            <div className="mt-16 py-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-widest mb-6">Próximo Passo Estratégico</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Agende uma reunião técnica para verificar como nossa infraestrutura jurídica pode se integrar à sua rotina operacional.
              </p>
              <a 
                href={calendlyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg"
              >
                <Calendar size={18} className="mr-3" /> Agendar Reunião Técnica Estratégica
              </a>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriaContabil;