import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

const AnalisePreliminarPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://calendly.com/contato-carneirofilho";
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
          <div className="mb-10 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              Análise Preliminar da Demanda
            </h1>
            <p className="mb-4 text-justify text-lg">
              Para oferecermos um atendimento especializado, solicitamos o preenchimento das informações abaixo. 
              Esta etapa nos permite compreender o contexto do seu caso e verificar a viabilidade jurídica inicial.
            </p>
          </div>

          <div className="mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <h2 className="text-lg font-bold text-amber-900 mb-3">
              Aviso Importante
            </h2>
            <p className="text-sm text-amber-900">
              O envio das informações por meio deste formulário não constitui contratação de serviços
              advocatícios, nem gera obrigação de resposta, nos termos da Lei nº 8.906/94 e do
              Código de Ética e Disciplina da OAB.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg border border-gray-200 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  className="w-full p-3 border border-gray-300 rounded
                             focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  E-mail de contato *
                </label>
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  required
                  className="w-full p-3 border border-gray-300 rounded
                             focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full p-3 border border-gray-300 rounded
                             focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Cidade / Estado *
                </label>
                <input
                  type="text"
                  placeholder="Ex: São Paulo / SP"
                  required
                  className="w-full p-3 border border-gray-300 rounded
                             focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Área de interesse da demanda *
              </label>
              <select
                required
                className="w-full p-3 border border-gray-300 rounded bg-white
                           focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              >
                <option value="">Selecione a área...</option>
                <option value="Direito Civil">Direito Civil</option>
                <option value="Direito de Família">Direito de Família</option>
                <option value="Sucessões">Sucessões (Inventário/Herança)</option>
                <option value="Direito Empresarial">Direito Empresarial</option>
                <option value="Direito Tributário">Direito Tributário</option>
                <option value="Direito Previdenciário">Direito Previdenciário</option>
                <option value="Direito do Trabalho">Direito do Trabalho</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Resumo da sua necessidade *
              </label>
              <textarea
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded
                           focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                placeholder="Por favor, descreva brevemente o que ocorreu para que possamos nos preparar para o agendamento."
              />
            </div>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
              <p className="text-sm text-blue-900 font-medium">
                <span className="block mb-1 font-bold">Próxima Etapa: Agendamento</span>
                Ao clicar no botão abaixo, você será levado ao nosso calendário para escolher o horário e confirmar clicando em 
                <span className="bg-blue-900 text-white px-2 py-0.5 rounded text-xs mx-1">Schedule Event</span>.
              </p>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-12 py-4 rounded-md
                           hover:bg-blue-800 transition-all font-bold text-lg
                           shadow-lg hover:shadow-xl active:transform active:scale-95 w-full md:w-auto"
              >
                👉 Prosseguir para agendamento
              </button>
            </div>

            {/* OBSERVAÇÃO – SUPORTE VIA WHATSAPP (CORRIGIDO COM LINK EXTERNO PARA O ÍCONE) */}
            <div className="pt-4 text-sm text-gray-600 text-center">
              <p className="mb-2">
                Observação: caso encontre alguma dificuldade técnica para concluir o agendamento,
                clique no ícone do <strong>WhatsApp</strong> abaixo e teremos prazer em orientar.
              </p>

              <a
                href="https://wa.me/551142106194"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
                className="inline-flex justify-center"
              >
                {/* Usando imagem oficial do WhatsApp via link direto */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </form>
        </main>
      </div>
    </MainLayout>
  );
};

export default AnalisePreliminarPage;