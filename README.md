## Descrição

- **.next**: Pasta gerada pelo Next.js
    - `contém arquivos build e cache`
- **app**: Onde ficam as rotas e páginas.
    - **admin**: Área administrativa para gestão do sistema.
        - `pages.tsx`:
        - **atendimentos**: Contém as páginas relacionadas ao gerenciamento dos atendimentos.
            - `page.tsx`:
            - **novo**: criação de um novo atendimento.
                - `page.tsx`: 
                \`\`\`
                Método HTTP: POST
                Endpoint: /api/atendimento
                Json: atendimento
                {
                    "protocolo": 1,
                    "descricao" : "descrição",
                    "data_atendimento": "2025-06-06",
                    "status": "aberto",
                    "funcionario_codigo": "100123",
                    "denuncia_id": 104
                } 
                \`\`\`
        - **relatorios**: Exibir relatórios administrativos, gráficos, estatísticas e análises
            - `page.tsx`:
        - **usuarios**: Gerenciar os usuários cadastrados: Ver log de acesso, ativar/desativar usuários.
            - `page.tsx`:
    - **ajuda**: Seção destinada a suporte para o usuário.
        - `page.tsx`:
        - **conta**: Suporte relacionado à conta do usuário.
            - `page.tsx`:
            \`\`\`
            Tópicos:
                Esqueci minha senha
                Como mudar meu e-mail
                Como excluir minha conta
                Problemas para fazer login
                Verificação de identidade
            \`\`\`
        - **denuncias**: Ajuda para o sistema de denúncias.
            - `page.tsx`:
            \`\`\`
            Tópicos:
                Como fazer uma denúncia
                Acompanhar status de uma denúncia
                Tipos de infração que podem ser denunciadas
                Política de moderação
                O que acontece após a denúncia
            \`\`\`
        - **jogos**: Suporte relacionado a jogos.
            - `page.tsx`:
            \`\`\`
            Tópicos:
                Problemas ao avaliar um jogo
                Erros ao abrir o link do jogo
                Como sugerir um novo jogo
                Requisitos técnicos dos jogos
                Bug encontrado em um jogo
            \`\`\`
        - **tecnico**: Suporte para problemas técnicos e erros gerais.
            - `page.tsx`:
            \`\`\`
            Tópicos:
                A plataforma não carrega
                Erro 500 ou 404
                Problemas com notificações
                Site está lento
                Requisitos do navegador
            \`\`\`
    - **cadastro**: Cadastro de novos usuários.
        - `page.tsx`:
        \`\`\`
        Método HTTP: POST
        Endpoint: /api/usuario
        Json: usuario
        {
            "cpf": "12345678911",
            "nome": "Paulo",
            "nickname": "PA",
            "email": "paulo@gmail.com",
            "telefone": "98991258772",
            "senha": "1234"
        } 
        \`\`\`
    - **contato**: Página com informações para contato.
    - **denuncia**: Funcionalidade para denúncias.
        - `page.tsx`:
        - **editar**: Edição de denuncia pelo id.
            - **[id]**
                - `page.tsx`:
                \`\`\`
                1º Método HTTP: GET
                2º Método HTTP: PUT
                Endpoint: /api/denuncia/:id
                Json: denuncia
                {
                    "id": 104,
                    "titulo": "title 3",
                    "descricao": "jdkhgsadjkhsadkjhas",
                    "data_criacao": "2025-06-06T16:56:04",
                    "data_atualizacao": "2025-06-06T16:56:04",
                    "usuario_cpf": "12345678911",
                    "endereco_cep": "12345678"
                } 
                \`\`\`
        - **nova**: Criação de uma nova denuncia.
            - `page.tsx`:
            \`\`\`
            Método HTTP: POST
            Endpoint: /api/denuncia
            Json: denuncia
            {
                "id": 104,
                "titulo": "title 3",
                "descricao": "jdkhgsadjkhsadkjhas",
                "data_criacao": "2025-06-06T16:56:04",
                "data_atualizacao": "2025-06-06T16:56:04",
                "usuario_cpf": "12345678911",
                "endereco_cep": "12345678"
            } 
            \`\`\`
    - **faq**: Perguntas frequentes para auxiliar os usuários.
    - **jogos**: Área com jogos.
    - **login**: Tela para logins.
        - `page.tsx`:
        \`\`\`
        Método HTTP: POST (autenticação)
        Endpoint: /api/usuario
        Json: usuario
        {
            "cpf": "12345678911",
            "email": "paulo@gmail.com",
            "senha": "1234"
        }
        \`\`\`
        - **admin**:
            - `page.tsx`:
            \`\`\`
            Método HTTP: POST (autenticação)
            Endpoint: /api/funcionario
            Json: funcionario
            {
                "email": "joana.silva@eco.com",
                "senha": "senhaSegura123"
            }
            \`\`\`
    - **perfil**: Gestão do perfil.
        - `page.tsx`:
        \`\`\`
        1º Método HTTP: GET
        2º Método HTTP: PUT
        3º Método HTTP: POST
        4º Método HTTP: DELETE
        Endpoint: /api/usuario
        Json: usuario
        {
            "nickname": "PA",
            "email": "paulo@gmail.com",
            "telefone": "98991258772",
        }
        \`\`\`
    - **politica-privacidade**: Página com a política de privacidade.
    - **sobre**: Informações sobre o projeto, equipe, etc.
    - **termos-servico**: Termos e condições de uso da aplicação.
    - `global.css`: Arquivo de estilos globais aplicado a toda a aplicação.
    - `layout.tsx`: Componente de layout principal que envolve as páginas, com cabeçalho, rodapé, etc.
    - `page.tsx`: Página principal raiz da aplicação.
- **components**: Componentes React reutilizáveis para UI.
- **context**: Providers e contextos do React para gerenciamento de estado.
- **hooks**: Custom hooks para lógica reutilizável.
- **lib**: Funções utilitárias, API clients e helpers.
- **node_modules**: Dependências instaladas via npm ou pnpm.
- **public**: Arquivos estáticos acessíveis publicamente, como imagens e fontes.
- **scripts**: Scripts auxiliares para automações ou tarefas personalizadas.
- `.env.local`: Variáveis de ambiente específicas para desenvolvimento local.
- `.gitignore`: Define arquivos e pastas que o git deve ignorar.
- `components.json`:
- `next-env.d.ts`:
- `next.config.mjs`: Arquivo de configuração do Next.js.
- `package-lock.json`:
- `package.json`: Lista de dependências e scripts do projeto.
- `pnpm-lock.yaml`:
- `postcss.config.mjs`: Configurações para PostCSS.
- `tailwind.config.ts`: Configurações para Tailwind CSS.
- `tsconfig.json`: Configurações do compilador TypeScript.
