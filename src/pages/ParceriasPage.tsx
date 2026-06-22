import React, { useState } from 'react';
import Script from 'next/script';
import MainLayout from '../components/layout/MainLayout';
import { Download, MessageSquare } from 'lucide-react';

const ParceriasPage: React.FC = () => {
  // Configuração automática do link de WhatsApp utilizando o número fixo homologado do escritório
  const whatsappUrgentLink = "https://wa.me/551531911432?text=Olá%20Dr.%20Francisco,%20cliquei%20no%20botão%20de%20Urgência%20do%20Hub%20de%20Parcerias%20e%20preciso%20de%20um%20suporte%20jurídico%20imediato.";

  // Estados para gerenciar o envio do formulário nativo do Netlify
  const [formState, setFormState] = useState({ name: '', email: '', officeSize: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Função para disparar a conversão do Google Ads no clique do WhatsApp
  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17786597651/kyYDCKup6MMcEJPip6FC'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "download-checklist-parcerias", ...formState })
      });
      setStatus('success');
      setFormState({ name: '', email: '', officeSize: '' });
      
      // Abre automaticamente o PDF salvo na pasta public em uma nova aba do navegador
      window.open('/mapa-de-urgencias.pdf', '_blank');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <MainLayout>
      {/* Carga Otimizada da Tag Global do Google (gtag.js) */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=AW-17786597651" 
        strategy="afterInteractive" 
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17786597651');
        `}
      </Script>

      {/* Seção Superior Original */}
      <section className="bg-[#0b132b] pt-12 pb-12 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">
            RETAGUARDA JURÍDICA ESTRATÉGICA
          </p>
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
            Cooperação Técnica Especializada
          </h1>
          <div className="h-1 w-16 bg-blue-400 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Seção de Conteúdo Original */}
      <section className="py-12 bg-white text-justify text-gray-700 max-w-4xl mx-auto px-4 space-y-6">
        <p>
          As demandas que envolvem reestruturações societárias e a engenharia tributária exigem uma análise minuciosa dos riscos jurídicos para assegurar a blindagem patrimonial e a segurança dos atos praticados.
        </p>
        <p>
          Nossa atuação offers o suporte necessário em pareceres de sustentação e validação de viabilidade, garantindo total conformidade com a legislação vigente e proteção técnica para o assessor contábil.
        </p>

        {/* ESTRUTURA DUAS PORTAS DE CONVERSÃO */}
        <div className="border-t pt-12 mt-12">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
              Iniciar Cooperação Técnica Institucional
            </h3>
            <p className="text-gray-600 text-sm mt-1 text-center">
              Selecione o canal de atendimento adequado à demanda atual do seu escritório.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
            
            {/* PORTA 1 — ATENDIMENTO ASSISTIDO (URGÊNCIA) */}
            <div className="border border-red-100 bg-gradient-to-b from-white to-red-50/20 p-6 flex flex-col justify-between shadow-sm rounded-sm">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-widest text-red-700 uppercase bg-red-100 px-2.5 py-1 rounded-sm">
                  Porta 1 · Demanda Imediata
                </span>
                <h4 className="text-lg font-bold text-blue-900 uppercase tracking-tight">
                  Suporte em Casos de Urgência
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Indicado para escritórios que enfrentam fiscalizações em shopping, malhas fiscais iminentes de clientes ou que necessitam de validação jurídica emergencial para operações societárias ou bloqueios judiciais imediatos.
                </p>
              </div>
              
              <div className="pt-6 mt-auto">
                <a 
                  href={whatsappUrgentLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleWhatsappClick}
                  className="w-full inline-flex items-center justify-center bg-red-700 text-white px-5 py-3.5 font-bold uppercase text-[11px] tracking-widest hover:bg-red-800 transition-all shadow-md text-center"
                >
                  <MessageSquare size={15} className="mr-2" /> Acionar Canal de Urgência
                </a>
              </div>
            </div>

            {/* PORTA 2 — PROSPECÇÃO PREVENTIVA (FORMULÁRIO NETLIFY + DOWNLOAD DO PDF) */}
            <div className="border border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between shadow-sm rounded-sm">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-widest text-blue-900 uppercase bg-blue-100 px-2.5 py-1 rounded-sm">
                  Porta 2 · Planejamento e Inteligência
                </span>
                <h4 className="text-lg font-bold text-blue-900 uppercase tracking-tight">
                  Mapeamento de Riscos Preventivos
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Baixe o manual completo **"Mapa de Urgências para Contadores"** e utilize-o como guia rápido de cabeceira para identificar riscos patrimoniais e fiscais no seu escritório.
                </p>

                {/* FORMULÁRIO DE CAPTURA NETLIFY NATIVO */}
                <form 
                  name="download-checklist-parcerias" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit}
                  className="space-y-3 text-left bg-white p-4 border border-gray-100 rounded-sm"
                >
                  <input type="hidden" name="form-name" value="download-checklist-parcerias" />
                  
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border border-gray-300 p-2 text-sm rounded-sm focus:outline-none focus:border-blue-900" 
                      placeholder="Ex: Dr. Roberto Silva"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">E-mail Corporativo</label>
                    <input 
                      type="type" 
                      name="email"
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full border border-gray-300 p-2 text-sm rounded-sm focus:outline-none focus:border-blue-900" 
                      placeholder="Ex: roberto@contabil.com.br"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Porte do Escritório</label>
                    <select 
                      name="officeSize"
                      required
                      value={formState.officeSize}
                      onChange={(e) => setFormState({ ...formState, officeSize: e.target.value })}
                      className="w-full border border-gray-300 p-2 text-sm rounded-sm bg-white focus:outline-none focus:border-blue-900 text-gray-700"
                    >
                      <option value="" disabled>Selecione o volume de clientes...</option>
                      <option value="individual_pequeno">Até 50 clientes corporativos</option>
                      <option value="medio">De 51 a 150 clientes corporativos</option>
                      <option value="grande">Mais de 150 clientes corporativos</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full mt-2 inline-flex items-center justify-center bg-blue-900 text-white px-4 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all disabled:bg-gray-400 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      'Processando...'
                    ) : (
                      <>
                        <Download size={13} className="mr-2" /> Baixar Mapa de Urgências
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="text-xs font-semibold text-green-700 mt-2 text-center bg-green-50 p-2 border border-green-200 rounded-sm">
                      Acesso liberado! O documento foi aberto em uma nova aba para salvar.
                    </p>
                  )}

                  {status === 'error' && (
                    <p className="text-xs font-semibold text-red-700 mt-2 text-center bg-red-50 p-2 border border-red-200 rounded-sm">
                      Ocorreu um erro técnico de envio. Por favor, tente novamente.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriasPage;