import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Award, Briefcase, Scale, MessageCircle } from 'lucide-react';

const QuemSomosStaging: React.FC = () => {
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551521210044";

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

      {/* Cabeçalho */}
      <section className="bg-white pt-12 pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Quem Somos
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Coluna da Esquerda: Posicionamento */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Quem Somos */}
              <article>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Scale className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wider">
                    O Escritório
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  O <strong>Carneiro Filho Sociedade Individual de Advocacia</strong> (OAB/SP nº 47.631) atua de forma estratégica e multidisciplinar, prestando assessoria jurídica a pessoas físicas e jurídicas em demandas selecionadas de natureza <strong>cível</strong>, patrimonial, familiar, empresarial, tributária, trabalhista e previdenciária.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  A atuação do escritório é marcada pela análise técnica rigorosa, pela experiência em contencioso judicial e pela condução de casos que exigem visão integrada dos impactos jurídicos e patrimoniais envolvidos.
                </p>
              </article>

              {/* Atuação Profissional */}
              <article>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Briefcase className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wider">
                    Atuação Profissional
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Com sólida vivência institucional na <strong>Defensoria Pública do Estado de São Paulo</strong> e experiência em funções executivas de gestão administrativa e financeira, o responsável técnico reúne capacidade técnica e visão prática para a resolução de conflitos complexos e a proteção de interesses patrimoniais relevantes.
                </p>
              </article>

              {/* Compromisso Profissional */}
              <article>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Shield className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wider">
                    Compromisso Profissional
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  O atendimento personalizado, o acompanhamento direto dos casos e o rigor ético orientam a atuação do escritório, em estrita observância ao Estatuto da Advocacia e ao Código de Ética da OAB.
                </p>
              </article>
            </div>

            {/* Coluna da Direita: Card de Autoridade */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-blue-900 text-white p-8 rounded-sm shadow-xl border-b-8 border-blue-700 text-center">
                  <Award className="mx-auto mb-6 text-blue-200" size={48} />
                  <h3 className="text-xl font-bold mb-2">Responsável Técnico</h3>
                  <p className="text-2xl font-bold mb-4">Francisco de Assis Carneiro Filho</p>
                  <p className="text-blue-200 font-bold tracking-widest uppercase text-sm">
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