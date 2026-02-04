import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, ShieldCheck, Landmark, Users, ChevronRight, Scale } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551521210044";

  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao", desc: "Antecipação de herança com preservação de posse e renda." },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos", desc: "Expressão de vontade com segurança jurídica e eficácia." },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding", desc: "Estruturação societária para gestão de bens e otimização fiscal." },
    { title: "Gestão Patrimonial (ABIP)", href: "/planejamento-sucessorio/abip", desc: "Administração profissional de ativos imobiliários próprios." }
  ];

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
            Planejamento Sucessório
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* INTRODUÇÃO ESTRATÉGICA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                O planejamento sucessório é um instrumento jurídico estratégico destinado à <strong>organização antecipada da transmissão patrimonial</strong>. Nosso foco é reduzir conflitos, preservar o patrimônio familiar e conferir previsibilidade às sucessões.
              </p>
              <p>
                Atuamos na estruturação de soluções jurídicas adequadas à realidade de cada família, avaliando com rigor os aspectos <strong>civis, tributários e corporativos</strong> para garantir que a transição de bens e o comando de empresas ocorram com o menor impacto possível.
              </p>
            </div>
            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-sm border-l-4 border-blue-900 shadow-sm">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Objetivos Centrais</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <ShieldCheck className="text-blue-900 mr-3" size={18} /> Proteção de Ativos Familiares
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Landmark className="text-blue-900 mr-3" size={18} /> Otimização da Carga Tributária
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Users className="text-blue-900 mr-3" size={18} /> Prevenção de Conflitos entre Herdeiros
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Scale className="text-blue-900 mr-3" size={18} /> Evitar ou Simplificar o Inventário
                </li>
              </ul>
            </div>
          </div>

          {/* INSTRUMENTOS JURÍDICOS - GRID REFINADO */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wide mb-8 text-center md:text-left">Instrumentos de Planejamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subpaginas.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors uppercase">{item.title}</h4>
                      <ChevronRight className="text-gray-300 group-hover:text-blue-900 transition-all" size={20} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900 opacity-0 group-hover:opacity-100 transition-all">Ver Detalhes</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CARDS DE ATENDIMENTO - CONSISTÊNCIA VISUAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-blue-200">Consulta Estratégica</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">Agende uma análise técnica para diagnosticar a viabilidade de planejamento para seu patrimônio.</p>
              </div>
              <div className="space-y-4">
                <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all">
                  <MessageCircle size={18} className="mr-2" /> WhatsApp Business
                </a>
                <a href="tel:1521210044" className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all">
                  <Phone size={18} className="mr-2" /> (15) 2121-0044
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-4">Apoio Administrativo</h3>
                <p className="text-gray-500 text-sm mb-6 italic">Unidade São Paulo - Suporte técnico e gestão de documentação corporativa.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-500 py-4 rounded-sm font-bold uppercase tracking-widest text-xs">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[10px] text-gray-400 uppercase text-center tracking-widest">Suporte Estratégico</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;