import React from 'react';

// === COMPONENTE MainLayout (MANTIDO) ===
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-blue-950 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Carneiro Filho</h1>
        <nav>
          <a href="#" className="mx-2 hover:text-blue-400 transition duration-300">Início</a>
          <a href="#" className="mx-2 hover:text-blue-400 transition duration-300">Cursos</a>
        </nav>
      </div>
    </header>
    <main>
      {children}
    </main>
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Carneiro Filho. Todos os direitos reservados.</p>
        <p className="mt-2">Política de Privacidade | Termos de Uso</p>
      </div>
    </footer>
  </div>
);
// =======================================

export default function SalesPage() {
  // LINK FINAL: Voltamos para o link padrão, pois o link com 'off=' não está funcionando na Hotmart
  const HOTMART_CHECKOUT_LINK = "https://pay.hotmart.com/C103191951J"; 
  const CUPOM_CODIGO = "QYP0INWD"; // Usamos o cupom que estava funcionando (mas expirado)

  return (
    <MainLayout>
      <div className="container mx-auto px-4 font-inter">
        
        {/* SEÇÃO HERO - AJUSTADA PARA PREÇO ÚNICO E PRAZO 09/12 */}
        <section className="text-center py-12 px-4 bg-blue-950 rounded-b-xl text-white shadow-2xl">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
            Domine a Reforma Tributária
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl leading-relaxed">
            Estratégias Práticas para Empresas e Famílias no Novo Cenário Fiscal
          </h2>

          {/* Contador de Urgência (Simulado) - DATA CORRIGIDA PARA 09/12 */}
          <div className="mt-8 bg-red-600 text-white p-3 rounded-lg max-w-sm mx-auto shadow-lg animate-pulse">
            <p className="text-xl font-bold">A oferta de LANÇAMENTO TERMINA em:</p>
            <p className="text-3xl font-extrabold">09/12 - 18:00</p> 
            <p className="text-lg font-bold">Aproveite o preço de R$ 797,00!</p>
          </div>

          {/* Oferta e Preço da Fase Única - DATA CORRIGIDA PARA 09/12 */}
          <div className="mt-6 bg-blue-800 p-6 rounded-lg shadow-inner max-w-md mx-auto border-4 border-yellow-400">
            <span className="inline-block bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-lg font-extrabold mb-2 transform rotate-1">
              PREÇO EXCLUSIVO DE LANÇAMENTO
            </span>
            <p className="text-xl text-gray-300">De <span className="line-through font-bold">R$ 1.210,00</span> por:</p>
            <p className="text-6xl font-extrabold text-white mt-1">
              🔥 R$ 797,00
            </p>
            <p className="text-sm font-light text-gray-300">Seu desconto termina em 09/12 - 18:00!</p>
          </div>
          
          <a
            className="mt-8 inline-block rounded-md bg-green-500 px-12 py-4 text-xl font-extrabold text-white transition duration-300 hover:bg-green-600 shadow-2xl transform hover:scale-105"
            href={HOTMART_CHECKOUT_LINK} // USANDO O LINK PADRÃO
          >
            GARANTIR MINHA VAGA POR R$ 797,00
          </a>
          
          {/* BLOCO DE CUPOM DE DESCONTO */}
          <div className="mt-4 bg-yellow-200 text-blue-950 p-3 rounded-lg max-w-sm mx-auto shadow-lg border border-yellow-500">
            <p className="text-base font-semibold">COPIE E USE ESTE CUPOM NO CHECKOUT PARA O DESCONTO:</p>
            <p className="text-2xl font-extrabold select-all cursor-pointer">{CUPOM_CODIGO}</p> 
          </div>
          {/* FIM BLOCO DE CUPOM */}

          <p className="mt-4 text-yellow-400 font-semibold text-lg">
            O preço sobe para R$ 1.210,00 após 09/12 - Garanta seu desconto agora!
          </p>
        </section>

        {/* REMOVIDA: SEÇÃO DE PREÇOS PROGRESSIVOS FOI EXCLUÍDA */}
        

        {/* Seção: Para Quem É (MANTIDA) */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            Para Quem É Este Curso?
          </h2>
          <div className="max-w-3xl mx-auto text-xl leading-relaxed mb-8 text-gray-700">
            <p className="mb-4">
              Este curso foi desenhado para o profissional estratégico que enxerga na Reforma Tributária não apenas uma mudança na lei, mas uma redefinição completa do tabuleiro onde negócios e patrimônios são construídos e protegidos.
            </p>
            <p>
              Ele é para você, que precisa ir muito além de uma compreensão superficial, dominando a análise crítica do novo sistema e as ferramentas práticas para navegar por ele com segurança e vantagem competitiva.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-xl leading-relaxed text-gray-700">
            <li>Contadores e Consultores Tributários que desejam transcender a rotina de compliance e oferecer uma consultoria estratégica de alto nível, antecipando os impactos da reforma para seus clientes.</li>
            <li>Advogados (Tributário, Empresarial, de Família) que precisam dissecar a letra da lei (como o PLP 108/2024) para construir defesas robustas, planejar operações e assessorar com autoridade incontestável no novo cenário.</li>
            <li>Gestores Financeiros, CFOs e Diretores de empresas que são responsáveis por planejar e executar a transição tributária, protegendo margens e identificando oportunidades a partir de 2026.</li>
            <li>Profissionais de Planejamento Patrimonial que precisam reavaliar todas as estratégias de holdings, sucessões e proteção de patrimônio à luz das novas regras do ITCMD e da fiscalização.</li>
            <li>Profissionais de Grandes Escritórios que assessoram clientes de alta renda e não podem ficar reféns de interpretações simplistas da reforma.</li>
          </ul>
        </section>
        
        {/* Formulário de Captura de E-mails (REMOVIDO) */}


        {/* Seção: O Que Você Vai Aprender (MANTIDA) */}
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
                  <li>Checklists e Modelos: Fornecimento de ferramentas práticas para a implementation imediata das estratégias.</li>
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

        {/* Seção: Bônus (MANTIDA) */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Bônus Exclusivos por Tempo Limitado</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-10 text-gray-700">
            Ao se inscrever hoje, você garante acesso imediato a estes benefícios que potencializam seu aprendizado:
          </p>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 text-xl leading-relaxed">
            
            {/* Bônus 1: Grupo VIP de Suporte no WhatsApp */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-left text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950 mb-2">Bônus 1: Grupo VIP de Suporte no WhatsApp</h4>
              <p className="text-lg">
                Tenha suas dúvidas respondidas por um sistema inteligente e pela minha curadoria pessoal. Envie suas perguntas no grupo exclusivo. Nossa IA faz uma triagem e fornece respostas rápidas baseadas no material do curso. E eu, Francisco, entro pessoalmente nas questões mais complexas e específicas para dar a palavra final. É como ter uma consultoria contínua à sua disposição.
              </p>
            </div>
            
            {/* Bônus 2: Meu Roteiro Pessoal de Atualização */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-left text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950 mb-2">Bônus 2: Meu Roteiro Pessoal de Atualização</h4>
              <p className="text-lg">
                Acesse o método exato que eu uso para me manter atualizado. Você receberá um guia dinâmico em PDF que eu mesmo atualizo com as novidades mais relevantes. Inclui links oficiais, minhas publicações com comentários sobre o impacto prático e os prazos a observar. Você terá essa curadoria técnica em primeira mão, dentro da plataforma do curso.
              </p>
            </div>
            
            {/* Bônus 3: Acesso Vitalício e Atualizações */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100 text-left text-gray-700">
              <h4 className="text-2xl font-semibold text-blue-950 mb-2">Bônus 3: Acesso Vitalício e Atualizações</h4>
              <p className="text-lg">
                Seu investimento é único, mas seu conhecimento se renova. Tenha acesso vitalício à plataforma. Enquanto a Reforma for um tema em evolução e houver mudanças relevantes, você receberá novas publicações e materiais atualizados sem custo adicional.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Sobre o Professor (MANTIDA) */}
        <section className="py-12 px-4 text-center bg-blue-950 text-white">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre o Professor.</h2>
          <div className="text-xl leading-relaxed max-w-2xl mx-auto">
            <p>
              <span className="font-bold">Dr. Francisco de Assis Carneiro Filho</span> é Advogado e Contabilista, com mais de três décadas de experiência multidisciplinar atuando como gerente nas áreas tributária, administração e finanças, controladoria e jurídica. Sua trajetória em grandes grupos nacionais e internacionais o distingue por uma abordagem holística, combinando a expertise de especialista em planejamento tributário e sucessório com a visão estratégica de um executivo de alto nível. Sua atuação é focada em resultados, com comprovada capacidade de reduzir custos, mitigar riscos, recuperar créditos e estruturar operações societárias e sucessórias.
            </p>
          </div>
        </section>

        {/* SEÇÃO CALL TO ACTION FINAL - AJUSTADA PARA PREÇO ÚNICO E PRAZO 09/12 */}
        <section id="inscricao-final" className="py-12 px-4 text-center bg-white text-gray-900 shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Invista no Seu Futuro Profissional</h2>
          
          {/* Bloco de Preço Atual (R$ 797) - DATA CORRIGIDA PARA 09/12 */}
          <div className="max-w-md mx-auto p-6 border-4 border-green-500 rounded-xl bg-green-50 shadow-2xl">
            <p className="text-xl text-gray-500 mt-2">
              De <span className="line-through font-bold">R$ 1.210,00</span> por
            </p>
            <p className="text-5xl font-extrabold text-blue-950 mt-2">R$ 797,00</p>
            <p className="mt-2 text-2xl font-medium text-red-600">
              OFERTA DE LANÇAMENTO EXPIRA EM 09/12!
            </p>
            <p className="mt-4 text-gray-700 font-semibold">
              Após 18h00 do dia 09/12, o preço será R$ 1.210,00.
            </p>
            <a
              className="mt-6 inline-block w-full rounded-md bg-green-500 px-8 py-3 text-2xl font-extrabold text-white transition duration-300 hover:bg-green-600"
              href={HOTMART_CHECKOUT_LINK} // USANDO O LINK FUNCIONAL
            >
              GARANTIR MINHA VAGA AGORA POR R$ 797,00
            </a>

          </div>

          {/* Seção de Garantia Reforçada */}
          <div className="max-w-xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg text-left bg-white">
            <h3 className="text-xl font-bold text-blue-950 mb-3">Seu Risco é Zero:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li className="font-semibold">
                GARANTIA INCONDICIONAL DE 7 DIAS: Satisfação ou 100% do seu dinheiro de volta.
              </li>
              <li>
                ACESSO VITALÍCIO às atualizações do curso sobre o tema (sem custo extra).
              </li>
              <li>
                SUPORTE DIRETO comigo (Francisco Carneiro Filho) e minha equipe.
              </li>
            </ul>
          </div>

        </section>
      </div>
    </MainLayout>
  );
}