"use client"

import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, BookOpen, ExternalLink } from "lucide-react"
import publicationsData from "@/data/publications.json"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Publications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const summary = [
    { category: "Total Works", venue: "Journal articles + conferences + book chapter", count: "32" },
    { category: "SCI / SCIE Journals", venue: "Web of Science indexed", count: "25+" },
    { category: "Scopus Journals", venue: "Scopus indexed", count: "2" },
    { category: "Conference Papers", venue: "Springer Lecture Notes, IEEE", count: "3" },
    { category: "Book Chapter / Survey", venue: "Survey articles", count: "1" },
    { category: "Peer Reviews Given", venue: "Across 8 journals", count: "21" },
  ]

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollAnimation>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">04 / RESEARCH</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Publications</h2>
            <p className="text-muted-foreground text-lg mt-4 italic max-w-2xl">
              "Bridging academic rigor with real-world impact through high-impact research."
            </p>
          </ScrollAnimation>

          {/* Carousel Controls */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              aria-label="Previous Year"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              aria-label="Next Year"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

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

        {/* Year Quick Picker */}
        <div className="flex flex-wrap gap-2 mb-8 items-center bg-card/50 p-2 rounded-2xl border border-border w-fit">
          {publicationsData.map((group, idx) => (
            <button
              key={group.year}
              onClick={() => scrollTo(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedIndex === idx 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {group.year}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {publicationsData.map((group, gIdx) => (
              <div key={gIdx} className="flex-[0_0_100%] min-w-0 pr-4">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-lg font-bold">
                      {group.year}
                    </div>
                    <div className="h-px bg-border flex-1"></div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-lg">
                      {group.publications.length} Papers
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.publications.map((pub, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-card p-6 rounded-2xl border border-border hover:border-primary/40 transition-all group relative overflow-hidden flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider w-fit ${
                            pub.type === "Journal" 
                              ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                              : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                          }`}>
                            {pub.type}
                          </div>
                          <h4 className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-3">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-medium italic">
                            {pub.venue}
                          </p>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          {pub.doi ? (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 text-xs font-bold"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              View Publication
                            </a>
                          ) : (
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Full Text Pending</span>
                          )}
                          <BookOpen className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/30 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <ScrollAnimation animation="fade-up" className="mt-16 p-8 bg-card rounded-3xl border border-border text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Explore Full Profiles</h3>
            <p className="text-muted-foreground">
              For a complete, real-time repository of my scholarly contributions including all metrics and journal citations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://orcid.org/0000-0002-5427-9460"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              ORCID Profile <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57214457052"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-muted border border-border text-foreground rounded-xl font-bold hover:bg-card transition-all flex items-center gap-2"
            >
              Scopus ID <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
