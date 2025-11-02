// src/data/informativos.tsx

export interface Informativo {
  title: string;
  date: string;
  order: number; // Campo adicionado para controlar a prioridade de exibição
  path: string;
  pdfLink: string;
  summary: string;
}

export const ALL_INFORMATIVOS: Informativo[] = [
  {
    title: "1 - ALERTA ESTRATÉGICO: A Reforma Tributária é o NOVO IFRS",
    date: "2025-10-27", 
    order: 1,
    summary: "Comparação estratégica entre IFRS e Reforma Tributária. Entenda por que não cometer os mesmos erros custosos do passado é vital para advogados e empresários.",
    path: "/informativos/alerta-estrategico", 
    pdfLink: "/arquivos/1-alerta-estrategico.pdf", 
  },
  {
    title: "2 - Domine a Reforma Tributária Antes de 95% dos Profissionais",
    date: "2025-10-27",
    order: 2,
    summary: "Posicione-se como a autoridade técnica que famílias e empresas buscarão no período crítico de transição 2026-2033, garantindo seu futuro profissional.",
    path: "/informativos/prepare-se-agora", 
    pdfLink: "/arquivos/2-domine-reforma-tributaria.pdf", 
  },
  {
    title: "3 - ALERTA PATRIMONIAL: 4 Impostos que Mudam em 2026",
    date: "2025-10-27", 
    order: 3,
    summary: "Como assessorar famílias e empresas sobre os impactos patrimoniais da reforma. ITCMD com alíquotas progressivas (limite de 8%), IPVA, IPTU e IGF: proteja o patrimônio de seus clientes.",
    path: "/informativos/proteja-patrimonio", 
    pdfLink: "/arquivos/3-alerta-patrimonial.pdf", 
  },
  {
    title: "4 - Torne-se o Especialista Mais Buscado em 2026-2033",
    date: "2025-10-27", 
    order: 4,
    summary: "A Reforma Tributária criará uma nova elite de especialistas. Conheça as estratégias para advogados, contadores e empresários se posicionarem como a principal autoridade do mercado.",
    path: "/informativos/especialista-mais-buscado", 
    pdfLink: "/arquivos/4-especialista-mais-buscado.pdf", 
  },
  {
    title: "5 - Reforma Tributária: O Que Muda Para Seu Negócio e Patrimônio?",
    date: "2025-10-15", 
    order: 5, // Ordem mais baixa para ser listado depois dos novos
    summary: "Entenda os impactos da Reforma Tributária no patrimônio e nos negócios, e as principais mudanças que afetarão sua empresa e planejamento familiar.",
    path: "/informativos/o-que-muda", 
    pdfLink: "/arquivos/reforma-tributaria-o-que-muda.pdf", 
  },
  {
    title: "6 - Reforma Tributária: Uma Nova Era",
    date: "2025-10-15", 
    order: 6, // Ordem mais baixa
    summary: "As grandes oportunidades e desafios trazidos pela nova legislação tributária brasileira.",
    path: "/informativos/nova-era", 
    pdfLink: "/arquivos/reforma-tributaria-nova-era.pdf", 
  },
  {
    title: "7 - A verdade sobre quem paga mais impostos no Brasil",
    date: "2025-10-15", 
    order: 7, // Ordem mais baixa
    summary: "Uma análise aprofundada sobre a distribuição da carga tributária no país.",
    path: "/informativos/quem-paga-mais", 
    pdfLink: "/arquivos/a-verdade-sobre-quem-paga-mais-impostos-no-brasil.pdf", 
  },
];