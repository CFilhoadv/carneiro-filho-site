import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';
import { Phone, MessageCircle } from 'lucide-react';

// Importação das suas imagens originais
import fachadaSorocaba from '../assets/images/unidade-sorocaba.jpeg';
import fachadaSaoPaulo from '../assets/images/unidade-sp.webp';

const HomeStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551521210044";

  return (
    <MainLayout>
      {/* 2. BANNER PRINCIPAL (HERO) */}
      <section className="relative h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 drop-shadow-xl uppercase">
              Direito ao seu alcance
            </h2>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-lg">
              Atendimento jurídico humano, claro e acessível para você, sua família e seus direitos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA */}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
            Nosso compromisso é oferecer um acolhimento dedicado, pautado na clareza e na proximidade. 
            Atuamos com disponibilidade para ouvir sua necessidade e conduzir seu caso de forma responsável e humana.
          </p>
          <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Áreas de Atuação</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left max-w-2xl mx-auto">
              {["Direito Civil", "Direito de Família e Sucessões", "Direito Previdenciário", "Direito do Trabalho", "Direito Empresarial"].map((area) => (
                <li key={area}>
                  <Link to="/servicos" className="text-gray-800 font-semibold text-lg hover:text-blue-900 transition-colors">• {area}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO NOSSAS UNIDADES - PADRONIZAÇÃO ESTÉTICA (OPÇÃO 1 DO DEV) */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-12 text-center">Nossas Unidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            
            {/* Unidade Sorocaba (Principal) */}
            <div className="flex flex-col bg-white p-4 shadow-sm rounded-sm border-t-4 border-blue-900">
              <div className="w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                <img 
                  src={fachadaSorocaba} 
                  alt="Unidade Sorocaba - Edifício Av. Paulista" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Unidade de Atendimento – Sorocaba</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Sediada no <strong>Edifício Av. Paulista</strong>, nossa unidade em Sorocaba foi estruturada para receber você com conforto no coração do Campolim.
              </p>
              <div className="text-gray-800 font-semibold text-sm mb-6">
                <p>Av. Profa. Izoraida Marques Peres, 256 – 9º andar</p>
                <p className="text-blue-900 mt-2 font-bold flex items-center">
                  <Phone size={14} className="mr-1" /> (15) 2121-0044
                </p>
              </div>
              <a href={whatsappSorocaba} className="mt-auto flex items-center justify-center bg-green-600 text-white py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-sm">
                <MessageCircle size={14} className="mr-2" /> Iniciar Atendimento
              </a>
            </div>

            {/* Unidade São Paulo (Administrativa) */}
            <div className="flex flex-col bg-white p-4 shadow-sm rounded-sm border-t-4 border-gray-300 opacity-90">
              <div className="w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                <img 
                  src={fachadaSaoPaulo} 
                  alt="Unidade São Paulo" 
                  className="w-full h-full object-cover grayscale" 
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Unidade Administrativa – São Paulo</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Localizada na Av. Brigadeiro Faria Lima, nossa unidade administrativa concentra a gestão estratégica e o suporte jurídico.
              </p>
              <div className="text-gray-800 font-semibold text-sm mb-6">
                <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                <p className="text-gray-400 mt-2 font-bold flex items-center italic">
                  <Phone size={14} className="mr-1" /> (11) 4210-6194
                </p>
              </div>
              <div className="mt-auto text-center py-3 text-[9px] text-gray-400 uppercase tracking-widest font-bold bg-gray-50 border border-gray-100">
                Apoio Administrativo
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-8">Como podemos ajudar?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={whatsappSorocaba} className="inline-flex items-center justify-center bg-green-600 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-md w-full md:w-auto">
              <MessageCircle size={18} className="mr-2" /> WhatsApp Business
            </a>
            <a href="tel:1521210044" className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md w-full md:w-auto">
              <Phone size={18} className="mr-2" /> (15) 2121-0044
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;