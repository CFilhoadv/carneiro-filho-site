import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';
import { Phone, MessageCircle, MapPin, Search, Lightbulb, Landmark } from 'lucide-react';

// Importação das imagens originais
import fachadaSorocaba from '../assets/images/unidade-sorocaba.jpeg';
import fachadaSaoPaulo from '../assets/images/unidade-sp.webp';

const HomeStaging: React.FC = () => {
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

  return (
    <MainLayout>
      {/* 1. BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* 2. BANNER PRINCIPAL (HERO) - Altura reduzida no mobile (h-[350px]) */}
      <section className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-2xl md:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-xl uppercase">
              Soluções Jurídicas Objetivas
            </h2>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed drop-shadow-lg">
              Atendimento humano e simplificado para resolver os problemas do seu dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA - py-10 no mobile, py-16 no desktop */}
      <section className="py-10 md:py-16 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 md:mb-10">
            Atuamos como facilitadores, traduzindo o Direito de forma simples e sem burocracia para proteger você, sua família e seu patrimônio.
          </p>
          <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-6">Como podemos ajudar</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-center md:text-left max-w-2xl mx-auto">
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

      {/* 4. SEÇÃO: COMO FUNCIONA O ATENDIMENTO - Espaçamento enxuto (py-12) */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-8 md:mb-12 text-center">Nosso Método</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            <div className="text-center p-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MessageCircle size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">1. Primeiro Contato</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Envie sua dúvida via <strong>WhatsApp (texto ou áudio)</strong>. Atendimento sem "juridiquês" desde o início.
              </p>
            </div>

            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-gray-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Search size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">2. Análise Direta</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Avaliamos seu caso com foco na realidade dos fatos e nas melhores possibilidades para uma solução ágil.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
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

      {/* 5. SEÇÃO NOSSAS UNIDADES - Mais compacta no mobile */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-8 md:mb-12 text-center">Onde Atendemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            
            <div className="flex flex-col bg-white p-5 md:p-6 shadow-md rounded-sm border-t-4 border-blue-900">
              <div className="w-full aspect-video bg-gray-100 mb-4 overflow-hidden rounded-sm">
                <img src={fachadaSorocaba} alt="Unidade Sorocaba" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">Sorocaba (Principal)</h4>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Edifício Av. Paulista, Campolim. Ambiente preparado para acolher você com privacidade.
              </p>
              <div className="text-gray-800 space-y-2">
                <p className="flex items-start text-sm">
                  <MapPin size={18} className="mr-2 text-blue-900 flex-shrink-0 mt-1" />
                  <span>Av. Profa. Izoraida Marques Peres, 256 – 9º andar</span>
                </p>
                <p className="flex items-center text-lg font-bold text-blue-900">
                  <Phone size={18} className="mr-2" /> (15) 3191-1432
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white p-5 md:p-6 shadow-md rounded-sm border-t-4 border-gray-400 opacity-90">
              <div className="w-full aspect-video bg-gray-100 mb-4 overflow-hidden rounded-sm">
                <img src={fachadaSaoPaulo} alt="Unidade SP" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">São Paulo (Administrativo)</h4>
              <div className="text-gray-800 space-y-2">
                <p className="flex items-start text-sm text-gray-500">
                  <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                  <span>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</span>
                </p>
                <p className="flex items-center text-lg font-bold text-gray-500">
                  <Phone size={18} className="mr-2" /> (11) 4210-6194
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA FINAL - Padronizado para Sobriedade Institucional */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-4 text-center">Canais de Atendimento</h3>
          <div className="flex justify-center mb-4 text-gray-300">
            <Landmark size={32} />
          </div>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mb-8 font-bold">
            Carneiro Filho Advocacia • OAB/SP 47.631
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-lg w-full md:w-auto">
              <MessageCircle size={18} className="mr-2" /> WhatsApp
            </a>
            <a href="tel:1531911432" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-all shadow-lg w-full md:w-auto">
              <Phone size={18} className="mr-2" /> (15) 3191-1432
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;