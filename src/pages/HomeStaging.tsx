import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';
import { ShieldCheck, Building2, Landmark, Users } from 'lucide-react';

import fachadaSorocaba from '../assets/images/unidade-sorocaba.jpeg';
import fachadaSaoPaulo from '../assets/images/unidade-sp.webp';

const HomeStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:+551531911432";

  return (
    <MainLayout>
      {/* 1. BANNER COMPACTO */}
      <section className="relative h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner Carneiro Filho" className="w-full h-full object-cover brightness-[0.5]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest mb-8 drop-shadow-2xl">
            Estratégia Jurídica para Proteger e Estruturar o seu Patrimônio
          </h2>
          <a href={whatsappLink} target="_blank" rel="noopener" className="bg-[#25D366] px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-green-700 transition-all shadow-xl">
            Iniciar Atendimento Digital
          </a>
        </div>
      </section>

      {/* 2. MOTE DE ATUAÇÃO (Frase de Posicionamento sob o Banner) */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#2B438B] text-base md:text-lg font-medium leading-relaxed">
            Atuação técnica para famílias e empresas. Retaguarda estratégica para parceiros.
          </p>
        </div>
      </section>

      {/* 3. COMO PODEMOS AJUDAR (Agrupamento Estratégico em 4 Blocos) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-blue-900 font-bold text-xl md:text-2xl uppercase tracking-widest mb-2">Como podemos ajudar?</h3>
          <div className="h-1.5 w-16 bg-blue-900 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* Bloco 1: Família e Sucessões */}
            <div className="p-6 border border-gray-100 bg-gray-50 text-left hover:shadow-md transition-shadow">
              <ShieldCheck className="text-blue-900 mb-3" size={24} />
              <h4 className="font-bold text-gray-800 text-sm md:text-base uppercase mb-2 tracking-tight">Família, Sucessões e Planejamento Patrimonial</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Inventários, Divórcios, Doações e Holding Familiar. Organização sucessória para proteger o legado familiar.</p>
            </div>

            {/* Bloco 2: Imobiliário */}
            <div className="p-6 border border-gray-100 bg-gray-50 text-left hover:shadow-md transition-shadow">
              <Building2 className="text-blue-900 mb-3" size={24} />
              <h4 className="font-bold text-gray-800 text-sm md:text-base uppercase mb-2 tracking-tight">Gestão Jurídica Imobiliária e Regularização</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Regularização de imóveis, Due Diligence, Contratos, Usucapião e suporte especializado a Imobiliárias.</p>
            </div>

            {/* Bloco 3: Empresarial e Tributário */}
            <div className="p-6 border border-gray-100 bg-gray-50 text-left hover:shadow-md transition-shadow">
              <Landmark className="text-blue-900 mb-3" size={24} />
              <h4 className="font-bold text-gray-800 text-sm md:text-base uppercase mb-2 tracking-tight">Direito Empresarial e Estratégia Tributária</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Reorganização societária, Planejamento fiscal e suporte jurídico de alta senioridade para empresas e contabilidades.</p>
            </div>

            {/* Bloco 4: Trabalho e Previdenciário */}
            <div className="p-6 border border-gray-100 bg-gray-50 text-left hover:shadow-md transition-shadow">
              <Users className="text-blue-900 mb-3" size={24} />
              <h4 className="font-bold text-gray-800 text-sm md:text-base uppercase mb-2 tracking-tight">Direito do Trabalho e Previdenciário</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Defesa empresarial, Reclamações trabalhistas e concessão de benefícios previdenciários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HUB DE PARCERIAS (Destaque Azul - Máxima Conversão) */}
      <section className="py-14 bg-[#2B438B] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-80">Modelo de Retaguarda</h4>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tight">Contadores, Imobiliárias e Instituições</h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed font-light">
            Integre senioridade jurídica às suas soluções. Oferecemos suporte técnico para potencializar seus negócios e proteger sua carteira de clientes.
          </p>
          <Link to="/parcerias" className="inline-block bg-white text-[#2B438B] px-12 py-3 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-gray-100 transition-all shadow-lg">
            Conhecer Hub de Parcerias
          </Link>
        </div>
      </section>

      {/* 5. UNIDADES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <img src={fachadaSorocaba} alt="Unidade Sorocaba" className="w-full h-[320px] object-cover rounded-sm shadow-md mb-6 border-b-4 border-blue-900" />
              <div className="px-2">
                <h4 className="font-bold text-blue-900 text-lg uppercase tracking-widest mb-1">Sorocaba</h4>
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-tighter italic">Atendimento Presencial e Consultoria</p>
                <p className="text-gray-600 text-sm mb-4">Av. Profa. Izoraida Marques Peres, 256 — Campolim</p>
                <a href={telSorocaba} className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors italic">
                  (15) 3191-1432
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={fachadaSaoPaulo} alt="Unidade São Paulo" className="w-full h-[320px] object-cover rounded-sm shadow-md mb-6 border-b-4 border-gray-300" />
              <div className="px-2">
                <h4 className="font-bold text-gray-800 text-lg uppercase tracking-widest mb-1">São Paulo</h4>
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-tighter italic">Escritório Administrativo</p>
                <p className="text-gray-600 text-sm mb-4">Av. Brigadeiro Faria Lima, 1811 — Conj. 1119</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;