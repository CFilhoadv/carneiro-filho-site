import React, { useMemo, useState } from "react";
import MainLayout from '../components/layout/MainLayout';

// Função para codificar os dados do formulário para o Netlify
function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""))
    .join("&");
}

const DiagnosticoSucessorioPage: React.FC = () => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  
  const calendlyUrl = useMemo(
    () => "https://calendly.com/contato-carneirofilho/reuniao-de-diagnostico-planejamento-sucessorio",
    []
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify precisa do form-name no payload
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });
    payload["form-name"] = "diagnostico-sucessorio";

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(payload),
      });

      if (!res.ok) throw new Error("Falha no envio do formulário.");
      
      setEnviado(true);
      setEnviando(false);
      
      // Mensagem + rolagem para agendamento
      setTimeout(() => {
        const el = document.getElementById("agendamento");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      
      form.reset();
    } catch {
      setEnviando(false);
      setErro("Não foi possível enviar o diagnóstico. Tente novamente.");
    }
  }

  return (
    <MainLayout>
      {/* Bloco 1 — Hero */}
      <header className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnóstico de Planejamento Sucessório
          </h1>
          <p className="text-lg opacity-90 mb-8">
            O processo consiste em duas etapas: o envio das informações e a reunião de entrega do diagnóstico.
          </p>
          <div className="mt-10">
            <a
              href="#diagnostico"
              className="inline-block bg-white text-[#003366] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Iniciar Passo 1: Diagnóstico
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Bloco 4 — Passo 1: Formulário */}
        <section id="diagnostico" className={`mb-16 p-8 rounded-lg border-2 ${enviado ? 'border-green-200 bg-green-50' : 'border-gray-100 bg-gray-50'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#003366] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">1</span>
            <h2 className="text-3xl font-bold text-[#003366]">Passo 1: Envio de Dados</h2>
          </div>
          
          {enviado ? (
            <div className="text-center py-8">
              <p className="text-green-700 font-bold text-xl mb-2">✅ Dados enviados com sucesso!</p>
              <p className="text-gray-700">Agora, complete o processo agendando sua reunião no Passo 2 abaixo.</p>
            </div>
          ) : (
            <form
              name="diagnostico-sucessorio"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="diagnostico-sucessorio" />
              <div>
                <label className="block font-medium mb-1">Nome completo (obrigatório)</label>
                <input type="text" name="nome" required className="w-full p-3 border rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-1">E-mail (obrigatório)</label>
                  <input type="email" name="email" required className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block font-medium mb-1">WhatsApp (obrigatório)</label>
                  <input type="text" name="whatsapp" required className="w-full p-3 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Cidade/UF (obrigatório)</label>
                <input type="text" name="cidade_uf" required className="w-full p-3 border rounded-md" placeholder="Ex.: Sorocaba/SP" />
              </div>
              <div>
                <label className="block font-medium mb-1">Prioridade principal (obrigatório)</label>
                <select name="prioridade" required className="w-full p-3 border rounded-md">
                  <option value="">Selecione...</option>
                  <option value="inventario">Evitar inventário e reduzir conflitos</option>
                  <option value="protecao">Proteger patrimônio contra riscos (divórcio/credores)</option>
                  <option value="sucessao">Organizar sucessão de empresa e/ou imóveis</option>
                  <option value="tributario">Eficiência tributária (reduzir custos e impostos dentro da legalidade)</option>
                  <option value="orientacao">Quero orientação inicial</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Breve contexto (opcional)</label>
                <textarea
                  name="contexto"
                  rows={4}
                  className="w-full p-3 border rounded-md"
                  placeholder="Conte sua situação..."
                />
              </div>
              
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-[#003366] text-white py-4 rounded-md font-bold text-lg hover:bg-[#004477] disabled:opacity-70"
              >
                {enviando ? "Enviando..." : "Enviar e escolher horário da reunião"}
              </button>
              {erro && <p className="text-red-700 font-medium">{erro}</p>}
            </form>
          )}
        </section>

        {/* Bloco 5 — Passo 2: Calendly (Bloqueado até envio) */}
        <section id="agendamento" className={`mb-16 p-8 rounded-lg border-2 ${enviado ? 'border-[#003366] bg-white' : 'border-gray-100 opacity-50 pointer-events-none'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#003366] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">2</span>
            <h2 className="text-3xl font-bold text-[#003366]">Passo 2: Agendamento da Entrega</h2>
          </div>
          <p className="mb-6 text-gray-700">
            Para receber a devolutiva técnica do seu diagnóstico, escolha o melhor horário para nossa reunião de 30 minutos.
          </p>
          <div className="min-h-[700px] w-full">
            <iframe src={calendlyUrl} width="100%" height="700" frameBorder="0" title="Calendly" />
          </div>
        </section>
      </main>

      {/* Bloco 7 — Rodapé técnico */}
      <footer className="bg-[#003366] text-white py-10 px-4 text-center text-sm">
        <p className="max-w-2xl mx-auto mb-4">
          Este diagnóstico inicial não substitui consulta jurídica completa nem constitui parecer. A
          recomendação final depende de documentos e validações técnicas. As informações fornecidas
          são tratadas com confidencialidade.
        </p>
        <p className="opacity-70">&copy; 2026 Carneiro Filho Advocacia. Todos os direitos reservados.</p>
      </footer>
    </MainLayout>
  );
};

export default DiagnosticoSucessorioPage;