import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';
import { Phone, MessageCircle, MapPin, Search, Lightbulb } from 'lucide-react';

// Importação das imagens originais
import fachadaSorocaba from '../assets/images/unidade-sorocaba.jpeg';
import fachadaSaoPaulo from '../assets/images/unidade-sp.webp';

const HomeStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telefoneSorocaba = "tel:1531911432";
  const telefoneSP = "tel:1142106194";

  return (
    <MainLayout>
      {/* 1. BOTÃO FLUTUANTE WHATSAPP - Redesenhado para ser inconfundível */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center animate-bounce group"
        aria-label="Fale no WhatsApp"
      >
        <MessageCircle size={24} className="mr-2" />
        <span className="font-bold text-sm hidden md:block">FALE NO WHATSAPP</span>
      </a>

      {/* 2. BANNER PRINCIPAL (HERO) - Limpo e Institucional */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner Carneiro Filho Advocacia" title="Atendimento Jurídico Familiar" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 uppercase drop-shadow-xl">
              Soluções Jurídicas Objetivas
            </h2>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed drop-shadow-lg mb-8">
              Atendimento humano e simplificado para resolver os problemas do seu dia a dia.
            </p>
            {/* CTA ACIMA DA DOBRA - Discreto mas clicável */}
            <a href={whatsappLink} target="_blank" rel="noopener" className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-[#128C7E] transition-all">
              Iniciar Atendimento Digital
            </a>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
            Atuamos como facilitadores, traduzindo o Direito de forma simples e sem burocracia para proteger você, sua família e seu patrimônio.
          </p>
          <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Como podemos ajudar</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left max-w-2xl mx-auto">
              {[
                "Direito de Família e Sucessões", 
                "Consumidor e Indenizações", 
                "Demandas Cíveis e Patrimoniais", 
                "Direito Previdenciário e Trabalhista"
              ].map((area) => (
                <li key={area}>
                  <Link to="/servicos" className="text-gray-800 font-semibold text-base md:text-lg hover:text-blue-900 transition-colors">• {area}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO: NOSSO MÉTODO - Links Ativos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-12 text-center">Nosso Método</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MessageCircle size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">1. Primeiro Contato</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Envie sua dúvida <a href={whatsappLink} target="_blank" rel="noopener" className="text-blue-700 font-bold underline hover:text-green-600 transition-colors">via WhatsApp</a>. Atendimento sem "juridiquês" desde o início.
              </p>
            </div>

            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Search size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">2. Análise Direta</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Avaliamos seu caso com foco na realidade dos fatos e nas melhores possibilidades de solução.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Lightbulb size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">3. Retorno Ágil</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Em até <strong>3 dias úteis</strong>, apresentamos um plano de ação claro para o seu caso.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SEÇÃO NOSSAS UNIDADES - Rótulos Claros e Links Ativos */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-12 text-center">Onde Atendemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white p-6 md:p-8 shadow-md rounded-sm border-t-4 border-blue-900">
              <div className="w-full aspect-video mb-4 overflow-hidden rounded-sm">
                <img src={fachadaSorocaba} alt="Unidade Sorocaba - Atendimento Presencial" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-1 uppercase">Sorocaba</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4 italic">Atendimento Presencial</p>
              <div className="space-y-3">
                <p className="flex items-start text-sm text-gray-700 leading-tight">
                  <MapPin size={18} className="mr-2 text-blue-900 flex-shrink-0 mt-0.5" />
                  <span>Av. Profa. Izoraida Marques Peres, 256 – 9º andar<br/>Edifício Av. Paulista, Campolim</span>
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener" className="flex items-center text-xl font-bold text-blue-900 hover:text-green-600 transition-colors">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-md rounded-sm border-t-4 border-gray-400 opacity-90">
              <div className="w-full aspect-video mb-4 overflow-hidden rounded-sm grayscale opacity-80">
                <img src={fachadaSaoPaulo} alt="Unidade São Paulo - Escritório Administrativo" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1 uppercase">São Paulo</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4 italic">Escritório Administrativo</p>
              <div className="space-y-3">
                <p className="flex items-start text-sm text-gray-500 leading-tight">
                  <MapPin size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119<br/>Jardim Paulistano</span>
                </p>
                <a href={telefoneSP} className="flex items-center text-lg font-bold text-gray-500 hover:text-blue-900 transition-colors">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA FINAL - Canais de Atendimento */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-10 text-center">Canais de Atendimento</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-[#128C7E] transition-all shadow-lg w-full md:w-auto">
              <MessageCircle size={20} className="mr-2" /> Chamar no WhatsApp
            </a>
            <a href={telefoneSorocaba} className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg w-full md:w-auto">
              <Phone size={20} className="mr-2" /> (15) 3191-1432
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;