import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            Serviços e Instrumentos Jurídicos
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            
            {/* DOAÇÃO COM RESERVA DE USUFRUTO */}
            <div className="border-l-4 border-blue-900 pl-6 md:pl-10">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-1">
                Doação com Reserva de Usufruto
              </h2>
              <p className="text-blue-900 font-semibold text-sm mb-6 uppercase tracking-widest">
                (Instrumento de Planejamento Sucessório)
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
                <p>
                  A doação com reserva de usufruto consiste na transferência da propriedade de um bem aos herdeiros, mantendo o doador o direito de uso, administração e percepção dos rendimentos (<strong>usufruto:</strong> direito de utilizar o bem e receber seus frutos, como aluguéis, mesmo sem ser o proprietário formal).
                </p>
                <p>
                  Trata-se de instrumento amplamente utilizado no planejamento sucessório para organizar a transmissão patrimonial ainda em vida, reduzindo conflitos futuros e evitando a concentração de bens em inventário judicial.
                </p>
                <p>
                  Esse modelo é indicado para famílias que desejam antecipar a sucessão, mantendo o controle patrimonial enquanto vivos, e exige análise cuidadosa quanto à <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio que a lei reserva obrigatoriamente aos herdeiros), bem como aos impactos tributários e registrais.
                </p>
                <p className="bg-gray-50 p-4 border border-gray-100 italic text-base">
                  <strong>Aviso:</strong> A utilização inadequada da doação pode gerar nulidades, litígios familiares ou questionamentos fiscais, razão pela qual sua implementação deve ser precedida de avaliação jurídica individualizada.
                </p>
              </div>
            </div>

            {/* HOLDING FAMILIAR */}
            <div className="border-l-4 border-blue-900 pl-6 md:pl-10">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-1">
                Holding Familiar
              </h2>
              <p className="text-blue-900 font-semibold text-sm mb-6 uppercase tracking-widest">
                (Instrumento de Planejamento Patrimonial e Sucessório)
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
                <p>
                  A holding familiar é uma pessoa jurídica constituída com a finalidade de centralizar, administrar e organizar o patrimônio de uma família, como imóveis, participações societárias e investimentos.
                </p>
                <p>
                  Por meio desse modelo, os bens deixam de pertencer diretamente às pessoas físicas e passam a integrar a estrutura da empresa, permitindo separação entre patrimônio pessoal e patrimônio organizado (<strong>blindagem patrimonial:</strong> proteção jurídica contra riscos externos, dentro dos limites legais).
                </p>
                <p>
                  A holding é indicada para famílias com patrimônio relevante ou atividade empresarial, pois possibilita gestão e governança familiar, planejamento sucessório estruturado, redução de conflitos familiares e organização tributária lícita.
                </p>
                <p className="bg-gray-50 p-4 border border-gray-100 italic text-base">
                  <strong>Nota Técnica:</strong> Sua constituição exige análise integrada jurídica, tributária e contábil, considerando riscos, custos de manutenção e compatibilidade com a realidade familiar.
                </p>
              </div>
            </div>

            {/* ABIP */}
            <div className="border-l-4 border-blue-900 pl-6 md:pl-10">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-1">
                ABIP – Administração de Bens Imóveis Próprios
              </h2>
              <p className="text-blue-900 font-semibold text-sm mb-6 uppercase tracking-widest">
                (Estrutura Patrimonial Imobiliária)
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
                <p>
                  A ABIP é um modelo societário voltado especificamente à administração e exploração de imóveis próprios, como locações residenciais, comerciais ou rurais.
                </p>
                <p>
                  Seu objetivo é organizar a atividade imobiliária, permitindo separação entre patrimônio pessoal e gestão de imóveis, além de maior controle financeiro e administrativo (<strong>controle de receitas, despesas e rendimentos</strong>).
                </p>
                <p>
                  É indicada para pessoas ou famílias que possuem carteira imobiliária relevante e desejam profissionalizar a gestão dos bens, observando os limites legais, tributários e contábeis aplicáveis.
                </p>
              </div>
            </div>

            {/* TESTAMENTOS */}
            <div className="border-l-4 border-blue-900 pl-6 md:pl-10">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-1">
                Testamentos
              </h2>
              <p className="text-blue-900 font-semibold text-sm mb-6 uppercase tracking-widest">
                (Instrumento de Planejamento Sucessório)
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
                <p>
                  O testamento é o ato jurídico pelo qual uma pessoa dispõe sobre a destinação de seus bens para depois de sua morte, respeitados os limites impostos pela lei.
                </p>
                <p>
                  É indicado para organizar a sucessão em situações como famílias recompostas, proteção de herdeiros específicos ou prevenção de conflitos familiares.
                </p>
                <p>
                  Sua elaboração deve observar as formalidades legais, a <strong>legítima dos herdeiros necessários</strong> (parte do patrimônio reservada por lei) e os efeitos patrimoniais e familiares futuros.
                </p>
                <p className="bg-gray-50 p-4 border border-gray-100 italic text-base">
                  <strong>Aviso:</strong> Testamentos mal elaborados podem ser anulados ou gerar litígios, motivo pelo qual exigem orientação jurídica técnica e individualizada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;