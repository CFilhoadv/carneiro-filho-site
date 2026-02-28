import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, AlertTriangle, CheckCircle2, Scale, Users, ClipboardCheck } from 'lucide-react';

const InventarioPage: React.FC = () => {
  const telSorocaba = "tel:+551531911432";
  const telSP = "tel:+551142106194";

  return (
    <MainLayout>
      {/* 1. CABEÇALHO PADRONIZADO */}
      <section className="bg-white pt-8 pb-8 md:pt-12 md:pb-12 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest leading-tight">
            Inventário: Regularização e Sucessão
          </h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-4"></div>
          <p className="text-blue-900 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-4 text-center">
            (Solução para quando não houve planejamento sucessório prévio)
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            <p>
              O inventário é o procedimento jurídico obrigatório para formalizar a transferência do patrimônio de uma pessoa falecida para seus herdeiros.
              <strong> Enquanto o planejamento sucessório evita essa etapa, o inventário é essencial para regularizar situações já existentes.</strong> Na prática, ele costuma ser a consequência da <strong>ausência de um planejamento em vida</strong>, o que frequentemente expõe os herdeiros a custos elevados e à morosidade do sistema judiciário.
            </p>
            <p>
              Nossa atuação foca em reduzir os impactos dessa etapa, buscando sempre a via do <strong>inventário extrajudicial (em cartório)</strong>, que é consideravelmente mais ágil, avaliando alternativas legais para a celeridade do processo.
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
              Na ausência de qualquer um desses requisitos, a lei impõe o <strong>inventário judicial</strong>. Este caminho exige uma condução estratégica apurada para mitigar conflitos e proteger o valor dos bens. Em ambas as situações, nossa prioridade é a eficiência técnica, <strong>buscando reduzir riscos e perdas, quando aplicável, dentro das alternativas legais.</strong>
            </p>
            
            {/* ALERTA DE PRAZO */}
            <div className="bg-amber-50 p-5 md:p-6 border-l-4 border-amber-600 italic text-sm md:text-base mt-8 text-amber-900 shadow-sm flex items-start">
              <AlertTriangle className="mr-4 shrink-0 mt-1 text-amber-600" size={24} />
              <p className="text-justify md:text-left">
                <strong>Nota Importante:</strong> O prazo legal para a abertura do inventário é de 60 dias após o falecimento. A perda deste prazo acarreta multas sobre o imposto de transmissão (ITCMD), tornando a sucessão ainda mais onerosa.
              </p>
            </div>

            {/* 3. Seção Como funciona */}
            <div className="mt-12 md:mt-16 bg-gray-50 p-8 border border-gray-100 rounded-sm text-left">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">Como funciona</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-sm text-gray-700">Você inicia o diagnóstico online para avaliar o caso.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                  <p className="text-sm text-gray-700">Fazemos uma triagem e uma análise do cenário familiar/patrimonial com base nos dados enviados.</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                  <p className="text-sm text-gray-700">Indicamos o caminho jurídico adequado e os próximos passos, incluindo agendamento de reunião.</p>
                </div>
              </div>
            </div>

            {/* 4. BLOCO DE ATENDIMENTO PADRONIZADO */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARD SOROCABA E REGIÃO */}
                <div className="bg-blue-900 p-6 md:p-8 rounded-sm text-white shadow-lg flex flex-col justify-between border-t-4 border-blue-400">
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-1 border-blue-800 pb-1 text-blue-200">Sorocaba e região • Diagnóstico Digital</h3>
                    <p className="text-blue-100 text-[10px] md:text-xs leading-relaxed mb-6 italic opacity-80">Preencha o diagnóstico para iniciarmos sua análise individualizada.</p>
                  </div>
                  <div className="space-y-3">
                    <Link to="/diagnostico-planejamento-sucessorio" className="flex flex-col items-center justify-center bg-green-600 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-green-700 transition-all shadow-md group">
                      <div className="flex items-center">
                        <ClipboardCheck size={16} className="mr-2" /> Iniciar diagnóstico do caso
                      </div>
                    </Link>
                    <p className="text-[9px] text-blue-200 text-center leading-tight">
                      Para agilizar, informe sua cidade e descreva brevemente seu objetivo. Se houver, envie foto do documento/intimação.
                    </p>
                    <a href={telSorocaba} className="flex items-center justify-center bg-blue-800 text-white py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-md border border-blue-400">
                      <Phone size={16} className="mr-2" /> (15) 3191-1432
                    </a>
                  </div>
                </div>

                {/* UNIDADE SÃO PAULO */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 flex flex-col justify-between shadow-sm text-left">
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 border-b border-gray-200 pb-2 text-left">São Paulo • Administrativo</h3>
                    <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed mb-6 italic">Suporte estratégico para casos complexos e gestão documental.</p>
                  </div>
                  <div className="space-y-3">
                    <a href={telSP} className="flex items-center justify-center bg-white text-blue-900 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] border-2 border-blue-900 hover:bg-gray-100 transition-all shadow-sm">
                      <Phone size={16} className="mr-2" /> (11) 4210-6194
                    </a>
                  </div>
                </div>
              </div>

              {/* 5. NAVEGAÇÃO INTERNA */}
              <div className="mt-12 flex flex-col items-center space-y-4 text-center">
                <Link to="/planejamento-sucessorio" className="text-blue-900 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline flex items-center">
                  ← Voltar para Planejamento Sucessório
                </Link>
                <Link to="/servicos" className="text-gray-400 hover:text-gray-600 font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all">
                  Ver todos os serviços
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