import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

const ReformaTributariaParte2Page: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner da Publicação 2 */}
        <Banner
          subtitle="Reforma Tributária" // Título principal
          title="Impactos e Ações Estratégicas para Seu Patrimônio" // Subtítulo
          bgColor="bg-blue-900" // Fundo azul
        />

        {/* Conteúdo do Artigo */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Introdução</h2>
          <p className="mb-6">
            Após a análise da nova estrutura da Reforma Tributária sobre o consumo, é crucial agora compreender como essas transformações impactam diretamente a renda, o patrimônio e, consequentemente, o planejamento estratégico de empresas e famílias no Brasil. As mudanças exigem uma postura proativa e revisões em diversas frentes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">1. Mudanças na Renda e no Patrimônio: O Que o Contribuinte Sente</h2>
          <p className="mb-6">
            A Reforma estende suas modificações para além do consumo, atingindo a tributação sobre a renda e o patrimônio, com foco em maior justiça fiscal.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>Tributação de Dividendos:</strong> A principal alteração é a proposta de <strong>reintroduzir a tributação sobre dividendos</strong>, com alíquotas sugeridas entre 15% e 20%.
              <span className="block ml-5 text-sm text-gray-600"><em>Impacto: Aumenta a carga tributária para acionistas, podendo influenciar a decisão de distribuição de lucros pelas empresas.</em></span>
            </li>
            <li className="mb-2"><strong>IPVA (Imposto sobre Propriedade de Veículos Automotores):</strong> Sua base de incidência será ampliada para incluir <strong>aeronaves e embarcações</strong>.</li>
            <li className="mb-2"><strong>ITCMD (Imposto sobre Transmissão Causa Mortis e Doação):</strong> A reforma tornará <strong>obrigatória a progressividade das alíquotas</strong> para heranças e doações. Haverá também a possibilidade de tributar <strong>bens localizados no exterior</strong> e propostas para aumentar o teto da alíquota máxima de 8% para até 20%.</li>
            <li className="mb-2"><strong>Outros Impostos:</strong> O IPTU poderá ter sua base de cálculo atualizada por decreto, e a discussão sobre a regulamentação do Imposto sobre Grandes Fortunas (IGF) permanece relevante.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1.1. Regras de Transição: Entendendo o Cronograma de Implementação</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>2026:</strong> Início do período de teste com alíquotas reduzidas (CBS a 0,9% e IBS a 0,1%), para adaptação e testes do sistema.</li>
            <li className="mb-2"><strong>2027:</strong> Extinção de PIS, COFINS e IPI, que serão substituídos pelos novos tributos.</li>
            <li className="mb-2"><strong>2029-2032:</strong> Período de redução gradual das alíquotas de ICMS e ISS, com a transição para o novo modelo.</li>
            <li><strong>2033:</strong> O sistema de IBS e CBS entra em pleno vigor, com a substituição total dos tributos anteriores.</li>
          </ul>
          <p className="mb-6 italic text-gray-600">
            <strong>Ação:</strong> Compreender este cronograma é fundamental para planejar a adaptação das operações e estratégias financeiras e sucessórias ao longo dos próximos anos.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">2. Seu Planejamento em Foco: Sucessório, Tributário e Empresarial</h2>
          <p className="mb-6">
            As implicações das novas regras fiscais exigem uma reavaliação estratégica profunda, especialmente nas áreas de planejamento:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>Planejamento Empresarial e Tributário:</strong> A tributação de dividendos, por exemplo, impactará diretamente o <strong>recálculo de preços, margens de lucro e a gestão do fluxo de caixa</strong> das empresas. Ajustes nas operações internas e reavaliação de estratégias de mercado e investimento serão essenciais.</li>
            <li><strong>Planejamento Sucessório:</strong> A progressividade do ITCMD e a tributação de bens no exterior aumentam significativamente a complexidade e a importância de um planejamento sucessório bem estruturado. Será crucial revisar arranjos sucessórios existentes e buscar novas estratégias de proteção patrimonial e familiar.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">3. Ações Essenciais para Empresas e Famílias: Como se Adaptar e Prosperar</h2>
          <p className="mb-6">
            Diante das profundas mudanças, a postura proativa e a busca por orientação especializada são cruciais para transformar desafios em oportunidades:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>Levantamento de Créditos:</strong> Mapear e documentar todos os créditos tributários acumulados (PIS/COFINS, ICMS, IPI, ISS) é fundamental para aproveitá-los no novo sistema.</li>
            <li className="mb-2"><strong>Avaliação Financeira:</strong> Analisar os impactos das novas regras nos fluxos de caixa e nas finanças da empresa ou do patrimônio familiar.</li>
            <li className="mb-2"><strong>Assessoria Especializada:</strong> A complexidade da reforma exige a <strong>consulta a especialistas em planejamento tributário, sucessório e empresarial</strong>. Profissionais qualificados podem oferecer a orientação e as soluções personalizadas que o momento exige, transformando desafios jurídicos complexos em oportunidades estratégicas.</li>
            <li><strong>Atualização Contínua:</strong> Novas demandas no mercado de trabalho surgirão, exigindo que profissionais e empresas se atualizem constantemente e busquem especialização em áreas tributárias emergentes.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">Conclusão Final:</h2>
          <p className="mb-6">
            A Reforma Tributária é um divisor de águas que reconfigura o cenário fiscal brasileiro. As mudanças na tributação sobre o consumo, renda e patrimônio, aliadas ao seu cronograma de implementação, exigem uma compreensão aprofundada e um planejamento estratégico cuidadoso. Ao buscar assessoria jurídica especializada, empresas e famílias podem navegar com segurança por este novo ambiente, protegendo seu patrimônio e garantindo seu legado para as gerações futuras.
          </p>

        </section>
      </div>
    </MainLayout>
  );
};

export default ReformaTributariaParte2Page;