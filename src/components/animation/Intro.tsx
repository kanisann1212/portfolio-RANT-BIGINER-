'use client'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ScrambleText from "./ScrambleText"

export const Intro = ({ children }: { children: React.ReactNode }) => {
  const [isIntro, setIsIntro] = useState(false)

  useEffect(() => {

      const hasVisited = sessionStorage.getItem("hasVisited")
    if (!hasVisited) {
      setIsIntro(true)
      sessionStorage.setItem("hasVisited", "true")
    }
  
    const timer = setTimeout(() => {
      setIsIntro(false)
    }, 5000)  
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isIntro && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{
              scale: 20,  
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" }
            }}
          >
            <ScrambleText className={"text-3xl"}>RANT BEGINNER</ScrambleText>
          </motion.div>
        )}
      </AnimatePresence>

    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  )
}