import React from 'react';
// Ajuste Técnico: Removido 'Link' não utilizado para evitar erro de build
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551521210044";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            CONTATO
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Coluna 1: Canais Diretos (Prioridade Sorocaba) */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 text-center md:text-left">Canais de Atendimento</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 text-blue-900" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Atendimento Direto</p>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:1521210044" className="text-blue-900 hover:text-blue-800 transition-colors font-bold text-lg">
                        (15) 2121-0044 <span className="text-[10px] font-normal text-gray-400 uppercase tracking-tighter">(Unidade Sorocaba)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="mt-1 mr-4 text-green-600" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp Business</p>
                    <a href={whatsappSorocaba} className="text-green-600 hover:text-green-700 transition-colors font-bold text-lg">
                      Iniciar Conversa Online
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-blue-900" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">E-mail</p>
                    <a href="mailto:contato@carneirofilho.com.br" className="text-gray-700 hover:text-blue-900 transition-colors text-sm">
                      contato@carneirofilho.com.br
                    </a>
                  </div>
                </div>

                {/* Botão de Contato Centralizado */}
                <div className="pt-6">
                  <a 
                    href={whatsappSorocaba} 
                    className="flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md w-full"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Falar com Dr. Francisco
                  </a>
                </div>
              </div>

              {/* Observação Ética Suave */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  <strong>Aviso:</strong> O contato por meio destes canais não estabelece relação cliente-advogado nem implica contratação automática de serviços.
                </p>
              </div>
            </div>

            {/* Coluna 2: Unidades e Endereços */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 text-center md:text-left">Nossas Unidades</h2>

              <div className="space-y-10">
                {/* Unidade Sorocaba (Destaque Principal) */}
                <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-900">
                  <div className="flex items-start mb-2">
                    <MapPin className="mt-1 mr-4 text-blue-900" size={24} />
                    <p className="font-bold text-gray-900 uppercase text-sm tracking-wider">Unidade Sorocaba (Principal)</p>
                  </div>
                  <div className="pl-10 text-gray-700 text-sm space-y-1">
                    <p>Av. Profa. Izoraida Marques Peres, 256 – 9º andar</p>
                    <p>Edifício Av. Paulista, Campolim – Sorocaba/SP</p>
                    <p className="text-blue-900 font-bold mt-2">Tel: (15) 2121-0044</p>
                  </div>
                </div>

                {/* Unidade São Paulo (Apoio) */}
                <div className="p-6 opacity-70">
                  <div className="flex items-start mb-2">
                    <MapPin className="mt-1 mr-4 text-gray-400" size={24} />
                    <p className="font-bold text-gray-500 uppercase text-sm tracking-wider">Unidade Administrativa – São Paulo</p>
                  </div>
                  <div className="pl-10 text-gray-500 text-sm space-y-1">
                    <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                    <p>Jardim Paulistano – São Paulo/SP</p>
                    <p className="italic mt-2">Atendimento via correio de voz: (11) 4210-6194</p>
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