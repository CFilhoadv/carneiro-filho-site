import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Users, Building2, GraduationCap, ChevronRight, Calendar } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  // LINK OFICIAL E ÚNICO
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado */}
      <section className="bg-white pt-10 pb-10 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Hub de Parcerias Estratégicas
          </h1>
          <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mt-3 opacity-80">
            (Retaguarda Jurídica e Gestão de Ativos)
          </p>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify md:text-center">
            Oferecemos suporte jurídico de alta senioridade para profissionais que buscam segurança técnica em suas operações. Nossa atuação é estritamente complementar, preservando a relação de confiança entre o parceiro e seu cliente.
          </p>
        </div>
      </section>

      {/* Blocos de Parceria */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          
          {/* Bloco 01 - Contadores */}
          <div className="border-t pt-10">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-blue-900" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Escritórios de Contabilidade</h3>
            </div>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              <p className="italic text-gray-500 text-sm md:text-base">Sustentação jurídica e alavancagem de portfólio através de inteligência tributária e societária.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Consultoria e Pareceres de Alta Senioridade</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Eficiência em Reorganizações Societárias</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Planejamento Sucessório Empresarial Integrado</div>
              </div>
              <div className="bg-gray-50 p-5 border-l-4 border-blue-900 text-sm italic">
                <strong>Diferencial:</strong> Identificação de ativos fiscais e apoio em fusões, garantindo a blindagem técnica do assessor contábil.
              </div>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-colors shadow-md">
                <Calendar size={14} className="mr-2" /> Agendar Reunião Técnica
              </a>
            </div>
          </div>

          {/* Bloco 02 - Imobiliárias */}
          <div className="border-t pt-10">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-blue-900" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Imobiliárias e Corretores</h3>
            </div>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              <p className="italic text-gray-500 text-sm md:text-base">Regularização técnica e segurança jurídica para o destravamento de transações.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Regularização Imobiliária e Sucessões</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Due Diligence e Gestão de Riscos Contratuais</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Gestão Estratégica de Contencioso Imobiliário</div>
              </div>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-colors shadow-md">
                <Calendar size={14} className="mr-2" /> Iniciar Alinhamento Técnico
              </a>
            </div>
          </div>

          {/* Bloco 03 - Ensino e Empresas */}
          <div className="border-t pt-10">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-900" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Instituições de Ensino e Empresas</h3>
            </div>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              <p className="italic text-gray-500 text-sm md:text-base">Gestão estratégica de passivos e recomposição organizada de ativos financeiros.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Defesa Institucional e Educacional Especializada</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Recomposição de Ativos (Cobrança Executiva)</div>
                <div className="flex items-start gap-2"><ChevronRight size={18} className="text-blue-900 mt-1 shrink-0" /> Consultoria de Retaguarda Executiva</div>
              </div>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-colors shadow-md">
                <Calendar size={14} className="mr-2" /> Solicitar Reunião Estratégica
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriasPage;