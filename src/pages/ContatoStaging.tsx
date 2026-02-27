import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Users, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";
  const telSorocaba = "tel:+551531911432";
  const telSP = "tel:+551142106194";
  const emailOficial = "contato@carneirofilho.com.br";

  return (
    <MainLayout>
      {/* CABEÇALHO */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Escolha seu caminho
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* 1. TRILHAS DE DIRECIONAMENTO (70/20/10) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 — ATENDIMENTO (CLIENTES 70%) */}
            <div className="flex flex-col p-8 bg-green-50 border-2 border-green-200 rounded-sm shadow-sm">
              <MessageCircle className="text-green-600 mb-4" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">Preciso de atendimento</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow">Atendimento inicial por WhatsApp para triagem e orientação sobre próximos passos.</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                 className="block text-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md mb-3">
                Falar no WhatsApp
              </a>
              <p className="text-[10px] text-green-700 font-bold text-center italic">
                Para agilizar, informe sua cidade e descreva brevemente o objetivo.
              </p>
            </div>

            {/* CARD 2 — ALTA RENDA (20%) */}
            <div className="flex flex-col p-8 bg-blue-50 border-2 border-blue-900 rounded-sm shadow-sm">
              <ShieldCheck className="text-blue-900 mb-4" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 leading-tight">Planejamento Sucessório / Patrimonial</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow">Indicado para famílias com múltiplos imóveis ou sucessão empresarial.</p>
              <Link to="/planejamento-sucessorio" 
                    className="block text-center bg-blue-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-all shadow-md mb-4">
                Ver Planejamento Sucessório
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-center text-blue-900 font-bold uppercase text-[10px] tracking-widest hover:underline">
                Falar no WhatsApp sobre planejamento
              </a>
            </div>

            {/* CARD 3 — PARCERIAS (10%) */}
            <div className="flex flex-col p-8 bg-gray-50 border-2 border-gray-300 rounded-sm shadow-sm">
              <Users className="text-gray-600 mb-4" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">Sou parceiro</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow">Alinhamento técnico e fluxo de indicação seguro para contadores e imobiliárias.</p>
              <Link to="/parcerias" 
                    className="block text-center bg-gray-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all shadow-md mb-4">
                Acessar Hub de Parcerias
              </Link>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-600 font-bold uppercase text-[10px] tracking-widest hover:text-blue-900 transition-colors">
                <Calendar size={14} className="mr-2" /> Agendar reunião técnica (Calendly)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HORÁRIO DE ATENDIMENTO */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-3 text-blue-900 mb-2">
            <Clock size={20} />
            <h4 className="font-bold uppercase tracking-widest text-sm">Horário de Atendimento</h4>
          </div>
          <p className="text-gray-600 text-sm italic">
            Atendimento de Segunda a Sexta, das 09h às 18h. <br className="md:hidden" />
            Mensagens recebidas fora do horário são respondidas no próximo período útil.
          </p>
        </div>
      </section>

      {/* 2 & 3. LOCALIZAÇÃO E OUTROS CANAIS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* ENDEREÇOS E MAPA (PROVA LOCAL) */}
            <div className="space-y-8">
              <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs">Unidades</h3>
              <p className="text-gray-500 text-xs italic mb-4">
                Atendimento digital por WhatsApp e atendimento presencial em Sorocaba quando necessário.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-900 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gray-800 uppercase text-[10px] tracking-widest mb-1 text-left">Unidade Sorocaba</p>
                    <p className="text-gray-600 text-sm leading-relaxed text-left">
                      Av. Profa. Izoraida Marques Peres, 256, 9º andar<br />
                      Ed. Avenida Paulista - Campolim<br />
                      Sorocaba/SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-gray-400 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gray-800 uppercase text-[10px] tracking-widest mb-1 text-left">Unidade São Paulo (Administrativo)</p>
                    <p className="text-gray-600 text-sm leading-relaxed text-left">
                      Av. Brig. Faria Lima, 1811 - Jardim Paulistano<br />
                      São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OUTROS CANAIS (REBAIXADOS) */}
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
              <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Outros canais (se necessário)</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Telefone Sorocaba</p>
                  <a href={telSorocaba} className="flex items-center text-blue-900 font-bold text-lg hover:text-blue-700 transition-colors">
                    <Phone size={18} className="mr-3" /> (15) 3191-1432
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Telefone São Paulo</p>
                  <a href={telSP} className="flex items-center text-gray-500 font-medium text-base hover:text-blue-900 transition-colors">
                    <Phone size={14} className="mr-3" /> (11) 4210-6194
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center text-gray-500">
                  <Mail size={18} className="mr-3" />
                  <a href={`mailto:${emailOficial}`} className="text-sm font-medium hover:text-blue-900 transition-colors">
                    {emailOficial}
                  </a>
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