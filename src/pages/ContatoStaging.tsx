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
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 tracking-tight">
            Entre em Contato
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-6"></div>
          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            O escritório está à disposição para atendimento prévio e esclarecimentos, conforme as normas do Estatuto da Advocacia e da OAB.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* CARDS DE CONTATO RÁPIDO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* WhatsApp */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-600 text-white p-3 rounded-full mb-4">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-xs mb-4">Resposta rápida - clique para conversar</p>
              <a 
                href={whatsappSorocaba} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-green-700 transition-colors"
              >
                (15) 3191-1432
              </a>
            </div>

            {/* Telefone */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-900 text-white p-3 rounded-full mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Telefone</h3>
              <p className="text-gray-600 text-xs mb-4">Segunda a sexta, 9h às 18h</p>
              <a 
                href="tel:1531911432" 
                className="w-full bg-blue-900 text-white py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors"
              >
                (15) 3191-1432
              </a>
            </div>

            {/* E-mail */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
              <div className="bg-gray-600 text-white p-3 rounded-full mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">E-mail</h3>
              <p className="text-gray-600 text-xs mb-4">Para documentos e assuntos formais</p>
              <a 
                href="mailto:contato@carneirofilho.com.br" 
                className="w-full bg-gray-700 text-white py-3 rounded-md font-bold text-xs hover:bg-gray-800 transition-colors truncate px-2"
              >
                contato@carneirofilho.com.br
              </a>
            </div>
          </div>

          {/* ENDEREÇOS E OAB */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center uppercase tracking-tight">Atendimento presencial com agendamento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start">
                <MapPin className="text-blue-900 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Sorocaba</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Av. Profa. Izoraida Marques Peres, 256<br />
                    Edifício Av. Paulista, 9º andar<br />
                    Campolim, Sorocaba/SP
                  </p>
                </div>
              </div>

              <div className="flex items-start opacity-80">
                <MapPin className="text-gray-400 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">São Paulo</h4>
                  <p className="text-gray-500 text-sm md:text-base">
                    Av. Brigadeiro Faria Lima, 1811<br />
                    Conj. 1119 - Jardim Paulistano<br />
                    São Paulo/SP
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest leading-relaxed">
                Carneiro Filho Sociedade Individual de Advocacia • OAB/SP 47.631<br />
                Francisco Carneiro Filho • OAB/SP 189.404
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoStaging;