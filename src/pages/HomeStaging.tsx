import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* 2. BANNER PRINCIPAL (HERO) - Conteúdo Centralizado */}
      <section className="relative h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 drop-shadow-xl">
              DIREITO AO SEU ALCANCE
            </h2>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-lg">
              Atendimento jurídico humano, claro e acessível para você, sua família e seus direitos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA (FOCO PRINCIPAL) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Nosso compromisso é oferecer um acolhimento dedicado, pautado na clareza e na proximidade. 
              Atuamos com disponibilidade para ouvir sua necessidade e conduzir seu caso de forma responsável e humana, 
              garantindo a orientação jurídica necessária para a proteção de seus interesses.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6 text-center">Áreas de Atuação</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left max-w-2xl mx-auto">
              {[
                "Direito Civil", 
                "Direito de Família e Sucessões", 
                "Direito Previdenciário", 
                "Direito do Trabalho", 
                "Direito Empresarial"
              ].map((area) => (
                <li key={area}>
                  <Link to="/servicos" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors">
                    • {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. BLOCO PLANEJAMENTO SUCESSÓRIO (SECUNDÁRIO) */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-4">Planejamento Patrimonial e Sucessório</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Área específica destinada ao atendimento de famílias com patrimônio constituído e empresários que buscam organização sucessória. 
              Trabalhamos com modelos voltados à preservação de bens e prevenção de conflitos.
            </p>
            <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold text-sm uppercase tracking-widest border-b-2 border-blue-900 pb-1 hover:text-blue-700 transition-colors">
              Conhecer modelos resumidos →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-blue-900 text-white px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-800 transition-colors shadow-sm"
          >
            Análise Preliminar
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;