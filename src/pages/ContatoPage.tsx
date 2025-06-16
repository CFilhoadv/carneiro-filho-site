import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const ContatoPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner Principal - FUNDO AZUL conforme identidade visual do site */}
        <div className="relative py-16 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <h2 className="text-white text-xl md:text-2xl font-light">
              Estamos prontos para atender suas necessidades jurídicas
            </h2>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Coluna esquerda - Formulário */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Envie sua mensagem
              </h2>
              
              <form className="space-y-6">
                {/* Nome completo */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* E-mail e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="holding-familiar">Holding Familiar</option>
                    <option value="direito-empresarial">Direito Empresarial</option>
                    <option value="direito-civil">Direito Civil</option>
                    <option value="direito-familia">Direito de Família</option>
                    <option value="direito-tributario">Direito Tributário</option>
                    <option value="cursos-capacitacao">Cursos e Capacitação</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Descreva sua necessidade jurídica..."
                  ></textarea>
                </div>

                {/* Política de Privacidade */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="politica"
                    name="politica"
                    required
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="politica" className="text-sm text-gray-700">
                    Concordo com a{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                {/* Botão Enviar */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Coluna direita - Informações de Contato */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-8">
                {/* Endereço */}
                <div className="flex items-start">
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

                {/* Telefone */}
                <div className="flex items-start">
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

                {/* E-mail */}
                <div className="flex items-start">
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

                {/* Horário de Atendimento */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h (mediante agendamento pelo link abaixo)<br />
                      Atendimentos iniciais serão telepresenciais
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção Agende uma Consulta */}
              <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Agende uma Consulta
                </h3>
                <p className="mb-6 opacity-90">
                  Prefere agendar uma consulta diretamente? Utilize nosso sistema de agendamento online.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>

          {/* Seção Como Chegar */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Como Chegar
            </h2>
            
            {/* Placeholder para Mapa */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Mapa será carregado aqui
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContatoPage;

