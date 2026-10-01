import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main>
      {/* Monte as seções da landing page aqui. */}
      <header>
          <nav>
              <Button>
                Portfolio
              </Button>
              <Button>
                Conhecimentos
              </Button>
              <Button>
                Contato
              </Button>
          </nav>
      </header>
      <section aria-label="hero-page">
        <p>Usando a tecnologia para realizar os seus desejos.</p>
      </section>
      <section aria-label="portfolio">

      </section>
      <section aria-label="tecnologias">

      </section>
      <section arial-label="contato">

      </section>
      <footer>
        <span>GenieCode - Todos os direitos reservados</span>
        <span>Email: ruaan.ram@gmail.com</span>
      </footer>
    </main>
  );
}
