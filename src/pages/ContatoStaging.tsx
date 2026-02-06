import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Landmark } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telefoneLink = "tel:1531911432";
  const emailLink = "mailto:contato@carneirofilho.com.br";

  return (
    <MainLayout>
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappLink} 
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
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 tracking-tight leading-tight uppercase">
            Carneiro Filho<br />Advocacia
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* CANAIS DE ATENDIMENTO DIGITAL */}
          <div className="space-y-6 md:space-y-8 mb-16">
            
            {/* WhatsApp */}
            <div className="p-6 md:p-8 bg-[#f8fff9] border-l-4 border-[#25D366] rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-[#25D366] mr-3" size={28} />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight">WhatsApp</h2>
              </div>
              <p className="text-gray-600 text-sm mb-6 font-medium">Resposta imediata - Clique para iniciar atendimento digital</p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-[#128C7E] transition-all shadow-md w-full md:w-auto uppercase tracking-widest text-xs"
              >
                (15) 3191-1432
              </a>
            </div>

            {/* Telefone - AGORA COM DESTAQUE AZUL */}
            <div className="p-6 md:p-8 bg-gray-50 border-l-4 border-blue-900 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <Phone className="text-blue-900 mr-3" size={28} />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight">Telefone VoIP</h2>
              </div>
              <p className="text-gray-600 text-sm mb-6 font-medium">Segunda a sexta, das 9h às 18h</p>
              <a 
                href={telefoneLink} 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-blue-800 transition-all shadow-md w-full md:w-auto uppercase tracking-widest text-xs"
              >
                (15) 3191-1432
              </a>
            </div>

            {/* E-mail */}
            <div className="p-6 md:p-8 bg-gray-50 border-l-4 border-gray-400 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <Mail className="text-gray-600 mr-3" size={28} />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight">E-mail</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4 font-medium">Assuntos formais e envio de documentos</p>
              <a 
                href={emailLink} 
                className="text-lg md:text-xl font-bold text-blue-900 hover:underline break-all"
              >
                contato@carneirofilho.com.br
              </a>
            </div>
          </div>

          {/* ATENDIMENTO PRESENCIAL - LEGIBILIDADE TOTAL */}
          <div className="pt-12 border-t border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-10 text-center uppercase tracking-widest">
              Unidades de Atendimento
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sorocaba */}
              <div className="p-6 bg-white border border-gray-100 rounded-sm shadow-sm border-t-4 border-blue-900">
                <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center uppercase tracking-tight">
                  <MapPin className="mr-2" size={20} /> Sorocaba
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Av. Profa. Izoraida Marques Peres, 256<br />
                  Edifício Av. Paulista, 9º andar<br />
                  Campolim, Sorocaba/SP
                </p>
              </div>

              {/* São Paulo - AGORA 100% LEGÍVEL */}
              <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-sm border-t-4 border-gray-400">
                <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center uppercase tracking-tight">
                  <MapPin className="text-gray-400 mr-2" size={20} /> São Paulo
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Av. Brigadeiro Faria Lima, 1811<br />
                  Conj. 1119 - Jardim Paulistano<br />
                  São Paulo/SP
                </p>
              </div>
            </div>
          </div>

          {/* COMPLIANCE OAB */}
          <div className="mt-20 pt-8 border-t border-gray-100 text-center">
            <div className="flex justify-center mb-4 text-gray-300">
              <Landmark size={32} />
            </div>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] leading-loose font-medium">
              Carneiro Filho Sociedade Individual de Advocacia • OAB/SP 47.631<br />
              Francisco Carneiro Filho • OAB/SP 189.404
            </p>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoStaging;