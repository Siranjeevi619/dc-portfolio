import education from "@/data/education.json"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Education() {

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="mb-12">
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </ScrollAnimation>
        <div className="space-y-8">
          {education.map((item, idx) => (
            <ScrollAnimation key={idx} animation="fade-up" delay={idx * 0.1} className="pb-8 border-b border-border last:border-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-muted-foreground mt-2">{item.field}</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.institution} • {item.location}
                  </p>
                  {item.thesis && <p className="text-muted-foreground mt-3 text-sm italic">Thesis: {item.thesis}</p>}
                  {item.honor && <p className="text-primary font-medium text-sm mt-2">{item.honor}</p>}
                </div>
                <span className="text-muted-foreground font-medium whitespace-nowrap">{item.year}</span>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
