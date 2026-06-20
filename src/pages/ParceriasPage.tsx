import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, ShieldCheck, AlertTriangle, FileText, Scale, DollarSign, Lock, Layers } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Header Institucional - Técnico e Sóbrio */}
      <section className="bg-white pt-10 pb-6 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Hub de Parcerias Estratégicas
          </h1>
          <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mt-2 opacity-80">
            Retaguarda Jurídica e Gestão de Ativos
          </p>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3"></div>
        </div>
      </section>

      {/* Conteúdo Principal - As Dimensões da Parceria Técnica */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-1">Escritórios de Contabilidade</h3>
            <p className="text-gray-600 italic text-base">Retaguarda técnica para demandas societárias e tributárias de alta complexidade.</p>
            
            <p className="text-justify text-gray-700 leading-relaxed text-base md:text-lg">
              A conformidade fiscal e a escrituração contábil necessitam, frequentemente, de um guarda-chuva de sustentação jurídica formal. Quando a interpretação normativa é complexa ou envolve valores expressivos, a exposição de risco afeta o caixa da empresa e a responsabilidade do assessor. Nossa atuação expande a capacidade de entrega do seu escritório através de quatro dimensões de contribuição técnica.
            </p>
          </div>

          {/* Grid de Soluções Amplas (Espectro Completo de Contribuição) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-8">
            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
              <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                <ShieldCheck size={16} className="mr-2"/> Due Diligence Jurídica e Fiscal
              </h4>
              <p className="text-sm text-gray-700">Auditagem técnica profunda e preventiva para identificação de ativos não aproveitados e mapeamento de passivos ocultos antes de fiscalizações.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
              <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                <Layers size={16} className="mr-2"/> Engenharia Societária
              </h4>
              <p className="text-sm text-gray-700">Viabilização e desenho jurídico de operações corporativas estratégicas complexas, tais como incorporações, cisões e a Incorporação Reversa.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
              <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                <Scale size={16} className="mr-2"/> Recomposição de Ativos
              </h4>
              <p className="text-sm text-gray-700">Análise técnica da balança tributária com foco em teses jurídicas sólidas para a recuperação de créditos de tributos como ICMS, PIS e COFINS.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 shadow-sm">
              <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                <FileText size={16} className="mr-2"/> Planejamento Sucessório
              </h4>
              <p className="text-sm text-gray-700">Estruturação de Holdings e acordos de acionistas com foco em eficiência, proteção patrimonial e total segurança para o assessor originador.</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 border-l-4 border-blue-900 text-base text-gray-700">
            <strong>Diferencial:</strong> Visão unificada de Direito, Contabilidade e Controladoria para garantir ganho real de caixa e blindagem técnica para o parceiro.
          </div>

          {/* Mapeamento de Riscos Comuns na Rotina Societária e Fiscal */}
          <div className="border-t pt-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6 flex items-center justify-center md:justify-start">
              <AlertTriangle size={22} className="mr-2 text-blue-900" /> Prevenção de Pontos Cegos em Operações de Clientes
            </h3>
            
            <div className="space-y-6">
              {/* Risco 1 - ITBI */}
              <div className="bg-gray-50 p-6 border-t border-gray-200 shadow-sm">
                <h4 className="font-bold text-blue-900 text-base mb-2">
                  Análise da Imunidade do ITBI (Prazo de Carência)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Cenário Fiscal:</strong> Integralização de bens imóveis em estruturas societárias familiares com posterior início de atividades de locação ou venda sem isolamento do faturamento.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  <strong>Exposição de Risco:</strong> Cobrança retroativa do imposto por municipalidades após o decurso do prazo trienal de verificação da atividade preponderante (Art. 37 do CTN).
                </p>
              </div>

              {/* Risco 2 - SINTER */}
              <div className="bg-gray-50 p-6 border-t border-gray-200 shadow-sm">
                <h4 className="font-bold text-blue-900 text-base mb-2">
                  Cruzamento Digital de Ativos Imobiliários (SINTER e CIB)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Cenário Fiscal:</strong> Fluxos informais de locação ou omissões patrimoniais na Pessoa Física perante as plataformas automatizadas de fiscalização federal e cartorária.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  <strong>Exposição de Risco:</strong> Deflagração de malhas fiscais eletrônicas com imposição de multas qualificadas incidentes sobre os exercícios retroativos.
                </p>
              </div>

              {/* Risco 3 - Art. 977 */}
              <div className="bg-gray-50 p-6 border-t border-gray-200 shadow-sm">
                <h4 className="font-bold text-blue-900 text-base mb-2">
                  Restrições Societárias entre Cônjuges (Art. 977 do Código Civil)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Cenário Fiscal:</strong> Composição societária pluripessoal composta exclusivamente por cônjuges casados sob os regimes de Comunhão Universal ou Separação Obrigatória.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  <strong>Exposição de Risco:</strong> Nulidade jurídica da sociedade e dos planejamentos derivados, passível de questionamento administrativo ou em litígios terceiros.
                </p>
              </div>
            </div>
          </div>

          {/* Diretrizes de Governança e Segurança Jurídica */}
          <div className="border-t pt-10 space-y-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-1">Diretrizes de Governança e Segurança</h3>
              <p className="text-gray-600 italic text-base">Os pilares de blindagem institucional e contratual para os escritórios parceiros.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Remuneração */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <DollarSign size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Remuneração Rígida</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Operamos sob critérios claros e predefinidos de parceria corporativa, assegurando a justa divisão de atos e repasses imediatos de honorários.
                </p>
              </div>

              {/* Não-Concorrência */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <ShieldCheck size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Não-Concorrência</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pacto formal de anti-aliciamento. A carteira de clientes pertence integralmente ao parceiro originador. Atuamos estritamente como retaguarda sênior.
                </p>
              </div>

              {/* Sigilo */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <Lock size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Sigilo & LGPD</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tratamento de dados como controladores independentes. Informações compartilhadas são protegidas por acordo de confidencialidade perpétuo (NDA).
                </p>
              </div>
            </div>

            {/* Chamada para Ação Final */}
            <div className="bg-blue-900 text-white p-6 text-center md:text-left md:flex md:items-center md:justify-between gap-4 shadow-sm mt-8">
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-medium uppercase tracking-wider">
                  Viabilizar Alinhamento Técnico Privado
                </p>
                <p className="text-xs text-gray-300 normal-case">
                  As premissas de cooperação técnica do Hub são formalizadas individualmente mediante contrato específico.
                </p>
              </div>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-100 transition-all shrink-0 mt-3 md:mt-0 shadow-md">
                <Calendar size={14} className="mr-2" /> Iniciar Diálogo Institucional
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriasPage;