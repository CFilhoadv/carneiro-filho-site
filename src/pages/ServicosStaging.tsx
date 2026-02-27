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
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce">
        <MessageCircle size={30} />
      </a>

      <section className="bg-white pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">Serviços</h1>
          <div className="h-1 w-16 md:h-1.5 md:w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener" className="p-4 border-2 border-green-500 rounded-sm hover:bg-green-50 transition-colors flex flex-col items-center text-center">
              <MessageCircle className="text-green-600 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-[11px] md:text-xs">Atendimento rápido (WhatsApp)</span>
            </a>
            <Link to="/planejamento-sucessorio" className="p-4 border-2 border-blue-900 rounded-sm hover:bg-blue-50 transition-colors flex flex-col items-center text-center">
              <ShieldCheck className="text-blue-900 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-[11px] md:text-xs">Inteligência Patrimonial</span>
            </Link>
            <Link to="/parcerias" className="p-4 border-2 border-gray-300 rounded-sm hover:bg-gray-50 transition-colors flex flex-col items-center text-center">
              <Users className="text-gray-600 mb-2" size={24} />
              <span className="font-bold text-gray-900 uppercase text-[11px] md:text-xs">Parcerias</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase text-center mb-10 tracking-wide">Situações mais comuns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "INSS: aposentadoria, BPC/LOAS", icon: <Landmark size={20}/> },
              { t: "Pensão, divórcio e guarda", icon: <HeartHandshake size={20}/> },
              { t: "Inventário e partilha", icon: <Users size={20}/> },
              { t: "Negativação e dano moral", icon: <Gavel size={20}/> },
              { t: "Dívidas e contratos", icon: <FileText size={20}/> },
              { t: "Problemas com banco", icon: <Wallet size={20}/> },
              { t: "Dívida ativa/IPTU", icon: <Scale size={20}/> },
              { t: "Imóvel: regularização", icon: <Building2 size={20}/> }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-5 border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="text-blue-900 mb-3 text-left">{card.icon}</div>
                <p className="text-sm font-bold text-gray-800 uppercase leading-tight mb-4 min-h-[40px] text-left">{card.t}</p>
                <a href={whatsappLink} target="_blank" rel="noopener" className="w-full py-2 bg-green-600 text-white text-[10px] font-bold uppercase text-center hover:bg-green-700 transition-colors">
                  Falar no WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 border-2 border-blue-900 bg-blue-50 rounded-sm text-left">
            <h2 className="text-blue-900 font-bold text-xl uppercase mb-4">Inteligência Patrimonial</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Soluções estruturadas para preservação de ativos e segurança jurídica para famílias e empresas.
            </p>
            <Link to="/planejamento-sucessorio" className="inline-flex items-center bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all group">
              Conhecer Planejamento Sucessório <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;