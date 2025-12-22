import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner de Entrada: Ajustado para o novo layout consolidado */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={bannerImg} 
            alt="Banner Institucional" 
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl md:border-l-2 md:border-white/40 md:pl-8">
            <h2 className="text-white text-2xl md:text-4xl font-normal tracking-[0.12em] uppercase leading-tight drop-shadow-xl">
              Soluções Patrimoniais, <br className="hidden md:block" />
              Sucessórias e Empresariais
            </h2>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional mantido conforme aprovação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            O escritório Carneiro Filho Advocacia oferece assessoria jurídica técnica e personalizada, 
            voltada à solução responsável de demandas patrimoniais, familiares e empresariais, 
            com rigor técnico e transparência em todas as etapas do atendimento.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-4">Atuação Jurídica</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Contencioso e consultoria técnica em demandas cíveis, empresariais, fiscais e trabalhistas.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest border-b border-blue-900 pb-1 hover:text-blue-700 transition-colors">
                Áreas de Atuação →
              </Link>
            </div>
            <div>
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-4">Planejamento Sucessório</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Estruturação antecipada da transmissão patrimonial e governança de bens familiares e societários.
              </p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold text-xs uppercase tracking-widest border-b border-blue-900 pb-1 hover:text-blue-700 transition-colors">
                Instrumentos Jurídicos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-blue-900 text-white px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-800 transition-colors"
          >
            Análise Preliminar
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;