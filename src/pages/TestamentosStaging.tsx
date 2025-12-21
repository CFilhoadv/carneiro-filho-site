import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const TestamentosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho da Página */}
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">TESTAMENTOS</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Instrumentos de Planejamento Sucessório
          </p>
        </div>
      </section>

      {/* Conteúdo Técnico */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              O testamento é o ato jurídico unilateral, solene e revogável pelo qual uma pessoa dispõe, no todo ou em parte, de seu patrimônio para depois de sua morte. É um dos instrumentos mais tradicionais do planejamento sucessório, permitindo que o testador manifeste sua vontade quanto à distribuição da parte disponível de seus bens.
            </p>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Modalidades e Formalidades
              </h2>
              <p className="mb-4">
                A legislação brasileira prevê diferentes formas de testamento (público, cerrado e particular), cada qual com requisitos específicos de validade. O testamento público, lavrado em cartório, oferece maior segurança jurídica quanto à conservação e verificação dos requisitos formais.
              </p>
              <p>
                É fundamental observar que o testador que possui herdeiros necessários (descendentes, ascendentes e cônjuge) deve respeitar a "legítima", podendo dispor livremente de até 50% de seu patrimônio.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Funcionalidades do Instrumento
              </h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Distribuição da Parte Disponível:</strong> Permite beneficiar herdeiros em proporções distintas ou incluir terceiros e instituições na sucessão.
                </li>
                <li>
                  <strong>Cláusulas Restritivas:</strong> Possibilidade de gravar bens com cláusulas de inalienabilidade, impenhorabilidade e incomunicabilidade, visando a proteção do patrimônio legado.
                </li>
                <li>
                  <strong>Disposições Não Patrimoniais:</strong> O testamento também pode ser utilizado para questões extrapatrimoniais, como o reconhecimento de filiação ou a nomeação de tutores para filhos menores.
                </li>
                <li>
                  <strong>Revogabilidade:</strong> Por ser um ato de última vontade, o testamento pode ser alterado ou revogado pelo testador a qualquer tempo, enquanto este gozar de plena capacidade civil.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 italic text-base">
              <p>
                <strong>Nota Técnica:</strong> Embora o testamento não dispense a realização do inventário após o falecimento, ele é essencial para conferir segurança jurídica à vontade do testador e prevenir litígios familiares decorrentes da ausência de diretrizes claras sobre a partilha.
              </p>
            </div>
          </div>

          {/* CTA Final Padronizado */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/planejamento-sucessorio-staging" className="text-blue-900 hover:underline font-medium">
              ← Voltar para Planejamento Sucessório
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestamentosStaging;