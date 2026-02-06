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

  return (
    <MainLayout>
      {/* 1. BOTÃO FLUTUANTE WHATSAPP - Ação constante em toda a página */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Fale Conosco"
      >
        <MessageCircle size={30} />
      </a>

      {/* 2. BANNER PRINCIPAL (HERO) */}
      <section className="relative h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Banner" className="w-full h-full object-cover brightness-[0.6]" />
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-6xl font-bold tracking-tight leading-tight mb-6 uppercase drop-shadow-lg">
              Soluções Jurídicas Objetivas
            </h2>
            <p className="text-white text-lg md:text-2xl font-medium leading-relaxed drop-shadow-md mb-8">
              Atendimento humano e simplificado para resolver os problemas do seu dia a dia.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-green-700 transition-all shadow-xl"
            >
              <MessageCircle className="mr-2" size={20} /> Fale Direto no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3. BLOCO ÁREA JURÍDICA */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-10 italic">
            "Atuamos como facilitadores, traduzindo o Direito de forma simples e sem burocracia para proteger você, sua família e seu patrimônio."
          </p>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-8">Especialidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              {[
                { title: "Direito de Família e Sucessões", link: "/servicos" },
                { title: "Consumidor e Indenizações", link: "/servicos" },
                { title: "Demandas Cíveis e Patrimoniais", link: "/servicos" },
                { title: "Direito Previdenciário e Trabalhista", link: "/servicos" }
              ].map((item) => (
                <Link 
                  key={item.title} 
                  to={item.link} 
                  className="flex items-center p-3 bg-white border border-transparent hover:border-blue-900 hover:text-blue-900 transition-all rounded-md shadow-sm font-semibold text-gray-800"
                >
                  <span className="text-blue-900 mr-2">▶</span> {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO: NOSSO MÉTODO - Agora com botão de ação direta */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-12 md:mb-16 text-center">Como funciona nosso atendimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                <MessageCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">1. Primeiro Contato</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                Envie sua dúvida via <strong>WhatsApp (texto ou áudio)</strong>. Atendimento sem "juridiquês" desde o início.
              </p>
              <a href={whatsappLink} className="text-green-600 font-bold uppercase text-xs tracking-widest hover:underline">
                Iniciar Conversa →
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                <Search size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Análise Direta</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Avaliamos seu caso com foco na realidade dos fatos e nas melhores possibilidades para uma solução ágil.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Retorno Ágil</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Em até <strong>3 dias úteis</strong>, apresentamos um plano de ação claro para o seu caso.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-6">Entendeu nosso método? Conte seu caso agora mesmo:</p>
            <a href={whatsappLink} className="inline-block bg-green-600 text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-green-700 shadow-lg">
              Tirar minha dúvida por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO NOSSAS UNIDADES - Com links de mapa e telefone clicáveis */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-12 text-center">Unidades e Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white p-6 md:p-8 shadow-md rounded-lg border-t-4 border-blue-900">
              <div className="w-full aspect-video mb-6 overflow-hidden rounded-md">
                <img src={fachadaSorocaba} alt="Unidade Sorocaba" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4 uppercase">Sorocaba</h4>
              <div className="space-y-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av+Profa+Izoraida+Marques+Peres+256+Sorocaba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <MapPin size={20} className="mr-3 text-blue-900 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base">Av. Profa. Izoraida Marques Peres, 256 – 9º andar<br/>Edifício Av. Paulista, Campolim</span>
                </a>
                <a href={telefoneSorocaba} className="flex items-center text-2xl font-bold text-blue-900 hover:underline">
                  <Phone size={22} className="mr-3" /> (15) 3191-1432
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-md rounded-lg border-t-4 border-gray-300 opacity-90">
              <div className="w-full aspect-video mb-6 overflow-hidden rounded-md grayscale">
                <img src={fachadaSaoPaulo} alt="Unidade SP" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-2xl font-bold text-gray-600 mb-4 uppercase">São Paulo</h4>
              <div className="space-y-4">
                <p className="flex items-start text-gray-500">
                  <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base">Av. Brigadeiro Faria Lima, 1811 – Conj. 1119<br/>Jardim Paulistano</span>
                </p>
                <a href="tel:1142106194" className="flex items-center text-xl font-bold text-gray-500 hover:underline">
                  <Phone size={22} className="mr-3" /> (11) 4210-6194
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA FINAL - Limpo e Direto (Sem OAB redundante) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6 uppercase tracking-tight">Canais de Atendimento</h3>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto font-medium">
            Escolha o canal de sua preferência. Estamos prontos para oferecer um retorno ágil e sem burocracia.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-flex items-center justify-center bg-green-600 text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-green-700 shadow-xl transition-all">
              <MessageCircle size={20} className="mr-2" /> Iniciar conversa no WhatsApp
            </a>
            <a href={telefoneSorocaba} className="w-full md:w-auto inline-flex items-center justify-center bg-blue-900 text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-blue-800 shadow-xl transition-all">
              <Phone size={20} className="mr-2" /> (15) 3191-1432
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;