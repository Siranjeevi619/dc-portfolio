export function Publications() {
  const publications = [
    {
      year: 2025,
      title: "An integrated framework for emotion and sentiment analysis in Tamil and Malayalam visual content",
      journal: "Language Resources & Evaluation",
      type: "SCI/SCIE",
    },
    {
      year: 2024,
      title: "A comprehensive multimodal framework for optimizing social media hashtag recommendations",
      journal: "IEEE Transactions on Computational Social Systems",
      type: "SCI/SCIE",
    },
    {
      year: 2024,
      title: "A novel arctic fox survival strategy inspired optimization algorithm",
      journal: "Journal of Combinatorial Optimization",
      type: "SCI/SCIE",
    },
    {
      year: 2024,
      title: "A unified framework for analyzing textual context and intent in social media",
      journal: "ACM Transactions on Intelligent Systems and Technology",
      type: "SCI/SCIE",
    },
  ]

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Publications</h2>
        <p className="text-muted-foreground mb-12 text-lg">15 SCI/SCIE • 2 Scopus • 1 Book Chapter</p>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary transition group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground leading-relaxed">{pub.title}</h3>
                  <p className="text-muted-foreground mt-2">{pub.journal}</p>
                </div>
                <div className="flex gap-2 whitespace-nowrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded text-xs font-medium">{pub.type}</span>
                  <span className="text-muted-foreground font-medium">{pub.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10 text-center">
          <p className="text-muted-foreground mb-4">View all publications and research contributions</p>
          <a href="#" className="text-primary font-semibold hover:underline">
            See Complete Publication List →
          </a>
        </div>
      </div>
    </section>
  )
}
