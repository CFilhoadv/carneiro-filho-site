import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const CursosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - FUNDO AZUL conforme identidade visual do site */}
        <Banner 
          title="Cursos e Capacitação"
          subtitle="Impulsione Sua Carreira e Patrimônio com Conhecimento Essencial"
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <section className="py-12 px-4 max-w-6xl mx-auto">

          {/* Lista de Cursos (um embaixo do outro) */}
          <div className="space-y-8 mb-12">
            
            {/* Curso 1: Reforma Tributária */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      NOVO
                    </div>
                    <h3 className="text-xl font-bold">Reforma Tributária</h3>
                  </div>
                </div>
                <div className="md:w-3/4 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Domine a Reforma Tributária: Estratégias para o Sucesso no Novo Cenário Fiscal
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="text-sm">⏱️ Duração: 16 horas</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Curso completo sobre a Reforma Tributária brasileira, seus impactos e estratégias para 
                    adaptação. Ministrado por Francisco de Assis Carneiro Filho, este curso oferece uma visão 
                    abrangente das mudanças fiscais e como se preparar para o novo cenário tributário.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Conteúdo do curso:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Aula 1: Fundamentos do Sistema Tributário Brasileiro</li>
                      <li>• Aula 2: A Reforma Tributária: Tramitação e Mudanças</li>
                      <li>• Aula 3: Detalhamento das Mudanças no Consumo</li>
                      <li>• Aula 4: Impactos Setoriais e Perspectivas Futuras</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-900">R$ 1.490,00</span>
                      <span className="text-gray-600 text-sm ml-2">ou 12x de R$ 124,17</span>
                    </div>
                    <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                      Inscreva-se (Em Breve)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Curso 2: Planejamento Sucessório e Holding Familiar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gray-300 flex items-center justify-center p-8">
                  <div className="text-center text-gray-600">
                    <div className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      EM BREVE
                    </div>
                    <span className="text-sm">Imagem do Curso</span>
                  </div>
                </div>
                <div className="md:w-3/4 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Planejamento Sucessório e Holding Familiar
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="text-sm">⏱️ Duração: 20 horas</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Este curso aborda os fundamentos do planejamento sucessório, com foco na estruturação 
                    de holdings familiares. Ideal para advogados, contadores, administradores e empresários 
                    que desejam compreender as vantagens jurídicas e tributárias deste instrumento.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">O que você vai aprender:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Conceitos fundamentais de planejamento sucessório</li>
                      <li>• Aspectos jurídicos e tributários da holding familiar</li>
                      <li>• Proteção patrimonial e blindagem de bens</li>
                      <li>• Estruturação societária e governança familiar</li>
                      <li>• Estudos de caso e aplicações práticas</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-900">R$ 1.200,00</span>
                      <span className="text-gray-600 text-sm ml-2">ou 12x de R$ 100,00</span>
                    </div>
                    <button 
                      className="bg-gray-400 text-white px-6 py-3 rounded-md cursor-not-allowed font-medium"
                      disabled
                    >
                      Inscrições em breve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Newsletter */}
          <div className="bg-blue-50 rounded-lg p-6 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Fique por dentro dos próximos cursos
            </h3>
            <p className="text-gray-600 mb-4">
              Cadastre-se para receber em primeira mão informações sobre novos cursos, datas 
              de lançamento e promoções exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button disabled className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Cadastrar (Em Breve)
              </button>
            </div>
          </div>

          {/* Seção: Cursos In-Company */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Cursos In-Company
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Oferecemos cursos personalizados para empresas, escritórios de advocacia e departamentos 
                jurídicos, adaptados às necessidades específicas da sua organização.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Conteúdo customizado para sua realidade empresarial</li>
                <li>• Flexibilidade de horários e formato (presencial ou online)</li>
                <li>• Material didático exclusivo</li>
                <li>• Certificado de participação</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Áreas disponíveis para cursos in-company:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Planejamento Sucessório</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Direito Empresarial</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Direito de Família</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Holding Familiar</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Planejamento Tributário</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Proteção Patrimonial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CursosPage;
