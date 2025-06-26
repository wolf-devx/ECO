import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AjudaTecnicoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Problemas Técnicos</h1>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>O site está lento ou travando</strong><br />
          Limpe o cache do navegador ou tente acessar com outro navegador.
        </li>
        <li>
          <strong>Não consigo fazer login</strong><br />
          Verifique se o e-mail/CPF e senha estão corretos. Se necessário, use a opção de recuperação de senha.
        </li>
        <li>
          <strong>Outro problema técnico</strong><br />
          Use o botão abaixo para entrar em contato com nossa equipe técnica.
        </li>
        <Button asChild>
            <Link href="/contato">Entre em Contato</Link>
        </Button>
      </ul>
    </main>
  );
}