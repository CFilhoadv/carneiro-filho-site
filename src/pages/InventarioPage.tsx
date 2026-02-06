import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, MessageCircle, AlertTriangle, CheckCircle2, Scale, Users } from 'lucide-react';

const InventarioPage: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";
  const telSorocaba = "tel:1531911432";
  const telSP = "tel:1142106194";

  return (
    <MainLayout>
      {/* 1. CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Inventário: Regularização e Sucessão
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
          <p className="text-blue-900 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-4">
            (Solução para quando não houve planejamento sucessório prévio)
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p>
              O inventário é o procedimento jurídico obrigatório para formalizar a transferência do patrimônio de uma pessoa falecida para seus herdeiros. Na prática, ele costuma ser a consequência da <strong>ausência de um planejamento em vida</strong>, o que frequentemente expõe os herdeiros a custos elevados e à morosidade do sistema judiciário.
            </p>
            <p>
              Nossa atuação foca em reduzir os impactos dessa etapa, buscando sempre a via do <strong>inventário extrajudicial (em cartório)</strong>, que é consideravelmente mais ágil. No entanto, é fundamental esclarecer que essa modalidade só é permitida por lei quando reunidas três condições específicas:
            </p>

            {/* LISTA DE CONDIÇÕES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="bg-gray-50 p-5 border-t-2 border-blue-900 rounded-sm">
                <CheckCircle2 className="text-blue-900 mb-3" size={20} />
                <h4 className="font-bold text-blue-900 uppercase text-xs mb-2 text-left">Consenso entre Herdeiros</h4>
                <p className="text-xs text-gray-600 text-left">Todos devem estar em total acordo sobre a divisão dos bens.</p>
              </div>
              <div className="bg-gray-50 p-5 border-t-2 border-blue-900 rounded-sm">
                <Users className="text-blue-900 mb-3" size={20} />
                <h4 className="font-bold text-blue-900 uppercase text-xs mb-2 text-left">Ausência de Incapazes</h4>
                <p className="text-xs text-gray-600 text-left">Todos os envolvidos devem ser maiores e plenamente capazes.</p>
              </div>
              <div className="bg-gray-50 p-5 border-t-2 border-blue-900 rounded-sm">
                <Scale className="text-blue-900 mb-3" size={20} />
                <h4 className="font-bold text-blue-900 uppercase text-xs mb-2 text-left">Inexistência de Testamento</h4>
                <p className="text-xs text-gray-600 text-left">O falecido não pode ter deixado testamento (salvo exceções legais).</p>
              </div>
            </div>

            <p>
              Na ausência de qualquer um desses requisitos, a lei impõe o <strong>inventário judicial</strong>. Este caminho exige uma condução estratégica ainda mais apurada para mitigar conflitos e proteger o valor dos bens. Em ambas as situações, nossa prioridade é a eficiência no cálculo do ITCMD e a regularização ágil da documentação, garantindo que o patrimônio chegue aos herdeiros com a menor perda financeira possível.
            </p>
            
            {/* ALERTA DE PRAZO */}
            <div className="bg-amber-50 p-5 md:p-6 border-l-4 border-amber-600 italic text-sm md:text-base mt-8 text-amber-900 shadow-sm flex items-start">
              <AlertTriangle className="mr-4 shrink-0 mt-1 text-amber-600" size={24} />
              <p>
                <strong>Nota Importante:</strong> O prazo legal para a abertura do inventário é de 60 dias após o falecimento. A perda deste prazo acarreta multas sobre o imposto de transmissão (ITCMD), tornando a sucessão ainda mais onerosa.
              </p>
            </div>

            {/* 3. BLOCO DE ATENDIMENTO PADRONIZADO */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
                
                {/* Sorocaba */}
                <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-blue-800 pb-2 text-blue-200">Sorocaba • Presencial</h3>
                    <p className="text-blue-100 text-xs leading-relaxed mb-6 italic">Canal prioritário para suporte especializado em Inventários e Arrolamentos.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md">
                      <MessageCircle size={16} className="mr-2" /> Iniciar Atendimento Digital
                    </a>
                    <a href={telSorocaba} className="flex items-center justify-center bg-blue-800 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-md border border-blue-400">
                      <Phone size={16} className="mr-2" /> (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* São Paulo */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-gray-200 pb-2">São Paulo • Administrativo</h3>
                    <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed mb-6 italic">Suporte estratégico para casos complexos e gestão documental.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={telSP} className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] border-2 border-blue-900 hover:bg-gray-100 transition-all shadow-sm">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </a>
                    <p className="text-[9px] text-gray-400 uppercase text-center tracking-widest font-bold">Atendimento Administrativo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 text-center">
                <Link to="/servicos" className="text-gray-500 hover:text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b border-transparent hover:border-blue-900 pb-1 transition-all">
                  ← Voltar para Todos os Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InventarioPage;