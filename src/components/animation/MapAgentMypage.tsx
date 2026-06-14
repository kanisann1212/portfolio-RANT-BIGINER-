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
  transition: {
    duration: 1.5
  }
}
const linkVariants = {
  initial: { opacity: 0, y: 200 },
  hover: { scale: 1.1 },
  transition: {
    duration: 1.5
  }
}



export const MapAgentMypage = ({ Map, Agent }: AgentandMapProps) => {
  return (
    <>
      <div className="flex">
        <div className="relative w-[500px] h-[400px] ">
          <div className="flex ">
          <MotionImage
            src={Agent.fullPortrait}
            alt="VALORANT"
            fill
            variants={ImageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 1.5 }}
            className="object-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${Agent.role.displayIcon})`,
              backgroundSize: "250px",
              backgroundPosition: "top",
            }}
          />
          <h1 className="text-3xl font-extrabold">{Agent.displayName}</h1>
          </div>
        </div>
        <div className="relative">
        <MotionImage
          src={Map.splash}
          alt={Map.displayName}
          width={800}
          height={200}
          className="object-cover rounded-3xl rounded-3xl w-[800px] h-[200px] block overflow-hidden"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.h1
          className="text-white text-3xl absolute top-4 left-4"
          variants={textVariants}
        >{Map.displayName}</motion.h1>
        </div>
      </div>
    </>
  )
}