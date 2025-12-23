import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Header Compacto */}
      <section className="bg-gray-50 pt-6 pb-6 border-b border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introdução Unificada e Direta */}
          <div className="text-gray-700 leading-relaxed text-base text-justify mb-10 border-b border-gray-100 pb-6">
            <p>
              O escritório Carneiro Filho Advocacia atua em demandas selecionadas com ênfase em contencioso patrimonial, familiar, empresarial, fiscal e trabalhista. Nossa atuação é pautada pela análise técnica aprofundada e pela experiência adquirida na advocacia privada, consultoria estratégica e atuação institucional junto a órgãos como a Defensoria Pública do Estado de São Paulo e estruturas corporativas.
            </p>
          </div>

          {/* Grid de Serviços Compacta */}
          <div className="space-y-6">
            {/* Direito Civil e Contencioso Patrimonial */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito Civil e Contencioso Patrimonial</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Atuação em demandas cíveis, incluindo cobranças, execuções, responsabilidade civil, indenizações, posse e propriedade, além de litígios complexos envolvendo fraude, simulação de negócios e desconsideração da personalidade jurídica.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito de Família */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito de Família</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Demandas de família, incluindo alimentos, guarda, interdições civis, alvarás judiciais e medidas protetivas, com experiência na condução de litígios estruturados e incidentes processuais em múltiplas instâncias.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito das Sucessões */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito das Sucessões</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Inventários judiciais e extrajudiciais, partilhas, testamentos, ações de sonegados e habilitação de crédito, com foco na resolução de controvérsias patrimoniais relevantes e sucessórias.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Planejamento Patrimonial e Sucessório */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Planejamento Patrimonial e Sucessório</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-3">
                Organização patrimonial e sucessória com análise de instrumentos legais específicos para cada realidade familiar e empresarial.
              </p>
              <div className="mb-4">
                <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold uppercase tracking-widest text-[10px] border-b border-blue-900 pb-0.5 hover:text-blue-700 transition-colors">
                  Ir para seção de Planejamento Sucessório
                </Link>
              </div>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito Empresarial</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Recuperação de crédito, cobranças, reintegração de posse de bens, análise de contratos e suporte jurídico focado na atividade e sustentabilidade empresarial.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Tributário */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito Tributário</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Consultoria e contencioso tributário, gestão de passivos fiscais, defesa administrativa e judicial em autos de infração, e assessoria em tributos diretos e indiretos.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito Previdenciário */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito Previdenciário</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Demandas para restabelecimento de benefícios suspensos, concessão de benefícios não pagos e cobranças relacionadas a direitos previdenciários.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
                Encaminhar informações para análise preliminar
              </Link>
            </div>

            {/* Direito do Trabalho (contencioso) */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
              <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">Direito do Trabalho (contencioso)</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Condução de contencioso judicial trabalhista, abrangendo defesa em reclamações e acompanhamento de execuções em ambiente institucional e corporativo.
              </p>
              <Link to="/analise-preliminar" className="inline-block bg-blue-900 text-white px-5 py-2.5 rounded-sm font-bold tracking-widest text-[10px] uppercase hover:bg-blue-800 transition-all shadow-sm">
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