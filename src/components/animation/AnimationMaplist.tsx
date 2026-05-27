'use client'
import type { MapType } from "@/types/type"
import Link from "next/link"
import { motion } from "framer-motion"

type BattleMapProps = {
  BattleMap: MapType[]
}
const MotionLink = motion.create(Link)

export const AnimationMaplist = ({ BattleMap }: BattleMapProps) => {
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

  const basepath = "/map"
  const SpanStyles: string[] = [
    "row-span-2 col-span-1",
    "col-span-2",
    "col-span-2",
    "col-span-2",
    "row-span-3 col-span-1",
    "col-span-2",
    "col-span-2",
    "col-span-1 row-span-2",
    "col-span-2",
    "col-span-2",
    "row-span-1",
    "col-span-2",
  ]
  return (
    <div className="grid grid-cols-3 gap-8 m-10">
      {BattleMap.map((item, index) => {
        return (
          <MotionLink
            href={`${basepath}/${item.uuid}`}
            key={item.uuid}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className={`relative rounded-3xl ${SpanStyles[index % SpanStyles.length]} `}
            style={{
              backgroundImage: `url(${item.splash})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "200px",
            }}
          >
            <motion.h1
              className="text-white text-3xl absolute top-4 left-4"
              variants={textVariants}
            >{item.displayName}</motion.h1>
          </MotionLink>
        )
      })}
    </div>

  )
}