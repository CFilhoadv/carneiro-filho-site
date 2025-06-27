import React from 'react';
import MainLayout from '../components/layout/MainLayout';

import testamentoBanner from '../assets/images/testamento_banner.jpeg'; 

const TestamentoPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={testamentoBanner} // CORRIGIDO: Removido .src ||
          alt="Pessoas assinando documentos importantes, simbolizando a elaboração de um testamento"
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* Título Principal da Página (Abaixo do banner da imagem) */}
      <div className="bg-blue-900 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Testamento: Guia Completo</h1>
          <p className="text-xl md:text-2xl font-light">Para Expressar sua Vontade com Segurança Jurídica</p>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            O que é um Testamento?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            O testamento é um <strong className="text-gray-800">documento legal</strong> que permite a uma pessoa (testador) definir como seus bens serão distribuídos após seu falecimento, respeitando os limites da lei. Ele é <strong className="text-gray-800">flexível</strong> (pode ser alterado) e <strong className="text-gray-800">personalizado</strong>, mas não substitui um planejamento sucessório completo.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Características Principais do Testamento
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
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Validade Legal</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Exige formalidades específicas (varia por tipo).</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Parte Disponível</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Até <strong className="text-gray-800">50% do patrimônio</strong> (a outra metade é a legítima, reservada a herdeiros necessários).</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Revogabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Pode ser alterado ou cancelado a qualquer momento.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Efeitos</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Só produz efeitos após o falecimento do testador.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Tipos de Testamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Testamento Público</h3>
              <ul className="space-y-2 text-gray-700 text-lg list-disc pl-5 mb-4">
                <li>Feito em cartório com tabelião e 2 testemunhas.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Vantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Maior segurança jurídica, registro público (sigiloso até a morte).
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-2"><strong className="text-gray-800">Desvantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚠</span> Custo cartorário.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Testamento Cerrado</h3>
              <ul className="space-y-2 text-gray-700 text-lg list-disc pl-5 mb-4">
                <li>Escrito pelo testador, lacrado em cartório com 2 testemunhas.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Vantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Conteúdo secreto (só revelado após a morte).
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-2"><strong className="text-gray-800">Desvantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚠</span> Risco de extravio ou nulidade se o envelope for violado.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Testamento Particular</h3>
              <ul className="space-y-2 text-gray-700 text-lg list-disc pl-5 mb-4">
                <li>Feito pelo próprio testador + 3 testemunhas (não pode ser digitado por terceiros).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Vantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Sem custos cartoriais.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-2"><strong className="text-gray-800">Desvantagens:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚠</span> Pode ser perdido ou contestado.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Testamentos Especiais</h3>
              <ul className="space-y-2 text-gray-700 text-lg list-disc pl-5 mb-4">
                <li><strong className="text-gray-800">Marítimo/Aeronáutico:</strong> Para quem está em viagem.</li>
                <li><strong className="text-gray-800">Militar:</strong> Para combatentes em guerra.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-2"><strong className="text-gray-800">Vantagem:</strong></p>
              <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✔</span> Validade em situações excepcionais.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Vantagens do Testamento
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span><strong className="text-gray-800">Expressa sua vontade</strong> (inclusive para não herdeiros, como amigos ou instituições).</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span><strong className="text-gray-800">Nomeia tutores</strong> para filhos menores.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span><strong className="text-gray-800">Reconhece filhos</strong> não registrados.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span><strong className="text-gray-800">Estabelece condições</strong> para herdeiros (ex.: "Meu filho só recebe se concluir a faculdade").</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Limitações e Riscos do Testamento
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Não evita o inventário</strong> (ainda é necessário para transferir bens).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Pode ser contestado</strong> por herdeiros (ex.: alegação de "incapacidade mental" do testador).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Não reduz impostos</strong> (ITCMD incide normalmente).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">❌</span>
              <span><strong className="text-gray-800">Demora judicial:</strong> Se houver conflitos, a partilha pode levar anos (ex.: casos de Chico Anysio e Betty Lago).</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Casos Reais de Testamentos Problemáticos</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Famoso</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Patrimônio</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Problema</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Chico Anysio</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Multimilionário</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Filho deixado de fora contestou e anulou o testamento.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Gugu Liberato</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 1 bilhão</td>
                  <td className="py-4 px-6 text-gray-700 text-base">União estável não reconhecida no testamento gerou disputa.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Betty Lago</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 40 milhões</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Filha alegou que a mãe estava incapaz ao assinar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Alternativas para Complementar o Testamento
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">1. Doação com Usufruto</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Transfere bens em vida, mas mantém o uso vitalício.</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Vantagem:</strong> Reduz burocracia do inventário e potenciais conflitos.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Holding Familiar</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Centraliza bens em um CNPJ, facilitando a sucessão.</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span><strong className="text-gray-800">Vantagem:</strong> Economia tributária e proteção patrimonial.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comparativo: Testamento vs. Holding Familiar</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Critério</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Testamento</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Holding Familiar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Inventário</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Necessário</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Não elimina, mas simplifica e otimiza</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Controle</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Limitado à legítima</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Total (via pacto societário)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Custo</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">ITCMD + taxas judiciais</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Custos fixos de CNPJ (com benefícios a longo prazo)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            O testamento é <strong className="text-gray-800">útil para expressar vontades específicas</strong>, mas <strong className="text-gray-800">não é suficiente</strong> para um planejamento sucessório eficaz. Combine-o com outras estratégias para uma solução completa, como:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✔</span> <strong className="text-gray-800">Doações em vida</strong> (para evitar o inventário em parte do patrimônio).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✔</span> <strong className="text-gray-800">Holding familiar</strong> (para patrimônios complexos que buscam otimização e proteção).
            </li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8">Ação Recomendada: Sua Orientação Especializada</h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Garantir que sua última vontade seja plenamente respeitada e que seu legado seja transferido sem imprevistos exige mais do que um simples testamento. A complexidade das leis de sucessão demanda uma assessoria jurídica especializada e um planejamento estratégico.
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

export default TestamentoPage;