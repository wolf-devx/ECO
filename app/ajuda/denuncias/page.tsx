export default function AjudaDenunciasPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Ajuda com Denúncias Ambientais</h1>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>Como faço uma denúncia?</strong><br />
          Vá até a seção “Nova Denúncia” e preencha o formulário com título, descrição e localização.
        </li>
        <li>
          <strong>Posso denunciar de forma anônima?</strong><br />
          Sim. Marque a opção “Anônimo” no final do formulário.
        </li>
        <li>
          <strong>Como acompanho uma denúncia?</strong><br />
          No seu perfil, acesse o histórico de denúncias e veja o status de cada uma.
        </li>
      </ul>
    </main>
  );
}