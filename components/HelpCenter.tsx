// components/HelpCenter.tsx
import React from "react";
import Link from "next/link";

const helpTopics = [
  {
    title: "Conta e Acesso",
    description: "Ajuda com cadastro, login, recuperação de senha e perfil.",
    href: "/ajuda/conta",
  },
  {
    title: "Denúncias Ambientais",
    description: "Como criar, acompanhar e entender o status de uma denúncia.",
    href: "/ajuda/denuncias",
  },
  {
    title: "Jogos Educativos",
    description: "Informações sobre os jogos, avaliações e acessibilidade.",
    href: "/ajuda/jogos",
  },
  {
    title: "Problemas Técnicos",
    description: "Soluções para erros, bugs ou dificuldades técnicas.",
    href: "/ajuda/tecnico",
  },
];

const HelpCenter = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Central de Ajuda</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Encontre respostas rápidas e tópicos comuns abaixo. Se precisar de mais ajuda, entre em contato conosco.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpTopics.map((topic, index) => (
          <Link key={index} href={topic.href} className="block">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2 text-foreground">{topic.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HelpCenter;