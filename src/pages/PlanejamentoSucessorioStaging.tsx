import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const PlanejamentoSucessorioStaging: React.FC = () => {
  const whatsappSorocaba = "https://wa.me/551521210044";

  const subpaginas = [
    { title: "Doação com Usufruto", href: "/planejamento-sucessorio/doacao" },
    { title: "Testamentos", href: "/planejamento-sucessorio/testamentos" },
    { title: "Holding Familiar", href: "/planejamento-sucessorio/holding" },
    { title: "Administração de Bens Imóveis Próprios (ABIP)", href: "/planejamento-sucessorio/abip" }
  ];

  return (
    <MainLayout>
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            PLANEJAMENTO SUCESSÓRIO
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify mb-12">
            <p>
              O planejamento sucessório é um instrumento jurídico destinado à organização antecipada da transmissão patrimonial, com o objetivo de reduzir conflitos, preservar o patrimônio familiar e conferir maior previsibilidade jurídica às futuras sucessões.
            </p>
            <p>
              O escritório atua na estruturação de soluções jurídicas adequadas à realidade de cada família, avaliando aspectos civis, sucessórios, patrimoniais e tributários, sempre dentro dos limites legais e com absoluta transparência.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Instrumentos Jurídicos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subpaginas.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="p-4 bg-white border border-gray-300 rounded hover:border-blue-900 hover:shadow-md transition-all text-blue-900 font-semibold flex justify-between items-center"
                >
                  {item.title}
                  <span className="text-gray-400">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* MESMA ESTRUTURA DE CARDS DA PÁGINA DE SERVIÇOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
            
            {/* CARD SOROCABA - PRINCIPAL */}
            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
              <div>
                <h3 className="font-bold uppercase tracking-[0.2em] text-sm mb-4 border-b border-blue-800 pb-2 text-blue-200">Unidade Sorocaba (Principal)</h3>
                <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para agendamento de consultas e análise de planejamento.</p>
              </div>
              <div className="space-y-3">
                <a href={whatsappSorocaba} className="flex items-center justify-center bg-green-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all">
                  <MessageCircle size={16} className="mr-2" /> WhatsApp Business
                </a>
                <a href="tel:1521210044" className="flex items-center justify-center bg-white text-blue-900 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all border border-white">
                  <Phone size={16} className="mr-2" /> Ligar: (15) 2121-0044
                </a>
              </div>
            </div>

            {/* UNIDADE SÃO PAULO - APOIO */}
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-sm mb-4 border-b border-gray-200 pb-2">Unidade São Paulo</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Suporte administrativo e correio de voz para demandas corporativas.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center border-2 border-gray-300 text-gray-400 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px]">
                  <Phone size={16} className="mr-2" /> (11) 4210-6194
                </div>
                <p className="text-[9px] text-gray-400 uppercase text-center tracking-tighter">Atendimento via correio de voz</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlanejamentoSucessorioStaging;