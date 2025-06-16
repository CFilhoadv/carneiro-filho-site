import React from 'react';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
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
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
          {subtitle && (
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{subtitle}</h2>
          )}
          {description && (
            <p className="text-base md:text-lg mb-6">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {buttonText && buttonLink && (
              <Link 
                to={buttonLink} 
                className="bg-white text-blue-900 hover:bg-blue-100 px-5 py-2 rounded-md font-medium transition-colors"
              >
                {buttonText}
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                to={secondaryButtonLink} 
                className="bg-blue-700 text-white hover:bg-blue-800 px-5 py-2 rounded-md font-medium transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
