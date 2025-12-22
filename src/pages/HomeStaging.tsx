import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* HERO SECTION: Altura reduzida e contraste aprimorado */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
            alt="Fundo institucional jurídico" 
            className="w-full h-full object-cover"
          />
          {/* Overlay mais denso para contraste do texto */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              CARNEIRO FILHO ADVOCACIA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light tracking-wide uppercase">
              Soluções Patrimoniais, Sucessórias e Empresariais
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                to="/planejamento-sucessorio" 
                className="bg-blue-900 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Planejamento Sucessório
              </Link>
              <Link 
                to="/contato" 
                className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE: Espaçamento recompactado (py-12 em vez de py-24) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Atuação Jurídica Técnica e Personalizada</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O escritório Carneiro Filho Advocacia oferece assessoria especializada com foco na preservação patrimonial e organização sucessória, pautando-se pelo rigor técnico e pela transparência em todas as etapas do atendimento.
          </p>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS: Layout mais denso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-900 pl-4">Sucessões</h3>
              <p className="text-gray-600 mb-6 text-sm">Organização da transmissão patrimonial e gestão de inventários judiciais e extrajudiciais.</p>
              <Link to="/servicos" className="text-blue-900 font-bold text-sm hover:underline">Saiba mais →</Link>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-900 pl-4">Patrimonial</h3>
              <p className="text-gray-600 mb-6 text-sm">Estruturação de holdings, doações e administração de bens imóveis próprios.</p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold text-sm hover:underline">Saiba mais →</Link>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-900 pl-4">Empresarial</h3>
              <p className="text-gray-600 mb-6 text-sm">Assessoria técnica em demandas contratuais, tributárias e contencioso empresarial.</p>
              <Link to="/servicos" className="text-blue-900 font-bold text-sm hover:underline">Saiba mais →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL: Recompactado */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Inicie uma Análise Preliminar</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Encaminhe as informações iniciais de sua demanda para avaliação técnica.
          </p>
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-white text-blue-900 px-10 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Acessar Formulário
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;