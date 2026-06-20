import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, ShieldCheck, AlertTriangle, Landmark, FileText, Scale } from 'lucide-react';

const ParceriaContabil: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Cabeçalho: Foco em Retaguarda e Cooperação Técnica */}
      <section className="bg-[#0b132b] pt-12 pb-12 md:pt-16 md:pb-16 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-blue-400 font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
            RETAGUARDA JURÍDICA ESTRATÉGICA PARA ESCRITÓRIOS DE CONTABILIDADE
          </p>
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
            Hub de Parcerias: Proteção contra Pontos Cegos Societários e Fiscais
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-400 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal: Tensão Baseada na Dor do Contador */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">
                A conformidade fiscal mudou: O risco do seu cliente pode se tornar uma corresponsabilidade do seu escritório.
              </h2>
              <p className="mb-6">
                Planejamentos tributários, reestruturações societárias e holdings nascem na escrituração contábil, mas são julgados pelas amarras do campo jurídico. Quando a fiscalização municipal ou federal identifica um ponto cego, a crise não atinge apenas o caixa do empresário — ela gera um desgaste comercial devastador para o assessor contábil que assina o balanço.
              </p>
            </div>

            <hr className="my-8 border-gray-100" />

            {/* Bloco de Alerta de Riscos Críticos (Gatilho de Urgência) */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-red-700 uppercase tracking-wide mb-6 flex items-center justify-center md:justify-start">
                <AlertTriangle size={22} className="mr-2 text-red-700" /> 3 Pontos Cegos que Podem Comprometer a Carteira de Clientes
              </h3>
              
              <div className="space-y-6">
                {/* Risco 1 - ITBI */}
                <div className="bg-gray-50 p-6 border-l-4 border-red-700 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center">
                    1. A Ilusão da Imunidade do ITBI e o Prazo de Carência
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>O Problema:</strong> Integralizar imóveis em uma holding familiar e iniciar a atividade operacional de locação ou venda sem o devido isolamento. O Art. 37 do CTN prevê uma apuração trienal da atividade preponderante.
                  </p>
                  <p className="text-sm text-red-800 italic font-medium">
                    <strong>A Dor:</strong> Após o triênio de carência, a Prefeitura de Sorocaba cobra o imposto retroativo com juros e multas. O cliente se volta contra o contador por não ter mapeado o passivo.
                  </p>
                </div>

                {/* Risco 2 - SINTER/CIB */}
                <div className="bg-gray-50 p-6 border-l-4 border-red-700 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center">
                    2. O Cerco Digital aos Aluguéis (SINTER e CIB)
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>O Problema:</strong> Cruzamento de dados 100% automatizado entre cartórios, prefeituras e o Cadastro Imobiliário Brasileiro, expondo contratos informais ou omissões na Pessoa Física.
                  </p>
                  <p className="text-sm text-red-800 italic font-medium">
                    <strong>A Dor:</strong> O cliente é pego em malhas fiscais com multas qualificadas de até 150%, e o escritório de contabilidade precisa gerenciar uma contingência retroativa sob extrema pressão.
                  </p>
                </div>

                {/* Risco 3 - Art. 977 */}
                <div className="bg-gray-50 p-6 border-l-4 border-red-700 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center">
                    3. O Bloqueio Invisível do Art. 977 do Código Civil
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>O Problema:</strong> Constituição de holdings onde os únicos sócios são maridos e esposas casados sob os regimes de Comunhão Universal ou Separação Obrigatória de Bens.
                  </p>
                  <p className="text-sm text-red-800 italic font-medium">
                    <strong>A Dor:</strong> A Junta Comercial pode registrar, mas a sociedade é juridicamente nula. Anos de escrituração e planejamento são desfeitos em uma fiscalização ou litígio familiar.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-100" />

            {/* O Papel da Assessoria Jurídica de Retaguarda */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">
                Como a Assessoria Jurídica Especializada Protege seu Escritório
              </h2>
              <p className="text-base text-gray-700 mb-8">
                Nossa atuação não concorre com os serviços contábeis; nós servimos como um escudo de proteção técnica. Assumimos a responsabilidade jurídica e formal dos pareceres e desenhos societários, deixando o seu escritório livre para focar na conformidade e no atendimento de excelência.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 border-t-2 border-blue-900 shadow-sm">
                  <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                    <Scale size={16} className="mr-2"/> Pareceres de Sustentação
                  </h4>
                  <p className="text-sm">Emissão de parecer jurídico fundamentado com análise de precedentes administrativos para delimitar e mitigar o grau de risco operacional do seu cliente.</p>
                </div>
                <div className="bg-gray-50 p-6 border-t-2 border-blue-900 shadow-sm">
                  <h4 className="font-bold text-blue-900 uppercase text-sm mb-2 flex items-center">
                    <FileText size={16} className="mr-2"/> Validação de Viabilidade
                  </h4>
                  <p className="text-sm">Pente-fino rigoroso em regimes de bens, certidões e documentações antes do arquivamento de atos na Jucesp, eliminando riscos de nulidade societária.</p>
                </div>
              </div>
            </section>

            {/* Diferencial do Especialista */}
            <div className="bg-blue-50 p-5 md:p-8 rounded-sm mt-12 border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-sm mb-4">Diferencial e Alinhamento de Governança</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 font-bold">•</span>
                  <span><strong>Experiência em Controladoria:</strong> Bagagem construída integrando normas de contabilidade e o Direito Tributário em ambientes corporativos de grande porte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 font-bold">•</span>
                  <span><strong>Garantia de Não-Concorrência:</strong> Pacto formal de proteção de carteira. Seus clientes continuam sendo seus. Atuamos exclusivamente na retaguarda técnica especializada.</span>
                </li>
              </ul>
            </div>

            {/* CTA Final Conduzindo ao Calendly */}
            <div className="mt-16 py-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-widest mb-4">Viabilizar Conversa Técnica</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Identificou algum cliente com um desses perfis de risco ou tem uma demanda societária complexa travada? Agende um diagnóstico privado de 30 minutos no Calendly.
              </p>
              <a 
                href={calendlyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg"
              >
                <Calendar size={18} className="mr-3" /> Agendar Alinhamento Técnico Privado
              </a>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriaContabil;