import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import doacaoUsufrutoBanner from '../assets/images/doacao_usufruto_banner.webp';

const DoacaoComUsufrutoPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={doacaoUsufrutoBanner}
          alt="Representação visual de doação e usufruto"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Título Principal Institucional */}
      <div className="bg-blue-900 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Doação com Usufruto</h1>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              A doação com reserva de usufruto é um instituto jurídico previsto no ordenamento brasileiro que permite a transmissão da propriedade de bens, mantendo ao doador o direito de uso e fruição durante sua vida.
            </p>
            <p>
              Essa modalidade pode ser considerada em contextos de organização patrimonial e sucessória, devendo ser analisada à luz das particularidades familiares, patrimoniais e legais envolvidas em cada situação.
            </p>
          </div>
        </section>

        {/* Informações Técnicas - FONTES CORRIGIDAS PARA text-base */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">Características Gerais</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-base font-semibold text-gray-800">Doador (Usufrutuário)</th>
                  <th className="py-3 px-6 text-left text-base font-semibold text-gray-800">Donatário (Nu-proprietário)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-base leading-relaxed text-justify">
                    Mantém o direito de uso e rendimentos do bem durante o período estabelecido.
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-base leading-relaxed text-justify">
                    Recebe a propriedade, mas a posse plena ocorre após a extinção do usufruto.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-base leading-relaxed text-justify">
                    Responsável pela conservação e encargos ordinários do bem.
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-base leading-relaxed text-justify">
                    Possui a nua-propriedade, com restrições de alienação conforme o contrato.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ação Ética Recomendada */}
        <section className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Encaminhamento para Análise</h3>
          <Link
            to="/analise-preliminar"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg"
          >
            Encaminhar informações para análise preliminar
          </Link>
          <p className="text-sm text-gray-500 mt-4 max-w-md mx-auto italic">
            O envio das informações não constitui contratação de serviços advocatícios nem cria expectativa de resultado.
          </p>
        </section>

        {/* Notas Legais Complementares - FONTES CORRIGIDAS PARA text-base */}
        <section className="mt-12 text-gray-700 text-base bg-blue-50 p-6 rounded border-l-4 border-blue-900">
          <p className="mb-4 text-justify leading-relaxed">
            <strong>Nota Técnica:</strong> A formalização da doação de bens imóveis exige, obrigatoriamente, a lavratura de escritura pública e o respectivo registro na matrícula do imóvel, além do recolhimento do imposto de transmissão (ITCMD) conforme a legislação estadual.
          </p>
          <p className="text-justify leading-relaxed">
            A viabilidade desta estratégia deve observar os limites da legítima, garantindo a reserva da parte indisponível do patrimônio destinada aos herdeiros necessários.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default DoacaoComUsufrutoPage;