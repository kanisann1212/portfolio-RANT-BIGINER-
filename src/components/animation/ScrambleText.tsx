'use client'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

export const ScrambleText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    gsap.to(".scrambleText", {
      duration: 2,
      scrambleText: {
        text: "{original}",
        chars: "upperCase",
        speed: 0.5,
      }
    })
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}