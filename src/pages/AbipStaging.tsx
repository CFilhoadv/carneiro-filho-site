import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const AbipStaging: React.FC = () => {
  return (
    <MainLayout>
      {/* Cabeçalho da Página */}
      <section className="bg-gray-50 pt-6 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">ABIP</h1>
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Administração de Bens Imóveis Próprios
          </p>
        </div>
      </section>

      {/* Conteúdo Técnico */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              A Administração de Bens Imóveis Próprios (ABIP) é um modelo societário voltado especificamente para famílias ou investidores que possuem um patrimônio imobiliário relevante destinado à locação ou à preservação de valor. Ao contrário de uma holding puramente patrimonial, a ABIP tem como objeto social a exploração da atividade imobiliária própria.
            </p>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Estrutura e Finalidade
              </h2>
              <p className="mb-4">
                Neste modelo, os imóveis são integralizados ao capital social da empresa, e a gestão dos aluguéis e da manutenção dos bens passa a ser realizada pela pessoa jurídica. Juridicamente, a ABIP permite que a sucessão desse patrimônio imobiliário ocorra via quotas sociais, de forma organizada e profissional.
              </p>
              <p>
                A centralização em uma estrutura empresarial facilita a gestão administrativa e confere maior transparência na distribuição dos resultados entre os sócios/herdeiros, estabelecendo regras claras de governança imobiliária.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-left">
                Aspectos de Gestão e Sucessão
              </h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Gestão Profissionalizada:</strong> Permite a segregação do patrimônio pessoal da atividade de exploração imobiliária, conferindo maior organização contábil e jurídica.
                </li>
                <li>
                  <strong>Facilitação da Partilha:</strong> Evita a fragmentação da propriedade dos imóveis (condomínio civil entre herdeiros), que muitas vezes dificulta a venda ou locação futura.
                </li>
                <li>
                  <strong>Cláusulas Restritivas:</strong> A estrutura permite a utilização de acordos de sócios para definir quóruns de decisão sobre a venda de ativos e critérios de administração.
                </li>
                <li>
                  <strong>Eficiência Fiscal:</strong> A viabilidade da ABIP está intrinsecamente ligada ao regime de tributação escolhido (Lucro Presumido, em regra), exigindo um comparativo rigoroso entre a tributação na pessoa física e na jurídica.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-blue-900 italic text-base">
              <p>
                <strong>Nota Técnica:</strong> A implementação de uma ABIP exige análise aprofundada sobre o ITBI na integralização dos bens e a incidência de impostos sobre a receita de locação. É um instrumento de planejamento que deve conciliar a eficiência sucessória com a viabilidade econômica operacional.
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

export default AbipStaging;