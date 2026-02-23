import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Users, Building2, CheckCircle2, Calendar, GraduationCap } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      <section className="bg-white pt-10 pb-10 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Hub de Parcerias Estratégicas
          </h1>
          <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mt-3 opacity-80">
            Retaguarda Jurídica e Gestão de Ativos
          </p>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-20">
          
          {/* Bloco 01 - Contadores */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <Users className="text-blue-900" size={32} />
            </div>
            <div className="md:col-span-11 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-2">Escritórios de Contabilidade</h3>
                <p className="text-gray-500 italic text-sm">Retaguarda técnica para demandas societárias e tributárias de alta complexidade.</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Due Diligence Jurídica e Fiscal:</strong> Auditagem técnica para identificação de ativos e passivos ocultos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Engenharia Societária:</strong> Viabilização de operações estratégicas como a Incorporação Reversa.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Recomposição de Ativos:</strong> Análise da balança tributária e recuperação de créditos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Planejamento Sucessório:</strong> Holdings com foco em eficiência e segurança para o assessor.</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 border-l-4 border-blue-900 text-sm text-gray-700">
                <strong>Diferencial:</strong> Visão unificada de Direito, Contabilidade e Controladoria para garantir ganho real de caixa e blindagem técnica.
              </div>

              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all shadow-md">
                <Calendar size={14} className="mr-2" /> Agendar Alinhamento Técnico
              </a>
            </div>
          </div>

          {/* Bloco 02 - Imobiliárias */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t pt-16">
            <div className="md:col-span-1">
              <Building2 className="text-blue-900" size={32} />
            </div>
            <div className="md:col-span-11 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-2">Imobiliárias e Corretores</h3>
                <p className="text-gray-500 italic text-sm">Segurança jurídica para o destravamento de transações imobiliárias.</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span>Regularização de Imóveis e Gestão de Sucessões (Inventários e Alvarás).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span>Due Diligence Especializada para Ativos de Alto Valor.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span>Destravamento de Matrículas e Regularização Fundiária.</span>
                </li>
              </ul>

              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all shadow-md">
                <Calendar size={14} className="mr-2" /> Iniciar Alinhamento Técnico
              </a>
            </div>
          </div>

          {/* Bloco 03 - Instituições de Ensino e Terceiro Setor */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t pt-16">
            <div className="md:col-span-1">
              <GraduationCap className="text-blue-900" size={32} />
            </div>
            <div className="md:col-span-11 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-2">Instituições de Ensino e Terceiro Setor</h3>
                <p className="text-gray-500 italic text-sm">Retaguarda jurídica estratégica para a sustentabilidade da atividade educacional e institucional.</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Compliance e Gestão de Passivos:</strong> Protocolos preventivos para redução de riscos cíveis, trabalhistas e administrativos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Gestão de Ativos e Governança:</strong> Planejamento sucessório e blindagem patrimonial para grupos mantenedores e conselhos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Contratos Estratégicos:</strong> Modelagem jurídica de convênios, parcerias e relações institucionais de alta senioridade.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Suporte Técnico em Demandas Complexas:</strong> Atuação sistêmica entre o Direito Educacional, Civil e Tributário.</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 border-l-4 border-blue-900 text-sm text-gray-700">
                <strong>Diferencial:</strong> Expertise em gestão jurídica interna de instituições de ensino, unindo a visão do gestor à técnica jurídica para garantir a perenidade do legado.
              </div>

              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all shadow-md">
                <Calendar size={14} className="mr-2" /> Solicitar Alinhamento Estratégico
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriasPage;