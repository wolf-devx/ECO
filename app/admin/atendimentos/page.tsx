"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, User, MapPin, MessageSquare, Search, Filter } from "lucide-react"
import Link from "next/link"

type Atendimento = {
  id: string
  denunciaId: string
  titulo: string
  descricao: string
  local: string
  data: string
  status: "pendente" | "em_analise" | "resolvida" | "arquivada"
  usuario: {
    nome: string
    email: string
    anonimo: boolean
  }
  respostas: {
    id: string
    texto: string
    data: string
    funcionario: string
  }[]
}

export default function AtendimentosAdmin() {
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchAtendimentos = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockAtendimentos: Atendimento[] = [
          {
            id: "1",
            denunciaId: "1",
            titulo: "Descarte irregular de lixo na Avenida Paulista",
            descricao: "Encontrei um grande volume de lixo descartado irregularmente próximo ao córrego.",
            local: "Av. Paulista, 1000 - São Paulo",
            data: "2024-01-15",
            status: "resolvida",
            usuario: {
              nome: "João Silva",
              email: "joao@exemplo.com",
              anonimo: false,
            },
            respostas: [
              {
                id: "1",
                texto: "Denúncia recebida. Estamos encaminhando para o departamento responsável.",
                data: "2024-01-16",
                funcionario: "Maria Oliveira",
              },
              {
                id: "2",
                texto: "Equipe de limpeza enviada ao local. O problema foi resolvido.",
                data: "2024-01-18",
                funcionario: "Carlos Santos",
              },
            ],
          },
          {
            id: "2",
            denunciaId: "2",
            titulo: "Poluição sonora em estabelecimento comercial",
            descricao: "Estabelecimento com música alta após as 22h, perturbando moradores.",
            local: "Rua Augusta, 500 - São Paulo",
            data: "2024-01-15",
            status: "em_analise",
            usuario: {
              nome: "Anônimo",
              email: "",
              anonimo: true,
            },
            respostas: [
              {
                id: "3",
                texto: "Denúncia recebida. Estamos verificando a situação.",
                data: "2024-01-16",
                funcionario: "Maria Oliveira",
              },
            ],
          },
          {
            id: "3",
            denunciaId: "3",
            titulo: "Desmatamento em área protegida",
            descricao: "Observei atividade de desmatamento em área que acredito ser de preservação.",
            local: "Parque Estadual da Cantareira - São Paulo",
            data: "2024-01-14",
            status: "pendente",
            usuario: {
              nome: "Ana Pereira",
              email: "ana@exemplo.com",
              anonimo: false,
            },
            respostas: [],
          },
          {
            id: "4",
            denunciaId: "4",
            titulo: "Vazamento de óleo em via pública",
            descricao: "Há um vazamento de óleo que está se espalhando pela via pública.",
            local: "Rua Funchal, 200 - São Paulo",
            data: "2024-01-14",
            status: "em_analise",
            usuario: {
              nome: "Pedro Costa",
              email: "pedro@exemplo.com",
              anonimo: false,
            },
            respostas: [
              {
                id: "4",
                texto: "Equipe técnica foi enviada para avaliação.",
                data: "2024-01-15",
                funcionario: "Roberto Almeida",
              },
            ],
          },
        ]

        setAtendimentos(mockAtendimentos)
      } catch (error) {
        console.error("Erro ao buscar atendimentos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAtendimentos()
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pendente":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pendente
          </Badge>
        )
      case "em_analise":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Em Análise
          </Badge>
        )
      case "resolvida":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Resolvida
          </Badge>
        )
      case "arquivada":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Arquivada
          </Badge>
        )
      default:
        return <Badge variant="outline">Desconhecido</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  const filteredAtendimentos = atendimentos.filter((atendimento) => {
    const matchesTab = activeTab === "todos" || atendimento.status === activeTab
    const matchesSearch =
      searchTerm === "" ||
      atendimento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      atendimento.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
      atendimento.usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesTab && matchesSearch
  })

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Atendimentos</h1>
        <p className="text-muted">Gerencie denúncias e atendimentos do sistema</p>
      </div>

      {/* Filtros e Busca */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por título, local ou usuário..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>
      </div>

      <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-5 md:w-[600px]">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="pendente">Pendentes</TabsTrigger>
          <TabsTrigger value="em_analise">Em Análise</TabsTrigger>
          <TabsTrigger value="resolvida">Resolvidos</TabsTrigger>
          <TabsTrigger value="arquivada">Arquivados</TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading"></div>
          <p className="text-lg ml-2">Carregando atendimentos...</p>
        </div>
      ) : filteredAtendimentos.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nenhum atendimento encontrado</h2>
            <p className="text-muted-foreground">
              {searchTerm ? "Tente ajustar os filtros de busca." : "Não há atendimentos para esta categoria."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredAtendimentos.map((atendimento) => (
            <Card key={atendimento.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{atendimento.titulo}</CardTitle>
                    <CardDescription className="flex items-center mt-2 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(atendimento.data)}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {atendimento.usuario.anonimo ? "Anônimo" : atendimento.usuario.nome}
                      </span>
                    </CardDescription>
                  </div>
                  {getStatusBadge(atendimento.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Descrição:</h4>
                    <p>{atendimento.descricao}</p>
                  </div>

                  <div className="flex items-start text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                    <span>{atendimento.local}</span>
                  </div>

                  {atendimento.respostas.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Histórico de Respostas:</h4>
                      <div className="space-y-2">
                        {atendimento.respostas.map((resposta) => (
                          <div key={resposta.id} className="bg-muted p-3 rounded-md">
                            <p className="text-sm">{resposta.texto}</p>
                            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                              <span>Por: {resposta.funcionario}</span>
                              <span>{formatDate(resposta.data)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Ver Detalhes</Button>
                <div className="space-x-2">
                  {atendimento.status === "pendente" && <Button asChild>
                    <Link href="/admin/atendimentos/novo">Iniciar Atendimento</Link>
                    </Button>}
                  {atendimento.status === "em_analise" && <Button>Responder</Button>}
                  {atendimento.status === "resolvida" && <Button variant="outline">Reabrir</Button>}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
