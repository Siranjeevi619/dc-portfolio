"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import config from "@/data/config.json"

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
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
      } border-b border-gray-200`}
      style={{ "--nav-color": config.colors.primary } as any}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition"
          style={{ color: config.colors.primary }}
        >
          {config.navbarTitle}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {config.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-gray-900 hover:text-gray-600 transition group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: config.colors.primary }}
              ></span>
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4 animate-fade-in-up">
          {config.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-gray-600 transition"
              style={{ color: config.colors.primary }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
