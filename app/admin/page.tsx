"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, Clock, FileText, MessageSquare, BarChart3 } from "lucide-react"

type DashboardStats = {
  totalUsuarios: number
  totalDenuncias: number
  denunciasPendentes: number
  denunciasResolvidas: number
  denunciasHoje: number
  atendimentosAbertos: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsuarios: 0,
    totalDenuncias: 0,
    denunciasPendentes: 0,
    denunciasResolvidas: 0,
    denunciasHoje: 0,
    atendimentosAbertos: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulação de carregamento de dados
    const fetchStats = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Dados simulados
        setStats({
          totalUsuarios: 1247,
          totalDenuncias: 89,
          denunciasPendentes: 23,
          denunciasResolvidas: 66,
          denunciasHoje: 5,
          atendimentosAbertos: 18,
        })
      } catch (error) {
        console.error("Erro ao carregar estatísticas:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="flex justify-center items-center h-64">
          <div className="loading"></div>
          <p className="text-lg ml-2">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard Administrativo</h1>
        <p className="text-muted">Visão geral do sistema e estatísticas</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsuarios.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Denúncias</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDenuncias}</div>
            <p className="text-xs text-muted-foreground">+{stats.denunciasHoje} hoje</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.denunciasPendentes}</div>
            <p className="text-xs text-muted-foreground">Aguardando atendimento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolvidas</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.denunciasResolvidas}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.denunciasResolvidas / stats.totalDenuncias) * 100)}% do total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Atendimentos
            </CardTitle>
            <CardDescription>Gerencie denúncias e atendimentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Atendimentos abertos:</span>
                <span className="font-semibold">{stats.atendimentosAbertos}</span>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/atendimentos">Ver Atendimentos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Usuários
            </CardTitle>
            <CardDescription>Gerencie usuários do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Usuários ativos:</span>
                <span className="font-semibold">{stats.totalUsuarios}</span>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/usuarios">Gerenciar Usuários</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Relatórios
            </CardTitle>
            <CardDescription>Visualize estatísticas e relatórios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Relatórios disponíveis:</span>
                <span className="font-semibold">8</span>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/relatorios">Ver Relatórios</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Denúncias Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Denúncias Recentes</CardTitle>
          <CardDescription>Últimas denúncias registradas no sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "1",
                titulo: "Descarte irregular de lixo",
                usuario: "João Silva",
                data: "2024-01-15",
                status: "pendente",
              },
              {
                id: "2",
                titulo: "Poluição sonora",
                usuario: "Anônimo",
                data: "2024-01-15",
                status: "em_analise",
              },
              {
                id: "3",
                titulo: "Desmatamento irregular",
                usuario: "Maria Santos",
                data: "2024-01-14",
                status: "resolvida",
              },
            ].map((denuncia) => (
              <div key={denuncia.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{denuncia.titulo}</h4>
                  <p className="text-sm text-muted-foreground">
                    Por: {denuncia.usuario} • {denuncia.data}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`badge ${
                      denuncia.status === "pendente"
                        ? "badge-warning"
                        : denuncia.status === "em_analise"
                          ? "badge-info"
                          : "badge-success"
                    }`}
                  >
                    {denuncia.status === "pendente"
                      ? "Pendente"
                      : denuncia.status === "em_analise"
                        ? "Em Análise"
                        : "Resolvida"}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/atendimentos/${denuncia.id}`}>Ver</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" asChild>
              <Link href="/admin/atendimentos">Ver Todas as Denúncias</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}