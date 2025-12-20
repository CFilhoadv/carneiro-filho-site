import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import testamentoBanner from '../assets/images/testamento_banner.webp';

const TestamentoPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={testamentoBanner} 
          alt="Representação visual de formalização de última vontade"
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Título Principal Institucional */}
      <div className="bg-blue-900 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Testamentos</h1>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              O testamento é um instrumento jurídico por meio do qual a pessoa dispõe sobre a destinação de seus bens para após o seu falecimento, respeitados os limites legais.
            </p>
            <p>
              Existem diferentes espécies de testamento, cada uma com requisitos e características próprias, cuja adequação deve ser avaliada conforme a situação concreta do interessado.
            </p>
          </div>
        </section>

        {/* Informações Técnicas sobre as Modalidades */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">Modalidades e Requisitos</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 border border-gray-100 rounded">
              <h4 className="font-bold text-blue-900 text-sm mb-1">Testamento Público</h4>
              <p className="text-gray-600 text-xs text-justify">Lavrado por tabelião em livro de notas, na presença de testemunhas, garantindo registro oficial e segurança quanto à conservação do documento.</p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded">
              <h4 className="font-bold text-blue-900 text-sm mb-1">Testamento Particular</h4>
              <p className="text-gray-600 text-xs text-justify">Escrito pelo próprio testador e lido perante testemunhas, exigindo posterior confirmação judicial após a abertura da sucessão.</p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded">
              <h4 className="font-bold text-blue-900 text-sm mb-1">Testamento Cerrado</h4>
              <p className="text-gray-600 text-xs text-justify">Escrito pelo testador e entregue ao oficial do cartório para auto de aprovação, mantendo o conteúdo sob sigilo até o momento da abertura.</p>
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

        {/* Notas Legais Complementares */}
        <section className="mt-12 text-gray-600 text-sm bg-blue-50 p-6 rounded border-l-4 border-blue-900 text-justify">
          <p>
            <strong>Observação Legal:</strong> A liberdade de testar é limitada pela existência de herdeiros necessários (descendentes, ascendentes e cônjuge), a quem a lei reserva a legítima, correspondente a 50% do patrimônio. O testamento produz efeitos apenas após o óbito e não dispensa a realização do inventário para a efetiva transferência da propriedade.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default TestamentoPage;