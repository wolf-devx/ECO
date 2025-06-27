"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook as faFacebookBrand,
  faTwitter as faTwitterBrand,
  faInstagram as faInstagramBrand,
  faLinkedin as faLinkedinBrand,
} from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faLeaf} className="text-2xl text-green-600 dark:text-green-400" />
              <span className="text-2xl font-bold text-foreground">Eco</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Plataforma dedicada à preservação do meio ambiente através de denúncias colaborativas e educação ambiental
              interativa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookBrand} className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitterBrand} className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagramBrand} className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinBrand} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jogos" className="text-muted-foreground hover:text-primary transition-colors">
                  Jogos Educativos
                </Link>
              </li>
              <li>
                <Link href="/denuncia" className="text-muted-foreground hover:text-primary transition-colors">
                  Fazer Denúncia
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/ajuda" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <span>contato@eco.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                <span>
                  Rua das Árvores, 123
                  <br />
                  São Paulo - SP
                  <br />
                  CEP: 01234-567
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© {currentYear} Projeto Eco. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-servico" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
