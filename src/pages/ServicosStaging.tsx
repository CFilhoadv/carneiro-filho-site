import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { 
  MessageCircle, Users, Landmark, ShieldCheck, 
  ChevronRight, Scale, FileText, 
  HeartHandshake, Gavel, Building2, Wallet 
} from 'lucide-react';

const ServicosStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";

  return (
    <MainLayout>
      {/* Botão Flutuante WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce">
        <MessageCircle size={30} />
      </a>

      {/* TÍTULO DA PÁGINA */}
      <section className="bg-white pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">Serviços</h1>
          <div className="h-1 w-16 md:h-1.5 md:w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* AJUSTE 3.3: BLOCO DE DIRECIONAMENTO 70/20/10 (TOPO) */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 70% */}
            <a href={whatsappLink} target="_blank" rel="noopener" className="p-6 border-2 border-green-500 rounded-sm hover:bg-green-50 transition-colors flex flex-col items-center text-center">
              <MessageCircle className="text-green-600 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-xs">Atendimento rápido (WhatsApp)</span>
              <p className="text-gray-500 text-[10px] mt-1 font-medium">Triagem inicial e orientação sobre próximos passos.</p>
            </a>
            {/* 20% */}
            <Link to="/planejamento-sucessorio" className="p-6 border-2 border-blue-900 rounded-sm hover:bg-blue-50 transition-colors flex flex-col items-center text-center">
              <ShieldCheck className="text-blue-900 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-xs">Inteligência Patrimonial e Sucessória</span>
              <p className="text-gray-500 text-[10px] mt-1 font-medium">Indicado para múltiplos imóveis ou sucessão empresarial.</p>
            </Link>
            {/* 10% */}
            <Link to="/parcerias" className="p-6 border-2 border-gray-300 rounded-sm hover:bg-gray-50 transition-colors flex flex-col items-center text-center">
              <Users className="text-gray-600 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-xs">Parcerias (contadores, imobiliárias, instituições)</span>
              <p className="text-gray-500 text-[10px] mt-1 font-medium">Alinhamento técnico e fluxo de indicação seguro.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* AJUSTE 3.3: SEÇÃO SITUAÇÕES MAIS COMUNS (8 CARDS) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase text-center mb-10 tracking-wide">Situações mais comuns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "INSS: aposentadoria, BPC/LOAS, auxílio-doença", icon: <Landmark size={20}/> },
              { t: "Pensão, divórcio e guarda", icon: <HeartHandshake size={20}/> },
              { t: "Inventário e partilha", icon: <Users size={20}/> },
              { t: "Negativação/cobrança indevida e dano moral", icon: <Gavel size={20}/> },
              { t: "Dívidas, contratos e cobranças", icon: <FileText size={20}/> },
              { t: "Problemas com banco/financiamento (revisão)", icon: <Wallet size={20}/> },
              { t: "Dívida ativa/IPTU e cobranças de prefeitura", icon: <Scale size={20}/> },
              { t: "Imóvel: regularização e documentação", icon: <Building2 size={20}/> }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-5 border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="text-blue-900 mb-3 text-left">{card.icon}</div>
                <p className="text-sm font-bold text-gray-800 uppercase leading-tight mb-4 min-h-[40px] text-left">{card.t}</p>
                <a href={whatsappLink} target="_blank" rel="noopener" className="w-full py-3 bg-green-600 text-white text-[10px] font-bold uppercase text-center hover:bg-green-700 transition-colors rounded-sm">
                  Falar no WhatsApp
                </a>
              </div>
            ))}
          </div>
          
          {/* MICROFILTRO ABAIXO DOS CARDS */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-xs md:text-sm font-medium italic">
              Para agilizar, informe sua cidade e, se houver, envie foto da intimação/documento.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO PREMIUM REFORÇADO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 border-2 border-blue-900 bg-blue-50 rounded-sm text-left shadow-sm">
            <h2 className="text-blue-900 font-bold text-xl uppercase mb-4 tracking-tight">Inteligência Patrimonial e Sucessória</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Soluções estruturadas para preservação de ativos, organização sucessória e segurança jurídica para famílias e empresas.
            </p>
            <Link to="/planejamento-sucessorio" className="inline-flex items-center bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all group rounded-sm">
              Conhecer Planejamento Sucessório <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;