'use client'

import type { midashiProps } from "@/types/type"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion.create(Link)


export const Midashi = ({ midashi, src, page }: midashiProps) => {
  const linkVariants = {
    initial: {},
    hover: {scale:1.1}
  }

  const textVariants = {
    initial: { color: "#ffffff" },
    hover: { color: "#ff0000" }
  }


  return (
    <div
      className="h-full rounded-3xl "
      >
      <MotionLink
        href={page}
        key={midashi}
        className='relative rounded-3xl block w-full'
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "800px",
        }}
      >

        <motion.h1
          className="text-white text-8xl absolute bottom-4 left-2"
          variants={textVariants}
        >{midashi}</motion.h1>
      </MotionLink>
    </div>
  )
}