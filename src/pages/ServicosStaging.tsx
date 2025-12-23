import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Header da Página - Reduzido de pt-10/pb-12 para pt-8/pb-8 */}
      <section className="bg-gray-50 pt-8 pb-8 border-b border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Texto Introdutório - Margem inferior reduzida de mb-20 para mb-12 */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify mb-12 border-b border-gray-100 pb-8">
            <p>
              O escritório Carneiro Filho Advocacia atua em demandas selecionadas do Direito Civil, Direito de Família e das Sucessões, Direito Empresarial, Direito Tributário, Direito Previdenciário e Direito do Trabalho, com ênfase em contencioso patrimonial, familiar, empresarial, fiscal e trabalhista, inclusive em casos de elevada complexidade fática e processual.
            </p>
            <p>
              A atuação profissional é pautada pela análise técnica aprofundada das demandas e pela experiência adquirida na advocacia privada, na consultoria empresarial e tributária e na atuação institucional, inclusive como advogado conveniado da Defensoria Pública do Estado de São Paulo e em estruturas corporativas.
            </p>
          </div>

          {/* Grid de Serviços - Espaçamento entre blocos reduzido de space-y-20 para space-y-10 */}
          <div className="space-y-10">
            {/* Direito Civil e Contencioso Patrimonial */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito Civil e Contencioso Patrimonial</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em demandas cíveis em geral, incluindo ações de cobrança, monitórias, execuções, responsabilidade civil, indenizações por danos materiais e morais, vícios construtivos, posse e propriedade, bem como litígios patrimoniais complexos envolvendo fraude, simulação de negócios jurídicos, ocultação de bens e desconsideração da personalidade jurídica.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito de Família */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito de Família</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em demandas de família, incluindo alimentos e suas revisões, guarda, interdições civis, alvarás judiciais, internação compulsória e demais medidas previstas na legislação civil, com experiência na condução de litígios estruturados, incidentes processuais e atuação em múltiplas instâncias, conforme as particularidades de cada caso.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito das Sucessões */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito das Sucessões</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em inventários judiciais e extrajudiciais, partilhas, testamentos, ações de sonegados, reserva de bens, habilitação de crédito e litígios sucessórios complexos, inclusive com desdobramentos em instâncias superiores, quando presentes controvérsias patrimoniais relevantes.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Planejamento Patrimonial e Sucessório */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Planejamento Patrimonial e Sucessório</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Orientação jurídica voltada à organização patrimonial e sucessória, com análise dos instrumentos legais disponíveis, considerando a realidade familiar, empresarial, patrimonial e fiscal de cada caso. Este tema é tratado de forma específica e aprofundada em seção própria do site.
              </p>
              <div className="mb-5">
                <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold uppercase tracking-widest text-[11px] border-b border-blue-900 pb-0.5 hover:text-blue-700 transition-colors">
                  Ir para seção de Planejamento Sucessório
                </Link>
              </div>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito Empresarial</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em demandas empresariais, incluindo recuperação de crédito, ações de cobrança, reintegração de posse de bens cedidos em comodato, análise e gestão de contratos, bem como suporte jurídico a atividades empresariais.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Tributário */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-4">Direito Tributário</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em consultoria e contencioso tributário, com experiência na análise e gestão de passivos fiscais, revisão de obrigações acessórias, defesa administrativa e judicial em autos de infração, bem como assessoria tributária a empresas, abrangendo tributos diretos e indiretos, sempre à luz da legislação vigente e da jurisprudência aplicável.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Previdenciário */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito Previdenciário</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em demandas previdenciárias, incluindo restabelecimento de benefícios suspensos, concessão de benefícios não pagos e cobranças administrativas ou judiciais relacionadas a direitos previdenciários.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito do Trabalho (contencioso) */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide mb-2">Direito do Trabalho (contencioso)</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Atuação em demandas trabalhistas, com experiência na condução e gestão de contencioso judicial, inclusive em ambiente institucional e corporativo, abrangendo defesa em reclamações trabalhistas e acompanhamento de execuções decorrentes de decisões judiciais.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md">
                Encaminhar informações para análise preliminar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;