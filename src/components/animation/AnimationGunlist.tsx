'use client'
import Image from "next/image"
import Link from "next/link"
import type { WeponType } from "@/types/type"
import { motion } from "framer-motion"
import Ticker from 'framer-motion-ticker'

type WepondataProps = {
  filterdWeponSkin: WeponType[]
}

const MotionLink = motion.create(Link)
const MotionImage = motion.create(Image)

export const AnimationGunlist = ({ filterdWeponSkin }: WepondataProps) => {
  const basepath = "/guns"

  const linkVariants = {
    initial: { opacity: 1 },
    hover: {
      scale: 1.1,
      color: "#00F5FF",
      backdropFilter: "blur(20px)",
      textShadow: [
        "0 0 8px #00F5FF, 0 0 20px #00F5FF",
        "0 0 12px #BF00FF, 0 0 30px #BF00FF, 0 0 50px #7B00FF",
        "0 0 8px #00F5FF, 0 0 20px #00F5FF",
      ],
      transition: { duration: 1 }
    }
  }

  const textVariants = {
    initial: { opacity:0 },
    hover: {
      color: "#00F5FF",
      opacity:1
    },
  }

  return (
    <div className="w-full mask-t-from-80% mask-b-from-90% bg-gradient-to-b from-blue-900 via-red-700 to-gray-800 ">
      <Ticker duration={30}>
        {filterdWeponSkin.map((wepon) => (
          <MotionLink
            href={`${basepath}/${wepon.uuid}`}
            key={wepon.uuid}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            style={{ display: "block", flexShrink: 0, margin: "0 12px" }}
          >
            <div
              style={{ width: "300px", height: "600px", position: "relative" }}
              className="overflow-hidden backdrop-blur-xl border rounded-3xl flex items-center justify-center mt-10 mb-10 "
            >
              <MotionImage
                src={wepon.displayIcon}
                alt={wepon.displayName}
                fill
                variants ={linkVariants}
                className="object-contain"
              />
              <motion.p
                className="font-bold  text-center p-2 text-3xl z-10"
                variants={textVariants}
              >
                {wepon.displayName}
              </motion.p>
            </div>
          </MotionLink>
        ))}
      </Ticker>
    </div>
  )
}