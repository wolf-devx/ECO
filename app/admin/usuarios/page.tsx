"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Users, UserCheck, UserX, Mail, Phone, Calendar, MoreHorizontal } from "lucide-react"

type Usuario = {
  id: string
  nome: string
  email: string
  cpf: string
  telefone: string
  dataCadastro: string
  ativo: boolean
  totalDenuncias: number
  ultimoAcesso: string
}

export default function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUsuarios: Usuario[] = [
          {
            id: "1",
            nome: "João Silva Santos",
            email: "joao.silva@email.com",
            cpf: "123.456.789-01",
            telefone: "(11) 99999-1111",
            dataCadastro: "2023-05-15",
            ativo: true,
            totalDenuncias: 3,
            ultimoAcesso: "2024-01-15",
          },
          {
            id: "2",
            nome: "Maria Fernanda Costa",
            email: "maria.costa@email.com",
            cpf: "234.567.890-12",
            telefone: "(11) 99999-2222",
            dataCadastro: "2023-06-20",
            ativo: true,
            totalDenuncias: 1,
            ultimoAcesso: "2024-01-14",
          },
          {
            id: "3",
            nome: "Pedro Henrique Oliveira",
            email: "pedro.oliveira@email.com",
            cpf: "345.678.901-23",
            telefone: "(11) 99999-3333",
            dataCadastro: "2023-07-10",
            ativo: false,
            totalDenuncias: 0,
            ultimoAcesso: "2023-12-20",
          },
          {
            id: "4",
            nome: "Ana Beatriz Souza",
            email: "ana.souza@email.com",
            cpf: "456.789.012-34",
            telefone: "(11) 99999-4444",
            dataCadastro: "2023-08-05",
            ativo: true,
            totalDenuncias: 5,
            ultimoAcesso: "2024-01-15",
          },
          {
            id: "5",
            nome: "Carlos Roberto Lima",
            email: "carlos.lima@email.com",
            cpf: "567.890.123-45",
            telefone: "(11) 99999-5555",
            dataCadastro: "2023-09-12",
            ativo: true,
            totalDenuncias: 2,
            ultimoAcesso: "2024-01-13",
          },
        ]

        setUsuarios(mockUsuarios)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsuarios()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  const filteredUsuarios = usuarios.filter((usuario) => {
    const matchesTab =
      activeTab === "todos" || (activeTab === "ativos" && usuario.ativo) || (activeTab === "inativos" && !usuario.ativo)

    const matchesSearch =
      searchTerm === "" ||
      usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.cpf.includes(searchTerm)

    return matchesTab && matchesSearch
  })

  const stats = {
    total: usuarios.length,
    ativos: usuarios.filter((u) => u.ativo).length,
    inativos: usuarios.filter((u) => !u.ativo).length,
    comDenuncias: usuarios.filter((u) => u.totalDenuncias > 0).length,
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gerenciar Usuários</h1>
        <p className="text-muted">Visualize e gerencie todos os usuários do sistema</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <UserCheck className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.ativos}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Inativos</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inativos}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Com Denúncias</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.comDenuncias}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por nome, email ou CPF..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtros Avançados
          </Button>
        </div>
      </div>

      <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="todos">Todos ({stats.total})</TabsTrigger>
          <TabsTrigger value="ativos">Ativos ({stats.ativos})</TabsTrigger>
          <TabsTrigger value="inativos">Inativos ({stats.inativos})</TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading"></div>
          <p className="text-lg ml-2">Carregando usuários...</p>
        </div>
      ) : filteredUsuarios.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nenhum usuário encontrado</h2>
            <p className="text-muted-foreground">
              {searchTerm ? "Tente ajustar os filtros de busca." : "Não há usuários para esta categoria."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredUsuarios.map((usuario) => (
            <Card key={usuario.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{usuario.nome}</CardTitle>
                      <CardDescription className="flex items-center mt-1 space-x-4">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {usuario.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {usuario.telefone}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={usuario.ativo ? "default" : "secondary"}>
                      {usuario.ativo ? "Ativo" : "Inativo"}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium">CPF:</span>
                    <p className="text-muted-foreground">{usuario.cpf}</p>
                  </div>
                  <div>
                    <span className="font-medium">Data de Cadastro:</span>
                    <p className="text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(usuario.dataCadastro)}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Total de Denúncias:</span>
                    <p className="text-muted-foreground">{usuario.totalDenuncias}</p>
                  </div>
                  <div>
                    <span className="font-medium">Último Acesso:</span>
                    <p className="text-muted-foreground">{formatDate(usuario.ultimoAcesso)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
