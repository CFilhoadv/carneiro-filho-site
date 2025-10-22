import React from 'react';
import MainLayout from '../components/layout/MainLayout';
// A importação do Link não é mais necessária, pois o foco é o formulário, mas a manterei por precaução caso você queira usá-lo no futuro.
// import { Link } from 'react-router-dom'; 

const CursosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative container mx-auto px-4 font-inter">

        {/* INÍCIO: CABEÇALHO DA PÁGINA (HERO SECTION) - FOCO TOTAL NA CAPTURA */}
        <section className="text-center py-16 px-4 bg-blue-950 rounded-b-xl text-white shadow-2xl">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-yellow-400">
            ALERTA: A Reforma Tributária Muda Tudo em 2025. Sua Janela de Ação Está Se Fechando.
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto mb-10">
            A transição começa agora. Quem se preparar terá uma vantagem competitiva irreversível. Cadastre-se abaixo para receber informações exclusivas sobre o curso definitivo e garantir condições de lançamento com desconto.
          </h2>
          
          {/* FORMULÁRIO DE CAPTURA - CONVERTKIT HTML NATIVO (ADAPTADO COM CAMPO NOME) */}
          <div className="bg-white p-6 rounded-lg shadow-2xl mx-auto max-w-md">
            <form action="https://app.convertkit.com/forms/dcca91f77e/subscriptions" method="post" className="seva-form flex flex-col items-center space-y-4">
              <div className="seva-fields w-full space-y-3">
                {/* Campo Nome Completo */}
                <div className="seva-field w-full">
                  <input 
                    type="text" 
                    name="fields[first_name]" // Nome padrão do ConvertKit para o campo Nome
                    placeholder="Nome Completo" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg"
                  />
                </div>
                {/* Campo E-mail Principal */}
                <div className="seva-field w-full">
                  <input 
                    type="email" 
                    name="email_address" 
                    placeholder="E-mail Principal" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg"
                  />
                </div>
                {/* Botão CTA */}
                <button 
                  type="submit"
                  className="w-full mt-4 inline-block rounded-md bg-green-500 px-8 py-3 text-xl font-bold text-white transition duration-300 hover:bg-green-600 shadow-xl"
                >
                  QUERO RECEBER AS INFORMAÇÕES
                </button>
              </div>
            </form>
            {/* Selo de Urgência */}
            <p className="mt-4 text-red-600 text-sm italic">
              *Vagas com condição especial de lançamento são limitadas.
            </p>
          </div>
        </section>
        {/* FIM: CABEÇALHO DA PÁGINA (HERO SECTION) */}


        {/* SEÇÃO DE DIFERENCIAIS */}
        <section className="py-12 px-4 text-center bg-gray-50 text-gray-900">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">
            O Que Você Vai Aprender no Curso Definitivo?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-xl leading-relaxed">
            <div className="p-4 border-l-4 border-blue-600 bg-white shadow-md text-left">
              <h4 className="font-semibold text-blue-950 mb-1">Fundamentos Sólidos:</h4>
              <p className="text-gray-700">Entenda da teoria à implementação real da reforma.</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-white shadow-md text-left">
              <h4 className="font-semibold text-blue-950 mb-1">Análise Setorial:</h4>
              <p className="text-gray-700">Estratégias específicas para o seu segmento de atuação.</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-white shadow-md text-left">
              <h4 className="font-semibold text-blue-950 mb-1">Planejamento Patrimonial:</h4>
              <p className="text-gray-700">Como proteger seu patrimônio no novo sistema.</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-white shadow-md text-left">
              <h4 className="font-semibold text-blue-950 mb-1">Metodologia Prática:</h4>
              <p className="text-gray-700">Baseada em casos reais e preparação para a transição.</p>
            </div>
          </div>
        </section>


        {/* SEÇÃO DE CREDENCIAIS (BIO) */}
        <section className="py-12 px-4 text-center bg-blue-100 text-gray-900">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Conheça o Especialista Que Vai Liderar Sua Jornada
          </h2>
          <div className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-700">
            <p className="font-bold text-blue-950 text-2xl mb-2">Dr. Francisco Carneiro Filho</p>
            <p className="font-semibold mb-4">
              Advogado | Especialista em Contabilidade Tributária | MBA Executivo em Gestão Empresarial - FGV
            </p>
            <p>
              Ex-executivo de alta gestão em multinacionais, com mais de 30 anos de experiência integrando as áreas Tributária, Financeira, de Controladoria e Jurídica.
            </p>
          </div>
        </section>


        {/* SEÇÃO DE CONTEÚDO SECUNDÁRIO (Outros Cursos - MANTIDO NO FINAL) */}
        <section className="py-12 px-4 text-center bg-white text-gray-900">
          <h2 className="text-3xl font-bold text-gray-700 mb-8 border-t pt-8">
            Outros Cursos e Áreas de Atuação
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl leading-relaxed">
            {/* Estrutura simplificada do Planejamento Sucessório */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-2xl font-semibold text-blue-950 mb-2">Planejamento Sucessório e Holding Familiar</h3>
              <p className="text-gray-700 text-lg mb-4">
                Curso sobre fundamentos, aspectos jurídicos e fiscais para proteção e transferência de patrimônio.
              </p>
              <button disabled className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed font-medium w-full text-lg">
                Em Breve
              </button>
            </div>

            {/* Sugestão de Novo Conteúdo ou Área de Atuação */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-2xl font-semibold text-blue-950 mb-2">Consultoria Empresarial e Tributária</h3>
              <p className="text-gray-700 text-lg mb-4">
                Soluções práticas para otimização fiscal e *compliance* em sua empresa.
              </p>
              <button disabled className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed font-medium w-full text-lg">
                Entre em Contato
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CursosPage;