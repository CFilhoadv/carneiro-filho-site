import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const TestamentosStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551521210044";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado - Fundo Branco e Texto Azul Marinho */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            Testamento
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
              (Instrumento de Planejamento Sucessório)
            </p>
            <p>
              O testamento é o ato jurídico por meio do qual uma pessoa, em vida, define a destinação de seus bens e direitos para depois de seu falecimento, respeitados os limites legais, especialmente a proteção da <strong>legítima</strong> (parcela do patrimônio reservada por lei aos herdeiros necessários: cônjuge, descendentes e ascendentes).
            </p>
            <p>
              Esse instrumento é utilizado para organizar a sucessão de forma personalizada, atender situações familiares específicas — como famílias recompostas, herdeiros vulneráveis ou proteção de companheiros — e reduzir conflitos decorrentes da sucessão automática prevista em lei.
            </p>
            <p>
              O testamento também permite dispor sobre a parte disponível do patrimônio, incluir cláusulas não patrimoniais e orientar a sucessão empresarial, desde que observadas as formalidades legais.
            </p>
            <div className="bg-red-50 p-6 border-l-4 border-red-800 italic text-base mt-8 text-red-900">
              <strong>⚠️ Alerta:</strong> Testamentos mal elaborados podem ser anulados ou gerar litígios judiciais, razão pela qual sua elaboração exige orientação jurídica técnica e análise individualizada da situação patrimonial e familiar.
            </div>

            {/* BLOCO DE ATENDIMENTO - UNIDADE SOROCABA E SÃO PAULO */}
            <div className="mt-16 pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARD SOROCABA - PRINCIPAL */}
                <div className="bg-blue-900 p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-sm mb-4 border-b border-blue-800 pb-2 text-blue-200">Unidade Sorocaba (Principal)</h3>
                    <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para orientação técnica sobre Testamentos.</p>
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
                    <p className="text-gray-500 text-xs leading-relaxed mb-6">Suporte administrativo e correio de voz corporativo.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center border-2 border-gray-300 text-gray-400 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px]">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </div>
                    <p className="text-[9px] text-gray-400 uppercase text-center tracking-tighter">Atendimento via correio de voz</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link to="/planejamento-sucessorio" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                  ← Voltar para Planejamento Sucessório
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestamentosStaging;