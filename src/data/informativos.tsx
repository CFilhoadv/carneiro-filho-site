// src/data/informativos.tsx

export interface Informativo {
  title: string;
  date: string; // Mantido para exibição, mas não usado para ordenar se 'order' existir
  order: number; // Campo adicionado para controlar a prioridade de exibição
  path: string;
  pdfLink: string;
  summary: string;
}

export const ALL_INFORMATIVOS: Informativo[] = [
  {
    title: "1 - A Reforma Tributária é o NOVO IFRS - Quem Adiou Pagou 3x Mais",
    date: "2024-10-27", // Data de publicação
    order: 1,
    summary: "Comparação estratégica entre IFRS e Reforma Tributária - não cometa os mesmos erros custosos do passado.",
    path: "/informativos/reforma-tributaria-novo-ifrs",
    pdfLink: "/arquivos/1 - A Reforma Tributária é o NOVO IFRS - Quem Adiou Pagou 3x Mais.pdf", // NOME DE ARQUIVO AJUSTADO
  },
  {
    title: "2 - Domine a Reforma Tributária Antes de 95% dos Profissionais",
    date: "2024-10-27", // Data de publicação
    order: 2,
    summary: "Posicione-se como a autoridade técnica que todas as empresas buscarão no período crítico 2026-2033.",
    path: "/informativos/domine-reforma-tributaria",
    pdfLink: "/arquivos/2 - Domine a Reforma Tributária Antes de 95% dos Profissionais.pdf", // NOME DE ARQUIVO AJUSTADO
  },
  {
    title: "3 - Proteja o Patrimônio Familiar - ITCMD a 20% e Novas Regras",
    date: "2024-10-27", // Data de publicação
    order: 3,
    summary: "Como assessorar famílias e empresas sobre os impactos patrimoniais da reforma: ITCMD, IPVA, IPTU e IGF.",
    path: "/informativos/proteja-patrimonio-familiar",
    pdfLink: "/arquivos/3 - Proteja o Patrimônio de Seus Clientes - ITCMD a 20% e Novas Regras.pdf", // NOME DE ARQUIVO AJUSTADO
  },
  {
    title: "4 - Torne-se o Especialista Mais Buscado em 2026-2033",
    date: "2024-10-27", // Data de publicação
    order: 4,
    summary: "A Reforma Tributária criará uma nova elite de especialistas. Saiba como se posicionar como autoridade.",
    path: "/informativos/especialista-mais-buscado", 
    pdfLink: "/arquivos/4- Torne-se o Especialista Mais Buscado em 2026-2033.pdf", // NOME DE ARQUIVO AJUSTADO
  },
  // Você pode adicionar seu 5º post aqui com order: 5.
];