"use client"

import publicationsData from "@/data/publications.json"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Publications() {
  const summary = [
    { category: "Total Works", venue: "Journal articles + conferences + book chapter", count: "32" },
    { category: "SCI / SCIE Journals", venue: "Web of Science indexed", count: "25+" },
    { category: "Scopus Journals", venue: "Scopus indexed", count: "2" },
    { category: "Conference Papers", venue: "Springer Lecture Notes, IEEE", count: "3" },
    { category: "Book Chapter / Survey", venue: "Survey articles", count: "1" },
    { category: "Peer Reviews Given", venue: "Across 8 journals", count: "21" },
  ]

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Publications</h2>
          <p className="text-muted-foreground text-lg italic">
            "Bridging academic rigor with real-world impact through high-impact research."
          </p>
        </ScrollAnimation>

        {/* Summary Table */}
        <ScrollAnimation animation="fade-up" className="mb-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-4 text-sm font-semibold text-foreground uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground uppercase tracking-wider">Venues / Notes</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground uppercase tracking-wider text-right">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {summary.map((item, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{item.venue}</td>
                    <td className="px-6 py-4 text-sm font-bold text-primary text-right">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollAnimation>

        {/* Publications List Grouped by Year */}
        <div className="space-y-16">
          {publicationsData.map((group, gIdx) => (
            <div key={gIdx} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-primary">{group.year}</h3>
                <div className="h-px bg-primary/20 flex-1"></div>
              </div>
              <div className="space-y-6">
                {group.publications.map((pub, pIdx) => (
                  <ScrollAnimation
                    key={pIdx}
                    animation="fade-up"
                    delay={pIdx * 0.05}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-lg text-card-foreground leading-snug group-hover:text-primary transition-colors">
                          {pub.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{pub.venue}</span>
                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              DOI: {pub.doi}
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          pub.type === "Journal" 
                            ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                            : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                        }`}>
                          {pub.type}
                        </span>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-primary/5 rounded-3xl border border-primary/10 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Detailed Publication Profiles</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Access the complete, up-to-date repository of my scholarly contributions via ORCID and Scopus.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://orcid.org/0000-0002-5427-9460"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              See Complete ORCID List
            </a>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57214457052"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-border text-foreground rounded-xl font-bold hover:bg-muted transition-all"
            >
              View on Scopus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
