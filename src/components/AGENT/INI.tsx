'use client'

import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


const variants = {
  initial: { x: 2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}
const MotionLink = motion.create(Link)
const linkVariants = {
  initial: { opacity: 0, y: 200 },
  hover: { scale: 1.1 },
  transition: {
    duration: 1.5
  }
}

export const INI = ({ A }: AProps) => {
  const basepath = "/egents"
  return (
    <>
      <motion.div
        className="relative mask-b-from-80% mask-t-from-70% h-[500px]"
        initial='initial'
        whileInView="animate"
        variants={variants}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          mass: 1,
          duration: 1
        }}
      >
        <Image
          src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/SOVA.jpg"
          alt="background"
          fill
          className="object-cover -z-10 "
          style={{ objectPosition: "0% 0%" }}
        />
        <h1
          className="text-black text-8xl absolute left-320 top-50 z-10"
          style={{ right: "500px", top: "200px" }}
        >INITIATOR</h1>
        <div className="grid  h-[500px] "
          style={{ gridTemplateColumns: 'repeat(7,120px)' }}>
          {A.map((sen: Agent) => {
            return (
              <MotionLink
                key={sen.uuid}
                className="text-black"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }}
                href={`${basepath}/${sen.uuid}`}
              >
                <div className="relative h-[500px] overflow-hidden border-4 border-white">
                  <Image
                    src={sen.displayIcon}
                    alt="VALORANT"
                    fill
                    className="object-cover"
                  />
                </div>
              </MotionLink>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}