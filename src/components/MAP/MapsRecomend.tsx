'use client'
import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import type { MapAgent } from "@/types/type"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion.create(Link)

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
})

const textVariants = {
  initial: { color: "#ffffff" },
  hover: { color: "#ff0000" },
  transition: { duration: 1.5 },
}

const linkVariants = {
  initial: { opacity: 0, y: 200 },
  hover: { scale: 1.1 },
  transition: { duration: 1.5 },
}

type MapsRecomendProps = {
  MapsRecomend: MapAgent[]
  Vlength: number
  isLogin: boolean
}

const basepath = "/egents"

export const MapsRecomendparts = ({ MapsRecomend, Vlength, isLogin }: MapsRecomendProps) => {
  const isClickable = Vlength >= 10 && isLogin

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-2 gap-4 md:gap-10 w-full max-w-[1400px] mx-auto px-4 lg:px-0">
      {MapsRecomend.map((recomend: MapAgent) => {
        const inner = (
          <>
            <div className="relative w-full max-w-[450px] aspect-square mx-auto">
              <Image
                src={recomend.fullPortrait}
                alt="VALORANT"
                fill
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 40vw, 450px"
                className="object-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${recomend.roleIcon})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                }}
              />
            </div>
            <motion.h1
              className={`${valorantEgent.className} font-bold text-lg md:text-2xl`}
              variants={textVariants}
=======
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10 shrink-0 w-full lg:min-w-[1400px] px-4 lg:px-0 ">
      {Vlength >= 10 && isLogin ? (
        <>
          {MapsRecomend.map((recomend: MapAgent) => (
            <MotionLink
              className="flex flex-col items-center"
              key={recomend.uuid}
              href={`${basepath}/${recomend.uuid}`}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
>>>>>>> origin/main
            >
              {recomend.name}
            </motion.h1>
          </>
        )

        return isClickable ? (
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
            {inner}
          </MotionLink>
        ) : (
          <motion.div
            className="flex flex-col items-center"
            key={recomend.uuid}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {inner}
          </motion.div>
        )
      })}
    </div>
  )
}