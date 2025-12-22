import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const AbipStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            ABIP – Administração de Bens Imóveis Próprios
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Estrutura Patrimonial Imobiliária)
            </p>
            <p>
              A ABIP é um modelo societário voltado especificamente à administração e exploração de imóveis próprios, como locações residenciais, comerciais ou rurais.
            </p>
            <p>
              Seu objetivo é organizar a atividade imobiliária, permitindo separação entre patrimônio pessoal e gestão de imóveis, além de maior controle financeiro e administrativo (<strong>controle de receitas, despesas e rendimentos</strong>).
            </p>
            <p>
              É indicada para pessoas ou famílias que possuem carteira imobiliária relevante e desejam profissionalizar a gestão dos bens, observando os limites legais, tributários e contábeis aplicáveis.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AbipStaging;