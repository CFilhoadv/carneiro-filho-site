import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, ShieldCheck, Landmark, Users, ChevronRight, Scale } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  // ATUALIZADO: Canal único VoIP e WhatsApp (15) 3191-1432
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao", desc: "Antecipação de herança com garantia de posse e renda para os pais." },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos", desc: "Organização da vontade con segurança jurídica e proteção de herdeiros." },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding", desc: "Proteção de bens e economia de impostos através de estrutura empresarial." },
    { title: "Gestão Patrimonial (ABIP)", href: "/planejamento-sucessorio/abip", desc: "Administração profissional e segura de imóveis e ativos próprios." }
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

      {/* CABEÇALHO PADRONIZADO - Ajustado para py-8 no mobile */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Inteligência Patrimonial
          </h1>
          <div className="h-1 w-16 md:h-1.5 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL - Ajustado para py-10 no mobile */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* INTRODUÇÃO ESTRATÉGICA - mb-12 no mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 items-center">
            <div className="lg:col-span-7 space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p className="text-justify">
                O planejamento sucessório não é apenas sobre bens, é sobre <strong>preservar a harmonia da sua família</strong>. Através de instrumentos jurídicos e contábeis, organizamos a transmissão do seu patrimônio de forma antecipada, evitando processos de inventário lentos e desgastantes.
              </p>
              <p className="text-justify">
                Utilizamos nossa expertise técnica para avaliar os impactos <strong>civis e tributários</strong>, garantindo que o fruto do seu trabalho seja protegido e transmitido com a máxima economia e segurança jurídica.
              </p>
            </div>
            <div className="lg:col-span-5 bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-blue-900 shadow-sm">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 md:mb-6">Por que Planejar?</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center text-gray-800 font-medium text-xs md:text-sm">
                  <Scale className="text-blue-900 mr-3" size={18} /> Evitar ou Simplificar o Inventário
                </li>
                <li className="flex items-center text-gray-800 font-medium text-xs md:text-sm">
                  <Landmark className="text-blue-900 mr-3" size={18} /> Economia Expressiva de Impostos
                </li>
                <li className="flex items-center text-gray-800 font-medium text-xs md:text-sm">
                  <Users className="text-blue-900 mr-3" size={18} /> Prevenir Conflitos entre Herdeiros
                </li>
                <li className="flex items-center text-gray-800 font-medium text-xs md:text-sm">
                  <ShieldCheck className="text-blue-900 mr-3" size={18} /> Proteção Contra Penhoras e Dívidas
                </li>
              </ul>
            </div>
          </div>

          {/* INSTRUMENTOS JURÍDICOS - mb-16 no mobile */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wide mb-6 md:mb-8 text-center md:text-left">Soluções de Planejamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {subpaginas.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="group p-5 md:p-6 bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2 md:mb-4">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors uppercase">{item.title}</h4>
                      <ChevronRight className="text-gray-300 group-hover:text-blue-900 transition-all" size={20} />
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{item.desc}</p>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-900 opacity-0 group-hover:opacity-100 transition-all">Ver Detalhes Técnicos</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CARDS DE ATENDIMENTO - pt-10 no mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-10 md:pt-12 border-t border-gray-100">
            <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 text-blue-200">Análise de Viabilidade</h3>
                <p className="text-blue-100 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">Fale com o Dr. Francisco para entender qual o melhor instrumento para proteger o seu patrimônio hoje.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all">
                  <MessageCircle size={18} className="mr-2" /> Canais de Atendimento
                </a>
                <a href="tel:1531911432" className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">Unidade Administrativa</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 italic">São Paulo - Faria Lima. Suporte na gestão de documentação e ativos corporativos.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-500 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px]">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-400 uppercase text-center tracking-widest">Suporte Estratégico</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;