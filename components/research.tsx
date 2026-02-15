export function Research() {
  const interests = [
    { title: "Artificial Intelligence", description: "Exploring machine learning and AI fundamentals" },
    { title: "Deep Learning", description: "Neural networks and advanced learning architectures" },
    { title: "Natural Language Processing", description: "Language understanding and sentiment analysis" },
    { title: "Computational Intelligence", description: "Evolutionary algorithms and optimization" },
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
        <h2 className="text-4xl font-bold mb-12 text-foreground">Research & Skills</h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition">
                  <h4 className="font-semibold text-foreground">{interest.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Certifications & Honors</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary">✓</span>{" "}
              <span className="text-muted-foreground">Advanced Technology Certified Faculty in Big Data, Wipro Limited (April 2022)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>{" "}
              <span className="text-muted-foreground">Advanced Technology Certified Faculty in AI/ML, Wipro Limited (June 2021)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span> <span className="text-muted-foreground">Wipro Certified Faculty (June 2016)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>{" "}
              <span className="text-muted-foreground">Best Faculty of the College, Cognizant Technology Solutions (April 2016)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span> <span className="text-muted-foreground">Anna University Rank Holder - 6th Rank (May 2014)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
