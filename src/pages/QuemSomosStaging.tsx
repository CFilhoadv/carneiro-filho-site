import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Award, Briefcase, Scale, MessageCircle } from 'lucide-react';

// Importação da sua foto conforme o caminho informado
import fotoPerfil from '../assets/images/advogado-principal-nova.jpg';

const QuemSomosStaging: React.FC = () => {
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

  return (
    <MainLayout>
      {/* Botão Flutuante WhatsApp */}
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* Cabeçalho - Ajustado para py-8 no mobile para reduzir espaço branco */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Quem Somos
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-3 md:mt-4 md:w-20 md:h-1.5"></div>
        </div>
      </section>

      {/* Conteúdo Principal - py-10 no mobile */}
      <section className="py-10 md:py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Coluna da Esquerda: Foto e Textos Principais */}
            <div className="lg:col-span-8 space-y-10 md:space-y-12">
              
              {/* Bloco de Apresentação com Foto */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <div className="w-48 md:w-1/3 shrink-0">
                  <img 
                    src={fotoPerfil} 
                    alt="Francisco de Assis Carneiro Filho" 
                    className="w-full rounded-sm shadow-lg border-b-4 border-blue-900 object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4 md:mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3 md:mr-4">
                      {/* CORREÇÃO: Removido md:size */}
                      <Scale className="text-blue-900" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wider">
                      O Escritório
                    </h2>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                    O <strong>escritório Carneiro Filho Advocacia</strong> (OAB/SP nº 47.631) atua de forma estratégica para oferecer orientação jurídica clara e respostas diretas. Acreditamos que o advogado deve ser um facilitador, capaz de traduzir o Direito de forma simples e sem burocracia para pessoas e famílias de Sorocaba e região.
                  </p>
                </div>
              </div>

              {/* Experiência Prática */}
              <article>
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3 md:mr-4">
                    {/* CORREÇÃO: Removido md:size */}
                    <Briefcase className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wider">
                    Experiência Prática
                  </h2>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                  Com sólida vivência institucional na <strong>Defensoria Pública do Estado de São Paulo</strong>, o escritório possui vasta experiência na resolução de conflitos que impactam diretamente a vida e o patrimônio do cidadão, abrangendo <strong>questões de família, Direito do Consumidor, demandas cíveis e patrimoniais (incluindo inventários e indenizações por danos materiais e morais), além de suporte em causas previdenciárias e trabalhistas.</strong>
                </p>
              </article>

              {/* Compromisso Profissional */}
              <article>
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3 md:mr-4">
                    {/* CORREÇÃO: Removido md:size */}
                    <Shield className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wider">
                    Compromisso com o Cliente
                  </h2>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify italic border-l-4 border-blue-900 pl-4 md:pl-6 bg-gray-50 py-3 md:py-4">
                  "Atender com seriedade, sem promessas fáceis e com total clareza sobre as viabilidades jurídicas. Nosso compromisso é com a verdade e com a proteção dos seus interesses."
                </p>
              </article>
            </div>

            {/* Coluna da Direita: Card de Autoridade */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="bg-blue-900 text-white p-6 md:p-8 rounded-sm shadow-xl border-b-8 border-blue-700 text-center">
                  {/* CORREÇÃO: Removido md:size */}
                  <Award className="mx-auto mb-4 md:mb-6 text-blue-200" size={48} />
                  <h3 className="text-lg md:text-xl font-bold mb-2">Advogado Titular</h3>
                  <p className="text-xl md:text-2xl font-bold mb-4">Francisco de Assis Carneiro Filho</p>
                  <p className="text-blue-200 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4">
                    Bacharel em Direito e Contabilista<br/>
                    MBA Executivo - FGV
                  </p>
                  <p className="text-white font-bold tracking-widest uppercase text-xs md:text-sm border-t border-blue-800 pt-4">
                    OAB/SP nº 189.404
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default QuemSomosStaging;