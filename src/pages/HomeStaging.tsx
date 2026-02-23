import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Users, ChevronRight, Scale, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
// IMPORTAÇÃO DIRETA DA IMAGEM CORRETA
import bannerFamilia from '../assets/images/banner_familia.webp';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* BANNER COM IMAGEM CORRETA E CTA NA BASE */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-24 bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={bannerFamilia} 
            alt="Proteção Patrimonial e Família" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
              Autoridade Técnica e <br />Gestão Jurídica
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
              Soluções jurídicas decisivas para cidadãos e empresas, com a visão estratégica de quem domina a retaguarda técnica.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://wa.me/551531911432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all flex items-center shadow-2xl"
              >
                Falar com Especialista <ChevronRight className="ml-2" size={20} />
              </a>
              <Link 
                to="/parcerias" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-2xl"
              >
                Hub de Parcerias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ESPECIALIDADES COM DIREITO CIVIL PARA O PÚBLICO ALVO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-blue-900 font-bold uppercase tracking-[0.3em] text-xs mb-4">Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Como Podemos Ajudar</h3>
            <div className="h-1.5 w-24 bg-blue-900 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* DIREITO CIVIL - FOCO EM SOROCABA E REGIÃO */}
            <div className="bg-gray-50 p-10 border-t-4 border-blue-900 shadow-sm hover:shadow-2xl transition-all group">
              <Scale className="text-blue-900 mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Direito Civil</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Proteção contra cobranças indevidas, negativação injusta no SCPC/SERASA e ações de indenização por danos morais.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                Ver Detalhes <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-gray-50 p-10 border-t-4 border-blue-900 shadow-sm hover:shadow-2xl transition-all group">
              <Shield className="text-blue-900 mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Gestão de Ativos</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Organização e regularização de imóveis e ativos financeiros, garantindo a integridade do seu patrimônio.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                Ver Detalhes <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-gray-50 p-10 border-t-4 border-blue-900 shadow-sm hover:shadow-2xl transition-all group">
              <Heart className="text-blue-900 mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Sucessão Familiar</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Holding familiar, inventários judiciais e extrajudiciais, conduzidos com o rigor técnico necessário.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                Ver Detalhes <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-gray-50 p-10 border-t-4 border-blue-900 shadow-sm hover:shadow-2xl transition-all group">
              <Users className="text-blue-900 mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Parcerias</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Retaguarda técnica jurídica para Contadores e Imobiliárias, agregando valor às operações dos seus clientes.
              </p>
              <Link to="/parcerias" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                Acessar Hub <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;