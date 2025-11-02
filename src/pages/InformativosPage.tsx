// src/pages/InformativosPage.tsx

import React, { useMemo } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { ALL_INFORMATIVOS } from '../data/informativos.tsx'; 
import { Link } from 'react-router-dom';

const InformativosPage: React.FC = () => {

  // LÓGICA AGORA ORDENA PELO CAMPO 'order' (número) DE FORMA DECRESCENTE E MOSTRA TUDO
  const sortedInformativos = useMemo(() => {
    return ALL_INFORMATIVOS
      .slice() // Cria uma cópia
      // Ordena do mais novo para o mais antigo (order maior = mais recente, então b - a)
      .sort((a, b) => b.order - a.order); 
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
          Confira os nossos artigos e análises mais recentes sobre questões tributárias e planejamento.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Renderiza TODOS os posts ordenados */}
          {sortedInformativos.map((item, index) => (
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
                {/* O LINK "LER NA ÍNTEGRA (WEB)" FOI REMOVIDO PARA EVITAR A PÁGINA EM BRANCO */}

                {/* Link Direto para o PDF (MANTIDO) */}
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
        
        {/* O AVISO DE LIMITE DE POSTS FOI REMOVIDO, POIS ESTAMOS EXIBINDO TODOS */}
      </div>
    </MainLayout>
  );
};

export default InformativosPage;