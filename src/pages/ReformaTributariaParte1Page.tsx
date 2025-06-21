import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

const ReformaTributariaParte1Page: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner da Publicação 1 */}
        {/* Usando o componente Banner para padronização */}
        <Banner
          subtitle="Reforma Tributária" // Título principal
          title="O Que Você Precisa Saber Agora" // Subtítulo
          bgColor="bg-blue-900" // Fundo azul
        />

        {/* Conteúdo do Artigo */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Introdução</h2>
          <p className="mb-6">
            O sistema tributário brasileiro, conhecido por sua complexidade e alta carga fiscal, tem sido historicamente um desafio para empresas e cidadãos. Com uma carga tributária que se aproxima de <strong>35-36% do Produto Interno Bruto (PIB)</strong>, acima da média da América Latina, a percepção de custo-benefício dos serviços públicos é frequentemente baixa. Além disso, a complexidade do sistema e a "guerra fiscal" entre estados criam distorções que prejudicam a eficiência econômica e a justiça fiscal. É nesse cenário que a Reforma Tributária se apresenta como uma necessidade urgente, buscando simplificar o sistema, melhorar a eficiência e promover maior equidade. Este artigo detalha as transformações propostas, seus impactos e como empresas e famílias podem se preparar para o novo cenário fiscal.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">1. O Grande Quadro: Adeus aos Tributos Antigos, Bem-Vindo ao IVA Dual</h2>
          <p className="mb-6">
            A Reforma marca o fim de cinco tributos federais, estaduais e municipais que hoje incidem sobre o consumo: <strong>PIS, COFINS, IPI, ICMS e ISS</strong>. Em seu lugar, teremos a criação de dois novos impostos que formarão o Imposto sobre Valor Agregado (IVA) Dual:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>CBS (Contribuição sobre Bens e Serviços):</strong> Competência federal.</li>
            <li><strong>IBS (Imposto sobre Bens e Serviços):</strong> Competência estadual e municipal.</li>
          </ul>
          <p className="mb-6">
            Este IVA Dual, de modelo não-cumulativo, incidirá apenas sobre o valor adicionado em cada etapa, eliminando o "efeito cascata" e prometendo simplificação, neutralidade e transparência.
          </p>
          <p className="mb-6">
            Um novo <strong>Imposto Seletivo (IS)</strong> também será instituído, que incidirá sobre produtos considerados prejudiciais à saúde e ao meio ambiente, como tabaco, bebidas alcoólicas, bebidas açucaradas e jogos de azar. Sua função é regular o consumo e não gerar arrecadação principal.
          </p>
          <p className="mb-6">
            A gestão e arrecadação desses novos tributos serão compartilhadas, com a criação de um <strong>Comitê Gestor do IBS</strong>. Este comitê terá funções cruciais na administração, fiscalização, arrecadação e uniformização das regras do imposto, buscando eliminar distorções e a chamada "guerra fiscal" entre estados. O imposto será arrecadado no local de consumo, seguindo o <strong>Princípio do Destino</strong>, o que visa simplificar a apuração e reduzir litígios.
          </p>
          <p className="mb-6">
            A transição para o novo sistema prevê regras para o aproveitamento de <strong>créditos tributários acumulados</strong>. Créditos de PIS/COFINS, ICMS e IPI/ISS poderão ser compensados ou ressarcidos ao longo de um período de até 20 anos, visando mitigar impactos financeiros para as empresas durante a adaptação.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1.1. A Linha do Tempo da Reforma Tributária: Marcos Legislativos e Próximos Passos</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Dezembro 2023:</strong> Promulgada a Emenda Constitucional nº 132/2023, formalizando a reforma.</li>
            <li className="mb-2"><strong>Abril 2024:</strong> Apresentado o Projeto de Lei Complementar (PLP) nº 68/2024, que detalha as regras do novo sistema.</li>
            <li className="mb-2"><strong>Julho 2024:</strong> O PLP nº 68/2024 chega ao Senado para análise.</li>
            <li className="mb-2"><strong>Dezembro 2024:</strong> Senado aprova o PLP com alterações, retornando-o à Câmara dos Deputados para nova análise das modificações.</li>
            <li className="mb-2"><strong>Janeiro 2025:</strong> Sancionada a Lei Complementar nº 214/2025.</li>
            <li><strong>Abril 2025:</strong> A Comissão de Constituição e Justiça (CCJ) da Câmara aprova o calendário de debates para as leis complementares restantes, indicando a continuidade dos trabalhos de regulamentação.</li>
          </ul>
          <p className="mb-6 italic text-gray-600">
            <strong>Ação:</strong> É fundamental acompanhar as próximas etapas legislativas, pois as Leis Complementares definirão detalhes operacionais cruciais da reforma.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">2. O Que Muda no Consumo: Alíquotas e Regimes Específicos</h2>
          <p className="mb-6">
            As alíquotas do novo sistema de consumo trazem impactos diretos em diversos setores:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>Alíquota Padrão:</strong> A alíquota total do IVA Dual (IBS + CBS) será de aproximadamente <strong>26,5%</strong>.</li>
            <li className="mb-2"><strong>Alíquota Zero (Isenção Total):</strong> Produtos essenciais como itens da cesta básica, medicamentos, insumos agrícolas e materiais educativos terão isenção completa.
              <span className="block ml-5 text-sm text-gray-600"><em>Impacto direto: A carga tributária média nesses produtos cairá de 11,6% para 4,8%.</em></span>
            </li>
            <li className="mb-2"><strong>Alíquota Reduzida (60% da Padrão):</strong> Aplicada a itens de relevância social, com um impacto direto na desoneração de serviços essenciais. Abrange:
              <span className="block ml-5 text-sm text-gray-600"><em>Alimentos fora da cesta básica, Transporte público, Serviços de saúde e educação.</em></span>
              <span className="block ml-5 text-sm text-gray-600"><em>Exemplo: Para o setor imobiliário, a tributação efetiva será de 15,9% para construção e 7,95% para locação.</em></span>
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Regimes Específicos e Imposto Seletivo:</h3>
          <p className="mb-6">
            A reforma também estabelece regimes específicos para setores com particularidades operacionais, como serviços financeiros e imóveis, visando evitar a cumulatividade e estimular o setor. O <strong>Imposto Seletivo (IS)</strong>, por sua vez, incidirá sobre produtos prejudiciais à saúde e ao meio ambiente, como tabaco, bebidas alcoólicas e açucaradas, e jogos de azar.
          </p>
          <p className="mb-6 italic text-gray-600">
            <strong>Ação:</strong> Empresas e consumidores devem ficar atentos a essas diferenciações de alíquotas e regimes, pois impactarão diretamente custos e preços.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">Conclusão da Publicação 1:</h2>
          <p className="mb-6">
            A Reforma Tributária sobre o consumo é uma mudança paradigmática, substituindo um sistema complexo por um IVA Dual mais simples e transparente. Compreender a extinção dos antigos tributos, as novas alíquotas e a tramitação é fundamental para qualquer empresa ou família que busca segurança e eficiência no novo cenário fiscal brasileiro.
          </p>

        </section>
      </div>
    </MainLayout>
  );
};

export default ReformaTributariaParte1Page;