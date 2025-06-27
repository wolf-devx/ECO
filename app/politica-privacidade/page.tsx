import { LegalLayout } from "@/components/legal/legal-layout"
import { LegalSection } from "@/components/legal/legal-section"

export default function PoliticaPrivacidade() {
  return (
    <LegalLayout title="Política de Privacidade" lastUpdated="12 de junho de 2025">
      <LegalSection id="introducao" title="1. Introdução e Escopo">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Esta Política de Privacidade descreve como a plataforma Eco v2 coleta, usa, armazena e protege os dados pessoais dos usuários. Ao utilizar nossos serviços, você concorda com as práticas descritas neste documento. A Eco v2 está comprometida com a proteção da privacidade dos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e outras legislações aplicáveis.
        </p>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Esta política se aplica a todos os usuários da plataforma, incluindo cidadãos, servidores públicos, visitantes e qualquer pessoa que interaja com nossos serviços online. Se você não concorda com esta política, recomendamos que não utilize a plataforma.
        </p>
      </LegalSection>

      <LegalSection id="dados-coletados" title="2. Dados Coletados">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Coletamos diferentes tipos de dados, de forma ativa (quando você os fornece) e automática (quando você utiliza a plataforma):
        </p>
        <ul>
          <li className="text-[#BDBDBD] dark:text-[#B2DFDB]"><strong>Dados pessoais fornecidos:</strong> nome completo, CPF, e-mail, telefone, endereço, senha, foto de perfil e dados inseridos em denúncias.</li>
          <li className="text-[#BDBDBD] dark:text-[#B2DFDB]"><strong>Dados técnicos:</strong> endereço IP, localização aproximada, tipo de navegador, sistema operacional, data e hora de acesso.</li>
          <li className="text-[#BDBDBD] dark:text-[#B2DFDB]"><strong>Dados de uso:</strong> páginas acessadas, tempo de permanência, cliques e interações com jogos educativos.</li>
          <li className="text-[#BDBDBD] dark:text-[#B2DFDB]"><strong>Dados sensíveis:</strong> imagens, áudios e vídeos que possam conter dados biométricos, étnicos ou de terceiros (caso você os envie).</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          É responsabilidade do usuário garantir que os dados fornecidos sejam verdadeiros, corretos e atualizados.
        </p>
      </LegalSection>

      <LegalSection id="finalidade" title="3. Finalidade do Tratamento">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Os dados coletados são utilizados para as seguintes finalidades:
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li>Cadastro e autenticação de usuários na plataforma.</li>
          <li>Processamento e encaminhamento de denúncias ambientais.</li>
          <li>Geração de estatísticas para órgãos públicos e melhorias na plataforma.</li>
          <li>Envio de notificações, atualizações e comunicações importantes.</li>
          <li>Personalização de conteúdo e jogos educativos.</li>
          <li>Cumprimento de obrigações legais e regulatórias.</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Não utilizamos os dados para fins comerciais, de marketing ou venda a terceiros.
        </p>
      </LegalSection>

      <LegalSection id="base-legal" title="4. Base Legal (LGPD)">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          As principais bases legais que justificam o tratamento de dados pela Eco v2 são:
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li><strong>Consentimento:</strong> quando você aceita explicitamente esta política e os termos de uso.</li>
          <li><strong>Execução de contrato:</strong> necessário para fornecer os serviços solicitados.</li>
          <li><strong>Obrigação legal ou regulatória:</strong> como em casos de cooperação com órgãos ambientais.</li>
          <li><strong>Legítimo interesse:</strong> para manutenção da segurança, análise de desempenho e melhorias do serviço.</li>
        </ul>
      </LegalSection>

      <LegalSection id="compartilhamento" title="5. Compartilhamento de Dados">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Seus dados poderão ser compartilhados com:
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li>Órgãos públicos e ambientais, para tratamento e fiscalização de denúncias.</li>
          <li>Autoridades judiciais, policiais ou governamentais, mediante obrigação legal ou ordem judicial.</li>
          <li>Serviços terceiros essenciais à operação da plataforma, como hospedagem, envio de e-mails e análise estatística.</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Todos os terceiros são obrigados contratualmente a seguir práticas compatíveis com a LGPD.
        </p>
      </LegalSection>

      <LegalSection id="direitos" title="6. Direitos do Titular dos Dados">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Você possui os seguintes direitos garantidos pela LGPD:
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li>Confirmar a existência de tratamento de seus dados.</li>
          <li>Acessar seus dados e obter cópia deles.</li>
          <li>Solicitar correção de dados incompletos, incorretos ou desatualizados.</li>
          <li>Solicitar a exclusão de dados pessoais (quando permitido por lei).</li>
          <li>Portar seus dados a outro fornecedor de serviço.</li>
          <li>Revogar o consentimento previamente dado.</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Para exercer seus direitos, entre em contato pelo e-mail informado ao final desta política.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="7. Segurança e Retenção dos Dados">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Adotamos medidas técnicas e administrativas rigorosas para proteger os dados contra acessos não autorizados, vazamentos, destruição ou perda.
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li>Criptografia de senhas e dados sensíveis.</li>
          <li>Monitoramento contínuo da infraestrutura.</li>
          <li>Controle de acesso baseado em função (RBAC).</li>
          <li>Backups regulares e armazenamento em ambientes seguros.</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Os dados são retidos pelo tempo necessário às finalidades descritas ou conforme exigido por lei. Após esse prazo, são excluídos ou anonimizados de forma segura.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="8. Uso de Cookies e Tecnologias Similares">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Utilizamos cookies e ferramentas de rastreamento para melhorar sua experiência na plataforma. Os tipos de cookies incluem:
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li><strong>Essenciais:</strong> necessários para funcionamento básico da plataforma.</li>
          <li><strong>Analíticos:</strong> coletam dados de uso para melhorar serviços.</li>
          <li><strong>Funcionais:</strong> armazenam preferências do usuário.</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Você pode gerenciar o uso de cookies nas configurações do seu navegador. O bloqueio de alguns cookies pode impactar a experiência na plataforma.
        </p>
      </LegalSection>

      <LegalSection id="transferencia" title="9. Transferência Internacional de Dados">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Em casos específicos, seus dados podem ser transferidos para servidores fora do Brasil. Isso ocorre principalmente quando utilizamos serviços de nuvem internacionais.
        </p>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Todas as transferências seguem os requisitos legais da LGPD e utilizam contratos que garantem nível adequado de proteção de dados.
        </p>
      </LegalSection>

      <LegalSection id="atualizacoes" title="10. Atualizações desta Política">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Esta Política de Privacidade pode ser atualizada a qualquer momento, em função de mudanças legais, operacionais ou tecnológicas.
        </p>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Notificaremos alterações significativas por e-mail ou por avisos na interface da plataforma. Recomendamos que o usuário revise este documento periodicamente.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="11. Contato e Encarregado de Dados (DPO)">
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Para esclarecer dúvidas, exercer seus direitos ou obter mais informações sobre nossa política de privacidade, entre em contato com o Encarregado de Dados (DPO):
        </p>
        <ul className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          <li><strong>Nome:</strong> João Silva</li>
          <li><strong>E-mail:</strong> dpo@ecoplataforma.org</li>
        </ul>
        <p className="text-[#BDBDBD] dark:text-[#B2DFDB]">
          Responderemos às solicitações dentro do prazo legal estabelecido pela LGPD.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}