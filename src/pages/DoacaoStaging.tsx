import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const DoacaoStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho da Página */}
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">DOAÇÃO COM USUFRUTO</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Instrumentos de Planejamento Sucessório
          </p>
        </div>
      </section>

      {/* Conteúdo Técnico */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              A doação com reserva de usufruto é um dos instrumentos mais utilizados no planejamento sucessório. Consiste na transferência da propriedade de um bem (nua-propriedade) para os herdeiros ou terceiros, enquanto o doador reserva para si o direito de usar e fruir dos benefícios desse bem (usufruto) durante um período determinado ou de forma vitalícia.
            </p>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Funcionamento e Controle
              </h2>
              <p className="mb-4">
                Com a doação, o beneficiário torna-se o proprietário do bem, mas o doador mantém o direito de posse, administração e percepção de eventuais frutos (como aluguéis). No caso de usufruto vitalício, o pleno domínio do bem só se consolida nas mãos do nu-proprietário com o falecimento do doador ou renúncia expressa do usufruto.
              </p>
              <p>
                Para conferir maior segurança ao doador, o contrato de doação pode ser gravado com cláusulas restritivas, como inalienabilidade, impenhorabilidade e incomunicabilidade, além da cláusula de reversão (caso o donatário faleça antes do doador).
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Vantagens e Considerações
              </h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Agilidade Sucessória:</strong> Como a transferência da propriedade já foi realizada em vida, o bem doado não integra o processo de inventário, reduzindo custos e tempo de transmissão.
                </li>
                <li>
                  <strong>Manutenção da Renda:</strong> O doador continua a usufruir dos rendimentos do patrimônio, garantindo seu sustento e autonomia financeira.
                </li>
                <li>
                  <strong>Organização Patrimonial:</strong> Permite definir antecipadamente o destino de bens específicos, evitando disputas futuras entre herdeiros.
                </li>
                <li>
                  <strong>Impacto Tributário:</strong> A operação está sujeita à incidência do ITCMD (Imposto sobre Transmissão Causa Mortis e Doação). A análise da base de cálculo e das alíquotas vigentes é essencial para a viabilidade do planejamento.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 italic text-base">
              <p>
                <strong>Nota Técnica:</strong> A doação é um ato jurídico irrevogável (salvo hipóteses legais específicas de ingratidão ou inexecução de encargo). Portanto, sua realização exige convicção e uma análise técnica rigorosa sobre os impactos na legítima dos herdeiros necessários.
              </p>
            </div>
          </div>

          {/* CTA Final Padronizado */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <Link 
              to="/analise-preliminar" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Encaminhar informações para análise preliminar
            </Link>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/planejamento-sucessorio-staging" className="text-blue-900 hover:underline font-medium">
              ← Voltar para Planejamento Sucessório
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DoacaoStaging;