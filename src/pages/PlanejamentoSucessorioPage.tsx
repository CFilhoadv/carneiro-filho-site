import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const PlanejamentoSucessorioPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - Informativo e Institucional */}
        <Banner
          subtitle="Planejamento Sucessório" 
          title="Planejamento Sucessório e Organização Patrimonial" 
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <div className="relative py-16 bg-white">
          <div className="container mx-auto px-4">
            
            {/* Texto Institucional Principal */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O planejamento sucessório é uma abordagem jurídica que visa organizar a transmissão do patrimônio de forma ordenada, conforme os objetivos e a situação específica de cada família ou empresário.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Neste espaço são apresentadas informações sobre os principais instrumentos jurídicos utilizados no planejamento sucessório, suas características gerais e aspectos que devem ser considerados na tomada de decisões.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                A escolha das alternativas juridicamente adequadas depende de análise individualizada das circunstâncias fáticas, familiares, patrimoniais e legais de cada caso.
              </p>
            </div>

            {/* Ação Ética Centralizada - LINK CORRIGIDO */}
            <div className="text-center mb-16">
              <Link
                to="/analise-preliminar" 
                className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg"
              >
                👉 Encaminhar informações para análise preliminar
              </Link>
              <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
                O envio das informações não constitui contratação de serviços advocatícios nem cria expectativa de resultado.
              </p>
            </div>

            {/* Grid de Cards de Navegação para Áreas Específicas */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                {/* Card: Doação com Usufruto */}
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Doação com Usufruto</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Informações sobre o instituto jurídico que permite a transmissão da propriedade com reserva de direitos de uso.
                  </p>
                  <Link to="/doacao-com-usufruto" className="text-blue-700 hover:text-blue-900 text-sm font-bold uppercase tracking-wider">
                    Acessar detalhes →
                  </Link>
                </div>

                {/* Card: Holding Familiar */}
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Holding Familiar</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Aspectos gerais sobre estruturas societárias voltadas à administração de bens e direitos familiares.
                  </p>
                  <Link to="/holding-familiar" className="text-blue-700 hover:text-blue-900 text-sm font-bold uppercase tracking-wider">
                    Acessar detalhes →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                {/* Card: Inventários */}
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Inventários</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Orientações sobre os procedimentos destinados à partilha de bens conforme a legislação civil.
                  </p>
                  <Link to="/inventarios" className="text-blue-700 hover:text-blue-900 text-sm font-bold uppercase tracking-wider">
                    Acessar detalhes →
                  </Link>
                </div>

                {/* Card: Testamentos */}
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Testamentos</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Informações sobre as modalidades de disposição de bens respeitando os limites legais vigentes.
                  </p>
                  <Link to="/testamentos" className="text-blue-700 hover:text-blue-900 text-sm font-bold uppercase tracking-wider">
                    Acessar detalhes →
                  </Link>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="w-full md:w-1/2">
                  {/* Card: Administração de Bens Próprios */}
                  <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Administração de Bens Próprios</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Aspectos jurídicos relacionados à gestão, conservação e exploração econômica de ativos.
                    </p>
                    <Link to="/administradoras-de-bens-proprios" className="text-blue-700 hover:text-blue-900 text-sm font-bold uppercase tracking-wider">
                      Acessar detalhes →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioPage;