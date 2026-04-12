"use client"

import { BookOpen, Globe, Search, Award, Users, Trophy, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Counter } from "@/components/ui/counter"

export function About() {
  const stats = [
    {
      label: "Total Publications",
      value: 32,
      suffix: "",
      subtext: "From ORCID Profile",
      icon: <BookOpen className="w-5 h-5" />,
      delay: 0.1,
    },
    {
      label: "SCI / SCIE Journals",
      value: 25,
      suffix: "+",
      subtext: "Indexed Works",
      icon: <Globe className="w-5 h-5" />,
      delay: 0.2,
    },
    {
      label: "Academic Peer Reviews",
      value: 21,
      suffix: "",
      subtext: "Across 8 Journals",
      icon: <Search className="w-5 h-5" />,
      delay: 0.3,
    },
    {
      label: "Teaching Experience",
      value: 12,
      suffix: "+",
      subtext: "In Years (Since 2014)",
      icon: <Users className="w-5 h-5" />,
      delay: 0.4,
    },
  ]

  const achievements = [
    {
      title: "1st Place Gold Certificate",
      description: "All-India Big Data Project Competition, Wipro Technologies",
      icon: <Trophy className="w-4 h-4 text-yellow-500" />,
      bg: "bg-yellow-500/10",
    },
    {
      title: "1st Place Gold Certificate",
      description: "All-India AI & ML Project Competition, Wipro Technologies",
      icon: <Trophy className="w-4 h-4 text-yellow-500" />,
      bg: "bg-yellow-500/10",
    },
    {
      title: "Anna University Rank Holder",
      description: "6th Rank (M.Tech, May 2014)",
      icon: <Award className="w-4 h-4 text-primary" />,
      bg: "bg-primary/10",
    },
    {
      title: "Best Faculty of the College",
      description: "Cognizant Technology Solutions (April 2016)",
      icon: <Star className="w-4 h-4 text-green-500" />,
      bg: "bg-green-500/10",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">01 / ABOUT ME</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">A Passion for Learning & Innovation</h2>
            <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7 space-y-8">
            <ScrollAnimation animation="slide-right" className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                I am an Associate Professor in the Department of Information Technology at Karpagam College of
                Engineering, Coimbatore, with over a decade of teaching and research experience. I hold a Ph.D. in
                Information Technology from Anna University Chennai (2023), where my doctoral research focused on
                hybrid feature selection and deep ensemble models for cardiovascular disease classification.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                My research spans <span className="text-foreground font-medium">Deep Learning, Natural Language Processing, Sentiment Analysis, Soft Computing, Immersive Technologies, and Healthcare AI</span>.
                With 32 published works including papers in top-tier journals like <span className="font-bold text-foreground underline decoration-primary/30">IEEE Transactions and ACM Transactions</span>,
                I am committed to bridging academic rigor with real-world impact.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                Beyond research, I bring strong industry exposure from my time as a Systems Engineer at <span className="text-foreground font-medium">Infosys</span>.
                I hold multiple Wipro Advanced Technology certifications and achieved 1st place in two all-India team-based competitions,
                reflecting my passion for project-based, applied learning.
              </p>
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <ScrollAnimation key={stat.label} animation="scale-up" delay={stat.delay}>
                  <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/40 transition-all group relative overflow-hidden h-full shadow-sm hover:shadow-md">
                    <div className="absolute top-0 right-0 p-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2 flex items-baseline gap-1">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-foreground font-semibold text-sm mb-1">{stat.label}</p>
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-tight italic">
                      {stat.subtext}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fade-up" delay={0.5} className="mt-8">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 space-y-4">
                <p className="text-2xl font-bold text-foreground leading-relaxed text-center font-arima">
                  தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக் <br/> கற்றனைத் தூறும் அறிவு.
                </p>
                <p className="text-sm text-muted-foreground italic leading-relaxed text-center">
                  "In sandy soil, when deep you delve, you reach the springs below; <br/> 
                  The more you learn, the freer streams of wisdom flow"
                </p>
                <p className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest text-center border-t border-primary/10 pt-4">
                  — Kural 396, Thiruvalluvar
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animation="fade-up" delay={0.2}>
          <div className="border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Achievements Highlight
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex flex-col gap-4 items-start hover:border-primary/30 transition-all hover:shadow-lg group">
                  <div className={`p-2.5 rounded-xl ${item.bg} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-base leading-tight text-foreground mb-2">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
