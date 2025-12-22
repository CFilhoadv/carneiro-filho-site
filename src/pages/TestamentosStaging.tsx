import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const TestamentosStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            Testamentos
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Instrumento de Planejamento Sucessório)
            </p>
            <p>
              O testamento é o ato jurídico pelo qual uma pessoa dispõe sobre a destinação de seus bens para depois de sua morte, respeitados os limites impostos pela lei.
            </p>
            <p>
              É indicado para organizar a sucessão em situações como famílias recompostas, proteção de herdeiros específicos ou prevenção de conflitos familiares.
            </p>
            <p>
              Sua elaboração deve observar as formalidades legais, a <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio reservada por lei) e os efeitos patrimoniais e familiares futuros.
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-red-800 italic text-base mt-8">
              <strong>Aviso:</strong> Testamentos mal elaborados podem ser anulados ou gerar litígios, motivo pelo qual exigem orientação jurídica técnica e individualizada.
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestamentosStaging;