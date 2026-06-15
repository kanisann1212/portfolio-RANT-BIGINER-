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
  hover: { scale: 1.1 },
  transition: {
    duration: 1.5
  }
}

const textVariants = {
  initial: { color: "#ffffff" },
  hover: { color: "#ff0000" },
  transition: {
    duration: 1.5
  }
}


export const AnimationSkilofMap = ({ MapAgentInfo }: MAPofSKILProps) => {
  const MapOfAgent = AgentMapPattern[MapAgentInfo].maps

  return (
    <>
      {
        MapOfAgent.map((item) => {
          return (
            <MotionLink
              href={`${basepatMap}/${item.uuid}`}
              key={item.uuid}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl w-[800px] h-[200px] block overflow-hidden"
            >
              <Image
                src={item.splash}
                alt={item.displayName}
                width={800}
                height={200}
                className="object-cover rounded-3xl"
              />
              <motion.h1 
              className="text-white text-3xl absolute top-4 left-4"
              variants={textVariants}
              >{item.displayName}</motion.h1>
            </MotionLink>
          )
        })
      }
    </>
  )

}