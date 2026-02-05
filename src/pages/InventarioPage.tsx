import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import inventarioBanner from '../assets/images/inventario_banner.webp';
import { Phone, MessageCircle, FileText, Gavel, AlertCircle } from 'lucide-react';

const InventarioPage: React.FC = () => {
  // ATUALIZADO: Canal único VoIP e WhatsApp (15) 3191-1432
  const whatsappSorocaba = "https://api.whatsapp.com/send?phone=551531911432";

  return (
    <MainLayout>
      {/* Banner/Cabeçalho da Página */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={inventarioBanner}
          alt="Representação visual de documentos e procedimentos legais"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute z-10 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest drop-shadow-lg">
            Inventários
          </h1>
          <div className="h-1.5 w-20 bg-white mx-auto mt-4"></div>
        </div>
      </div>

      {/* Conteúdo Principal da Página */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <section className="mb-12">
          <div className="flex items-start gap-6 text-gray-700 text-lg leading-relaxed text-justify">
            <div className="hidden md:block p-4 bg-blue-50 rounded-full">
              <FileText className="text-blue-900" size={32} />
            </div>
            <div className="space-y-6">
              <p>
                O inventário é o procedimento destinado à identificação e partilha dos bens deixados por uma pessoa falecida. É o caminho legal para que os herdeiros assumam a propriedade oficial do patrimônio, garantindo a regularidade jurídica de imóveis, veículos e contas bancárias.
              </p>
              <p>
                No escritório <strong>Carneiro Filho Advocacia</strong>, priorizamos a agilidade e a clareza, orientando a família sobre a modalidade mais rápida e menos custosa para cada situação.
              </p>
            </div>
          </div>
        </section>

        {/* Informações Técnicas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-2 uppercase tracking-wide">Como o processo pode ser feito?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-sm border-t-4 border-blue-900 shadow-sm">
              <div className="flex items-center mb-4">
                <Gavel className="text-blue-900 mr-3" size={24} />
                <h3 className="text-xl font-bold text-blue-900">Inventário Judicial</h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Necessário quando há herdeiros menores, incapazes, testamento ou quando não há acordo entre os parentes. Tramita perante o juiz e exige um acompanhamento processual detalhado.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-sm border-t-4 border-green-600 shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Inventário em Cartório</h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                A via mais rápida (Extrajudicial). Possível quando todos os herdeiros são maiores, capazes e estão de acordo. Realizado por escritura pública, reduzindo drasticamente o tempo de espera.
              </p>
            </div>
          </div>
        </section>

        {/* Nota Técnica sobre Prazos */}
        <section className="mb-16 text-gray-700 text-base bg-amber-50 p-8 rounded-sm border-l-4 border-amber-500 shadow-sm">
          <div className="flex items-start">
            <AlertCircle className="text-amber-600 mr-4 shrink-0" size={24} />
            <p className="text-justify leading-relaxed italic">
              <strong>Atenção aos Prazos:</strong> A lei estabelece prazos para a abertura do inventário. O atraso pode gerar multas pesadas sobre o imposto ITCMD (Imposto de Transmissão). A análise imediata da documentação é o primeiro passo para evitar gastos desnecessários com tributos estaduais.
            </p>
          </div>
        </section>

        {/* Bloco de Contato Direto e Ação Ética */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-900 p-8 md:p-12 rounded-sm shadow-xl text-white">
          <div>
            <h3 className="text-2xl font-bold mb-4">Precisa de orientação imediata?</h3>
            <p className="text-blue-100 mb-8">
              Fale diretamente com o Dr. Francisco para entender o rito adequado ao seu caso e evitar multas por atraso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappSorocaba} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all">
                <MessageCircle size={18} className="mr-2" /> WhatsApp
              </a>
              <a href="tel:1531911432" className="flex items-center justify-center bg-white text-blue-900 px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all">
                <Phone size={18} className="mr-2" /> (15) 3191-1432
              </a>
            </div>
          </div>
          <div className="text-center md:border-l md:border-blue-800 md:pl-8">
            <p className="text-sm text-blue-200 mb-6 italic">
              Para uma análise documental estruturada, utilize nosso canal de envio de informações:
            </p>
            <Link
              to="/analise-preliminar"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-sm hover:bg-blue-600 transition-colors font-bold uppercase tracking-widest text-xs border border-blue-500 w-full"
            >
              Formulário de Análise Preliminar
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default InventarioPage;