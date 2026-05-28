'use client'
import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import type { MapAgent } from "@/types/type"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion.create(Link)

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

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

type MapsRecomendProps = {
  MapsRecomend: MapAgent[]
}
const basepath = "/egents"

export const MapsRecomendparts = ({ MapsRecomend }: MapsRecomendProps) => {
  return (
    <div className="grid grid-cols-3 gap-10 shrink-0 min-w-[1400px]">
      {MapsRecomend.map((recomend) => {
        return (
          <MotionLink
            className="flex flex-col items-center"
            key={recomend.uuid}
            href={`${basepath}/${recomend.uuid}`}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[450px] h-[450px]">
              <Image
                src={recomend.fullPortrait}
                alt="VALORANT"
                width={450}
                height={450}
                sizes="450px"
                className="object-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${recomend.roleIcon})`,
                  backgroundSize: "250px",
                  backgroundPosition: "top",
                }}
              />
            </div>
            <motion.h1
              className={`${valorantEgent.className} font-bold text-2xl`}
              variants={textVariants}
            >{recomend.name}</motion.h1>
          </MotionLink>
        )
      })}
    </div>
  )
}