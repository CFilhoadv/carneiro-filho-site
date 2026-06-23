import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';
import { ShieldCheck, Building2, Landmark, Scale, ChevronRight, MessageCircle, FileText, Users, Users2 } from 'lucide-react';

import fachadaSorocaba from '../assets/images/edificio-avenida-paulista.jpeg';

const HomeStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:+551531911432";

  return (
    <MainLayout>
      {/* 1. BANNER */}
      <section className="relative h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner Carneiro Filho" className="w-full h-full object-cover brightness-[0.45]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-6 drop-shadow-2xl max-w-5xl mx-auto leading-tight">
            Proteção jurídica dos seus direitos e do seu patrimônio
          </h1>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-blue-100 text-sm md:text-lg font-medium tracking-wide opacity-90">
              Atendimento digital por WhatsApp em Sorocaba e região, com orientação clara e condução técnica.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO DE DIRECIONAMENTO (70/20/10) */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-blue-900 font-bold text-xl uppercase tracking-widest mb-8">Como podemos te atender?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* ATENDIMENTO RÁPIDO */}
            <div className="flex flex-col p-6 border-2 border-green-500 rounded-sm text-center">
              <div className="flex flex-col items-center flex-grow">
                <MessageCircle className="text-green-600 mb-4" size={32} />
                <span className="font-bold text-gray-900 uppercase text-base mb-2">Atendimento rápido (WhatsApp)</span>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">Para o cidadão e empresas locais que buscam orientação ágil e solução para problemas do dia a dia.</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 text-white py-3 font-bold uppercase text-xs hover:bg-green-700 transition-colors">
                Falar no WhatsApp
              </a>
            </div>

            {/* PLANEJAMENTO */}
            <div className="flex flex-col p-6 border-2 border-blue-900 rounded-sm text-center">
              <div className="flex flex-col items-center flex-grow">
                <ShieldCheck className="text-blue-900 mb-4" size={32} />
                <span className="font-bold text-gray-900 uppercase text-base mb-2">Planejamento Sucessório / Proteção Patrimonial</span>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">Para quem possui imóveis ou empresas e busca soluções estruturadas com segurança jurídica.</p>
              </div>
              <Link to="/planejamento-sucessorio" className="w-full bg-blue-900 text-white py-3 font-bold uppercase text-xs hover:bg-blue-800 transition-colors">
                Conhecer Soluções
              </Link>
            </div>

            {/* PARCERIAS */}
            <div className="flex flex-col p-6 border-2 border-amber-500 rounded-sm text-center">
              <div className="flex flex-col items-center flex-grow">
                <Users className="text-amber-600 mb-4" size={32} />
                <span className="font-bold text-gray-900 uppercase text-base mb-2">Parcerias Estratégicas</span>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">Para escritórios de contabilidade que demandam uma retaguarda jurídica e societária de alta complexidade.</p>
              </div>
              <Link to="/parcerias" className="w-full bg-amber-600 text-white py-3 font-bold uppercase text-xs hover:bg-amber-700 transition-colors">
                Acessar Hub de Parcerias
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SITUAÇÕES MAIS COMUNS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-900 font-bold text-xl md:text-2xl uppercase tracking-widest mb-2">Situações mais comuns</h3>
            <div className="h-1.5 w-16 bg-blue-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { t: "INSS: benefício negado / BPC / aposentadoria", icon: <Landmark size={20} /> },
              { t: "Mitigação de Riscos e Recuperação de Créditos Fiscais", icon: <FileText size={20} /> },
              { t: "Divórcio, Guarda, Pensão, Inventários e Direitos de Família", icon: <Scale size={20} /> },
              { t: "Contencioso Tributário Administrativo e Judicial", icon: <Building2 size={20} /> },
              { t: "Defesa do Consumidor e Indenizações por Prejuízos", icon: <ShieldCheck size={20} /> },
              { t: "Conflitos Societários, Contratos e Relações de Consumo", icon: <Users2 size={20} /> }
            ].map((item, idx) => (
              <a key={idx} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white border border-gray-200 hover:border-blue-900 transition-all group">
                <div className="flex items-center gap-3">
                  <span className="text-blue-900">{item.icon}</span>
                  <span className="text-base font-bold text-gray-700 uppercase tracking-tight text-left">{item.t}</span>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#25D366] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.15em] text-xs md:text-sm hover:bg-green-700 transition-all shadow-xl group">
              Iniciar Atendimento Digital <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-gray-600 text-base font-medium">
              Atendimento inicial por WhatsApp para entender o caso e orientar os próximos passos.
            </p>
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-50 rounded-sm shadow-md mb-6 border-b-4 border-blue-900 overflow-hidden flex items-center justify-center">
              <img src={fachadaSorocaba} alt="Edifício Avenida Paulista - Campolim" className="w-auto h-auto max-h-[550px] md:max-h-[650px] object-contain" />
            </div>
            <div className="w-full px-2 text-center">
              <h4 className="font-bold text-blue-900 text-xl uppercase tracking-widest mb-1">Sorocaba</h4>
              <p className="text-red-800 bg-red-50 border border-red-200 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm inline-block mb-4">
                ⚠️ Atendimento exclusivamente mediante agendamento prévio
              </p>
              <p className="text-gray-700 text-base font-medium leading-relaxed mb-4">
                Av. Profa. Izoraida Marques Peres, 256, 9º andar<br />
                Ed. Avenida Paulista — Campolim<br />
                Sorocaba/SP — CEP 18048-110
              </p>
              <a href={telSorocaba} className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors italic block mt-2">
                (15) 3191-1432
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <section className="py-12 bg-gray-900 text-white border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Para clients</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all">
              Preciso de atendimento
            </a>
          </div>
          <div className="h-px w-12 bg-gray-700 md:h-12 md:w-px"></div>
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Para profissionais</p>
            <Link to="/parcerias" className="inline-block border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all">
              Sou parceiro
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;