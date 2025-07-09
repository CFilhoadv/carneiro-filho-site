import React from 'react';
import MainLayout from '../components/layout/MainLayout';

import inventarioBanner from '../assets/images/inventario_banner.webp'; 

const InventarioPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={inventarioBanner} // CORRIGIDO: Removido .src ||
          alt="Pessoas discutindo documentos, simbolizando o processo de inventário"
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* Título Principal da Página (Abaixo do banner da imagem) */}
      <div className="bg-blue-900 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Inventário Post Mortem</h1>
          <p className="text-xl md:text-2xl font-light">Guia Completo sobre Processo, Prazos e Alternativas</p>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            O que é o Inventário?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            O inventário é o <strong className="text-gray-800">processo legal obrigatório</strong> após o falecimento de uma pessoa para <strong className="text-gray-800">transferir bens aos herdeiros</strong>. Ele não é um planejamento sucessório, mas sim a consequência da falta dele.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Características Principais do Inventário
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Aspecto</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Prazo Legal</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">2 meses após o óbito (Art. 611 do CPC). Multa de até 20% do valor dos bens se atrasado.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Tipos</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Judicial (com discordância/herdeiros incapazes) ou Extrajudicial (consensual e em cartório).</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Documento Final</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Judicial: Formal de Partilha / Extrajudicial: Escritura Pública de Inventário.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Custos</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">ITCMD (4% a 8%), taxas judiciais, honorários advocatícios.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Tipos de Inventário
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Inventário Judicial</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Quando é obrigatório?</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Há herdeiros <strong className="text-gray-800">menores ou incapazes</strong>.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Existe <strong className="text-gray-800">discordância</strong> entre os herdeiros.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Há <strong className="text-gray-800">testamento</strong> conflitante.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-2"><strong className="text-gray-800">Desvantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚠</span> Pode levar <strong className="text-gray-800">anos</strong> para conclusão.
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚠</span> Custos elevados (taxas + ITCMD).
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Inventário Extrajudicial</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Requisitos:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Todos os herdeiros são <strong className="text-gray-800">maiores e capazes</strong>.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> <strong className="text-gray-800">Concordância unânime</strong> sobre a partilha.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Sem testamento.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-2"><strong className="text-gray-800">Vantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Concluído em <strong className="text-gray-800">30 a 60 dias</strong> (via cartório).
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Menos burocrático.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Desvantagens Gerais do Inventário
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Demora:</strong> Processos judiciais podem durar <strong className="text-gray-800">5+ anos</strong> (ex.: casos de famosos como Betty Lago e Marília Pêra).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Custos:</strong> ITCMD + taxas + honorários (em grandes fortunas, como a de Roberto Marinho, o ITCMD chegaria a <strong className="text-gray-800">R$ 2,4 bilhões</strong>).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Conflitos familiares:</strong> 70% dos litígios judiciais são por herança (fonte: CNJ).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Burocracia:</strong> Bancos exigem <strong className="text-gray-800">alvará judicial</strong> mesmo para inventários extrajudiciais.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Casos Reais de Inventários Problemáticos</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Famoso</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Patrimônio</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Problema Principal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Betty Lago</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 40 milhões</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Filha contestou testamento por "incapacidade" da mãe.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Marcelo Rezende</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Mansão em Alphaville</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Herança bloqueada até filha menor completar 18 anos.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Mussum</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Multimilionário</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Briga judicial entre filhos por acesso ao dinheiro.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Alternativas para Evitar o Inventário
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">1. Planejamento Sucessório em Vida</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Doação com usufruto:</strong> Transfere bens mantendo o uso vitalício.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Testamento:</strong> Define herdeiros específicos ou direciona a parte disponível do patrimônio.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Holding familiar:</strong> Centraliza bens em um CNPJ, com potencial de redução de ITCMD e mitigação de conflitos.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Comparativo: Inventário vs. Planejamento Sucessório</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Critério</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Inventário</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Planejamento Sucessório</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Tempo</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">1 a 5+ anos</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Imediato (em vida)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Custo</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Alto (ITCMD + taxas + honorários)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Potencialmente mais baixo (ex.: doação paga ITCMD apenas uma vez)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Controle</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Decisão judicial</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Vontade do titular (controle total)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            O inventário é <strong className="text-gray-800">inevitável sem planejamento</strong>, mas suas desvantagens (custo, tempo e conflitos) destacam a importância de estratégias proativas como:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✅</span> <strong className="text-gray-800">Doações em vida</strong> (com usufruto para segurança e controle).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✅</span> <strong className="text-gray-800">Holding familiar</strong> (para patrimônios acima de R$ 2 milhões, oferecendo proteção e eficiência tributária).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✅</span> <strong className="text-gray-800">Testamento</strong> (para direcionar bens específicos e expressar a última vontade).
            </li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8">Ação Recomendada: Sua Orientação Especializada</h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Para evitar as armadilhas do inventário e garantir que seu legado seja transferido de forma eficiente e tranquila, o planejamento sucessório é a chave. Conte com o suporte de profissionais especializados para analisar seu caso.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            Nossa equipe na <strong className="text-gray-800">Carneiro Filho Advocacia</strong>, especialista em Direito de Família e Sucessões, está pronta para ajudá-lo a estruturar sua vontade com segurança jurídica, evitando custos desnecessários e conflitos familiares.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            Se você precisa de um <strong className="text-gray-800">modelo de testamento</strong> ou de uma <strong className="text-gray-800">análise personalizada</strong> da sua situação, nossa equipe oferece soluções sob medida para garantir a tranquilidade do seu futuro e de sua família.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/contato-carneirofilho/planejamento_sucessorio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg"
            >
              Agende uma Consulta
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default InventarioPage;