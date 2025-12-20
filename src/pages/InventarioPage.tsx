import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import inventarioBanner from '../assets/images/inventario_banner.webp';

const InventarioPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={inventarioBanner}
          alt="Representação visual de documentos e procedimentos legais"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Título Principal Institucional */}
      <div className="bg-blue-900 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Inventários</h1>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              O inventário é o procedimento judicial ou extrajudicial destinado à identificação, administração e partilha dos bens deixados por pessoa falecida, conforme as regras previstas na legislação civil.
            </p>
            <p>
              A definição da modalidade aplicável depende da situação específica do espólio, da existência de testamento e das circunstâncias dos herdeiros.
            </p>
          </div>
        </section>

        {/* Informações Técnicas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">Procedimentos Previstos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Modalidade Judicial</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Realizada perante o Poder Judiciário, sendo a via aplicável em casos de existência de herdeiros menores ou incapazes, divergência entre os interessados ou existência de testamento, conforme regramento processual vigente.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Modalidade Extrajudicial</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Efetuada por escritura pública em cartório de notas, possível quando todos os herdeiros são maiores, capazes e estão em consenso quanto à partilha dos bens, observados os requisitos da Lei 11.441/07.
              </p>
            </div>
          </div>
        </section>

        {/* Ação Ética Recomendada */}
        <section className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Encaminhamento para Análise</h3>
          <Link
            to="/solicitacao-analise"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg"
          >
            Encaminhar informações para análise preliminar
          </Link>
          <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
            O envio das informações não constitui contratação de serviços advocatícios nem cria expectativa de resultado.
          </p>
        </section>

        {/* Observações Legais Adicionais */}
        <section className="mt-12 text-gray-600 text-sm bg-blue-50 p-6 rounded border-l-4 border-blue-900 text-justify">
          <p>
            <strong>Nota Técnica:</strong> A legislação processual civil estabelece prazos para a abertura do inventário, cuja inobservância pode acarretar a incidência de multas tributárias sobre o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), conforme a competência estadual aplicável. A análise prévia da documentação e da situação patrimonial é essencial para a definição do rito processual adequado.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default InventarioPage;