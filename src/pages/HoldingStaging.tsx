import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HoldingStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho da Página */}
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">HOLDING FAMILIAR</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Instrumentos de Planejamento Sucessório
          </p>
        </div>
      </section>

      {/* Conteúdo Técnico */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              A denominada "Holding Familiar" consiste na constituição de uma pessoa jurídica para a centralização e gestão do patrimônio de uma família. Trata-se de um instrumento de planejamento que visa organizar a administração dos bens e facilitar a futura sucessão patrimonial.
            </p>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Objetivos e Funcionamento
              </h2>
              <p className="mb-4">
                Por meio deste modelo, os bens da família (como imóveis, participações societárias e investimentos) são integralizados ao capital social da empresa. A transmissão do patrimônio aos herdeiros ocorre, então, mediante a doação de quotas ou ações, geralmente com reserva de usufruto e cláusulas restritivas.
              </p>
              <p>
                Este arranjo permite que o patriarca ou a matriarca mantenha o controle e a gestão dos bens e dos rendimentos enquanto houver o usufruto, ao mesmo tempo em que define antecipadamente a transição da propriedade.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Aspectos Relevantes
              </h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Gestão Centralizada:</strong> Facilita a administração de múltiplos ativos sob uma única estrutura jurídica e administrativa.
                </li>
                <li>
                  <strong>Prevenção de Conflitos:</strong> O estabelecimento de regras claras no contrato ou estatuto social auxilia na governança familiar e reduz o potencial de disputas futuras.
                </li>
                <li>
                  <strong>Eficiência Sucessória:</strong> Ao organizar a sucessão via quotas, pode-se evitar ou simplificar consideravelmente o processo de inventário judicial para os bens integrados à holding.
                </li>
                <li>
                  <strong>Análise Tributária:</strong> A viabilidade de uma holding depende de análise criteriosa dos custos tributários envolvidos na integralização, na manutenção da estrutura e na futura distribuição de lucros ou sucessão.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 italic text-base text-left">
              <p>
                <strong>Nota Técnica:</strong> A constituição de uma holding familiar não é uma solução padronizada. Sua implementação exige um estudo jurídico detalhado que considere a composição do patrimônio, a estrutura familiar e os impactos fiscais específicos de cada realidade.
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
          
          <div className="mt-6 text-center">
            {/* ATUALIZAÇÃO: Rota de retorno definitiva */}
            <Link to="/planejamento-sucessorio" className="text-blue-900 hover:underline font-medium">
              ← Voltar para Planejamento Sucessório
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HoldingStaging;