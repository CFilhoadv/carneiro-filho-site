import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';
import DrFranciscoPhoto from '../assets/images/dr_francisco_nova_foto_grande.webp'; // CORRIGIDO: de .jpeg para .webp

const QuemSomosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner principal da página "Quem Somos" */}
        {/* ATENÇÃO: INVERTIDO OS VALORES DE 'title' E 'subtitle' PARA CORRIGIR HIERARQUIA */}
        {/* 'subtitle' será o H1 (título principal) e 'title' será o H2 (subtítulo/frase de apoio) */}
        <Banner 
          subtitle="Quem Somos" // Este será o H1 (título principal)
          title="Nossa História, Seu Futuro: Tradição e Expertise a Serviço do Seu Patrimônio." // Este será o H2 (subtítulo/frase de apoio)
          bgColor="bg-blue-900"
        />

        {/* Conteúdo Principal */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          
          {/* Layout de duas colunas - foto à esquerda, todo o texto à direita */}
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

            {/* Coluna direita - Todo o conteúdo textual */}
            <div className="md:col-span-8">
              {/* Informações básicas */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">
                  Dr. Francisco Carneiro Filho
                </h2>
                <p className="text-base text-gray-700 mb-3">
                  <strong>OAB/SP 189404</strong>
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Sócio titular do escritório Carneiro Filho Advocacia, especialista 
                  em Planejamento Tributário, Sucessório e Familiar, com foco na 
                  proteção patrimonial e na garantia da segurança jurídica para 
                  seus clientes.
                </p>
              </div>

              {/* Seção: Integração de Know-How Multidisciplinar */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Integração de Know-How Multidisciplinar
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  O diferencial do escritório Carneiro Filho Advocacia está na integração de 
                  conhecimentos multidisciplinares, combinando expertise jurídica com profundo 
                  entendimento de contabilidade, finanças e gestão patrimonial. Esta abordagem 
                  holística permite a criação de soluções personalizadas que atendem às 
                  necessidades específicas de cada cliente.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Com sólida formação acadêmica e ampla experiência como executivo em 
                  grandes empresas, Dr. Francisco Carneiro Filho desenvolveu uma metodologia 
                  única que transforma desafios jurídicos complexos em oportunidades 
                  estratégicas para seus clientes.
                </p>
              </div>

              {/* Seção: Portfólio de Soluções Personalizadas */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Portfólio de Soluções Personalizadas
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  O escritório se destaca pela capacidade de desenvolver soluções jurídicas 
                  sob medida, considerando as particularidades de cada cliente e situação. 
                  Nosso portfólio inclui:
                </p>
                
                <ul className="list-disc pl-5 mb-4 text-base text-gray-700 space-y-1">
                  <li>Planejamento sucessório familiar e patrimonial</li>
                  <li>Estruturação de holdings familiares</li>
                  <li>Proteção patrimonial</li>
                  <li>Reorganização societária</li>
                  <li>Consultoria jurídica preventiva</li>
                </ul>
              </div>

              {/* Seção: Filosofia de Trabalho */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Filosofia de Trabalho
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Acreditamos que cada cliente merece atenção personalizada e soluções que reflitam suas 
                  necessidades específicas. Nossa abordagem consultiva prioriza o relacionamento de longo 
                  prazo, baseado em confiança, transparência e resultados concretos.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  O escritório Carneiro Filho Advocacia não se limita a resolver problemas jurídicos – 
                  trabalhamos para antecipar desafios e criar estratégias que protejam o patrimônio e o 
                  legado de nossos clientes para as gerações futuras.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default QuemSomosPage;