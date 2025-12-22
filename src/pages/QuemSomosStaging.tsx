import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const QuemSomosStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">Quem Somos</h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              O escritório <strong>Carneiro Filho Advocacia</strong> é liderado por <strong>Francisco de Assis Carneiro Filho</strong>, profissional com sólida trajetória jurídica e compromisso com a excelência técnica e ética.
            </p>

            <p>
              Com experiência consolidada em diversas esferas do Direito, sua trajetória profissional inclui atuação relevante na <strong>Defensoria Pública</strong>, onde desenvolveu uma visão humanizada e focada na viabilização de direitos e na resolução de conflitos complexos. Essa vivência institucional moldou a premissa fundamental do escritório: o atendimento jurídico deve ser claro, acessível e pautado na condução responsável de cada caso.
            </p>

            <p>
              Diferente de estruturas corporativas impessoais, o escritório prioriza a proximidade com o cliente, oferecendo uma orientação técnica rigorosa que permite a tomada de decisões seguras, seja no âmbito familiar, civil ou empresarial.
            </p>

            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 mt-12">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Compromisso Ético e Profissional</h2>
              <ul className="space-y-4 text-base">
                <li>• Atendimento exclusivo e personalizado diretamente pelo titular.</li>
                <li>• Transparência total sobre as viabilidades jurídicas de cada demanda.</li>
                <li>• Rigorosa observância ao sigilo profissional e ao Código de Ética da OAB.</li>
                <li>• Foco na prevenção de litígios e na segurança patrimonial e familiar.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 italic pt-8 border-t border-gray-100">
              Aviso Ético: O conteúdo apresentado nesta página tem caráter meramente informativo. O contato inicial, a leitura destas informações ou o envio de mensagens não implicam, por si só, na contratação de serviços profissionais ou no estabelecimento de relação cliente-advogado.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default QuemSomosStaging;