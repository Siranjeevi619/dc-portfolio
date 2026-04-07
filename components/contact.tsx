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

        <div className="grid md:grid-cols-2 gap-12 text-left bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
          <div className="space-y-8">
            <div>
              <ScrollAnimation animation="fade-up" delay={0.2}>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:jothiprakashv@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                        jothiprakashv@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-up" delay={0.4}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Follow Research</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "ORCID", href: "https://orcid.org/0000-0002-5427-9460" },
                  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57214457052" },
                  { label: "ResearcherID", href: "https://www.webofscience.com/wos/author/record/AAP-1618-2021" }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <form name="contact" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
