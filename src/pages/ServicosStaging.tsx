import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { 
  MessageCircle, Landmark, ShieldCheck, 
  ChevronRight, Scale, FileText, 
  HeartHandshake, Gavel, Building2, Briefcase 
} from 'lucide-react';

const ServicosStaging: React.FC = () => {
  const whatsappLink = "https://wa.me/551531911432";

  const servicos = [
    {
      titulo: "Direito de Família e Sucessões",
      descricao: "Resolução técnica de conflitos familiares e organização sucessória com foco em segurança jurídica e preservação de direitos.",
      itens: ["Inventários e Partilhas", "Divórcios e União Estável", "Pensão Alimentícia", "Guarda e Convivência"],
      icon: <HeartHandshake size={36} />,
    },
    {
      titulo: "Direito Previdenciário (INSS)",
      descricao: "Condução administrativa e judicial para obtenção, manutenção e revisão de benefícios previdenciários.",
      itens: ["Aposentadorias e Revisões", "BPC/LOAS", "Auxílio-Doença", "Pensão por Morte"],
      icon: <Landmark size={36} />,
    },
    {
      titulo: "Direito Civil e Consumidor",
      descricao: "Proteção de direitos patrimoniais, indenizações e defesa técnica em relações contratuais e de consumo.",
      itens: ["Cobranças e Negativações", "Danos Morais", "Ações Bancárias", "Rescisão Contratual"],
      icon: <Gavel size={36} />,
    },
    {
      titulo: "Direito Imobiliário",
      descricao: "Regularização jurídica, proteção de posse e assessoria técnica em negócios e contratos imobiliários.",
      itens: ["Usucapião e Escrituras", "Contratos de Compra e Venda", "Registro de Imóveis", "Distratos"],
      icon: <Building2 size={36} />,
    },
    {
      titulo: "Direito do Trabalho",
      descricao: "Atuação estratégica tanto na defesa do trabalhador quanto na assessoria de empresas, com foco em prevenção e eficiência técnica.",
      itens: ["Reclamações e Verbas Rescisórias", "Vínculo e Horas Extras", "Defesa e Consultoria Empresarial", "Análise de Passivo Trabalhista"],
      icon: <Briefcase size={36} />,
    }
  ];

  return (
    <MainLayout>
      {/* TÍTULO DA PÁGINA */}
      <section className="bg-white pt-16 pb-12 text-center">
        <div className="container mx-auto px-4">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">Expertise Técnica</span>
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-widest mt-2">Áreas de Atuação</h1>
          <div className="h-1.5 w-20 bg-blue-900 mx-auto mt-6"></div>
        </div>
      </section>

      {/* GRADE DE CARDS */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s, idx) => (
              <div key={idx} className="flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-8 flex-grow">
                  <div className="text-blue-900 mb-6">{s.icon}</div>
                  <h2 className="font-bold text-gray-900 uppercase text-xl mb-4 leading-tight">{s.titulo}</h2>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{s.descricao}</p>
                  <ul className="space-y-3">
                    {s.itens.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-600 text-white py-4 font-bold uppercase text-xs tracking-[0.1em] hover:bg-green-700 transition-colors rounded-sm shadow-sm">
                    <MessageCircle size={18} className="mr-2" /> Solicitar orientação inicial
                  </a>
                </div>
              </div>
            ))}

            {/* CARD ESPECIAL - PLANEJAMENTO SUCESSÓRIO (20%) */}
            <div className="flex flex-col bg-blue-900 border border-blue-900 rounded-sm shadow-xl overflow-hidden text-white">
              <div className="p-8 flex-grow">
                <div className="text-blue-200 mb-6"><ShieldCheck size={36} /></div>
                <h2 className="font-bold text-white uppercase text-xl mb-4 leading-tight">Planejamento Patrimonial e Sucessório</h2>
                <p className="text-blue-100 text-base mb-6 leading-relaxed">Organização preventiva estratégica para proteção de ativos e sucessão familiar ou empresarial.</p>
                <ul className="space-y-3">
                  <li className="text-sm text-blue-200 flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Holding Familiar</li>
                  <li className="text-sm text-blue-200 flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Doações e Usufruto</li>
                  <li className="text-sm text-blue-200 flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Proteção de Ativos</li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link to="/planejamento-sucessorio" className="flex items-center justify-center w-full bg-white text-blue-900 py-4 font-bold uppercase text-xs tracking-[0.1em] hover:bg-blue-50 transition-colors rounded-sm shadow-sm">
                  Agendar reunião estratégica <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* NOTA DE RODAPÉ */}
          <div className="mt-16 text-center border-t border-gray-100 pt-10">
            <p className="text-gray-400 text-xs uppercase tracking-widest italic font-medium">
              Atendimento inicial por canais digitais para análise técnica e direcionamento.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosStaging;