import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';

const ContatoPage: React.FC = () => {
  const whatsappNumber = "551531911432";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <MainLayout>
      <div className="relative">
        <Banner 
          subtitle="Canais de Atendimento" 
          title="Fale com o escritório Carneiro Filho Advocacia" 
          bgColor="bg-blue-900" 
        />

        <main className="py-16 px-4 max-w-6xl mx-auto text-gray-800 leading-relaxed">
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-xl font-medium text-blue-900 mb-4">
              Estamos prontos para ouvir você.
            </p>
            <p className="text-lg text-gray-700">
              Escolha o canal de sua preferência. Valorizamos a clareza e a agilidade no primeiro contato, seja para tirar dúvidas ou solicitar uma análise de viabilidade do seu caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto items-start">

            {/* Coluna 1: Endereços e Contatos Diretos */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">Onde Atendemos</h2>
                
                {/* Unidade Sorocaba - Prioridade 1 */}
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Unidade Sorocaba (Principal)</h3>
                    <p className="text-gray-600 text-sm">
                      Edifício Av. Paulista - Campolim<br />
                      Av. Profa. Izoraida Marques Peres, 256 – 9º andar<br />
                      Sorocaba/SP
                    </p>
                  </div>
                </div>

                {/* Unidade São Paulo - Prioridade 2 */}
                <div className="flex items-start mb-8 opacity-70">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Unidade São Paulo (Apoio)</h3>
                    <p className="text-gray-600 text-sm">
                      Av. Brigadeiro Faria Lima, 1811 - Conj. 1119<br />
                      Jardim Paulistano - São Paulo/SP
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-blue-900 mr-4" size={20} />
                    <span className="text-lg font-bold text-gray-800">(15) 3191-1432</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-900 mr-4" size={20} />
                    <span className="text-gray-600">contato@carneirofilho.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Ações de Contato Rápido */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b pb-2">Atendimento Imediato</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex items-center mb-4 text-blue-900">
                  <MessageCircle className="mr-3" size={24} />
                  <h3 className="font-bold">Inicie pelo WhatsApp</h3>
                </div>
                <p className="text-sm text-gray-700 mb-6">
                  Envie um <strong>texto ou áudio</strong> contando sua necessidade. Nossa equipe realizará uma análise rápida para te orientar sobre os próximos passos.
                </p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white text-center py-4 rounded-md font-bold hover:bg-green-700 transition-colors shadow-md"
                >
                  Enviar Mensagem Agora
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4 text-gray-800">
                  <Clock className="mr-3" size={24} />
                  <h3 className="font-bold">Análise Detalhada</h3>
                </div>
                <p className="text-sm text-gray-700 mb-6">
                  Se preferir, preencha nosso formulário estruturado para uma análise jurídica preliminar do seu caso.
                </p>
                <Link 
                  to="/analise-preliminar" 
                  className="block bg-blue-900 text-white text-center py-4 rounded-md font-bold hover:bg-blue-800 transition-colors"
                >
                  Preencher Formulário de Análise
                </Link>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded text-[10px] text-gray-600 text-justify leading-tight">
                <p>
                  <strong>Aviso Ético e Legal:</strong> O envio de informações não constitui contratação de serviços advocatícios imediata. A prestação de serviços somente ocorrerá após formalização de contrato específico, conforme a Lei nº 8.906/94 e o Código de Ética da OAB.
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default ContatoPage;