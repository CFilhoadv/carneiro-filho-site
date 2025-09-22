import MainLayout from '../components/layout/MainLayout';

export default function SalesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 font-inter">
        {/* Seção Hero */}
        <section className="text-center py-16 px-4 bg-blue-950 rounded-b-xl text-white">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
            Domine a Reforma Tributária
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl leading-relaxed">
            Estratégias Práticas para Empresas e Famílias no Novo Cenário Fiscal
          </h2>
          <a
            className="mt-8 inline-block rounded-md bg-blue-400 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-blue-500"
          >
            INSCRIÇÕES EM BREVE
          </a>
        </section>

        {/* Seção: Para Quem É */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            Para Quem É Este Curso?
          </h2>
          {/* Conteúdo direcionado ao público-alvo com foco nas dores e desejos */}
          <div className="max-w-3xl mx-auto text-xl leading-relaxed mb-8 text-gray-700">
            <p className="mb-4">
              Este curso foi desenhado para você, profissional que conquistou o sucesso com seu talento único, mas que ainda não encontrou a estratégia única para proteger esse sucesso. Você domina a sua arte, mas o sistema tributário e jurídico parece um adversário complexo e ameaçador. Sua habilidade gera riqueza, mas você sente que os impostos, os riscos legais e a falta de um planejamento estão constantemente ameaçando o futuro da sua família.
            </p>
            <p>
              Transforme sua alta renda em um patrimônio blindado, eficiente e perpétuo. Aprenda as estratégias que eu aplico para proteger cirurgiões, advogados, artistas e atletas de elite dos riscos que só quem está no topo enfrenta.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-xl leading-relaxed text-gray-700">
            <li>Administradores e Gestores</li>
            <li>Contadores e Consultores Tributários</li>
            <li>Advogados atuantes em Direito Empresarial, Tributário ou de Família</li>
            <li>Profissionais Liberais de alto rendimento (médicos, engenheiros, etc.)</li>
            <li>Famílias e indivíduos com patrimônio a ser preservado</li>
          </ul>
        </section>

        {/* Seção: O Que Você Vai Aprender */}
        <section className="py-12 px-4 text-center bg-gray-100 text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            O Que Você Vai Aprender
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-10 text-gray-700">
            <h3 className="text-3xl font-bold text-blue-950 mb-4">O Diferencial: Nossa Abordagem Crítica e Estratégica</h3>
            <p className="mb-4 text-xl leading-relaxed">
              Este curso não se limita a ensinar a lei como ela é. Ele oferece uma <strong className="text-blue-950">lente crítica</strong> que desmonta o sistema tributário e jurídico vigente (visão **desconstrutiva**) para, então, ensinar a construir estratégias robustas e legais dentro dessa realidade (visão **construtiva**).
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left text-xl leading-relaxed">
              <div>
                <h4 className="text-2xl font-semibold text-blue-950 mb-2">Visão Desconstrutiva (A Crítica Necessária)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Análise do Sistema Atual: Por que o sistema tributário brasileiro é tão complexo e hostil para quem gera riqueza?</li>
                  <li>Crítica à Reforma Tributária: Uma análise franca dos pontos positivos e, principalmente, das armadilhas e complexidades introduzidas pela nova reforma.</li>
                  <li>Desmistificando "Esquemas Milagrosos": Exposição crítica dos modelos de planejamento agressivo que colocam o patrimônio em risco.</li>
                  <li>Identificação de Riscos Ocultos: Mostrar onde estão os verdadeiros perigos na estrutura atual.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-blue-950 mb-2">Visão Construtiva (A Solução Estratégica)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Não é Teoria, é Prática: Cada crítica é acompanhada de uma alternativa prática, legal e segura.</li>
                  <li>Foco Preventivo: Ensino de como estruturar os negócios e o patrimônio desde o início para minimizar conflitos e evitar litígios futuros.</li>
                  <li>Estratégias Pós-Reforma: Como se adaptar e até se beneficiar das novas regras.</li>
                  <li>Checklists e Modelos: Fornecimento de ferramentas práticas para a implementação imediata das estratégias.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-xl leading-relaxed">
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <h3 className="text-2xl font-semibold text-blue-950">Módulo 1: Fundamentos do Sistema Atual</h3>
              <p className="mt-2">Entenda a complexidade e injustiças do sistema tributário atual que tornam a reforma inevitável.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <h3 className="text-2xl font-semibold text-blue-950">Módulo 2: Análise Estratégica - A Inversão do Poder Fiscal</h3>
              <p className="mt-2">Descubra o jogo de poder por trás da reforma e como o novo Comitê Gestor do IBS centraliza as decisões.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <h3 className="text-2xl font-semibold text-blue-950">Módulo 3: A Regulamentação em Andamento</h3>
              <p className="mt-2">Analise o PLP 108/2024 e as mudanças práticas no ITCMD, impostos seletivos e fiscalização de aluguéis.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <h3 className="text-2xl font-semibold text-blue-950">Módulo 4: Preparação e Transição</h3>
              <p className="mt-2">Guia estratégico para adaptação de empresas e famílias ao novo sistema, com cronograma de implantação.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <h3 className="text-2xl font-semibold text-blue-950">Módulo 5: Impactos Setoriais e Oportunidades</h3>
              <p className="mt-2">Estratégias específicas para varejo, serviços, indústria, agronegócio e planejamento patrimonial.</p>
            </div>
          </div>
        </section>

        {/* Seção: Bônus */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Bônus Exclusivos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-xl leading-relaxed">
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950">Suporte Exclusivo via WhatsApp</h4>
              <p className="mt-2">3 meses de suporte coletivo para tirar dúvidas diretamente comigo.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950">Webinar Ao Vivo + Gravação</h4>
              <p className="mt-2">Sessão exclusiva para perguntas e respostas sobre os temas do curso.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950">Guia de Perguntas Estratégicas</h4>
              <p className="mt-2">PDF com as perguntas certas para levar ao seu contador/advogado.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950">Aula Bônus Exclusiva</h4>
              <p className="mt-2">Gravação especial sobre "Os 3 Maiores Erros no Planejamento Sucessório".</p>
            </div>
          </div>
        </section>

        {/* Seção: Sobre o Professor */}
        <section className="py-12 px-4 text-center bg-blue-950 text-white">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre o Professor</h2>
          <div className="text-xl leading-relaxed max-w-2xl mx-auto">
            <p>
              <span className="font-bold">Dr. Francisco de Assis Carneiro Filho</span> é Advogado e Contabilista, com mais de três décadas de experiência multidisciplinar atuando como gerente nas áreas tributária, administração e finanças, controladoria e jurídica. Sua trajetória em grandes grupos nacionais e internacionais o distingue por uma abordagem holística, combinando a expertise de especialista em planejamento tributário e sucessório com a visão estratégica de um executivo de alto nível. Sua atuação é focada em resultados, com comprovada capacidade de reduzir custos, mitigar riscos, recuperar créditos e estruturar operações societárias e sucessórias.
            </p>
          </div>
        </section>

        {/* Seção: Call to Action Final */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Invista no Seu Futuro Profissional</h2>
          {/* Preço ajustado para destacar a oferta de lançamento */}
          <p className="text-xl text-gray-500 mt-4">
            De <span className="line-through font-bold">R$ 2.497,00</span> por
          </p>
          <p className="text-5xl font-extrabold text-blue-950 mt-2">R$ 1.997,00</p>
          <p className="mt-2 text-2xl font-medium text-gray-700">
            ou em 12x de R$ 249,00
          </p>
          <a
            className="mt-8 inline-block rounded-md bg-blue-400 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-blue-500"
          >
            INSCRIÇÕES EM BREVE
          </a>
        </section>
      </div>
    </MainLayout>
  );
}