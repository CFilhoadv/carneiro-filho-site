import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const QuemSomosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho da Página - Sóbrio */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">QUEM SOMOS</h1>
          <p className="text-xl text-blue-900 font-medium tracking-wide uppercase">
            Carneiro Filho Advocacia
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <p>
              O escritório Carneiro Filho Advocacia atua de forma técnica, ética e responsável na condução de demandas jurídicas cíveis, familiares, sucessórias e patrimoniais, com especial atenção à organização preventiva do patrimônio e à adequada gestão de conflitos jurídicos.
            </p>
            <p>
              A atuação é orientada pela análise criteriosa do caso concreto, pela observância rigorosa da legislação e pela busca de soluções juridicamente seguras, compatíveis com a realidade e os objetivos de cada cliente.
            </p>

            {/* Subseção: Formação */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Atuação profissional e formação multidisciplinar
              </h2>
              <div className="space-y-4">
                <p>
                  O escritório é conduzido por profissional com trajetória multidisciplinar, reunindo experiência jurídica, tributária, administrativa e de gestão, adquirida ao longo de décadas de atuação em escritórios, empresas e instituições.
                </p>
                <p>
                  Essa formação permite uma leitura ampliada das questões jurídicas, considerando não apenas o processo em si, mas também seus reflexos patrimoniais, econômicos, familiares e estratégicos.
                </p>
                <p>
                  A experiência em ambientes corporativos e institucionais contribui para uma atuação mais consciente, técnica e alinhada à tomada de decisões responsáveis.
                </p>
              </div>
            </div>

            {/* Subseção: Forma de Atuação */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Forma de atuação
              </h2>
              <p>
                O atendimento jurídico é estruturado de modo organizado e transparente, respeitando os limites éticos da advocacia e as expectativas das partes envolvidas.
              </p>
              <p>
                Cada demanda é analisada individualmente, com atenção à viabilidade jurídica, aos riscos envolvidos e às alternativas legais disponíveis, evitando soluções padronizadas ou abordagens simplistas.
              </p>
            </div>

            {/* Subseção: Compromisso Ético */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Compromisso ético
              </h2>
              <p>
                O escritório pauta sua atuação pelo estrito cumprimento da Lei nº 8.906/94 (Estatuto da Advocacia) e do Código de Ética e Disciplina da OAB.
              </p>
              <p>
                O envio de informações ou o contato inicial não implica contratação automática de serviços advocatícios, nem gera obrigação de resposta ou resultado, sendo a análise jurídica realizada exclusivamente em atendimento apropriado.
              </p>
            </div>
          </div>

          {/* CTA Único e Final */}
          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
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

export default QuemSomosStaging;