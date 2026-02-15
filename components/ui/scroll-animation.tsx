"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade-up" | "blur-in" | "scale-up" | "slide-left" | "slide-right"
  delay?: number
  duration?: number
  viewportAmount?: number
  once?: boolean
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  viewportAmount = 0.2,
  once = true,
  ...props
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: viewportAmount, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, viewportAmount])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "animate-fade-in-up"
      case "blur-in":
        return "animate-blur-in"
      case "scale-up":
        return "animate-scale-up"
      case "slide-left":
        return "animate-slide-in-left"
      case "slide-right":
        return "animate-slide-in-right"
      default:
        return "animate-fade-in-up"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? getAnimationClass() : "opacity-0")}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        willChange: "opacity, transform, filter",
      }}
      {...props}
    >
      {children}
    </div>
  )
}
