import React from 'react';
import MainLayout from '../components/layout/MainLayout';
// Importação do Link é mantida para o CTA final
import { Link } from 'react-router-dom'; 

const CursosPage: React.FC = () => {

  // FUNÇÃO ADICIONADA: Força a rolagem para o topo ao clicar no link.
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <div className="relative">
        
        {/* HEADLINE E SUBHEADLINE - Adaptado para o novo COPY */}
        <section className="text-center py-16 px-4 bg-blue-950 rounded-b-xl text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Domine a Reforma Tributária Antes dos Seus Concorrentes
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto">
            Curso Prático para Advogados, Contadores e Empresários que Precisam de Estratégias Reais, Não Apenas Teoria
          </h2>
        </section>

        {/* SEÇÃO: POR QUE ESTE CURSO É DIFERENTE? */}
        <section className="py-12 px-4 max-w-6xl mx-auto bg-gray-50">
          <h3 className="text-4xl font-bold text-blue-950 text-center mb-10">
            Por Que Este Curso É Diferente?
          </h3>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Ministrado por <strong className="font-bold">Francisco Carneiro Filho</strong> - uma combinação rara de expertise jurídica, contábil e executiva que você não encontra em outros cursos.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left text-lg">
            {/* Cartão 1: Abordagem Crítica */}
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-950 mb-3">✅ ABORDAGEM CRÍTICA E ESTRATÉGICA</h4>
              <p className="text-gray-700">
                Não vamos apenas repetir o que a lei diz. Ensinamos você a <strong className="font-semibold text-blue-800">pensar como o legislador</strong> - antecipando impactos, identificando armadilhas e construindo estratégias robustas para seus clientes ou negócio.
              </p>
            </div>

            {/* Cartão 2: Visão Multidisciplinar */}
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-950 mb-3">✅ VISÃO MULTIDISCIPLINAR ÚNICA</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Advogado com 30+ anos de experiência</li>
                <li>Contabilista com Pós-Graduação em Contabilidade Tributária</li>
                <li>Ex-executivo de multinacionais (Enron, Gas Natural, Castrol)</li>
                <li>MBA em Gestão Executiva pela FGV</li>
              </ul>
            </div>
            
            {/* Cartão 3: Focado em Resultados */}
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-950 mb-3">✅ FOCADO EM RESULTADOS PRÁTICOS</h4>
              <p className="text-gray-700 mb-2">Cada módulo é acompanhado de:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Checklists de implementação</li>
                <li>Análise de casos reais</li>
                <li>Ferramentas de aplicação imediata</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEÇÃO: GARANTA SEU LUGAR NA LISTA DE ESPERA (FORMULÁRIO CONVERTKIT) */}
        <section className="py-10 px-4 text-center bg-blue-100 rounded-lg shadow-xl mx-auto max-w-lg my-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-950 mb-2">DOMINE A REFORMA TRIBUTÁRIA</h3>
            <p className="text-xl text-gray-700 mb-6">Seja avisado com antecedência do lançamento e garanta condições exclusivas de fundador.</p>
            
            {/* FORMULÁRIO CONVERTKIT - HTML Nativo (JÁ INTEGRADO E FUNCIONAL) */}
            <form action="https://app.convertkit.com/forms/dcca91f77e/subscriptions" method="post" className="seva-form flex flex-col items-center space-y-4">
              <div className="seva-fields w-full max-w-sm">
                <div className="seva-field w-full">
                  <input 
                    type="email" 
                    name="email_address" 
                    placeholder="Seu melhor e-mail" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full mt-4 inline-block rounded-md bg-blue-950 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-blue-800 shadow-md"
                >
                  QUERO SER AVISADO
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* SEÇÃO: QUER VER O CONTEÚDO COMPLETO AGORA? (CTA) */}
        <section className="py-12 px-4 text-center bg-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-950 mb-6">QUER VER O CONTEÚDO COMPLETO AGORA?</h3>
          <Link 
            to="/domine-a-reforma-tributaria" 
            className="inline-block"
            onClick={handleScrollToTop} // CHAMADA ADICIONADA AQUI!
          >
            <button className="bg-green-600 text-white px-10 py-4 rounded-lg hover:bg-green-700 transition-colors font-extrabold text-2xl shadow-xl transform hover:scale-105 duration-300">
              👉 QUERO VER O CONTEÚDO DETALHADO DO CURSO
            </button>
          </Link>
        </section>

        {/* COPY FINAL DE PERSUASÃO */}
        <section className="py-12 px-4 text-center bg-gray-100 mb-12">
          <p className="text-2xl italic leading-relaxed max-w-5xl mx-auto text-gray-700">
            "Este não é apenas 'mais um curso sobre a reforma'. É uma <strong className="font-bold text-blue-950">imersão estratégica</strong> que vai equipar você com a mesma metodologia que usei por décadas em multinacionais e no meu escritório - uma visão <strong className="font-bold text-blue-950">integrada</strong> que une o jurídico, o contábil e o negocial."
          </p>
        </section>

      </div>
    </MainLayout>
  );
};

export default CursosPage;