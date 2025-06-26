import React from 'react';
import MainLayout from '../components/layout/MainLayout';
// Importe 'Image' do Next.js se você estiver usando Next.js para otimização de imagens.
// Caso contrário, você pode usar a tag <img> padrão.
// import Image from 'next/image';

// IMPORTAÇÃO DA SUA NOVA IMAGEM DE BANNER PARA HOLDING FAMILIAR
import holdingFamiliarBanner from '../assets/images/holding_familiar_banner.png.webp';

const HoldingFamiliarPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        {/* Usando a tag <img> padrão com styling Tailwind.
            Se você estiver usando Next.js e o componente <Image>, adapte conforme a documentação deles.
        */}
        <img
          src={holdingFamiliarBanner.src || holdingFamiliarBanner} // Adaptação para Next.js Image (.src) e img padrão
          alt="Mãos protegendo uma casa, simbolizando Holding Familiar e proteção patrimonial"
          className="w-full h-full object-cover object-center" // Garante que a imagem cubra a área e seja responsiva
        />
      </div>

      {/* Título Principal da Página (Abaixo do banner da imagem) */}
      <div className="bg-blue-900 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Holding Familiar</h1>
          <p className="text-xl md:text-2xl font-light">Estrutura empresarial para proteção, gestão e sucessão do patrimônio familiar</p>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            O que é uma Holding Familiar?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A <strong className="text-gray-800">Holding Familiar</strong> é uma empresa criada para <strong className="text-gray-800">centralizar, administrar e proteger</strong> o patrimônio de uma família. [cite_start]Ela funciona como uma "guarda-chuva" que detém bens imóveis (casas, terrenos, fazendas), participações societárias (empresas da família) e ativos financeiros (investimentos, direitos)[cite: 1]. [cite_start]Também é definida como uma empresa para administrar bens e interesses familiares, controlada pelos membros da família, e possui ações de outras empresas, imóveis, investimentos, etc.[cite: 3, 4].
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            <strong className="text-gray-800">Como funciona?</strong>
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-2 list-none pl-0">
            <li className="flex items-start">
              [cite_start]<span className="text-green-500 mr-2 text-xl">✔</span> Os bens saem do <strong className="text-gray-800">CPF dos familiares</strong> e passam para o <strong className="text-gray-800">CNPJ da holding</strong>[cite: 1].
            </li>
            <li className="flex items-start">
              [cite_start]<span className="text-green-500 mr-2 text-xl">✔</span> A família controla tudo por meio de <strong className="text-gray-800">quotas ou ações</strong>[cite: 1].
            </li>
            <li className="flex items-start">
              [cite_start]<span className="text-green-500 mr-2 text-xl">✔</span> A gestão é feita de forma <strong className="text-gray-800">profissional e estratégica</strong>[cite: 1].
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Por que Criar uma Holding Familiar?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">▶ Vantagens Tributárias</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            A holding pode proporcionar uma eficiência tributária significativa na constituição e sucessão do patrimônio, além de otimizar os rendimentos.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Benefício</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Como Funciona</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Isenção de ITBI</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Na transferência de imóveis para a holding (integralização como capital social) é isenta do ITBI[cite: 1, 5].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Redução de ITCMD</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">A herança ocorre via transferência de quotas, incidindo ITCMD sobre o valor das cotas, que pode ser menor do que sobre bens em espécie[cite: 1, 6, 27].</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Economia no IR e Dividendos</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Lucros distribuídos da holding são isentos de IR para pessoas físicas[cite: 1].</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            <strong className="text-gray-800">Comparativo de ITCMD: Valor Venal x Valor de Aquisição (IR)</strong>
            [cite_start]A base de cálculo do ITCMD nos sistemas de sucessão é o VALOR VENAL ou o de mercado, enquanto numa holding familiar é o valor declarado no imposto de renda, O VALOR DE AQUISIÇÃO, o que faz uma grande diferença tributária[cite: 29].
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">SISTEMA DE SUCESSÃO</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">PATRIMÔNIO</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">BASE DE CÁLCULOS</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">ITCMD/RJ</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">ITCMD RS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Doação c/reserva de usufruto</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 2.000.000,00</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 2.000.000,00</td>
                  <td className="py-4 px-6 text-gray-700 text-base">8%</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 160.000,00</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Holding Familiar</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 2.000.000,00</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 800.000,00</td>
                  <td className="py-4 px-6 text-gray-700 text-base">2%</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 16.000,00</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Economia</td>
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 144.000,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base"></td>
                  <td className="py-4 px-6 text-gray-700 text-base">90%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Proteção Patrimonial</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span>
                [cite_start]<strong className="text-gray-800">Blindagem contra:</strong> Dívidas pessoais (impenhorabilidade parcial) e ações judiciais (ex.: divórcios, disputas societárias)[cite: 1].
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Os bens da holding podem ser protegidos contra credores, reduzindo riscos em caso de falências ou litígios[cite: 20].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span><strong className="text-gray-800">Cláusulas de restrição</strong> (ex.: venda só com consentimento familiar)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Na constituição, os imóveis são gravados com cláusulas especiais que visam resguardá-los no seio da família, conhecidas como "cláusulas de blindagem" (inalienabilidade, incomunicabilidade, impenhorabilidade etc.)[cite: 10].</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cláusulas Especiais de Proteção e Administração:</h4>
          <div className="overflow-x-auto mb-8">
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
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Impede a venda ou transferência dos bens da holding sem autorização dos demais sócios[cite: 33].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Impenhorabilidade</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Protege os bens contra penhoras e execuções judiciais[cite: 34].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Irrenunciabilidade</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Proíbe a renúncia aos direitos sobre os bens da holding[cite: 35].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Sucessão</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Define a sucessão dos bens em caso de falecimento de um sócio[cite: 36].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Administração</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Estabelece regras sobre a gestão da holding e a tomada de decisões[cite: 37].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Exclusão</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Permite a exclusão de sócios em situações específicas[cite: 38].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Arrependimento</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Permite que um sócio se retrate de sua decisão de ingressar ou permanecer na holding dentro de um prazo estipulado, garantindo assim uma saída sem penalidades[cite: 39].</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Golden Share</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Confere a um ou mais sócios direitos especiais, como veto em decisões estratégicas, assegurando que certos interesses da família sejam protegidos, mesmo que a participação acionária seja minoritária[cite: 40].</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            [cite_start]Essas cláusulas adicionais fortalecem a proteção patrimonial e a governança da holding familiar, oferecendo maior segurança e controle sobre o patrimônio[cite: 41].
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Sucessão Planejada</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Evita <strong className="text-gray-800">inventário judicial</strong> (bens são transferidos via alteração societária)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Permite <strong className="text-gray-800">testamento privado</strong> (regras de herança nas quotas)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Protege <strong className="text-gray-800">herdeiros incapazes</strong> (gestão por administradores designados)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Facilita a transferência de bens e direitos entre gerações, evitando conflitos familiares[cite: 18].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Permite que a sucessão seja feita de forma planejada e estruturada[cite: 19].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Se todo o patrimônio relevante da família estiver integralizado na holding e as regras sucessórias das cotas forem bem estruturadas, isso reduz drasticamente a necessidade de um inventário tradicional[cite: 25].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>A sucessão das cotas sociais pode ser realizada diretamente via contrato e regularizada em cartório, dependendo das legislações locais e estaduais[cite: 26].</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Gestão Profissionalizada e Centralizada</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span><strong className="text-gray-800">Tomada de decisão centralizada</strong> (evita dispersão de patrimônio)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span><strong className="text-gray-800">Contratos personalizados</strong> (pacto societário, acordos de acionistas)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span><strong className="text-gray-800">Otimização de custos</strong> (contratação coletiva, assessoria especializada)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>Proporciona uma gestão centralizada dos ativos familiares, facilitando a tomada de decisões e a administração dos bens[cite: 22].</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>A holding pode investir em novos negócios ou melhorar a gestão dos ativos existentes, potencializando seu valor[cite: 23].</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Privacidade</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              [cite_start]<span>A estrutura de uma holding pode oferecer maior privacidade em relação aos bens da família, uma vez que as informações financeiras podem ser menos acessíveis ao público[cite: 24].</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Para Quem a Holding Familiar é Indicada?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              [cite_start]<span><strong className="text-gray-800">Famílias com patrimônio acima de R$ 2 milhões</strong> (imóveis, empresas, investimentos)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              [cite_start]<span><strong className="text-gray-800">Empresários</strong> que querem separar patrimônio pessoal e empresarial e garantir a continuidade dos negócios[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              [cite_start]<span><strong className="text-gray-800">Casais em segundas uniões</strong> com filhos de relacionamentos anteriores[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              [cite_start]<span><strong className="text-gray-800">Pais de herdeiros menores ou com necessidades especiais</strong>[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              [cite_start]<span><strong className="text-gray-800">Investidores</strong> com múltiplos imóveis ou ativos financeiros[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span>Pessoas com estrutura familiar complexa.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Tipos de Holding Familiar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Tipo</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Objetivo Principal</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Melhor Para</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Pura</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Só administra patrimônio (não opera negócios)[cite: 1].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Famílias com foco em imóveis e investimentos[cite: 1].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Mista</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Controla empresas ativas + patrimônio[cite: 1].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Empresários com negócios em operação[cite: 1].</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Patrimonial</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Foco em proteção de bens (blindagem)[cite: 1].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Quem busca segurança contra riscos jurídicos[cite: 1].</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Como Montar uma Holding Familiar?
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">Passo a Passo da Constituição:</h3>
          <ul className="space-y-6 text-gray-700 text-lg list-decimal pl-6">
            <li>
              <strong className="text-gray-800">Planejamento Inicial:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Identificar objetivos familiares e patrimoniais[cite: 11].</li>
                [cite_start]<li>Conhecer o regime de casamento, pois impacta no planejamento[cite: 11].</li>
                [cite_start]<li>Avaliação da estrutura familiar e suas complexidades[cite: 11].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Diagnóstico Patrimonial:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Levantar e organizar todos os bens da família (imóveis, investimentos, empresas etc.)[cite: 12].</li>
                [cite_start]<li>Estimar o valor do patrimônio[cite: 12].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Escolha da Estrutura Jurídica / Tipo Societário:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Decidir qual tipo de holding será utilizada (pura, mista, patrimonial etc.)[cite: 13].</li>
                [cite_start]<li>Escolher entre LTDA (mais flexível para famílias) ou SA (indicado para grandes patrimônios)[cite: 1].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Constituição da Holding / Elaboração de Contratos:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Elaborar o contrato ou estatuto social[cite: 13].</li>
                [cite_start]<li>Registrar a holding na Junta Comercial[cite: 14].</li>
                [cite_start]<li>Incluir pacto societário com cláusulas de preferência familiar (venda de quotas só para parentes) e gestão por conselho (evita conflitos entre herdeiros)[cite: 1].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Transferência de Bens / Integralização dos Bens:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Realizar a integralização do capital social com os bens da família[cite: 15].</li>
                [cite_start]<li>Formalizar a transferência dos ativos para o CNPJ da holding[cite: 15].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Gestão e Governança:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Definir regras de administração e governança[cite: 16].</li>
                [cite_start]<li>Estabelecer acordo de sócios (se necessário)[cite: 16].</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Manutenção Contábil e Tributária:</strong>
              <ul className="list-disc pl-5 mt-2">
                [cite_start]<li>Garantir que a holding esteja em conformidade com as legislações[cite: 17].</li>
                [cite_start]<li>Gerenciar impostos e relatórios financeiros[cite: 17].</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Cuidados Essenciais
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              [cite_start]<span><strong className="text-gray-800">Custo de Manutenção:</strong> A holding tem custos fixos (contabilidade, impostos anuais, taxas)[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              [cite_start]<span><strong className="text-gray-800">Risco de Fraude Fiscal:</strong> É preciso comprovar que a holding não é "fachada" ou meramente para sonegação[cite: 1].</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              [cite_start]<span><strong className="text-gray-800">Complexidade Jurídica:</strong> A constituição e gestão exigem assessoria especializada em direito societário e sucessório[cite: 1].</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Perguntas Frequentes sobre Holding Familiar
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Qual o patrimônio mínimo para valer a pena?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                [cite_start]É recomendado a partir de <strong className="text-gray-800">R$ 2 milhões</strong> (custos fixos podem não compensar para patrimônios menores)[cite: 1]. [cite_start]Para patrimônios menores, pode não haver tantas vantagens[cite: 49].
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Posso transferir meu imóvel residencial para a holding?</h3>
              <p className="text-700 leading-relaxed text-lg">
                [cite_start]Sim, mas perde-se a <strong className="text-gray-800">isenção de IR na venda</strong> (para Pessoa Física, imóvel próprio é isento até R$ 440 mil)[cite: 1].
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Quanto custa para constituir?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                [cite_start]Entre <strong className="text-gray-800">R$ 15.000 e R$ 50.000</strong> (depende da complexidade e dos serviços)[cite: 1].
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Comparativo: Holding Familiar vs. Doação Com Usufruto
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Aspecto</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Holding Familiar</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Doação com Usufruto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Proteção Patrimonial</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Oferece maior proteção contra dívidas e ações judiciais (blindagem)[cite: 42].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Não proporciona a mesma segurança contra dívidas pessoais do donatário[cite: 42].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Gestão</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Permite gestão centralizada e profissional dos bens[cite: 43].</td>
                  <td className="py-4 px-6 text-gray-700 text-base">A gestão dos bens doados geralmente permanece com o usufrutuário, mas não há centralização empresarial.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Planejamento Sucessório</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Facilita a sucessão sem necessidade de inventário tradicional (cotas)[cite: 44].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Pode envolver mais burocracia e custos de inventário para outros bens[cite: 44].</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Flexibilidade</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Maior flexibilidade para ajustar participações e estrutura societária[cite: 45].</td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">É uma transferência definitiva; menos flexível para mudanças futuras[cite: 45].</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong className="text-gray-800">Benefícios Fiscais</strong></td>
                  [cite_start]<td className="py-4 px-6 text-gray-700 text-base">Potenciais vantagens fiscais na gestão e sucessão[cite: 46].</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Vantagens fiscais mais focadas no ITCMD da doação.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            A Holding Familiar é a <strong className="text-gray-800">solução mais completa e estratégica</strong> para quem busca:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              [cite_start]<span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Proteger</strong> o patrimônio contra riscos[cite: 47].
            </li>
            <li className="flex items-start">
              [cite_start]<span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Otimizar</strong> impostos na sucessão e na gestão[cite: 47].
            </li>
            <li className="flex items-start">
              [cite_start]<span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Profissionalizar</strong> a administração dos bens[cite: 47].
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            [cite_start]É uma alternativa atrativa para proteção e gestão do patrimônio, mas geralmente é mais vantajosa para patrimônios superiores a R$ 1 milhão ou R$ 2 milhões, quando os benefícios superam os custos administrativos e tributários[cite: 48]. [cite_start]Em qualquer caso, é sempre recomendável consultar um advogado especializado para avaliar a viabilidade[cite: 49].
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8">Próximos Passos: Sua Orientação Especializada</h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            A complexidade do planejamento sucessório e patrimonial através de uma Holding Familiar exige uma análise detalhada e personalizada para cada caso. Para garantir a máxima segurança jurídica, a otimização tributária e a efetivação de seus objetivos, é fundamental contar com o suporte de profissionais com conhecimento aprofundado.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            Nossa equipe está preparada para oferecer orientação especializada em <strong className="text-gray-800">Direito de Família e Sucessões, Direito Societário e Planejamento Tributário</strong>. Nos colocamos à sua inteira disposição para analisar seu cenário, esclarecer todas as suas dúvidas e guiar você no melhor caminho para a proteção e sucessão do seu patrimônio.
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

export default HoldingFamiliarPage;