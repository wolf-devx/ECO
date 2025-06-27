"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { ThemeToggle } from "./theme-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimes,
  faUser,
  faSignOutAlt,
  faUserShield,
  faLeaf,
  faGamepad,
  faExclamationTriangle,
  faPhone,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    closeMenu()
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="navbar bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <FontAwesomeIcon icon={faLeaf} className="text-eco-green-dark dark:text-eco-green-light" />
          <span className="text-foreground">Eco</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link href="/jogos" className="navbar-link">
            <FontAwesomeIcon icon={faGamepad} />
            Jogos
          </Link>
          <Link href="/denuncia" className="navbar-link">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Denúncias
          </Link>
          <Link href="/contato" className="navbar-link">
            <FontAwesomeIcon icon={faPhone} />
            Contato
          </Link>
          <Link href="/sobre" className="navbar-link">
            <FontAwesomeIcon icon={faInfoCircle} />
            Sobre
          </Link>
          <Link href="/ajuda" className="navbar-link">
            <FontAwesomeIcon icon={faQuestionCircle} />
            Ajuda
          </Link>
        </div>

        {/* Desktop Auth & Theme */}
        <div className="navbar-auth">
          <ThemeToggle />
          {user ? (
            <div className="user-menu">
              <Link href="/perfil" className="navbar-link">
                <FontAwesomeIcon icon={faUser} />
                {user.nome}
              </Link>
              {user.tipo === "admin" && (
                <Link href="/admin" className="navbar-link admin-link">
                  <FontAwesomeIcon icon={faUserShield} />
                  Admin
                </Link>
              )}
              <button onClick={handleLogout} className="navbar-link logout-btn">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link href="/login" className="navbar-link">
                Entrar
              </Link>
              <Link href="/cadastro" className="btn btn-primary">
                Cadastrar
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-container">
          <ThemeToggle />
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <Link href="/jogos" className="mobile-menu-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faGamepad} />
              Jogos
            </Link>
            <Link href="/denuncia" className="mobile-menu-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              Denúncias
            </Link>
            <Link href="/contato" className="mobile-menu-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faPhone} />
              Contato
            </Link>
            <Link href="/sobre" className="mobile-menu-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Sobre
            </Link>
            <Link href="/ajuda" className="mobile-menu-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              Ajuda
            </Link>

            <div className="mobile-menu-divider"></div>

            {user ? (
              <>
                <Link href="/perfil" className="mobile-menu-link" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faUser} />
                  {user.nome}
                </Link>
                {user.tipo === "admin" && (
                  <Link href="/admin" className="mobile-menu-link admin-link" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faUserShield} />
                    Admin
                  </Link>
                )}
                <button onClick={handleLogout} className="mobile-menu-link logout-btn">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="mobile-menu-link" onClick={closeMenu}>
                  Entrar
                </Link>
                <Link href="/cadastro" className="mobile-menu-link primary" onClick={closeMenu}>
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
