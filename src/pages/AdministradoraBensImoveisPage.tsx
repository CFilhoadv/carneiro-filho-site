import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import administradoraImoveisBanner from '../assets/images/administradora_imoveis_banner.webp';

const AdministradoraBensImoveisPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={administradoraImoveisBanner}
          alt="Representação visual de gestão de ativos imobiliários"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Título Principal Institucional */}
      <div className="bg-blue-900 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Administração de Bens Próprios</h1>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              A administração de bens próprios envolve questões jurídicas relacionadas à gestão, conservação, exploração econômica e organização patrimonial de ativos.
            </p>
            <p>
              As alternativas jurídicas aplicáveis variam conforme os objetivos do titular dos bens e as circunstâncias específicas de cada caso.
            </p>
          </div>
        </section>

        {/* Informações Técnicas - FONTES CORRIGIDAS PARA text-base */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">Aspectos Jurídicos e Operacionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 rounded border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Gestão Centralizada</h4>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Estruturação de veículos jurídicos para a administração unificada de imóveis e ativos, visando a eficiência na conservação e exploração dos bens.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Regime Tributário</h4>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Análise das normas fiscais aplicáveis às receitas decorrentes da exploração de bens próprios, observando a legislação federal e municipal vigente.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Conformidade Legal</h4>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Observância às normas regulatórias sobre o objeto social das empresas e os limites constitucionais relacionados à integralização de capital.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-900 text-base mb-2">Organização Sucessória</h4>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Integração da gestão de bens com estratégias sucessórias para facilitar a transição patrimonial entre gerações conforme o direito civil.
              </p>
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

        {/* Nota de Encerramento - FONTES CORRIGIDAS PARA text-base */}
        <section className="mt-12 text-gray-700 text-base bg-blue-50 p-6 rounded border-l-4 border-blue-900 shadow-sm">
          <p className="text-justify leading-relaxed">
            <strong>Nota Técnica:</strong> A administração de bens por meio de pessoa jurídica deve considerar a preponderância da atividade para fins de benefícios fiscais, como a isenção de ITBI, conforme previsto no Art. 156 da Constituição Federal e no Código Tributário Nacional. A viabilidade técnica da estrutura depende da análise da realidade específica de cada titular de bens.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default AdministradoraBensImoveisPage;