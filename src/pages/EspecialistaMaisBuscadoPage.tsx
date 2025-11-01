import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

// 1. NOME DO COMPONENTE ALTERADO
const EspecialistaMaisBuscadoPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">

        {/* 2. TÍTULOS DO BANNER ALTERADOS */}
        <Banner
          subtitle="Informativo" // Título principal
          title="Torne-se o Especialista Mais Buscado em 2026-2033" // Subtítulo
          bgColor="bg-blue-900" // Fundo azul
        />

        {/* 3. CONTEÚDO DO ARTIGO (MODELO) */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre este Informativo</h2>
          
          <p className="mb-6">
            [Esta é a página de conteúdo para o informativo "Torne-se o Especialista Mais Buscado". 
            Você pode, no futuro, editar este arquivo para adicionar o texto completo do artigo, 
            imagens e outros elementos que desejar.]
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Acesse o Documento Original</h3>
          <p className="mb-6">
            Para ler o informativo completo em PDF, clique no link abaixo:
          </p>

          {/* 4. LINK PARA O PDF CORRETO (na pasta /public/arquivos) */}
          <a 
            href="/arquivos/4- Torne-se o Especialista Mais Buscado em 2026-2033.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            Baixar PDF: Torne-se o Especialista Mais Buscado em 2026-2033.pdf
          </a>

        </section>
      </div>
    </MainLayout>
  );
};

// 5. EXPORT ALTERADO
export default EspecialistaMaisBuscadoPage;