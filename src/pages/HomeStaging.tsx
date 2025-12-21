import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

// REFERÊNCIAS PARA IMAGENS MANTIDAS DO ORIGINAL
import bannerFamilia from '../assets/images/banner_família.webp';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner Principal - Ajustado conforme hierarquia oficial */}
      <div className="relative">
        <Banner   
          title="Advocacia técnica, responsável e estratégica."
          subtitle="Carneiro Filho Advocacia"
          description="Atuação jurídica voltada à solução de demandas cíveis, familiares e patrimoniais."
          backgroundImage={bannerFamilia}
          height="h-[450px]"
        />
      </div>

      {/* Seção 1: Introdução Institucional */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Atuação jurídica voltada à solução de demandas cíveis, familiares e patrimoniais, com especial atenção à organização preventiva do patrimônio e à condução responsável de conflitos jurídicos.
            </p>
            <p className="text-lg leading-relaxed">
              O escritório Carneiro Filho Advocacia atua de forma ética, técnica e personalizada, orientando pessoas, famílias e empresas na compreensão de seus direitos, riscos e alternativas legais, sempre com foco na segurança jurídica e na tomada de decisões conscientes.
            </p>
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Bloco: Atuação Jurídica */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Atuação Jurídica</h2>
              <p className="text-gray-600 mb-4">
                O escritório presta assessoria e patrocínio jurídico em demandas que envolvem, entre outras áreas:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Direito Civil</li>
                <li>Direito de Família</li>
                <li>Sucessões</li>
                <li>Defesa do Consumidor</li>
                <li>Direito Previdenciário</li>
                <li>Direito do Trabalho</li>
                <li>Demandas indenizatórias e patrimoniais</li>
              </ul>
              <p className="text-gray-600 text-sm mb-6">
                A atuação é pautada pela análise técnica do caso concreto, pela observância rigorosa da legislação e pela condução responsável do processo jurídico.
              </p>
              <Link to="/servicos" className="text-blue-900 font-semibold hover:underline">
                → Conheça as áreas de atuação
              </Link>
            </div>

            {/* Bloco: Planejamento Sucessório e Patrimonial */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Planejamento Sucessório e Patrimonial</h2>
              <p className="text-gray-700 mb-4">
                O planejamento sucessório é um instrumento jurídico destinado à organização antecipada da transmissão patrimonial, com o objetivo de reduzir conflitos, preservar o patrimônio familiar e conferir maior previsibilidade jurídica às futuras sucessões.
              </p>
              <p className="text-gray-700 mb-6">
                O escritório atua na estruturação de soluções jurídicas adequadas à realidade de cada família, avaliando aspectos civis, sucessórios, patrimoniais e tributários, sempre dentro dos limites legais e com absoluta transparência.
              </p>
              <Link to="/planejamento-sucessorio" className="text-blue-900 font-semibold hover:underline">
                → Saiba mais sobre Planejamento Sucessório
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Como funciona o atendimento */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Como funciona o atendimento</h2>
          <p className="text-center text-gray-700 mb-8">
            O atendimento jurídico é realizado de forma organizada e responsável, seguindo um fluxo que permite a correta compreensão da demanda antes de qualquer manifestação técnica.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ol className="list-decimal pl-6 space-y-3 text-gray-800 font-medium">
              <li>Encaminhamento das informações iniciais</li>
              <li>Análise preliminar da demanda</li>
              <li>Agendamento do atendimento jurídico</li>
            </ol>
          </div>
          
          <p className="text-center text-sm text-gray-600 mb-8">
            Esse método assegura maior clareza, objetividade e respeito ao tempo e às expectativas das partes envolvidas.
          </p>
          
          <div className="text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 3: Experiência e atuação profissional */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-6">Experiência e atuação profissional</h2>
          <p className="text-gray-700 mb-4">
            O escritório é conduzido por profissional com trajetória multidisciplinar, reunindo experiência jurídica, tributária, administrativa e de gestão, adquirida ao longo de décadas de atuação em escritórios, empresas e instituições.
          </p>
          <p className="text-gray-700 mb-8">
            Esta formação permite uma leitura ampliada das questões jurídicas, considerando não apenas o processo, mas também seus impactos patrimoniais, econômicos e familiares.
          </p>
          <Link to="/quem-somos" className="text-blue-900 font-semibold hover:underline">
            Conheça o escritório
          </Link>
        </div>
      </section>

      {/* Seção 4: Fechamento e Rodapé Ético */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 mb-6">
            Cada demanda jurídica possui particularidades próprias e deve ser analisada com responsabilidade e critério técnico.
          </p>
          <p className="text-gray-700 mb-8">
            Caso deseje iniciar o contato, encaminhe as informações iniciais para análise preliminar. O atendimento será conduzido de forma ética, organizada e transparente.
          </p>
          <Link 
            to="/analise-preliminar" 
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors mb-10"
          >
            Encaminhar informações para análise preliminar
          </Link>
          
          <div className="pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic leading-relaxed">
              <strong>Observação ética:</strong> O envio de informações por meio deste site não implica contratação automática de serviços advocatícios, nem gera obrigação de resposta, nos termos da Lei nº 8.906/94 e do Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
};

export default HomeStaging;