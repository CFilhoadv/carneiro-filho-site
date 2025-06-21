import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

const HoldingFamiliarReformaTributariaPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner da Publicação */}
        <Banner
          subtitle="Holding Familiar e a Reforma Tributária" // Título principal
          title="Impactos e Estratégias para 2025" // Subtítulo
          bgColor="bg-blue-900" // Fundo azul
        />

        {/* Conteúdo do Artigo */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Introdução</h2>
          <p className="mb-6">
            A holding familiar consolidou-se como uma estratégia essencial para a proteção e otimização patrimonial. Contudo, em 2025, seu papel e eficácia são redefinidos pelas mudanças iminentes da Reforma Tributária. Este informativo aborda os reflexos diretos dessas alterações nas estruturas de holding, destacando os riscos e as ações estratégicas necessárias para garantir a segurança e a continuidade do seu patrimônio.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">1. A Reforma Tributária e os Novos Riscos ao Seu Patrimônio: O Alerta no ITCMD</h2>
          <p className="mb-6">
            A Reforma Tributária traz consigo alterações significativas que impactam diretamente a forma como o patrimônio é planejado e transmitido, introduzindo novos riscos e exigindo a revisão de estruturas existentes, como as holdings familiares. Um dos pontos mais críticos é a profunda modificação nas regras do <strong>Imposto sobre Transmissão Causa Mortis e Doação (ITCMD)</strong>, o conhecido imposto sobre heranças e doações.
          </p>
          <p className="mb-6">
            A Emenda Constitucional 132/2023 estabeleceu a <strong>obrigatoriedade de alíquotas progressivas</strong> para o ITCMD em todos os estados. Isso significa, na prática, que quanto maior o valor do patrimônio transmitido, maior será a porcentagem do imposto. Discute-se um aumento do teto máximo para até <strong>16% em alguns casos</strong>, um patamar bem superior aos 8% que eram o limite anterior, e muito além dos 4% ou 5% cobrados em estados como São Paulo e Minas Gerais. Para uma herança de R$ 1 milhão, o imposto pode saltar de R$ 40 mil (4%) para R$ 80 mil (8% ou 12%) ou até R$ 160 mil (16%).
          </p>
          <p className="mb-6">
            Além da progressividade e do possível aumento das alíquotas, a reforma alterou o <strong>domicílio fiscal do ITCMD</strong>: o imposto passa a ser devido no estado de domicílio do doador ou falecido, e não mais no local do bem ou inventário. Essa mudança <strong>elimina a estratégia de buscar estados com menores impostos</strong> para a sucessão. Bens no exterior, que antes não eram tributados em alguns casos, agora serão taxados conforme o domicílio do herdeiro.
          </p>
          <p className="mb-6">
            Essas alterações têm um impacto direto nas holdings familiares e offshores, que podem enfrentar <strong>limitações na escolha de jurisdições</strong> para otimização tributária. Este encarecimento da transmissão patrimonial causa mortis torna o planejamento sucessório ainda mais urgente, pois a venda de parte do patrimônio (que pode variar entre 9% e 22% do valor total) para cobrir custos de inventário é um risco iminente para herdeiros sem planejamento adequado.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">2. Holding Familiar em 2025: Estratégias de Adaptação</h2>
          <p className="mb-6">
            Diante dos reflexos da Reforma Tributária, a holding familiar continua sendo uma ferramenta vital, mas sua estratégia precisa ser adaptada para 2025.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2"><strong>Antecipação da Sucessão: Chave para Economia:</strong> Com a alta do ITCMD, antecipar a sucessão por meio de doações de quotas/ações da holding pode gerar economia, aproveitando alíquotas menores antes de possíveis aumentos futuros. Mecanismos como doações graduais com usufruto podem diluir o impacto e garantir que o imposto seja pago com alíquotas atuais.</li>
            <li className="mb-2"><strong>Otimização Tributária:</strong> A holding permite o planejamento tributário com foco na otimização do ITCMD e Imposto de Renda (IR), mas a escolha do regime tributário deve ser reavaliada frente às novas regras.</li>
            <li className="mb-2"><strong>Revisão da Governança:</strong> Acordos de sócios e outros instrumentos de governança se tornam ainda mais cruciais para definir regras de funcionamento da holding e evitar conflitos em um cenário fiscal mais complexo.</li>
            <li className="mb-2"><strong>Implementação Adaptada:</strong> O processo de criação de uma holding (viabilidade, planejamento, constituição, gestão, sucessão) deve incorporar a análise das novas alíquotas do ITCMD e dos impactos sobre bens no exterior.</li>
            <li><strong>Vantagens Contínuas da Holding:</strong> Mesmo com imposto maior, a holding familiar evita os custos de um inventário judicial (custas, honorários), que podem somar 10% ou mais do valor dos bens, e traz agilidade na transferência para os herdeiros.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">Conclusão:</h2>
          <p className="mb-6">
            A Reforma Tributária reconfigura o cenário do planejamento patrimonial em 2025. As holdings familiares, embora desafiadas pelas novas regras de ITCMD e tributação de bens no exterior, mantêm-se como instrumentos indispensáveis de proteção e otimização. A chave para o sucesso é uma <strong>assessoria jurídica e contábil especializada</strong>, capaz de adaptar sua estrutura patrimonial às novas exigências e garantir a segurança e a perpetuação do seu legado familiar.
          </p>

        </section>
      </div>
    </MainLayout>
  );
};

export default HoldingFamiliarReformaTributariaPage;