import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../../assets/images/banner_familia.webp';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner Superior Institucional - Imagem Obrigatória */}
      <section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={bannerImg} 
            alt="Banner Institucional" 
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          />
          {/* Overlay Azul Institucional - Equilíbrio entre clareza e harmonia */}
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl border-l-2 border-white/40 pl-6">
            <h2 className="text-white text-2xl md:text-3xl font-medium tracking-[0.12em] uppercase leading-tight drop-shadow-lg">
              Soluções Patrimoniais, <br />
              Sucessórias e Empresariais
            </h2>
          </div>
        </div>
      </section>

      {/* Apresentação Institucional - Hierarquia tipográfica corrigida */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            O escritório Carneiro Filho Advocacia oferece assessoria jurídica técnica e personalizada, 
            voltada à solução responsável de demandas patrimoniais, familiares e empresariais, 
            com rigor técnico e transparência em todas as etapas do atendimento.
          </p>
        </div>
      </section>

      {/* Áreas de Atuação - Ritmo de leitura compactado */}
      <section className="py-10 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-3">Atuação Jurídica</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Contencioso e consultoria técnica em demandas cíveis, empresariais, fiscais e trabalhistas.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest border-b border-blue-900 self-start pb-1 hover:text-blue-700 transition-colors">
                Áreas de Atuação →
              </Link>
            </div>

            <div className="flex flex-col">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-3">Planejamento Sucessório</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Estruturação antecipada da transmissão patrimonial e governança de bens familiares e societários.
              </p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold text-xs uppercase tracking-widest border-b border-blue-900 self-start pb-1 hover:text-blue-700 transition-colors">
                Instrumentos Jurídicos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procedimento de Atendimento */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-gray-900 font-bold uppercase tracking-widest text-[10px] mb-8 text-center opacity-70">Procedimento de Atendimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs text-gray-500 uppercase tracking-widest">
            <div className="px-2">
              <span className="block text-blue-900 font-bold text-lg mb-2">01</span>
              <p>Encaminhamento de informações preliminares</p>
            </div>
            <div className="px-2">
              <span className="block text-blue-900 font-bold text-lg mb-2">02</span>
              <p>Avaliação técnica e análise de viabilidade</p>
            </div>
            <div className="px-2">
              <span className="block text-blue-900 font-bold text-lg mb-2">03</span>
              <p>Agendamento de atendimento especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Institucional */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-blue-900 text-white px-10 py-3 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-800 transition-colors shadow-sm"
          >
            Análise Preliminar
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;