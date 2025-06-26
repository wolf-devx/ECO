"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function NovoAtendimentoPage() {
  const router = useRouter()

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [local, setLocal] = useState("")
  const [usuarioNome, setUsuarioNome] = useState("")
  const [usuarioEmail, setUsuarioEmail] = useState("")
  const [anonimo, setAnonimo] = useState(false)

  const handleSalvar = async () => {
    // Simula envio ao backend
    const novoAtendimento = {
      id: String(Date.now()),
      denunciaId: String(Date.now()),
      titulo,
      descricao,
      local,
      data: new Date().toISOString(),
      status: "pendente",
      usuario: {
        nome: usuarioNome,
        email: usuarioEmail,
        anonimo,
      },
      respostas: [],
    }

    console.log("Enviando atendimento:", novoAtendimento)

    // Aqui você poderia usar fetch/axios para salvar no backend
    router.push("/admin/atendimentos")
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Novo Atendimento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <Textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="ghost" onClick={() => router.push("/admin/atendimentos")}>
            Cancelar
          </Button>
          <Button onClick={handleSalvar}>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}