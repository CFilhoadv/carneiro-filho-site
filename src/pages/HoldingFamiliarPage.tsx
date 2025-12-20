import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import holdingFamiliarBanner from '../assets/images/holding_familiar_banner.webp';

const HoldingFamiliarPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={holdingFamiliarBanner}
          alt="Representação visual de estrutura societária familiar"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Título Principal Institucional */}
      <div className="bg-blue-900 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Holding Familiar</h1>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              A holding familiar é uma estrutura societária que pode ser utilizada para a organização e administração de bens e direitos de uma família.
            </p>
            <p>
              Sua utilização envolve aspectos jurídicos, societários, sucessórios e patrimoniais que devem ser avaliados de forma individualizada, conforme os objetivos e a realidade de cada núcleo familiar ou empresarial.
            </p>
          </div>
        </section>

        {/* Informações sobre Cláusulas de Governança - FONTES CORRIGIDAS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">Aspectos de Governança e Proteção</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            A estruturação de uma holding permite a inclusão de dispositivos contratuais específicos que visam regular a administração do patrimônio e a relação entre os sócios:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-gray-100 rounded bg-gray-50 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Inalienabilidade e Impenhorabilidade</h4>
              <p className="text-gray-700 text-base text-justify leading-relaxed">Cláusulas que visam restringir a transferência de quotas e proteger o patrimônio social frente a obrigações de terceiros, conforme previsão legal.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded bg-gray-50 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Regras Sucessórias</h4>
              <p className="text-gray-700 text-base text-justify leading-relaxed">Definição de procedimentos para a sucessão das quotas em caso de falecimento, buscando a continuidade da administração dos bens.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded bg-gray-50 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Administração e Veto</h4>
              <p className="text-gray-700 text-base text-justify leading-relaxed">Estabelecimento de critérios para a tomada de decisões estratégicas e direitos especiais de gestão para fundadores.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded bg-gray-50 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Pacto de Sócios</h4>
              <p className="text-gray-700 text-base text-justify leading-relaxed">Instrumento para regular direitos de preferência, retirada de sócios e resolução de impasses no âmbito familiar.</p>
            </div>
          </div>
        </section>

        {/* Ação Ética Recomendada */}
        <section className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
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

        {/* Observações Técnicas Adicionais - FONTES CORRIGIDAS */}
        <section className="mt-12 text-gray-700 text-base bg-blue-50 p-6 rounded border-l-4 border-blue-900 shadow-sm">
          <p className="text-justify leading-relaxed">
            <strong>Consideração Importante:</strong> A constituição de uma holding familiar demanda a conformidade com as normas da Junta Comercial e da Receita Federal, além de gerar obrigações contábeis e fiscais periódicas. A viabilidade econômica da estrutura deve ser confrontada com os custos de manutenção e os objetivos de longo prazo da família.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default HoldingFamiliarPage;