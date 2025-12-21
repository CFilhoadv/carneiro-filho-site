import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
  const servicos = [
    {
      title: "Direito Civil",
      description: "Atuação em demandas relacionadas a obrigações, contratos, responsabilidade civil, direitos patrimoniais e demais questões próprias das relações civis, sempre com foco na solução juridicamente adequada ao caso concreto."
    },
    {
      title: "Direito de Família",
      description: "Atuação em questões envolvendo relações familiares, como divórcio, alimentos, guarda, regulamentação de convivência, interdição e demais medidas de proteção e organização das relações familiares."
    },
    {
      title: "Sucessões",
      description: "Atuação em inventários judiciais e extrajudiciais, partilhas, orientações sucessórias e demais medidas relacionadas à transmissão patrimonial, observados os limites legais e a realidade de cada família."
    },
    {
      title: "Defesa do Consumidor",
      description: "Atuação na defesa de direitos do consumidor em face de práticas abusivas, cobranças indevidas, falhas na prestação de serviços e demais relações de consumo."
    },
    {
      title: "Direito Previdenciário",
      description: "Atuação em demandas relacionadas a benefícios previdenciários, revisão, restabelecimento e orientações quanto a direitos junto ao sistema previdenciário."
    },
    {
      title: "Direito do Trabalho",
      description: "Atuação em demandas trabalhistas, individuais ou correlatas, observada a legislação aplicável e as circunstâncias específicas de cada relação de trabalho."
    },
    {
      title: "Demandas indenizatórias e patrimoniais",
      description: "Atuação em ações de indenização por danos materiais e morais, bem como em controvérsias que envolvam a proteção e recomposição do patrimônio."
    }
  ];

  return (
    <MainLayout>
      {/* Cabeçalho da Página */}
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">SERVIÇOS</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Carneiro Filho Advocacia
          </p>
        </div>
      </section>

      {/* Texto Introdutório */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify mb-12">
            <p>
              O escritório Carneiro Filho Advocacia atua em diversas áreas do Direito, prestando assessoria e patrocínio jurídico de forma técnica, responsável e personalizada.
            </p>
            <p>
              A atuação é pautada pela análise criteriosa do caso concreto, pela observância rigorosa da legislação e pela condução consciente das demandas, considerando os riscos, alternativas legais e impactos envolvidos em cada situação.
            </p>
          </div>

          {/* Listagem de Áreas de Atuação */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">Áreas de atuação</h2>
            <div className="grid grid-cols-1 gap-6">
              {servicos.map((servico, index) => (
                <div key={index} className="bg-white border-l-4 border-blue-900 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{servico.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{servico.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Forma de Atendimento */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Forma de atendimento</h2>
            <p className="text-gray-700 text-lg mb-6">
              O atendimento jurídico é realizado de forma organizada e responsável, seguindo um fluxo que permite a adequada compreensão da demanda antes de qualquer manifestação técnica. O procedimento consiste em:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg mb-12">
              <li>Encaminhamento das informações iniciais para análise preliminar;</li>
              <li>Avaliação jurídica da demanda, em tese;</li>
              <li>Havendo viabilidade, agendamento do atendimento jurídico.</li>
            </ul>
          </div>

          {/* CTA Final Padronizado */}
          <div className="py-10 text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;