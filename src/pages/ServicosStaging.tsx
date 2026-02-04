import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, Scale, Users, Gavel, Briefcase, Landmark, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

const ServicosStaging: React.FC = () => {
  // Canal prioritário para atendimento
  const whatsappSorocaba = "https://wa.me/551521210044";

  return (
    <MainLayout>
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-12 pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* TEXTO DE POSICIONAMENTO */}
          <div className="text-gray-700 leading-relaxed text-lg mb-16 border-b border-gray-100 pb-10">
            <p className="max-w-4xl">
              O escritório <strong>Carneiro Filho Advocacia</strong> atua em demandas selecionadas com foco na excelência técnica e na visão estratégica. Nossa atuação é pautada pela experiência adquirida na advocacia privada, consultoria e atuação institucional, garantindo segurança jurídica em questões de alta complexidade.
            </p>
          </div>

          {/* GRADE DE SERVIÇOS - ORGANIZAÇÃO POR CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Direito Civil */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Scale className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Cível e Patrimonial</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Atuação em demandas de <strong>responsabilidade civil</strong>, indenizações, cobranças e litígios envolvendo posse, propriedade e fraudes em negócios jurídicos.
              </p>
            </div>

            {/* Direito de Família */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Users className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito de Família</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Condução de processos de <strong>alimentos, guarda, interdições</strong> e alvarás judiciais, com foco em soluções estruturadas e preservação de direitos.
              </p>
            </div>

            {/* Sucessões */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito das Sucessões</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Especialidade em <strong>inventários judiciais e extrajudiciais</strong>, partilhas, testamentos e resolução de controvérsias patrimoniais entre herdeiros.
              </p>
            </div>

            {/* Planejamento Sucessório */}
            <div className="group p-6 bg-blue-900 rounded-sm shadow-md transition-all">
              <div className="flex items-center mb-4 text-white">
                <ShieldCheck className="text-blue-200 mr-3" size={24} />
                <h2 className="text-xl font-bold uppercase tracking-tight">Planejamento Sucessório</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-base mb-4">
                Organização preventiva com foco na proteção de ativos e perenidade empresarial através de instrumentos legais estratégicos.
              </p>
              <Link to="/planejamento-sucessorio" className="inline-flex items-center text-blue-200 font-bold uppercase tracking-widest text-[11px] hover:text-white transition-colors">
                Ver instrumentos de planejamento <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Landmark className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito Empresarial</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Suporte jurídico para empresas em <strong>recuperação de crédito</strong>, análise de contratos e segurança na tomada de decisões corporativas.
              </p>
            </div>

            {/* Direito Tributário */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Gavel className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito Tributário</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Consultoria e contencioso focado em <strong>defesa administrativa e judicial</strong>, gestão de passivos fiscais e autos de infração.
              </p>
            </div>

            {/* Direito Previdenciário */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <ShieldCheck className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito Previdenciário</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Ações para <strong>concessão e restabelecimento de benefícios</strong> suspensos ou negados, com acompanhamento técnico integral.
              </p>
            </div>

            {/* Direito do Trabalho */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito do Trabalho</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Condução de <strong>contencioso judicial trabalhista</strong>, com foco em defesa corporativa e acompanhamento estratégico de execuções.
              </p>
            </div>

          </div>

          {/* CARDS DE CONTATO FINAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-xl flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-blue-200">Unidade Sorocaba</h3>
                <p className="text-blue-100 text-sm mb-6">Canal direto para consulta de novos casos e suporte jurídico.</p>
              </div>
              <div className="space-y-4">
                <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all">
                  <MessageCircle size={18} className="mr-2" /> Iniciar Atendimento
                </a>
                <a href="tel:1521210044" className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all">
                  <Phone size={18} className="mr-2" /> (15) 2121-0044
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-sm flex flex-col justify-between border border-gray-200">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-4">Unidade São Paulo</h3>
                <p className="text-gray-500 text-sm mb-6 italic">Apoio administrativo e suporte estratégico.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-500 py-4 rounded-sm font-bold uppercase tracking-widest text-xs">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[10px] text-gray-400 uppercase text-center tracking-widest">Atendimento Administrativo</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;