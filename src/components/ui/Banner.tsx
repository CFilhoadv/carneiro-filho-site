import React from 'react';
// import { Link } from 'react-router-dom'; // Esta linha foi removida

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  buttonText?: string; // Estas propriedades não serão mais usadas para os botões aqui
  buttonLink?: string; // mas as mantenho na interface caso precise delas em outro lugar
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
  height?: string; // Adicionando a propriedade height
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  // Removi buttonText, buttonLink, secondaryButtonText, secondaryButtonLink das props desestruturadas
  // pois não serão mais usadas diretamente neste componente para renderizar os botões.
  bgColor = 'bg-blue-900',
  height = 'h-[220px]'
}) => {
  // Se não houver imagem de fundo, usar apenas o fundo azul
  const hasBgImage = backgroundImage && backgroundImage !== "";

  return (
    <div
      className={`relative ${height} ${hasBgImage ? 'bg-cover bg-center' : bgColor}`}
      style={hasBgImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={`absolute inset-0 ${hasBgImage ? 'bg-blue-900 bg-opacity-80' : ''} flex items-center justify-center`}>
        <div className="text-center text-white px-4 max-w-4xl">
          {/* O QUE ERA SUBTITLE VAI SER O TÍTULO PRINCIPAL (h1) */}
          {/* Usamos 'title' como o principal e 'subtitle' como o de apoio na próxima linha */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{subtitle}</h1> {/* O texto principal (ex: "Assessoria Jurídica...") */}
          
          {/* O QUE ERA TITLE VAI SER O SUBTÍTULO/FRASE DE APOIO (h2) */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-10">{title}</h2> {/* O texto de apoio (ex: "SEU DESAFIO...") */}
          
          {description && (
            <p className="text-base md:text-lg mb-6">{description}</p>
          )}
          {/* O bloco dos botões foi removido daqui */}
        </div>
      </div>
    </div>
  );
};

export default Banner;