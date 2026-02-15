"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import config from "@/data/config.json"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-md"
      } border-b border-border`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition text-primary hover:text-primary/80"
        >
          {config.navbarTitle}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {config.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4 animate-fade-in-up">
          {config.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
