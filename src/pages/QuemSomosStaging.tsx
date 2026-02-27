import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Award, Briefcase, Scale, MessageCircle, HeartHandshake, Landmark, Handshake } from 'lucide-react';

// Importação da sua foto
import fotoPerfil from '../assets/images/advogado-principal-nova.jpg';

const QuemSomosStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551531911432";

  return (
    <MainLayout>
      <a 
        href={whatsappSorocaba} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">
            Quem Somos
          </h1>
          <p className="text-blue-900 font-medium text-xs md:text-sm mt-2 uppercase tracking-tight">
            Direito com técnica, proximidade e responsabilidade
          </p>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-3 md:mt-4 md:w-20 md:h-1.5"></div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 text-left">
            
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
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                    A Carneiro Filho Advocacia nasce da convicção de que o Direito cumpre o seu papel quando alia conhecimento técnico a uma escuta atenta. Nossa trajetória foi construída ao longo de décadas, unindo o atendimento direto à população à vivência prática em estruturas empresariais e de gestão.
                  </p>
                </div>
              </div>

              <article className="space-y-4">
                <div className="flex items-center mb-2">
                  <HeartHandshake className="text-blue-900 mr-3" size={24} />
                  <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight text-left">Experiência que aproxima</h2>
                </div>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Uma parte essencial dessa formação ocorreu na <strong>Defensoria Pública</strong>, onde o contato diário com cidadãos revelou a importância de uma advocacia humana. Essa vivência orienta nossa atuação — com linguagem clara e atenção ao contexto de cada cliente, buscando soluções objetivas.
                </p>
              </article>

              <article className="space-y-4">
                <div className="flex items-center mb-2">
                  <Landmark className="text-blue-900 mr-3" size={24} />
                  <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight text-left">Rigor técnico e visão integrada</h2>
                </div>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  A experiência profissional em ambientes corporativos e a formação em <strong>Direito e Contabilidade</strong> permitem um olhar técnico aprofundado sobre tributação e patrimônio. Esse conhecimento é aplicado buscando mitigar riscos e preservar direitos, seja para o cidadão comum em Sorocaba e região, seja para o empresário local.
                </p>
              </article>

              {/* BLOCO ESTRATÉGICO DE COOPERAÇÃO TÉCNICA */}
              <article className="space-y-4 bg-blue-50/50 p-6 border-l-4 border-blue-400">
                <div className="flex items-center mb-2">
                  <Handshake className="text-blue-900 mr-3" size={24} />
                  <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight text-left">Atuação Cooperativa e Institucional</h2>
                </div>
                <p className="text-base leading-relaxed text-gray-800 text-justify italic">
                  Atuamos em cooperação com profissionais de outras áreas, oferecendo retaguarda técnica em demandas sucessórias e patrimoniais que exigem especialização estruturada e alinhamento institucional, visando a segurança dos parceiros e de seus clientes.
                </p>
              </article>

              <div className="bg-gray-50 p-6 border-l-4 border-blue-900 rounded-sm">
                <h3 className="font-bold text-blue-900 uppercase text-xs mb-4 tracking-widest text-left">Nossos Compromissos:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-center"><Shield size={16} className="mr-2 text-blue-900" /> Advocacia Clara e Responsável</li>
                  <li className="flex items-center"><Briefcase size={16} className="mr-2 text-blue-900" /> Soluções Estratégicas e Técnicas</li>
                  <li className="flex items-center"><Scale size={16} className="mr-2 text-blue-900" /> Prevenção de Conflitos e Riscos</li>
                  <li className="flex items-center"><HeartHandshake size={16} className="mr-2 text-blue-900" /> Atendimento Individualizado</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="bg-blue-900 text-white p-6 md:p-8 rounded-sm shadow-xl border-b-8 border-blue-700 text-center">
                  <Award className="mx-auto mb-4 text-blue-200" size={48} />
                  <h3 className="text-lg font-bold mb-1">Advogado Titular</h3>
                  <p className="text-xl font-extrabold mb-4 uppercase tracking-tighter">Francisco de Assis Carneiro Filho</p>
                  <div className="space-y-2 text-blue-200 font-bold tracking-widest uppercase text-[10px] mb-6">
                    <p>Bacharel em Direito e Contabilista</p>
                    <p>MBA Executivo em Gestão - FGV</p>
                    <p>Especialista em Direito Tributário</p>
                  </div>
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