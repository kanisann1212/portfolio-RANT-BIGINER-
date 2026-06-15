'use client'
import { AgentMapPattern } from "@/data/EgentMapPattern"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type MAPofSKILProps = {
  MapAgentInfo: string
}

const basepatMap = "/map"
const MotionLink = motion.create(Link)

const linkVariants = {
  initial: { opacity: 0, y: 200 },
  hover: { scale: 1.05 },
  transition: { duration: 1.5 },
}

const textVariants = {
  initial: { color: "#ffffff" },
  hover: { color: "#ff0000" },
  transition: { duration: 1.5 },
}

export const AnimationSkilofMap = ({ MapAgentInfo }: MAPofSKILProps) => {
  const MapOfAgent = AgentMapPattern[MapAgentInfo].maps

  return (
    <div className="flex flex-col gap-4 w-full px-4 lg:px-0">
      {MapOfAgent.map((item) => (
        <MotionLink
          href={`${basepatMap}/${item.uuid}`}
          key={item.uuid}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl w-full max-w-[800px] h-[120px] md:h-[200px] block overflow-hidden mx-auto"
        >
          <Image
            src={item.splash}
            alt={item.displayName}
            width={800}
            height={200}
            className="object-cover rounded-3xl w-full h-full"
          />
          <motion.h1
            className="text-white text-xl md:text-3xl absolute top-3 left-3 md:top-4 md:left-4"
            variants={textVariants}
          >
            {item.displayName}
          </motion.h1>
        </MotionLink>
      ))}
    </div>
  )
}