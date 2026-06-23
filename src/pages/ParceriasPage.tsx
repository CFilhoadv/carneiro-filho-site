import React, { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Download, MessageSquare, Calendar } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  // Configuração dos links
  const whatsappUrgentLink = "https://wa.me/551531911432?text=Olá%20Dr.%20Francisco,%20cliquei%20no%20botão%20de%20Urgência%20do%20Hub%20de%20Parcerias%20e%20preciso%20de%20um%20suporte%20jurídico%20imediato.";
  const calendlyLink = "https://calendly.com/SEU_LINK_AQUI"; // Substitua pelo seu link do Calendly

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17786597651";
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      const gtagFn = function () { (window as any).dataLayer.push(arguments); };
      (window as any).gtag = (window as any).gtag || gtagFn;
      
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'AW-17786597651');
    }
  }, []);

  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', { 'send_to': 'AW-17786597651/kyYDCKup6MMcEJPip6FC' });
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#0b132b] pt-12 pb-12 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">RETAGUARDA JURÍDICA ESTRATÉGICA</p>
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Cooperação Técnica Especializada</h1>
          <div className="h-1 w-16 bg-blue-400 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-12 bg-white text-justify text-gray-700 max-w-4xl mx-auto px-4 space-y-6">
        <p>As demandas que envolvem reestruturações societárias e a engenharia tributária exigem uma análise minuciosa dos riscos jurídicos para assegurar a blindagem patrimonial e a segurança dos atos praticados.</p>
        <p>Nossa atuação oferece o suporte necessário em pareceres de sustentação e validação de viabilidade, garantindo total conformidade com a legislação vigente e proteção técnica para o assessor contábil.</p>

        <div className="border-t pt-12 mt-12">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">Iniciar Cooperação Técnica Institucional</h3>
            <p className="text-gray-600 text-sm mt-1 text-center">Selecione o canal de atendimento adequado à demanda atual do seu escritório.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
            
            {/* PORTA 1 · DEMANDA IMEDIATA */}
            <div className="border border-red-100 bg-gradient-to-b from-white to-red-50/20 p-6 flex flex-col justify-between shadow-sm rounded-sm">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-widest text-red-700 uppercase bg-red-100 px-2.5 py-1 rounded-sm">Porta 1 · Demanda Imediata</span>
                <h4 className="text-lg font-bold text-blue-900 uppercase tracking-tight">Suporte em Casos de Urgência</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Indicado para escritórios que enfrentam fiscalizações em andamento ou necessitam de validação jurídica emergencial para operações societárias.</p>
              </div>
              <div className="pt-6 mt-auto">
                <a href={whatsappUrgentLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsappClick} className="w-full inline-flex items-center justify-center bg-red-700 text-white px-5 py-3.5 font-bold uppercase text-[11px] tracking-widest hover:bg-red-800 transition-all shadow-md text-center">
                  <MessageSquare size={15} className="mr-2" /> Acionar Canal de Urgência
                </a>
              </div>
            </div>

            {/* PORTA 2 · PLANEJAMENTO E INTELIGÊNCIA */}
            <div className="border border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between shadow-sm rounded-sm">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-widest text-blue-900 uppercase bg-blue-100 px-2.5 py-1 rounded-sm">Porta 2 · Planejamento e Inteligência</span>
                <h4 className="text-lg font-bold text-blue-900 uppercase tracking-tight">Mapeamento de Riscos Preventivos</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mais do que um atendimento, o Mapeamento de Riscos Preventivos é uma parceria técnica dedicada a blindar o seu escritório e a segurança jurídica de seus clientes. Vamos alinhar estratégias para antecipar gargalos antes que eles se tornem crises.
                </p>
              </div>
              
              <div className="pt-6 mt-auto space-y-4">
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center bg-blue-900 text-white px-5 py-3.5 font-bold uppercase text-[11px] tracking-widest hover:bg-blue-800 transition-all shadow-md text-center">
                  <Calendar size={15} className="mr-2" /> Agendar Reunião de Alinhamento
                </a>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-[11px] mb-3">
                    Quer identificar os principais e atuais gargalos de seu ramo que demandam suporte jurídico?
                  </p>
                  <a href="/mapa-de-urgencias.pdf" target="_blank" className="w-full inline-flex items-center justify-center bg-gray-200 text-gray-800 px-5 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-300 transition-all text-center">
                    <Download size={13} className="mr-2" /> Veja a Relação no Mapa de Urgências
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

export default ParceriasPage;