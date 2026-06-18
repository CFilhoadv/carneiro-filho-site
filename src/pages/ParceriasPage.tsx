import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Users, CheckCircle2, Calendar, ShieldCheck, DollarSign, Lock } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Header Institucional */}
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

      {/* Conteúdo Principal - Foco Exclusivo em Contabilidade */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          {/* Bloco Técnico */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-1">
              <Users className="text-blue-900" size={32} />
            </div>
            <div className="md:col-span-11 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-1">Escritórios de Contabilidade</h3>
                <p className="text-gray-600 italic text-base">Retaguarda técnica para demandas societárias e tributárias de alta complexidade.</p>
              </div>
              
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Due Diligence Jurídica e Fiscal:</strong> Auditagem técnica para identificação de ativos e passivos ocultos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Engenharia Societária:</strong> Viabilização de operações estratégicas como a Incorporação Reversa.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Recomposição de Ativos:</strong> Análise da balança tributária e recuperação de créditos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <CheckCircle2 size={18} className="text-blue-900 mt-1 shrink-0" />
                  <span><strong>Planejamento Sucessório:</strong> Holdings com foco em eficiência e segurança para o assessor.</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 border-l-4 border-blue-900 text-base text-gray-700">
                <strong>Diferencial:</strong> Visão unificada de Direito, Contabilidade e Controladoria para garantir ganho real de caixa e blindagem técnica.
              </div>

              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all shadow-md">
                <Calendar size={14} className="mr-2" /> Agendar Alinhamento Técnico
              </a>
            </div>
          </div>

          {/* Bloco de Diretrizes de Governança e Segurança Jurídica */}
          <div className="border-t pt-10 space-y-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-1">Diretrizes de Governança e Segurança</h3>
              <p className="text-gray-600 italic text-base">Os pilares de blindagem institucional e contratual para os escritórios parceiros.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Remuneração Clara */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <DollarSign size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Remuneração Rígida</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  Operamos sob critérios claros e predefinidos de parceria corporativa, assegurando a justa divisão de atos e repasses imediatos de honorários.
                </p>
              </div>

              {/* Proteção de Carteira */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <ShieldCheck size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Não-Concorrência</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  Pacto formal de anti-aliciamento. A carteira de clientes pertence integralmente ao parceiro originador. Atuamos estritamente como retaguarda sênior.
                </p>
              </div>

              {/* Confidencialidade e LGPD */}
              <div className="space-y-3 bg-gray-50 p-5 border-l-2 border-blue-900">
                <div className="flex items-center gap-2 text-blue-900">
                  <Lock size={20} className="shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Sigilo & LGPD</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  Tratamento de dados como controladores independentes. Informações compartilhadas são protegidas por acordo de confidencialidade perpétuo (NDA).
                </p>
              </div>
            </div>

            {/* Chamada para Ação Final - Atualizada e Segura */}
            <div className="bg-blue-900 text-white p-5 text-center md:text-left md:flex md:items-center md:justify-between gap-4 shadow-sm">
              <p className="text-xs md:text-sm font-medium uppercase tracking-wider">
                As premissas de cooperação técnica do Hub são formalizadas individualmente mediante contrato específico.
              </p>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-2.5 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-100 transition-all shrink-0 mt-3 md:mt-0">
                <Calendar size={12} className="mr-2" /> Iniciar Diálogo Institucional
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriasPage;