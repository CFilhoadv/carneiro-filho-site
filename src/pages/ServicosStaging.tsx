import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ServicosStaging: React.FC = () => {
  const servicos = [
    { title: "Direito Civil", path: "/servicos" },
    { title: "Direito de Família e Sucessões", path: "/servicos" },
    { title: "Direito Previdenciário", path: "/servicos" },
    { title: "Direito do Trabalho", path: "/servicos" },
    { title: "Direito Empresarial", path: "/servicos" }
  ];

  return (
    <MainLayout>
      <section className="bg-gray-50 pt-10 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-widest">
            Serviços
          </h1>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 text-lg mb-12 text-center">
            Oferecemos assistência jurídica técnica e personalizada nas principais áreas do Direito, 
            com foco na clareza e na proteção dos interesses de nossos clientes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicos.map((item, index) => (
              <div key={index} className="p-6 border border-gray-100 bg-gray-50 rounded-sm">
                <h3 className="text-blue-900 font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Atendimento especializado e condução responsável de demandas consultivas e contenciosas.</p>
                <Link to={item.path} className="text-blue-900 text-xs font-bold uppercase tracking-widest border-b border-blue-900 pb-1">
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;