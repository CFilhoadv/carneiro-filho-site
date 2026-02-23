import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Users, Briefcase, ChevronRight, Scale, Gavel, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* BANNER COM CTA NA PARTE INFERIOR */}
      <section className="relative h-[600px] flex items-end pb-20 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
            alt="Justiça e Direito" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AUTORIDADE TÉCNICA E <br />GESTÃO JURÍDICA
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Soluções jurídicas decisivas para cidadãos e empresas, com a visão estratégica de quem domina a retaguarda técnica.
            </p>
            {/* CTA REPOSICIONADO PARA A BASE DO BANNER */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/551531911432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all flex items-center shadow-lg"
              >
                Falar com Especialista <ChevronRight className="ml-2" size={18} />
              </a>
              <Link 
                to="/parcerias" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-lg"
              >
                Hub de Parcerias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: COMO PODEMOS AJUDAR (AGORA COM DIREITO CIVIL) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-4">Soluções</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-800">Como Podemos Ajudar</h3>
            <div className="h-1 w-20 bg-blue-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* NOVO: DIREITO CIVIL - FOCO NO PÚBLICO SOROCABA */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <Scale className="text-blue-900 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Direito Civil</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Proteção contra cobranças indevidas, negativação injusta no SCPC/SERASA e ações de indenização por danos morais.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:underline">
                Ver Detalhes <ChevronRight className="ml-1" size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <Shield className="text-blue-900 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Gestão de Ativos</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Organização e regularização de imóveis e ativos financeiros, garantindo a integridade do seu patrimônio.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:underline">
                Ver Detalhes <ChevronRight className="ml-1" size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <Heart className="text-blue-900 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Sucessão Familiar</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Holding familiar, inventários judiciais e extrajudiciais, conduzidos com o rigor técnico necessário.
              </p>
              <Link to="/servicos" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:underline">
                Ver Detalhes <ChevronRight className="ml-1" size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <Users className="text-blue-900 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Parcerias</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Retaguarda técnica jurídica para Contadores e Imobiliárias, agregando valor às operações dos seus clientes.
              </p>
              <Link to="/parcerias" className="text-blue-900 font-bold text-xs uppercase tracking-widest flex items-center hover:underline">
                Acessar Hub <ChevronRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeStaging;