"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"

interface AdminRouteProps {
  children: React.ReactNode
}

export function AdminRoute({ children }: AdminRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login/admin")
      } else if (user.role !== "admin") {
        router.push("/")
      }
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="container flex justify-center items-center min-h-screen">
        <div className="loading"></div>
        <p className="text-lg ml-2">Carregando...</p>
      </div>
    )
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Acesso Negado</h1>
          <p className="text-muted-foreground mb-6">Você não tem permissão para acessar esta área.</p>
          <button onClick={() => router.push("/")} className="btn btn-primary">
            Voltar ao Início
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}