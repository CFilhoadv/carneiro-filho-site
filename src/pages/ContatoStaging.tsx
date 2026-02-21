import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";
  const telSorocaba = "tel:+551531911432";
  const telSP = "tel:+551142106194";
  const emailOficial = "contato@carneirofilho.com.br";

  return (
    <MainLayout>
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Canais de Atendimento
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLUNA 1: ATENDIMENTO DIRETO */}
            <div className="space-y-6">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Atendimento Imediato</h3>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center p-6 bg-green-50 border border-green-100 rounded-sm hover:shadow-md transition-all group">
                <MessageCircle className="text-green-600 mr-4 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-bold text-gray-800">Atendimento Digital</p>
                </div>
              </a>

              <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                <p className="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-4">Central de Atendimento</p>
                <div className="space-y-4">
                  {/* UNIDADE PRINCIPAL: SOROCABA */}
                  <a href={telSorocaba} className="flex items-center text-blue-900 font-extrabold text-xl hover:text-blue-700 transition-colors">
                    <Phone size={20} className="mr-3 text-blue-900" /> (15) 3191-1432
                  </a>
                  
                  {/* UNIDADE ADMINISTRATIVA: SÃO PAULO */}
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Unidade Administrativa</p>
                    <a href={telSP} className="flex items-center text-gray-500 font-medium text-sm hover:text-blue-900 transition-colors">
                      <Phone size={14} className="mr-2" /> (11) 4210-6194
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA 2: AGENDAMENTO E PARCERIAS */}
            <div className="space-y-6">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Gestão e Parcerias</h3>
              
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center p-6 bg-blue-900 text-white rounded-sm hover:bg-blue-800 transition-all shadow-lg group">
                <Calendar className="text-blue-200 mr-4 group-hover:rotate-12 transition-transform" size={32} />
                <div>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Agendamento</p>
                  <p className="text-lg font-bold">Reunião Técnica</p>
                </div>
              </a>

              <div className="p-8 bg-[#2B438B] text-white rounded-sm shadow-xl border-t-4 border-blue-400">
                <Users className="mb-4 text-blue-200" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Canal de Parcerias</h4>
                <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">
                  Suporte jurídico especializado para Contadores, Imobiliárias e Consultores Patrimoniais.
                </p>
                <Link to="/parcerias" className="block text-center bg-white text-[#2B438B] py-2 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-colors">
                  Acessar Hub
                </Link>
              </div>
            </div>

            {/* COLUNA 3: UNIDADES */}
            <div className="space-y-6">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Localização</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-900 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gray-800 uppercase text-[10px] tracking-widest mb-1">Unidade de Atendimento</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Av. Profa. Izoraida Marques Peres, 256, 9º andar<br />
                      Ed. Avenida Paulista - Campolim<br />
                      Sorocaba/SP - CEP 18048-110
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-gray-400 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gray-800 uppercase text-[10px] tracking-widest mb-1">Unidade Administrativa</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Av. Brig. Faria Lima, 1811 - Anexo Esc 1119<br />
                      Jardim Paulistano<br />
                      São Paulo/SP - CEP 01452-001
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Mail size={18} className="mr-3" />
                    <a href={`mailto:${emailOficial}`} className="text-sm font-medium hover:text-blue-900 transition-colors">
                      {emailOficial}
                    </a>
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