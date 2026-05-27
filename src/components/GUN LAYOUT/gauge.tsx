'use client'
import { useEffect } from "react"
import { motion, animate, useMotionValue } from "framer-motion"

type GaugeProps = {
  label: string,
  value: number,
  max: number
  reverse?: boolean,
}

export const Gauge = ({ label, value, max, reverse = false }: GaugeProps) => {

  const count = useMotionValue(0)

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 3,
      ease: "easeOut",
    })
    return controls.stop
  }, [])

  const percent = reverse
    ? Math.min(100 - (value / max) * 100, 100)
    : Math.min((value / max) * 100, 100)
  return (
    <div className="mb-2 border-r-4 p-10 w-full">
      <div className="flex flex-col text-2xl mb-1">
        <span className="text-center mb-5 break-words min-w-0">{label}</span>
        <motion.span>{ count }</motion.span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="bg-red-500 h-2 rounded-full"
          style={{ originX: 0 }}
        />
      </div>
    </div>
  )
}