import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Research() {
  const interests = [
    {
      title: "Artificial Intelligence",
      description:
        "Designing hybrid intelligent systems, optimization algorithms (e.g., arctic fox-inspired), and AI-driven decision-making frameworks.",
    },
    {
      title: "Deep Learning",
      description:
        "Transformer architectures, multimodal learning, federated learning, and graph neural networks for healthcare and social media.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Multilingual sentiment analysis, cyberbullying detection, hope speech classification, and cross-lingual transfer learning for Tamil and Malayalam.",
    },
    {
      title: "Computational Intelligence",
      description:
        "Bio-inspired optimization, evolutionary feature selection, and ensemble models for cardiovascular and cancer disease prediction.",
    },
  ]

  const skills = [
    "J2SE/J2EE",
    "Python",
    "Spring Boot",
    "Hibernate",
    "Flask",
    "Django",
    "NoSQL Databases",
    "Apache Spark",
    "Zeppelin",
    "Java Frameworks",
    "MERN Stack",
  ]

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="mb-12">
          <h2 className="text-4xl font-bold text-foreground">Research & Skills</h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <ScrollAnimation animation="slide-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg hover-card transition">
                  <h4 className="font-semibold text-foreground">{interest.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{interest.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.2}>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up" delay={0.4} className="grid md:grid-cols-2 gap-12 mt-12 mb-12">
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <span className="p-2 bg-primary/20 rounded-lg text-primary text-sm tracking-widest">WIPRO</span> Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">★</span>
                <div>
                  <p className="text-foreground font-medium">1st Place (Gold Certificate)</p>
                  <p className="text-muted-foreground text-sm">All-India Big Data Project Competition, Wipro Technologies, Bangalore</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">★</span>
                <div>
                  <p className="text-foreground font-medium">1st Place (Gold Certificate)</p>
                  <p className="text-muted-foreground text-sm">All-India AI & ML Project Competition, Wipro Technologies, Bangalore</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">★</span>
                <div>
                  <p className="text-foreground font-medium">Anna University Rank Holder</p>
                  <p className="text-muted-foreground text-sm">6th Rank (M.Tech, May 2014)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">★</span>
                <div>
                  <p className="text-foreground font-medium">Best Faculty of the College</p>
                  <p className="text-muted-foreground text-sm">Cognizant Technology Solutions (April 2016)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground font-medium">Infosys Certified Python Trainer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground font-medium">Microsoft Certified Windows Network Services Trainer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">Advanced Technology Certified Faculty in Big Data, Wipro Limited</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">Advanced Technology Certified Faculty in AI/ML, Wipro Limited</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground font-medium">Wipro Certified Faculty (TalentNext)</span>
              </li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.6} className="bg-card p-10 rounded-2xl border border-border shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-foreground">Peer Reviewer</h3>
              <p className="text-muted-foreground mt-2">Active reviewer for SCI/SCIE and Scopus indexed journals</p>
            </div>
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-lg">
              21 Reviews Total
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Knowledge-Based Systems", count: 10 },
              { name: "Engineering Applications of AI", count: 3 },
              { name: "IEEE Trans. Comp. Social Systems", count: 2 },
              { name: "Biomedical Signal Processing", count: 2 },
              { name: "Expert Systems with Apps", count: 1 },
              { name: "IEEE Access", count: 1 },
              { name: "Multimedia Tools and Apps", count: 1 },
              { name: "Neural Computing & Apps", count: 1 },
            ].map((journal, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-between">
                <span className="text-sm font-semibold text-foreground leading-tight mb-3">{journal.name}</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded w-fit">{journal.count} reviews</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
