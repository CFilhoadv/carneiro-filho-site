import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// IMPORTAÇÃO DAS PUBLICAÇÕES PARA A PÁGINA DE MÍDIA
const midiaPublications = [
  {
    title: "Reforma Tributária: Uma Nova Era de Oportunidades",
    path: "/arquivos/reforma-tributaria-nova-era.pdf"
  },
  {
    title: "Reforma Tributária: O Que Muda Para Seu Negócio e Patrimônio?",
    path: "/arquivos/reforma-tributaria-o-que-muda.pdf"
  },
  {
    title: "A verdade sobre quem paga mais impostos no Brasil",
    path: "/arquivos/A-verdade-sobre-quem-paga-mais-impostos-no-Brasil.pdf"
  },
  // Adicione novas publicações aqui em cima.
];

const MidiaPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">CFilho em Mídia</h1>
        <p className="text-center text-gray-600 mb-8">
          Acesse a biblioteca completa de publicações, artigos e documentos.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            {/* Renderiza TODAS as publicações em ordem cronológica (da mais recente para a mais antiga) */}
            {midiaPublications.slice().reverse().map((item, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg block"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default MidiaPage;