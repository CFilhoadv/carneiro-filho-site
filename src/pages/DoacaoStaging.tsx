import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const DoacaoStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase text-center">Doação com Usufruto</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase text-center">Instrumentos de Planejamento Sucessório</p>
        </div>
      </section>
      <section className="py-12 bg-white text-justify">
        <div className="container mx-auto px-4 max-w-4xl leading-relaxed text-lg space-y-8">
          <p>Consiste na transferência da propriedade de um bem para os herdeiros enquanto o doador reserva para si o direito de usufruto.</p>
          <div className="mt-12 text-center">
            <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-sm font-bold uppercase text-[10px] tracking-widest mb-6">Análise Preliminar</Link>
            <br />
            <Link to="/planejamento-sucessorio" className="text-blue-900 hover:underline font-medium">← Voltar</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DoacaoStaging;