import React from "react";

import fotoFrancisco from "../assets/images/advogado-principal-nova.jpg";
import logoCarneiroFilho from "../assets/images/Logo_horizontal.png";

const CartaoDigital: React.FC = () => {
  const whatsappPhone = "551531911432";

  const whatsappText = encodeURIComponent(
    "Olá! Vi seu cartão digital e gostaria de uma orientação inicial. Meu nome é:"
  );

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <section className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <header className="px-6 pt-8 text-center">
            <img
              src={logoCarneiroFilho}
              alt="Carneiro Filho Advocacia"
              className="mx-auto h-auto w-44"
              loading="eager"
            />

            <div className="mt-6 flex justify-center">
              <img
                src={fotoFrancisco}
                alt="Foto de Francisco de Assis Carneiro Filho"
                className="h-24 w-24 rounded-full object-cover ring-2 ring-slate-200"
                loading="eager"
              />
            </div>

            <h1 className="mt-6 text-xl font-semibold text-slate-900">
              Francisco de Assis Carneiro Filho
            </h1>

            <p className="mt-1 text-sm font-medium text-blue-700">
              Advogado e Consultor Empresarial
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Atendimento digital por WhatsApp, com orientação clara e condução técnica.
            </p>
          </header>

          <div className="px-6 pb-8 pt-6">
            <div className="space-y-3">
              {/* ATENDIMENTO RÁPIDO - FOCO 70% */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir WhatsApp para atendimento rápido"
                className="block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Atendimento rápido (WhatsApp)
              </a>

              {/* DIAGNÓSTICO - FOCO 20% */}
              <a
                href="https://carneirofilho.com.br/diagnostico-planejamento-sucessorio"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir diagnóstico de planejamento sucessório e proteção patrimonial"
                className="block w-full rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Diagnóstico — Planejamento Sucessório
              </a>

              {/* SERVIÇOS */}
              <a
                href="https://carneirofilho.com.br/servicos"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir página de serviços"
                className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Ver serviços
              </a>

              {/* PARCERIAS - FOCO 10% */}
              <a
                href="https://carneirofilho.com.br/parcerias"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir página de parcerias"
                className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Parcerias
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-center">
              <p className="text-xs text-slate-600">
                Base: Sorocaba (SP) • Atendimentos digitais em todo o Brasil
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Encaminhe este link para quem precisar: carneirofilho.com.br/cartao-digital
        </p>
      </section>
    </main>
  );
};

export default CartaoDigital;