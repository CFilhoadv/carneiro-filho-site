import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const ServicosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        <Banner 
          subtitle="Escritório" 
          title="Áreas de Atuação" 
          bgColor="bg-blue-900" 
        />

        <main className="py-16 px-4 max-w-6xl mx-auto">
          {/* TEXTO INTRODUTÓRIO */}
          <div className="max-w-4xl mx-auto mb-16 text-gray-700 leading-relaxed text-justify">
            <p className="mb-6">
              O escritório Carneiro Filho Advocacia atua em demandas selecionadas do Direito Civil, Direito de Família e das Sucessões, Direito Empresarial, Direito Tributário, Direito Previdenciário e Direito do Trabalho, com ênfase em contencioso patrimonial, familiar, empresarial, fiscal e trabalhista, inclusive em casos de elevada complexidade fática e processual.
            </p>
            <p>
              A atuação profissional é pautada pela análise técnica aprofundada das demandas e pela experiência adquirida na advocacia privada, na consultoria empresarial e tributária e na atuação institucional, inclusive como advogado conveniado da Defensoria Pública do Estado de São Paulo e em estruturas corporativas.
            </p>
          </div>

          {/* LISTAGEM DAS ÁREAS DE ATUAÇÃO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Direito Civil */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito Civil e Contencioso Patrimonial</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em demandas cíveis em geral, incluindo ações de cobrança, monitórias, execuções, responsabilidade civil, indenizações por danos materiais e morais, vícios construtivos, posse e propriedade, bem como litígios patrimoniais complexos envolvendo fraude, simulação de negócios jurídicos, ocultação de bens e desconsideração da personalidade jurídica.
              </p>
            </div>

            {/* Direito de Família */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito de Família</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em demandas de família, incluindo alimentos e suas revisões, guarda, interdições civis, alvarás judiciais, internação compulsória e demais medidas previstas na legislação civil, com experiência na condução de litígios estruturados, incidentes processuais e atuação em múltiplas instâncias, conforme as particularidades de cada caso.
              </p>
            </div>

            {/* Direito das Sucessões */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito das Sucessões</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em inventários judiciais e extrajudiciais, partilhas, testamentos, ações de sonegados, reserva de bens, habilitação de crédito e litígios sucessórios complexos, inclusive com desdobramentos em instâncias superiores, quando presentes controvérsias patrimoniais relevantes.
              </p>
            </div>

            {/* Planejamento Patrimonial e Sucessório */}
            <div className="p-8 bg-blue-50 border border-blue-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Planejamento Patrimonial e Sucessório</h2>
              <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">
                Orientação jurídica voltada à organização patrimonial e sucessória, com análise dos instrumentos legais disponíveis, considerando a realidade familiar, empresarial, patrimonial e fiscal de cada caso.
                Este tema é tratado de forma específica e aprofundada em seção própria do site.
              </p>
              <Link 
                to="/planejamento-sucessorio" 
                className="inline-block text-blue-800 font-semibold hover:underline text-sm"
              >
                👉 Saiba mais sobre Planejamento Sucessório
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito Empresarial</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em demandas empresariais, incluindo recuperação de crédito, ações de cobrança, reintegração de posse de bens cedidos em comodato, análise e gestão de contratos, bem como suporte jurídico a atividades empresariais.
              </p>
            </div>

            {/* Direito Tributário */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito Tributário</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em consultoria e contencioso tributário, com experiência na análise e gestão de passivos fiscais, revisão de obrigações acessórias, defesa administrativa e judicial em autos de infração, bem como assessoria tributária a empresas, abrangendo tributos diretos e indiretos, sempre à luz da legislação vigente e da jurisprudência aplicável.
              </p>
            </div>

            {/* Direito Previdenciário */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito Previdenciário</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em demandas previdenciárias, incluindo restabelecimento de benefícios suspensos, concessão de benefícios não pagos e cobranças administrativas ou judiciais relacionadas a direitos previdenciários.
              </p>
            </div>

            {/* Direito do Trabalho */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Direito do Trabalho (contencioso)</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Atuação em demandas trabalhistas, com experiência na condução e gestão de contencioso judicial, inclusive em ambiente institucional e corporativo, abrangendo defesa em reclamações trabalhistas e acompanhamento de execuções decorrentes de decisões judiciais.
              </p>
            </div>
          </div>

          {/* CTA FINAL (ÚNICO) - LINK CORRIGIDO */}
          <div className="max-w-2xl mx-auto text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg w-full md:w-auto uppercase tracking-tighter"
            >
              👉 Encaminhar informações para análise preliminar
            </Link>
            <p className="mt-4 text-xs text-gray-500 italic max-w-lg mx-auto">
              O envio das informações não constitui contratação de serviços advocatícios nem cria expectativa de resultado.
            </p>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default ServicosPage;