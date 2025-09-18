// pages/domine-a-reforma-tributaria.tsx
import Head from 'next/head';
import styles from './SalesPage.module.css'; 

export default function SalesPage() {
  return (
    <>
      <Head>
        <title>Domine a Reforma Tributária | Carneiro Filho Advocacia</title>
        <meta name="description" content="A análise estratégica completa da Reforma Tributária para líderes, administradores e profissionais do direito. Entenda o poder, os riscos e as oportunidades." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        {/* Seção Hero */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Domine a Reforma Tributária</h1>
          <h2 className={styles.heroSubtitle}>A Análise Estratégica Completa que Revela o Poder, os Riscos e as Oportunidades Escondidas na Nova Lei</h2>
          <button className={styles.ctaButton}>QUERO GARANTIR AGORA</button>
        </section>

        {/* Seção: Para Quem É */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Para Quem É Este Curso?</h2>
          <ul className={styles.list}>
            <li>Administradores e Gestores</li>
            <li>Contadores e Consultores Tributários</li>
            <li>Advogados atuantes em Direito Empresarial, Tributário ou de Família</li>
            <li>Profissionais Liberais de alto rendimento (médicos, engenheiros, etc.)</li>
            <li>Famílias e indivíduos com patrimônio a ser preservado</li>
          </ul>
        </section>

        {/* Seção: O Que Você Vai Aprender */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>O Que Você Vai Aprender</h2>
          <div className={styles.modulesContainer}>
            <div className={styles.module}>
              <h3>Módulo 1: Fundamentos do Sistema Atual</h3>
              <p>Entenda a complexidade e injustiças do sistema tributário atual que tornam a reforma inevitável.</p>
            </div>
            <div className={styles.module}>
              <h3>Módulo 2: Análise Estratégica - A Inversão do Poder Fiscal</h3>
              <p>Descubra o jogo de poder por trás da reforma e como o novo Comitê Gestor do IBS centraliza as decisões.</p>
            </div>
            <div className={styles.module}>
              <h3>Módulo 3: A Regulamentação em Andamento</h3>
              <p>Analise o PLP 108/2024 e as mudanças práticas no ITCMD, impostos seletivos e fiscalização de aluguéis.</p>
            </div>
            <div className={styles.module}>
              <h3>Módulo 4: Preparação e Transição</h3>
              <p>Guia estratégico para adaptação de empresas e famílias ao novo sistema, com cronograma de implantação.</p>
            </div>
            <div className={styles.module}>
              <h3>Módulo 5: Impactos Setoriais e Oportunidades</h3>
              <p>Estratégias específicas para varejo, serviços, indústria, agronegócio e planejamento patrimonial.</p>
            </div>
          </div>
        </section>

        {/* Seção: Bônus */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bônus Exclusivos</h2>
          <div className={styles.bonusContainer}>
            <div className={styles.bonus}>
              <h4>Suporte Exclusivo via WhatsApp</h4>
              <p>3 meses de suporte coletivo para tirar dúvidas diretamente comigo.</p>
            </div>
            <div className={styles.bonus}>
              <h4>Webinar Ao Vivo + Gravação</h4>
              <p>Sessão exclusiva para perguntas e respostas sobre os temas do curso.</p>
            </div>
            <div className={styles.bonus}>
              <h4>Guia de Perguntas Estratégicas</h4>
              <p>PDF com as perguntas certas para levar ao seu contador/advogado.</p>
            </div>
            <div className={styles.bonus}>
              <h4>Aula Bônus Exclusiva</h4>
              <p>Gravação especial sobre "Os 3 Maiores Erros no Planejamento Sucessório".</p>
            </div>
          </div>
        </section>

        {/* Seção: Sobre o Professor */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre o Professor</h2>
          <div className={styles.profile}>
            <p>
              <strong>Francisco de Assis Carneiro Filho</strong> é especialista em Direito Tributário 
              e Planejamento Patrimonial, com mais de <strong>24 anos de experiência</strong> em 
              gestão tributária, controladoria e consultoria empresarial.
            </p>
            <p>
              Reconhecido por sua atuação estratégica em grandes grupos nacionais e multinacionais 
              como Grupo Gas Natural, Enron América do Sul, Comgás e Grupo E-Ouro, possui expertise 
              comprovada em planejamento tributário, recuperação de créditos fiscais, due diligence 
              e implementação de sistemas ERP (SAP e Protheus).
            </p>
            <p>
              Com formação em Direito, Pós-graduação em Contabilidade Empresarial com ênfase tributária 
              e MBA em Gestão Executiva Empresarial pela FGV, une o conhecimento jurídico e contábil 
              para oferecer análises estratégicas completas e aplicáveis.
            </p>
            <p>
              <a href="https://carneirofilho.com.br/quem-somos" target="_blank" rel="noopener noreferrer" 
                style={{color: '#2c3e50', fontWeight: 'bold'}}>
                ▶ Conheça mais sobre minha trajetória
              </a>
            </p>
          </div>
        </section>

        {/* Seção: Call to Action Final */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Invista no Seu Futuro Profissional</h2>
          <p className={styles.price}>R$ 1.997,00</p>
          <button className={styles.ctaButton}>GARANTIR MEU ACESSO AGORA</button>
        </section>
      </main>
    </>
  );
}