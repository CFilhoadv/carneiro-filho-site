import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, Scale, Users, Briefcase, Landmark, ShieldCheck, ChevronRight, HeartHandshake } from 'lucide-react';

const ServicosStaging: React.FC = () => {
  // Canal único atualizado: VoIP e WhatsApp (15) 3191-1432
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

      {/* CABEÇALHO PADRONIZADO - Otimizado para Mobile */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1 w-16 md:h-1.5 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL - Espaçamento enxuto */}
      <section className="py-10 md:py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* TEXTO DE POSICIONAMENTO */}
          <div className="text-gray-700 leading-relaxed text-base md:text-lg mb-10 md:mb-16 border-b border-gray-100 pb-8 md:pb-10">
            <p className="max-w-4xl text-justify md:text-left">
              O escritório <strong>Carneiro Filho Advocacia</strong> atua como um facilitador jurídico, oferecendo soluções claras e sem burocracia para as questões do seu cotidiano. Nossa experiência une a sensibilidade do atendimento humano à precisão técnica necessária para proteger seus direitos e seu patrimônio.
            </p>
          </div>

          {/* GRADE DE SERVIÇOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            
            {/* Direito de Família */}
            <div className="group p-5 md:p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4">
                <Users className="text-blue-900 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Família e Sucessões</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Acolhimento e agilidade em <strong>divórcios, pensão alimentícia, guarda, inventários e partilhas</strong>, focando sempre na resolução rápida de conflitos.
              </p>
            </div>

            {/* Direito do Consumidor */}
            <div className="group p-5 md:p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4">
                <HeartHandshake className="text-blue-900 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Direito do Consumidor</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Defesa contra abusos de empresas, <strong>cobranças indevidas, cortes de luz/água</strong> e problemas com compras ou serviços mal prestados.
              </p>
            </div>

            {/* Cível e Indenizações */}
            <div className="group p-5 md:p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4">
                <Scale className="text-blue-900 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Cível e Indenizações</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Ações para reparação de <strong>danos materiais e morais</strong>, acidentes de trânsito, brigas de vizinhança e proteção da sua propriedade.
              </p>
            </div>

            {/* Planejamento Sucessório */}
            <div className="group p-5 md:p-6 bg-blue-900 rounded-sm shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4 text-white">
                <ShieldCheck className="text-blue-200 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold uppercase tracking-tight">Inteligência Patrimonial</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-sm md:text-base mb-4">
                Uso da expertise contábil para proteção de bens, criação de Holdings e organização de herança para evitar perdas financeiras.
              </p>
              <Link to="/planejamento-sucessorio" className="inline-flex items-center text-blue-200 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                Ver detalhes <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Previdenciário */}
            <div className="group p-5 md:p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4">
                <Landmark className="text-blue-900 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Direito Previdenciário</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Auxílio em <strong>aposentadorias e benefícios do INSS</strong> que foram negados ou precisam de revisão técnica.
              </p>
            </div>

            {/* Trabalhista */}
            <div className="group p-5 md:p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all text-justify md:text-left">
              <div className="flex items-center mb-3 md:mb-4">
                <Briefcase className="text-blue-900 mr-3" size={24} />
                <h2 className="text-lg md:text-xl font-bold text-blue-900 uppercase tracking-tight">Direito do Trabalho</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Proteção de direitos em <strong>rescisões, horas extras</strong> e reversão de demissões injustas ou sem o devido pagamento.
              </p>
            </div>
          </div>

          {/* CARDS DE CONTATO FINAL - PADRONIZADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center md:text-left">
            <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-xl flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 text-blue-200">Atendimento Sorocaba</h3>
                <p className="text-blue-100 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">Canais oficiais para suporte técnico e agendamentos.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all">
                  <MessageCircle size={16} className="mr-2" /> Canais de Atendimento
                </a>
                <a href="tel:1531911432" className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all">
                  <Phone size={16} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-6 md:p-8 rounded-sm flex flex-col justify-between border border-gray-200 opacity-80">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">Apoio Administrativo</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 italic">Unidade São Paulo - Suporte estratégico e gestão documental.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-500 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px]">
                  <Phone size={16} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-400 uppercase text-center tracking-widest">Atendimento Administrativo</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;