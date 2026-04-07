"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function Counter({ end, duration = 2000, suffix = "", className }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (countRef.current) {
            observer.unobserve(countRef.current)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smooth animation (easeOutExpo)
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
      }

      setCount(Math.floor(easeOut(percentage) * end))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return (
    <span ref={countRef} className={cn("tabular-nums", className)}>
      {count}
      {suffix}
    </span>
  )
}
