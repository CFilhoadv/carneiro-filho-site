import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle } from 'lucide-react';

const DoacaoStaging: React.FC = () => {
  // ATUALIZADO: Canal único VoIP e WhatsApp (15) 3191-1432
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

  return (
    <MainLayout>
      {/* Cabeçalho Padronizado - Ajustado para py-8 no mobile */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Doação com Reserva de Usufruto
          </h1>
          <div className="h-1 w-16 md:w-20 bg-blue-900 mx-auto mt-3 md:mt-4"></div>
        </div>
      </section>

      {/* Conteúdo Principal - py-10 no mobile */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p className="text-blue-900 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              (Instrumento de Planejamento Sucessório)
            </p>
            <p>
              A doação com reserva de usufruto é o instrumento jurídico pelo qual uma pessoa transfere a propriedade de um bem aos herdeiros, mantendo para si o direito de uso, administração e percepção dos rendimentos do bem (<strong>usufruto:</strong> direito de utilizar o bem e receber seus frutos, como aluguéis, mesmo sem ser o proprietário formal).
            </p>
            <p>
              Esse instrumento é amplamente utilizado para organizar a sucessão patrimonial ainda em vida, permitindo que o titular mantenha o controle do patrimônio enquanto antecipa a transmissão da propriedade, reduzindo riscos de conflitos futuros e evitando a concentração de bens exclusivamente no inventário.
            </p>
            <p>
              A sua utilização exige atenção especial à <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio que a lei reserva obrigatoriamente a cônjuge, descendentes e ascendentes), bem como aos impactos tributários, registrais e sucessórios envolvidos.
            </p>
            
            {/* Bloco de Alerta - mb-8 no mobile */}
            <div className="bg-red-50 p-5 md:p-6 border-l-4 border-red-800 italic text-sm md:text-base mt-8 text-red-900 shadow-sm">
              <strong>⚠️ Alerta:</strong> A adoção inadequada desse instrumento pode gerar nulidades, questionamentos fiscais ou litígios familiares, motivo pelo qual sua aplicação deve ser precedida de análise jurídica individualizada.
            </div>

            {/* BLOCO DE ATENDIMENTO - Espaçamento enxuto mt-12 no mobile */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARD SOROCABA - PRINCIPAL */}
                <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-blue-800 pb-2 text-blue-200">Unidade Sorocaba</h3>
                    <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para orientação sobre Doação e Usufruto.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all">
                      <MessageCircle size={16} className="mr-2" /> Canais de Atendimento
                    </a>
                    <a href="tel:1531911432" className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all border border-white">
                      <Phone size={16} className="mr-2" /> (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* UNIDADE SÃO PAULO - APOIO */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between opacity-80">
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-gray-200 pb-2">Unidade São Paulo</h3>
                    <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed mb-6">Suporte estratégico e administrativo especializado.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center border-2 border-gray-300 text-gray-400 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px]">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </div>
                    <p className="text-[9px] text-gray-400 uppercase text-center tracking-tighter">Atendimento Administrativo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 text-center">
                <Link to="/planejamento-sucessorio" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                  ← Voltar para Planejamento Sucessório
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DoacaoStaging;