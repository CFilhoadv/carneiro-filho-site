import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Award, Briefcase, Scale, MessageCircle, HeartHandshake, Landmark } from 'lucide-react';

// Importação da sua foto
import fotoPerfil from '../assets/images/advogado-principal-nova.jpg';

const QuemSomosStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551531911432";

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
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Quem Somos
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-3 md:mt-4 md:w-20 md:h-1.5"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-10 md:py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Coluna da Esquerda: Narrativa Equilibrada */}
            <div className="lg:col-span-8 space-y-10">
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <div className="w-48 md:w-1/3 shrink-0">
                  <img 
                    src={fotoPerfil} 
                    alt="Francisco de Assis Carneiro Filho" 
                    className="w-full rounded-sm shadow-lg border-b-4 border-blue-900 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wider mb-4 text-center md:text-left">
                    Direito com técnica e responsabilidade
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                    A Carneiro Filho Advocacia nasce da convicção de que o Direito só cumpre seu papel quando alia conhecimento técnico sólido a escuta atenta e compromisso humano. Nossa atuação foi construída em diferentes frentes: no atendimento direto à população e na vivência prática em estruturas complexas, oferecendo um serviço seguro às famílias de Sorocaba.
                  </p>
                </div>
              </div>

              <article className="space-y-4">
                <div className="flex items-center mb-2">
                  <HeartHandshake className="text-blue-900 mr-3" size={24} />
                  <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Experiência que aproxima</h2>
                </div>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Uma parte essencial dessa formação ocorreu na <strong>Defensoria Pública</strong>, onde o contato diário com cidadãos revelou que por trás de cada processo existe uma história e uma urgência. Essa vivência moldou nossa atuação: linguagem clara, orientação objetiva e atenção ao contexto, sem "juridiquês" ou promessas irreais.
                </p>
              </article>

              <article className="space-y-4">
                <div className="flex items-center mb-2">
                  <Landmark className="text-blue-900 mr-3" size={24} />
                  <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">Rigor técnico a serviço das pessoas</h2>
                </div>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Paralelamente, a atuação em ambientes corporativos e a formação em <strong>Direito e Contabilidade</strong> trouxeram um olhar aprofundado sobre tributação e patrimônio. Esse conhecimento hoje é aplicado com um único objetivo: proteger direitos e evitar prejuízos para o cidadão comum e o empresário local. Aqui, a técnica trabalha em silêncio a favor do cliente.
                </p>
              </article>

              <div className="bg-gray-50 p-6 border-l-4 border-blue-900">
                <h3 className="font-bold text-blue-900 uppercase text-sm mb-4 tracking-widest">Como atuamos:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center"><Shield size={16} className="mr-2 text-blue-900" /> Advocacia Clara e Responsável</li>
                  <li className="flex items-center"><Briefcase size={16} className="mr-2 text-blue-900" /> Soluções Estratégicas e Eficientes</li>
                  <li className="flex items-center"><Scale size={16} className="mr-2 text-blue-900" /> Prevenção de Conflitos</li>
                  <li className="flex items-center"><HeartHandshake size={16} className="mr-2 text-blue-900" /> Atendimento Humano Individual</li>
                </ul>
              </div>
            </div>

            {/* Coluna da Direita: Card de Autoridade */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="bg-blue-900 text-white p-6 md:p-8 rounded-sm shadow-xl border-b-8 border-blue-700 text-center">
                  <Award className="mx-auto mb-4 text-blue-200" size={48} />
                  <h3 className="text-lg font-bold mb-2">Advogado Titular</h3>
                  <p className="text-xl font-bold mb-4 uppercase">Francisco de Assis Carneiro Filho</p>
                  <p className="text-blue-200 font-bold tracking-widest uppercase text-[10px] mb-4">
                    Bacharel em Direito e Contabilista<br/>
                    MBA Executivo - FGV
                  </p>
                  <p className="text-white font-bold tracking-widest uppercase text-xs border-t border-blue-800 pt-4">
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