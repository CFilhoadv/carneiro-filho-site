import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, Scale, Users, Gavel, Briefcase, Landmark, ShieldCheck, FileText, ChevronRight, HeartHandshake } from 'lucide-react';

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
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-12 pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* TEXTO DE POSICIONAMENTO - FOCO EM CLAREZA E FACILITAÇÃO */}
          <div className="text-gray-700 leading-relaxed text-lg mb-16 border-b border-gray-100 pb-10">
            <p className="max-w-4xl">
              O escritório <strong>Carneiro Filho Advocacia</strong> atua como um facilitador jurídico, oferecendo soluções claras e sem burocracia para as questões do seu cotidiano. Nossa experiência une a sensibilidade do atendimento humano à precisão técnica necessária para proteger seus direitos e seu patrimônio.
            </p>
          </div>

          {/* GRADE DE SERVIÇOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Direito de Família */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Users className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Família e Sucessões</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Acolhimento e agilidade em <strong>divórcios, pensão alimentícia, guarda, inventários e partilhas</strong>, focando sempre na resolução rápida de conflitos.
              </p>
            </div>

            {/* Direito do Consumidor */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <HeartHandshake className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito do Consumidor</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Defesa contra abusos de empresas, <strong>cobranças indevidas, cortes de luz/água</strong> e problemas com compras ou serviços mal prestados.
              </p>
            </div>

            {/* Cível e Indenizações */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Scale className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Cível e Indenizações</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Ações para reparação de <strong>danos materiais e morais</strong>, acidentes de trânsito, brigas de vizinhança e proteção da sua propriedade.
              </p>
            </div>

            {/* Planejamento Sucessório (Destaque de Expertise) */}
            <div className="group p-6 bg-blue-900 rounded-sm shadow-md transition-all">
              <div className="flex items-center mb-4 text-white">
                <ShieldCheck className="text-blue-200 mr-3" size={24} />
                <h2 className="text-xl font-bold uppercase tracking-tight">Inteligência Patrimonial</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-base mb-4">
                Uso da expertise contábil para proteção de bens, criação de Holdings e organização de herança para evitar perdas financeiras.
              </p>
              <Link to="/planejamento-sucessorio" className="inline-flex items-center text-blue-200 font-bold uppercase tracking-widest text-[11px] hover:text-white transition-colors">
                Ver detalhes de planejamento <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Previdenciário */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Landmark className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito Previdenciário</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Auxílio em <strong>aposentadorias e benefícios do INSS</strong> que foram negados ou precisam de revisão técnica.
              </p>
            </div>

            {/* Trabalhista */}
            <div className="group p-6 bg-gray-50 rounded-sm border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-900 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Direito do Trabalho</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Proteção de direitos em <strong>rescisões, horas extras</strong> e reversão de demissões injustas ou sem o devido pagamento.
              </p>
            </div>
          </div>

          {/* CARDS DE CONTATO FINAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-xl flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-blue-200">Atendimento Sorocaba</h3>
                <p className="text-blue-100 text-sm mb-6">Fale agora com o Dr. Francisco via WhatsApp ou telefone.</p>
              </div>
              <div className="space-y-4">
                <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all">
                  <MessageCircle size={18} className="mr-2" /> Iniciar via WhatsApp
                </a>
                <a href="tel:1531911432" className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-sm flex flex-col justify-between border border-gray-200">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-4">Apoio Administrativo</h3>
                <p className="text-gray-500 text-sm mb-6 italic">Unidade São Paulo - Suporte estratégico e gestão.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-500 py-4 rounded-sm font-bold uppercase tracking-widest text-xs">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[10px] text-gray-400 uppercase text-center tracking-widest">Atendimento Administrativo</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;