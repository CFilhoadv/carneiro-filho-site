import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const PlanejamentoSucessorioStaging: React.FC = () => {
  // ATUALIZAÇÃO: Links ajustados para as rotas definitivas (sem sufixo staging)
  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao" },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos" },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding" },
    { title: "Administração de Bens Imóveis Próprios (ABIP)", href: "/planejamento-sucessorio/abip" }
  ];

  return (
    <MainLayout>
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">PLANEJAMENTO SUCESSÓRIO</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Carneiro Filho Advocacia
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify mb-12">
            <p>
              O planejamento sucessório é um instrumento jurídico destinado à organização antecipada da transmissão patrimonial, com o objetivo de reduzir conflitos, preservar o patrimônio familiar e conferir maior previsibilidade jurídica às futuras sucessões.
            </p>
            <p>
              O escritório atua na estruturação de soluções jurídicas adequadas à realidade de cada família, avaliando aspectos civis, sucessórios, patrimoniais e tributários, sempre dentro dos limites legais e com absoluta transparência.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Instrumentos Jurídicos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subpaginas.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="p-4 bg-white border border-gray-300 rounded hover:border-blue-900 hover:shadow-md transition-all text-blue-900 font-semibold flex justify-between items-center"
                >
                  {item.title}
                  <span className="text-gray-400">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;