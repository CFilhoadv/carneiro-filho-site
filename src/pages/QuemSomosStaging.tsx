import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const QuemSomosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho Padronizado - Fundo Branco e Texto Azul Marinho */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            Quem Somos
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 leading-relaxed text-justify">
            
            {/* Apresentação Institucional do Escritório */}
            <div>
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wider mb-4">
                Institucional
              </h2>
              <p className="text-lg">
                O escritório <strong>Carneiro Filho Sociedade Individual de Advocacia</strong> (OAB/SP nº 47.631) 
                consolida-se como uma estrutura jurídica pautada pela maturidade técnica e pelo rigor ético. 
                Com sede administrativa e atuação voltada ao atendimento de famílias, empresários e famílias empresárias, 
                a instituição prioriza a segurança jurídica e a condução estratégica de questões complexas.
              </p>
            </div>

            {/* Apresentação Nominal do Advogado Responsável */}
            <div>
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wider mb-4">
                Advogado Responsável
              </h2>
              <p className="text-lg">
                A liderança e a condução técnica dos trabalhos são exercidas diretamente por 
                <strong> Francisco de Assis Carneiro Filho</strong> (OAB/SP nº 189.404). 
                Sua atuação é caracterizada pelo acompanhamento pessoal e pela visão integrada de cada demanda, 
                garantindo que o cliente tenha acesso direto à análise técnica do titular.
              </p>
            </div>

            {/* Trajetória Profissional */}
            <div>
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wider mb-4">
                Trajetória Profissional
              </h2>
              <p className="text-lg">
                Com uma formação e trajetória jurídica consistentes, a experiência profissional de Francisco de Assis Carneiro Filho 
                inclui vivência institucional relevante na <strong>Defensoria Pública</strong>, ambiente que exigiu 
                alta capacidade de resolução técnica e gestão estratégica de direitos. Sua maturidade profissional foi consolidada 
                através da atuação em contextos administrativos, patrimoniais, tributários e de gestão, proporcionando uma 
                compreensão profunda dos mecanismos que regem a organização de ativos e a tomada de decisões complexas.
              </p>
            </div>

            {/* Visão Integrada e Método */}
            <div>
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wider mb-4">
                Visão Integrada de Reflexos Jurídicos
              </h2>
              <p className="text-lg">
                Nosso método de trabalho fundamenta-se em uma análise técnica que considera os impactos simultâneos 
                nas esferas <strong>patrimonial, tributária, administrativa e familiar</strong>. Entendemos que decisões 
                jurídicas não podem ser tomadas de forma isolada; elas exigem uma visão integrada para evitar riscos colaterais. 
                Essa abordagem é especialmente direcionada a famílias com patrimônio constituído e empresários que buscam 
                uma condução sóbria, corporativa e tecnicamente sólida para sua governança e sucessão.
              </p>
            </div>

            {/* Compromisso Ético */}
            <div className="bg-gray-50 p-8 border-l-4 border-blue-900">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-4">
                Compromisso Ético e Legal
              </h2>
              <p className="text-base text-gray-700">
                A Carneiro Filho Sociedade Individual de Advocacia atua em estrita observância ao 
                <strong> Estatuto da Advocacia e ao Código de Ética da OAB</strong>. Nosso compromisso é com a transparência, 
                o sigilo profissional e a lealdade técnica, prezando pela clareza absoluta quanto às viabilidades e riscos 
                inerentes a cada procedimento jurídico, sem jamais realizar promessas de resultado.
              </p>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default QuemSomosStaging;