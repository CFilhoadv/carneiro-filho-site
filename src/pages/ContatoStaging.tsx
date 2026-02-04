import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  // Ajuste Técnico: Protocolo API para garantir funcionamento universal
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551521210044";

  return (
    <MainLayout>
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-12 pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Contato
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* COLUNA 1: CANAIS DIRETOS */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  Canais de Atendimento
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Utilize nossos canais oficiais para agendamentos, consultas e suporte jurídico. Priorizamos o atendimento humano e direto.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Telefone Sorocaba */}
                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 rounded-lg mr-5 transition-colors group-hover:bg-blue-900 group-hover:text-white text-blue-900">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Unidade Sorocaba (Voz)</p>
                    <a href="tel:1521210044" className="text-2xl font-bold text-gray-800 hover:text-blue-900 transition-colors">
                      (15) 2121-0044
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start group">
                  <div className="p-3 bg-green-50 rounded-lg mr-5 transition-colors group-hover:bg-green-600 group-hover:text-white text-green-600">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp Business</p>
                    <a 
                      href={whatsappSorocaba} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                    >
                      Iniciar Atendimento
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start group">
                  <div className="p-3 bg-gray-50 rounded-lg mr-5 transition-colors group-hover:bg-blue-900 group-hover:text-white text-blue-900">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail Oficial</p>
                    <a href="mailto:contato@carneirofilho.com.br" className="text-lg font-semibold text-gray-700 hover:text-blue-900 transition-colors">
                      contato@carneirofilho.com.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Botão de Destaque */}
              <div className="pt-8">
                <a 
                  href={whatsappSorocaba} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-xl w-full md:w-auto"
                >
                  <MessageCircle className="mr-3" size={20} />
                  Falar com o Responsável Técnico
                </a>
              </div>
            </div>

            {/* COLUNA 2: LOCALIZAÇÃO E UNIDADES */}
            <div className="space-y-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Nossas Unidades</h2>

              <div className="space-y-12">
                {/* Unidade Sorocaba */}
                <div className="p-8 bg-gray-50 border-l-4 border-blue-900 rounded-sm shadow-sm">
                  <div className="flex items-center mb-4 text-blue-900 font-bold uppercase tracking-widest text-sm">
                    <MapPin className="mr-3" size={20} />
                    Unidade de Atendimento – Sorocaba
                  </div>
                  <div className="space-y-2 text-gray-700 text-base leading-relaxed">
                    <p className="font-bold">Edifício Av. Paulista, 9º andar</p>
                    <p>Av. Profa. Izoraida Marques Peres, 256</p>
                    <p>Campolim, Sorocaba/SP</p>
                  </div>
                </div>

                {/* Unidade São Paulo */}
                <div className="p-8 border border-gray-100 rounded-sm">
                  <div className="flex items-center mb-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <MapPin className="mr-3" size={20} />
                    Unidade Administrativa – São Paulo
                  </div>
                  <div className="space-y-2 text-gray-500 text-base leading-relaxed">
                    <p className="font-bold text-gray-600">Jardim Paulistano</p>
                    <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                    <p>São Paulo/SP</p>
                    <div className="flex items-center mt-6 pt-6 border-t border-gray-100 text-xs italic">
                      <Clock size={14} className="mr-2" /> Atendimento via correio de voz corporativo
                    </div>
                  </div>
                </div>
              </div>

              {/* Nota Ética */}
              <div className="p-6 bg-blue-50/50 rounded-sm border border-blue-100">
                <p className="text-xs text-blue-900/70 leading-relaxed italic">
                  <strong>Nota Técnica:</strong> Em conformidade com o Código de Ética da OAB, o contato inicial visa o agendamento de consulta técnica, não constituindo oferta pública de serviços ou promessa de resultados.
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