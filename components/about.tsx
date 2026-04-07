import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Counter } from "@/components/ui/counter"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-right" className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">About</h2>
              <p className="leading-relaxed">
                I am an Assistant Professor in the Department of Information Technology at Karpagam College of
                Engineering, Coimbatore, with over a decade of teaching and research experience. I hold a Ph.D. in
                Information Technology from Anna University Chennai (2023), where my doctoral research focused on
                hybrid feature selection and deep ensemble models for cardiovascular disease classification.
              </p>
              <p className="leading-relaxed">
                My research spans Deep Learning, Natural Language Processing, Sentiment Analysis, Soft Computing,
                Immersive Technologies, and Healthcare AI. With 32 published works — including papers in IEEE
                Transactions on Pattern Analysis and Machine Intelligence, IEEE Journal of Biomedical and Health
                Informatics, ACM Transactions, and Knowledge-Based Systems — I am committed to bridging academic rigor
                with real-world impact.
              </p>
              <p className="leading-relaxed">
                Beyond research, I bring strong industry exposure: I served as a Systems Engineer at Infosys and hold
                multiple Wipro Advanced Technology certifications in AI/ML and Big Data. I achieved 1st place in two
                all-India team-based competitions organised by Wipro Technologies, earning Gold Certificates in both
                Big Data and AI/ML — a recognition of my passion for project-based, applied learning.
              </p>
              <p className="leading-relaxed">
                I am an active member of both IEEE and ACM, and serve as a peer reviewer for journals including
                Knowledge-Based Systems, Expert Systems with Applications, IEEE Access, and Neural Computing &
                Applications.
              </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 gap-4">
            <ScrollAnimation animation="scale-up" delay={0.1}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={32} />
                </div>
                <p className="text-muted-foreground text-sm">Total Publications</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.2}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={25} suffix="+" />
                </div>
                <p className="text-muted-foreground text-sm">SCI / SCIE Journals</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.3}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={21} />
                </div>
                <p className="text-muted-foreground text-sm">Peer Reviews Given</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.4}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={12} suffix="+" />
                </div>
                <p className="text-muted-foreground text-sm">Teaching Experience (Years)</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
