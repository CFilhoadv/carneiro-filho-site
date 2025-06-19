import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const PlanejamentoSucessorioPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - FUNDO AZUL conforme identidade visual */}
        {/* ATENÇÃO: INVERTIDO OS VALORES DE 'title' E 'subtitle' PARA CORRIGIR HIERARQUIA */}
        <Banner 
          title="Seu Legado, Nosso Planejamento: Evite Burocracia e Otimize Tributos." // Este agora será o h2 (frase de apoio)
          subtitle="Planejamento Sucessório" // Este agora será o h1 (título principal)
          bgColor="bg-blue-900"
        />
        
        {/* Conteúdo Principal */}
        <div className="relative py-16 bg-white">
          <div className="container mx-auto px-4">
            
            {/* Grid de Cards de Serviços - 2x2 + 1 centralizado */}
            <div className="max-w-6xl mx-auto">
              {/* Primeira linha - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Card: Doação com Usufruto */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Doação com Usufruto</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Maximize o impacto de suas doações enquanto otimiza a carga tributária, garantindo que seu 
                    legado beneficie as causas e pessoas que você mais valoriza.
                  </p>
                  <a href="https://altftect.manus.space/doacoes_modal.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Saiba Mais
                  </a>
                </div>

                {/* Card: Holding Familiar */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Holding Familiar</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Crie uma holding familiar para proteger e gerenciar seu patrimônio, facilitando a sucessão e 
                    reduzindo custos e conflitos futuros.
                  </p>
                  <a href="https://altftect.manus.space/holding_familiar_modal.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Saiba Mais
                  </a>
                </div>
              </div>

              {/* Segunda linha - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Card: Inventários */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Inventários</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Oferecemos suporte completo no processo de inventário, buscando soluções ágeis e menos 
                    onerosas para a partilha de bens, seja judicial ou extrajudicial.
                  </p>
                  <a href="https://altftect.manus.space/inventarios_modal.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Saiba Mais
                  </a>
                </div>

                {/* Card: Testamentos */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Testamentos</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Elabore seu testamento com segurança jurídica, garantindo que seus desejos sejam respeitados 
                    e evitando litígios na transmissão de seu patrimônio.
                  </p>
                  <a href="https://altftect.manus.space/testamentos_modal.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Saiba Mais
                  </a>
                </div>
              </div>

              {/* Terceira linha - 1 card centralizado */}
              <div className="flex justify-center">
                <div className="w-full md:w-1/2">
                  {/* Card: Administradora de Bens Imóveis Próprios */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                       <h3 className="text-xl font-bold text-gray-800 mb-2">Administradora de Bens Imóveis Próprios</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Implemente um sistema de estruturação patrimonial familiar que gerencia e organiza seus bens 
                    imóveis, garantindo proteção e eficiência na sucessão.
                  </p>
                  <a href="https://altftect.manus.space/administradora_bens_imoveis_modal.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Saiba Mais
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção CTA */}
            <div className="text-center mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Precisa de ajuda com seu Planejamento Sucessório?
              </h2>
              <button disabled className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg">
                Consultar (Em Breve)
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioPage;