import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
}
