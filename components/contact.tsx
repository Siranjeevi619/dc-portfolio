import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollAnimation className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            I'm always interested in collaborating on research projects, speaking opportunities, or discussing AI and
            machine learning innovations.
          </p>
        </ScrollAnimation>

        <div className="space-y-8 mb-12">
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-muted-foreground mb-2">Email</p>
            <a href="mailto:jothiprakashv@gmail.com" className="text-primary text-lg font-semibold hover:underline">
              jothiprakashv@gmail.com
            </a>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <p className="text-muted-foreground mb-2">Phone</p>
            <a href="tel:+919677504541" className="text-primary text-lg font-semibold hover:underline">
              +91 9677504541
            </a>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.4}>
            <p className="text-muted-foreground mb-2">Location</p>
            <p className="text-lg font-semibold text-foreground">Coimbatore, Tamil Nadu, India</p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up" delay={0.5} className="flex gap-6 justify-center text-muted-foreground">
          <a href="#" className="hover:text-primary transition flex items-center gap-2 hover:scale-105 active:scale-95">
            <span>ORCID</span>
          </a>
          <a href="#" className="hover:text-primary transition flex items-center gap-2 hover:scale-105 active:scale-95">
            <span>Scopus</span>
          </a>
          <a href="#" className="hover:text-primary transition flex items-center gap-2 hover:scale-105 active:scale-95">
            <span>ResearcherID</span>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}
