import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

// **** NOVAS REFERÊNCIAS PARA IMAGENS NA PASTA SRC/ASSETS ****
import bannerFamilia from '../assets/images/banner_família.webp';
import bannerEmpresarial from '../assets/images/banner_empresarial.webp';
// ************************************************************

// IMPORTS CORRIGIDOS PARA AS IMAGENS .WEBP E REMOÇÃO DE .PNG
import planejamentoSucessorio from '../assets/images/planejamento_sucessorio.webp'; 
import cursos from '../assets/images/cursos.webp'; 
import informativos from '../assets/images/informativos.webp'; 
import midia from '../assets/images/midia.webp'; 

// NOVO ARRAY DE PUBLICAÇÕES PARA A SEÇÃO "CFilho em Mídia"
// Adicione novas publicações aqui. O sistema pegará automaticamente as 3 últimas.
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


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
    
  // Array de banners para o carrossel - IMAGENS E TEXTOS ATUALIZADOS
  const banners = [
    {
      image: bannerFamilia, // Banner 1: Planejamento Sucessório (família)
      subtitle: "LEGADO SEGURO, FUTURO TRANQUILO",
      title: "Planejamento Sucessório Estratégico com Foco em Holding Familiar.",
      description: "",
    },
    {
      image: bannerEmpresarial, // Banner 2: Direito Empresarial (gráfico)
      subtitle: "SEU NEGÓCIO, NOSSA ESTRATÉGIA",   
      title: "Assessoria Jurídica Estratégica para o Crescimento da sua Empresa.",   
      description: "",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

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
          subtitle={banners[currentSlide].subtitle}
          title={banners[currentSlide].title}
          description={banners[currentSlide].description}
          backgroundImage={banners[currentSlide].image}
          height="h-[450px]"
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
                  {/* LINKS CORRIGIDOS PARA APONTAR PARA AS PÁGINAS INTERNAS */}
                  <Link to="/holding-familiar" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Holding Familiar
                  </Link>
                  <Link to="/doacao-com-usufruto" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Doação com Usufruto
                  </Link>
                  <Link to="/inventarios" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Inventários
                  </Link>
                  <Link to="/testamentos" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Testamentos
                  </Link>
                  <Link to="/administradoras-de-bens-proprios" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Administradoras de Bens Próprios
                  </Link>
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

            {/* Card 4: CFilho em Mídia */}
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
                  {/* Renderiza as 3 últimas publicações do array */}
                  {midiaPublications.slice(-3).reverse().map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {item.title}
                    </a>
                  ))}
                  {/* Adiciona o link para a página de mídia se houver mais de 3 publicações */}
                  {midiaPublications.length > 3 && (
                    <Link
                      to="/midia"
                      className="inline-block bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-800 transition-colors mt-2"
                    >
                      Ver todos os conteúdos
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-12 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Proteja seu patrimônio e garanta o futuro da sua família
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Entre em contato para uma consultoria personalizada e descubra a melhor estratégia para seu planejamento sucessório.
          </p>
          {/* ATENÇÃO: LINK "AGENDAR UMA CONSULTA" DIRECIONANDO PARA O CALENDLY */}
          <a
            href="https://calendly.com/contato-carneirofilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-md font-medium text-base transition-colors"
          >
            Agendar Atendimento
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;