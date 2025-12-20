import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const ContatoPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        <Banner 
          subtitle="Solicitação de Análise Preliminar" 
          title="Canais de atendimento e orientações para contato" 
          bgColor="bg-blue-900" 
        />

        <main className="py-16 px-4 max-w-6xl mx-auto text-gray-800 leading-relaxed">
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Este espaço destina-se ao envio de informações para análise preliminar da demanda, com a finalidade exclusiva de avaliar, em tese, a viabilidade jurídica do caso apresentado.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              O envio das informações não implica contratação automática de serviços advocatícios, nem gera obrigação de resposta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto items-start">

            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">Informações de Contato</h2>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600" role="img" aria-label="Localização">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm">
                    Av. Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                    Jardim Paulistano<br />
                    São Paulo/SP, CEP: 01452-001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600" role="img" aria-label="E-mail">✉</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                  <p className="text-gray-600 text-sm">
                    contato@carneirofilho.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">Atendimento</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <h3 className="font-semibold text-blue-900 mb-3">Funcionamento:</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  O atendimento jurídico é realizado de forma presencial ou remota, conforme a conveniência das partes e as características da demanda. O primeiro contato tem por finalidade a análise preliminar do caso.
                </p>
              </div>

              <div className="text-center md:text-left">
                {/* LINK CORRIGIDO PARA APONTAR PARA A NOVA PÁGINA FUNCIONAL */}
                <Link 
                  to="/analise-preliminar" 
                  className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg w-full text-center"
                >
                  Encaminhar informações para análise preliminar
                </Link>
                
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded text-xs text-gray-600 text-justify">
                  <p>
                    <strong>Aviso Ético e Legal:</strong> O envio de informações por meio deste canal não constitui contratação de serviços advocatícios, não gera obrigação de resposta e não cria expectativa de resultado. A eventual prestação de serviços advocatícios somente ocorrerá após manifestação expressa das partes e formalização de contrato específico, nos termos da Lei nº 8.906/94 e do Código de Ética e Disciplina da OAB.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default ContatoPage;