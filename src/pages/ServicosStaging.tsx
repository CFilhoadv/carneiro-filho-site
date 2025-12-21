import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
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

      {/* Texto Introdutório e Experiência */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify mb-12">
            <p>
              O escritório Carneiro Filho Advocacia atua em demandas selecionadas do Direito Civil, Direito de Família e das Sucessões, Direito Empresarial, Direito Tributário, Direito Previdenciário e Direito do Trabalho, com ênfase em contencioso patrimonial, familiar, empresarial, fiscal e trabalhista, inclusive em casos de elevada complexidade fática e processual.
            </p>
            <p>
              A atuação profissional é pautada pela análise técnica aprofundada das demandas e pela experiência adquirida na advocacia privada, na consultoria empresarial e tributária e na atuação institucional, inclusive como advogado conveniado da Defensoria Pública do Estado de São Paulo e em estruturas corporativas.
            </p>
          </div>

          {/* Listagem de Áreas de Atuação - Ajustada conforme Referência Definitiva */}
          <div className="space-y-10">
            
            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito Civil e Contencioso Patrimonial</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em demandas cíveis em geral, incluindo ações de cobrança, monitórias, execuções, responsabilidade civil, indenizações por danos materiais e morais, vícios construtivos, posse e propriedade, bem como litígios patrimoniais complexos envolvendo fraude, simulação de negócios jurídicos, ocultação de bens e desconsideração da personalidade jurídica.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito de Família</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em demandas de família, incluindo alimentos e suas revisões, guarda, interdições civis, alvarás judiciais, internação compulsória e demais medidas previstas na legislação civil, com experiência na condução de litígios estruturados, incidentes processuais e atuação em múltiplas instâncias, conforme as particularidades de cada caso.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito das Sucessões</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em inventários judiciais e extrajudiciais, partilhas, testamentos, ações de sonegados, reserva de bens, habilitação de crédito e litígios sucessórios complexos, inclusive com desdobramentos em instâncias superiores, quando presentes controvérsias patrimoniais relevantes.
              </p>
            </div>

            {/* Bloco Autônomo: Planejamento Patrimonial */}
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Planejamento Patrimonial e Sucessório</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Orientação jurídica voltada à organização patrimonial e sucessória, com análise dos instrumentos legais disponíveis, considerando a realidade familiar, empresarial, patrimonial e fiscal de cada caso. Este tema é tratado de forma específica e aprofundada em seção própria do site.
              </p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold hover:underline">
                👉 Saiba mais sobre Planejamento Sucessório
              </Link>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito Empresarial</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em demandas empresariais, incluindo recuperação de crédito, ações de cobrança, reintegração de posse de bens cedidos em comodato, análise e gestão de contratos, bem como suporte jurídico a atividades empresariais.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito Tributário</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em consultoria e contencioso tributário, com experiência na análise e gestão de passivos fiscais, revisão de obrigações acessórias, defesa administrativa e judicial em autos de infração, bem como assessoria tributária a empresas, abrangendo tributos diretos e indiretos, sempre à luz da legislação vigente e da jurisprudência aplicável.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito Previdenciário</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em demandas previdenciárias, incluindo restabelecimento de benefícios suspensos, concessão de benefícios não pagos e cobranças administrativas ou judiciais relacionadas a direitos previdenciários.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Direito do Trabalho (contencioso)</h2>
              <p className="text-gray-700 leading-relaxed">
                Atuação em demandas trabalhistas, com experiência na condução e gestão de contencioso judicial, inclusive em ambiente institucional e corporativo, abrangendo defesa em reclamações trabalhistas e acompanhamento de execuções decorrentes de decisões judiciais.
              </p>
            </div>

          </div>

          {/* CTA Final Padronizado */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
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