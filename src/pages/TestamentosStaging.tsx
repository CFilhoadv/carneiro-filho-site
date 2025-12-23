import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const TestamentosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho Padronizado - Fundo Branco e Texto Azul Marinho */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            Testamento
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Instrumento de Planejamento Sucessório)
            </p>
            <p>
              O testamento é o ato jurídico por meio do qual uma pessoa, em vida, define a destinação de seus bens e direitos para depois de seu falecimento, respeitados os limites legais, especialmente a proteção da <strong>legítima</strong> (parcela do patrimônio reservada por lei aos herdeiros necessários: cônjuge, descendentes e ascendentes).
            </p>
            <p>
              Esse instrumento é utilizado para organizar a sucessão de forma personalizada, atender situações familiares específicas — como famílias recompostas, herdeiros vulneráveis ou proteção de companheiros — e reduzir conflitos decorrentes da sucessão automática prevista em lei.
            </p>
            <p>
              O testamento também permite dispor sobre a parte disponível do patrimônio, incluir cláusulas não patrimoniais e orientar a sucessão empresarial, desde que observadas as formalidades legais.
            </p>
            <div className="bg-red-50 p-6 border-l-4 border-red-800 italic text-base mt-8 text-red-900">
              <strong>⚠️ Alerta:</strong> Testamentos mal elaborados podem ser anulados ou gerar litígios judiciais, razão pela qual sua elaboração exige orientação jurídica técnica e análise individualizada da situação patrimonial e familiar.
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col items-center gap-8">
              <Link to="/analise-preliminar" className="bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors text-center w-full md:w-auto">
                Encaminhar informações para análise preliminar
              </Link>
              <Link to="/planejamento-sucessorio" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                ← Voltar para Planejamento Sucessório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestamentosStaging;