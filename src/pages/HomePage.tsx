import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

// Importar imagens
import planejamentoSucessorio from '../assets/images/planejamento_sucessorio.png';
import cursos from '../assets/images/cursos.png';
import informativos from '../assets/images/informativos.png';
import midia from '../assets/images/midia.png';

import banner_advocacia_1 from '../assets/images/banner_advocacia_1.png';
import banner_advocacia_2 from '../assets/images/banner_advocacia_2.png';

const HomePage: React.FC = () => {
  // Estado para controlar o slide atual do banner
  const [currentSlide, setCurrentSlide] = React.useState(0); // Iniciar com o slide da ASSESSORIA JURÍDICA
  
  // Array de banners para o carrossel
  const banners = [
    {
      image: banner_advocacia_1,
      // INVERTIDO: subtitle para h1, title para h2
      subtitle: "LEGADO SEGURO, FUTURO TRANQUILO",
      title: "Planejamento Sucessório Estratégico com Foco em Holding Familiar.",
      description: "",
      // ATENÇÃO: ESTAS PROPRIEDADES DE BOTÃO DEVEM ESTAR COMENTADAS OU REMOVIDAS
      // buttonText: "Saiba Mais",
      // buttonLink: "/planejamento-sucessorio",
      // secondaryButtonText: "Agendar Consulta",
      // secondaryButtonText: "/contato"
    },
    {
      image: banner_advocacia_2,
      // INVERTIDO: subtitle para h1, title para h2
      subtitle: "SEU DESAFIO, NOSSA SOLUÇÃO",
      title: "Assessoria Jurídica Abrangente para Pessoas e Empresas.",
      description: "",
      // ATENÇÃO: ESTAS PROPRIEDADES DE BOTÃO DEVEM ESTAR COMENTADAS OU REMOVIDAS
      // buttonText: "Nossos Serviços",
      // buttonLink: "/servicos",
      // secondaryButtonText: "Agendar Consulta",
      // secondaryButtonText: "/contato"
    }
  ];

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Efeito para alternar os slides automaticamente
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      {/* Banner Carrossel */}
      <div className="relative">
        <Banner 
          subtitle={banners[currentSlide].subtitle} // Passa para o H1
          title={banners[currentSlide].title} // Passa para o H2
          description={banners[currentSlide].description}
          backgroundImage={banners[currentSlide].image}
          // As propriedades de botão NÃO DEVEM SER PASSADAS, POIS O BANNER NÃO AS UTILIZA
          // buttonText={banners[currentSlide].buttonText}
          // buttonLink={banners[currentSlide].buttonLink}
          // secondaryButtonText={banners[currentSlide].secondaryButtonText}
          // secondaryButtonLink={banners[currentSlide].secondaryButtonText}
          bgColor="bg-blue-900"
          height="h-[450px]" // Reduzindo a altura do banner carrossel para 450px
        />
        
        {/* Controles do carrossel */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          aria-label="Próximo slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicadores de slide */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Título da seção de serviços */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Soluções jurídicas e estratégicas com resultados eficazes
          </h2>
          
          {/* Cards de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Planejamento Sucessório Familiar e Patrimonial */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={planejamentoSucessorio} 
                alt="Planejamento Sucessório" 
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Planejamento Sucessório Familiar e Patrimonial
                </h3>
                <div className="space-y-1">
                  <a href="https://altftect.manus.space/holding_familiar_modal.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Holding Familiar
                  </a>
                  <a href="https://altftect.manus.space/doacoes_modal.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Doação com Usufruto
                  </a>
                  <a href="https://altftect.manus.space/inventarios_modal.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Inventários
                  </a>
                  <a href="https://altftect.manus.space/testamentos_modal.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Testamentos
                  </a>
                  <a href="https://altftect.manus.space/administradora_bens_imoveis_modal.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Administradoras de Bens Próprios
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Cursos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={cursos} 
                alt="Cursos" 
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Cursos
                </h3>
                <div className="space-y-1">
                  <Link to="/cursos" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Domine a Reforma Tributária
                  </Link>
                  <Link to="/cursos" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Holding Familiar na Prática
                  </Link>
                  <Link to="/cursos" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Planejamento Sucessório Avançado
                  </Link>
                  <Link 
                    to="/cursos" 
                    className="inline-block bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-800 transition-colors mt-2"
                  >
                    Ver todos os cursos
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Informativos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={informativos} 
                alt="Informativos" 
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Informativos
                </h3>
                <div className="space-y-1">
                  {/* LINK PARA A PUBLICAÇÃO 1 */}
                  <Link to="/informativos/reforma-tributaria-parte-1" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Impactos da Reforma Tributária: Parte 1
                  </Link>
                  {/* LINK PARA A PUBLICAÇÃO 2 - TÍTULO ATUALIZADO */}
                  <Link to="/informativos/reforma-tributaria-parte-2" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Reforma Tributária: Impactos e Ações Estratégicas - Parte 2
                  </Link>
                  {/* NOVO: LINK PARA A PUBLICAÇÃO 3 - TÍTULO ATUALIZADO */}
                  <Link to="/informativos/holding-familiar-reforma-tributaria" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Holding Familiar e a Reforma Tributária: Impactos e Estratégias
                  </Link>
                  {/* BOTÃO "Ver todos os informativos" OCULTADO TOTALMENTE */}
                  {/* Este espaço deve ficar em branco */}
                </div>
              </div>
            </div>

            {/* Card 4: CFilho em Mídia - OCULTANDO LINKS DE MÍDIA */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={midia} 
                alt="CFilho em Mídia" 
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  CFilho em Mídia
                </h3>
                <div className="space-y-1">
                  {/* LINKS DE MÍDIA REMOVIDOS TEMPORARIAMENTE: */}
                  {/* <Link to="/midia" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Entrevista sobre Reforma Tributária
                  </Link>
                  <Link to="/midia" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Palestra: Sucessão Familiar
                  </Link>
                  <Link to="/midia" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Debate: Holding Familiar
                  </Link> */}
                  {/* BOTÃO "EM BREVE" PARA MÍDIA */}
                  <button 
                    disabled
                    className="inline-block bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium cursor-not-allowed mt-2"
                  >
                    Em Breve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Proteja seu patrimônio e garanta o futuro da sua família
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Entre em contato para uma consultoria personalizada e descubra a melhor estratégia para seu planejamento sucessório.
          </p>
          {/* ATENÇÃO: LINK "AGENDAR UMA CONSULTA" DIRECIONANDO PARA O CALENDLY */}
          <a // Alterado de <Link> para <a>
            href="https://calendly.com/contato-carneirofilho/30min" // URL do Calendly
            target="_blank" // Abre em nova aba
            rel="noopener noreferrer" // Prática de segurança para target="_blank"
            className="inline-block bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-md font-medium text-base transition-colors"
          >
            Agendar Atendimento {/* Alterado texto do botão */}
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;