import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Users, ShieldCheck, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";
  const telSorocaba = "tel:+551531911432";
  const emailOficial = "contato@carneirofilho.com.br";

  return (
    <MainLayout>
      {/* CABEÇALHO */}
      <section className="bg-white pt-16 pb-10 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Escolha seu caminho
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      {/* 1. TRILHAS DE DIRECIONAMENTO (70/20/10) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 — ATENDIMENTO RÁPIDO (70%) */}
            <div className="flex flex-col p-8 bg-green-50 border-2 border-green-500/30 rounded-sm shadow-sm text-center md:text-left transition-all hover:shadow-md">
              <MessageCircle className="text-green-600 mb-4 mx-auto md:mx-0" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 tracking-wide">Preciso de atendimento</h3>
              <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">Atendimento inicial por WhatsApp para triagem imediata e orientação clara sobre os seus direitos.</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-md mb-4 group">
                Falar no WhatsApp <ChevronRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-xs text-green-800 font-medium text-center bg-green-100/60 py-2 rounded-sm">
                Para agilizar, informe sua cidade e descreva brevemente seu caso.
              </p>
            </div>

            {/* CARD 2 — PLANEJAMENTO / PROTEÇÃO (20%) */}
            <div className="flex flex-col p-8 bg-blue-50 border-2 border-blue-900/30 rounded-sm shadow-sm text-center md:text-left transition-all hover:shadow-md">
              <ShieldCheck className="text-blue-900 mb-4 mx-auto md:mx-0" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 tracking-wide leading-tight">Planejamento Sucessório</h3>
              <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">Soluções estruturadas e seguras para famílias que possuem imóveis ou empresas com foco em proteção de ativos.</p>
              <Link to="/planejamento-sucessorio" 
                    className="block text-center bg-blue-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md mb-4">
                Conhecer Soluções
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-center text-blue-900 font-bold uppercase text-xs tracking-widest hover:underline block py-1">
                Contato Direto via WhatsApp
              </a>
            </div>

            {/* CARD 3 — PARCERIAS ESTRATÉGICAS (10%) */}
            <div className="flex flex-col p-8 bg-gray-50 border-2 border-amber-500/30 rounded-sm shadow-sm text-center md:text-left transition-all hover:shadow-md">
              <Users className="text-amber-600 mb-4 mx-auto md:mx-0" size={40} />
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 tracking-wide">Sou contador</h3>
              <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">Suporte técnico de alta complexidade e fluxo seguro de indicação jurídica para escritórios de contabilidade.</p>
              <Link to="/parcerias" 
                    className="block text-center bg-gray-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-md mb-4">
                Acessar Hub de Parcerias
              </Link>
              <p className="text-xs text-gray-500 font-semibold uppercase text-center mb-2 tracking-wide">Agendamento exclusivo para parceiros</p>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-700 bg-white font-bold uppercase text-xs tracking-widest hover:text-blue-900 transition-colors border border-gray-300 py-3 rounded-sm hover:border-gray-400">
                <Calendar size={16} className="mr-2 text-blue-900" /> Reunião Técnica (Calendly)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* HORÁRIO DE ATENDIMENTO */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2.5 text-blue-900 mb-2">
            <Clock size={18} />
            <h4 className="font-bold uppercase tracking-widest text-sm">Horário de Atendimento Digital</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Segunda a Sexta-feira, das 09h às 18h.<br />
            <span className="text-gray-500 italic text-xs">Mensagens enviadas fora deste período serão respondidas prontamente no próximo horário útil.</span>
          </p>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATOS INSTITUCIONAIS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* ENDEREÇO OFICIAL COM CLÁUSULA DE AGENDAMENTO */}
            <div className="p-8 border border-gray-200 rounded-sm flex flex-col justify-between text-left">
              <div>
                <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm border-b border-blue-900 pb-2 inline-block mb-4">Atendimento Presencial</h3>
                <p className="text-red-800 bg-red-50 border border-red-200 text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-sm mb-6">
                  ⚠️ Atenção: Atendimento exclusivamente mediante agendamento prévio.
                </p>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-900 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-gray-900 uppercase text-xs tracking-wider block mb-2">Unidade Sorocaba</span>
                    <p className="text-gray-700 text-base leading-relaxed font-medium">
                      Av. Profa. Izoraida Marques Peres, 256, 9º andar<br />
                      Ed. Avenida Paulista — Campolim<br />
                      Sorocaba/SP — CEP 18048-110
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CANAIS DE COMUNICAÇÃO DIRETA */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-sm flex flex-col justify-between text-left">
              <div>
                <h3 className="text-gray-800 font-bold uppercase tracking-widest text-sm border-b border-gray-300 pb-2 inline-block mb-4">Canais Diretos</h3>
                <p className="text-gray-600 text-sm italic mb-6">
                  Fale diretamente com nossa retaguarda jurídica por telefone corporativo ou e-mail.
                </p>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Telefone Principal</p>
                    <a href={telSorocaba} className="flex items-center text-blue-900 font-bold text-xl hover:text-blue-700 transition-colors w-fit">
                      <Phone size={20} className="mr-3 text-blue-950" /> (15) 3191-1432
                    </a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 flex flex-col gap-1.5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Correio Eletrônico</p>
                    <div className="flex items-center text-gray-700">
                      <Mail size={18} className="mr-3 text-blue-900" />
                      <a href={`mailto:${emailOficial}`} className="text-base font-semibold hover:text-blue-900 transition-colors">
                        {emailOficial}
                      </a>
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