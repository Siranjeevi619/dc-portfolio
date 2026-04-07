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
                I am an Associate Professor in the Department of Information Technology at Karpagam College of
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

              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Achievements Highlight</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-yellow-500/20 p-1 rounded">
                      <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">1st Place (Gold Certificate)</p>
                      <p className="text-xs text-muted-foreground">All-India Big Data Project Competition, Wipro Technologies, Bangalore</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-yellow-500/20 p-1 rounded">
                      <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">1st Place (Gold Certificate)</p>
                      <p className="text-xs text-muted-foreground">All-India AI & ML Project Competition, Wipro Technologies, Bangalore</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-500/20 p-1 rounded">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Anna University Rank Holder</p>
                      <p className="text-xs text-muted-foreground">6th Rank (M.Tech, May 2014)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-500/20 p-1 rounded">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Best Faculty of the College</p>
                      <p className="text-xs text-muted-foreground">Cognizant Technology Solutions (April 2016)</p>
                    </div>
                  </li>
                </ul>
              </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 gap-4">
            <ScrollAnimation animation="scale-up" delay={0.1}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={32} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">Total Publications</p>
                <p className="text-[10px] text-muted-foreground/60 italic">From ORCID Profile</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.2}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={25} suffix="+" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">SCI / SCIE Journals</p>
                <p className="text-[10px] text-muted-foreground/60 italic">Indexed Works</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.3}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={21} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">Academic Peer Reviews</p>
                <p className="text-[10px] text-muted-foreground/60 italic">Across 8 Journals</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={0.4}>
              <div className="bg-card p-6 rounded-lg border border-border hover-card transition group h-full">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={12} suffix="+" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">Teaching Experience</p>
                <p className="text-[10px] text-muted-foreground/60 italic">Since May 2014</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
