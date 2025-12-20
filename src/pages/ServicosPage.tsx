import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const ServicosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - Informativo e Institucional */}
        <Banner 
          subtitle="Áreas de Atuação" 
          title="Atendimento jurídico especializado presencial e remoto" 
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          
          {/* Introdução Ética */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              O escritório presta serviços jurídicos nas seguintes áreas, sempre mediante análise prévia da viabilidade jurídica e observância das normas legais e éticas aplicáveis.
            </p>
          </div>

          {/* Grid de Áreas de Atuação - Reduzido às áreas autorizadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Direito de Família */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Direito de Família
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Atuação em demandas relacionadas a relações familiares, incluindo orientação jurídica, elaboração de estratégias processuais e acompanhamento de processos judiciais e extrajudiciais, conforme o caso concreto.
              </p>
            </div>

            {/* Direito das Sucessões */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Direito das Sucessões
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Assessoria jurídica em inventários, partilhas, planejamento sucessório e questões correlatas, com foco na análise técnica das alternativas legais disponíveis.
              </p>
            </div>

            {/* Planejamento Patrimonial */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Planejamento Patrimonial
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Consultoria jurídica voltada à organização patrimonial, sucessória e societária, respeitando os limites legais e a realidade específica de cada cliente.
              </p>
            </div>
          </div>

          {/* Seção de Solicitação de Análise */}
          <div className="text-center bg-gray-50 py-10 rounded-xl border border-gray-200">
            <Link 
              to="/solicitacao-analise" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg"
            >
              Solicitar análise preliminar
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              O envio das informações não constitui contratação de serviços advocatícios.
            </p>
          </div>

        </section>
      </div>
    </MainLayout>
  );
};

export default ServicosPage;