'use client'
import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const variants = {
  initial: { x: -200, opacity: 0 },
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

export const DUE = ({ A }: AProps) => {
  const basepath = "/egents"
  return (
    <>
      <motion.div
        className="relative md:mask-b-from-80% md:mask-t-from-70% min-h-[500px] md:h-[500px] overflow-hidden"
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
          src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/JETT.jpg"
          alt="background"
          fill
          className="hidden md:block object-cover -z-10" 
          style={{ objectPosition: "0% 0%" }}
        />
        <h1
          className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[20vw] z-10 text-5xl md:text-8xl font-black text-black pointer-events-none"
        >DUELIST</h1>
        <div className="relative z-20 flex flex-col md:flex-row w-full h-auto md:h-[500px]"
          >
          {A.map((sen: Agent) => {
            return (
              <MotionLink
                key={sen.uuid}
                className="w-full md:w-[120px] block"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                href={`${basepath}/${sen.uuid}`}
              >
                <div className="relative h-[120px] md:h-[500px] w-full overflow-hidden border-2 md:border-4 border-white">
                  <Image
                    src={sen.displayIcon}
                    alt="VALORANT"
                    fill
                     className="object-cover object-center md:object-center"
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