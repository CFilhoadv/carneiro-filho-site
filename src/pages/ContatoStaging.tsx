import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContatoStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho Padronizado - Fundo Branco e Texto Azul Marinho */}
      <section className="bg-white pt-8 pb-8 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-widest">
            CONTATO
          </h1>
          <div className="h-1 w-16 bg-blue-900 mx-auto mt-2"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Coluna 1: Fluxo de Atendimento (Institucional) */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Atendimento Jurídico</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                O atendimento é realizado de forma organizada e técnica. Para garantir a qualidade e a viabilidade da assessoria, adotamos um fluxo de análise prévia de cada demanda.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 text-blue-900" size={20} />
                  Fluxo de Contato:
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li>Encaminhamento das informações iniciais via formulário de análise;</li>
                  <li>Avaliação técnica preliminar da demanda;</li>
                  <li>Agendamento do atendimento jurídico especializado.</li>
                </ol>
              </div>

              <div className="pt-4">
                <Link 
                  to="/analise-preliminar" 
                  className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors w-full text-center"
                >
                  Iniciar Análise Preliminar
                </Link>
              </div>
            </div>

            {/* Coluna 2: Canais e Localização */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Canais Diretos</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 text-blue-900" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Telefone e WhatsApp</p>
                    <a href="tel:+551142106194" className="text-gray-700 hover:text-blue-900 transition-colors">(11) 4210-6194</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-blue-900" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">E-mail</p>
                    <a href="mailto:contato@carneirofilho.com.br" className="text-gray-700 hover:text-blue-900 transition-colors">contato@carneirofilho.com.br</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-blue-900" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Endereço</p>
                    <p className="text-gray-700 leading-relaxed">
                      Av. Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                      Jardim Paulistano, São Paulo/SP<br />
                      CEP: 01452-001
                    </p>
                  </div>
                </div>
              </div>

              {/* Observação Ética Suave */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  <strong>Aviso:</strong> O envio de informações ou o contato por meio destes canais não estabelece relação cliente-advogado nem implica contratação automática de serviços.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoStaging;