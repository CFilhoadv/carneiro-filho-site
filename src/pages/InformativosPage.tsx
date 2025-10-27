// src/pages/InformativosPage.tsx (Versão CORRIGIDA para caminhos de importação)

import React, { useMemo } from 'react';
import MainLayout from '../components/layout/MainLayout';
// CORREÇÃO AQUI: Importa a lista de dados, especificando o nome do arquivo .tsx
import { ALL_INFORMATIVOS } from '../data/informativos.tsx'; 
import { Link } from 'react-router-dom';

const InformativosPage: React.FC = () => {

  // A LÓGICA AGORA ORDENA PELO CAMPO 'order' (número) DE FORMA DECRESCENTE
  const latestPosts = useMemo(() => {
    return ALL_INFORMATIVOS
      .slice() // Cria uma cópia para ordenar sem alterar o array original
      // Ordena por ordem decrescente (order 4, 3, 2, 1...)
      .sort((a, b) => b.order - a.order) 
      .slice(0, 5); // Limita a exibição aos 5 posts mais recentes
  }, []);

  // Função para formatar a data de YYYY-MM-DD para DD/MM/YYYY
  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">Informativos e Publicações</h1>
        <p className="text-center text-gray-600 mb-10">
          Confira os 5 artigos e análises mais recentes sobre planejamento patrimonial e questões fiscais.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {latestPosts.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-800 transition duration-300 ease-in-out hover:shadow-xl"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {item.title.substring(4)} {/* Remove a numeração "1 - " no display */}
              </h2>
              {/* Data de Publicação */}
              <p className="text-sm text-blue-600 font-medium mb-3">
                Publicado em: {formatDate(item.date)}
              </p>
              
              {/* Descrição/Resumo */}
              <p className="text-gray-700 mb-4">
                {item.summary}
              </p>

              <div className="flex space-x-4">
                {/* Link para a Página de Conteúdo (que você tem em pages) */}
                <Link
                  to={item.path}
                  className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Ler na íntegra (Web)
                </Link>

                {/* Link Direto para o PDF */}
                <a
                  href={item.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-blue-900 text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Baixar PDF
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Se houver mais de 5 posts, mostramos um aviso */}
        {ALL_INFORMATIVOS.length > 5 && (
          <p className="text-center text-gray-500 mt-8">
            Exibindo os 5 informativos mais recentes de um total de {ALL_INFORMATIVOS.length}.
          </p>
        )}
      </div>
    </MainLayout>
  );
};

export default InformativosPage;