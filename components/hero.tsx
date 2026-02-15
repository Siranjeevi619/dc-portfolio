"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import userInfo from "@/data/user-info.json"

import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <ScrollAnimation animation="blur-in" duration={1} className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src={userInfo.profileImage || "/placeholder.svg"}
              alt={userInfo.name}
              width={400}
              height={400}
              className="rounded-full shadow-2xl object-cover w-full h-full"
              priority
            />
          </ScrollAnimation>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <ScrollAnimation animation="fade-up" delay={0.2} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-gradient pb-2">{userInfo.name}</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-3xl">{userInfo.title}</p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">{userInfo.bio}</p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.4} className="flex justify-center md:justify-start gap-4 pt-8">
            <a
              href="#contact"
              className="px-6 py-3 text-primary-foreground bg-primary rounded-lg transition-all duration-300 font-medium hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href="#research"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium hover:border-primary group"
            >
              View Research
            </a>
          </ScrollAnimation>

          <ScrollAnimation
            animation="fade-up"
            delay={0.6}
            className="flex justify-center md:justify-start gap-6 pt-8 text-sm text-muted-foreground"
          >
            {userInfo.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition font-medium">
                {link.label}
              </a>
            ))}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
