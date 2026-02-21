import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, ShieldCheck, Landmark, Users, ChevronRight, Scale, Handshake } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:+551531911432";
  const telSP = "tel:+551142106194";

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

      {/* 2. CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Inteligência Patrimonial
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
            <div className="lg:col-span-7 space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p className="text-justify">
                O planejamento sucessório é sobre <strong>preservar a harmonia da sua família</strong>. Organizamos a transmissão do patrimônio antecipadamente, evitando processos de inventário lentos e desgastantes.
              </p>
              <p className="text-justify">
                Garantimos que o fruto do seu trabalho seja protegido com a máxima economia tributária e absoluta segurança jurídica através de instrumentos personalizados.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-blue-900 shadow-sm">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6 text-left">Por que Planejar?</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Scale className="text-blue-900 mr-3 shrink-0" size={18} /> Evitar ou Simplificar o Inventário
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Landmark className="text-blue-900 mr-3 shrink-0" size={18} /> Economia Expressiva de Impostos
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <Users className="text-blue-900 mr-3 shrink-0" size={18} /> Prevenir Conflitos Familiares
                </li>
                <li className="flex items-center text-gray-800 font-medium text-sm">
                  <ShieldCheck className="text-blue-900 mr-3 shrink-0" size={18} /> Proteção Contra Dívidas
                </li>
              </ul>
            </div>
          </div>

          {/* NOVO BLOCO: VALIDAÇÃO MULTIDISCIPLINAR (O DIFERENCIAL PARA O PARCEIRO) */}
          <div className="mb-16 md:mb-20 p-6 md:p-8 bg-blue-50 border border-blue-100 rounded-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-blue-900 p-4 rounded-full shrink-0">
                <Handshake className="text-white" size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-blue-900 font-bold uppercase text-sm mb-2 tracking-widest">Atuação Multidisciplinar</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                  "O planejamento sucessório é desenvolvido em conjunto com contadores, consultores e administradores patrimoniais, assegurando o alinhamento técnico e jurídico necessário para a proteção integral do legado."
                </p>
              </div>
            </div>
          </div>

          {/* 4. INSTRUMENTOS JURÍDICOS */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wide mb-8 text-center md:text-left">Soluções de Planejamento e Regularização</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {subpaginas.map((item, index) => (
                <Link key={index} to={item.href} className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors uppercase tracking-tight text-left">{item.title}</h4>
                      <ChevronRight className="text-gray-300 group-hover:text-blue-900 transition-all" size={20} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-left">{item.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900 opacity-0 group-hover:opacity-100 transition-all underline">Ver Detalhes Técnicos</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 5. CARDS DE ATENDIMENTO PADRONIZADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 md:pt-12 border-t border-gray-100">
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-xl flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-blue-200 text-left">Sorocaba • Presencial</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed italic text-left">Inicie sua análise técnica com o suporte direto do Dr. Francisco.</p>
              </div>
              <div className="space-y-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md">
                  <MessageCircle size={18} className="mr-2" /> Iniciar Atendimento Digital
                </a>
                <a href={telSorocaba} className="flex items-center justify-center bg-blue-800 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-md border border-blue-400">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-4 text-left">São Paulo • Administrativo</h3>
                <p className="text-gray-600 text-sm mb-8 italic leading-relaxed text-left">Suporte estratégico e gestão documental para clientes da capital.</p>
              </div>
              <div className="space-y-4">
                <a href={telSP} className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] border-2 border-blue-900 hover:bg-gray-100 transition-all shadow-sm">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </a>
                <p className="text-[10px] text-gray-400 uppercase text-center tracking-widest font-bold">Atendimento Administrativo</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;