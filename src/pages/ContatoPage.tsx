import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

const ContatoPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - AGORA USANDO O COMPONENTE <Banner /> PARA CONSISTÊNCIA */}
        {/* 'subtitle' será o H1 (título principal) e 'title' será o H2 (subtítulo/frase de apoio) */}
        <Banner 
          subtitle="Entre em Contato" // Título principal para o H1
          title="Estamos prontos para atender suas necessidades jurídicas" // Subtítulo para o H2
          bgColor="bg-blue-900" // Cor de fundo padrão
        />

        {/* Conteúdo Principal */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-gray-800 leading-relaxed">
          
          {/* Parágrafo introdutório para preencher o espaço e guiar o usuário */}
          <p className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Utilize os canais abaixo para entrar em contato conosco ou agendar um atendimento inicial com nossa equipe.
            Estamos à disposição para transformar desafios jurídicos em oportunidades estratégicas para seu patrimônio e legado.
          </p>

          {/* NOVO: Container para Informações de Contato e Botão - Agora com layout de 2 colunas em desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto items-start"> {/* Ajustado para 2 colunas, mais espaço, max-w-3xl */}

            {/* Coluna 1 do Grid: Endereço e E-mail */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h2>
              
              {/* Endereço */}
              <div className="flex items-start mb-6"> {/* Adicionado mb-6 para espaçamento inferior */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                    Jardim Paulistano<br />
                    São Paulo/SP, CEP: 01452-001
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start mb-6"> {/* Adicionado mb-6 para espaçamento inferior */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">E-mail</h3>
                  <p className="text-gray-600">
                    contato@carneirofilho.com.br
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna 2 do Grid: Telefone e Horário de Atendimento e Botão */}
            <div className="flex flex-col">
              {/* Telefone */}
              <div className="flex items-start mb-6"> {/* Adicionado mb-6 para espaçamento inferior */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Telefone</h3>
                  <p className="text-gray-600">
                    (11) 4210-6194 (WhatsApp)
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento - ATENÇÃO: TEXTO ATUALIZADO AQUI */}
              <div className="flex items-start mb-6"> {/* Adicionado mb-6 para espaçamento inferior */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h.<br />
                    Agende seu atendimento inicial no dia e horário de sua conveniência, clicando no botão abaixo. O formato da consulta será definido após este primeiro contato.
                  </p>
                </div>
              </div>

              {/* Botão Agendar Atendimento para o Calendly - Alinhado no final da 2ª coluna */}
              <div className="text-center mt-auto md:text-left"> {/* mt-auto para empurrar para o final da coluna, md:text-left para alinhar à esquerda em desktop */}
                <a 
                  href="https://calendly.com/contato-carneirofilho" // URL do Calendly CORRIGIDA
                  target="_blank" // Abre em nova aba
                  rel="noopener noreferrer" // Prática de segurança para target="_blank"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Agendar Atendimento
                </a>
              </div>
            </div>

          </div> {/* Fim do grid principal */}
        </section>
      </div>
    </MainLayout>
  );
};

export default ContatoPage;