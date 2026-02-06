import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  // Canal único centralizado atualizado
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

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

      {/* CABEÇALHO - py-8 para mobile (reduzindo o vazio) */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Canais de Atendimento
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-3 md:mt-4 md:w-20 md:h-1.5"></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL - py-10 para mobile */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* COLUNA 1: CONTATOS DIRETOS */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tight">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Escolha o meio de sua preferência para agendamentos e suporte. Atendimento realizado com foco na clareza e segurança jurídica.
                </p>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                {/* Unidade Sorocaba */}
                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4 text-blue-900">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Telefone e WhatsApp</p>
                    <a href="tel:1531911432" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-900 transition-colors">
                      (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start group">
                  <div className="p-3 bg-gray-50 rounded-lg mr-4 text-blue-900">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                    <a href="mailto:contato@carneirofilho.com.br" className="text-base md:text-lg font-semibold text-gray-700 hover:text-blue-900 transition-colors">
                      contato@carneirofilho.com.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Botão de Ação Sóbrio */}
              <div className="pt-4">
                <a 
                  href={whatsappSorocaba} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-blue-800 transition-all shadow-md w-full md:w-auto"
                >
                  <MessageCircle className="mr-3" size={18} />
                  Agendar por WhatsApp
                </a>
              </div>
            </div>

            {/* COLUNA 2: LOCALIZAÇÃO */}
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6 uppercase tracking-tight">Endereços</h2>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 border-l-4 border-blue-900 rounded-sm">
                  <div className="flex items-center mb-3 text-blue-900 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="mr-3" size={18} />
                    Unidade Sorocaba
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">
                    <p className="font-bold">Edifício Av. Paulista, 9º andar</p>
                    <p>Av. Profa. Izoraida Marques Peres, 256</p>
                    <p>Campolim, Sorocaba/SP</p>
                  </div>
                </div>

                <div className="p-6 border border-gray-100 rounded-sm opacity-75">
                  <div className="flex items-center mb-3 text-gray-400 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="mr-3" size={18} />
                    Unidade São Paulo
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p className="font-bold">Jardim Paulistano</p>
                    <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                    <div className="flex items-center mt-3 pt-3 border-t border-gray-100 text-[10px] italic">
                      <Clock size={14} className="mr-2" /> Atendimento Administrativo
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoStaging;