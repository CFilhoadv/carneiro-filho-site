import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, ShieldCheck, Landmark, Users, ChevronRight, Scale, Calendar, CheckCircle2 } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const calendlyLink = "https://calendly.com/carneirofilho"; 
  const telSorocaba = "tel:+551531911432";

  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao", desc: "Antecipação de herança com garantia de posse e renda para os pais." },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos", desc: "Organização da vontade com segurança jurídica e proteção de herdeiros." },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding", desc: "Proteção de bens e economia de impostos através de estrutura empresarial." },
    { title: "Gestão Patrimonial (ABIP)", href: "/planejamento-sucessorio/abip", desc: "Administração profissional e segura de imóveis e ativos próprios." },
    { title: "Inventário e Partilha", href: "/planejamento-sucessorio/inventario", desc: "Regularização de bens quando não houve planejamento sucessório prévio." }
  ];

  return (
    <MainLayout>
      {/* 1. BOTÃO FLUTUANTE */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* 2. CABEÇALHO */}
      <section className="bg-white pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Inteligência Patrimonial e Sucessória
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* AJUSTE 2: LINK DO BOTÃO "NÃO" (FILTRO DO TOPO) */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 font-medium mb-6">
            Este serviço é indicado para quem possui múltiplos imóveis ou sucessão empresarial. Você se identifica com essa situação?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={whatsappLink} className="bg-blue-900 text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-blue-800 transition-all">
              Sim, quero conversar
            </a>
            {/* Redirecionamento correto para o funil de 70% */}
            <Link to="/servicos" className="border border-blue-900 text-blue-900 px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-blue-50 transition-all">
              Não, preciso de atendimento geral
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              {/* AJUSTE 1: ABRANGÊNCIA REGIONAL E TEXTO ATUALIZADO */}
              <p className="text-justify">
                O planejamento sucessório em Sorocaba e região é focado em preservar o legado e a harmonia familiar. Organizamos a transmissão do patrimônio de forma planejada, com segurança jurídica e atendimento digital.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                  <p className="text-sm font-semibold text-gray-800">Experiência em estruturação societária e blindagem de ativos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                  <p className="text-sm font-semibold text-gray-800">Abordagem integrada que une Direito e Contabilidade.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" size={20} />
                  <p className="text-sm font-semibold text-gray-800">Atendimento personalizado com foco em máxima economia tributária.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-sm border-l-4 border-blue-900 shadow-sm">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Etapas do Planejamento</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-xs text-gray-700"><strong>Diagnóstico inicial:</strong> Alinhamento via WhatsApp para entender o cenário familiar.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                  <p className="text-xs text-gray-700"><strong>Análise técnica:</strong> Avaliação jurídica e contábil do patrimônio imobiliário/empresarial.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                  <p className="text-xs text-gray-700"><strong>Plano personalizado:</strong> Reunião técnica para apresentação da estrutura sucessória.</p>
                </div>
                {/* QA: BOTÃO CALENDLY MOBILE-FRIENDLY */}
                <a href={calendlyLink} target="_blank" rel="noopener" className="flex items-center justify-center bg-blue-900 text-white py-4 mt-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-all shadow-md">
                  <Calendar size={14} className="mr-2" /> Agendar reunião técnica
                </a>
              </div>
            </div>
          </div>

          {/* BOX DE DIFERENCIAÇÃO */}
          <div className="bg-blue-900 p-10 rounded-sm text-white mb-16 text-center border-b-4 border-blue-400">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Diferencial para alta renda e empresários</h3>
            <p className="text-blue-100 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Foco em blindagem patrimonial, redução tributária legal e segurança sucessória, com abordagem integrada de gestão para proteção de ativos.
            </p>
            {/* QA: BOTÃO VERDE INICIAR PLANEJAMENTO MOBILE-FRIENDLY */}
            <a href={whatsappLink} target="_blank" rel="noopener" className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95">
              Iniciar planejamento
            </a>
          </div>

          {/* INSTRUMENTOS JURÍDICOS */}
          <div className="mb-20">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wide mb-8">Soluções e Estruturas Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subpaginas.map((item, index) => (
                <Link key={index} to={item.href} className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors uppercase tracking-tight">{item.title}</h4>
                      <ChevronRight className="text-gray-300 group-hover:text-blue-900 transition-all" size={20} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900 underline">Consultar detalhes técnicos</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ATENDIMENTO */}
          <div className="pt-12 border-t border-gray-100">
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-sm border border-gray-200 text-center">
              <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-4">Unidade Sorocaba</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed italic">Consultoria técnica presencial ou digital com o Dr. Francisco de Assis.</p>
              <div className="space-y-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md">
                  <MessageCircle size={18} className="mr-2" /> Iniciar Atendimento Digital
                </a>
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