import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção de destaque */}
      <section className="bg-[#F5F5F5] dark:bg-[#121212] py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#212121] dark:text-[#E0F2F1]">
            Bem-vindo à Eco
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-[#BDBDBD] dark:text-[#E0F2F1]">
            Promovendo sustentabilidade e responsabilidade social através de
            jogos e denúncias ambientais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg bg-[#2E7D32] text-white hover:bg-[#A5D6A7]">
              <Link href="/denuncia/nova">Faça sua denúncia</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg border-[#B2DFDB]">
              <Link href="/jogos">Conheça nossos jogos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Missão da empresa */}
      <section className="py-12 bg-muted rounded-lg my-12 bg-[#F5F5F5] dark:bg-[#1E1E1E]">
        <div className="container mx-auto px-4]">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#212121] dark:text-[#E0F2F1]">Nossa Missão</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4 text-[#212121] dark:text-[#B2DFDB]">
              A Eco tem como missão promover a conscientização ambiental e
              facilitar a participação cidadã na proteção do meio ambiente.
            </p>
            <p className="text-lg text-[#212121] dark:text-[#B2DFDB]">
              Através de nossa plataforma de denúncias e jogos educativos,
              buscamos criar um impacto positivo e duradouro em nossa sociedade.
            </p>
          </div>
        </div>
      </section>

      {/* Links rápidos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#212121] dark:text-[#E0F2F1]">Links Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border bg-[#FFFFFF] dark:bg-[#1E1E1E] border-[#BDBDBD] dark:border-[#1E1E1E]">
              <h3 className="text-xl font-semibold mb-3 text-[#212121] dark:text-[#E0F2F1]">Sobre Nós</h3>
              <p className="mb-4 text-muted-foreground text-[#BDBDBD] dark:text-[#B2DFDB]">
                Conheça nossa história, valores e a equipe por trás da Eco.
              </p>
              <Button asChild variant="link" className="p-0 text-[#0277BD] dark:text-[#4FC3F7]">
                <Link href="/sobre">Saiba mais</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border bg-[#FFFFFF] dark:bg-[#1E1E1E] border-[#BDBDBD] dark:border-[#1E1E1E]">
              <h3 className="text-xl font-semibold mb-3 text-[#212121] dark:text-[#E0F2F1]">Jogos Educativos</h3>
              <p className="mb-4 text-muted-foreground text-[#BDBDBD] dark:text-[#B2DFDB]">
                Explore nossa coleção de jogos educativos sobre meio ambiente.
              </p>
              <Button asChild variant="link" className="p-0 text-[#0277BD] dark:text-[#4FC3F7]">
                <Link href="/jogos">Ver jogos</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border bg-[#FFFFFF] dark:bg-[#1E1E1E] border-[#BDBDBD] dark:border-[#1E1E1E]">
              <h3 className="text-xl font-semibold mb-3 text-[#212121] dark:text-[#E0F2F1]">Denúncias</h3>
              <p className="mb-4 text-muted-foreground text-[#BDBDBD] dark:text-[#B2DFDB]">
                Faça denúncias de problemas ambientais na sua região.
              </p>
              <Button asChild variant="link" className="p-0 text-[#0277BD] dark:text-[#4FC3F7]">
                <Link href="/denuncia/nova">Denunciar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
