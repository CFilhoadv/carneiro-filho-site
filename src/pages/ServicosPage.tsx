import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const ServicosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - FUNDO AZUL conforme identidade visual do site */}
        <Banner 
          title="Nossos Serviços"
          subtitle="Advocacia Personalizada e Estratégica para Pessoas e Empresas"
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <section className="py-16 px-4 max-w-6xl mx-auto">



          {/* Seção: Áreas de Atuação */}
          <div className="mb-16">

            {/* Grid de Áreas de Atuação */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Direito de Família e Sucessões */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Direito de Família e Sucessões
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Orientação jurídica humanizada em questões familiares, de sucessões e de planejamento patrimonial, 
                  buscando soluções que preservem relações e protejam o patrimônio.
                </p>
                
                <div className="mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Holdings Familiares e outros Planejamentos
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Divórcio consensual e litigioso</li>
                      <li>• Guarda e regulamentação de visitas</li>
                      <li>• Inventário e partilha de bens</li>
                      <li>• Testamentos e doações</li>
                    </ul>
                  </div>
                </div>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>

              {/* Direito Civil */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Direito Civil
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Assessoria e representação legal completa em questões que regem as relações privadas, como contratos, 
                  responsabilidade civil e direito do consumidor.
                </p>
                
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Responsabilidade Civil</li>
                  <li>• Contratos Civis em Geral</li>
                  <li>• Direito do Consumidor</li>
                  <li>• Questões de Posse e Propriedade</li>
                </ul>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>

              {/* Direito Empresarial */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Direito Empresarial
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Assessoria jurídica completa para empresas de todos os portes, desde a constituição até operações complexas, 
                  garantindo segurança jurídica e conformidade em todas as etapas.
                </p>
                
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Constituição e reorganização societária</li>
                  <li>• Elaboração e revisão de contratos empresariais</li>
                  <li>• Fusões, aquisições e incorporações</li>
                  <li>• Planejamento tributário empresarial</li>
                  <li>• Recuperação judicial e falência</li>
                  <li>• Compliance e governança corporativa</li>
                </ul>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>

              {/* Direito Tributário */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Direito Tributário
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Estratégias tributárias eficazes e suporte jurídico completo, com foco na redução da carga fiscal, 
                  na defesa em processos e na consultoria preventiva.
                </p>
                
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Planejamento Tributário</li>
                  <li>• Defesa em Autuações Fiscais</li>
                  <li>• Recuperação de Créditos Tributários</li>
                  <li>• Consultoria em Obrigações Acessórias</li>
                  <li>• Reestruturação Tributária</li>
                  <li>• Análise de Benefícios Fiscais</li>
                </ul>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>

              {/* Direito Previdenciário */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Direito Previdenciário
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Assessoria completa para trabalhadores, segurados e seus dependentes, atuando junto ao INSS, 
                  regimes próprios e à justiça para garantir seus direitos.
                </p>
                
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Aposentadorias</li>
                  <li>• Pensão por Morte</li>
                  <li>• Auxílio-Doença e Auxílio-Acidente</li>
                  <li>• Benefício de Prestação Continuada (BPC/LOAS)</li>
                  <li>• Planejamento Previdenciário</li>
                  <li>• Revisão de Benefícios Previdenciários</li>
                </ul>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>

              {/* Consultoria Jurídica */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Consultoria Jurídica
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Orientação preventiva e estratégica para decisões seguras e conscientes, identificando riscos, 
                  apontando oportunidades e pavimentando o caminho para seus objetivos.
                </p>
                
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Análise de Riscos Jurídicos</li>
                  <li>• Pareceres Jurídicos Especializados</li>
                  <li>• Consultoria Preventiva</li>
                  <li>• Assessoria em Negociações</li>
                  <li>• Due Diligence Legal</li>
                  <li>• Planejamento Jurídico Estratégico</li>
                </ul>
                
                <button disabled className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full">
                  Consultar (Em Breve)
                </button>
              </div>
            </div>
          </div>

          {/* Seção CTA Final */}
          <div className="bg-blue-900 rounded-lg p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Precisa de assessoria jurídica especializada?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Entre em contato conosco para uma consulta inicial e descubra como podemos ajudar você ou sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#/contato" 
                className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                Agendar Consulta
              </a>
              <a 
                href="#/contato" 
                className="bg-blue-700 text-white px-8 py-4 rounded-md hover:bg-blue-600 transition-colors font-medium text-lg"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ServicosPage;
