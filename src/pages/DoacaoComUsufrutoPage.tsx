import React from 'react';
import MainLayout from '../components/layout/MainLayout';
// Importe 'Image' do Next.js se você estiver usando Next.js para otimização de imagens.
// Caso contrário, você pode usar a tag <img> padrão.
// import Image from 'next/image'; 

// IMPORTAÇÃO DA SUA NOVA IMAGEM COM A EXTENSÃO .png
import doacaoUsufrutoBanner from '../assets/images/doação_usufruto.png'; 

const DoacaoComUsufrutoPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        {/* Usando a tag <img> padrão com styling Tailwind.
            Se você estiver usando Next.js e o componente <Image>, adapte conforme a documentação deles.
        */}
        <img 
          src={doacaoUsufrutoBanner.src || doacaoUsufrutoBanner} // Adaptação para Next.js Image (.src) e img padrão
          alt="Profissionais e balança da justiça, representando doação e usufruto"
          className="w-full h-full object-cover object-center" // Garante que a imagem cubra a área e seja responsiva
        />
      </div>

      {/* Título Principal da Página (Abaixo do banner da imagem) */}
      <div className="bg-blue-900 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Doação com Usufruto</h1>
          <p className="text-xl md:text-2xl font-light">Transferência de bens em vida com segurança jurídica e controle patrimonial</p>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            O que é Doação com Usufruto?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A doação com usufruto é um instrumento de planejamento sucessório que permite a <strong className="text-gray-800">transferência antecipada de bens</strong> (imóveis, investimentos, direitos) a herdeiros ou terceiros, <strong className="text-gray-800">sem perder o usufruto</strong> (direito de uso e rendimentos) durante a vida.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">É uma estratégia eficaz para:</p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✔</span> Evitar processos demorados de inventário
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✔</span> Garantir que sua vontade seja cumprida
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✔</span> Reduzir conflitos familiares
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✔</span> Otimizar carga tributária
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Como Funciona a Doação com Usufruto?
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Para o Doador</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Para o Donatário (beneficiário)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Mantém o direito de usar o bem (morar, alugar, etc.)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Torna-se proprietário (nua propriedade), mas só terá posse plena após o falecimento do doador</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Continua recebendo rendimentos (lucros, aluguéis)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Não pode vender, hipotecar ou onerar o bem sem autorização</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Pode estabelecer regras e condições</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Respeita as cláusulas protetivas definidas no contrato</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Principais Vantagens
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span>
                <strong className="text-gray-800">Controle patrimonial:</strong> Você decide como e quando os bens serão transferidos.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span>
                <strong className="text-gray-800">Proteção jurídica:</strong> Cláusulas evitam dissipação do patrimônio por dívidas ou divórcios do beneficiário.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span>
                <strong className="text-gray-800">Economia tributária:</strong> O ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), que varia de 4% a 8% dependendo do estado, costuma ser menor que as taxas de inventário.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span>
                <strong className="text-gray-800">Agilidade:</strong> Bens saem do processo de inventário, acelerando a partilha e o acesso dos herdeiros ao patrimônio.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Cuidados Essenciais e Riscos que Exigem Atenção
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◼</span>
              <span>
                <strong className="text-gray-800">Respeito à legítima:</strong> Pelo menos 50% do patrimônio total deve ser reservado aos herdeiros necessários (cônjuge, filhos, pais).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◼</span>
              <span>
                <strong className="text-gray-800">Irrevogabilidade:</strong> A doação é, em regra, irrevogável, só podendo ser cancelada em casos excepcionais previstos em lei (ex.: ingratidão do beneficiário).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◼</span>
              <span>
                <strong className="text-gray-800">Formalização:</strong> Exige <strong className="text-gray-800">escritura pública</strong> para imóveis e posterior registro em cartório.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◼</span>
              <span>
                <strong className="text-gray-800">Risco fiscal:</strong> Em alguns casos, a Receita Federal pode questionar os valores declarados dos bens.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              <span>
                <strong className="text-gray-800">Fraude contra credores:</strong> Doações podem ser anuladas judicialmente se comprovada a intenção de lesar credores durante crises financeiras.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              <span>
                <strong className="text-gray-800">Conflitos familiares:</strong> A doação, se não bem planejada e comunicada, pode gerar descontentamento e ações judiciais por parte de herdeiros.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              <span>
                <strong className="text-gray-800">Mudança de cenário:</strong> O beneficiário pode perder interesse no bem ou o cenário econômico/familiar pode mudar. Considere incluir uma <strong className="text-gray-800">cláusula de reversão</strong> para permitir o retorno do bem ao seu patrimônio em certas condições.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Cláusulas Protetivas Recomendadas
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Cláusula</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Objetivo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Inalienabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Impede a venda ou doação do bem pelo beneficiário, garantindo sua permanência no patrimônio familiar.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Impenhorabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Protege o bem contra penhoras por dívidas ou ações judiciais do beneficiário, preservando o patrimônio familiar.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Incomunicabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Exclui o bem de partilhas em divórcios ou dissolução de união estável do beneficiário.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Reversão</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Permite que o doador retome o bem se o beneficiário falecer antes dele.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-inner mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Modelo de Cláusula para Escritura (Trecho adaptável):</h3>
            <p className="text-gray-700 leading-relaxed italic">
              "Fica estabelecido usufruto vitalício ao doador, que manterá posse direta do imóvel, podendo perceber todos os frutos e rendimentos. O donatário fica proibido de alienar, gravar ou onerar o bem até o falecimento do doador, sob pena de nulidade. Em caso de descumprimento, o bem retornará integralmente ao patrimônio do doador."
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Quando Vale a Pena Usar Essa Estratégia?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◉</span>
              <span>Para <strong className="text-gray-800">imóveis familiares</strong> (evitar disputas entre herdeiros e garantir o uso por gerações).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◉</span>
              <span>Em <strong className="text-gray-800">casamentos com filhos de relacionamentos anteriores</strong> (proteger direitos específicos de cada linhagem).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◉</span>
              <span>Para <strong className="text-gray-800">pessoas idosas</strong> que querem organizar o patrimônio em vida, reduzindo preocupações futuras.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">◉</span>
              <span>Em situações com <strong className="text-gray-800">risco de ações judiciais</strong> (dívidas, dependentes com vícios), para proteger bens importantes da família.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Casos Reais em que a Doação com Usufruto é Recomendada:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">▶ Caso 1: Proteção contra divórcio</h4>
              <p className="text-gray-700 mb-2"><strong>Situação:</strong> Pai quer transferir imóvel à filha, mas ela está em união instável.</p>
              <p className="text-gray-700"><strong>Solução:</strong> Doação com cláusula de incomunicabilidade + inalienabilidade por tempo determinado.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">▶ Caso 2: Idoso com herdeiros problemáticos</h4>
              <p className="text-gray-700 mb-2"><strong>Situação:</strong> Viúvo com filho viciado em jogos.</p>
              <p className="text-gray-700"><strong>Solução:</strong> Doação progressiva (ex: 25% a cada 5 anos) + impenhorabilidade.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">▶ Caso 3: Empresário endividado</h4>
              <p className="text-gray-700 mb-2"><strong>Situação:</strong> Risco de falência; quer proteger imóvel da família.</p>
              <p className="text-gray-700"><strong>Solução:</strong> Doação ao cônjuge com usufruto reversível (se o negócio quebrar, o imóvel volta para o doador).</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Aprofundando: Perguntas Frequentes sobre Doação com Usufruto
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Posso doar meu único imóvel e continuar morando nele?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sim. O usufruto vitalício garante seu direito de moradia até o falecimento. Porém, atenção:
              </p>
              <ul className="space-y-2 text-gray-700 text-lg mt-2 list-disc pl-5">
                <li>Se o imóvel for <strong className="text-gray-800">bem de família</strong> (único da família), ele já possui proteção contra credores.</li>
                <li>Herdeiros necessários podem contestar se a doação comprometer seu direito à legítima.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Quanto custa fazer uma doação com usufruto?</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">Os custos são compostos principalmente por:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-blue-100 border-b border-gray-200">
                      <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Custo</th>
                      <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Valor Aproximado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">ITCMD (imposto)</strong></td>
                      <td className="py-4 px-6 text-gray-700 text-base">4% a 8% do valor venal do bem (varia por estado)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Escritura Pública</strong></td>
                      <td className="py-4 px-6 text-gray-700 text-base">R$ 1.000 a R$ 5.000 (depende do tabelião e valor do bem)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Registro no Cartório</strong></td>
                      <td className="py-4 px-6 text-gray-700 text-base">R$ 200 a R$ 1.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                <strong className="text-gray-800">Exemplo:</strong> Para um imóvel de R$ 500.000 em São Paulo (ITCMD 4%), os custos totais ficariam em aproximadamente R$ 23.000.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Posso incluir condições na doação?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sim. É comum estabelecer condições como:
              </p>
              <ul className="space-y-2 text-gray-700 text-lg mt-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> "O imóvel não poderá ser vendido até que meu neto complete 25 anos."
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> "Meu filho só poderá alugar o apartamento com meu consentimento."
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span> "Se meu beneficiário falecer antes de mim, o bem retorna ao meu patrimônio."
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                <strong className="text-red-600">Cuidado:</strong> Condições abusivas ou impossíveis de cumprir podem ser anuladas judicialmente.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Comparativo: Doação com Usufruto vs. Outras Estratégias de Planejamento Sucessório
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Estratégia</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Vantagens</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Desvantagens</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Doação com Usufruto</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Controle em vida; evita inventário; agilidade</td>
                  <td className="py-4 px-6 text-gray-700 text-base">ITCMD devido; irrevogável (salvo exceções)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Testamento</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Pode ser alterado; só vale após morte</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Só vale após a morte; os bens ainda entram em processo de inventário</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Inventário Extrajudicial</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Processo mais rápido (se houver consenso e maiores de idade)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Custo médio de 3% a 5% do patrimônio; exige total acordo entre herdeiros</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Holdings Familiares</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Benefícios fiscais e de gestão patrimonial a longo prazo</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Maior complexidade e custo inicial elevado; exige estrutura mais robusta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Passo a Passo para Fazer uma Doação com Usufruto
          </h2>
          <ul className="space-y-6 text-gray-700 text-lg list-decimal pl-6">
            <li>
              <strong className="text-gray-800">Diagnóstico Patrimonial:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Liste todos os seus bens (imóveis, investimentos, veículos, etc.).</li>
                <li>Calcule a <strong className="text-gray-800">parte disponível</strong> (máximo de 50% se houver herdeiros necessários) para garantir a legalidade da doação.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Escolha do Beneficiário:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Pode ser um filho, cônjuge, outro parente ou até terceiros (como um cuidador).</li>
                <li><strong className="text-gray-800">Dica:</strong> Em famílias reconstituídas, especifique claramente os direitos para evitar conflitos futuros.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Redação do Instrumento Jurídico:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li><strong className="text-gray-800">Exigências legais:</strong></li>
                <ul className="list-circle pl-5 mt-1">
                  <li>Escritura pública para imóveis.</li>
                  <li>Cláusulas de usufruto e proteção expressas e detalhadas.</li>
                  <li>Assinatura de 2 testemunhas (em alguns casos).</li>
                </ul>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Pagamento de Tributos:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>O ITCMD deve ser quitado antes do registro do imóvel.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Registro em Cartório:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li><strong className="text-gray-800">Imóveis:</strong> Registro de Imóveis competente.</li>
                <li><strong className="text-gray-800">Veículos:</strong> Averbação do usufruto no Detran.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            A doação com usufruto é uma ferramenta poderosa para <strong className="text-gray-800">tranquilidade sucessória</strong> e controle patrimonial em vida. No entanto, sua aplicação exige <strong className="text-gray-800">assessoria jurídica especializada</strong> para:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> Calcular a parte disponível do patrimônio de forma precisa.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> Redigir o contrato com cláusulas personalizadas e seguras.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> Antecipar riscos fiscais, jurídicos e familiares, garantindo que a sua vontade seja plenamente respeitada.
            </li>
          </ul>
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

        <section className="mt-10 py-8 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Próximos Passos Recomendados</h3>
          <ul className="space-y-4 text-gray-700 text-lg max-w-2xl mx-auto list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Agende uma avaliação patrimonial conosco:</strong> Entenda como a doação com usufruto se encaixa na sua situação específica.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Compare os custos de ITCMD no seu estado:</strong> Obtenha uma estimativa precisa dos impostos envolvidos.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Reúna documentos:</strong> Matrícula atualizada do imóvel, CPF e RG de doador e beneficiário, Certidão de casamento.</span>
            </li>
          </ul>
        </section>
      </div>
    </MainLayout>
  );
};

export default DoacaoComUsufrutoPage;