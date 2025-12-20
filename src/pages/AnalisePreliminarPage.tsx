import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const AnalisePreliminarPage: React.FC = () => {
  // Função para lidar com o envio do formulário e redirecionar para o Calendly
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    window.location.href = "https://calendly.com/contato-carneirofilho"; // Redireciona para o link único
  };

  return (
    <MainLayout>
      <div className="relative">
        <Banner 
          subtitle="Fluxo de Atendimento Institucional" 
          title="Análise Preliminar da Demanda" 
          bgColor="bg-blue-900" 
        />

        <main className="py-16 px-4 max-w-4xl mx-auto">
          {/* TÍTULO E TEXTO EXPLICATIVO */}
          <div className="mb-10 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Análise Preliminar da Demanda</h1>
            <p className="mb-4 text-justify">
              Este espaço destina-se ao envio de informações iniciais para análise preliminar da demanda, com a finalidade de compreender, de forma geral, o contexto apresentado e verificar, em tese, a viabilidade jurídica do caso.
            </p>
          </div>

          {/* AVISO ÉTICO EM BLOCO DESTACADO */}
          <div className="mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <h2 className="text-lg font-bold text-amber-900 mb-3">Aviso Importante</h2>
            <p className="text-sm text-amber-900">
              O envio das informações por meio deste formulário não constitui contratação de serviços advocatícios, nos termos da Lei nº 8.906/94 e do Código de Ética e Disciplina da OAB.
            </p>
          </div>

          {/* FORMULÁRIO PERSONALIZADO COMPLETO COM ONSUBMIT IMPLEMENTADO */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white p-8 rounded-lg border border-gray-200 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome completo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nome completo *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none" 
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none" 
                />
              </div>

              {/* Cidade / Estado */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cidade / Estado *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none" 
                />
              </div>
            </div>

            {/* Natureza da demanda - LISTA SUSPENSA (SELECT) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Natureza da demanda *</label>
              <select 
                required 
                className="w-full p-3 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              >
                <option value="">Selecione uma opção...</option>
                <option value="Direito Civil">Direito Civil</option>
                <option value="Direito de Família">Direito de Família</option>
                <option value="Sucessões">Sucessões</option>
                <option value="Direito Empresarial">Direito Empresarial</option>
                <option value="Direito Tributário">Direito Tributário</option>
                <option value="Direito Previdenciário">Direito Previdenciário</option>
                <option value="Direito do Trabalho">Direito do Trabalho</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Breve descrição do caso - TEXTAREA */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Breve descrição do caso *</label>
              <textarea 
                required 
                rows={6} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                placeholder="Descreva aqui os pontos fundamentais da sua demanda..."
              ></textarea>
            </div>

            {/* BOTÃO DO FORMULÁRIO */}
            <div className="pt-4 text-center">
              <button 
                type="submit" 
                className="bg-blue-900 text-white px-12 py-4 rounded-md hover:bg-blue-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl active:transform active:scale-95"
              >
                👉 Prosseguir para agendamento
              </button>
            </div>
          </form>
        </main>
      </div>
    </MainLayout>
  );
};

export default AnalisePreliminarPage;