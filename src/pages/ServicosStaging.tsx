import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const ServicosStaging: React.FC = () => {
  // Configurado para o número fixo de Sorocaba que será seu Business
  const whatsappSorocaba = "https://wa.me/551521210044";

  return (
    <MainLayout>
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-gray-700 leading-relaxed text-base text-justify mb-10 border-b border-gray-100 pb-8">
            <p>
              O escritório Carneiro Filho Advocacia atua em demandas selecionadas com ênfase em contencioso patrimonial, familiar, empresarial, fiscal e trabalhista. Nossa atuação é pautada pela análise técnica aprofundada e pela experiência adquirida na advocacia privada, consultoria estratégica e atuação institucional junto a órgãos como a Defensoria Pública do Estado de São Paulo e estruturas corporativas.
            </p>
          </div>

          {/* LISTA DE SERVIÇOS - TEXTO PURO E AUTORIDADE */}
          <div className="space-y-12 mb-20">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito Civil e Contencioso Patrimonial</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Atuação em demandas cíveis, incluindo cobranças, execuções, responsabilidade civil, indenizações, posse e propriedade, além de litígios complexos envolvendo fraude, simulação de negócios e desconsideração da personalidade jurídica.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito de Família</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Demandas de família, incluindo alimentos, guarda, interdições civis, alvarás judiciais e medidas protetivas, com experiência na condução de litígios estruturados e incidentes processuais em múltiplas instâncias.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito das Sucessões</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Inventários judiciais e extrajudiciais, partilhas, testamentos, ações de sonegados e habilitação de crédito, com foco na resolução de controvérsias patrimoniais relevantes e sucessórias.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Planejamento Patrimonial e Sucessório</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify mb-2">Organização patrimonial e sucessória com análise de instrumentos legais específicos para cada realidade familiar e empresarial.</p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold uppercase tracking-widest text-[11px] border-b-2 border-blue-900 pb-0.5 hover:text-blue-700 transition-colors">
                Conhecer instrumentos de planejamento →
              </Link>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito Empresarial</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Recuperação de crédito, cobranças, reintegração de posse de bens, análise de contratos e suporte jurídico focado na atividade e sustentabilidade empresarial.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito Tributário</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Consultoria e contencioso tributário, gestão de passivos fiscais, defesa administrativa e judicial em autos de infração, e assessoria em tributos diretos e indiretos.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito Previdenciário</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Demandas para restabelecimento de benefícios suspensos, concessão de benefícios não pagos e cobranças relacionadas a direitos previdenciários.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">Direito do Trabalho (contencioso)</h2>
              <p className="text-gray-700 leading-relaxed text-base text-justify">Condução de contencioso judicial trabalhista, abrangendo defesa em reclamações e acompanhamento de execuções em ambiente institucional e corporativo.</p>
            </div>
          </div>

          {/* CARDS DE ATENDIMENTO DIFERENCIADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* UNIDADE SOROCABA - PRINCIPAL */}
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-[0.2em] text-sm mb-4 border-b border-blue-800 pb-2 text-blue-200">Unidade Sorocaba (Principal)</h3>
                <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para atendimento e acolhimento de novos casos.</p>
              </div>
              <div className="space-y-3">
                <a href={whatsappSorocaba} className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all">
                  <MessageCircle size={16} className="mr-2" /> WhatsApp Business
                </a>
                <a href="tel:1521210044" className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all border border-white">
                  <Phone size={16} className="mr-2" /> Ligar: (15) 2121-0044
                </a>
              </div>
            </div>

            {/* UNIDADE SÃO PAULO - APOIO */}
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-sm mb-4 border-b border-gray-200 pb-2">Unidade São Paulo</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Suporte administrativo e correio de voz para demandas corporativas.</p>
              </div>
              <div className="space-y-3">
                <a href="tel:1142106194" className="flex items-center justify-center border-2 border-gray-300 text-gray-400 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] cursor-default">
                  <Phone size={16} className="mr-2" /> (11) 4210-6194
                </a>
                <p className="text-[9px] text-gray-400 uppercase text-center tracking-tighter">Atendimento via correio de voz</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;