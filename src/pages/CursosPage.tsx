import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const CursosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Padronizado */}
        <Banner 
          subtitle="Capacitação e Atualização" 
          title="Cursos e Áreas de Atuação" 
          bgColor="bg-blue-900" 
        />

        <main className="py-16 px-4 max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-8">
              Outros Cursos e Áreas de Atuação
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Acesse abaixo os detalhes sobre o curso em lançamento e nossas outras áreas de consultoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BLOCO ATIVO: DOMINE A REFORMA TRIBUTÁRIA */}
            <div className="p-8 border-4 border-green-500 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Domine a Reforma Tributária</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  <strong>CURSO ATIVO</strong> - Estratégias completas para Planejamento Patrimonial e Empresarial no novo cenário fiscal (2026).
                </p>
              </div>
              <a
                href="/domine-a-reforma-tributaria" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-md font-bold text-center text-lg transition duration-300 shadow-md"
              >
                Acessar Oferta de Lançamento (R$ 797,00)
              </a>
            </div>

            {/* BLOCO: Planejamento Sucessório (Em Breve) */}
            <div className="p-8 border border-gray-300 rounded-lg shadow-sm bg-gray-50 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Planejamento Sucessório e Holding Familiar</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Curso sobre fundamentos, aspectos jurídicos e fiscais para proteção e transferência de patrimônio.
                </p>
              </div>
              <button 
                disabled 
                className="bg-gray-400 text-white px-6 py-4 rounded-md cursor-not-allowed font-bold text-lg"
              >
                Em Breve
              </button>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CursosPage;