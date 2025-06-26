import React from 'react';
import MainLayout from '../components/layout/MainLayout';

import administradoraImoveisBanner from '../assets/images/administradora_imoveis_banner.jpeg';

const AdministradoraBensImoveisPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página com a nova imagem */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={administradoraImoveisBanner} // CORRIGIDO: Removido .src ||
          alt="Lupa sobre modelos de casas, simbolizando gestão e proteção de imóveis"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Título Principal da Página (Abaixo do banner da imagem) */}
      <div className="bg-blue-900 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Administradora de Bens Imóveis Próprios</h1>
          <p className="text-xl md:text-2xl font-light">Solução Estratégica para Gestão e Proteção Patrimonial</p>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            1. Conceito e Finalidade
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A Administradora de Bens Imóveis Próprios é uma empresa especializada na <strong className="text-gray-800">gestão centralizada</strong> de patrimônio imobiliário familiar, com três objetivos principais:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-decimal pl-6">
            <li><strong className="text-gray-800">Otimização tributária</strong>: Redução legal de impostos na locação e sucessão.</li>
            <li><strong className="text-gray-800">Proteção patrimonial</strong>: Separação entre bens pessoais e empresariais.</li>
            <li><strong className="text-gray-800">Gestão profissionalizada</strong>: Controle unificado de múltiplos imóveis.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            <strong className="text-gray-800">Diferencial fundamental</strong>: Atua exclusivamente com imóveis dos sócios (não administra bens de terceiros como imobiliárias convencionais).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            2. Modelo de Funcionamento
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.1 Estrutura Básica</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            A estrutura do Patrimônio Familiar pode se ramificar em duas frentes principais, que interagem para gerir os imóveis:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Patrimônio Familiar</strong> se divide em:</span>
              <ul className="list-disc pl-8 mt-1 space-y-1">
                <li><strong className="text-gray-800">Holding Patrimonial</strong>: Onde os Imóveis podem ser integralizados com Isenção de ITBI.</li>
                <li><strong className="text-gray-800">Administradora de Bens</strong>: Que realiza a Gestão dos Imóveis e oferece Serviços de Locação/Melhoria.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2.2 Atribuições Principais</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Gestão operacional</strong>: Inclui atividades como aluguel, manutenção, cobranças.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Otimização fiscal</strong>: Aplicação de regimes tributários vantajosos.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Suporte à holding</strong>: Atua em conjunto com a Holding Familiar, viabilizando a transferência eficiente de patrimônio.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            3. Vantagens Estratégicas
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 Tributação na Locação</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            A estrutura de uma Administradora de Bens Imóveis Próprios (PJ - Pessoa Jurídica) pode gerar uma economia tributária significativa em comparação com a Pessoa Física (PF) no recebimento de aluguéis.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Estrutura</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Alíquota Efetiva</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Economia vs PF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Pessoa Física</td>
                  <td className="py-4 px-6 text-gray-700 text-base">15-27,5% (IRPF)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Administradora (PJ)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">11,33% (IR+CSLL)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Até 57,46%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Holding Familiar</td>
                  <td className="py-4 px-6 text-gray-700 text-base">6-8% (Lucro Real)</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Até 72%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-4 mb-4">
            <strong className="text-gray-800">Exemplo</strong>: Para R$ 300.000,00/ano em aluguéis:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">PF:</strong> R$ 82.500,00 em impostos (na alíquota máxima de 27,5%).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">PJ (Administradora):</strong> R$ 34.000,00 em impostos, gerando uma economia de R$ 48.500,00.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3.2 Proteção Patrimonial</h3>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Impenhorabilidade</strong>: Separação de bens pessoais.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Cláusulas restritivas</strong>: Veto a vendas não autorizadas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Governança familiar</strong>: Controle via pacto societário.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            4. Cuidados Essenciais
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.1 ITBI na Integralização (transferência de imóveis para a empresa)</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            A incidência do Imposto sobre Transmissão de Bens Imóveis (ITBI) na transferência dos imóveis para a holding (que pode ser a própria Administradora ou uma Holding Patrimonial separada) depende do seu objetivo principal:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Cenário</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Incidência de ITBI</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Alíquota Típica</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Atividade não-imobiliária</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Isento</td>
                  <td className="py-4 px-6 text-gray-700 text-base">0%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Core business imobiliário</td>
                  <td className="py-4 px-6 text-gray-700 text-base">Incide</td>
                  <td className="py-4 px-6 text-gray-700 text-base">2-5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            <strong className="text-gray-800">Prazo crítico</strong>: É importante observar o prazo de 3 anos para alteração do objeto social (Art. 156, II, §2º da Constituição Federal), que pode influenciar a isenção de ITBI se a empresa passar a ter atividade preponderantemente imobiliária nesse período.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4.2 Venda de Imóveis</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Para otimização tributária na venda de imóveis, a <strong className="text-gray-800">solução ideal</strong> é realizar as vendas como <strong className="text-gray-800">pessoa física</strong> através da holding:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Tributação</strong>: O imposto sobre ganho de capital é de 15% para pessoa física, versus 27,65% na Pessoa Jurídica (PJ).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span><strong className="text-gray-800">Isenção</strong>: Pessoas físicas podem ter isenção de IR sobre o ganho de capital em vendas de imóveis até R$ 440.000,00 a cada 5 anos, se for o único imóvel do vendedor e este não tiver realizado outra venda nos últimos 5 anos.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            5. Caso Integrado - Economia Patrimonial
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Este é um exemplo da economia potencial que pode ser gerada com a implementação da estrutura de Administradora de Bens Imóveis Próprios em conjunto com uma Holding Familiar, ao longo de 10 anos:
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            <strong className="text-gray-800">Dados do Exemplo</strong>:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span>Patrimônio: R$ 5 milhões.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span>Receita anual: R$ 300 mil (aluguéis).</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 flex-shrink-0 mt-1 text-xl font-bold">●</span>
              <span>Período de simulação: 10 anos.</span>
            </li>
          </ul>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-100 border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Benefício Gerado</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Valor Acumulado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Isenção de ITBI</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 150.000,00</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Economia em locação</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 485.000,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 text-base">Redução de ITCMD</td>
                  <td className="py-4 px-6 text-gray-700 text-base">R$ 320.000,00</td>
                </tr>
                <tr className="bg-blue-200">
                  <td className="py-4 px-6 text-gray-800 text-base font-semibold">Total Estimado</td>
                  <td className="py-4 px-6 text-gray-800 text-base font-semibold">R$ 955.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            6. Implementação Recomendada
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">6.1 Passo a Passo Simplificado</h3>
          <ul className="space-y-4 text-gray-700 text-lg list-decimal pl-6">
            <li>
              <strong className="text-gray-800">Constituir Holding Familiar</strong>: Iniciar com a criação de uma Holding Familiar, que pode se beneficiar da isenção de ITBI na integralização de imóveis.
            </li>
            <li>
              <strong className="text-gray-800">Criar Administradora</strong>: Em seguida, criar a Administradora de Bens como uma empresa separada ou um ramo da holding, responsável pela gestão operacional dos imóveis.
            </li>
            <li>
              <strong className="text-gray-800">Manter Vendas como PF</strong>: Estruturar as vendas de imóveis de forma que ocorram via Pessoa Física (através da holding), aproveitando a tributação mais vantajosa e possíveis isenções.
            </li>
            <li>
              <strong className="text-gray-800">Documentar Mudanças de Objeto Social</strong>: Se aplicável, documentar e legalizar mudanças de objeto social após 3 anos para manter a isenção de ITBI, conforme a legislação.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6.2 Quando Vale a Pena?</h3>
          <ul className="space-y-4 text-gray-700 text-lg list-none pl-0">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span>O patrimônio imobiliário é <strong className="text-gray-800">superior a R$ 3 milhões</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span>A receita de aluguéis é <strong className="text-gray-800">superior a R$ 100 mil/ano</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 flex-shrink-0 mt-1 text-xl font-bold">✅</span>
              <span>Há necessidade de <strong className="text-gray-800">proteção contra riscos pessoais</strong> e dívidas.</span>
            </li>
          </ul>
        </section>

        <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">7. Conclusão</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            A estrutura de uma Administradora de Bens Imóveis Próprios, muitas vezes integrada a uma Holding Familiar, combina três vantagens únicas e poderosas para o seu patrimônio:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-4 list-none pl-0 inline-block text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Eficiência tributária</strong> (com uma média de 62% de redução nos impostos sobre aluguéis).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Segurança jurídica</strong> (através da blindagem patrimonial e separação de bens).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span> <strong className="text-gray-800">Controle familiar</strong> (com governança compartilhada e regras claras para o futuro).
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mt-4">
            <strong className="text-red-600">Atenção</strong>: A implementação dessa estrutura é complexa e exige assessoria especializada para:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg mt-2 list-disc pl-5 inline-block text-left">
            <li>Evitar a caracterização como atividade imobiliária preponderante (o que poderia anular benefícios fiscais).</li>
            <li>Garantir conformidade com a Solução de Consulta Cosit 7/2021 e demais legislações.</li>
            <li>Otimizar o timing da reclassificação contábil e societária.</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8">Próximos Passos: Sua Orientação Especializada</h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Nossa equipe na <strong className="text-gray-800">Carneiro Filho Advocacia</strong> possui a expertise necessária em Direito de Família e Sucessões, Direito Societário e Planejamento Tributário para analisar seu caso específico e propor a melhor estrutura de gestão e proteção para seu patrimônio imobiliário.
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

export default AdministradoraBensImoveisPage;