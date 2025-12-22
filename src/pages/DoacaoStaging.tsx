import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const DoacaoStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            Doação com Reserva de Usufruto
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
              A doação com reserva de usufruto consiste na transferência da propriedade de um bem aos herdeiros, mantendo o doador o direito de uso, administração e percepção dos rendimentos (<strong>usufruto:</strong> direito de utilizar o bem e receber seus frutos, como aluguéis, mesmo sem ser o proprietário formal).
            </p>
            <p>
              Trata-se de instrumento amplamente utilizado no planejamento sucessório para organizar a transmissão patrimonial ainda em vida, reduzindo conflitos futuros e evitando a concentração de bens em inventário judicial.
            </p>
            <p>
              Esse modelo é indicado para famílias que desejam antecipar a sucessão, mantendo o controle patrimonial enquanto vivos, e exige análise cuidadosa quanto à <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio que a lei reserva obrigatoriamente aos herdeiros), bem como aos impactos tributários e registrais.
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-red-800 italic text-base mt-8">
              A utilização inadequada da doação pode gerar nulidades, litígios familiares ou questionamentos fiscais, razão pela qual sua implementação deve ser precedida de avaliação jurídica individualizada.
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

export default DoacaoStaging;