import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';
import DrFranciscoPhoto from '../assets/images/advogado-principal-nova.jpg';

const QuemSomosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner principal - Ajustado para tom institucional */}
        <Banner 
          subtitle="Quem Somos" 
          title="Atendimento jurídico técnico e especializado" 
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Coluna esquerda - Foto do Dr. Francisco */}
            <div className="md:col-span-4 flex justify-start">
              <div className="bg-gray-50 p-2 shadow-sm rounded-lg">
                <img 
                  src={DrFranciscoPhoto} 
                  alt="Dr. Francisco Carneiro Filho" 
                  className="w-full h-auto rounded"
                  style={{ 
                    objectFit: 'cover',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </div>

            {/* Coluna direita - Conteúdo textual em conformidade ética */}
            <div className="md:col-span-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">
                  Francisco de Assis Carneiro Filho
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  <strong>OAB/SP 189404</strong>
                </p>
                
                <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                  <p>
                    Francisco de Assis Carneiro Filho é advogado inscrito na OAB/SP, com atuação concentrada nas áreas de Direito Civil, Direito de Família e Sucessões, bem como em planejamento patrimonial e sucessório.
                  </p>
                  
                  <p>
                    O escritório atua com foco na análise técnica e responsável das demandas, oferecendo orientação jurídica fundamentada, sempre respeitando as particularidades de cada caso e as normas éticas que regem o exercício da advocacia.
                  </p>
                  
                  <p>
                    O atendimento pode ocorrer de forma presencial ou remota, com utilização de ferramentas tecnológicas que permitem a condução eficiente e segura dos serviços jurídicos, sem prejuízo da atenção individualizada ao cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default QuemSomosPage;