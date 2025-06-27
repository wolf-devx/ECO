import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contato() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-[#E0F2F1]">Entre em Contato</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-6 dark:text-[#E0F2F1]">Informações de Contato</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Phone className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl dark:text-[#E0F2F1]">Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#BDBDBD] dark:text-[#E0F2F1]">(11) 99999-8888</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl dark:text-[#E0F2F1]">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#BDBDBD] dark:text-[#E0F2F1]">eco@empresa.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl dark:text-[#E0F2F1]">Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#BDBDBD] dark:text-[#E0F2F1]">Av. Paulista, 1000</p>
                <p className="text-lg text-[#BDBDBD] dark:text-[#E0F2F1]">São Paulo - SP</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 dark:text-[#E0F2F1]">Envie uma Mensagem</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <Input id="nome" placeholder="Seu nome completo" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
            </div>

            <div>
              <label htmlFor="assunto" className="block text-sm font-medium mb-1">
                Assunto
              </label>
              <Input id="assunto" placeholder="Assunto da mensagem" />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
                Mensagem
              </label>
              <Textarea id="mensagem" placeholder="Digite sua mensagem aqui..." rows={5} />
            </div>

            <Button type="submit" className="w-full bg-[#2E7D32] text-white hover:bg-[#A5D6A7]">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}