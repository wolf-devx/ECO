"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"
import Link from "next/link"

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulação de login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verificação simples para demonstração
      if (formData.email.includes("admin")) {
        // Mock de usuário administrador
        const mockAdmin = {
          id: "admin1",
          name: "Administrador",
          email: "admin1@gmail.com",
          senha: "admin1",
          role: "admin" as const,
        }

        login(mockAdmin)
        router.push("/admin")
      } else {
        throw new Error("Credenciais de administrador inválidas")
      }
    } catch (err) {
      setError("Credenciais inválidas. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login Administrativo </CardTitle>
                <CardDescription className="text-center">
                    Acesso restrito para funcionários
                </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="p-3 bg-destructive/15 text-destructive text-sm rounded-md">{error}</div>}
    
                <div className="space-y-2">
                    <Label htmlFor="email" className="form-label">
                        E-mail
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu.email@eco.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
    
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="form-label"> Senha </Label>
                        <Link href="#" className="text-sm">
                        Esqueceu a senha?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
    
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                <Link href="/login" className="text-primary hover:underline">
                  Voltar para login de usuário
                </Link>
              </p>
            </CardFooter>
          </Card>
    </div>
  )
}