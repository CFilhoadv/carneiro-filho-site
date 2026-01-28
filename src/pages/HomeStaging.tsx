import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import bannerImg from '../assets/images/banner_familia.webp';

// Importação das Imagens das Fachadas com os nomes exatos
import fachadaSorocaba from '../assets/images/unidade-sorocaba.jpeg';
import fachadaSaoPaulo from '../assets/images/unidade-sp.webp';

const HomeStaging: React.FC = () => {
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
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 drop-shadow-xl">
              DIREITO AO SEU ALCANCE
            </h2>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-lg">
              Atendimento jurídico humano, claro e acessível para você, sua família e seus direitos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Nosso compromisso é oferecer um acolhimento dedicado, pautado na clareza e na proximidade. 
              Atuamos com disponibilidade para ouvir sua necessidade e conduzir seu caso de forma responsável e humana.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6 text-center">Áreas de Atuação</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left max-w-2xl mx-auto">
              {[
                "Direito Civil", 
                "Direito de Família e Sucessões", 
                "Direito Previdenciário", 
                "Direito do Trabalho", 
                "Direito Empresarial"
              ].map((area) => (
                <li key={area}>
                  <Link to="/servicos" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors">
                    • {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO NOSSAS UNIDADES - AUTORIDADE E CONTATO LOCAL */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-12 text-center">Nossas Unidades</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Unidade Sorocaba */}
            <div className="flex flex-col">
              <img 
                src={fachadaSorocaba} 
                alt="Unidade Sorocaba - Edifício Av. Paulista" 
                className="w-full h-64 object-cover rounded-sm shadow-md mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Unidade de Atendimento – Sorocaba</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Sediada no Edifício Av. Paulista, nossa unidade em Sorocaba foi estruturada para receber você com conforto no coração do Campolim.
              </p>
              <div className="text-gray-800 font-semibold text-sm">
                <p>Av. Profa. Izoraida Marques Peres, 256 – 9º andar</p>
                <p className="text-blue-900 mt-2 font-bold">Telefone: (15) 2121-0044</p>
              </div>
            </div>

            {/* Unidade São Paulo */}
            <div className="flex flex-col">
              <img 
                src={fachadaSaoPaulo} 
                alt="Unidade São Paulo - Faria Lima" 
                className="w-full h-64 object-cover rounded-sm shadow-md mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Unidade Administrativa – São Paulo</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Localizada na Av. Brigadeiro Faria Lima, nossa unidade administrativa concentra a gestão estratégica e o suporte jurídico.
              </p>
              <div className="text-gray-800 font-semibold text-sm">
                <p>Av. Brigadeiro Faria Lima, 1811 – Conj. 1119</p>
                <p className="text-blue-900 mt-2 font-bold">Telefone: (11) 4210-6194</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA - AJUSTE ÉTICO (ENTRAR EM CONTATO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-8">Como podemos ajudar?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:1521210044" 
              className="inline-block bg-blue-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-800 transition-colors shadow-sm w-full md:w-auto"
            >
              Entrar em Contato
            </a>
            <Link 
              to="/analise-preliminar" 
              className="inline-block border-2 border-blue-900 text-blue-900 px-10 py-3.5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-50 transition-colors w-full md:w-auto"
            >
              Análise Preliminar
            </Link>
          </div>
          <p className="text-gray-500 text-xs mt-6 uppercase tracking-widest">
            Unidade Sorocaba: (15) 2121-0044
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;