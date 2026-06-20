import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, AlertTriangle, FileText, Scale } from 'lucide-react';

const ParceriaContabil: React.FC = () => {
  const calendlyLink = "https://calendly.com/contato-carneirofilho/outros_servicos_juridicos";

  return (
    <MainLayout>
      <section className="bg-[#0b132b] pt-12 pb-12 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">
            RETAGUARDA JURÍDICA ESTRATÉGICA
          </p>
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
            Cooperação Técnica Especializada
          </h1>
          <div className="h-1 w-16 bg-blue-400 mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-12 bg-white text-justify text-gray-700 max-w-4xl mx-auto px-4 space-y-6">
        <p>
          As demandas que envolvem reestruturações societárias e a engenharia tributária exigem uma análise minuciosa dos riscos jurídicos para assegurar a blindagem patrimonial e a segurança dos atos praticados.
        </p>
        <p>
          Nossa atuação oferece o suporte necessário em pareceres de sustentação e validação de viabilidade, garantindo total conformidade com a legislação vigente e proteção técnica para o assessor contábil.
        </p>
        <div className="text-center pt-6">
          <a 
            href={calendlyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-md"
          >
            <Calendar size={16} className="mr-2" /> Agendar Alinhamento Técnico
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParceriaContabil;