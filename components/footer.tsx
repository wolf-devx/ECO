import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-7 w-7 text-green-600" />
              <span className="text-xl font-bold">Eco</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Promovendo sustentabilidade e responsabilidade social através de tecnologia e educação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/jogos" className="text-muted-foreground hover:text-primary transition-colors">
                  Jogos
                </Link>
              </li>
              <li>
                <Link href="/denuncia/nova" className="text-muted-foreground hover:text-primary transition-colors">
                  Fazer Denúncia
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ajuda" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-servico" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Siga-nos nas redes</h3>
            <ul className="wrapper" style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px' }}>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-transform duration-200 hover:scale-110 text-muted-foreground hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="transition-transform duration-200 hover:scale-110 text-muted-foreground hover:text-black"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-transform duration-200 hover:scale-110 text-muted-foreground hover:text-pink-600"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="transition-transform duration-200 hover:scale-110 text-muted-foreground hover:text-purple-600"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  className="transition-transform duration-200 hover:scale-110 text-muted-foreground hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Projeto Eco. Todos os direitos reservados.</p>
          <div className="flex space-x-4 text-sm">
            <Link href="/termos-servico" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
