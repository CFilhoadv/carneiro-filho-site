import React from 'react';
import MainLayout from '../components/layout/MainLayout';

import holdingFamiliarBanner from '../assets/images/holding_familiar_banner.webp'; // CORRIGIDO: de .png.webp para .webp

const HoldingFamiliarPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={holdingFamiliarBanner}
          alt="Mãos protegendo uma casa, simbolizando Holding Familiar e proteção patrimonial"
          className="w-full h-full object-cover object-center"
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
            A <strong className="text-gray-800">Holding Familiar</strong> é uma empresa criada para <strong className="text-gray-800">centralizar, administrar e proteger</strong> o patrimônio de uma família. Ela funciona como uma "guarda-chuva" que detém bens imóveis (casas, terrenos, fazendas), participações societárias (empresas da família) e ativos financeiros (investimentos, direitos). Também é definida como uma empresa para administrar bens e interesses familiares, controlada pelos membros da família, e possui ações de outras empresas, imóveis, investimentos, etc.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            <strong className="text-gray-800">Como funciona?</strong>
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-2 list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl flex-shrink-0">✔</span> {/* Adicionado flex-shrink-0 para o ícone */}
              <span className="flex-grow"> {/* Adicionado flex-grow para o texto ocupar o espaço restante */}
                Os bens saem do <strong className="text-gray-800">CPF dos familiares</strong> e passam para o <strong className="text-gray-800">CNPJ da holding</strong>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl flex-shrink-0">✔</span>
              <span className="flex-grow">
                A família controla tudo por meio de <strong className="text-gray-800">quotas ou ações</strong>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl flex-shrink-0">✔</span>
              <span className="flex-grow">
                A gestão é feita de forma <strong className="text-gray-800">profissional e estratégica</strong>.
              </span>
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
          {/* O overflow-x-auto já está presente e é a solução recomendada para tabelas */}
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
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Isenção de ITBI</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Na transferência de imóveis para a holding (integralização como capital social) é isenta do ITBI.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Redução de ITCMD</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">A sucessão ocorre pela doação das cotas da holding aos herdeiros, incidindo ITCMD sobre o valor das cotas.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Economia no IR e Dividendos</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Lucros distribuídos da holding são isentos de IR para pessoas físicas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            <strong>Comparativo de ITCMD: Valor Venal x Valor de Aquisição (IR)</strong>
            A base de cálculo do ITCMD nos sistemas de sucessão é o VALOR VENAL ou o de mercado, enquanto numa holding familiar é o valor declarado no imposto de renda, O VALOR DE AQUISIÇÃO, o que faz uma grande diferença tributária.
          </p>
          {/* O overflow-x-auto já está presente e é a solução recomendada para tabelas */}
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
              <span className="flex-grow">
                <strong className="text-gray-800">Blindagem contra:</strong> Dívidas pessoais (impenhorabilidade parcial) e ações judiciais (ex.: divórcios, disputas societárias).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Os bens da holding podem ser protegidos contra credores, reduzindo riscos em caso de falências ou litígios.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow"><strong className="text-gray-800">Cláusulas de restrição</strong> (ex.: venda só com consentimento familiar).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Na constituição, os imóveis são gravados com cláusulas especiais que visam resguardá-los no seio da família, conhecidas como "cláusulas de blindagem" (inalienabilidade, incomunicabilidade, impenhorabilidade etc.).</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cláusulas Especiais de Proteção e Administração:</h4>
          {/* O overflow-x-auto já está presente e é a solução recomendada para tabelas */}
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
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Inalienabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Impede a venda ou transferência dos bens da holding sem autorização dos demais sócios.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Impenhorabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Protege os bens contra penhoras e execuções judiciais.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Irrenunciabilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Proíbe a renúncia aos direitos sobre os bens da holding.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Sucessão</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Define a sucessão dos bens em caso de falecimento de um sócio.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Administração</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Estabelece regras sobre a gestão da holding e a tomada de decisões.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Exclusão</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Permite a exclusão de sócios em situações específicas.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Arrependimento</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Permite que um sócio se retrate de sua decisão de ingressar ou permanecer na holding dentro de um prazo estipulado, garantindo assim uma saída sem penalidades.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Golden Share</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Confere a um ou mais sócios direitos especiais, como veto em decisões estratégicas, assegurando que certos interesses da família sejam protegidos, mesmo que a participação acionária seja minoritária.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Essas cláusulas adicionais fortalecem a proteção patrimonial e a governança da holding familiar, oferecendo maior segurança e controle sobre o patrimônio.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Sucessão Planejada</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Evita <strong>inventário judicial</strong> (bens são transferidos via alteração societária).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Permite <strong>testamento privado</strong> (regras de herança nas quotas).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Protege <strong>herdeiros incapazes</strong> (gestão por administradores designados).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Facilita a transferência de bens e direitos entre gerações, evitando conflitos familiares.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Permite que a sucessão seja feita de forma planejada e estruturada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Se todo o patrimônio relevante da família estiver integralizado na holding e as regras sucessórias das cotas forem bem estruturadas, isso reduz drasticamente a necessidade de um inventário tradicional.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">A sucessão das cotas sociais pode ser realizada diretamente via contrato e regularizada em cartório, dependendo das legislações locais e estaduais.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Gestão Profissionalizada e Centralizada</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow"><strong>Tomada de decisão centralizada</strong> (evita dispersão de patrimônio).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow"><strong>Contratos personalizados</strong> (pacto societário, acordos de acionistas).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow"><strong>Otimização de custos</strong> (contratação coletiva, assessoria especializada).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">Proporciona uma gestão centralizada dos ativos familiares, facilitando a tomada de decisões e a administração dos bens.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">A holding pode investir em novos negócios ou melhorar a gestão dos ativos existentes, potencializando seu valor.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">▶ Privacidade</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✔</span>
              <span className="flex-grow">A estrutura de uma holding pode oferecer maior privacidade em relação aos bens da família, uma vez que as informações financeiras podem ser menos acessíveis ao público.</span>
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
              <span className="flex-grow"><strong>Famílias com patrimônio acima de R$ 2 milhões</strong> (imóveis, empresas, investimentos).</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span className="flex-grow"><strong>Empresários</strong> que querem separar patrimônio pessoal e empresarial e garantir a continuidade dos negócios.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span className="flex-grow"><strong>Casais em segundas uniões</strong> com filhos de relacionamentos anteriores.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span className="flex-grow"><strong>Pais de herdeiros menores ou com necessidades especiais</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span className="flex-grow"><strong>Investidores</strong> com múltiplos imóveis ou ativos financeiros.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span className="flex-grow">Pessoas com estrutura familiar complexa.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Tipos de Holding Familiar
          </h2>
          {/* O overflow-x-auto já está presente e é a solução recomendada para tabelas */}
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
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Pura</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Só administra patrimônio (não opera negócios).</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Famílias com foco em imóveis e investimentos.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Mista</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Controla empresas ativas + patrimônio.</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Empresários com negócios em operação.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Patrimonial</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Foco em proteção de bens (blindagem).</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Quem busca segurança contra riscos jurídicos.</td>
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
              <strong>Planejamento Inicial:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Identificar objetivos familiares e patrimoniais.</li>
                <li>Conhecer o regime de casamento, pois impacta no planejamento.</li>
                <li>Avaliação da estrutura familiar e suas complexidades.</li>
              </ul>
            </li>
            <li>
              <strong>Diagnóstico Patrimonial:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Levantar e organizar todos os bens da família (imóveis, investimentos, empresas etc.).</li>
                <li>Estimar o valor do patrimônio.</li>
              </ul>
            </li>
            <li>
              <strong>Escolha da Estrutura Jurídica / Tipo Societário:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Decidir qual tipo de holding será utilizada (pura, mista, patrimonial etc.).</li>
                <li>Escolher entre LTDA (mais flexível para famílias) ou SA (indicado para grandes patrimônios).</li>
              </ul>
            </li>
            <li>
              <strong>Constituição da Holding / Elaboração de Contratos:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Elaborar o contrato ou estatuto social.</li>
                <li>Registrar a holding na Junta Comercial.</li>
                <li>Incluir pacto societário com cláusulas de preferência familiar (venda de quotas só para parentes) e gestão por conselho (evita conflitos entre herdeiros).</li>
              </ul>
            </li>
            <li>
              <strong>Transferência de Bens / Integralização dos Bens:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Realizar a integralização do capital social com os bens da família.</li>
                <li>Formalizar a transferência dos ativos para o CNPJ da holding.</li>
              </ul>
            </li>
            <li>
              <strong>Gestão e Governança:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Definir regras de administração e governança.</li>
                <li>Estabelecer acordo de sócios (se necessário).</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção Contábil e Tributária:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Garantir que a holding esteja em conformidade com as legislações.</li>
                <li>Gerenciar impostos e relatórios financeiros.</li>
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
              <span className="flex-grow"><strong>Custo de Manutenção:</strong> A holding tem custos fixos (contabilidade, impostos anuais, taxas).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              <span className="flex-grow"><strong>Risco de Fraude Fiscal:</strong> É preciso comprovar que a holding não é "fachada" ou meramente para sonegação.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">⚠</span>
              <span className="flex-grow"><strong>Complexidade Jurídica:</strong> A constituição e gestão exigem assessoria especializada em direito societário e sucessório.</span>
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
                É recomendado a partir de <strong>R$ 2 milhões</strong> (custos fixos podem não compensar para patrimônios menores). Para patrimônios menores, pode não haver tantas vantagens.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Posso transferir meu imóvel residencial para a holding?</h3>
              <p className="text-700 leading-relaxed text-lg">
                Sim, mas perde-se a <strong>isenção de IR na venda</strong> (para Pessoa Física, imóvel próprio é isento até R$ 440 mil).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Quanto custa para constituir?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Entre <strong>R$ 15.000 e R$ 50.000</strong> (depende da complexidade e dos serviços).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            Comparativo: Holding Familiar vs. Doação Com Usufruto
          </h2>
          {/* O overflow-x-auto já está presente e é a solução recomendada para tabelas */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Critério</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Holding Familiar</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Doação com Usufruto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Proteção Patrimonial</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Oferece maior proteção contra dívidas e ações judiciais (blindagem).</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Não proporciona a mesma segurança contra dívidas pessoais do donatário.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Gestão</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Permite gestão centralizada e profissional dos bens.</td>
                  <td className="py-4 px-6 text-gray-700 text-base">A gestão dos bens doados geralmente permanece com o usufrutuário, mas não há centralização empresarial.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Planejamento Sucessório</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Facilita a sucessão sem necessidade de inventário tradicional (cotas).</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Pode envolver mais burocracia e custos de inventário para outros bens.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Flexibilidade</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Maior flexibilidade para ajustar participações e estrutura societária.</td>
                  <td className="py-4 px-6 text-gray-700 text-base">É uma transferência definitiva; menos flexível para mudanças futuras.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base"><strong>Benefícios Fiscais</strong></td>
                  <td className="py-4 px-6 text-gray-700 text-base">Potenciais vantagens fiscais na gestão e sucessão.</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Vantagens fiscais mais focadas no ITCMD da doação.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            A Holding Familiar é a <strong>solução mais completa e estratégica</strong> para quem busca:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong>Proteger</strong> o patrimônio contra riscos.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong>Otimizar</strong> impostos na sucessão e na gestão.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong>Profissionalizar</strong> a administração dos bens.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            É uma alternativa atrativa para proteção e gestão do patrimônio, mas geralmente é mais vantajosa para patrimônios superiores a R$ 1 milhão ou R$ 2 milhões, quando os benefícios superam os custos administrativos e tributários. Em qualquer caso, é sempre recomendável consultar um advogado especializado para avaliar a viabilidade.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8">Próximos Passos: Sua Orientação Especializada</h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Nossa equipe na <strong>Carneiro Filho Advocacia</strong> possui a expertise necessária em Direito de Família e Sucessões, Direito Societário e Planejamento Tributário para analisar seu caso específico e propor a melhor estrutura de gestão e proteção para seu patrimônio imobiliário.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/contato-carneirofilho/planejamento_sucessorio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg"
            >
              Agende uma Consultoria
            </a>
          </div>
          <p className="text-gray-700 text-sm italic mt-8">
            (Atualizado em outubro/2024 conforme jurisprudência do CARF e legislação tributária vigente)
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default HoldingFamiliarPage;