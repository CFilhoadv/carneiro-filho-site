import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner'; // Importar o componente Banner

const PoliticaDePrivacidadePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Banner da Política de Privacidade */}
        <Banner
          subtitle="Sua Privacidade é Nossa Prioridade" // Título principal
          title="Política de Privacidade" // Subtítulo
          bgColor="bg-blue-900" // Fundo azul
        />

        {/* Conteúdo da Política de Privacidade */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Aviso de Privacidade</h2>

          <h3 className="text-xl font-bold mt-8 mb-4">Quem somos?</h3>
          <p className="mb-4">
            O Carneiro Filho Advocacia é um escritório de destacada atuação no direito empresarial, direito de família e direito civil. Com base em nossa política de privacidade, a partir do seu primeiro contato, comprometemo-nos e empenhamo-nos totalmente com a proteção dos seus dados pessoais e privacidade. Isso ocorre em estrita observância às bases legais de tratamento de dados e princípios estabelecidos na Lei Geral de Proteção de Dados (“LGPD”), tratando suas informações com responsabilidade, ética e transparência, pelo tempo necessário e para fins lícitos.
          </p>
          <p className="mb-4">
            Estamos localizados na Av. Brigadeiro Faria Lima, 1811 - ESC 1119, Jardim Paulistano, São Paulo/SP, CEP: 01452-001.
          </p>
          <p className="mb-6">
            Você poderá entrar em contato conosco por meio dos seguintes canais:<br />
            E-mail: <strong>contato@carneirofilho.com.br</strong><br />
            Telefone: <strong>(11) 4210-6194</strong>
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Como coletamos seus dados pessoais?</h3>
          <p className="mb-4">
            Os tipos de dados pessoais e a forma como os coletamos dependem de como você se relaciona conosco. Todos os dados coletados ou fornecidos diretamente por você são tratados como confidenciais, e somente os usaremos para os fins lícitos e em respeito às legislações e normas de proteção de dados.
          </p>
          <p className="mb-6">
            Além dos dados pessoais para seu cadastro como Cliente, poderão ser coletados outros tipos de dados, a depender do tipo de demanda (processo ou serviço) que iremos patrocinar em seu interesse. Utilizamos esses dados para cumprimento de obrigação legal ou regulatória, exercício regular de direito, execução de contrato, interesse legítimo ou com o seu consentimento. Coletamos apenas os dados estritamente necessários para cumprir essas finalidades, não tratando seus dados de quaisquer outras formas que não as especificadas neste aviso.
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Se você ainda não é nosso cliente:</strong> Os Dados Pessoais que coletamos são apenas os fornecidos diretamente por você (nome e e-mail) em nosso formulário de contato “Fale Conosco”, disponível em nosso website.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Dados tratados indiretamente:</h3>
          <p className="mb-4">
            Utilizamos cookies e plug-ins de terceiros (Dados de navegação). Cookies são pequenos arquivos de texto contendo informações relacionadas à navegação que são enviados pelo site ao computador do usuário. Essa informação é armazenada pelo navegador do usuário para que nosso servidor possa lê-la posteriormente. Podem ser armazenados, por exemplo, dados sobre o dispositivo utilizado pelo usuário, bem como seu local e horário de acesso ao site.
          </p>
          <p className="mb-4">
            Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, e não é possível, por meio deles, ter acesso a informações pessoais que não tenham partido do usuário ou da forma como ele utiliza os recursos do site. Nem todo cookie contém informações que permitem a identificação do usuário, sendo que determinados tipos de cookies podem ser empregados simplesmente para que o site seja carregado corretamente ou para que suas funcionalidades funcionem do modo esperado.
          </p>
          <p className="mb-6">
            O Usuário pode optar por recusar ou desabilitar os Cookies por meio das configurações do seu navegador ou ao instalar um plug-in que realize essa funcionalidade. No entanto, ao fazer isso, algumas áreas de nossos websites podem não funcionar corretamente. Este Aviso de Privacidade não cobre o uso de cookies por terceiros, e não somos responsáveis por suas políticas e práticas de privacidade. No entanto, para que você saiba quais cookies estão instalados em seu dispositivo e até mesmo possa excluí-los, listamos abaixo os links das informações disponibilizadas pelos principais navegadores:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Safari</strong></li>
            <li className="mb-2"><strong>Chrome</strong></li>
            <li className="mb-2"><strong>Firefox</strong></li>
            <li className="mb-2"><strong>Edge</strong></li>
            <li><strong>Opera</strong></li>
          </ul>
          <p className="mb-6">
            (Para outros navegadores, visite o site do desenvolvedor do navegador.)
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Cookies de Terceiros:</h3>
          <p className="mb-4">
            Alguns de nossos parceiros podem configurar cookies nos dispositivos dos usuários que acessam nosso site. Estes cookies, em geral, visam possibilitar que nossos parceiros ofereçam seu conteúdo e serviços de forma personalizada, por meio da obtenção de dados de navegação extraídos de sua interação com o site. Para mais informações sobre cookies de terceiros e como os dados são obtidos e tratados, acesse:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>RD Station</strong></li>
            <li className="mb-2"><strong>Google Analytics</strong></li>
            <li><strong>Facebook</strong></li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Cookies de Redes Sociais:</h3>
          <p className="mb-4">
            O site utiliza plugins de redes sociais, que permitem acessá-las diretamente. Assim, ao fazê-lo, os cookies utilizados por elas poderão ser armazenados no navegador do usuário. Cada rede social possui sua própria política de privacidade e de proteção de dados pessoais, sendo as entidades que as mantêm responsáveis pelos dados coletados e pelas práticas de privacidade adotadas. O usuário pode pesquisar, junto às redes sociais, informações sobre como seus dados pessoais são tratados. A título informativo, disponibilizamos os seguintes links para consulta das políticas de privacidade e de cookies adotadas por algumas das principais redes sociais:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Facebook</strong></li>
            <li className="mb-2"><strong>Instagram</strong></li>
            <li><strong>LinkedIn</strong></li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Com quem compartilhamos seus dados pessoais?</h3>
          <p className="mb-6">
            Não compartilhamos ou divulgamos nenhum dado pessoal sem o seu consentimento, exceto para os fins especificados neste Aviso ou quando houver uma exigência legal. Não transferimos diretamente dados pessoais coletados no Brasil para outros países; contudo, os serviços de terceiros que usamos podem realizar transferências para outros países. Utilizamos serviços de terceiros que adotam padrões adequados em privacidade e proteção de dados pessoais.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Por quanto tempo os dados serão armazenados?</h3>
          <p className="mb-6">
            Mantemos seus dados pessoais apenas pelo tempo necessário para que nossas finalidades sejam atingidas. Temos rigorosas políticas de revisão e retenção em vigor para cumprir essas obrigações. Somos obrigados por lei a manter seus dados pessoais para cumprimento de obrigação legal ou regulatória, desde que respeitados os requisitos de tratamento de dados.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Como protegemos seus dados pessoais?</h3>
          <p className="mb-4">
            Privacidade e proteção de dados pessoais para nós é um assunto sério. Tomamos todas as medidas e precauções razoáveis para proteger seus dados pessoais e sua privacidade, com a utilização de protocolo de segurança da informação, tais como:
          </p>
          <ul className="list-decimal pl-5 mb-6">
            <li className="mb-2">Coleta dos dados estritamente necessários para atender às finalidades e objetivos lícitos.</li>
            <li className="mb-2">Armazenamento das suas informações em servidores que, assim como nós, protegem e respeitam sua privacidade e dados pessoais.</li>
            <li className="mb-2">Proteção contra acesso não autorizado aos nossos sistemas.</li>
            <li className="mb-2">Uso de criptografia para proteção dos dados pessoais.</li>
            <li>Treinamento e conscientização dos nossos colaboradores que mantêm contato com seus dados pessoais.</li>
          </ul>
          <p className="mb-6">
            Vale lembrar que, mesmo estando empenhados diariamente em proteger sua privacidade e seus dados pessoais, violações de dados pessoais podem ocorrer, uma vez que não há sistema totalmente seguro. Caso ocorra uma violação de dados, o Carneiro Filho Advocacia adotará todas as medidas cabíveis para remediar as consequências do evento, sempre com total transparência.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Quais são os direitos do titular de dados pessoais?</h3>
          <p className="mb-4">
            Os Dados Pessoais são seus, e a lei brasileira garante que você tenha uma série de direitos relacionados a eles, como:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">Confirmação da existência do tratamento.</li>
            <li className="mb-2">Acesso aos dados.</li>
            <li className="mb-2">Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li className="mb-2">Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a Lei Geral de Proteção de Dados.</li>
            <li className="mb-2">Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, observados os segredos comercial e industrial.</li>
            <li className="mb-2">Eliminação dos dados pessoais tratados com o consentimento do titular, exceto para cumprimento de obrigação legal ou regulatória e estudo por órgão de pesquisa, garantindo a anonimização dos dados pessoais sempre que possível.</li>
            <li className="mb-2">Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados ou uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</li>
            <li className="mb-2">Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados.</li>
            <li className="mb-2">Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.</li>
            <li>Revogação do consentimento, por procedimento gratuito e facilitado, ratificados os tratamentos realizados sob o amparo do consentimento anteriormente manifestado.</li>
          </ul>
          <p className="mb-6">
            Caso você tenha alguma dúvida sobre essas questões ou sobre como pode exercer esses direitos, fique à vontade para entrar em contato conosco por meio dos canais disponibilizados nesta Política.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Como falar sobre dados pessoais conosco?</h3>
          <p className="mb-4">
            Nossas práticas de privacidade e proteção de dados estão em constante atualização. Se você acredita que seus Dados Pessoais foram usados de maneira incompatível com este Aviso de Privacidade ou com as suas escolhas enquanto Titular destes Dados Pessoais, ou, ainda, se tiver dúvidas, comentários ou sugestões relacionadas a esta Política, nós temos um Portal de Privacidade e um Encarregado (Data Protection Officer - DPO), que está à disposição nos seguintes endereços de contato:
          </p>
          <p className="mb-6">
            Av. Brigadeiro Faria Lima, 1811 - ESC 1119, Jardim Paulistano, São Paulo/SP, CEP: 01452-001.
          </p>

        </section>
      </div>
    </MainLayout>
  );
};

export default PoliticaDePrivacidadePage;