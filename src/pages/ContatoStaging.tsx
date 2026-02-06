import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551531911432";

  return (
    <MainLayout>
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* CABEÇALHO */}
      <section className="bg-white pt-10 pb-8 md:pt-16 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 tracking-tight mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            O escritório está à disposição para atendimento prévio e esclarecimentos, conforme as normas do Estatuto da Advocacia e da OAB.
          </p>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* IDENTIFICAÇÃO INSTITUCIONAL */}
          <div className="mb-16 p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-sm">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
              Carneiro Filho Advocacia
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sociedade inscrita na OAB/SP sob o nº 47.631<br />
              Advogado Responsável: <strong>Francisco Carneiro Filho</strong> – OAB/SP 189.404
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* COLUNA 1: CONTATO DIRETO */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  Contato Direto
                </h3>
                <p className="text-gray-500 italic text-sm mb-8">
                  Para agendamentos de reuniões e questões administrativas:
                </p>
              </div>
              
              <div className="space-y-10">
                {/* WhatsApp */}
                <div className="flex items-start group">
                  <div className="p-3 bg-green-50 rounded-lg mr-5 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp Business</p>
                    <p className="text-xl font-bold text-gray-800 mb-1">(15) 3191-1432</p>
                    <a 
                      href={whatsappSorocaba} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold hover:underline text-sm"
                    >
                      Clique para conversar no WhatsApp
                    </a>
                    <p className="text-gray-400 text-xs italic mt-1">(Recomendado para comunicação ágil)</p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 rounded-lg mr-5 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Telefone</p>
                    <a href="tel:1531911432" className="text-xl font-bold text-gray-800 hover:text-blue-900 transition-colors">
                      (15) 3191-1432
                    </a>
                    <p className="text-gray-400 text-xs mt-1 italic">Segunda a sexta-feira, das 9h às 18h</p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start group">
                  <div className="p-3 bg-gray-100 rounded-lg mr-5 text-gray-600 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail Oficial</p>
                    <a href="mailto:contato@carneirofilho.com.br" className="text-base md:text-lg font-semibold text-gray-700 hover:text-blue-900 transition-colors">
                      contato@carneirofilho.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA 2: ATENDIMENTO PRESENCIAL */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Atendimento Presencial
                </h3>
                <p className="text-gray-500 italic text-sm mb-8">
                  Consultas mediante agendamento prévio.
                </p>
              </div>

              <div className="space-y-8">
                {/* Sorocaba */}
                <div className="p-6 border-l-4 border-blue-900 bg-gray-50 rounded-sm">
                  <div className="flex items-center mb-4 text-blue-900 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="mr-3" size={18} />
                    Escritório Sorocaba (Principal)
                  </div>
                  <div className="text-gray-700 space-y-1 text-sm md:text-base">
                    <p className="font-bold">Edifício Av. Paulista, 9º andar</p>
                    <p>Av. Profa. Izoraida Marques Peres, 256</p>
                    <p>Campolim, Sorocaba/SP</p>
                  </div>
                </div>

                {/* São Paulo */}
                <div className="p-6 border border-gray-100 rounded-sm opacity-80">
                  <div className="flex items-center mb-4 text-gray-400 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="mr-3" size={18} />
                    Escritório São Paulo
                  </div>
                  <div className="text-gray-500 space-y-1 text-sm md:text-base">
                    <p className="font-bold text-gray-600 text-sm">Jardim Paulistano</p>
                    <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                    <p>São Paulo/SP</p>
                  </div>
                </div>
                
                <p className="text-[11px] text-gray-400 uppercase tracking-widest italic text-center md:text-left">
                  O atendimento administrativo é realizado prioritariamente na unidade de Sorocaba.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoStaging;