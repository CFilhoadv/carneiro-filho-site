import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const CursosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative container mx-auto px-4 font-inter text-center py-20">

        <h1 className="text-4xl font-extrabold text-blue-950 mb-8">
          Outros Cursos e Áreas de Atuação
        </h1>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
          Acesse abaixo os detalhes sobre o curso em lançamento e nossas outras áreas de consultoria.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl leading-relaxed">
            {/* BLOCO ATIVO: DOMINE A REFORMA TRIBUTÁRIA (PÁGINA DE VENDAS ATIVADA) */}
            <div className="p-6 border-4 border-green-500 rounded-lg shadow-lg bg-white">
                <h3 className="text-2xl font-semibold text-blue-950 mb-2">Domine a Reforma Tributária</h3>
                <p className="text-gray-700 text-lg mb-4">
                    **CURSO ATIVO** - Estratégias completas para Planejamento Patrimonial e Empresarial no novo cenário fiscal (2026).
                </p>
                {/* TEXTO DO BOTÃO ALTERADO PARA REFORÇAR O VALOR PROMOCIONAL */}
                <a
                    href="/domine-a-reforma-tributaria" 
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium w-full inline-block text-lg transition duration-300"
                >
                    Acessar Oferta de Lançamento (R$ 797,00)
                </a>
            </div>

            {/* BLOCO: Planejamento Sucessório (Em Breve) */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                <h3 className="text-2xl font-semibold text-blue-950 mb-2">Planejamento Sucessório e Holding Familiar</h3>
                <p className="text-gray-700 text-lg mb-4">
                    Curso sobre fundamentos, aspectos jurídicos e fiscais para proteção e transferência de patrimônio.
                </p>
                <button disabled className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed font-medium w-full text-lg">
                    Em Breve
                </button>
            </div>
            
        </div>
      </div>
    </MainLayout>
  );
};

export default CursosPage;