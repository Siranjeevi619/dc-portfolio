"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import userInfo from "@/data/user-info.json"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ResumeTemplate } from "@/components/resume-template"
import { generateResumePDF } from "@/lib/resume-generator"

export function Hero() {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadCV = async () => {
    if (!resumeRef.current || isGenerating) return
    setIsGenerating(true)
    try {
      await generateResumePDF(resumeRef.current)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <ScrollAnimation
            animation="blur-in"
            duration={1}
            className="relative w-80 h-96 md:w-[480px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="w-full h-full">
              <Image
                src={userInfo.profileImage || "/placeholder.svg"}
                alt={userInfo.name}
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <ScrollAnimation animation="fade-up" delay={0.2} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-gradient pb-2">
              {userInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-3xl">{userInfo.title}</p>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fade-up"
            delay={0.4}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-8"
          >
            <a
              href="#contact"
              className="px-6 py-3 text-primary-foreground bg-primary rounded-lg transition-all duration-300 font-medium hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
            <button
              onClick={handleDownloadCV}
              disabled={isGenerating}
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-medium hover:scale-105 active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              )}
              {isGenerating ? "Generating..." : "Download CV"}
            </button>
            <a
              href="#publications"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium hover:border-primary group"
            >
              View Research
            </a>
          </ScrollAnimation>

          {/* Hidden Resume Template for PDF generation */}
          <ResumeTemplate ref={resumeRef} />

          <ScrollAnimation
            animation="fade-up"
            delay={0.6}
            className="flex justify-center md:justify-start gap-6 pt-8 text-sm text-muted-foreground"
          >
            {userInfo.socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
