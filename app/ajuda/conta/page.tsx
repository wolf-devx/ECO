// app/ajuda/conta/page.tsx
export default function AjudaContaPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 ">Ajuda com Conta e Acesso</h1>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>Como me cadastro?</strong><br />
          Vá até a página de <em>Cadastro</em> e preencha seus dados pessoais. Você receberá um e-mail de confirmação.
        </li>
        <li>
          <strong>Esqueci minha senha. O que faço?</strong><br />
          Na tela de login, clique em “Esqueci minha senha” e siga as instruções enviadas para o seu e-mail.
        </li>
        <li>
          <strong>Posso editar meus dados?</strong><br />
          Sim. Acesse seu <em>Perfil</em> após o login e clique em “Editar”.
        </li>
      </ul>
    </main>
  );
}