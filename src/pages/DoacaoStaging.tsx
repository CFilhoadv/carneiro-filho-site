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
              A doação com reserva de usufruto é o instrumento jurídico pelo qual uma pessoa transfere a propriedade de um bem aos herdeiros, mantendo para si o direito de uso, administração e percepção dos rendimentos do bem (<strong>usufruto:</strong> direito de utilizar o bem e receber seus frutos, como aluguéis, mesmo sem ser o proprietário formal).
            </p>
            <p>
              Esse instrumento é amplamente utilizado para organizar a sucessão patrimonial ainda em vida, permitindo que o titular mantenha o controle do patrimônio enquanto antecipa a transmissão da propriedade, reduzindo riscos de conflitos futuros e evitando a concentração de bens exclusivamente no inventário.
            </p>
            <p>
              A sua utilização exige atenção especial à <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio que a lei reserva obrigatoriamente a cônjuge, descendentes e ascendentes), bem como aos impactos tributários, registrais e sucessórios envolvidos.
            </p>
            <div className="bg-red-50 p-6 border-l-4 border-red-800 italic text-base mt-8 text-red-900">
              <strong>⚠️ Alerta:</strong> A adoção inadequada desse instrumento pode gerar nulidades, questionamentos fiscais ou litígios familiares, motivo pelo qual sua aplicação deve ser precedida de análise jurídica individualizada.
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