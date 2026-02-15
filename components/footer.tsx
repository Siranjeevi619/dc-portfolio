"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("footer-content")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div id="footer-content" className={`max-w-7xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className={`${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <p className="text-sm leading-relaxed">
              Assistant Professor at Karpagam College of Engineering with expertise in AI, Deep Learning, and NLP.
            </p>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
            <h4 className="font-semibold text-foreground mb-4">Research Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#research" className="hover:text-primary transition">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-primary transition">
                  Deep Learning
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-primary transition">
                  Natural Language Processing
                </a>
              </li>
            </ul>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:jothiprakashv@gmail.com" className="hover:text-primary transition">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ORCID Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Scopus
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>Built with passion for excellence in AI research and education</p>
        </div>
      </div>
    </footer>
  )
}
