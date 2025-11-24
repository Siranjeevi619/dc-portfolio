"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import userInfo from "@/data/user-info.json"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`flex justify-center ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <Image
              src={userInfo.profileImage || "/placeholder.svg"}
              alt={userInfo.name}
              width={320}
              height={320}
              className="rounded-full shadow-2xl object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">{userInfo.name}</h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl stagger-2">{userInfo.title}</p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed stagger-3">{userInfo.bio}</p>
          </div>

          <div className={`flex gap-4 pt-8 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}>
            <a
              href="#contact"
              className="px-6 py-3 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#0071e3" }}
            >
              Get in Touch
            </a>
            <a
              href="#research"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium hover:border-blue-600"
            >
              View Research
            </a>
          </div>

          <div
            className={`flex gap-6 pt-8 text-sm text-gray-600 ${isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"}`}
          >
            {userInfo.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-blue-600 transition font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
