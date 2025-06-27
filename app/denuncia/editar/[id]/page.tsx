"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ProtectedRoute } from "@/components/protected-route"

type Denuncia = {
  id: string
  titulo: string
  descricao: string
  local: string
  data: string
  status: "pendente" | "em_analise" | "resolvida" | "arquivada"
}

export default function EditarDenunciaPage() {
  const params = useParams()
  const router = useRouter()
  const denunciaId = params.id as string

  const [denuncia, setDenuncia] = useState<Denuncia | null>(null)
  const [bloqueado, setBloqueado] = useState(false)

  useEffect(() => {
    const mockData: Denuncia[] = [
      {
        id: "1",
        titulo: "Descarte irregular de lixo",
        descricao: "Grande volume de lixo descartado próximo ao córrego.",
        local: "Av. Paulista, 1000 - São Paulo",
        data: "2023-05-15",
        status: "resolvida",
      },
      {
        id: "2",
        titulo: "Poluição sonora",
        descricao: "Música alta após as 22h, perturbando moradores.",
        local: "Rua Augusta, 500 - São Paulo",
        data: "2023-06-20",
        status: "em_analise",
      },
      {
        id: "3",
        titulo: "Desmatamento em área protegida",
        descricao: "Atividade de desmatamento em área de preservação.",
        local: "Parque Estadual da Cantareira - São Paulo",
        data: "2023-07-05",
        status: "pendente",
      },
    ]

    const found = mockData.find((d) => d.id === denunciaId)

    if (found) {
      setDenuncia(found)
      if (found.status !== "pendente") {
        setBloqueado(true)
      }
    }
  }, [denunciaId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!denuncia || denuncia.status !== "pendente") return

    // Aqui entraria o PUT para a API real
    console.log("Denúncia atualizada:", denuncia)
    alert("Denúncia atualizada com sucesso!")
    router.push("/denuncias")
  }

  if (!denuncia) {
    return <p className="p-8">Carregando denúncia...</p>
  }

  if (bloqueado) {
    return (
      <ProtectedRoute>
        <div className="p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Edição não permitida</h1>
          <p className="mb-6">A denúncia com status <strong>{denuncia.status}</strong> não pode ser editada.</p>
          <Button onClick={() => router.push("/denuncia")}>Voltar</Button>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Editar Denúncia</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="titulo">Título</Label>
            <Input
              id="titulo"
              value={denuncia.titulo}
              onChange={(e) => setDenuncia({ ...denuncia, titulo: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              value={denuncia.descricao}
              onChange={(e) => setDenuncia({ ...denuncia, descricao: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="local">Local</Label>
            <Input
              id="local"
              value={denuncia.local}
              onChange={(e) => setDenuncia({ ...denuncia, local: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  )
}
