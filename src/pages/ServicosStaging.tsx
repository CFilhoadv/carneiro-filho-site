import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { MessageCircle, Users, Landmark, ShieldCheck, ChevronRight, Scale, FileText, Briefcase } from 'lucide-react';

const ServicosStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";

  return (
    <MainLayout>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest">Serviços</h1>
          <div className="h-1 w-16 md:h-1.5 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Família e Sucessões */}
            <div className="p-6 bg-gray-50 border-l-4 border-blue-900 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="text-blue-900 mr-3" size={24} />
                  <h2 className="font-bold text-blue-900 uppercase text-xs">Família e Sucessões</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
                  Acolhimento e técnica na resolução de conflitos familiares e sucessórios. Atuamos em inventários, divórcios e partilhas, integrando inteligência patrimonial para garantir que a transição de bens seja rápida e econômica.
                </p>
              </div>
              <a href={whatsappLink} className="text-blue-900 font-bold uppercase tracking-widest text-[10px] flex items-center hover:underline">
                Agendar Orientação Familiar <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* 2. Cível e Imobiliário */}
            <div className="p-6 bg-gray-50 border-l-4 border-blue-900 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Scale className="text-blue-900 mr-3" size={24} />
                  <h2 className="font-bold text-blue-900 uppercase text-xs">Direito Cível</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
                  Atuação técnica em ações de indenização (danos morais e materiais), cobranças e execuções de dívidas. No Direito Imobiliário, atuamos em despejos, locações e regularização de imóveis com segurança jurídica.
                </p>
              </div>
              <a href={whatsappLink} className="text-blue-900 font-bold uppercase tracking-widest text-[10px] flex items-center hover:underline">
                Analisar meu Caso Agora <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* 3. Direito Tributário */}
            <div className="p-6 bg-blue-50 border-l-4 border-blue-900 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Landmark className="text-blue-900 mr-3" size={24} />
                  <h2 className="font-bold text-blue-900 uppercase text-xs">Direito Tributário</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
                  Defesa contra cobranças indevidas e regularização de débitos fiscais. Realizamos a análise técnica de tributos em inventários e negócios imobiliários para proteger seu patrimônio contra perdas desnecessárias.
                </p>
              </div>
              <a href={whatsappLink} className="text-blue-900 font-bold uppercase tracking-widest text-[10px] flex items-center hover:underline">
                Proteger meu Patrimônio <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* 4. Direito Empresarial */}
            <div className="p-6 bg-gray-50 border-l-4 border-blue-900 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-900 mr-3" size={24} />
                  <h2 className="font-bold text-blue-900 uppercase text-xs">Estratégia Empresarial</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
                  Suporte para o crescimento seguro da sua empresa. Atuamos na estruturação societária, contratos, recuperação de créditos e mitigação de riscos fiscais, gerando fôlego financeiro para o seu negócio.
                </p>
              </div>
              <a href={whatsappLink} className="text-blue-900 font-bold uppercase tracking-widest text-[10px] flex items-center hover:underline">
                Consultoria para Empresas <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* 5. Inteligência Patrimonial */}
            <div className="p-6 bg-blue-900 text-white shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4 text-blue-200">
                  <ShieldCheck className="mr-3" size={24} />
                  <h2 className="font-bold uppercase text-xs">Inteligência Patrimonial</h2>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed text-justify mb-6">
                  Atuação estratégica voltada à proteção do legado familiar. Instrumentos adaptados à realidade de cada família, como testamentos e holdings, para evitar inventários longos e reduzir custos tributários.
                </p>
              </div>
              <Link to="/planejamento-sucessorio" className="text-blue-200 font-bold uppercase tracking-widest text-[10px] flex items-center hover:text-white transition-colors">
                Ver Detalhes do Planejamento <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* 6. Previdenciário e Trabalhista */}
            <div className="p-6 bg-gray-50 border-l-4 border-blue-900 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-900 mr-3" size={24} />
                  <h2 className="font-bold text-blue-900 uppercase text-xs">Social e do Trabalho</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
                  Garantia de direitos fundamentais. Auxiliamos no encaminhamento de aposentadorias junto ao INSS e oferecemos defesa técnica em demandas trabalhistas para assegurar o correto recebimento de verbas.
                </p>
              </div>
              <a href={whatsappLink} className="text-blue-900 font-bold uppercase tracking-widest text-[10px] flex items-center hover:underline">
                Consultar meus Direitos <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;