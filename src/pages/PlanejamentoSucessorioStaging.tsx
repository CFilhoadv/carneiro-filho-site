import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const calendlyLink = "https://calendly.com/carneirofilho"; 
  const telSorocaba = "tel:+551531911432";

  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao", desc: "Antecipação de herança com orientação técnica sobre posse e renda para os pais." },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos", desc: "Organização da vontade com segurança jurídica e análise de sucessão." },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding", desc: "Estruturação para organização de bens e busca por eficiência tributária." },
    { title: "Gestão Patrimonial (ABIP)", href: "/planejamento-sucessorio/abip", desc: "Administração técnica de ativos próprios conforme normas vigentes." },
    { title: "Inventário e Partilha", href: "/planejamento-sucessorio/inventario", desc: "Regularização de bens quando não houve planejamento sucessório prévio." }
  ];

  return (
    <MainLayout>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce">
        <MessageCircle size={30} />
      </a>

      {/* CABEÇALHO */}
      <section className="bg-white pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Inteligência Patrimonial e Sucessória
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* FILTRO SIM/NÃO (ITEM 3.4) */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 font-medium mb-6">
            Este serviço é indicado para quem possui múltiplos imóveis ou sucessão empresarial. Você se identifica com essa situação?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={whatsappLink} className="bg-blue-900 text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-blue-800 transition-all">
              Sim, quero conversar
            </a>
            <Link to="/servicos" className="border border-blue-900 text-blue-900 px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-blue-50 transition-all">
              Não, preciso de atendimento geral
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL COM LINGUAGEM PRUDENTE (ITEM 3.4) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p className="text-justify">
                O planejamento sucessório em <strong>Sorocaba e região</strong> é focado em preservar o legado e a harmonia familiar. Atuamos para proteger o patrimônio com segurança jurídica, avaliando alternativas lícitas de organização patrimonial e eficiência tributária, conforme o caso.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                  <p className="text-sm font-semibold text-gray-800">Análise técnica para estruturação societária e proteção de ativos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                  <p className="text-sm font-semibold text-gray-800">Abordagem integrada que une Direito e Contabilidade.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-sm border-l-4 border-blue-900 shadow-sm">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Etapas Sugeridas</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-xs text-gray-700">Diagnóstico inicial via WhatsApp para entender o contexto familiar.</p>
                </div>
                <a href={calendlyLink} target="_blank" rel="noopener" className="flex items-center justify-center bg-blue-900 text-white py-4 mt-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-all shadow-md">
                  <Calendar size={14} className="mr-2" /> Agendar reunião técnica
                </a>
              </div>
            </div>
          </div>

          {/* DIFERENCIAL */}
          <div className="bg-blue-900 p-10 rounded-sm text-white mb-16 text-center border-b-4 border-blue-400">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Diferencial para alta renda e empresários</h3>
            <p className="text-blue-100 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Foco em organização patrimonial e segurança sucessória, com abordagem integrada de gestão, buscando alternativas legais para a preservação de ativos.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener" className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg">
              Iniciar atendimento inicial
            </a>
          </div>

          {/* SOLUÇÕES TÉCNICAS */}
          <div className="mb-20">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wide mb-8">Soluções Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subpaginas.map((item, index) => (
                <Link key={index} to={item.href} className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4 text-left">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 uppercase">{item.title}</h4>
                    <ChevronRight className="text-gray-300 group-hover:text-blue-900" size={20} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-left">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* ATENDIMENTO GLOBAL (ITEM 2.B) */}
          <div className="pt-12 border-t border-gray-100">
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-sm border border-gray-200 text-center">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-2">Sorocaba e região</h3>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter mb-4">Atendimento digital e presencial</p>
              <div className="space-y-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md">
                  <div className="flex items-center mb-1">
                    <MessageCircle size={18} className="mr-2" /> Iniciar Atendimento Digital
                  </div>
                </a>
                {/* MICROCOPY TRIAGEM (ITEM 2.C) */}
                <p className="text-[10px] text-gray-400 font-medium px-4">
                  Para agilizar, informe sua cidade e descreva brevemente seu objetivo. Se houver, envie foto do documento/intimação.
                </p>
                <a href={telSorocaba} className="flex items-center justify-center border-2 border-blue-900 text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;