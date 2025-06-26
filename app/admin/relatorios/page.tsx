"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Download, Users, FileText, Activity } from "lucide-react"

type RelatorioData = {
  denunciasPorMes: { mes: string; total: number }[]
  denunciasPorCategoria: { categoria: string; total: number }[]
  usuariosAtivos: { mes: string; total: number }[]
  tempoMedioResolucao: number
  taxaResolucao: number
}

export default function RelatoriosAdmin() {
  const [data, setData] = useState<RelatorioData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Dados simulados
        setData({
          denunciasPorMes: [
            { mes: "Jan", total: 12 },
            { mes: "Fev", total: 19 },
            { mes: "Mar", total: 15 },
            { mes: "Abr", total: 22 },
            { mes: "Mai", total: 18 },
            { mes: "Jun", total: 25 },
          ],
          denunciasPorCategoria: [
            { categoria: "Poluição da Água", total: 25 },
            { categoria: "Descarte Irregular", total: 20 },
            { categoria: "Poluição Sonora", total: 15 },
            { categoria: "Desmatamento", total: 12 },
            { categoria: "Outros", total: 8 },
          ],
          usuariosAtivos: [
            { mes: "Jan", total: 150 },
            { mes: "Fev", total: 180 },
            { mes: "Mar", total: 220 },
            { mes: "Abr", total: 250 },
            { mes: "Mai", total: 280 },
            { mes: "Jun", total: 320 },
          ],
          tempoMedioResolucao: 5.2,
          taxaResolucao: 78.5,
        })
      } catch (error) {
        console.error("Erro ao carregar dados:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="flex justify-center items-center h-64">
          <div className="loading"></div>
          <p className="text-lg ml-2">Carregando relatórios...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Relatórios e Estatísticas</h1>
        <p className="text-muted">Visualize dados e métricas do sistema</p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio de Resolução</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.tempoMedioResolucao} dias</div>
            <p className="text-xs text-muted-foreground">-0.5 dias em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Resolução</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{data?.taxaResolucao}%</div>
            <p className="text-xs text-muted-foreground">+2.1% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Denúncias Este Mês</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+12% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320</div>
            <p className="text-xs text-muted-foreground">+14% em relação ao mês passado</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="denuncias" className="space-y-6">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="denuncias">Denúncias</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="denuncias" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Denúncias por Mês</CardTitle>
                <CardDescription>Evolução do número de denúncias ao longo do tempo</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {data?.denunciasPorMes.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="bg-primary rounded-t w-12" style={{ height: `${(item.total / 25) * 200}px` }}></div>
                    <span className="text-sm font-medium">{item.mes}</span>
                    <span className="text-xs text-muted-foreground">{item.total}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Crescimento de Usuários</CardTitle>
                <CardDescription>Evolução do número de usuários ativos</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {data?.usuariosAtivos.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div
                      className="bg-success rounded-t w-12"
                      style={{ height: `${(item.total / 320) * 200}px` }}
                    ></div>
                    <span className="text-sm font-medium">{item.mes}</span>
                    <span className="text-xs text-muted-foreground">{item.total}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categorias" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Denúncias por Categoria</CardTitle>
                <CardDescription>Distribuição das denúncias por tipo</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data?.denunciasPorCategoria.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded bg-primary"></div>
                      <span className="font-medium">{item.categoria}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(item.total / 25) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tempo de Resposta</CardTitle>
                <CardDescription>Tempo médio para primeira resposta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">2.3 horas</div>
                <p className="text-sm text-muted-foreground">Meta: menos de 4 horas</p>
                <div className="w-full bg-muted rounded-full h-2 mt-4">
                  <div className="bg-success h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Satisfação do Usuário</CardTitle>
                <CardDescription>Avaliação média dos atendimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">4.2/5.0</div>
                <p className="text-sm text-muted-foreground">Baseado em 156 avaliações</p>
                <div className="flex space-x-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className={`w-4 h-4 rounded ${star <= 4 ? "bg-warning" : "bg-muted"}`}></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}