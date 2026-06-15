'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import type { AgentandMapProps } from "@/types/type"

const MotionImage = motion.create(Image)
const ImageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
}
const textVariants = {
  initial: { color: "#ffffff" },
  hover: { color: "#ff0000" },
  transition: { duration: 1.5 },
}
const mapVariants = {
  initial: { opacity: 0, y: 50 },   // y を小さく（200→50）
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
}

export const MapAgentMypage = ({ Map, Agent }: AgentandMapProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-full">
      {/* エージェント */}
      <div className="flex flex-col items-center">
        <MotionImage
          src={Agent.fullPortrait}
          alt={Agent.displayName}
          width={300}
          height={400}
          variants={ImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 1.5 }}
          className="w-[200px] h-[250px] md:w-[300px] md:h-[400px] object-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${Agent.role.displayIcon})`,
            backgroundSize: "150px",
            backgroundPosition: "top",
          }}
        />
        <h1 className="text-2xl md:text-3xl font-extrabold mt-2">
          {Agent.displayName}
        </h1>
      </div>

      {/* マップ */}
      <div className="relative w-full md:w-[800px]">
        <MotionImage
          src={Map.splash}
          alt={Map.displayName}
          width={800}
          height={200}
          className="object-cover rounded-3xl w-full h-[150px] md:h-[200px]"
          variants={mapVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="text-white text-2xl md:text-3xl absolute top-4 left-4"
          variants={textVariants}
        >
          {Map.displayName}
        </motion.h1>
      </div>
    </div>
  )
}