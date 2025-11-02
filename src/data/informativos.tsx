// src/data/informativos.tsx

export interface Informativo {
  title: string;
  date: string;
  order: number;
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
    pdfLink: "/arquivos/1-alerta-estrategico.pdf", // <-- CORREÇÃO FINAL APLICADA
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
  // Você pode adicionar seu 5º post aqui com order: 5.
];